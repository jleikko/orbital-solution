// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('orbital_solution.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21991__delegate = function (x){
if(cljs.core.truth_(orbital_solution.core.on_js_reload)){
return cljs.core.apply.call(null,orbital_solution.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'orbital-solution.core/on-js-reload' is missing");
}
};
var G__21991 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21992__i = 0, G__21992__a = new Array(arguments.length -  0);
while (G__21992__i < G__21992__a.length) {G__21992__a[G__21992__i] = arguments[G__21992__i + 0]; ++G__21992__i;}
  x = new cljs.core.IndexedSeq(G__21992__a,0);
} 
return G__21991__delegate.call(this,x);};
G__21991.cljs$lang$maxFixedArity = 0;
G__21991.cljs$lang$applyTo = (function (arglist__21993){
var x = cljs.core.seq(arglist__21993);
return G__21991__delegate(x);
});
G__21991.cljs$core$IFn$_invoke$arity$variadic = G__21991__delegate;
return G__21991;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1463338671465