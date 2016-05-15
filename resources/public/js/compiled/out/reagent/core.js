// Compiled by ClojureScript 1.8.34 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('cljsjs.react');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 * That means the second argument must be a javascript object (or nil), and
 * that any Reagent hiccup forms must be processed with as-element. For example
 * like this:
 * 
 * (r/create-element "div" #js{:className "foo"}
 *    "Hi " (r/as-element [:strong "world!"])
 * 
 * which is equivalent to
 * 
 * [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var args26077 = [];
var len__19501__auto___26084 = arguments.length;
var i__19502__auto___26085 = (0);
while(true){
if((i__19502__auto___26085 < len__19501__auto___26084)){
args26077.push((arguments[i__19502__auto___26085]));

var G__26086 = (i__19502__auto___26085 + (1));
i__19502__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var G__26083 = args26077.length;
switch (G__26083) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19520__auto__ = (new cljs.core.IndexedSeq(args26077.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19520__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return React.createElement(type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return React.createElement(type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return cljs.core.apply.call(null,React.createElement,type,props,child,children);
});

reagent.core.create_element.cljs$lang$applyTo = (function (seq26078){
var G__26079 = cljs.core.first.call(null,seq26078);
var seq26078__$1 = cljs.core.next.call(null,seq26078);
var G__26080 = cljs.core.first.call(null,seq26078__$1);
var seq26078__$2 = cljs.core.next.call(null,seq26078__$1);
var G__26081 = cljs.core.first.call(null,seq26078__$2);
var seq26078__$3 = cljs.core.next.call(null,seq26078__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__26079,G__26080,G__26081,seq26078__$3);
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);
/**
 * Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 * just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be 
 * either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 * Optionally takes a callback that is called when the component is in place.
 * 
 * Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
var args26088 = [];
var len__19501__auto___26091 = arguments.length;
var i__19502__auto___26092 = (0);
while(true){
if((i__19502__auto___26092 < len__19501__auto___26091)){
args26088.push((arguments[i__19502__auto___26092]));

var G__26093 = (i__19502__auto___26092 + (1));
i__19502__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var G__26090 = args26088.length;
switch (G__26090) {
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26088.length)].join('')));

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.core.render.call(null,comp,container,null);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.impl.util.render_component.call(null,f,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;
/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node.call(null,container);
});
/**
 * Turns a component into an HTML string.
 */
reagent.core.render_to_string = (function reagent$core$render_to_string(component){
var _STAR_non_reactive_STAR_26096 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToString"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_26096;
}});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.core.render_to_static_markup = (function reagent$core$render_to_static_markup(component){
var _STAR_non_reactive_STAR_26098 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToStaticMarkup"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_26098;
}});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.core.force_update_all = (function reagent$core$force_update_all(){
return reagent.impl.util.force_update_all.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 * looking like this:
 * {:get-initial-state (fn [this])
 * :component-will-receive-props (fn [this new-argv])
 * :should-component-update (fn [this old-argv new-argv])
 * :component-will-mount (fn [this])
 * :component-did-mount (fn [this])
 * :component-will-update (fn [this new-argv])
 * :component-did-update (fn [this old-argv])
 * :component-will-unmount (fn [this])
 * :reagent-render (fn [args....])   ;; or :render (fn [this])
 * }
 * 
 * Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 * Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 * Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error("Assert failed: (or (nil? new-state) (map? new-state))"));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 * Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error("Assert failed: (or (nil? new-state) (map? new-state))"));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var args26099 = [];
var len__19501__auto___26102 = arguments.length;
var i__19502__auto___26103 = (0);
while(true){
if((i__19502__auto___26103 < len__19501__auto___26102)){
args26099.push((arguments[i__19502__auto___26103]));

var G__26104 = (i__19502__auto___26103 + (1));
i__19502__auto___26103 = G__26104;
continue;
} else {
}
break;
}

var G__26101 = args26099.length;
switch (G__26101) {
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26099.length)].join('')));

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
return reagent.impl.util.force_update.call(null,this$,deep);
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

return reagent.impl.util.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

return reagent.impl.util.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error("Assert failed: (util/reagent-component? this)"));
}

return reagent.impl.util.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return (this$["getDOMNode"])();
});
/**
 * Utility function that merges two maps, handling :class and :style
 * specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 * Note that this may not work in event handlers, since React.js does
 * batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * Reagent components that derefs one of these are automatically
 * re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var args26106 = [];
var len__19501__auto___26111 = arguments.length;
var i__19502__auto___26112 = (0);
while(true){
if((i__19502__auto___26112 < len__19501__auto___26111)){
args26106.push((arguments[i__19502__auto___26112]));

var G__26113 = (i__19502__auto___26112 + (1));
i__19502__auto___26112 = G__26113;
continue;
} else {
}
break;
}

var G__26110 = args26106.length;
switch (G__26110) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19520__auto__ = (new cljs.core.IndexedSeq(args26106.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19520__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

reagent.core.atom.cljs$lang$applyTo = (function (seq26107){
var G__26108 = cljs.core.first.call(null,seq26107);
var seq26107__$1 = cljs.core.next.call(null,seq26107);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__26108,seq26107__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__19508__auto__ = [];
var len__19501__auto___26118 = arguments.length;
var i__19502__auto___26119 = (0);
while(true){
if((i__19502__auto___26119 < len__19501__auto___26118)){
args__19508__auto__.push((arguments[i__19502__auto___26119]));

var G__26120 = (i__19502__auto___26119 + (1));
i__19502__auto___26119 = G__26120;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((2) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19509__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error("Assert failed: (ifn? reset-fn)"));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

reagent.core.wrap.cljs$lang$applyTo = (function (seq26115){
var G__26116 = cljs.core.first.call(null,seq26115);
var seq26115__$1 = cljs.core.next.call(null,seq26115);
var G__26117 = cljs.core.first.call(null,seq26115__$1);
var seq26115__$2 = cljs.core.next.call(null,seq26115__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__26116,G__26117,seq26115__$2);
});
/**
 * Provide a cursor into a Reagent atom.
 * 
 * Behaves like a Reagent atom but focuses updates and derefs to
 * the specified path within the wrapped Reagent atom. e.g.,
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 * 
 * The first parameter can also be a function, that should look something
 * like this:
 * 
 * (defn set-get
 *   ([k] (get-in @state k))
 *   ([k v] (swap! state assoc-in k v)))
 * 
 * The function will be called with one argument – the path passed to
 * cursor – when the cursor is deref'ed, and two arguments (path and new
 * value) when the cursor is modified.
 * 
 * Given that set-get function, (and that state is a Reagent atom, or
 * another cursor) these cursors are equivalent:
 * (cursor state [:foo]) and (cursor set-get [:foo]).
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.next_tick.call(null,f);
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 * the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__19508__auto__ = [];
var len__19501__auto___26123 = arguments.length;
var i__19502__auto___26124 = (0);
while(true){
if((i__19502__auto___26124 < len__19501__auto___26123)){
args__19508__auto__.push((arguments[i__19502__auto___26124]));

var G__26125 = (i__19502__auto___26124 + (1));
i__19502__auto___26124 = G__26125;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((1) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19509__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

reagent.core.partial.cljs$lang$applyTo = (function (seq26121){
var G__26122 = cljs.core.first.call(null,seq26121);
var seq26121__$1 = cljs.core.next.call(null,seq26121);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__26122,seq26121__$1);
});
reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map?rel=1463305607652