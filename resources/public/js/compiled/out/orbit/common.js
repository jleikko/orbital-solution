// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbit.common');
goog.require('cljs.core');
goog.require('clojure.set');
orbit.common.earth_radius = (6371);
orbit.common.machine_epsilon = 1.0E-10;
orbit.common.data_file_url = "https://space-fast-track.herokuapp.com/generate";
orbit.common.phone_altitude = 0.001;
/**
 * Return true if the absolute value of the difference between x and y
 * is less than the machine epsilon. Otherwise returns false.
 */
orbit.common.approx_EQ_ = (function orbit$common$approx_EQ_(x,y){
return (Math.abs((x - y)) < orbit.common.machine_epsilon);
});
orbit.common.get_double = (function orbit$common$get_double(array,index){
return parseFloat(cljs.core.get.call(null,array,index));
});
orbit.common.list_complement = (function orbit$common$list_complement(main_list,items_to_remove){
return cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,main_list),cljs.core.set.call(null,items_to_remove)));
});
orbit.common.sqrt = (function orbit$common$sqrt(x){
return Math.sqrt(x);
});
orbit.common.expt = (function orbit$common$expt(x){
return Math.pow(x);
});

//# sourceMappingURL=common.js.map?rel=1463433289030