(ns ^:figwheel-always orbital-solution.core
  (:require [reagent.core :as reagent :refer [atom]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


(enable-console-print!)

(def w 500)
(def h 500)

(defn setup []
  (q/hint :disable-opengl-errors)
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/smooth)
  (q/no-stroke)
  {:angle 0})

(defn update-state [state]
    {:angle (mod (+ (:angle state) 0.03) q/TWO-PI)})

(defn draw-state [state]
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2) 100]
    (q/directional-light 0 0 255 150 100 -500)

    (q/light-specular 0 0 200)
    (q/specular 0 0 70)

    (q/begin-camera)
    (q/rotate-y (:angle state))
    (q/scale 1.2)

    (q/background 0)
    ;;(q/background-image "orbit_background.png")

    (q/push-matrix)
    (q/translate 0 20 120)
    (q/stroke 7 193 255)
    (q/fill 7 193 255)
    (q/sphere 5)
    (q/pop-matrix)

    (q/push-matrix)
    (q/translate 0 0 100)
    (q/stroke 7 193 255)
    (q/fill 7 193 255)
    (q/sphere 5)
    (q/pop-matrix)

    (q/push-matrix)
    (q/translate 0 0 0)
    (q/no-stroke)
    (q/fill 0 0 255)
    (q/sphere 100)
    (q/pop-matrix)

    (q/push-matrix)
    (q/stroke 7 193 255)
    (q/stroke-weight 2)
    (q/line 0 0 100 0 20 120)
    (q/pop-matrix)

    (q/end-camera)


    ))


(q/defsketch begin-animation
  :setup  setup
  :update update-state
  :draw   draw-state
  :host "my-canvas"
  :no-start true
  :middleware [m/fun-mode]
  :size [w h]
  :bgcolor "#000000"
  :renderer :p3d
 )


(defn app []
  (reagent/create-class
    {:reagent-render (fn [] [:div
                             [:h1 "Orbital Solution"]
                             [:div#description
                              [:p "This is an epic solution to the " [:a {:href "https://reaktor.com/orbital-challenge/"} "Orbital Challenge"] "."]
                              [:p "Source Code Available on the " [:a {:href "https://github.com/jleikko/orbital-solution"} "GitHub"] "."]
                              ]
                             [:p [:button {:onClick #(.log js/console "generate")} "Generate new challenge"]]
                             [:div#input-data [:textarea {:rows "22" :cols "80"}]]
                                                          [:p [:button {:onClick #(.log js/console "resolve")} "Resolve satellite routing"]]
                             [:canvas#my-canvas {:width w :height h}]
                             [:audio#soundtrack {:src "sounds/syna.mp3" :autoPlay "autoplay" :loop "loop"}]])
     :component-did-mount begin-animation}))

(reagent/render-component
  [app]
  (. js/document (getElementById "app")))

