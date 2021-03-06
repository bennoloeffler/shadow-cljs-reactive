(ns comp.click-counter
 (:require
   [reagent.core :as r]))

(def counter (r/atom 0))

; using a global atom makes every component share one state...
(defn click-counter []
  [:div [:input {:type "button" :value "click!"
                 :on-click #(swap! counter inc)}]
   [:code " @counter"] " has value: " @counter])
      
