// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18432__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18432__auto__){
return or__18432__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18432__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23541_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23541_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23546 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23547 = null;
var count__23548 = (0);
var i__23549 = (0);
while(true){
if((i__23549 < count__23548)){
var n = cljs.core._nth.call(null,chunk__23547,i__23549);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23550 = seq__23546;
var G__23551 = chunk__23547;
var G__23552 = count__23548;
var G__23553 = (i__23549 + (1));
seq__23546 = G__23550;
chunk__23547 = G__23551;
count__23548 = G__23552;
i__23549 = G__23553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23546);
if(temp__4657__auto__){
var seq__23546__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23546__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__23546__$1);
var G__23554 = cljs.core.chunk_rest.call(null,seq__23546__$1);
var G__23555 = c__19243__auto__;
var G__23556 = cljs.core.count.call(null,c__19243__auto__);
var G__23557 = (0);
seq__23546 = G__23554;
chunk__23547 = G__23555;
count__23548 = G__23556;
i__23549 = G__23557;
continue;
} else {
var n = cljs.core.first.call(null,seq__23546__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23558 = cljs.core.next.call(null,seq__23546__$1);
var G__23559 = null;
var G__23560 = (0);
var G__23561 = (0);
seq__23546 = G__23558;
chunk__23547 = G__23559;
count__23548 = G__23560;
i__23549 = G__23561;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23600_23607 = cljs.core.seq.call(null,deps);
var chunk__23601_23608 = null;
var count__23602_23609 = (0);
var i__23603_23610 = (0);
while(true){
if((i__23603_23610 < count__23602_23609)){
var dep_23611 = cljs.core._nth.call(null,chunk__23601_23608,i__23603_23610);
topo_sort_helper_STAR_.call(null,dep_23611,(depth + (1)),state);

var G__23612 = seq__23600_23607;
var G__23613 = chunk__23601_23608;
var G__23614 = count__23602_23609;
var G__23615 = (i__23603_23610 + (1));
seq__23600_23607 = G__23612;
chunk__23601_23608 = G__23613;
count__23602_23609 = G__23614;
i__23603_23610 = G__23615;
continue;
} else {
var temp__4657__auto___23616 = cljs.core.seq.call(null,seq__23600_23607);
if(temp__4657__auto___23616){
var seq__23600_23617__$1 = temp__4657__auto___23616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23600_23617__$1)){
var c__19243__auto___23618 = cljs.core.chunk_first.call(null,seq__23600_23617__$1);
var G__23619 = cljs.core.chunk_rest.call(null,seq__23600_23617__$1);
var G__23620 = c__19243__auto___23618;
var G__23621 = cljs.core.count.call(null,c__19243__auto___23618);
var G__23622 = (0);
seq__23600_23607 = G__23619;
chunk__23601_23608 = G__23620;
count__23602_23609 = G__23621;
i__23603_23610 = G__23622;
continue;
} else {
var dep_23623 = cljs.core.first.call(null,seq__23600_23617__$1);
topo_sort_helper_STAR_.call(null,dep_23623,(depth + (1)),state);

var G__23624 = cljs.core.next.call(null,seq__23600_23617__$1);
var G__23625 = null;
var G__23626 = (0);
var G__23627 = (0);
seq__23600_23607 = G__23624;
chunk__23601_23608 = G__23625;
count__23602_23609 = G__23626;
i__23603_23610 = G__23627;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23604){
var vec__23606 = p__23604;
var x = cljs.core.nth.call(null,vec__23606,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23606,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23606,x,xs,get_deps__$1){
return (function (p1__23562_SHARP_){
return clojure.set.difference.call(null,p1__23562_SHARP_,x);
});})(vec__23606,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23640 = cljs.core.seq.call(null,provides);
var chunk__23641 = null;
var count__23642 = (0);
var i__23643 = (0);
while(true){
if((i__23643 < count__23642)){
var prov = cljs.core._nth.call(null,chunk__23641,i__23643);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23644_23652 = cljs.core.seq.call(null,requires);
var chunk__23645_23653 = null;
var count__23646_23654 = (0);
var i__23647_23655 = (0);
while(true){
if((i__23647_23655 < count__23646_23654)){
var req_23656 = cljs.core._nth.call(null,chunk__23645_23653,i__23647_23655);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23656,prov);

var G__23657 = seq__23644_23652;
var G__23658 = chunk__23645_23653;
var G__23659 = count__23646_23654;
var G__23660 = (i__23647_23655 + (1));
seq__23644_23652 = G__23657;
chunk__23645_23653 = G__23658;
count__23646_23654 = G__23659;
i__23647_23655 = G__23660;
continue;
} else {
var temp__4657__auto___23661 = cljs.core.seq.call(null,seq__23644_23652);
if(temp__4657__auto___23661){
var seq__23644_23662__$1 = temp__4657__auto___23661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23644_23662__$1)){
var c__19243__auto___23663 = cljs.core.chunk_first.call(null,seq__23644_23662__$1);
var G__23664 = cljs.core.chunk_rest.call(null,seq__23644_23662__$1);
var G__23665 = c__19243__auto___23663;
var G__23666 = cljs.core.count.call(null,c__19243__auto___23663);
var G__23667 = (0);
seq__23644_23652 = G__23664;
chunk__23645_23653 = G__23665;
count__23646_23654 = G__23666;
i__23647_23655 = G__23667;
continue;
} else {
var req_23668 = cljs.core.first.call(null,seq__23644_23662__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23668,prov);

var G__23669 = cljs.core.next.call(null,seq__23644_23662__$1);
var G__23670 = null;
var G__23671 = (0);
var G__23672 = (0);
seq__23644_23652 = G__23669;
chunk__23645_23653 = G__23670;
count__23646_23654 = G__23671;
i__23647_23655 = G__23672;
continue;
}
} else {
}
}
break;
}

var G__23673 = seq__23640;
var G__23674 = chunk__23641;
var G__23675 = count__23642;
var G__23676 = (i__23643 + (1));
seq__23640 = G__23673;
chunk__23641 = G__23674;
count__23642 = G__23675;
i__23643 = G__23676;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23640);
if(temp__4657__auto__){
var seq__23640__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23640__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__23640__$1);
var G__23677 = cljs.core.chunk_rest.call(null,seq__23640__$1);
var G__23678 = c__19243__auto__;
var G__23679 = cljs.core.count.call(null,c__19243__auto__);
var G__23680 = (0);
seq__23640 = G__23677;
chunk__23641 = G__23678;
count__23642 = G__23679;
i__23643 = G__23680;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23640__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23648_23681 = cljs.core.seq.call(null,requires);
var chunk__23649_23682 = null;
var count__23650_23683 = (0);
var i__23651_23684 = (0);
while(true){
if((i__23651_23684 < count__23650_23683)){
var req_23685 = cljs.core._nth.call(null,chunk__23649_23682,i__23651_23684);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23685,prov);

var G__23686 = seq__23648_23681;
var G__23687 = chunk__23649_23682;
var G__23688 = count__23650_23683;
var G__23689 = (i__23651_23684 + (1));
seq__23648_23681 = G__23686;
chunk__23649_23682 = G__23687;
count__23650_23683 = G__23688;
i__23651_23684 = G__23689;
continue;
} else {
var temp__4657__auto___23690__$1 = cljs.core.seq.call(null,seq__23648_23681);
if(temp__4657__auto___23690__$1){
var seq__23648_23691__$1 = temp__4657__auto___23690__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23648_23691__$1)){
var c__19243__auto___23692 = cljs.core.chunk_first.call(null,seq__23648_23691__$1);
var G__23693 = cljs.core.chunk_rest.call(null,seq__23648_23691__$1);
var G__23694 = c__19243__auto___23692;
var G__23695 = cljs.core.count.call(null,c__19243__auto___23692);
var G__23696 = (0);
seq__23648_23681 = G__23693;
chunk__23649_23682 = G__23694;
count__23650_23683 = G__23695;
i__23651_23684 = G__23696;
continue;
} else {
var req_23697 = cljs.core.first.call(null,seq__23648_23691__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23697,prov);

var G__23698 = cljs.core.next.call(null,seq__23648_23691__$1);
var G__23699 = null;
var G__23700 = (0);
var G__23701 = (0);
seq__23648_23681 = G__23698;
chunk__23649_23682 = G__23699;
count__23650_23683 = G__23700;
i__23651_23684 = G__23701;
continue;
}
} else {
}
}
break;
}

