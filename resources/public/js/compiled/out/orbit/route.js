// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbit.route');
goog.require('cljs.core');
goog.require('orbit.common');
goog.require('orbit.intersections');
orbit.route.hop_QMARK_ = cljs.core.memoize.call(null,(function (points){
return cljs.core.not.call(null,orbit.intersections.is_earth_between_QMARK_.call(null,points));
}));
orbit.route.find_routes = (function orbit$route$find_routes(var_args){
var args26610 = [];
var len__19501__auto___26613 = arguments.length;
var i__19502__auto___26614 = (0);
while(true){
if((i__19502__auto___26614 < len__19501__auto___26613)){
args26610.push((arguments[i__19502__auto___26614]));

var G__26615 = (i__19502__auto___26614 + (1));
i__19502__auto___26614 = G__26615;
continue;
} else {
}
break;
}

var G__26612 = args26610.length;
switch (G__26612) {
case 1:
return orbit.route.find_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return orbit.route.find_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26610.length)].join('')));

}
});

orbit.route.find_routes.cljs$core$IFn$_invoke$arity$1 = (function (data){
return orbit.route.find_routes.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calling","calling",-1879714471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phones","phones",232561938).cljs$core$IFn$_invoke$arity$1(data))], null));
});

orbit.route.find_routes.cljs$core$IFn$_invoke$arity$2 = (function (data,tail){
var try_branches = (function (){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__26609_SHARP_){
if(cljs.core.truth_(orbit.route.hop_QMARK_.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26609_SHARP_,cljs.core.last.call(null,tail)], null))))){
return orbit.route.find_routes.call(null,data,cljs.core.conj.call(null,tail,p1__26609_SHARP_));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),orbit.common.list_complement.call(null,new cljs.core.Keyword(null,"sats","sats",88532570).cljs$core$IFn$_invoke$arity$1(data),tail)));
});
var try_directly = ((function (try_branches){
return (function (){
if(cljs.core.truth_(orbit.route.hop_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,tail),new cljs.core.Keyword(null,"called","called",-2126645226).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phones","phones",232561938).cljs$core$IFn$_invoke$arity$1(data))], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,tail,new cljs.core.Keyword(null,"called","called",-2126645226).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phones","phones",232561938).cljs$core$IFn$_invoke$arity$1(data)))], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});})(try_branches))
;
var direct_route = try_directly.call(null);
if((cljs.core.count.call(null,direct_route) > (0))){
return direct_route;
} else {
return try_branches.call(null);
}
});

orbit.route.find_routes.cljs$lang$maxFixedArity = 2;
orbit.route.pick_optimal = (function orbit$route$pick_optimal(routes){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.count,routes));
});

//# sourceMappingURL=route.js.map?rel=1463433290523