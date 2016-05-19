(ns orbit.coords
  (:require [orbit.common :refer [earth-radius]]))


(defn radians [degrees]
  (* degrees (/ (aget js/Math "PI") 180)))

(defn radius [altitude]
  (+ earth-radius altitude))

(defn cartesian-x [alpha beta r]
  (* r (.cos js/Math alpha) (.cos js/Math beta)))

(defn cartesian-y [alpha beta r]
  (* r (.cos js/Math alpha) (.sin js/Math beta)))

(defn cartesian-z [alpha beta r]
  (* r (.sin js/Math alpha)))

(defn cartesian [lat lon alt]
  {:x (cartesian-x (radians lat)
                   (radians lon)
                   (radius alt))

   :y (cartesian-y (radians lat)
                   (radians lon)
                   (radius alt))

   :z (cartesian-z (radians lat)
                   (radians lon)
                   (radius alt))})
