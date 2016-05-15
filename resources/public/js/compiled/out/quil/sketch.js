// Compiled by ClojureScript 1.8.34 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.util');
goog.require('goog.events.EventType');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args26218 = [];
var len__19501__auto___26221 = arguments.length;
var i__19502__auto___26222 = (0);
while(true){
if((i__19502__auto___26222 < len__19501__auto___26221)){
args26218.push((arguments[i__19502__auto___26222]));

var G__26223 = (i__19502__auto___26222 + (1));
i__19502__auto___26222 = G__26223;
continue;
} else {
}
break;
}

var G__26220 = args26218.length;
switch (G__26220) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26218.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__26233 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__26234 = null;
var count__26235 = (0);
var i__26236 = (0);
while(true){
if((i__26236 < count__26235)){
var vec__26237 = cljs.core._nth.call(null,chunk__26234,i__26236);
var processing_name = cljs.core.nth.call(null,vec__26237,(0),null);
var quil_name = cljs.core.nth.call(null,vec__26237,(1),null);
var temp__4657__auto___26241 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___26241)){
var handler_26242 = temp__4657__auto___26241;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__26233,chunk__26234,count__26235,i__26236,handler_26242,temp__4657__auto___26241,vec__26237,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_26238 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_26242.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_26238;
}});})(seq__26233,chunk__26234,count__26235,i__26236,handler_26242,temp__4657__auto___26241,vec__26237,processing_name,quil_name))
);
} else {
}

var G__26243 = seq__26233;
var G__26244 = chunk__26234;
var G__26245 = count__26235;
var G__26246 = (i__26236 + (1));
seq__26233 = G__26243;
chunk__26234 = G__26244;
count__26235 = G__26245;
i__26236 = G__26246;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26233);
if(temp__4657__auto__){
var seq__26233__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26233__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__26233__$1);
var G__26247 = cljs.core.chunk_rest.call(null,seq__26233__$1);
var G__26248 = c__19243__auto__;
var G__26249 = cljs.core.count.call(null,c__19243__auto__);
var G__26250 = (0);
seq__26233 = G__26247;
chunk__26234 = G__26248;
count__26235 = G__26249;
i__26236 = G__26250;
continue;
} else {
var vec__26239 = cljs.core.first.call(null,seq__26233__$1);
var processing_name = cljs.core.nth.call(null,vec__26239,(0),null);
var quil_name = cljs.core.nth.call(null,vec__26239,(1),null);
var temp__4657__auto___26251__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___26251__$1)){
var handler_26252 = temp__4657__auto___26251__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__26233,chunk__26234,count__26235,i__26236,handler_26252,temp__4657__auto___26251__$1,vec__26239,processing_name,quil_name,seq__26233__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_26240 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_26252.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_26240;
}});})(seq__26233,chunk__26234,count__26235,i__26236,handler_26252,temp__4657__auto___26251__$1,vec__26239,processing_name,quil_name,seq__26233__$1,temp__4657__auto__))
);
} else {
}

var G__26253 = cljs.core.next.call(null,seq__26233__$1);
var G__26254 = null;
var G__26255 = (0);
var G__26256 = (0);
seq__26233 = G__26253;
chunk__26234 = G__26254;
count__26235 = G__26255;
i__26236 = G__26256;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__26257_SHARP_){
return p1__26257_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__18432__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__19508__auto__ = [];
var len__19501__auto___26259 = arguments.length;
var i__19502__auto___26260 = (0);
while(true){
if((i__19502__auto___26260 < len__19501__auto___26259)){
args__19508__auto__.push((arguments[i__19502__auto___26260]));

var G__26261 = (i__19502__auto___26260 + (1));
i__19502__auto___26260 = G__26261;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((0) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__19509__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__18432__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq26258){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26258));
});
quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__26270 = quil.sketch.empty_body_QMARK_.call(null);
var seq__26266_26271 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__26267_26272 = null;
var count__26268_26273 = (0);
var i__26269_26274 = (0);
while(true){
if((i__26269_26274 < count__26268_26273)){
var sk_26275 = cljs.core._nth.call(null,chunk__26267_26272,i__26269_26274);
if(cljs.core.truth_(add_elem_QMARK__26270)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_26275));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_26275).call(null);

var G__26276 = seq__26266_26271;
var G__26277 = chunk__26267_26272;
var G__26278 = count__26268_26273;
var G__26279 = (i__26269_26274 + (1));
seq__26266_26271 = G__26276;
chunk__26267_26272 = G__26277;
count__26268_26273 = G__26278;
i__26269_26274 = G__26279;
continue;
} else {
var temp__4657__auto___26280 = cljs.core.seq.call(null,seq__26266_26271);
if(temp__4657__auto___26280){
var seq__26266_26281__$1 = temp__4657__auto___26280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26266_26281__$1)){
var c__19243__auto___26282 = cljs.core.chunk_first.call(null,seq__26266_26281__$1);
var G__26283 = cljs.core.chunk_rest.call(null,seq__26266_26281__$1);
var G__26284 = c__19243__auto___26282;
var G__26285 = cljs.core.count.call(null,c__19243__auto___26282);
var G__26286 = (0);
seq__26266_26271 = G__26283;
chunk__26267_26272 = G__26284;
count__26268_26273 = G__26285;
i__26269_26274 = G__26286;
continue;
} else {
var sk_26287 = cljs.core.first.call(null,seq__26266_26281__$1);
if(cljs.core.truth_(add_elem_QMARK__26270)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_26287));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_26287).call(null);

var G__26288 = cljs.core.next.call(null,seq__26266_26281__$1);
var G__26289 = null;
var G__26290 = (0);
var G__26291 = (0);
seq__26266_26271 = G__26288;
chunk__26267_26272 = G__26289;
count__26268_26273 = G__26290;
i__26269_26274 = G__26291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1463305607849