(ns orbit.common
  (:require [clojure.set :refer [difference]]))


;; CONSTANTS

(def earth-radius 6371)

(def machine-epsilon 1e-10)

(def data-file-url "https://space-fast-track.herokuapp.com/generate")

(def phone-altitude 0.001)


;; HELPERS

(defn approx=
  "Return true if the absolute value of the difference between x and y
   is less than the machine epsilon. Otherwise returns false."
  [x y]
  (< (.abs js/Math (- x y)) machine-epsilon))

(defn get-double [array index]
  (js/parseFloat (get array index)))

(defn list-complement [main-list items-to-remove]
  (vec (difference (set main-list) (set items-to-remove))))

(defn sqrt [x]
  (.sqrt js/Math x))

(defn expt [x]
  (.pow js/Math x))
