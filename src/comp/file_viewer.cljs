(ns comp.file-viewer
 (:require
   [reagent.core :as r]))

; https://davelms.medium.com/5-ways-developers-can-embed-source-code-into-a-medium-article-f23b82cee30
(defn file-viewer [path]
  [:div  [:embed { :style {:width "400px" :heigth "600px"} :src path}]])
