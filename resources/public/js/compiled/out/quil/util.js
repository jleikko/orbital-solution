// Compiled by ClojureScript 1.8.34 {}
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Function that does nothing.
 */
quil.util.no_fn = (function quil$util$no_fn(){
return null;
});
/**
 * Returns the val associated with key in mappings or key directly if it
 *   is one of the vals in mappings. Otherwise throws an exception.
 */
quil.util.resolve_constant_key = (function quil$util$resolve_constant_key(key,mappings){
if(cljs.core.truth_(cljs.core.get.call(null,mappings,key))){
return cljs.core.get.call(null,mappings,key);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),cljs.core.vals.call(null,mappings)))){
return key;
} else {
throw (new Error([cljs.core.str("Expecting a keyword, got: "),cljs.core.str(key),cljs.core.str(". Expected one of: "),cljs.core.str(cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,mappings))))].join('')));

}
}
});
/**
 * Returns the length of the longest key of map m. Assumes m's keys are strings
 * and returns 0 if map is empty:
 * (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
 * (length-of-longest-key {}) ;=> 0
 */
quil.util.length_of_longest_key = (function quil$util$length_of_longest_key(m){
var or__18432__auto__ = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__25869_SHARP_){
return p1__25869_SHARP_.length();
}),cljs.core.keys.call(null,m))));
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return (0);
}
});
/**
 * Generates a padding string starting concatting s with len times pad:
 * (gen-padding "" 5 "b") ;=> "bbbbb"
 * May be called without starting string s in which case it defaults to the
 * empty string and also without pad in which case it defaults to a single space
 */
quil.util.gen_padding = (function quil$util$gen_padding(var_args){
var args25870 = [];
var len__19501__auto___25873 = arguments.length;
var i__19502__auto___25874 = (0);
while(true){
if((i__19502__auto___25874 < len__19501__auto___25873)){
args25870.push((arguments[i__19502__auto___25874]));

var G__25875 = (i__19502__auto___25874 + (1));
i__19502__auto___25874 = G__25875;
continue;
} else {
}
break;
}

var G__25872 = args25870.length;
switch (G__25872) {
case 1:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25870.length)].join('')));

}
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1 = (function (len){
return quil.util.gen_padding.call(null,"",len," ");
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2 = (function (len,pad){
return quil.util.gen_padding.call(null,"",len,pad);
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3 = (function (s,len,pad){
if((len > (0))){
return quil.util.gen_padding.call(null,[cljs.core.str(s),cljs.core.str(pad)].join(''),(len - (1)),pad);
} else {
return s;
}
});

quil.util.gen_padding.cljs$lang$maxFixedArity = 3;
quil.util.print_definition_list = (function quil$util$print_definition_list(definitions){
var longest_key = quil.util.length_of_longest_key.call(null,definitions);
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (longest_key){
return (function (p__25879){
var vec__25880 = p__25879;
var k = cljs.core.nth.call(null,vec__25880,(0),null);
var v = cljs.core.nth.call(null,vec__25880,(1),null);
var len = k.length();
var diff = (longest_key - len);
var pad = quil.util.gen_padding.call(null,diff);
return cljs.core.println.call(null,k,pad,"- ",v);
});})(longest_key))
,definitions));
});
quil.util.clj_compilation_QMARK_ = (function quil$util$clj_compilation_QMARK_(){
return false;
});
quil.util.prepare_quil_name = (function quil$util$prepare_quil_name(const_keyword){
return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,const_keyword)),/-/,"_");
});
quil.util.prepare_quil_clj_constants = (function quil$util$prepare_quil_clj_constants(constants){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__25881_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25881_SHARP_,cljs.core.symbol.call(null,[cljs.core.str("PConstants/"),cljs.core.str(quil.util.prepare_quil_name.call(null,p1__25881_SHARP_))].join(''))],null));
}),constants));
});
quil.util.prepare_quil_cljs_constants = (function quil$util$prepare_quil_cljs_constants(constants){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__25882_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25882_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Processing.prototype.PConstants","js/Processing.prototype.PConstants",2034048972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,quil.util.prepare_quil_name.call(null,p1__25882_SHARP_)))))],null));
}),constants));
});
quil.util.make_quil_constant_map = (function quil$util$make_quil_constant_map(target,const_map_name,const_map){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,const_map_name),cljs.core._conj.call(null,cljs.core.List.EMPTY,((cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"clj","clj",-660495428)))?quil.util.prepare_quil_clj_constants.call(null,const_map):quil.util.prepare_quil_cljs_constants.call(null,const_map))))));
});
quil.util.generate_quil_constants = (function quil$util$generate_quil_constants(var_args){
var args__19508__auto__ = [];
var len__19501__auto___25888 = arguments.length;
var i__19502__auto___25889 = (0);
while(true){
if((i__19502__auto___25889 < len__19501__auto___25888)){
args__19508__auto__.push((arguments[i__19502__auto___25889]));

var G__25890 = (i__19502__auto___25889 + (1));
i__19502__auto___25889 = G__25890;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((3) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((3)),(0),null)):null);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19509__auto__);
});

quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,target,opts){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__25883_SHARP_){
return quil.util.make_quil_constant_map.call(null,target,cljs.core.first.call(null,p1__25883_SHARP_),cljs.core.second.call(null,p1__25883_SHARP_));
}),cljs.core.partition.call(null,(2),opts)))));
});

quil.util.generate_quil_constants.cljs$lang$maxFixedArity = (3);

quil.util.generate_quil_constants.cljs$lang$applyTo = (function (seq25884){
var G__25885 = cljs.core.first.call(null,seq25884);
var seq25884__$1 = cljs.core.next.call(null,seq25884);
var G__25886 = cljs.core.first.call(null,seq25884__$1);
var seq25884__$2 = cljs.core.next.call(null,seq25884__$1);
var G__25887 = cljs.core.first.call(null,seq25884__$2);
var seq25884__$3 = cljs.core.next.call(null,seq25884__$2);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic(G__25885,G__25886,G__25887,seq25884__$3);
});

quil.util.generate_quil_constants.cljs$lang$macro = true;

//# sourceMappingURL=util.js.map?rel=1463433289120