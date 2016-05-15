// Compiled by ClojureScript 1.8.34 {}
goog.provide('kil.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
kil.core.w = (400);
kil.core.h = (400);
kil.core.setup = (function kil$core$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),(1)], null);
});
kil.core.update = (function kil$core$update(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);
});
kil.core.draw = (function kil$core$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(0));

return quil.core.ellipse.call(null,cljs.core.rem.call(null,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state),kil.core.w),(46),(55),(55));
});
kil.core.foo = (function kil$core$foo(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"foo",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,kil.core.update))?(function() { 
var G__27409__delegate = function (args){
return cljs.core.apply.call(null,kil.core.update,args);
};
var G__27409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27410__i = 0, G__27410__a = new Array(arguments.length -  0);
while (G__27410__i < G__27410__a.length) {G__27410__a[G__27410__i] = arguments[G__27410__i + 0]; ++G__27410__i;}
  args = new cljs.core.IndexedSeq(G__27410__a,0);
} 
return G__27409__delegate.call(this,args);};
G__27409.cljs$lang$maxFixedArity = 0;
G__27409.cljs$lang$applyTo = (function (arglist__27411){
var args = cljs.core.seq(arglist__27411);
return G__27409__delegate(args);
});
G__27409.cljs$core$IFn$_invoke$arity$variadic = G__27409__delegate;
return G__27409;
})()
:kil.core.update),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kil.core.w,kil.core.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,kil.core.setup))?(function() { 
var G__27412__delegate = function (args){
return cljs.core.apply.call(null,kil.core.setup,args);
};
var G__27412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27413__i = 0, G__27413__a = new Array(arguments.length -  0);
while (G__27413__i < G__27413__a.length) {G__27413__a[G__27413__i] = arguments[G__27413__i + 0]; ++G__27413__i;}
  args = new cljs.core.IndexedSeq(G__27413__a,0);
} 
return G__27412__delegate.call(this,args);};
G__27412.cljs$lang$maxFixedArity = 0;
G__27412.cljs$lang$applyTo = (function (arglist__27414){
var args = cljs.core.seq(arglist__27414);
return G__27412__delegate(args);
});
G__27412.cljs$core$IFn$_invoke$arity$variadic = G__27412__delegate;
return G__27412;
})()
:kil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,kil.core.draw))?(function() { 
var G__27415__delegate = function (args){
return cljs.core.apply.call(null,kil.core.draw,args);
};
var G__27415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27416__i = 0, G__27416__a = new Array(arguments.length -  0);
while (G__27416__i < G__27416__a.length) {G__27416__a[G__27416__i] = arguments[G__27416__i + 0]; ++G__27416__i;}
  args = new cljs.core.IndexedSeq(G__27416__a,0);
} 
return G__27415__delegate.call(this,args);};
G__27415.cljs$lang$maxFixedArity = 0;
G__27415.cljs$lang$applyTo = (function (arglist__27417){
var args = cljs.core.seq(arglist__27417);
return G__27415__delegate(args);
});
G__27415.cljs$core$IFn$_invoke$arity$variadic = G__27415__delegate;
return G__27415;
})()
:kil.core.draw));
});
goog.exportSymbol('kil.core.foo', kil.core.foo);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26209__26210__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26209__26210__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),kil.core.foo,new cljs.core.Keyword(null,"host-id","host-id",742376279),"foo"], null));
}
kil.core.hello_world = (function kil$core$hello_world(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#foo","canvas#foo",1175422222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),kil.core.w,new cljs.core.Keyword(null,"height","height",1025178622),kil.core.h], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),kil.core.foo], null));
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kil.core.hello_world], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1463305609806