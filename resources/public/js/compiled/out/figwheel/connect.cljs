(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [orbital-solution.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/orbital-solution.core.on-js-reload (apply js/orbital-solution.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'orbital-solution.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

