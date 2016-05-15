// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24984 = cljs.core._EQ_;
var expr__24985 = (function (){var or__18432__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e24988){if((e24988 instanceof Error)){
var e = e24988;
return false;
} else {
throw e24988;

}
}})();
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24984.call(null,"true",expr__24985))){
return true;
} else {
if(cljs.core.truth_(pred__24984.call(null,"false",expr__24985))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24985)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24990){if((e24990 instanceof Error)){
var e = e24990;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24990;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19508__auto__ = [];
var len__19501__auto___24992 = arguments.length;
var i__19502__auto___24993 = (0);
while(true){
if((i__19502__auto___24993 < len__19501__auto___24992)){
args__19508__auto__.push((arguments[i__19502__auto___24993]));

var G__24994 = (i__19502__auto___24993 + (1));
i__19502__auto___24993 = G__24994;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((0) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19509__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24991){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24991));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24995){
var map__24998 = p__24995;
var map__24998__$1 = ((((!((map__24998 == null)))?((((map__24998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24998):map__24998);
var message = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18432__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18420__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18420__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18420__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20598__auto___25160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___25160,ch){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___25160,ch){
return (function (state_25129){
var state_val_25130 = (state_25129[(1)]);
if((state_val_25130 === (7))){
var inst_25125 = (state_25129[(2)]);
var state_25129__$1 = state_25129;
var statearr_25131_25161 = state_25129__$1;
(statearr_25131_25161[(2)] = inst_25125);

(statearr_25131_25161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (1))){
var state_25129__$1 = state_25129;
var statearr_25132_25162 = state_25129__$1;
(statearr_25132_25162[(2)] = null);

(statearr_25132_25162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (4))){
var inst_25082 = (state_25129[(7)]);
var inst_25082__$1 = (state_25129[(2)]);
var state_25129__$1 = (function (){var statearr_25133 = state_25129;
(statearr_25133[(7)] = inst_25082__$1);

return statearr_25133;
})();
if(cljs.core.truth_(inst_25082__$1)){
var statearr_25134_25163 = state_25129__$1;
(statearr_25134_25163[(1)] = (5));

} else {
var statearr_25135_25164 = state_25129__$1;
(statearr_25135_25164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (15))){
var inst_25089 = (state_25129[(8)]);
var inst_25104 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25089);
var inst_25105 = cljs.core.first.call(null,inst_25104);
var inst_25106 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25105);
var inst_25107 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25106)].join('');
var inst_25108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25107);
var state_25129__$1 = state_25129;
var statearr_25136_25165 = state_25129__$1;
(statearr_25136_25165[(2)] = inst_25108);

(statearr_25136_25165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (13))){
var inst_25113 = (state_25129[(2)]);
var state_25129__$1 = state_25129;
var statearr_25137_25166 = state_25129__$1;
(statearr_25137_25166[(2)] = inst_25113);

(statearr_25137_25166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (6))){
var state_25129__$1 = state_25129;
var statearr_25138_25167 = state_25129__$1;
(statearr_25138_25167[(2)] = null);

(statearr_25138_25167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (17))){
var inst_25111 = (state_25129[(2)]);
var state_25129__$1 = state_25129;
var statearr_25139_25168 = state_25129__$1;
(statearr_25139_25168[(2)] = inst_25111);

(statearr_25139_25168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (3))){
var inst_25127 = (state_25129[(2)]);
var state_25129__$1 = state_25129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25129__$1,inst_25127);
} else {
if((state_val_25130 === (12))){
var inst_25088 = (state_25129[(9)]);
var inst_25102 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25088,opts);
var state_25129__$1 = state_25129;
if(cljs.core.truth_(inst_25102)){
var statearr_25140_25169 = state_25129__$1;
(statearr_25140_25169[(1)] = (15));

} else {
var statearr_25141_25170 = state_25129__$1;
(statearr_25141_25170[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (2))){
var state_25129__$1 = state_25129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25129__$1,(4),ch);
} else {
if((state_val_25130 === (11))){
var inst_25089 = (state_25129[(8)]);
var inst_25094 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25095 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25089);
var inst_25096 = cljs.core.async.timeout.call(null,(1000));
var inst_25097 = [inst_25095,inst_25096];
var inst_25098 = (new cljs.core.PersistentVector(null,2,(5),inst_25094,inst_25097,null));
var state_25129__$1 = state_25129;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25129__$1,(14),inst_25098);
} else {
if((state_val_25130 === (9))){
var inst_25089 = (state_25129[(8)]);
var inst_25115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25116 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25089);
var inst_25117 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25116);
var inst_25118 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25117)].join('');
var inst_25119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25118);
var state_25129__$1 = (function (){var statearr_25142 = state_25129;
(statearr_25142[(10)] = inst_25115);

return statearr_25142;
})();
var statearr_25143_25171 = state_25129__$1;
(statearr_25143_25171[(2)] = inst_25119);

(statearr_25143_25171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (5))){
var inst_25082 = (state_25129[(7)]);
var inst_25084 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25085 = (new cljs.core.PersistentArrayMap(null,2,inst_25084,null));
var inst_25086 = (new cljs.core.PersistentHashSet(null,inst_25085,null));
var inst_25087 = figwheel.client.focus_msgs.call(null,inst_25086,inst_25082);
var inst_25088 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25087);
var inst_25089 = cljs.core.first.call(null,inst_25087);
var inst_25090 = figwheel.client.autoload_QMARK_.call(null);
var state_25129__$1 = (function (){var statearr_25144 = state_25129;
(statearr_25144[(8)] = inst_25089);

(statearr_25144[(9)] = inst_25088);

return statearr_25144;
})();
if(cljs.core.truth_(inst_25090)){
var statearr_25145_25172 = state_25129__$1;
(statearr_25145_25172[(1)] = (8));

} else {
var statearr_25146_25173 = state_25129__$1;
(statearr_25146_25173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (14))){
var inst_25100 = (state_25129[(2)]);
var state_25129__$1 = state_25129;
var statearr_25147_25174 = state_25129__$1;
(statearr_25147_25174[(2)] = inst_25100);

(statearr_25147_25174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (16))){
var state_25129__$1 = state_25129;
var statearr_25148_25175 = state_25129__$1;
(statearr_25148_25175[(2)] = null);

(statearr_25148_25175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (10))){
var inst_25121 = (state_25129[(2)]);
var state_25129__$1 = (function (){var statearr_25149 = state_25129;
(statearr_25149[(11)] = inst_25121);

return statearr_25149;
})();
var statearr_25150_25176 = state_25129__$1;
(statearr_25150_25176[(2)] = null);

(statearr_25150_25176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25130 === (8))){
var inst_25088 = (state_25129[(9)]);
var inst_25092 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25088,opts);
var state_25129__$1 = state_25129;
if(cljs.core.truth_(inst_25092)){
var statearr_25151_25177 = state_25129__$1;
(statearr_25151_25177[(1)] = (11));

} else {
var statearr_25152_25178 = state_25129__$1;
(statearr_25152_25178[(1)] = (12));

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
});})(c__20598__auto___25160,ch))
;
return ((function (switch__20486__auto__,c__20598__auto___25160,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20487__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20487__auto____0 = (function (){
var statearr_25156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25156[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20487__auto__);

(statearr_25156[(1)] = (1));

return statearr_25156;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20487__auto____1 = (function (state_25129){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_25129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e25157){if((e25157 instanceof Object)){
var ex__20490__auto__ = e25157;
var statearr_25158_25179 = state_25129;
(statearr_25158_25179[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25180 = state_25129;
state_25129 = G__25180;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20487__auto__ = function(state_25129){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20487__auto____1.call(this,state_25129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20487__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20487__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___25160,ch))
})();
var state__20600__auto__ = (function (){var statearr_25159 = f__20599__auto__.call(null);
(statearr_25159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___25160);

return statearr_25159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___25160,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25181_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25181_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25188 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25188){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25186 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25187 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25187;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25186;
}}catch (e25185){if((e25185 instanceof Error)){
var e = e25185;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25188], null));
} else {
var e = e25185;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25188))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25189){
var map__25196 = p__25189;
var map__25196__$1 = ((((!((map__25196 == null)))?((((map__25196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25196):map__25196);
var opts = map__25196__$1;
var build_id = cljs.core.get.call(null,map__25196__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25196,map__25196__$1,opts,build_id){
return (function (p__25198){
var vec__25199 = p__25198;
var map__25200 = cljs.core.nth.call(null,vec__25199,(0),null);
var map__25200__$1 = ((((!((map__25200 == null)))?((((map__25200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25200):map__25200);
var msg = map__25200__$1;
var msg_name = cljs.core.get.call(null,map__25200__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25199,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25199,map__25200,map__25200__$1,msg,msg_name,_,map__25196,map__25196__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25199,map__25200,map__25200__$1,msg,msg_name,_,map__25196,map__25196__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25196,map__25196__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25206){
var vec__25207 = p__25206;
var map__25208 = cljs.core.nth.call(null,vec__25207,(0),null);
var map__25208__$1 = ((((!((map__25208 == null)))?((((map__25208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25208):map__25208);
var msg = map__25208__$1;
var msg_name = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25207,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25210){
var map__25220 = p__25210;
var map__25220__$1 = ((((!((map__25220 == null)))?((((map__25220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25220):map__25220);
var on_compile_warning = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25220,map__25220__$1,on_compile_warning,on_compile_fail){
return (function (p__25222){
var vec__25223 = p__25222;
var map__25224 = cljs.core.nth.call(null,vec__25223,(0),null);
var map__25224__$1 = ((((!((map__25224 == null)))?((((map__25224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25224):map__25224);
var msg = map__25224__$1;
var msg_name = cljs.core.get.call(null,map__25224__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25223,(1));
var pred__25226 = cljs.core._EQ_;
var expr__25227 = msg_name;
if(cljs.core.truth_(pred__25226.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25227))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25226.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25227))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25220,map__25220__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__,msg_hist,msg_names,msg){
return (function (state_25443){
var state_val_25444 = (state_25443[(1)]);
if((state_val_25444 === (7))){
var inst_25367 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25367)){
var statearr_25445_25491 = state_25443__$1;
(statearr_25445_25491[(1)] = (8));

} else {
var statearr_25446_25492 = state_25443__$1;
(statearr_25446_25492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (20))){
var inst_25437 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25447_25493 = state_25443__$1;
(statearr_25447_25493[(2)] = inst_25437);

(statearr_25447_25493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (27))){
var inst_25433 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25448_25494 = state_25443__$1;
(statearr_25448_25494[(2)] = inst_25433);

(statearr_25448_25494[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (1))){
var inst_25360 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25360)){
var statearr_25449_25495 = state_25443__$1;
(statearr_25449_25495[(1)] = (2));

} else {
var statearr_25450_25496 = state_25443__$1;
(statearr_25450_25496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (24))){
var inst_25435 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25451_25497 = state_25443__$1;
(statearr_25451_25497[(2)] = inst_25435);

(statearr_25451_25497[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (4))){
var inst_25441 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25443__$1,inst_25441);
} else {
if((state_val_25444 === (15))){
var inst_25439 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25452_25498 = state_25443__$1;
(statearr_25452_25498[(2)] = inst_25439);

(statearr_25452_25498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (21))){
var inst_25398 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25453_25499 = state_25443__$1;
(statearr_25453_25499[(2)] = inst_25398);

(statearr_25453_25499[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (31))){
var inst_25422 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25422)){
var statearr_25454_25500 = state_25443__$1;
(statearr_25454_25500[(1)] = (34));

} else {
var statearr_25455_25501 = state_25443__$1;
(statearr_25455_25501[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (32))){
var inst_25431 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25456_25502 = state_25443__$1;
(statearr_25456_25502[(2)] = inst_25431);

(statearr_25456_25502[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (33))){
var inst_25420 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25457_25503 = state_25443__$1;
(statearr_25457_25503[(2)] = inst_25420);

(statearr_25457_25503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (13))){
var inst_25381 = figwheel.client.heads_up.clear.call(null);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(16),inst_25381);
} else {
if((state_val_25444 === (22))){
var inst_25402 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25403 = figwheel.client.heads_up.append_message.call(null,inst_25402);
var state_25443__$1 = state_25443;
var statearr_25458_25504 = state_25443__$1;
(statearr_25458_25504[(2)] = inst_25403);

(statearr_25458_25504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (36))){
var inst_25429 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25459_25505 = state_25443__$1;
(statearr_25459_25505[(2)] = inst_25429);

(statearr_25459_25505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (29))){
var inst_25413 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25460_25506 = state_25443__$1;
(statearr_25460_25506[(2)] = inst_25413);

(statearr_25460_25506[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (6))){
var inst_25362 = (state_25443[(7)]);
var state_25443__$1 = state_25443;
var statearr_25461_25507 = state_25443__$1;
(statearr_25461_25507[(2)] = inst_25362);

(statearr_25461_25507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (28))){
var inst_25409 = (state_25443[(2)]);
var inst_25410 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25411 = figwheel.client.heads_up.display_warning.call(null,inst_25410);
var state_25443__$1 = (function (){var statearr_25462 = state_25443;
(statearr_25462[(8)] = inst_25409);

return statearr_25462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(29),inst_25411);
} else {
if((state_val_25444 === (25))){
var inst_25407 = figwheel.client.heads_up.clear.call(null);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(28),inst_25407);
} else {
if((state_val_25444 === (34))){
var inst_25424 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(37),inst_25424);
} else {
if((state_val_25444 === (17))){
var inst_25389 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25463_25508 = state_25443__$1;
(statearr_25463_25508[(2)] = inst_25389);

(statearr_25463_25508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (3))){
var inst_25379 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25379)){
var statearr_25464_25509 = state_25443__$1;
(statearr_25464_25509[(1)] = (13));

} else {
var statearr_25465_25510 = state_25443__$1;
(statearr_25465_25510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (12))){
var inst_25375 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25466_25511 = state_25443__$1;
(statearr_25466_25511[(2)] = inst_25375);

(statearr_25466_25511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (2))){
var inst_25362 = (state_25443[(7)]);
var inst_25362__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25443__$1 = (function (){var statearr_25467 = state_25443;
(statearr_25467[(7)] = inst_25362__$1);

return statearr_25467;
})();
if(cljs.core.truth_(inst_25362__$1)){
var statearr_25468_25512 = state_25443__$1;
(statearr_25468_25512[(1)] = (5));

} else {
var statearr_25469_25513 = state_25443__$1;
(statearr_25469_25513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (23))){
var inst_25405 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25405)){
var statearr_25470_25514 = state_25443__$1;
(statearr_25470_25514[(1)] = (25));

} else {
var statearr_25471_25515 = state_25443__$1;
(statearr_25471_25515[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (35))){
var state_25443__$1 = state_25443;
var statearr_25472_25516 = state_25443__$1;
(statearr_25472_25516[(2)] = null);

(statearr_25472_25516[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (19))){
var inst_25400 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25400)){
var statearr_25473_25517 = state_25443__$1;
(statearr_25473_25517[(1)] = (22));

} else {
var statearr_25474_25518 = state_25443__$1;
(statearr_25474_25518[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (11))){
var inst_25371 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25475_25519 = state_25443__$1;
(statearr_25475_25519[(2)] = inst_25371);

(statearr_25475_25519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (9))){
var inst_25373 = figwheel.client.heads_up.clear.call(null);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(12),inst_25373);
} else {
if((state_val_25444 === (5))){
var inst_25364 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25443__$1 = state_25443;
var statearr_25476_25520 = state_25443__$1;
(statearr_25476_25520[(2)] = inst_25364);

(statearr_25476_25520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (14))){
var inst_25391 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25391)){
var statearr_25477_25521 = state_25443__$1;
(statearr_25477_25521[(1)] = (18));

} else {
var statearr_25478_25522 = state_25443__$1;
(statearr_25478_25522[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (26))){
var inst_25415 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25443__$1 = state_25443;
if(cljs.core.truth_(inst_25415)){
var statearr_25479_25523 = state_25443__$1;
(statearr_25479_25523[(1)] = (30));

} else {
var statearr_25480_25524 = state_25443__$1;
(statearr_25480_25524[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (16))){
var inst_25383 = (state_25443[(2)]);
var inst_25384 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25385 = figwheel.client.format_messages.call(null,inst_25384);
var inst_25386 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25387 = figwheel.client.heads_up.display_error.call(null,inst_25385,inst_25386);
var state_25443__$1 = (function (){var statearr_25481 = state_25443;
(statearr_25481[(9)] = inst_25383);

return statearr_25481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(17),inst_25387);
} else {
if((state_val_25444 === (30))){
var inst_25417 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25418 = figwheel.client.heads_up.display_warning.call(null,inst_25417);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(33),inst_25418);
} else {
if((state_val_25444 === (10))){
var inst_25377 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25482_25525 = state_25443__$1;
(statearr_25482_25525[(2)] = inst_25377);

(statearr_25482_25525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (18))){
var inst_25393 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25394 = figwheel.client.format_messages.call(null,inst_25393);
var inst_25395 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25396 = figwheel.client.heads_up.display_error.call(null,inst_25394,inst_25395);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(21),inst_25396);
} else {
if((state_val_25444 === (37))){
var inst_25426 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25483_25526 = state_25443__$1;
(statearr_25483_25526[(2)] = inst_25426);

(statearr_25483_25526[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (8))){
var inst_25369 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(11),inst_25369);
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
});})(c__20598__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20486__auto__,c__20598__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto____0 = (function (){
var statearr_25487 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25487[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto__);

(statearr_25487[(1)] = (1));

return statearr_25487;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto____1 = (function (state_25443){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_25443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e25488){if((e25488 instanceof Object)){
var ex__20490__auto__ = e25488;
var statearr_25489_25527 = state_25443;
(statearr_25489_25527[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25528 = state_25443;
state_25443 = G__25528;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto__ = function(state_25443){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto____1.call(this,state_25443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__,msg_hist,msg_names,msg))
})();
var state__20600__auto__ = (function (){var statearr_25490 = f__20599__auto__.call(null);
(statearr_25490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_25490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__,msg_hist,msg_names,msg))
);

return c__20598__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20598__auto___25591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___25591,ch){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___25591,ch){
return (function (state_25574){
var state_val_25575 = (state_25574[(1)]);
if((state_val_25575 === (1))){
var state_25574__$1 = state_25574;
var statearr_25576_25592 = state_25574__$1;
(statearr_25576_25592[(2)] = null);

(statearr_25576_25592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (2))){
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25574__$1,(4),ch);
} else {
if((state_val_25575 === (3))){
var inst_25572 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25574__$1,inst_25572);
} else {
if((state_val_25575 === (4))){
var inst_25562 = (state_25574[(7)]);
var inst_25562__$1 = (state_25574[(2)]);
var state_25574__$1 = (function (){var statearr_25577 = state_25574;
(statearr_25577[(7)] = inst_25562__$1);

return statearr_25577;
})();
if(cljs.core.truth_(inst_25562__$1)){
var statearr_25578_25593 = state_25574__$1;
(statearr_25578_25593[(1)] = (5));

} else {
var statearr_25579_25594 = state_25574__$1;
(statearr_25579_25594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (5))){
var inst_25562 = (state_25574[(7)]);
var inst_25564 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25562);
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25574__$1,(8),inst_25564);
} else {
if((state_val_25575 === (6))){
var state_25574__$1 = state_25574;
var statearr_25580_25595 = state_25574__$1;
(statearr_25580_25595[(2)] = null);

(statearr_25580_25595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (7))){
var inst_25570 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25581_25596 = state_25574__$1;
(statearr_25581_25596[(2)] = inst_25570);

(statearr_25581_25596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (8))){
var inst_25566 = (state_25574[(2)]);
var state_25574__$1 = (function (){var statearr_25582 = state_25574;
(statearr_25582[(8)] = inst_25566);

return statearr_25582;
})();
var statearr_25583_25597 = state_25574__$1;
(statearr_25583_25597[(2)] = null);

(statearr_25583_25597[(1)] = (2));


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
});})(c__20598__auto___25591,ch))
;
return ((function (switch__20486__auto__,c__20598__auto___25591,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20487__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20487__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null,null,null];
(statearr_25587[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20487__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var figwheel$client$heads_up_plugin_$_state_machine__20487__auto____1 = (function (state_25574){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_25574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e25588){if((e25588 instanceof Object)){
var ex__20490__auto__ = e25588;
var statearr_25589_25598 = state_25574;
(statearr_25589_25598[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25599 = state_25574;
state_25574 = G__25599;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20487__auto__ = function(state_25574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20487__auto____1.call(this,state_25574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20487__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20487__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___25591,ch))
})();
var state__20600__auto__ = (function (){var statearr_25590 = f__20599__auto__.call(null);
(statearr_25590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___25591);

return statearr_25590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___25591,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__){
return (function (state_25620){
var state_val_25621 = (state_25620[(1)]);
if((state_val_25621 === (1))){
var inst_25615 = cljs.core.async.timeout.call(null,(3000));
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25620__$1,(2),inst_25615);
} else {
if((state_val_25621 === (2))){
var inst_25617 = (state_25620[(2)]);
var inst_25618 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25620__$1 = (function (){var statearr_25622 = state_25620;
(statearr_25622[(7)] = inst_25617);

return statearr_25622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25620__$1,inst_25618);
} else {
return null;
}
}
});})(c__20598__auto__))
;
return ((function (switch__20486__auto__,c__20598__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20487__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20487__auto____0 = (function (){
var statearr_25626 = [null,null,null,null,null,null,null,null];
(statearr_25626[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20487__auto__);

(statearr_25626[(1)] = (1));

return statearr_25626;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20487__auto____1 = (function (state_25620){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_25620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e25627){if((e25627 instanceof Object)){
var ex__20490__auto__ = e25627;
var statearr_25628_25630 = state_25620;
(statearr_25628_25630[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25631 = state_25620;
state_25620 = G__25631;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20487__auto__ = function(state_25620){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20487__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20487__auto____1.call(this,state_25620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20487__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20487__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__))
})();
var state__20600__auto__ = (function (){var statearr_25629 = f__20599__auto__.call(null);
(statearr_25629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_25629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__))
);

return c__20598__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25632){
var map__25639 = p__25632;
var map__25639__$1 = ((((!((map__25639 == null)))?((((map__25639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25639):map__25639);
var ed = map__25639__$1;
var formatted_exception = cljs.core.get.call(null,map__25639__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25639__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25639__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25641_25645 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25642_25646 = null;
var count__25643_25647 = (0);
var i__25644_25648 = (0);
while(true){
if((i__25644_25648 < count__25643_25647)){
var msg_25649 = cljs.core._nth.call(null,chunk__25642_25646,i__25644_25648);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25649);

var G__25650 = seq__25641_25645;
var G__25651 = chunk__25642_25646;
var G__25652 = count__25643_25647;
var G__25653 = (i__25644_25648 + (1));
seq__25641_25645 = G__25650;
chunk__25642_25646 = G__25651;
count__25643_25647 = G__25652;
i__25644_25648 = G__25653;
continue;
} else {
var temp__4657__auto___25654 = cljs.core.seq.call(null,seq__25641_25645);
if(temp__4657__auto___25654){
var seq__25641_25655__$1 = temp__4657__auto___25654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25641_25655__$1)){
var c__19243__auto___25656 = cljs.core.chunk_first.call(null,seq__25641_25655__$1);
var G__25657 = cljs.core.chunk_rest.call(null,seq__25641_25655__$1);
var G__25658 = c__19243__auto___25656;
var G__25659 = cljs.core.count.call(null,c__19243__auto___25656);
var G__25660 = (0);
seq__25641_25645 = G__25657;
chunk__25642_25646 = G__25658;
count__25643_25647 = G__25659;
i__25644_25648 = G__25660;
continue;
} else {
var msg_25661 = cljs.core.first.call(null,seq__25641_25655__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25661);

var G__25662 = cljs.core.next.call(null,seq__25641_25655__$1);
var G__25663 = null;
var G__25664 = (0);
var G__25665 = (0);
seq__25641_25645 = G__25662;
chunk__25642_25646 = G__25663;
count__25643_25647 = G__25664;
i__25644_25648 = G__25665;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25666){
var map__25669 = p__25666;
var map__25669__$1 = ((((!((map__25669 == null)))?((((map__25669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25669):map__25669);
var w = map__25669__$1;
var message = cljs.core.get.call(null,map__25669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18420__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18420__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18420__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25677 = cljs.core.seq.call(null,plugins);
var chunk__25678 = null;
var count__25679 = (0);
var i__25680 = (0);
while(true){
if((i__25680 < count__25679)){
var vec__25681 = cljs.core._nth.call(null,chunk__25678,i__25680);
var k = cljs.core.nth.call(null,vec__25681,(0),null);
var plugin = cljs.core.nth.call(null,vec__25681,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25683 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25677,chunk__25678,count__25679,i__25680,pl_25683,vec__25681,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25683.call(null,msg_hist);
});})(seq__25677,chunk__25678,count__25679,i__25680,pl_25683,vec__25681,k,plugin))
);
} else {
}

var G__25684 = seq__25677;
var G__25685 = chunk__25678;
var G__25686 = count__25679;
var G__25687 = (i__25680 + (1));
seq__25677 = G__25684;
chunk__25678 = G__25685;
count__25679 = G__25686;
i__25680 = G__25687;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25677);
if(temp__4657__auto__){
var seq__25677__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25677__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__25677__$1);
var G__25688 = cljs.core.chunk_rest.call(null,seq__25677__$1);
var G__25689 = c__19243__auto__;
var G__25690 = cljs.core.count.call(null,c__19243__auto__);
var G__25691 = (0);
seq__25677 = G__25688;
chunk__25678 = G__25689;
count__25679 = G__25690;
i__25680 = G__25691;
continue;
} else {
var vec__25682 = cljs.core.first.call(null,seq__25677__$1);
var k = cljs.core.nth.call(null,vec__25682,(0),null);
var plugin = cljs.core.nth.call(null,vec__25682,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25692 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25677,chunk__25678,count__25679,i__25680,pl_25692,vec__25682,k,plugin,seq__25677__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25692.call(null,msg_hist);
});})(seq__25677,chunk__25678,count__25679,i__25680,pl_25692,vec__25682,k,plugin,seq__25677__$1,temp__4657__auto__))
);
} else {
}

var G__25693 = cljs.core.next.call(null,seq__25677__$1);
var G__25694 = null;
var G__25695 = (0);
var G__25696 = (0);
seq__25677 = G__25693;
chunk__25678 = G__25694;
count__25679 = G__25695;
i__25680 = G__25696;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25697 = [];
var len__19501__auto___25700 = arguments.length;
var i__19502__auto___25701 = (0);
while(true){
if((i__19502__auto___25701 < len__19501__auto___25700)){
args25697.push((arguments[i__19502__auto___25701]));

var G__25702 = (i__19502__auto___25701 + (1));
i__19502__auto___25701 = G__25702;
continue;
} else {
}
break;
}

var G__25699 = args25697.length;
switch (G__25699) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25697.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19508__auto__ = [];
var len__19501__auto___25708 = arguments.length;
var i__19502__auto___25709 = (0);
while(true){
if((i__19502__auto___25709 < len__19501__auto___25708)){
args__19508__auto__.push((arguments[i__19502__auto___25709]));

var G__25710 = (i__19502__auto___25709 + (1));
i__19502__auto___25709 = G__25710;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((0) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19509__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25705){
var map__25706 = p__25705;
var map__25706__$1 = ((((!((map__25706 == null)))?((((map__25706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25706):map__25706);
var opts = map__25706__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25704){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25704));
});

//# sourceMappingURL=client.js.map?rel=1463305606769