var G__23702 = cljs.core.next.call(null,seq__23640__$1);
var G__23703 = null;
var G__23704 = (0);
var G__23705 = (0);
seq__23640 = G__23702;
chunk__23641 = G__23703;
count__23642 = G__23704;
i__23643 = G__23705;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23710_23714 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23711_23715 = null;
var count__23712_23716 = (0);
var i__23713_23717 = (0);
while(true){
if((i__23713_23717 < count__23712_23716)){
var ns_23718 = cljs.core._nth.call(null,chunk__23711_23715,i__23713_23717);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23718);

var G__23719 = seq__23710_23714;
var G__23720 = chunk__23711_23715;
var G__23721 = count__23712_23716;
var G__23722 = (i__23713_23717 + (1));
seq__23710_23714 = G__23719;
chunk__23711_23715 = G__23720;
count__23712_23716 = G__23721;
i__23713_23717 = G__23722;
continue;
} else {
var temp__4657__auto___23723 = cljs.core.seq.call(null,seq__23710_23714);
if(temp__4657__auto___23723){
var seq__23710_23724__$1 = temp__4657__auto___23723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23710_23724__$1)){
var c__19243__auto___23725 = cljs.core.chunk_first.call(null,seq__23710_23724__$1);
var G__23726 = cljs.core.chunk_rest.call(null,seq__23710_23724__$1);
var G__23727 = c__19243__auto___23725;
var G__23728 = cljs.core.count.call(null,c__19243__auto___23725);
var G__23729 = (0);
seq__23710_23714 = G__23726;
chunk__23711_23715 = G__23727;
count__23712_23716 = G__23728;
i__23713_23717 = G__23729;
continue;
} else {
var ns_23730 = cljs.core.first.call(null,seq__23710_23724__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23730);

var G__23731 = cljs.core.next.call(null,seq__23710_23724__$1);
var G__23732 = null;
var G__23733 = (0);
var G__23734 = (0);
seq__23710_23714 = G__23731;
chunk__23711_23715 = G__23732;
count__23712_23716 = G__23733;
i__23713_23717 = G__23734;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18432__auto__ = goog.require__;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23735__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23736__i = 0, G__23736__a = new Array(arguments.length -  0);
while (G__23736__i < G__23736__a.length) {G__23736__a[G__23736__i] = arguments[G__23736__i + 0]; ++G__23736__i;}
  args = new cljs.core.IndexedSeq(G__23736__a,0);
} 
return G__23735__delegate.call(this,args);};
G__23735.cljs$lang$maxFixedArity = 0;
G__23735.cljs$lang$applyTo = (function (arglist__23737){
var args = cljs.core.seq(arglist__23737);
return G__23735__delegate(args);
});
G__23735.cljs$core$IFn$_invoke$arity$variadic = G__23735__delegate;
return G__23735;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23739 = cljs.core._EQ_;
var expr__23740 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23739.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23740))){
var path_parts = ((function (pred__23739,expr__23740){
return (function (p1__23738_SHARP_){
return clojure.string.split.call(null,p1__23738_SHARP_,/[\/\\]/);
});})(pred__23739,expr__23740))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23739,expr__23740){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23742){if((e23742 instanceof Error)){
var e = e23742;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23742;

}
}})());
});
;})(path_parts,sep,root,pred__23739,expr__23740))
} else {
if(cljs.core.truth_(pred__23739.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23740))){
return ((function (pred__23739,expr__23740){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23739,expr__23740){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23739,expr__23740))
);

return deferred.addErrback(((function (deferred,pred__23739,expr__23740){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23739,expr__23740))
);
});
;})(pred__23739,expr__23740))
} else {
return ((function (pred__23739,expr__23740){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23739,expr__23740))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23743,callback){
var map__23746 = p__23743;
var map__23746__$1 = ((((!((map__23746 == null)))?((((map__23746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23746):map__23746);
var file_msg = map__23746__$1;
var request_url = cljs.core.get.call(null,map__23746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23746,map__23746__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23746,map__23746__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__){
return (function (state_23770){
var state_val_23771 = (state_23770[(1)]);
if((state_val_23771 === (7))){
var inst_23766 = (state_23770[(2)]);
var state_23770__$1 = state_23770;
var statearr_23772_23792 = state_23770__$1;
(statearr_23772_23792[(2)] = inst_23766);

(statearr_23772_23792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (1))){
var state_23770__$1 = state_23770;
var statearr_23773_23793 = state_23770__$1;
(statearr_23773_23793[(2)] = null);

(statearr_23773_23793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (4))){
var inst_23750 = (state_23770[(7)]);
var inst_23750__$1 = (state_23770[(2)]);
var state_23770__$1 = (function (){var statearr_23774 = state_23770;
(statearr_23774[(7)] = inst_23750__$1);

return statearr_23774;
})();
if(cljs.core.truth_(inst_23750__$1)){
var statearr_23775_23794 = state_23770__$1;
(statearr_23775_23794[(1)] = (5));

} else {
var statearr_23776_23795 = state_23770__$1;
(statearr_23776_23795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (6))){
var state_23770__$1 = state_23770;
var statearr_23777_23796 = state_23770__$1;
(statearr_23777_23796[(2)] = null);

(statearr_23777_23796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (3))){
var inst_23768 = (state_23770[(2)]);
var state_23770__$1 = state_23770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23770__$1,inst_23768);
} else {
if((state_val_23771 === (2))){
var state_23770__$1 = state_23770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23770__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23771 === (11))){
var inst_23762 = (state_23770[(2)]);
var state_23770__$1 = (function (){var statearr_23778 = state_23770;
(statearr_23778[(8)] = inst_23762);

return statearr_23778;
})();
var statearr_23779_23797 = state_23770__$1;
(statearr_23779_23797[(2)] = null);

(statearr_23779_23797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (9))){
var inst_23756 = (state_23770[(9)]);
var inst_23754 = (state_23770[(10)]);
var inst_23758 = inst_23756.call(null,inst_23754);
var state_23770__$1 = state_23770;
var statearr_23780_23798 = state_23770__$1;
(statearr_23780_23798[(2)] = inst_23758);

(statearr_23780_23798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (5))){
var inst_23750 = (state_23770[(7)]);
var inst_23752 = figwheel.client.file_reloading.blocking_load.call(null,inst_23750);
var state_23770__$1 = state_23770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23770__$1,(8),inst_23752);
} else {
if((state_val_23771 === (10))){
var inst_23754 = (state_23770[(10)]);
var inst_23760 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23754);
var state_23770__$1 = state_23770;
var statearr_23781_23799 = state_23770__$1;
(statearr_23781_23799[(2)] = inst_23760);

(statearr_23781_23799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (8))){
var inst_23756 = (state_23770[(9)]);
var inst_23750 = (state_23770[(7)]);
var inst_23754 = (state_23770[(2)]);
var inst_23755 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23756__$1 = cljs.core.get.call(null,inst_23755,inst_23750);
var state_23770__$1 = (function (){var statearr_23782 = state_23770;
(statearr_23782[(9)] = inst_23756__$1);

(statearr_23782[(10)] = inst_23754);

return statearr_23782;
})();
if(cljs.core.truth_(inst_23756__$1)){
var statearr_23783_23800 = state_23770__$1;
(statearr_23783_23800[(1)] = (9));

} else {
var statearr_23784_23801 = state_23770__$1;
(statearr_23784_23801[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20598__auto__))
;
return ((function (switch__20486__auto__,c__20598__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20487__auto__ = null;
var figwheel$client$file_reloading$state_machine__20487__auto____0 = (function (){
var statearr_23788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23788[(0)] = figwheel$client$file_reloading$state_machine__20487__auto__);

(statearr_23788[(1)] = (1));

return statearr_23788;
});
var figwheel$client$file_reloading$state_machine__20487__auto____1 = (function (state_23770){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_23770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object)){
var ex__20490__auto__ = e23789;
var statearr_23790_23802 = state_23770;
(statearr_23790_23802[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23803 = state_23770;
state_23770 = G__23803;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20487__auto__ = function(state_23770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20487__auto____1.call(this,state_23770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20487__auto____0;
figwheel$client$file_reloading$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20487__auto____1;
return figwheel$client$file_reloading$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__))
})();
var state__20600__auto__ = (function (){var statearr_23791 = f__20599__auto__.call(null);
(statearr_23791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_23791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__))
);

return c__20598__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23804,callback){
var map__23807 = p__23804;
var map__23807__$1 = ((((!((map__23807 == null)))?((((map__23807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23807):map__23807);
var file_msg = map__23807__$1;
var namespace = cljs.core.get.call(null,map__23807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23807,map__23807__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23807,map__23807__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23809){
var map__23812 = p__23809;
var map__23812__$1 = ((((!((map__23812 == null)))?((((map__23812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23812):map__23812);
var file_msg = map__23812__$1;
var namespace = cljs.core.get.call(null,map__23812__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18420__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18420__auto__){
var or__18432__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
var or__18432__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18432__auto____$1)){
return or__18432__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18420__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23814,callback){
var map__23817 = p__23814;
var map__23817__$1 = ((((!((map__23817 == null)))?((((map__23817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23817):map__23817);
var file_msg = map__23817__$1;
var request_url = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20598__auto___23905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___23905,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___23905,out){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (1))){
var inst_23865 = cljs.core.nth.call(null,files,(0),null);
var inst_23866 = cljs.core.nthnext.call(null,files,(1));
var inst_23867 = files;
var state_23887__$1 = (function (){var statearr_23889 = state_23887;
(statearr_23889[(7)] = inst_23865);

(statearr_23889[(8)] = inst_23867);

(statearr_23889[(9)] = inst_23866);

return statearr_23889;
})();
var statearr_23890_23906 = state_23887__$1;
(statearr_23890_23906[(2)] = null);

(statearr_23890_23906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (2))){
var inst_23867 = (state_23887[(8)]);
var inst_23870 = (state_23887[(10)]);
var inst_23870__$1 = cljs.core.nth.call(null,inst_23867,(0),null);
var inst_23871 = cljs.core.nthnext.call(null,inst_23867,(1));
var inst_23872 = (inst_23870__$1 == null);
var inst_23873 = cljs.core.not.call(null,inst_23872);
var state_23887__$1 = (function (){var statearr_23891 = state_23887;
(statearr_23891[(11)] = inst_23871);

(statearr_23891[(10)] = inst_23870__$1);

return statearr_23891;
})();
if(inst_23873){
var statearr_23892_23907 = state_23887__$1;
(statearr_23892_23907[(1)] = (4));

} else {
var statearr_23893_23908 = state_23887__$1;
(statearr_23893_23908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (3))){
var inst_23885 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
if((state_val_23888 === (4))){
var inst_23870 = (state_23887[(10)]);
var inst_23875 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23870);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(7),inst_23875);
} else {
if((state_val_23888 === (5))){
var inst_23881 = cljs.core.async.close_BANG_.call(null,out);
var state_23887__$1 = state_23887;
var statearr_23894_23909 = state_23887__$1;
(statearr_23894_23909[(2)] = inst_23881);

(statearr_23894_23909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (6))){
var inst_23883 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23895_23910 = state_23887__$1;
(statearr_23895_23910[(2)] = inst_23883);

(statearr_23895_23910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (7))){
var inst_23871 = (state_23887[(11)]);
var inst_23877 = (state_23887[(2)]);
var inst_23878 = cljs.core.async.put_BANG_.call(null,out,inst_23877);
var inst_23867 = inst_23871;
var state_23887__$1 = (function (){var statearr_23896 = state_23887;
(statearr_23896[(8)] = inst_23867);

(statearr_23896[(12)] = inst_23878);

return statearr_23896;
})();
var statearr_23897_23911 = state_23887__$1;
(statearr_23897_23911[(2)] = null);

(statearr_23897_23911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20598__auto___23905,out))
;
return ((function (switch__20486__auto__,c__20598__auto___23905,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto____0 = (function (){
var statearr_23901 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23901[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto__);

(statearr_23901[(1)] = (1));

return statearr_23901;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto____1 = (function (state_23887){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e23902){if((e23902 instanceof Object)){
var ex__20490__auto__ = e23902;
var statearr_23903_23912 = state_23887;
(statearr_23903_23912[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23913 = state_23887;
state_23887 = G__23913;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___23905,out))
})();
var state__20600__auto__ = (function (){var statearr_23904 = f__20599__auto__.call(null);
(statearr_23904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___23905);

return statearr_23904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___23905,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23914,opts){
var map__23918 = p__23914;
var map__23918__$1 = ((((!((map__23918 == null)))?((((map__23918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23918):map__23918);
var eval_body__$1 = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18420__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18420__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18420__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23920){var e = e23920;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23921_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23921_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23926){
var vec__23927 = p__23926;
var k = cljs.core.nth.call(null,vec__23927,(0),null);
var v = cljs.core.nth.call(null,vec__23927,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23928){
var vec__23929 = p__23928;
var k = cljs.core.nth.call(null,vec__23929,(0),null);
var v = cljs.core.nth.call(null,vec__23929,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23933,p__23934){
var map__24181 = p__23933;
var map__24181__$1 = ((((!((map__24181 == null)))?((((map__24181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24181):map__24181);
var opts = map__24181__$1;
var before_jsload = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24182 = p__23934;
var map__24182__$1 = ((((!((map__24182 == null)))?((((map__24182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24182):map__24182);
var msg = map__24182__$1;
var files = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24335){
var state_val_24336 = (state_24335[(1)]);
if((state_val_24336 === (7))){
var inst_24196 = (state_24335[(7)]);
var inst_24199 = (state_24335[(8)]);
var inst_24198 = (state_24335[(9)]);
var inst_24197 = (state_24335[(10)]);
var inst_24204 = cljs.core._nth.call(null,inst_24197,inst_24199);
var inst_24205 = figwheel.client.file_reloading.eval_body.call(null,inst_24204,opts);
var inst_24206 = (inst_24199 + (1));
var tmp24337 = inst_24196;
var tmp24338 = inst_24198;
var tmp24339 = inst_24197;
var inst_24196__$1 = tmp24337;
var inst_24197__$1 = tmp24339;
var inst_24198__$1 = tmp24338;
var inst_24199__$1 = inst_24206;
var state_24335__$1 = (function (){var statearr_24340 = state_24335;
(statearr_24340[(7)] = inst_24196__$1);

(statearr_24340[(8)] = inst_24199__$1);

(statearr_24340[(9)] = inst_24198__$1);

(statearr_24340[(11)] = inst_24205);

(statearr_24340[(10)] = inst_24197__$1);

return statearr_24340;
})();
var statearr_24341_24427 = state_24335__$1;
(statearr_24341_24427[(2)] = null);

(statearr_24341_24427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (20))){
var inst_24239 = (state_24335[(12)]);
var inst_24247 = figwheel.client.file_reloading.sort_files.call(null,inst_24239);
var state_24335__$1 = state_24335;
var statearr_24342_24428 = state_24335__$1;
(statearr_24342_24428[(2)] = inst_24247);

(statearr_24342_24428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (27))){
var state_24335__$1 = state_24335;
var statearr_24343_24429 = state_24335__$1;
(statearr_24343_24429[(2)] = null);

(statearr_24343_24429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (1))){
var inst_24188 = (state_24335[(13)]);
var inst_24185 = before_jsload.call(null,files);
var inst_24186 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24187 = (function (){return ((function (inst_24188,inst_24185,inst_24186,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23930_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23930_SHARP_);
});
;})(inst_24188,inst_24185,inst_24186,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24188__$1 = cljs.core.filter.call(null,inst_24187,files);
var inst_24189 = cljs.core.not_empty.call(null,inst_24188__$1);
var state_24335__$1 = (function (){var statearr_24344 = state_24335;
(statearr_24344[(14)] = inst_24185);

(statearr_24344[(15)] = inst_24186);

(statearr_24344[(13)] = inst_24188__$1);

return statearr_24344;
})();
if(cljs.core.truth_(inst_24189)){
var statearr_24345_24430 = state_24335__$1;
(statearr_24345_24430[(1)] = (2));

} else {
var statearr_24346_24431 = state_24335__$1;
(statearr_24346_24431[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (24))){
var state_24335__$1 = state_24335;
var statearr_24347_24432 = state_24335__$1;
(statearr_24347_24432[(2)] = null);

(statearr_24347_24432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (39))){
var inst_24289 = (state_24335[(16)]);
var state_24335__$1 = state_24335;
var statearr_24348_24433 = state_24335__$1;
(statearr_24348_24433[(2)] = inst_24289);

(statearr_24348_24433[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (46))){
var inst_24330 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24349_24434 = state_24335__$1;
(statearr_24349_24434[(2)] = inst_24330);

(statearr_24349_24434[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (4))){
var inst_24233 = (state_24335[(2)]);
var inst_24234 = cljs.core.List.EMPTY;
var inst_24235 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24234);
var inst_24236 = (function (){return ((function (inst_24233,inst_24234,inst_24235,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23931_SHARP_){
var and__18420__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23931_SHARP_);
if(cljs.core.truth_(and__18420__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23931_SHARP_));
} else {
return and__18420__auto__;
}
});
;})(inst_24233,inst_24234,inst_24235,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24237 = cljs.core.filter.call(null,inst_24236,files);
var inst_24238 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24239 = cljs.core.concat.call(null,inst_24237,inst_24238);
var state_24335__$1 = (function (){var statearr_24350 = state_24335;
(statearr_24350[(17)] = inst_24235);

(statearr_24350[(18)] = inst_24233);

(statearr_24350[(12)] = inst_24239);

return statearr_24350;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24351_24435 = state_24335__$1;
(statearr_24351_24435[(1)] = (16));

} else {
var statearr_24352_24436 = state_24335__$1;
(statearr_24352_24436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (15))){
var inst_24223 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24353_24437 = state_24335__$1;
(statearr_24353_24437[(2)] = inst_24223);

(statearr_24353_24437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (21))){
var inst_24249 = (state_24335[(19)]);
var inst_24249__$1 = (state_24335[(2)]);
var inst_24250 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24249__$1);
var state_24335__$1 = (function (){var statearr_24354 = state_24335;
(statearr_24354[(19)] = inst_24249__$1);

return statearr_24354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24335__$1,(22),inst_24250);
} else {
if((state_val_24336 === (31))){
var inst_24333 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24335__$1,inst_24333);
} else {
if((state_val_24336 === (32))){
var inst_24289 = (state_24335[(16)]);
var inst_24294 = inst_24289.cljs$lang$protocol_mask$partition0$;
var inst_24295 = (inst_24294 & (64));
var inst_24296 = inst_24289.cljs$core$ISeq$;
var inst_24297 = (inst_24295) || (inst_24296);
var state_24335__$1 = state_24335;
if(cljs.core.truth_(inst_24297)){
var statearr_24355_24438 = state_24335__$1;
(statearr_24355_24438[(1)] = (35));

} else {
var statearr_24356_24439 = state_24335__$1;
(statearr_24356_24439[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (40))){
var inst_24310 = (state_24335[(20)]);
var inst_24309 = (state_24335[(2)]);
var inst_24310__$1 = cljs.core.get.call(null,inst_24309,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24311 = cljs.core.get.call(null,inst_24309,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24312 = cljs.core.not_empty.call(null,inst_24310__$1);
var state_24335__$1 = (function (){var statearr_24357 = state_24335;
(statearr_24357[(21)] = inst_24311);

(statearr_24357[(20)] = inst_24310__$1);

return statearr_24357;
})();
if(cljs.core.truth_(inst_24312)){
var statearr_24358_24440 = state_24335__$1;
(statearr_24358_24440[(1)] = (41));

} else {
var statearr_24359_24441 = state_24335__$1;
(statearr_24359_24441[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (33))){
var state_24335__$1 = state_24335;
var statearr_24360_24442 = state_24335__$1;
(statearr_24360_24442[(2)] = false);

(statearr_24360_24442[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (13))){
var inst_24209 = (state_24335[(22)]);
var inst_24213 = cljs.core.chunk_first.call(null,inst_24209);
var inst_24214 = cljs.core.chunk_rest.call(null,inst_24209);
var inst_24215 = cljs.core.count.call(null,inst_24213);
var inst_24196 = inst_24214;
var inst_24197 = inst_24213;
var inst_24198 = inst_24215;
var inst_24199 = (0);
var state_24335__$1 = (function (){var statearr_24361 = state_24335;
(statearr_24361[(7)] = inst_24196);

(statearr_24361[(8)] = inst_24199);

(statearr_24361[(9)] = inst_24198);

(statearr_24361[(10)] = inst_24197);

return statearr_24361;
})();
var statearr_24362_24443 = state_24335__$1;
(statearr_24362_24443[(2)] = null);

(statearr_24362_24443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (22))){
var inst_24252 = (state_24335[(23)]);
var inst_24253 = (state_24335[(24)]);
var inst_24257 = (state_24335[(25)]);
var inst_24249 = (state_24335[(19)]);
var inst_24252__$1 = (state_24335[(2)]);
var inst_24253__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24252__$1);
var inst_24254 = (function (){var all_files = inst_24249;
var res_SINGLEQUOTE_ = inst_24252__$1;
var res = inst_24253__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24252,inst_24253,inst_24257,inst_24249,inst_24252__$1,inst_24253__$1,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23932_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23932_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24252,inst_24253,inst_24257,inst_24249,inst_24252__$1,inst_24253__$1,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24255 = cljs.core.filter.call(null,inst_24254,inst_24252__$1);
var inst_24256 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24257__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24256);
var inst_24258 = cljs.core.not_empty.call(null,inst_24257__$1);
var state_24335__$1 = (function (){var statearr_24363 = state_24335;
(statearr_24363[(23)] = inst_24252__$1);

(statearr_24363[(26)] = inst_24255);

(statearr_24363[(24)] = inst_24253__$1);

(statearr_24363[(25)] = inst_24257__$1);

return statearr_24363;
})();
if(cljs.core.truth_(inst_24258)){
var statearr_24364_24444 = state_24335__$1;
(statearr_24364_24444[(1)] = (23));

} else {
var statearr_24365_24445 = state_24335__$1;
(statearr_24365_24445[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (36))){
var state_24335__$1 = state_24335;
var statearr_24366_24446 = state_24335__$1;
(statearr_24366_24446[(2)] = false);

(statearr_24366_24446[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (41))){
var inst_24310 = (state_24335[(20)]);
var inst_24314 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24315 = cljs.core.map.call(null,inst_24314,inst_24310);
var inst_24316 = cljs.core.pr_str.call(null,inst_24315);
var inst_24317 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24316)].join('');
var inst_24318 = figwheel.client.utils.log.call(null,inst_24317);
var state_24335__$1 = state_24335;
var statearr_24367_24447 = state_24335__$1;
(statearr_24367_24447[(2)] = inst_24318);

(statearr_24367_24447[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (43))){
var inst_24311 = (state_24335[(21)]);
var inst_24321 = (state_24335[(2)]);
var inst_24322 = cljs.core.not_empty.call(null,inst_24311);
var state_24335__$1 = (function (){var statearr_24368 = state_24335;
(statearr_24368[(27)] = inst_24321);

return statearr_24368;
})();
if(cljs.core.truth_(inst_24322)){
var statearr_24369_24448 = state_24335__$1;
(statearr_24369_24448[(1)] = (44));

} else {
var statearr_24370_24449 = state_24335__$1;
(statearr_24370_24449[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (29))){
var inst_24252 = (state_24335[(23)]);
var inst_24289 = (state_24335[(16)]);
var inst_24255 = (state_24335[(26)]);
var inst_24253 = (state_24335[(24)]);
var inst_24257 = (state_24335[(25)]);
var inst_24249 = (state_24335[(19)]);
var inst_24285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24288 = (function (){var all_files = inst_24249;
var res_SINGLEQUOTE_ = inst_24252;
var res = inst_24253;
var files_not_loaded = inst_24255;
var dependencies_that_loaded = inst_24257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24289,inst_24255,inst_24253,inst_24257,inst_24249,inst_24285,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24287){
var map__24371 = p__24287;
var map__24371__$1 = ((((!((map__24371 == null)))?((((map__24371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24371):map__24371);
var namespace = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24289,inst_24255,inst_24253,inst_24257,inst_24249,inst_24285,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24289__$1 = cljs.core.group_by.call(null,inst_24288,inst_24255);
var inst_24291 = (inst_24289__$1 == null);
var inst_24292 = cljs.core.not.call(null,inst_24291);
var state_24335__$1 = (function (){var statearr_24373 = state_24335;
(statearr_24373[(16)] = inst_24289__$1);

(statearr_24373[(28)] = inst_24285);

return statearr_24373;
})();
if(inst_24292){
var statearr_24374_24450 = state_24335__$1;
(statearr_24374_24450[(1)] = (32));

} else {
var statearr_24375_24451 = state_24335__$1;
(statearr_24375_24451[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (44))){
var inst_24311 = (state_24335[(21)]);
var inst_24324 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24311);
var inst_24325 = cljs.core.pr_str.call(null,inst_24324);
var inst_24326 = [cljs.core.str("not required: "),cljs.core.str(inst_24325)].join('');
var inst_24327 = figwheel.client.utils.log.call(null,inst_24326);
var state_24335__$1 = state_24335;
var statearr_24376_24452 = state_24335__$1;
(statearr_24376_24452[(2)] = inst_24327);

(statearr_24376_24452[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (6))){
var inst_24230 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24377_24453 = state_24335__$1;
(statearr_24377_24453[(2)] = inst_24230);

(statearr_24377_24453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (28))){
var inst_24255 = (state_24335[(26)]);
var inst_24282 = (state_24335[(2)]);
var inst_24283 = cljs.core.not_empty.call(null,inst_24255);
var state_24335__$1 = (function (){var statearr_24378 = state_24335;
(statearr_24378[(29)] = inst_24282);

return statearr_24378;
})();
if(cljs.core.truth_(inst_24283)){
var statearr_24379_24454 = state_24335__$1;
(statearr_24379_24454[(1)] = (29));

} else {
var statearr_24380_24455 = state_24335__$1;
(statearr_24380_24455[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (25))){
var inst_24253 = (state_24335[(24)]);
var inst_24269 = (state_24335[(2)]);
var inst_24270 = cljs.core.not_empty.call(null,inst_24253);
var state_24335__$1 = (function (){var statearr_24381 = state_24335;
(statearr_24381[(30)] = inst_24269);

return statearr_24381;
})();
if(cljs.core.truth_(inst_24270)){
var statearr_24382_24456 = state_24335__$1;
(statearr_24382_24456[(1)] = (26));

} else {
var statearr_24383_24457 = state_24335__$1;
(statearr_24383_24457[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (34))){
var inst_24304 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
if(cljs.core.truth_(inst_24304)){
var statearr_24384_24458 = state_24335__$1;
(statearr_24384_24458[(1)] = (38));

} else {
var statearr_24385_24459 = state_24335__$1;
(statearr_24385_24459[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (17))){
var state_24335__$1 = state_24335;
var statearr_24386_24460 = state_24335__$1;
(statearr_24386_24460[(2)] = recompile_dependents);

(statearr_24386_24460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (3))){
var state_24335__$1 = state_24335;
var statearr_24387_24461 = state_24335__$1;
(statearr_24387_24461[(2)] = null);

(statearr_24387_24461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (12))){
var inst_24226 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24388_24462 = state_24335__$1;
(statearr_24388_24462[(2)] = inst_24226);

(statearr_24388_24462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (2))){
var inst_24188 = (state_24335[(13)]);
var inst_24195 = cljs.core.seq.call(null,inst_24188);
var inst_24196 = inst_24195;
var inst_24197 = null;
var inst_24198 = (0);
var inst_24199 = (0);
var state_24335__$1 = (function (){var statearr_24389 = state_24335;
(statearr_24389[(7)] = inst_24196);

(statearr_24389[(8)] = inst_24199);

(statearr_24389[(9)] = inst_24198);

(statearr_24389[(10)] = inst_24197);

return statearr_24389;
})();
var statearr_24390_24463 = state_24335__$1;
(statearr_24390_24463[(2)] = null);

(statearr_24390_24463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (23))){
var inst_24252 = (state_24335[(23)]);
var inst_24255 = (state_24335[(26)]);
var inst_24253 = (state_24335[(24)]);
var inst_24257 = (state_24335[(25)]);
var inst_24249 = (state_24335[(19)]);
var inst_24260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24262 = (function (){var all_files = inst_24249;
var res_SINGLEQUOTE_ = inst_24252;
var res = inst_24253;
var files_not_loaded = inst_24255;
var dependencies_that_loaded = inst_24257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24255,inst_24253,inst_24257,inst_24249,inst_24260,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24261){
var map__24391 = p__24261;
var map__24391__$1 = ((((!((map__24391 == null)))?((((map__24391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24391):map__24391);
var request_url = cljs.core.get.call(null,map__24391__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24255,inst_24253,inst_24257,inst_24249,inst_24260,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24263 = cljs.core.reverse.call(null,inst_24257);
var inst_24264 = cljs.core.map.call(null,inst_24262,inst_24263);
var inst_24265 = cljs.core.pr_str.call(null,inst_24264);
var inst_24266 = figwheel.client.utils.log.call(null,inst_24265);
var state_24335__$1 = (function (){var statearr_24393 = state_24335;
(statearr_24393[(31)] = inst_24260);

return statearr_24393;
})();
var statearr_24394_24464 = state_24335__$1;
(statearr_24394_24464[(2)] = inst_24266);

(statearr_24394_24464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (35))){
var state_24335__$1 = state_24335;
var statearr_24395_24465 = state_24335__$1;
(statearr_24395_24465[(2)] = true);

(statearr_24395_24465[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (19))){
var inst_24239 = (state_24335[(12)]);
var inst_24245 = figwheel.client.file_reloading.expand_files.call(null,inst_24239);
var state_24335__$1 = state_24335;
var statearr_24396_24466 = state_24335__$1;
(statearr_24396_24466[(2)] = inst_24245);

(statearr_24396_24466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (11))){
var state_24335__$1 = state_24335;
var statearr_24397_24467 = state_24335__$1;
(statearr_24397_24467[(2)] = null);

(statearr_24397_24467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (9))){
var inst_24228 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24398_24468 = state_24335__$1;
(statearr_24398_24468[(2)] = inst_24228);

(statearr_24398_24468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (5))){
var inst_24199 = (state_24335[(8)]);
var inst_24198 = (state_24335[(9)]);
var inst_24201 = (inst_24199 < inst_24198);
var inst_24202 = inst_24201;
var state_24335__$1 = state_24335;
if(cljs.core.truth_(inst_24202)){
var statearr_24399_24469 = state_24335__$1;
(statearr_24399_24469[(1)] = (7));

} else {
var statearr_24400_24470 = state_24335__$1;
(statearr_24400_24470[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (14))){
var inst_24209 = (state_24335[(22)]);
var inst_24218 = cljs.core.first.call(null,inst_24209);
var inst_24219 = figwheel.client.file_reloading.eval_body.call(null,inst_24218,opts);
var inst_24220 = cljs.core.next.call(null,inst_24209);
var inst_24196 = inst_24220;
var inst_24197 = null;
var inst_24198 = (0);
var inst_24199 = (0);
var state_24335__$1 = (function (){var statearr_24401 = state_24335;
(statearr_24401[(32)] = inst_24219);

(statearr_24401[(7)] = inst_24196);

(statearr_24401[(8)] = inst_24199);

(statearr_24401[(9)] = inst_24198);

(statearr_24401[(10)] = inst_24197);

return statearr_24401;
})();
var statearr_24402_24471 = state_24335__$1;
(statearr_24402_24471[(2)] = null);

(statearr_24402_24471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (45))){
var state_24335__$1 = state_24335;
var statearr_24403_24472 = state_24335__$1;
(statearr_24403_24472[(2)] = null);

(statearr_24403_24472[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (26))){
var inst_24252 = (state_24335[(23)]);
var inst_24255 = (state_24335[(26)]);
var inst_24253 = (state_24335[(24)]);
var inst_24257 = (state_24335[(25)]);
var inst_24249 = (state_24335[(19)]);
var inst_24272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24274 = (function (){var all_files = inst_24249;
var res_SINGLEQUOTE_ = inst_24252;
var res = inst_24253;
var files_not_loaded = inst_24255;
var dependencies_that_loaded = inst_24257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24255,inst_24253,inst_24257,inst_24249,inst_24272,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24273){
var map__24404 = p__24273;
var map__24404__$1 = ((((!((map__24404 == null)))?((((map__24404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24404):map__24404);
var namespace = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24255,inst_24253,inst_24257,inst_24249,inst_24272,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24275 = cljs.core.map.call(null,inst_24274,inst_24253);
var inst_24276 = cljs.core.pr_str.call(null,inst_24275);
var inst_24277 = figwheel.client.utils.log.call(null,inst_24276);
var inst_24278 = (function (){var all_files = inst_24249;
var res_SINGLEQUOTE_ = inst_24252;
var res = inst_24253;
var files_not_loaded = inst_24255;
var dependencies_that_loaded = inst_24257;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24255,inst_24253,inst_24257,inst_24249,inst_24272,inst_24274,inst_24275,inst_24276,inst_24277,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24252,inst_24255,inst_24253,inst_24257,inst_24249,inst_24272,inst_24274,inst_24275,inst_24276,inst_24277,state_val_24336,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24279 = setTimeout(inst_24278,(10));
var state_24335__$1 = (function (){var statearr_24406 = state_24335;
(statearr_24406[(33)] = inst_24272);

(statearr_24406[(34)] = inst_24277);

return statearr_24406;
})();
var statearr_24407_24473 = state_24335__$1;
(statearr_24407_24473[(2)] = inst_24279);

(statearr_24407_24473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (16))){
var state_24335__$1 = state_24335;
var statearr_24408_24474 = state_24335__$1;
(statearr_24408_24474[(2)] = reload_dependents);

(statearr_24408_24474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (38))){
var inst_24289 = (state_24335[(16)]);
var inst_24306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24289);
var state_24335__$1 = state_24335;
var statearr_24409_24475 = state_24335__$1;
(statearr_24409_24475[(2)] = inst_24306);

(statearr_24409_24475[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (30))){
var state_24335__$1 = state_24335;
var statearr_24410_24476 = state_24335__$1;
(statearr_24410_24476[(2)] = null);

(statearr_24410_24476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (10))){
var inst_24209 = (state_24335[(22)]);
var inst_24211 = cljs.core.chunked_seq_QMARK_.call(null,inst_24209);
var state_24335__$1 = state_24335;
if(inst_24211){
var statearr_24411_24477 = state_24335__$1;
(statearr_24411_24477[(1)] = (13));

} else {
var statearr_24412_24478 = state_24335__$1;
(statearr_24412_24478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (18))){
var inst_24243 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
if(cljs.core.truth_(inst_24243)){
var statearr_24413_24479 = state_24335__$1;
(statearr_24413_24479[(1)] = (19));

} else {
var statearr_24414_24480 = state_24335__$1;
(statearr_24414_24480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (42))){
var state_24335__$1 = state_24335;
var statearr_24415_24481 = state_24335__$1;
(statearr_24415_24481[(2)] = null);

(statearr_24415_24481[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (37))){
var inst_24301 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24416_24482 = state_24335__$1;
(statearr_24416_24482[(2)] = inst_24301);

(statearr_24416_24482[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (8))){
var inst_24209 = (state_24335[(22)]);
var inst_24196 = (state_24335[(7)]);
var inst_24209__$1 = cljs.core.seq.call(null,inst_24196);
var state_24335__$1 = (function (){var statearr_24417 = state_24335;
(statearr_24417[(22)] = inst_24209__$1);

return statearr_24417;
})();
if(inst_24209__$1){
var statearr_24418_24483 = state_24335__$1;
(statearr_24418_24483[(1)] = (10));

} else {
var statearr_24419_24484 = state_24335__$1;
(statearr_24419_24484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20486__auto__,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto____1 = (function (state_24335){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_24335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__20490__auto__ = e24424;
var statearr_24425_24485 = state_24335;
(statearr_24425_24485[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24486 = state_24335;
state_24335 = G__24486;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto__ = function(state_24335){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto____1.call(this,state_24335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20600__auto__ = (function (){var statearr_24426 = f__20599__auto__.call(null);
(statearr_24426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__,map__24181,map__24181__$1,opts,before_jsload,on_jsload,reload_dependents,map__24182,map__24182__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20598__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24489,link){
var map__24492 = p__24489;
var map__24492__$1 = ((((!((map__24492 == null)))?((((map__24492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24492):map__24492);
var file = cljs.core.get.call(null,map__24492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24492,map__24492__$1,file){
return (function (p1__24487_SHARP_,p2__24488_SHARP_){
if(cljs.core._EQ_.call(null,p1__24487_SHARP_,p2__24488_SHARP_)){
return p1__24487_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24492,map__24492__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24498){
var map__24499 = p__24498;
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);
var match_length = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24494_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24494_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24501 = [];
var len__19501__auto___24504 = arguments.length;
var i__19502__auto___24505 = (0);
while(true){
if((i__19502__auto___24505 < len__19501__auto___24504)){
args24501.push((arguments[i__19502__auto___24505]));

var G__24506 = (i__19502__auto___24505 + (1));
i__19502__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var G__24503 = args24501.length;
switch (G__24503) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24501.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24508_SHARP_,p2__24509_SHARP_){
return cljs.core.assoc.call(null,p1__24508_SHARP_,cljs.core.get.call(null,p2__24509_SHARP_,key),p2__24509_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24510){
var map__24513 = p__24510;
var map__24513__$1 = ((((!((map__24513 == null)))?((((map__24513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24513):map__24513);
var f_data = map__24513__$1;
var file = cljs.core.get.call(null,map__24513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24515,files_msg){
var map__24522 = p__24515;
var map__24522__$1 = ((((!((map__24522 == null)))?((((map__24522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24522):map__24522);
var opts = map__24522__$1;
var on_cssload = cljs.core.get.call(null,map__24522__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24524_24528 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24525_24529 = null;
var count__24526_24530 = (0);
var i__24527_24531 = (0);
while(true){
if((i__24527_24531 < count__24526_24530)){
var f_24532 = cljs.core._nth.call(null,chunk__24525_24529,i__24527_24531);
figwheel.client.file_reloading.reload_css_file.call(null,f_24532);

var G__24533 = seq__24524_24528;
var G__24534 = chunk__24525_24529;
var G__24535 = count__24526_24530;
var G__24536 = (i__24527_24531 + (1));
seq__24524_24528 = G__24533;
chunk__24525_24529 = G__24534;
count__24526_24530 = G__24535;
i__24527_24531 = G__24536;
continue;
} else {
var temp__4657__auto___24537 = cljs.core.seq.call(null,seq__24524_24528);
if(temp__4657__auto___24537){
var seq__24524_24538__$1 = temp__4657__auto___24537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24524_24538__$1)){
var c__19243__auto___24539 = cljs.core.chunk_first.call(null,seq__24524_24538__$1);
var G__24540 = cljs.core.chunk_rest.call(null,seq__24524_24538__$1);
var G__24541 = c__19243__auto___24539;
var G__24542 = cljs.core.count.call(null,c__19243__auto___24539);
var G__24543 = (0);
seq__24524_24528 = G__24540;
chunk__24525_24529 = G__24541;
count__24526_24530 = G__24542;
i__24527_24531 = G__24543;
continue;
} else {
var f_24544 = cljs.core.first.call(null,seq__24524_24538__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24544);

var G__24545 = cljs.core.next.call(null,seq__24524_24538__$1);
var G__24546 = null;
var G__24547 = (0);
var G__24548 = (0);
seq__24524_24528 = G__24545;
chunk__24525_24529 = G__24546;
count__24526_24530 = G__24547;
i__24527_24531 = G__24548;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24522,map__24522__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24522,map__24522__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1463433287953