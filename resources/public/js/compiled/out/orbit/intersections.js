// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbit.intersections');
goog.require('cljs.core');
goog.require('orbit.common');
orbit.intersections.get_a = (function orbit$intersections$get_a(x1,x2,y1,y2,z1,z2){
return ((orbit.common.expt.call(null,(x2 - x1),(2)) + orbit.common.expt.call(null,(y2 - y1),(2))) + orbit.common.expt.call(null,(z2 - z1),(2)));
});
orbit.intersections.get_b = (function orbit$intersections$get_b(x1,x2,y1,y2,z1,z2){
return (((((2) * x1) * (x2 - x1)) + (((2) * y1) * (y2 - y1))) + (((2) * z1) * (z2 - z1)));
});
orbit.intersections.get_c = (function orbit$intersections$get_c(x1,y1,z1,r){
return (((orbit.common.expt.call(null,x1,(2)) + orbit.common.expt.call(null,y1,(2))) + orbit.common.expt.call(null,z1,(2))) - orbit.common.expt.call(null,r,(2)));
});
orbit.intersections.get_x = (function orbit$intersections$get_x(x1,x2,t){
return (((x2 - x1) * t) + x1);
});
orbit.intersections.get_y = (function orbit$intersections$get_y(y1,y2,t){
return (((y2 - y1) * t) + y1);
});
orbit.intersections.get_z = (function orbit$intersections$get_z(z1,z2,t){
return (((z2 - z1) * t) + z1);
});
orbit.intersections.quatratic_equation_has_roots_QMARK_ = (function orbit$intersections$quatratic_equation_has_roots_QMARK_(a,b,c){
return true;
});
orbit.intersections.get_one_quatratic_equation_root = (function orbit$intersections$get_one_quatratic_equation_root(a,b,c){
return (((- b) + orbit.common.sqrt.call(null,(orbit.common.expt.call(null,b,(2)) - (((4) * a) * c)))) / ((2) * a));
});
orbit.intersections.is_between_QMARK_ = (function orbit$intersections$is_between_QMARK_(target,value1,value2){
var correct_order = (value1 < value2);
var boundary1 = ((correct_order)?value1:value2);
var boundary2 = ((correct_order)?value2:value1);
return ((target > boundary1)) && ((target < boundary2));
});
orbit.intersections.is_intersection_between_points_QMARK_ = (function orbit$intersections$is_intersection_between_points_QMARK_(x1,x2,y1,y2,z1,z2,a,b,c){
var t = orbit.intersections.get_one_quatratic_equation_root.call(null,a,b,c);
var x_earth = orbit.intersections.get_x.call(null,x1,x2,t);
var y_earth = orbit.intersections.get_y.call(null,y1,y2,t);
var z_earth = orbit.intersections.get_z.call(null,z1,z2,t);
var between_x = orbit.intersections.is_between_QMARK_.call(null,x_earth,x1,x2);
var between_y = orbit.intersections.is_between_QMARK_.call(null,y_earth,y1,y2);
var between_z = orbit.intersections.is_between_QMARK_.call(null,z_earth,z1,z2);
var and__18420__auto__ = between_x;
if(cljs.core.truth_(and__18420__auto__)){
var and__18420__auto____$1 = between_y;
if(cljs.core.truth_(and__18420__auto____$1)){
return between_z;
} else {
return and__18420__auto____$1;
}
} else {
return and__18420__auto__;
}
});
orbit.intersections.is_earth_between_QMARK_ = (function orbit$intersections$is_earth_between_QMARK_(points){
var x1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,points,(0)));
var x2 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,points,(1)));
var y1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,points,(0)));
var y2 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,points,(1)));
var z1 = new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,points,(0)));
var z2 = new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,points,(1)));
var a = orbit.intersections.get_a.call(null,x1,x2,y1,y2,z1,z2);
var b = orbit.intersections.get_b.call(null,x1,x2,y1,y2,z1,z2);
var c = orbit.intersections.get_c.call(null,x1,y1,z1,orbit.common.earth_radius);
var line_intersects_earth = orbit.intersections.quatratic_equation_has_roots_QMARK_.call(null,a,b,c);
var and__18420__auto__ = line_intersects_earth;
if(cljs.core.truth_(and__18420__auto__)){
return orbit.intersections.is_intersection_between_points_QMARK_.call(null,x1,x2,y1,y2,z1,z2,a,b,c);
} else {
return and__18420__auto__;
}
});

//# sourceMappingURL=intersections.js.map?rel=1463433290487