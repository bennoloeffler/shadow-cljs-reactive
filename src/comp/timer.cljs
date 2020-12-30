(ns comp.timer
 (:require
   [reagent.core :as r]))

(defn timer [start]
  (let [time-sec (r/atom start)]
    (fn [] 
      (js/setTimeout #(swap! time-sec inc) 1000)
      [:div "seconds: " @time-sec])))
