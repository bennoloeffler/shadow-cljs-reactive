(ns comp.bmi
  (:require
   [reagent.core :as r]))


(def state (r/atom {:kg 91 :cm 177 :bmi 29.05}))

; BMI = (/ kg  (square (/ cm 100)))

(defn calc-kg [cm bmi]
  (* bmi (* (/ cm 100) (/ cm 100))))

(defn calc-cm [kg bmi]
  (* 100 (Math/sqrt (/ kg bmi))))

(defn calc-bmi [kg cm]
  (/ kg (* (/ cm 100) (/ cm 100))))

(defn s%f [precision num]
  (goog.string/format (str "%." precision "f") num))  

(defn calc-state [{:keys  [kg cm bmi]}]
  (cond 
    (nil? bmi) (swap! state assoc :bmi (calc-bmi kg cm))
    (nil? kg) (swap! state assoc :kg (calc-kg cm bmi))
    (nil? cm) (swap! state assoc :cm (calc-cm kg bmi))
    :else (swap! state assoc :bmi (calc-bmi kg cm)))) ; finally - make bmi consistent - even if available

(comment ;tests for calcer 
 (s%f 2 (calc-bmi 91 177))
 (s%f 1 (calc-kg 177 29.05))
 (s%f 0 (calc-cm 91 29.05))
 (calc-state @state))

; slider component
(defn slider [sym precision min max value invalidates]
  [:<>
   [:input {:type "range" :value value :min min :max max
            :style {:width "300px"} 
            :on-change (fn [e]
                         (let [new-value (js/parseInt (.. e -target -value))]
                           (swap! state assoc sym new-value)
                           (swap! state assoc invalidates nil)
                           (swap! state calc-state @state)))}]
   [:div {:style {:float "right"}} ( s%f precision (sym @state))]])

(defn bmi []
  (let [bmi (:bmi @state)
        [statement color] (cond (< bmi 18.5) ["too skinny" "red"]
                                (< bmi 25) ["totally ok" "lightgreen"]
                                (< bmi 30) ["a litte fat" "orange"]
                                :else ["definitely too fat" "red"])]
   [:div "BMI Calculator - your are " [:span {:style {:font-weight "bold" :color color}} statement] 
    [:table
     [:tbody
      [:tr [:td "cm"]  [:td [slider :cm 0 80 240 (:cm @state) :bmi]]]
      [:tr [:td "kg"]  [:td [slider :kg 1 20 200 (:kg @state) :bmi]]]
      [:tr [:td "bmi"] [:td [slider :bmi 2 5 70 (:bmi @state) :kg]]]]]
    [:a {:href "https://gist.github.com/bennoloeffler/93bb1436229f6dcb8a843505615cee4b"} "source"]]))

  
