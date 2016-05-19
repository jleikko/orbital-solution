// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbital_solution.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('orbit.core');
cljs.core.enable_console_print_BANG_.call(null);
orbital_solution.core.w = (500);
orbital_solution.core.h = (500);
orbital_solution.core.setup = (function orbital_solution$core$setup(){
quil.core.hint.call(null,new cljs.core.Keyword(null,"disable-opengl-errors","disable-opengl-errors",506822839));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.smooth.call(null);

quil.core.no_stroke.call(null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
orbital_solution.core.update_state = (function orbital_solution$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.03),quil.core.TWO_PI)], null);
});
orbital_solution.core.draw_state = (function orbital_solution$core$draw_state(state){
var tr__20163__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)),(100)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__20163__auto__);

quil.core.directional_light.call(null,(0),(0),(255),(150),(100),(-500));

quil.core.light_specular.call(null,(0),(0),(200));

quil.core.specular.call(null,(0),(0),(70));

quil.core.begin_camera.call(null);

quil.core.rotate_y.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state));

quil.core.scale.call(null,1.2);

quil.core.background.call(null,(0));

quil.core.push_matrix.call(null);

quil.core.translate.call(null,(0),(20),(120));

quil.core.stroke.call(null,(7),(193),(255));

quil.core.fill.call(null,(7),(193),(255));

quil.core.sphere.call(null,(5));

quil.core.pop_matrix.call(null);

quil.core.push_matrix.call(null);

quil.core.translate.call(null,(0),(0),(100));

quil.core.stroke.call(null,(7),(193),(255));

quil.core.fill.call(null,(7),(193),(255));

quil.core.sphere.call(null,(5));

quil.core.pop_matrix.call(null);

quil.core.push_matrix.call(null);

quil.core.translate.call(null,(0),(0),(0));

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(0),(0),(255));

quil.core.sphere.call(null,(100));

quil.core.pop_matrix.call(null);

quil.core.push_matrix.call(null);

quil.core.stroke.call(null,(7),(193),(255));

quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,(0),(0),(100),(0),(20),(120));

quil.core.pop_matrix.call(null);

return quil.core.end_camera.call(null);
}finally {quil.core.pop_matrix.call(null);
}});
orbital_solution.core.begin_animation = (function orbital_solution$core$begin_animation(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#000000",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,orbital_solution.core.update_state))?(function() { 
var G__21295__delegate = function (args){
return cljs.core.apply.call(null,orbital_solution.core.update_state,args);
};
var G__21295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21296__i = 0, G__21296__a = new Array(arguments.length -  0);
while (G__21296__i < G__21296__a.length) {G__21296__a[G__21296__i] = arguments[G__21296__i + 0]; ++G__21296__i;}
  args = new cljs.core.IndexedSeq(G__21296__a,0);
} 
return G__21295__delegate.call(this,args);};
G__21295.cljs$lang$maxFixedArity = 0;
G__21295.cljs$lang$applyTo = (function (arglist__21297){
var args = cljs.core.seq(arglist__21297);
return G__21295__delegate(args);
});
G__21295.cljs$core$IFn$_invoke$arity$variadic = G__21295__delegate;
return G__21295;
})()
:orbital_solution.core.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orbital_solution.core.w,orbital_solution.core.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,orbital_solution.core.setup))?(function() { 
var G__21298__delegate = function (args){
return cljs.core.apply.call(null,orbital_solution.core.setup,args);
};
var G__21298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21299__i = 0, G__21299__a = new Array(arguments.length -  0);
while (G__21299__i < G__21299__a.length) {G__21299__a[G__21299__i] = arguments[G__21299__i + 0]; ++G__21299__i;}
  args = new cljs.core.IndexedSeq(G__21299__a,0);
} 
return G__21298__delegate.call(this,args);};
G__21298.cljs$lang$maxFixedArity = 0;
G__21298.cljs$lang$applyTo = (function (arglist__21300){
var args = cljs.core.seq(arglist__21300);
return G__21298__delegate(args);
});
G__21298.cljs$core$IFn$_invoke$arity$variadic = G__21298__delegate;
return G__21298;
})()
:orbital_solution.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"my-canvas",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,orbital_solution.core.draw_state))?(function() { 
var G__21301__delegate = function (args){
return cljs.core.apply.call(null,orbital_solution.core.draw_state,args);
};
var G__21301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21302__i = 0, G__21302__a = new Array(arguments.length -  0);
while (G__21302__i < G__21302__a.length) {G__21302__a[G__21302__i] = arguments[G__21302__i + 0]; ++G__21302__i;}
  args = new cljs.core.IndexedSeq(G__21302__a,0);
} 
return G__21301__delegate.call(this,args);};
G__21301.cljs$lang$maxFixedArity = 0;
G__21301.cljs$lang$applyTo = (function (arglist__21303){
var args = cljs.core.seq(arglist__21303);
return G__21301__delegate(args);
});
G__21301.cljs$core$IFn$_invoke$arity$variadic = G__21301__delegate;
return G__21301;
})()
:orbital_solution.core.draw_state));
});
goog.exportSymbol('orbital_solution.core.begin_animation', orbital_solution.core.begin_animation);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__19585__19586__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__19585__19586__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),orbital_solution.core.begin_animation,new cljs.core.Keyword(null,"host-id","host-id",742376279),"my-canvas"], null));
}
orbital_solution.core.app = (function orbital_solution$core$app(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Orbital Solution"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#description","div#description",1279440333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is an epic solution to the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://reaktor.com/orbital-challenge/"], null),"Orbital Challenge"], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Source Code Available on the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/jleikko/orbital-solution"], null),"GitHub"], null),"."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log("generate");
})], null),"Generate new challenge"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#input-data","div#input-data",-1777947882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),"22",new cljs.core.Keyword(null,"cols","cols",-1914801295),"80"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log(orbit.core.resolve_challenge.call(null));
})], null),"Resolve satellite routing"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#my-canvas","canvas#my-canvas",86063188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),orbital_solution.core.w,new cljs.core.Keyword(null,"height","height",1025178622),orbital_solution.core.h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio#soundtrack","audio#soundtrack",231524333),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"sounds/syna.mp3",new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),"autoplay",new cljs.core.Keyword(null,"loop","loop",-395552849),"loop"], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),orbital_solution.core.begin_animation], null));
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orbital_solution.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1463435961097