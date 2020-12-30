(ns comp.click-counter
 (:require
   [reagent.core :as r]))

(def counter (r/atom 0))

(defn click-counter []
  [:div [:input {:type "button" :value "click!"
                 :on-click #(swap! counter inc)}]
   [:code " @counter"] " has value: " @counter])
      
