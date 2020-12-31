(ns starter.browser
  (:require
   [reagent.dom :as rd]
   [reagent.core :as r]
   [comp.calculator :as calc]
   [comp.click-counter :as click]
   [comp.timer :as timer]
   [comp.bmi :as bmi]
   [comp.file-viewer :as viewer]))

(defn app []
  [:<>
   [:div [calc/calc]]
   [:hr]
   [:div [viewer/file-viewer "counter_example.txt"]]
   [:div [click/click-counter]] ;same atom!
   [:div [click/click-counter]] ;same atom!
   [:hr]
   [:div
    [:div [viewer/file-viewer "timer_example.txt"]]
    [:div {:style {:float "left" :margin "20px"}} [timer/timer 0]] ;different atoms!
    [:div {:style {:float "left" :margin "20px"}} [timer/timer 10]]] ;different atoms!
   [:hr {:style {:clear "both"}}]
   [:div [bmi/bmi]]
   [:hr]])


(defn mount []
  (rd/render [app] (js/document.getElementById "app-root")))

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start")
  (mount))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))


