(ns comp.calculator
  (:require
   [reagent.core :as r]))


(def state (r/atom {:display "0" 
                    :operation "" 
                    :del-display false 
                    :buffer ""}))


(defn check-delete-display []
  (when (:del-display @state)
    (swap! state assoc :display "0")
    (swap! state assoc :del-display false)))


(defn add-num [symbol]
  (check-delete-display)
  (let [num (:display @state)
        added (if (= "0" num) symbol (str num symbol))
        _     (swap! state assoc :display added)]))


(defn s%f [precision num]
  (goog.string/format (str "%." precision "f") num))


(defn adapt-size [num]
  (let [max 8
        str-num (str num)
        len (count str-num)
        pnt (clojure.string/index-of str-num ".")]
    (if (> len max)
      (if (nil? pnt)
        "OVERFOW"
        (if (> pnt max)
          "OVERFLOW"
          (s%f (- max pnt) num)))
      str-num)))


(defn str-calc-a-op-b [the-op the-a the-b]
  (js/console.log "operation: " the-op " " the-a " " the-b)
  (let [a (js/parseFloat the-a)
        b (js/parseFloat the-b)]
    (adapt-size 
     (case the-op
       "+" (+ a b)
       "-" (- a b)
       "x" (* a b)
       "/" (/ a b)))))


(defn calc-op [symbol]
  (when (not= "" (:operation @state))
    (js/console.log "in when")
    (let [result (str-calc-a-op-b (:operation @state)
                                  (:buffer @state)
                                  (:display @state))]
      (swap! state assoc :display result)))
  (swap! state assoc :operation symbol)
  (swap! state assoc :del-display true)
  (swap! state assoc :buffer (:display @state)))


(defn the= []
    (calc-op ""))


(defn operation [symbol]
  (case symbol
    "C" (if (not= "" (:operation @state))
          (swap! state assoc :operation "")
          (swap! state assoc :display "0"))
    "%" (swap! state assoc :display (str-calc-a-op-b "/" (:display @state) "100"))
    "+/-" (swap! state assoc :display (str-calc-a-op-b "-" "0" (:display @state))) ; (str "-" (:display @state)))
    "=" (the=)
    (calc-op symbol)))


;; --- COMPONENTS ---

(defn get-op-color [symbol default]
  (if (= symbol (:operation @state))
    "black"
    default))


(defn display []
  [:div.display (:display @state)])


(defn anop [symbol color]
  [:div.akey {:style {:background-color (get-op-color symbol color)}
              :on-click #(operation symbol)} symbol])


(defn anum [symbol]
  [:div.akey {:on-click #(add-num symbol)} symbol])


(defn key0 []
  [:div.key0 {:on-click #(add-num "0")} "0"])


(defn akey [symbol color]
  [:div.akey {:style {:background-color color}
              :on-click #(add-num symbol)} symbol])


(defn calc [heading]
  [:div.text heading
   [:table
    [:tbody
     [:tr
      [:td {:colSpan 4} [display]]]
     [:tr
      [:td [anop "C" "lightgrey"]]
      [:td [anop "+/-" "lightgrey"]]
      [:td [anop "%" "lightgrey"]]
      [:td [anop "/" "orange"]]]
     [:tr
      [:td [akey "7"]]
      [:td [akey "8"]]
      [:td [akey "9"]]
      [:td [anop "x"  "orange"]]]
     [:tr
      [:td [akey "4"]]
      [:td [akey "5"]]
      [:td [akey "6"]]
      [:td [anop "-"  "orange"]]]
     [:tr
      [:td [akey "1"]]
      [:td [akey "2"]]
      [:td [akey "3"]]
      [:td [anop "+"  "orange"]]]
     [:tr
      [:td {:colSpan 2} [key0]]
      [:td [akey "."]]
      [:td [anop "="  "orange"]]]]]])
