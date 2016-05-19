(ns orbital-solution.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [orbit.common-test]
            [orbit.coords-test]
            [orbit.core-test]
            [orbit.intersections-test]
            [orbit.route-test]))

(doo-tests 'cv.common-test
           'cv.coords-test
           'cv.core-test
           'cv.intersections-test
           'cv.route-test)
