// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24565_24579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24566_24580 = null;
var count__24567_24581 = (0);
var i__24568_24582 = (0);
while(true){
if((i__24568_24582 < count__24567_24581)){
var f_24583 = cljs.core._nth.call(null,chunk__24566_24580,i__24568_24582);
cljs.core.println.call(null,"  ",f_24583);

var G__24584 = seq__24565_24579;
var G__24585 = chunk__24566_24580;
var G__24586 = count__24567_24581;
var G__24587 = (i__24568_24582 + (1));
seq__24565_24579 = G__24584;
chunk__24566_24580 = G__24585;
count__24567_24581 = G__24586;
i__24568_24582 = G__24587;
continue;
} else {
var temp__4657__auto___24588 = cljs.core.seq.call(null,seq__24565_24579);
if(temp__4657__auto___24588){
var seq__24565_24589__$1 = temp__4657__auto___24588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24565_24589__$1)){
var c__19243__auto___24590 = cljs.core.chunk_first.call(null,seq__24565_24589__$1);
var G__24591 = cljs.core.chunk_rest.call(null,seq__24565_24589__$1);
var G__24592 = c__19243__auto___24590;
var G__24593 = cljs.core.count.call(null,c__19243__auto___24590);
var G__24594 = (0);
seq__24565_24579 = G__24591;
chunk__24566_24580 = G__24592;
count__24567_24581 = G__24593;
i__24568_24582 = G__24594;
continue;
} else {
var f_24595 = cljs.core.first.call(null,seq__24565_24589__$1);
cljs.core.println.call(null,"  ",f_24595);

var G__24596 = cljs.core.next.call(null,seq__24565_24589__$1);
var G__24597 = null;
var G__24598 = (0);
var G__24599 = (0);
seq__24565_24579 = G__24596;
chunk__24566_24580 = G__24597;
count__24567_24581 = G__24598;
i__24568_24582 = G__24599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24600 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18432__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24600);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24600)))?cljs.core.second.call(null,arglists_24600):arglists_24600));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24569 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24570 = null;
var count__24571 = (0);
var i__24572 = (0);
while(true){
if((i__24572 < count__24571)){
var vec__24573 = cljs.core._nth.call(null,chunk__24570,i__24572);
var name = cljs.core.nth.call(null,vec__24573,(0),null);
var map__24574 = cljs.core.nth.call(null,vec__24573,(1),null);
var map__24574__$1 = ((((!((map__24574 == null)))?((((map__24574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24574):map__24574);
var doc = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24601 = seq__24569;
var G__24602 = chunk__24570;
var G__24603 = count__24571;
var G__24604 = (i__24572 + (1));
seq__24569 = G__24601;
chunk__24570 = G__24602;
count__24571 = G__24603;
i__24572 = G__24604;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24569);
if(temp__4657__auto__){
var seq__24569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24569__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__24569__$1);
var G__24605 = cljs.core.chunk_rest.call(null,seq__24569__$1);
var G__24606 = c__19243__auto__;
var G__24607 = cljs.core.count.call(null,c__19243__auto__);
var G__24608 = (0);
seq__24569 = G__24605;
chunk__24570 = G__24606;
count__24571 = G__24607;
i__24572 = G__24608;
continue;
} else {
var vec__24576 = cljs.core.first.call(null,seq__24569__$1);
var name = cljs.core.nth.call(null,vec__24576,(0),null);
var map__24577 = cljs.core.nth.call(null,vec__24576,(1),null);
var map__24577__$1 = ((((!((map__24577 == null)))?((((map__24577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24577):map__24577);
var doc = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24609 = cljs.core.next.call(null,seq__24569__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__24569 = G__24609;
chunk__24570 = G__24610;
count__24571 = G__24611;
i__24572 = G__24612;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1463433288038