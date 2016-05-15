// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20643 = [];
var len__19501__auto___20649 = arguments.length;
var i__19502__auto___20650 = (0);
while(true){
if((i__19502__auto___20650 < len__19501__auto___20649)){
args20643.push((arguments[i__19502__auto___20650]));

var G__20651 = (i__19502__auto___20650 + (1));
i__19502__auto___20650 = G__20651;
continue;
} else {
}
break;
}

var G__20645 = args20643.length;
switch (G__20645) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20643.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20646 = (function (f,blockable,meta20647){
this.f = f;
this.blockable = blockable;
this.meta20647 = meta20647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20648,meta20647__$1){
var self__ = this;
var _20648__$1 = this;
return (new cljs.core.async.t_cljs$core$async20646(self__.f,self__.blockable,meta20647__$1));
});

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20648){
var self__ = this;
var _20648__$1 = this;
return self__.meta20647;
});

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20647","meta20647",-2053437569,null)], null);
});

cljs.core.async.t_cljs$core$async20646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20646";

cljs.core.async.t_cljs$core$async20646.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async20646");
});

cljs.core.async.__GT_t_cljs$core$async20646 = (function cljs$core$async$__GT_t_cljs$core$async20646(f__$1,blockable__$1,meta20647){
return (new cljs.core.async.t_cljs$core$async20646(f__$1,blockable__$1,meta20647));
});

}

return (new cljs.core.async.t_cljs$core$async20646(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20655 = [];
var len__19501__auto___20658 = arguments.length;
var i__19502__auto___20659 = (0);
while(true){
if((i__19502__auto___20659 < len__19501__auto___20658)){
args20655.push((arguments[i__19502__auto___20659]));

var G__20660 = (i__19502__auto___20659 + (1));
i__19502__auto___20659 = G__20660;
continue;
} else {
}
break;
}

var G__20657 = args20655.length;
switch (G__20657) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20655.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20662 = [];
var len__19501__auto___20665 = arguments.length;
var i__19502__auto___20666 = (0);
while(true){
if((i__19502__auto___20666 < len__19501__auto___20665)){
args20662.push((arguments[i__19502__auto___20666]));

var G__20667 = (i__19502__auto___20666 + (1));
i__19502__auto___20666 = G__20667;
continue;
} else {
}
break;
}

var G__20664 = args20662.length;
switch (G__20664) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20662.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20669 = [];
var len__19501__auto___20672 = arguments.length;
var i__19502__auto___20673 = (0);
while(true){
if((i__19502__auto___20673 < len__19501__auto___20672)){
args20669.push((arguments[i__19502__auto___20673]));

var G__20674 = (i__19502__auto___20673 + (1));
i__19502__auto___20673 = G__20674;
continue;
} else {
}
break;
}

var G__20671 = args20669.length;
switch (G__20671) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20669.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20676 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20676);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20676,ret){
return (function (){
return fn1.call(null,val_20676);
});})(val_20676,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20677 = [];
var len__19501__auto___20680 = arguments.length;
var i__19502__auto___20681 = (0);
while(true){
if((i__19502__auto___20681 < len__19501__auto___20680)){
args20677.push((arguments[i__19502__auto___20681]));

var G__20682 = (i__19502__auto___20681 + (1));
i__19502__auto___20681 = G__20682;
continue;
} else {
}
break;
}

var G__20679 = args20677.length;
switch (G__20679) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20677.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19346__auto___20684 = n;
var x_20685 = (0);
while(true){
if((x_20685 < n__19346__auto___20684)){
(a[x_20685] = (0));

var G__20686 = (x_20685 + (1));
x_20685 = G__20686;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20687 = (i + (1));
i = G__20687;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20691 = (function (alt_flag,flag,meta20692){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20692 = meta20692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20693,meta20692__$1){
var self__ = this;
var _20693__$1 = this;
return (new cljs.core.async.t_cljs$core$async20691(self__.alt_flag,self__.flag,meta20692__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20693){
var self__ = this;
var _20693__$1 = this;
return self__.meta20692;
});})(flag))
;

cljs.core.async.t_cljs$core$async20691.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20691.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20692","meta20692",748794449,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20691";

cljs.core.async.t_cljs$core$async20691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async20691");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20691 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20691(alt_flag__$1,flag__$1,meta20692){
return (new cljs.core.async.t_cljs$core$async20691(alt_flag__$1,flag__$1,meta20692));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20691(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20697 = (function (alt_handler,flag,cb,meta20698){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20698 = meta20698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20699,meta20698__$1){
var self__ = this;
var _20699__$1 = this;
return (new cljs.core.async.t_cljs$core$async20697(self__.alt_handler,self__.flag,self__.cb,meta20698__$1));
});

cljs.core.async.t_cljs$core$async20697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20699){
var self__ = this;
var _20699__$1 = this;
return self__.meta20698;
});

cljs.core.async.t_cljs$core$async20697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20698","meta20698",1986572326,null)], null);
});

cljs.core.async.t_cljs$core$async20697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20697";

cljs.core.async.t_cljs$core$async20697.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async20697");
});

cljs.core.async.__GT_t_cljs$core$async20697 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20697(alt_handler__$1,flag__$1,cb__$1,meta20698){
return (new cljs.core.async.t_cljs$core$async20697(alt_handler__$1,flag__$1,cb__$1,meta20698));
});

}

return (new cljs.core.async.t_cljs$core$async20697(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20700_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20701_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18432__auto__ = wport;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20702 = (i + (1));
i = G__20702;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18432__auto__ = ret;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18420__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18420__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18420__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19508__auto__ = [];
var len__19501__auto___20708 = arguments.length;
var i__19502__auto___20709 = (0);
while(true){
if((i__19502__auto___20709 < len__19501__auto___20708)){
args__19508__auto__.push((arguments[i__19502__auto___20709]));

var G__20710 = (i__19502__auto___20709 + (1));
i__19502__auto___20709 = G__20710;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((1) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19509__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20705){
var map__20706 = p__20705;
var map__20706__$1 = ((((!((map__20706 == null)))?((((map__20706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20706):map__20706);
var opts = map__20706__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20703){
var G__20704 = cljs.core.first.call(null,seq20703);
var seq20703__$1 = cljs.core.next.call(null,seq20703);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20704,seq20703__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20711 = [];
var len__19501__auto___20761 = arguments.length;
var i__19502__auto___20762 = (0);
while(true){
if((i__19502__auto___20762 < len__19501__auto___20761)){
args20711.push((arguments[i__19502__auto___20762]));

var G__20763 = (i__19502__auto___20762 + (1));
i__19502__auto___20762 = G__20763;
continue;
} else {
}
break;
}

var G__20713 = args20711.length;
switch (G__20713) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20711.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20598__auto___20765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___20765){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___20765){
return (function (state_20737){
var state_val_20738 = (state_20737[(1)]);
if((state_val_20738 === (7))){
var inst_20733 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20739_20766 = state_20737__$1;
(statearr_20739_20766[(2)] = inst_20733);

(statearr_20739_20766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (1))){
var state_20737__$1 = state_20737;
var statearr_20740_20767 = state_20737__$1;
(statearr_20740_20767[(2)] = null);

(statearr_20740_20767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (4))){
var inst_20716 = (state_20737[(7)]);
var inst_20716__$1 = (state_20737[(2)]);
var inst_20717 = (inst_20716__$1 == null);
var state_20737__$1 = (function (){var statearr_20741 = state_20737;
(statearr_20741[(7)] = inst_20716__$1);

return statearr_20741;
})();
if(cljs.core.truth_(inst_20717)){
var statearr_20742_20768 = state_20737__$1;
(statearr_20742_20768[(1)] = (5));

} else {
var statearr_20743_20769 = state_20737__$1;
(statearr_20743_20769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (13))){
var state_20737__$1 = state_20737;
var statearr_20744_20770 = state_20737__$1;
(statearr_20744_20770[(2)] = null);

(statearr_20744_20770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (6))){
var inst_20716 = (state_20737[(7)]);
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20737__$1,(11),to,inst_20716);
} else {
if((state_val_20738 === (3))){
var inst_20735 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20737__$1,inst_20735);
} else {
if((state_val_20738 === (12))){
var state_20737__$1 = state_20737;
var statearr_20745_20771 = state_20737__$1;
(statearr_20745_20771[(2)] = null);

(statearr_20745_20771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (2))){
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20737__$1,(4),from);
} else {
if((state_val_20738 === (11))){
var inst_20726 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
if(cljs.core.truth_(inst_20726)){
var statearr_20746_20772 = state_20737__$1;
(statearr_20746_20772[(1)] = (12));

} else {
var statearr_20747_20773 = state_20737__$1;
(statearr_20747_20773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (9))){
var state_20737__$1 = state_20737;
var statearr_20748_20774 = state_20737__$1;
(statearr_20748_20774[(2)] = null);

(statearr_20748_20774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (5))){
var state_20737__$1 = state_20737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20749_20775 = state_20737__$1;
(statearr_20749_20775[(1)] = (8));

} else {
var statearr_20750_20776 = state_20737__$1;
(statearr_20750_20776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (14))){
var inst_20731 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20751_20777 = state_20737__$1;
(statearr_20751_20777[(2)] = inst_20731);

(statearr_20751_20777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (10))){
var inst_20723 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20752_20778 = state_20737__$1;
(statearr_20752_20778[(2)] = inst_20723);

(statearr_20752_20778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (8))){
var inst_20720 = cljs.core.async.close_BANG_.call(null,to);
var state_20737__$1 = state_20737;
var statearr_20753_20779 = state_20737__$1;
(statearr_20753_20779[(2)] = inst_20720);

(statearr_20753_20779[(1)] = (10));


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
});})(c__20598__auto___20765))
;
return ((function (switch__20486__auto__,c__20598__auto___20765){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_20757 = [null,null,null,null,null,null,null,null];
(statearr_20757[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_20757[(1)] = (1));

return statearr_20757;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_20737){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_20737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e20758){if((e20758 instanceof Object)){
var ex__20490__auto__ = e20758;
var statearr_20759_20780 = state_20737;
(statearr_20759_20780[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20781 = state_20737;
state_20737 = G__20781;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_20737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_20737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___20765))
})();
var state__20600__auto__ = (function (){var statearr_20760 = f__20599__auto__.call(null);
(statearr_20760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___20765);

return statearr_20760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___20765))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20965){
var vec__20966 = p__20965;
var v = cljs.core.nth.call(null,vec__20966,(0),null);
var p = cljs.core.nth.call(null,vec__20966,(1),null);
var job = vec__20966;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20598__auto___21148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___21148,res,vec__20966,v,p,job,jobs,results){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___21148,res,vec__20966,v,p,job,jobs,results){
return (function (state_20971){
var state_val_20972 = (state_20971[(1)]);
if((state_val_20972 === (1))){
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20971__$1,(2),res,v);
} else {
if((state_val_20972 === (2))){
var inst_20968 = (state_20971[(2)]);
var inst_20969 = cljs.core.async.close_BANG_.call(null,res);
var state_20971__$1 = (function (){var statearr_20973 = state_20971;
(statearr_20973[(7)] = inst_20968);

return statearr_20973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20971__$1,inst_20969);
} else {
return null;
}
}
});})(c__20598__auto___21148,res,vec__20966,v,p,job,jobs,results))
;
return ((function (switch__20486__auto__,c__20598__auto___21148,res,vec__20966,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0 = (function (){
var statearr_20977 = [null,null,null,null,null,null,null,null];
(statearr_20977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__);

(statearr_20977[(1)] = (1));

return statearr_20977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1 = (function (state_20971){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_20971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e20978){if((e20978 instanceof Object)){
var ex__20490__auto__ = e20978;
var statearr_20979_21149 = state_20971;
(statearr_20979_21149[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21150 = state_20971;
state_20971 = G__21150;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = function(state_20971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1.call(this,state_20971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___21148,res,vec__20966,v,p,job,jobs,results))
})();
var state__20600__auto__ = (function (){var statearr_20980 = f__20599__auto__.call(null);
(statearr_20980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___21148);

return statearr_20980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___21148,res,vec__20966,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20981){
var vec__20982 = p__20981;
var v = cljs.core.nth.call(null,vec__20982,(0),null);
var p = cljs.core.nth.call(null,vec__20982,(1),null);
var job = vec__20982;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19346__auto___21151 = n;
var __21152 = (0);
while(true){
if((__21152 < n__19346__auto___21151)){
var G__20983_21153 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20983_21153) {
case "compute":
var c__20598__auto___21155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21152,c__20598__auto___21155,G__20983_21153,n__19346__auto___21151,jobs,results,process,async){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (__21152,c__20598__auto___21155,G__20983_21153,n__19346__auto___21151,jobs,results,process,async){
return (function (state_20996){
var state_val_20997 = (state_20996[(1)]);
if((state_val_20997 === (1))){
var state_20996__$1 = state_20996;
var statearr_20998_21156 = state_20996__$1;
(statearr_20998_21156[(2)] = null);

(statearr_20998_21156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20997 === (2))){
var state_20996__$1 = state_20996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20996__$1,(4),jobs);
} else {
if((state_val_20997 === (3))){
var inst_20994 = (state_20996[(2)]);
var state_20996__$1 = state_20996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20996__$1,inst_20994);
} else {
if((state_val_20997 === (4))){
var inst_20986 = (state_20996[(2)]);
var inst_20987 = process.call(null,inst_20986);
var state_20996__$1 = state_20996;
if(cljs.core.truth_(inst_20987)){
var statearr_20999_21157 = state_20996__$1;
(statearr_20999_21157[(1)] = (5));

} else {
var statearr_21000_21158 = state_20996__$1;
(statearr_21000_21158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20997 === (5))){
var state_20996__$1 = state_20996;
var statearr_21001_21159 = state_20996__$1;
(statearr_21001_21159[(2)] = null);

(statearr_21001_21159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20997 === (6))){
var state_20996__$1 = state_20996;
var statearr_21002_21160 = state_20996__$1;
(statearr_21002_21160[(2)] = null);

(statearr_21002_21160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20997 === (7))){
var inst_20992 = (state_20996[(2)]);
var state_20996__$1 = state_20996;
var statearr_21003_21161 = state_20996__$1;
(statearr_21003_21161[(2)] = inst_20992);

(statearr_21003_21161[(1)] = (3));


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
});})(__21152,c__20598__auto___21155,G__20983_21153,n__19346__auto___21151,jobs,results,process,async))
;
return ((function (__21152,switch__20486__auto__,c__20598__auto___21155,G__20983_21153,n__19346__auto___21151,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0 = (function (){
var statearr_21007 = [null,null,null,null,null,null,null];
(statearr_21007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__);

(statearr_21007[(1)] = (1));

return statearr_21007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1 = (function (state_20996){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_20996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21008){if((e21008 instanceof Object)){
var ex__20490__auto__ = e21008;
var statearr_21009_21162 = state_20996;
(statearr_21009_21162[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21163 = state_20996;
state_20996 = G__21163;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = function(state_20996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1.call(this,state_20996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__;
})()
;})(__21152,switch__20486__auto__,c__20598__auto___21155,G__20983_21153,n__19346__auto___21151,jobs,results,process,async))
})();
var state__20600__auto__ = (function (){var statearr_21010 = f__20599__auto__.call(null);
(statearr_21010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___21155);

return statearr_21010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(__21152,c__20598__auto___21155,G__20983_21153,n__19346__auto___21151,jobs,results,process,async))
);


break;
case "async":
var c__20598__auto___21164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21152,c__20598__auto___21164,G__20983_21153,n__19346__auto___21151,jobs,results,process,async){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (__21152,c__20598__auto___21164,G__20983_21153,n__19346__auto___21151,jobs,results,process,async){
return (function (state_21023){
var state_val_21024 = (state_21023[(1)]);
if((state_val_21024 === (1))){
var state_21023__$1 = state_21023;
var statearr_21025_21165 = state_21023__$1;
(statearr_21025_21165[(2)] = null);

(statearr_21025_21165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (2))){
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21023__$1,(4),jobs);
} else {
if((state_val_21024 === (3))){
var inst_21021 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21023__$1,inst_21021);
} else {
if((state_val_21024 === (4))){
var inst_21013 = (state_21023[(2)]);
var inst_21014 = async.call(null,inst_21013);
var state_21023__$1 = state_21023;
if(cljs.core.truth_(inst_21014)){
var statearr_21026_21166 = state_21023__$1;
(statearr_21026_21166[(1)] = (5));

} else {
var statearr_21027_21167 = state_21023__$1;
(statearr_21027_21167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (5))){
var state_21023__$1 = state_21023;
var statearr_21028_21168 = state_21023__$1;
(statearr_21028_21168[(2)] = null);

(statearr_21028_21168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (6))){
var state_21023__$1 = state_21023;
var statearr_21029_21169 = state_21023__$1;
(statearr_21029_21169[(2)] = null);

(statearr_21029_21169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (7))){
var inst_21019 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
var statearr_21030_21170 = state_21023__$1;
(statearr_21030_21170[(2)] = inst_21019);

(statearr_21030_21170[(1)] = (3));


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
});})(__21152,c__20598__auto___21164,G__20983_21153,n__19346__auto___21151,jobs,results,process,async))
;
return ((function (__21152,switch__20486__auto__,c__20598__auto___21164,G__20983_21153,n__19346__auto___21151,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0 = (function (){
var statearr_21034 = [null,null,null,null,null,null,null];
(statearr_21034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__);

(statearr_21034[(1)] = (1));

return statearr_21034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1 = (function (state_21023){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21035){if((e21035 instanceof Object)){
var ex__20490__auto__ = e21035;
var statearr_21036_21171 = state_21023;
(statearr_21036_21171[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21172 = state_21023;
state_21023 = G__21172;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = function(state_21023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1.call(this,state_21023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__;
})()
;})(__21152,switch__20486__auto__,c__20598__auto___21164,G__20983_21153,n__19346__auto___21151,jobs,results,process,async))
})();
var state__20600__auto__ = (function (){var statearr_21037 = f__20599__auto__.call(null);
(statearr_21037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___21164);

return statearr_21037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(__21152,c__20598__auto___21164,G__20983_21153,n__19346__auto___21151,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21173 = (__21152 + (1));
__21152 = G__21173;
continue;
} else {
}
break;
}

var c__20598__auto___21174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___21174,jobs,results,process,async){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___21174,jobs,results,process,async){
return (function (state_21059){
var state_val_21060 = (state_21059[(1)]);
if((state_val_21060 === (1))){
var state_21059__$1 = state_21059;
var statearr_21061_21175 = state_21059__$1;
(statearr_21061_21175[(2)] = null);

(statearr_21061_21175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21060 === (2))){
var state_21059__$1 = state_21059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21059__$1,(4),from);
} else {
if((state_val_21060 === (3))){
var inst_21057 = (state_21059[(2)]);
var state_21059__$1 = state_21059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21059__$1,inst_21057);
} else {
if((state_val_21060 === (4))){
var inst_21040 = (state_21059[(7)]);
var inst_21040__$1 = (state_21059[(2)]);
var inst_21041 = (inst_21040__$1 == null);
var state_21059__$1 = (function (){var statearr_21062 = state_21059;
(statearr_21062[(7)] = inst_21040__$1);

return statearr_21062;
})();
if(cljs.core.truth_(inst_21041)){
var statearr_21063_21176 = state_21059__$1;
(statearr_21063_21176[(1)] = (5));

} else {
var statearr_21064_21177 = state_21059__$1;
(statearr_21064_21177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21060 === (5))){
var inst_21043 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21059__$1 = state_21059;
var statearr_21065_21178 = state_21059__$1;
(statearr_21065_21178[(2)] = inst_21043);

(statearr_21065_21178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21060 === (6))){
var inst_21040 = (state_21059[(7)]);
var inst_21045 = (state_21059[(8)]);
var inst_21045__$1 = cljs.core.async.chan.call(null,(1));
var inst_21046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21047 = [inst_21040,inst_21045__$1];
var inst_21048 = (new cljs.core.PersistentVector(null,2,(5),inst_21046,inst_21047,null));
var state_21059__$1 = (function (){var statearr_21066 = state_21059;
(statearr_21066[(8)] = inst_21045__$1);

return statearr_21066;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21059__$1,(8),jobs,inst_21048);
} else {
if((state_val_21060 === (7))){
var inst_21055 = (state_21059[(2)]);
var state_21059__$1 = state_21059;
var statearr_21067_21179 = state_21059__$1;
(statearr_21067_21179[(2)] = inst_21055);

(statearr_21067_21179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21060 === (8))){
var inst_21045 = (state_21059[(8)]);
var inst_21050 = (state_21059[(2)]);
var state_21059__$1 = (function (){var statearr_21068 = state_21059;
(statearr_21068[(9)] = inst_21050);

return statearr_21068;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21059__$1,(9),results,inst_21045);
} else {
if((state_val_21060 === (9))){
var inst_21052 = (state_21059[(2)]);
var state_21059__$1 = (function (){var statearr_21069 = state_21059;
(statearr_21069[(10)] = inst_21052);

return statearr_21069;
})();
var statearr_21070_21180 = state_21059__$1;
(statearr_21070_21180[(2)] = null);

(statearr_21070_21180[(1)] = (2));


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
});})(c__20598__auto___21174,jobs,results,process,async))
;
return ((function (switch__20486__auto__,c__20598__auto___21174,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0 = (function (){
var statearr_21074 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__);

(statearr_21074[(1)] = (1));

return statearr_21074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1 = (function (state_21059){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21075){if((e21075 instanceof Object)){
var ex__20490__auto__ = e21075;
var statearr_21076_21181 = state_21059;
(statearr_21076_21181[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21182 = state_21059;
state_21059 = G__21182;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = function(state_21059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1.call(this,state_21059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___21174,jobs,results,process,async))
})();
var state__20600__auto__ = (function (){var statearr_21077 = f__20599__auto__.call(null);
(statearr_21077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___21174);

return statearr_21077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___21174,jobs,results,process,async))
);


var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__,jobs,results,process,async){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__,jobs,results,process,async){
return (function (state_21115){
var state_val_21116 = (state_21115[(1)]);
if((state_val_21116 === (7))){
var inst_21111 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21117_21183 = state_21115__$1;
(statearr_21117_21183[(2)] = inst_21111);

(statearr_21117_21183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (20))){
var state_21115__$1 = state_21115;
var statearr_21118_21184 = state_21115__$1;
(statearr_21118_21184[(2)] = null);

(statearr_21118_21184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (1))){
var state_21115__$1 = state_21115;
var statearr_21119_21185 = state_21115__$1;
(statearr_21119_21185[(2)] = null);

(statearr_21119_21185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (4))){
var inst_21080 = (state_21115[(7)]);
var inst_21080__$1 = (state_21115[(2)]);
var inst_21081 = (inst_21080__$1 == null);
var state_21115__$1 = (function (){var statearr_21120 = state_21115;
(statearr_21120[(7)] = inst_21080__$1);

return statearr_21120;
})();
if(cljs.core.truth_(inst_21081)){
var statearr_21121_21186 = state_21115__$1;
(statearr_21121_21186[(1)] = (5));

} else {
var statearr_21122_21187 = state_21115__$1;
(statearr_21122_21187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (15))){
var inst_21093 = (state_21115[(8)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21115__$1,(18),to,inst_21093);
} else {
if((state_val_21116 === (21))){
var inst_21106 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21123_21188 = state_21115__$1;
(statearr_21123_21188[(2)] = inst_21106);

(statearr_21123_21188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (13))){
var inst_21108 = (state_21115[(2)]);
var state_21115__$1 = (function (){var statearr_21124 = state_21115;
(statearr_21124[(9)] = inst_21108);

return statearr_21124;
})();
var statearr_21125_21189 = state_21115__$1;
(statearr_21125_21189[(2)] = null);

(statearr_21125_21189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (6))){
var inst_21080 = (state_21115[(7)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21115__$1,(11),inst_21080);
} else {
if((state_val_21116 === (17))){
var inst_21101 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21101)){
var statearr_21126_21190 = state_21115__$1;
(statearr_21126_21190[(1)] = (19));

} else {
var statearr_21127_21191 = state_21115__$1;
(statearr_21127_21191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (3))){
var inst_21113 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21115__$1,inst_21113);
} else {
if((state_val_21116 === (12))){
var inst_21090 = (state_21115[(10)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21115__$1,(14),inst_21090);
} else {
if((state_val_21116 === (2))){
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21115__$1,(4),results);
} else {
if((state_val_21116 === (19))){
var state_21115__$1 = state_21115;
var statearr_21128_21192 = state_21115__$1;
(statearr_21128_21192[(2)] = null);

(statearr_21128_21192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (11))){
var inst_21090 = (state_21115[(2)]);
var state_21115__$1 = (function (){var statearr_21129 = state_21115;
(statearr_21129[(10)] = inst_21090);

return statearr_21129;
})();
var statearr_21130_21193 = state_21115__$1;
(statearr_21130_21193[(2)] = null);

(statearr_21130_21193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (9))){
var state_21115__$1 = state_21115;
var statearr_21131_21194 = state_21115__$1;
(statearr_21131_21194[(2)] = null);

(statearr_21131_21194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (5))){
var state_21115__$1 = state_21115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21132_21195 = state_21115__$1;
(statearr_21132_21195[(1)] = (8));

} else {
var statearr_21133_21196 = state_21115__$1;
(statearr_21133_21196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (14))){
var inst_21095 = (state_21115[(11)]);
var inst_21093 = (state_21115[(8)]);
var inst_21093__$1 = (state_21115[(2)]);
var inst_21094 = (inst_21093__$1 == null);
var inst_21095__$1 = cljs.core.not.call(null,inst_21094);
var state_21115__$1 = (function (){var statearr_21134 = state_21115;
(statearr_21134[(11)] = inst_21095__$1);

(statearr_21134[(8)] = inst_21093__$1);

return statearr_21134;
})();
if(inst_21095__$1){
var statearr_21135_21197 = state_21115__$1;
(statearr_21135_21197[(1)] = (15));

} else {
var statearr_21136_21198 = state_21115__$1;
(statearr_21136_21198[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (16))){
var inst_21095 = (state_21115[(11)]);
var state_21115__$1 = state_21115;
var statearr_21137_21199 = state_21115__$1;
(statearr_21137_21199[(2)] = inst_21095);

(statearr_21137_21199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (10))){
var inst_21087 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21138_21200 = state_21115__$1;
(statearr_21138_21200[(2)] = inst_21087);

(statearr_21138_21200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (18))){
var inst_21098 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21139_21201 = state_21115__$1;
(statearr_21139_21201[(2)] = inst_21098);

(statearr_21139_21201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (8))){
var inst_21084 = cljs.core.async.close_BANG_.call(null,to);
var state_21115__$1 = state_21115;
var statearr_21140_21202 = state_21115__$1;
(statearr_21140_21202[(2)] = inst_21084);

(statearr_21140_21202[(1)] = (10));


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
});})(c__20598__auto__,jobs,results,process,async))
;
return ((function (switch__20486__auto__,c__20598__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0 = (function (){
var statearr_21144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__);

(statearr_21144[(1)] = (1));

return statearr_21144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1 = (function (state_21115){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21145){if((e21145 instanceof Object)){
var ex__20490__auto__ = e21145;
var statearr_21146_21203 = state_21115;
(statearr_21146_21203[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21204 = state_21115;
state_21115 = G__21204;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__ = function(state_21115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1.call(this,state_21115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__,jobs,results,process,async))
})();
var state__20600__auto__ = (function (){var statearr_21147 = f__20599__auto__.call(null);
(statearr_21147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_21147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__,jobs,results,process,async))
);

return c__20598__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21205 = [];
var len__19501__auto___21208 = arguments.length;
var i__19502__auto___21209 = (0);
while(true){
if((i__19502__auto___21209 < len__19501__auto___21208)){
args21205.push((arguments[i__19502__auto___21209]));

var G__21210 = (i__19502__auto___21209 + (1));
i__19502__auto___21209 = G__21210;
continue;
} else {
}
break;
}

var G__21207 = args21205.length;
switch (G__21207) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21205.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21212 = [];
var len__19501__auto___21215 = arguments.length;
var i__19502__auto___21216 = (0);
while(true){
if((i__19502__auto___21216 < len__19501__auto___21215)){
args21212.push((arguments[i__19502__auto___21216]));

var G__21217 = (i__19502__auto___21216 + (1));
i__19502__auto___21216 = G__21217;
continue;
} else {
}
break;
}

var G__21214 = args21212.length;
switch (G__21214) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21212.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21219 = [];
var len__19501__auto___21272 = arguments.length;
var i__19502__auto___21273 = (0);
while(true){
if((i__19502__auto___21273 < len__19501__auto___21272)){
args21219.push((arguments[i__19502__auto___21273]));

var G__21274 = (i__19502__auto___21273 + (1));
i__19502__auto___21273 = G__21274;
continue;
} else {
}
break;
}

var G__21221 = args21219.length;
switch (G__21221) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21219.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20598__auto___21276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___21276,tc,fc){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___21276,tc,fc){
return (function (state_21247){
var state_val_21248 = (state_21247[(1)]);
if((state_val_21248 === (7))){
var inst_21243 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
var statearr_21249_21277 = state_21247__$1;
(statearr_21249_21277[(2)] = inst_21243);

(statearr_21249_21277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (1))){
var state_21247__$1 = state_21247;
var statearr_21250_21278 = state_21247__$1;
(statearr_21250_21278[(2)] = null);

(statearr_21250_21278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (4))){
var inst_21224 = (state_21247[(7)]);
var inst_21224__$1 = (state_21247[(2)]);
var inst_21225 = (inst_21224__$1 == null);
var state_21247__$1 = (function (){var statearr_21251 = state_21247;
(statearr_21251[(7)] = inst_21224__$1);

return statearr_21251;
})();
if(cljs.core.truth_(inst_21225)){
var statearr_21252_21279 = state_21247__$1;
(statearr_21252_21279[(1)] = (5));

} else {
var statearr_21253_21280 = state_21247__$1;
(statearr_21253_21280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (13))){
var state_21247__$1 = state_21247;
var statearr_21254_21281 = state_21247__$1;
(statearr_21254_21281[(2)] = null);

(statearr_21254_21281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (6))){
var inst_21224 = (state_21247[(7)]);
var inst_21230 = p.call(null,inst_21224);
var state_21247__$1 = state_21247;
if(cljs.core.truth_(inst_21230)){
var statearr_21255_21282 = state_21247__$1;
(statearr_21255_21282[(1)] = (9));

} else {
var statearr_21256_21283 = state_21247__$1;
(statearr_21256_21283[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (3))){
var inst_21245 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21247__$1,inst_21245);
} else {
if((state_val_21248 === (12))){
var state_21247__$1 = state_21247;
var statearr_21257_21284 = state_21247__$1;
(statearr_21257_21284[(2)] = null);

(statearr_21257_21284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (2))){
var state_21247__$1 = state_21247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21247__$1,(4),ch);
} else {
if((state_val_21248 === (11))){
var inst_21224 = (state_21247[(7)]);
var inst_21234 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21247__$1,(8),inst_21234,inst_21224);
} else {
if((state_val_21248 === (9))){
var state_21247__$1 = state_21247;
var statearr_21258_21285 = state_21247__$1;
(statearr_21258_21285[(2)] = tc);

(statearr_21258_21285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (5))){
var inst_21227 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21228 = cljs.core.async.close_BANG_.call(null,fc);
var state_21247__$1 = (function (){var statearr_21259 = state_21247;
(statearr_21259[(8)] = inst_21227);

return statearr_21259;
})();
var statearr_21260_21286 = state_21247__$1;
(statearr_21260_21286[(2)] = inst_21228);

(statearr_21260_21286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (14))){
var inst_21241 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
var statearr_21261_21287 = state_21247__$1;
(statearr_21261_21287[(2)] = inst_21241);

(statearr_21261_21287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (10))){
var state_21247__$1 = state_21247;
var statearr_21262_21288 = state_21247__$1;
(statearr_21262_21288[(2)] = fc);

(statearr_21262_21288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (8))){
var inst_21236 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
if(cljs.core.truth_(inst_21236)){
var statearr_21263_21289 = state_21247__$1;
(statearr_21263_21289[(1)] = (12));

} else {
var statearr_21264_21290 = state_21247__$1;
(statearr_21264_21290[(1)] = (13));

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
});})(c__20598__auto___21276,tc,fc))
;
return ((function (switch__20486__auto__,c__20598__auto___21276,tc,fc){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_21268 = [null,null,null,null,null,null,null,null,null];
(statearr_21268[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_21268[(1)] = (1));

return statearr_21268;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_21247){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21269){if((e21269 instanceof Object)){
var ex__20490__auto__ = e21269;
var statearr_21270_21291 = state_21247;
(statearr_21270_21291[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21292 = state_21247;
state_21247 = G__21292;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_21247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_21247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___21276,tc,fc))
})();
var state__20600__auto__ = (function (){var statearr_21271 = f__20599__auto__.call(null);
(statearr_21271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___21276);

return statearr_21271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___21276,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__){
return (function (state_21356){
var state_val_21357 = (state_21356[(1)]);
if((state_val_21357 === (7))){
var inst_21352 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21358_21379 = state_21356__$1;
(statearr_21358_21379[(2)] = inst_21352);

(statearr_21358_21379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (1))){
var inst_21336 = init;
var state_21356__$1 = (function (){var statearr_21359 = state_21356;
(statearr_21359[(7)] = inst_21336);

return statearr_21359;
})();
var statearr_21360_21380 = state_21356__$1;
(statearr_21360_21380[(2)] = null);

(statearr_21360_21380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (4))){
var inst_21339 = (state_21356[(8)]);
var inst_21339__$1 = (state_21356[(2)]);
var inst_21340 = (inst_21339__$1 == null);
var state_21356__$1 = (function (){var statearr_21361 = state_21356;
(statearr_21361[(8)] = inst_21339__$1);

return statearr_21361;
})();
if(cljs.core.truth_(inst_21340)){
var statearr_21362_21381 = state_21356__$1;
(statearr_21362_21381[(1)] = (5));

} else {
var statearr_21363_21382 = state_21356__$1;
(statearr_21363_21382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (6))){
var inst_21343 = (state_21356[(9)]);
var inst_21339 = (state_21356[(8)]);
var inst_21336 = (state_21356[(7)]);
var inst_21343__$1 = f.call(null,inst_21336,inst_21339);
var inst_21344 = cljs.core.reduced_QMARK_.call(null,inst_21343__$1);
var state_21356__$1 = (function (){var statearr_21364 = state_21356;
(statearr_21364[(9)] = inst_21343__$1);

return statearr_21364;
})();
if(inst_21344){
var statearr_21365_21383 = state_21356__$1;
(statearr_21365_21383[(1)] = (8));

} else {
var statearr_21366_21384 = state_21356__$1;
(statearr_21366_21384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (3))){
var inst_21354 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21356__$1,inst_21354);
} else {
if((state_val_21357 === (2))){
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21356__$1,(4),ch);
} else {
if((state_val_21357 === (9))){
var inst_21343 = (state_21356[(9)]);
var inst_21336 = inst_21343;
var state_21356__$1 = (function (){var statearr_21367 = state_21356;
(statearr_21367[(7)] = inst_21336);

return statearr_21367;
})();
var statearr_21368_21385 = state_21356__$1;
(statearr_21368_21385[(2)] = null);

(statearr_21368_21385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (5))){
var inst_21336 = (state_21356[(7)]);
var state_21356__$1 = state_21356;
var statearr_21369_21386 = state_21356__$1;
(statearr_21369_21386[(2)] = inst_21336);

(statearr_21369_21386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (10))){
var inst_21350 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21370_21387 = state_21356__$1;
(statearr_21370_21387[(2)] = inst_21350);

(statearr_21370_21387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (8))){
var inst_21343 = (state_21356[(9)]);
var inst_21346 = cljs.core.deref.call(null,inst_21343);
var state_21356__$1 = state_21356;
var statearr_21371_21388 = state_21356__$1;
(statearr_21371_21388[(2)] = inst_21346);

(statearr_21371_21388[(1)] = (10));


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
});})(c__20598__auto__))
;
return ((function (switch__20486__auto__,c__20598__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20487__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20487__auto____0 = (function (){
var statearr_21375 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21375[(0)] = cljs$core$async$reduce_$_state_machine__20487__auto__);

(statearr_21375[(1)] = (1));

return statearr_21375;
});
var cljs$core$async$reduce_$_state_machine__20487__auto____1 = (function (state_21356){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21376){if((e21376 instanceof Object)){
var ex__20490__auto__ = e21376;
var statearr_21377_21389 = state_21356;
(statearr_21377_21389[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21390 = state_21356;
state_21356 = G__21390;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20487__auto__ = function(state_21356){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20487__auto____1.call(this,state_21356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20487__auto____0;
cljs$core$async$reduce_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20487__auto____1;
return cljs$core$async$reduce_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__))
})();
var state__20600__auto__ = (function (){var statearr_21378 = f__20599__auto__.call(null);
(statearr_21378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_21378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__))
);

return c__20598__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21391 = [];
var len__19501__auto___21443 = arguments.length;
var i__19502__auto___21444 = (0);
while(true){
if((i__19502__auto___21444 < len__19501__auto___21443)){
args21391.push((arguments[i__19502__auto___21444]));

var G__21445 = (i__19502__auto___21444 + (1));
i__19502__auto___21444 = G__21445;
continue;
} else {
}
break;
}

var G__21393 = args21391.length;
switch (G__21393) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21391.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__){
return (function (state_21418){
var state_val_21419 = (state_21418[(1)]);
if((state_val_21419 === (7))){
var inst_21400 = (state_21418[(2)]);
var state_21418__$1 = state_21418;
var statearr_21420_21447 = state_21418__$1;
(statearr_21420_21447[(2)] = inst_21400);

(statearr_21420_21447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (1))){
var inst_21394 = cljs.core.seq.call(null,coll);
var inst_21395 = inst_21394;
var state_21418__$1 = (function (){var statearr_21421 = state_21418;
(statearr_21421[(7)] = inst_21395);

return statearr_21421;
})();
var statearr_21422_21448 = state_21418__$1;
(statearr_21422_21448[(2)] = null);

(statearr_21422_21448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (4))){
var inst_21395 = (state_21418[(7)]);
var inst_21398 = cljs.core.first.call(null,inst_21395);
var state_21418__$1 = state_21418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21418__$1,(7),ch,inst_21398);
} else {
if((state_val_21419 === (13))){
var inst_21412 = (state_21418[(2)]);
var state_21418__$1 = state_21418;
var statearr_21423_21449 = state_21418__$1;
(statearr_21423_21449[(2)] = inst_21412);

(statearr_21423_21449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (6))){
var inst_21403 = (state_21418[(2)]);
var state_21418__$1 = state_21418;
if(cljs.core.truth_(inst_21403)){
var statearr_21424_21450 = state_21418__$1;
(statearr_21424_21450[(1)] = (8));

} else {
var statearr_21425_21451 = state_21418__$1;
(statearr_21425_21451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (3))){
var inst_21416 = (state_21418[(2)]);
var state_21418__$1 = state_21418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21418__$1,inst_21416);
} else {
if((state_val_21419 === (12))){
var state_21418__$1 = state_21418;
var statearr_21426_21452 = state_21418__$1;
(statearr_21426_21452[(2)] = null);

(statearr_21426_21452[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (2))){
var inst_21395 = (state_21418[(7)]);
var state_21418__$1 = state_21418;
if(cljs.core.truth_(inst_21395)){
var statearr_21427_21453 = state_21418__$1;
(statearr_21427_21453[(1)] = (4));

} else {
var statearr_21428_21454 = state_21418__$1;
(statearr_21428_21454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (11))){
var inst_21409 = cljs.core.async.close_BANG_.call(null,ch);
var state_21418__$1 = state_21418;
var statearr_21429_21455 = state_21418__$1;
(statearr_21429_21455[(2)] = inst_21409);

(statearr_21429_21455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (9))){
var state_21418__$1 = state_21418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21430_21456 = state_21418__$1;
(statearr_21430_21456[(1)] = (11));

} else {
var statearr_21431_21457 = state_21418__$1;
(statearr_21431_21457[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (5))){
var inst_21395 = (state_21418[(7)]);
var state_21418__$1 = state_21418;
var statearr_21432_21458 = state_21418__$1;
(statearr_21432_21458[(2)] = inst_21395);

(statearr_21432_21458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (10))){
var inst_21414 = (state_21418[(2)]);
var state_21418__$1 = state_21418;
var statearr_21433_21459 = state_21418__$1;
(statearr_21433_21459[(2)] = inst_21414);

(statearr_21433_21459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21419 === (8))){
var inst_21395 = (state_21418[(7)]);
var inst_21405 = cljs.core.next.call(null,inst_21395);
var inst_21395__$1 = inst_21405;
var state_21418__$1 = (function (){var statearr_21434 = state_21418;
(statearr_21434[(7)] = inst_21395__$1);

return statearr_21434;
})();
var statearr_21435_21460 = state_21418__$1;
(statearr_21435_21460[(2)] = null);

(statearr_21435_21460[(1)] = (2));


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
});})(c__20598__auto__))
;
return ((function (switch__20486__auto__,c__20598__auto__){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_21439 = [null,null,null,null,null,null,null,null];
(statearr_21439[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_21439[(1)] = (1));

return statearr_21439;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_21418){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21440){if((e21440 instanceof Object)){
var ex__20490__auto__ = e21440;
var statearr_21441_21461 = state_21418;
(statearr_21441_21461[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21462 = state_21418;
state_21418 = G__21462;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_21418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_21418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__))
})();
var state__20600__auto__ = (function (){var statearr_21442 = f__20599__auto__.call(null);
(statearr_21442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__))
);

return c__20598__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19095__auto__ = (((_ == null))?null:_);
var m__19096__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,_);
} else {
var m__19096__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19096__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m);
} else {
var m__19096__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21684 = (function (mult,ch,cs,meta21685){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21685 = meta21685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21686,meta21685__$1){
var self__ = this;
var _21686__$1 = this;
return (new cljs.core.async.t_cljs$core$async21684(self__.mult,self__.ch,self__.cs,meta21685__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21686){
var self__ = this;
var _21686__$1 = this;
return self__.meta21685;
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21685","meta21685",213369743,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21684";

cljs.core.async.t_cljs$core$async21684.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async21684");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21684 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21684(mult__$1,ch__$1,cs__$1,meta21685){
return (new cljs.core.async.t_cljs$core$async21684(mult__$1,ch__$1,cs__$1,meta21685));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21684(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20598__auto___21905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___21905,cs,m,dchan,dctr,done){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___21905,cs,m,dchan,dctr,done){
return (function (state_21817){
var state_val_21818 = (state_21817[(1)]);
if((state_val_21818 === (7))){
var inst_21813 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21819_21906 = state_21817__$1;
(statearr_21819_21906[(2)] = inst_21813);

(statearr_21819_21906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (20))){
var inst_21718 = (state_21817[(7)]);
var inst_21728 = cljs.core.first.call(null,inst_21718);
var inst_21729 = cljs.core.nth.call(null,inst_21728,(0),null);
var inst_21730 = cljs.core.nth.call(null,inst_21728,(1),null);
var state_21817__$1 = (function (){var statearr_21820 = state_21817;
(statearr_21820[(8)] = inst_21729);

return statearr_21820;
})();
if(cljs.core.truth_(inst_21730)){
var statearr_21821_21907 = state_21817__$1;
(statearr_21821_21907[(1)] = (22));

} else {
var statearr_21822_21908 = state_21817__$1;
(statearr_21822_21908[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (27))){
var inst_21760 = (state_21817[(9)]);
var inst_21689 = (state_21817[(10)]);
var inst_21758 = (state_21817[(11)]);
var inst_21765 = (state_21817[(12)]);
var inst_21765__$1 = cljs.core._nth.call(null,inst_21758,inst_21760);
var inst_21766 = cljs.core.async.put_BANG_.call(null,inst_21765__$1,inst_21689,done);
var state_21817__$1 = (function (){var statearr_21823 = state_21817;
(statearr_21823[(12)] = inst_21765__$1);

return statearr_21823;
})();
if(cljs.core.truth_(inst_21766)){
var statearr_21824_21909 = state_21817__$1;
(statearr_21824_21909[(1)] = (30));

} else {
var statearr_21825_21910 = state_21817__$1;
(statearr_21825_21910[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (1))){
var state_21817__$1 = state_21817;
var statearr_21826_21911 = state_21817__$1;
(statearr_21826_21911[(2)] = null);

(statearr_21826_21911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (24))){
var inst_21718 = (state_21817[(7)]);
var inst_21735 = (state_21817[(2)]);
var inst_21736 = cljs.core.next.call(null,inst_21718);
var inst_21698 = inst_21736;
var inst_21699 = null;
var inst_21700 = (0);
var inst_21701 = (0);
var state_21817__$1 = (function (){var statearr_21827 = state_21817;
(statearr_21827[(13)] = inst_21700);

(statearr_21827[(14)] = inst_21701);

(statearr_21827[(15)] = inst_21699);

(statearr_21827[(16)] = inst_21735);

(statearr_21827[(17)] = inst_21698);

return statearr_21827;
})();
var statearr_21828_21912 = state_21817__$1;
(statearr_21828_21912[(2)] = null);

(statearr_21828_21912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (39))){
var state_21817__$1 = state_21817;
var statearr_21832_21913 = state_21817__$1;
(statearr_21832_21913[(2)] = null);

(statearr_21832_21913[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (4))){
var inst_21689 = (state_21817[(10)]);
var inst_21689__$1 = (state_21817[(2)]);
var inst_21690 = (inst_21689__$1 == null);
var state_21817__$1 = (function (){var statearr_21833 = state_21817;
(statearr_21833[(10)] = inst_21689__$1);

return statearr_21833;
})();
if(cljs.core.truth_(inst_21690)){
var statearr_21834_21914 = state_21817__$1;
(statearr_21834_21914[(1)] = (5));

} else {
var statearr_21835_21915 = state_21817__$1;
(statearr_21835_21915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (15))){
var inst_21700 = (state_21817[(13)]);
var inst_21701 = (state_21817[(14)]);
var inst_21699 = (state_21817[(15)]);
var inst_21698 = (state_21817[(17)]);
var inst_21714 = (state_21817[(2)]);
var inst_21715 = (inst_21701 + (1));
var tmp21829 = inst_21700;
var tmp21830 = inst_21699;
var tmp21831 = inst_21698;
var inst_21698__$1 = tmp21831;
var inst_21699__$1 = tmp21830;
var inst_21700__$1 = tmp21829;
var inst_21701__$1 = inst_21715;
var state_21817__$1 = (function (){var statearr_21836 = state_21817;
(statearr_21836[(13)] = inst_21700__$1);

(statearr_21836[(14)] = inst_21701__$1);

(statearr_21836[(18)] = inst_21714);

(statearr_21836[(15)] = inst_21699__$1);

(statearr_21836[(17)] = inst_21698__$1);

return statearr_21836;
})();
var statearr_21837_21916 = state_21817__$1;
(statearr_21837_21916[(2)] = null);

(statearr_21837_21916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (21))){
var inst_21739 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21841_21917 = state_21817__$1;
(statearr_21841_21917[(2)] = inst_21739);

(statearr_21841_21917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (31))){
var inst_21765 = (state_21817[(12)]);
var inst_21769 = done.call(null,null);
var inst_21770 = cljs.core.async.untap_STAR_.call(null,m,inst_21765);
var state_21817__$1 = (function (){var statearr_21842 = state_21817;
(statearr_21842[(19)] = inst_21769);

return statearr_21842;
})();
var statearr_21843_21918 = state_21817__$1;
(statearr_21843_21918[(2)] = inst_21770);

(statearr_21843_21918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (32))){
var inst_21757 = (state_21817[(20)]);
var inst_21760 = (state_21817[(9)]);
var inst_21759 = (state_21817[(21)]);
var inst_21758 = (state_21817[(11)]);
var inst_21772 = (state_21817[(2)]);
var inst_21773 = (inst_21760 + (1));
var tmp21838 = inst_21757;
var tmp21839 = inst_21759;
var tmp21840 = inst_21758;
var inst_21757__$1 = tmp21838;
var inst_21758__$1 = tmp21840;
var inst_21759__$1 = tmp21839;
var inst_21760__$1 = inst_21773;
var state_21817__$1 = (function (){var statearr_21844 = state_21817;
(statearr_21844[(20)] = inst_21757__$1);

(statearr_21844[(9)] = inst_21760__$1);

(statearr_21844[(21)] = inst_21759__$1);

(statearr_21844[(11)] = inst_21758__$1);

(statearr_21844[(22)] = inst_21772);

return statearr_21844;
})();
var statearr_21845_21919 = state_21817__$1;
(statearr_21845_21919[(2)] = null);

(statearr_21845_21919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (40))){
var inst_21785 = (state_21817[(23)]);
var inst_21789 = done.call(null,null);
var inst_21790 = cljs.core.async.untap_STAR_.call(null,m,inst_21785);
var state_21817__$1 = (function (){var statearr_21846 = state_21817;
(statearr_21846[(24)] = inst_21789);

return statearr_21846;
})();
var statearr_21847_21920 = state_21817__$1;
(statearr_21847_21920[(2)] = inst_21790);

(statearr_21847_21920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (33))){
var inst_21776 = (state_21817[(25)]);
var inst_21778 = cljs.core.chunked_seq_QMARK_.call(null,inst_21776);
var state_21817__$1 = state_21817;
if(inst_21778){
var statearr_21848_21921 = state_21817__$1;
(statearr_21848_21921[(1)] = (36));

} else {
var statearr_21849_21922 = state_21817__$1;
(statearr_21849_21922[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (13))){
var inst_21708 = (state_21817[(26)]);
var inst_21711 = cljs.core.async.close_BANG_.call(null,inst_21708);
var state_21817__$1 = state_21817;
var statearr_21850_21923 = state_21817__$1;
(statearr_21850_21923[(2)] = inst_21711);

(statearr_21850_21923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (22))){
var inst_21729 = (state_21817[(8)]);
var inst_21732 = cljs.core.async.close_BANG_.call(null,inst_21729);
var state_21817__$1 = state_21817;
var statearr_21851_21924 = state_21817__$1;
(statearr_21851_21924[(2)] = inst_21732);

(statearr_21851_21924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (36))){
var inst_21776 = (state_21817[(25)]);
var inst_21780 = cljs.core.chunk_first.call(null,inst_21776);
var inst_21781 = cljs.core.chunk_rest.call(null,inst_21776);
var inst_21782 = cljs.core.count.call(null,inst_21780);
var inst_21757 = inst_21781;
var inst_21758 = inst_21780;
var inst_21759 = inst_21782;
var inst_21760 = (0);
var state_21817__$1 = (function (){var statearr_21852 = state_21817;
(statearr_21852[(20)] = inst_21757);

(statearr_21852[(9)] = inst_21760);

(statearr_21852[(21)] = inst_21759);

(statearr_21852[(11)] = inst_21758);

return statearr_21852;
})();
var statearr_21853_21925 = state_21817__$1;
(statearr_21853_21925[(2)] = null);

(statearr_21853_21925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (41))){
var inst_21776 = (state_21817[(25)]);
var inst_21792 = (state_21817[(2)]);
var inst_21793 = cljs.core.next.call(null,inst_21776);
var inst_21757 = inst_21793;
var inst_21758 = null;
var inst_21759 = (0);
var inst_21760 = (0);
var state_21817__$1 = (function (){var statearr_21854 = state_21817;
(statearr_21854[(20)] = inst_21757);

(statearr_21854[(9)] = inst_21760);

(statearr_21854[(21)] = inst_21759);

(statearr_21854[(11)] = inst_21758);

(statearr_21854[(27)] = inst_21792);

return statearr_21854;
})();
var statearr_21855_21926 = state_21817__$1;
(statearr_21855_21926[(2)] = null);

(statearr_21855_21926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (43))){
var state_21817__$1 = state_21817;
var statearr_21856_21927 = state_21817__$1;
(statearr_21856_21927[(2)] = null);

(statearr_21856_21927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (29))){
var inst_21801 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21857_21928 = state_21817__$1;
(statearr_21857_21928[(2)] = inst_21801);

(statearr_21857_21928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (44))){
var inst_21810 = (state_21817[(2)]);
var state_21817__$1 = (function (){var statearr_21858 = state_21817;
(statearr_21858[(28)] = inst_21810);

return statearr_21858;
})();
var statearr_21859_21929 = state_21817__$1;
(statearr_21859_21929[(2)] = null);

(statearr_21859_21929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (6))){
var inst_21749 = (state_21817[(29)]);
var inst_21748 = cljs.core.deref.call(null,cs);
var inst_21749__$1 = cljs.core.keys.call(null,inst_21748);
var inst_21750 = cljs.core.count.call(null,inst_21749__$1);
var inst_21751 = cljs.core.reset_BANG_.call(null,dctr,inst_21750);
var inst_21756 = cljs.core.seq.call(null,inst_21749__$1);
var inst_21757 = inst_21756;
var inst_21758 = null;
var inst_21759 = (0);
var inst_21760 = (0);
var state_21817__$1 = (function (){var statearr_21860 = state_21817;
(statearr_21860[(20)] = inst_21757);

(statearr_21860[(9)] = inst_21760);

(statearr_21860[(21)] = inst_21759);

(statearr_21860[(30)] = inst_21751);

(statearr_21860[(11)] = inst_21758);

(statearr_21860[(29)] = inst_21749__$1);

return statearr_21860;
})();
var statearr_21861_21930 = state_21817__$1;
(statearr_21861_21930[(2)] = null);

(statearr_21861_21930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (28))){
var inst_21776 = (state_21817[(25)]);
var inst_21757 = (state_21817[(20)]);
var inst_21776__$1 = cljs.core.seq.call(null,inst_21757);
var state_21817__$1 = (function (){var statearr_21862 = state_21817;
(statearr_21862[(25)] = inst_21776__$1);

return statearr_21862;
})();
if(inst_21776__$1){
var statearr_21863_21931 = state_21817__$1;
(statearr_21863_21931[(1)] = (33));

} else {
var statearr_21864_21932 = state_21817__$1;
(statearr_21864_21932[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (25))){
var inst_21760 = (state_21817[(9)]);
var inst_21759 = (state_21817[(21)]);
var inst_21762 = (inst_21760 < inst_21759);
var inst_21763 = inst_21762;
var state_21817__$1 = state_21817;
if(cljs.core.truth_(inst_21763)){
var statearr_21865_21933 = state_21817__$1;
(statearr_21865_21933[(1)] = (27));

} else {
var statearr_21866_21934 = state_21817__$1;
(statearr_21866_21934[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (34))){
var state_21817__$1 = state_21817;
var statearr_21867_21935 = state_21817__$1;
(statearr_21867_21935[(2)] = null);

(statearr_21867_21935[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (17))){
var state_21817__$1 = state_21817;
var statearr_21868_21936 = state_21817__$1;
(statearr_21868_21936[(2)] = null);

(statearr_21868_21936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (3))){
var inst_21815 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21817__$1,inst_21815);
} else {
if((state_val_21818 === (12))){
var inst_21744 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21869_21937 = state_21817__$1;
(statearr_21869_21937[(2)] = inst_21744);

(statearr_21869_21937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (2))){
var state_21817__$1 = state_21817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21817__$1,(4),ch);
} else {
if((state_val_21818 === (23))){
var state_21817__$1 = state_21817;
var statearr_21870_21938 = state_21817__$1;
(statearr_21870_21938[(2)] = null);

(statearr_21870_21938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (35))){
var inst_21799 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21871_21939 = state_21817__$1;
(statearr_21871_21939[(2)] = inst_21799);

(statearr_21871_21939[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (19))){
var inst_21718 = (state_21817[(7)]);
var inst_21722 = cljs.core.chunk_first.call(null,inst_21718);
var inst_21723 = cljs.core.chunk_rest.call(null,inst_21718);
var inst_21724 = cljs.core.count.call(null,inst_21722);
var inst_21698 = inst_21723;
var inst_21699 = inst_21722;
var inst_21700 = inst_21724;
var inst_21701 = (0);
var state_21817__$1 = (function (){var statearr_21872 = state_21817;
(statearr_21872[(13)] = inst_21700);

(statearr_21872[(14)] = inst_21701);

(statearr_21872[(15)] = inst_21699);

(statearr_21872[(17)] = inst_21698);

return statearr_21872;
})();
var statearr_21873_21940 = state_21817__$1;
(statearr_21873_21940[(2)] = null);

(statearr_21873_21940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (11))){
var inst_21718 = (state_21817[(7)]);
var inst_21698 = (state_21817[(17)]);
var inst_21718__$1 = cljs.core.seq.call(null,inst_21698);
var state_21817__$1 = (function (){var statearr_21874 = state_21817;
(statearr_21874[(7)] = inst_21718__$1);

return statearr_21874;
})();
if(inst_21718__$1){
var statearr_21875_21941 = state_21817__$1;
(statearr_21875_21941[(1)] = (16));

} else {
var statearr_21876_21942 = state_21817__$1;
(statearr_21876_21942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (9))){
var inst_21746 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21877_21943 = state_21817__$1;
(statearr_21877_21943[(2)] = inst_21746);

(statearr_21877_21943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (5))){
var inst_21696 = cljs.core.deref.call(null,cs);
var inst_21697 = cljs.core.seq.call(null,inst_21696);
var inst_21698 = inst_21697;
var inst_21699 = null;
var inst_21700 = (0);
var inst_21701 = (0);
var state_21817__$1 = (function (){var statearr_21878 = state_21817;
(statearr_21878[(13)] = inst_21700);

(statearr_21878[(14)] = inst_21701);

(statearr_21878[(15)] = inst_21699);

(statearr_21878[(17)] = inst_21698);

return statearr_21878;
})();
var statearr_21879_21944 = state_21817__$1;
(statearr_21879_21944[(2)] = null);

(statearr_21879_21944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (14))){
var state_21817__$1 = state_21817;
var statearr_21880_21945 = state_21817__$1;
(statearr_21880_21945[(2)] = null);

(statearr_21880_21945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (45))){
var inst_21807 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21881_21946 = state_21817__$1;
(statearr_21881_21946[(2)] = inst_21807);

(statearr_21881_21946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (26))){
var inst_21749 = (state_21817[(29)]);
var inst_21803 = (state_21817[(2)]);
var inst_21804 = cljs.core.seq.call(null,inst_21749);
var state_21817__$1 = (function (){var statearr_21882 = state_21817;
(statearr_21882[(31)] = inst_21803);

return statearr_21882;
})();
if(inst_21804){
var statearr_21883_21947 = state_21817__$1;
(statearr_21883_21947[(1)] = (42));

} else {
var statearr_21884_21948 = state_21817__$1;
(statearr_21884_21948[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (16))){
var inst_21718 = (state_21817[(7)]);
var inst_21720 = cljs.core.chunked_seq_QMARK_.call(null,inst_21718);
var state_21817__$1 = state_21817;
if(inst_21720){
var statearr_21885_21949 = state_21817__$1;
(statearr_21885_21949[(1)] = (19));

} else {
var statearr_21886_21950 = state_21817__$1;
(statearr_21886_21950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (38))){
var inst_21796 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21887_21951 = state_21817__$1;
(statearr_21887_21951[(2)] = inst_21796);

(statearr_21887_21951[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (30))){
var state_21817__$1 = state_21817;
var statearr_21888_21952 = state_21817__$1;
(statearr_21888_21952[(2)] = null);

(statearr_21888_21952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (10))){
var inst_21701 = (state_21817[(14)]);
var inst_21699 = (state_21817[(15)]);
var inst_21707 = cljs.core._nth.call(null,inst_21699,inst_21701);
var inst_21708 = cljs.core.nth.call(null,inst_21707,(0),null);
var inst_21709 = cljs.core.nth.call(null,inst_21707,(1),null);
var state_21817__$1 = (function (){var statearr_21889 = state_21817;
(statearr_21889[(26)] = inst_21708);

return statearr_21889;
})();
if(cljs.core.truth_(inst_21709)){
var statearr_21890_21953 = state_21817__$1;
(statearr_21890_21953[(1)] = (13));

} else {
var statearr_21891_21954 = state_21817__$1;
(statearr_21891_21954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (18))){
var inst_21742 = (state_21817[(2)]);
var state_21817__$1 = state_21817;
var statearr_21892_21955 = state_21817__$1;
(statearr_21892_21955[(2)] = inst_21742);

(statearr_21892_21955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (42))){
var state_21817__$1 = state_21817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21817__$1,(45),dchan);
} else {
if((state_val_21818 === (37))){
var inst_21776 = (state_21817[(25)]);
var inst_21689 = (state_21817[(10)]);
var inst_21785 = (state_21817[(23)]);
var inst_21785__$1 = cljs.core.first.call(null,inst_21776);
var inst_21786 = cljs.core.async.put_BANG_.call(null,inst_21785__$1,inst_21689,done);
var state_21817__$1 = (function (){var statearr_21893 = state_21817;
(statearr_21893[(23)] = inst_21785__$1);

return statearr_21893;
})();
if(cljs.core.truth_(inst_21786)){
var statearr_21894_21956 = state_21817__$1;
(statearr_21894_21956[(1)] = (39));

} else {
var statearr_21895_21957 = state_21817__$1;
(statearr_21895_21957[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21818 === (8))){
var inst_21700 = (state_21817[(13)]);
var inst_21701 = (state_21817[(14)]);
var inst_21703 = (inst_21701 < inst_21700);
var inst_21704 = inst_21703;
var state_21817__$1 = state_21817;
if(cljs.core.truth_(inst_21704)){
var statearr_21896_21958 = state_21817__$1;
(statearr_21896_21958[(1)] = (10));

} else {
var statearr_21897_21959 = state_21817__$1;
(statearr_21897_21959[(1)] = (11));

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
});})(c__20598__auto___21905,cs,m,dchan,dctr,done))
;
return ((function (switch__20486__auto__,c__20598__auto___21905,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20487__auto__ = null;
var cljs$core$async$mult_$_state_machine__20487__auto____0 = (function (){
var statearr_21901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21901[(0)] = cljs$core$async$mult_$_state_machine__20487__auto__);

(statearr_21901[(1)] = (1));

return statearr_21901;
});
var cljs$core$async$mult_$_state_machine__20487__auto____1 = (function (state_21817){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_21817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e21902){if((e21902 instanceof Object)){
var ex__20490__auto__ = e21902;
var statearr_21903_21960 = state_21817;
(statearr_21903_21960[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21961 = state_21817;
state_21817 = G__21961;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20487__auto__ = function(state_21817){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20487__auto____1.call(this,state_21817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20487__auto____0;
cljs$core$async$mult_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20487__auto____1;
return cljs$core$async$mult_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___21905,cs,m,dchan,dctr,done))
})();
var state__20600__auto__ = (function (){var statearr_21904 = f__20599__auto__.call(null);
(statearr_21904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___21905);

return statearr_21904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___21905,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21962 = [];
var len__19501__auto___21965 = arguments.length;
var i__19502__auto___21966 = (0);
while(true){
if((i__19502__auto___21966 < len__19501__auto___21965)){
args21962.push((arguments[i__19502__auto___21966]));

var G__21967 = (i__19502__auto___21966 + (1));
i__19502__auto___21966 = G__21967;
continue;
} else {
}
break;
}

var G__21964 = args21962.length;
switch (G__21964) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21962.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m);
} else {
var m__19096__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,state_map);
} else {
var m__19096__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,mode);
} else {
var m__19096__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19508__auto__ = [];
var len__19501__auto___21979 = arguments.length;
var i__19502__auto___21980 = (0);
while(true){
if((i__19502__auto___21980 < len__19501__auto___21979)){
args__19508__auto__.push((arguments[i__19502__auto___21980]));

var G__21981 = (i__19502__auto___21980 + (1));
i__19502__auto___21980 = G__21981;
continue;
} else {
}
break;
}

var argseq__19509__auto__ = ((((3) < args__19508__auto__.length))?(new cljs.core.IndexedSeq(args__19508__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19509__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21973){
var map__21974 = p__21973;
var map__21974__$1 = ((((!((map__21974 == null)))?((((map__21974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21974):map__21974);
var opts = map__21974__$1;
var statearr_21976_21982 = state;
(statearr_21976_21982[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21974,map__21974__$1,opts){
return (function (val){
var statearr_21977_21983 = state;
(statearr_21977_21983[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21974,map__21974__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21978_21984 = state;
(statearr_21978_21984[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21969){
var G__21970 = cljs.core.first.call(null,seq21969);
var seq21969__$1 = cljs.core.next.call(null,seq21969);
var G__21971 = cljs.core.first.call(null,seq21969__$1);
var seq21969__$2 = cljs.core.next.call(null,seq21969__$1);
var G__21972 = cljs.core.first.call(null,seq21969__$2);
var seq21969__$3 = cljs.core.next.call(null,seq21969__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21970,G__21971,G__21972,seq21969__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22148 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22149){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22149 = meta22149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22150,meta22149__$1){
var self__ = this;
var _22150__$1 = this;
return (new cljs.core.async.t_cljs$core$async22148(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22149__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22150){
var self__ = this;
var _22150__$1 = this;
return self__.meta22149;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22149","meta22149",796443214,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22148";

cljs.core.async.t_cljs$core$async22148.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22148");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22148 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22148(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22149){
return (new cljs.core.async.t_cljs$core$async22148(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22149));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22148(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20598__auto___22311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___22311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___22311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22248){
var state_val_22249 = (state_22248[(1)]);
if((state_val_22249 === (7))){
var inst_22166 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
var statearr_22250_22312 = state_22248__$1;
(statearr_22250_22312[(2)] = inst_22166);

(statearr_22250_22312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (20))){
var inst_22178 = (state_22248[(7)]);
var state_22248__$1 = state_22248;
var statearr_22251_22313 = state_22248__$1;
(statearr_22251_22313[(2)] = inst_22178);

(statearr_22251_22313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (27))){
var state_22248__$1 = state_22248;
var statearr_22252_22314 = state_22248__$1;
(statearr_22252_22314[(2)] = null);

(statearr_22252_22314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (1))){
var inst_22154 = (state_22248[(8)]);
var inst_22154__$1 = calc_state.call(null);
var inst_22156 = (inst_22154__$1 == null);
var inst_22157 = cljs.core.not.call(null,inst_22156);
var state_22248__$1 = (function (){var statearr_22253 = state_22248;
(statearr_22253[(8)] = inst_22154__$1);

return statearr_22253;
})();
if(inst_22157){
var statearr_22254_22315 = state_22248__$1;
(statearr_22254_22315[(1)] = (2));

} else {
var statearr_22255_22316 = state_22248__$1;
(statearr_22255_22316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (24))){
var inst_22208 = (state_22248[(9)]);
var inst_22201 = (state_22248[(10)]);
var inst_22222 = (state_22248[(11)]);
var inst_22222__$1 = inst_22201.call(null,inst_22208);
var state_22248__$1 = (function (){var statearr_22256 = state_22248;
(statearr_22256[(11)] = inst_22222__$1);

return statearr_22256;
})();
if(cljs.core.truth_(inst_22222__$1)){
var statearr_22257_22317 = state_22248__$1;
(statearr_22257_22317[(1)] = (29));

} else {
var statearr_22258_22318 = state_22248__$1;
(statearr_22258_22318[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (4))){
var inst_22169 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22169)){
var statearr_22259_22319 = state_22248__$1;
(statearr_22259_22319[(1)] = (8));

} else {
var statearr_22260_22320 = state_22248__$1;
(statearr_22260_22320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (15))){
var inst_22195 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22195)){
var statearr_22261_22321 = state_22248__$1;
(statearr_22261_22321[(1)] = (19));

} else {
var statearr_22262_22322 = state_22248__$1;
(statearr_22262_22322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (21))){
var inst_22200 = (state_22248[(12)]);
var inst_22200__$1 = (state_22248[(2)]);
var inst_22201 = cljs.core.get.call(null,inst_22200__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22202 = cljs.core.get.call(null,inst_22200__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22203 = cljs.core.get.call(null,inst_22200__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22248__$1 = (function (){var statearr_22263 = state_22248;
(statearr_22263[(13)] = inst_22202);

(statearr_22263[(12)] = inst_22200__$1);

(statearr_22263[(10)] = inst_22201);

return statearr_22263;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22248__$1,(22),inst_22203);
} else {
if((state_val_22249 === (31))){
var inst_22230 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22230)){
var statearr_22264_22323 = state_22248__$1;
(statearr_22264_22323[(1)] = (32));

} else {
var statearr_22265_22324 = state_22248__$1;
(statearr_22265_22324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (32))){
var inst_22207 = (state_22248[(14)]);
var state_22248__$1 = state_22248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22248__$1,(35),out,inst_22207);
} else {
if((state_val_22249 === (33))){
var inst_22200 = (state_22248[(12)]);
var inst_22178 = inst_22200;
var state_22248__$1 = (function (){var statearr_22266 = state_22248;
(statearr_22266[(7)] = inst_22178);

return statearr_22266;
})();
var statearr_22267_22325 = state_22248__$1;
(statearr_22267_22325[(2)] = null);

(statearr_22267_22325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (13))){
var inst_22178 = (state_22248[(7)]);
var inst_22185 = inst_22178.cljs$lang$protocol_mask$partition0$;
var inst_22186 = (inst_22185 & (64));
var inst_22187 = inst_22178.cljs$core$ISeq$;
var inst_22188 = (inst_22186) || (inst_22187);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22188)){
var statearr_22268_22326 = state_22248__$1;
(statearr_22268_22326[(1)] = (16));

} else {
var statearr_22269_22327 = state_22248__$1;
(statearr_22269_22327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (22))){
var inst_22207 = (state_22248[(14)]);
var inst_22208 = (state_22248[(9)]);
var inst_22206 = (state_22248[(2)]);
var inst_22207__$1 = cljs.core.nth.call(null,inst_22206,(0),null);
var inst_22208__$1 = cljs.core.nth.call(null,inst_22206,(1),null);
var inst_22209 = (inst_22207__$1 == null);
var inst_22210 = cljs.core._EQ_.call(null,inst_22208__$1,change);
var inst_22211 = (inst_22209) || (inst_22210);
var state_22248__$1 = (function (){var statearr_22270 = state_22248;
(statearr_22270[(14)] = inst_22207__$1);

(statearr_22270[(9)] = inst_22208__$1);

return statearr_22270;
})();
if(cljs.core.truth_(inst_22211)){
var statearr_22271_22328 = state_22248__$1;
(statearr_22271_22328[(1)] = (23));

} else {
var statearr_22272_22329 = state_22248__$1;
(statearr_22272_22329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (36))){
var inst_22200 = (state_22248[(12)]);
var inst_22178 = inst_22200;
var state_22248__$1 = (function (){var statearr_22273 = state_22248;
(statearr_22273[(7)] = inst_22178);

return statearr_22273;
})();
var statearr_22274_22330 = state_22248__$1;
(statearr_22274_22330[(2)] = null);

(statearr_22274_22330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (29))){
var inst_22222 = (state_22248[(11)]);
var state_22248__$1 = state_22248;
var statearr_22275_22331 = state_22248__$1;
(statearr_22275_22331[(2)] = inst_22222);

(statearr_22275_22331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (6))){
var state_22248__$1 = state_22248;
var statearr_22276_22332 = state_22248__$1;
(statearr_22276_22332[(2)] = false);

(statearr_22276_22332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (28))){
var inst_22218 = (state_22248[(2)]);
var inst_22219 = calc_state.call(null);
var inst_22178 = inst_22219;
var state_22248__$1 = (function (){var statearr_22277 = state_22248;
(statearr_22277[(7)] = inst_22178);

(statearr_22277[(15)] = inst_22218);

return statearr_22277;
})();
var statearr_22278_22333 = state_22248__$1;
(statearr_22278_22333[(2)] = null);

(statearr_22278_22333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (25))){
var inst_22244 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
var statearr_22279_22334 = state_22248__$1;
(statearr_22279_22334[(2)] = inst_22244);

(statearr_22279_22334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (34))){
var inst_22242 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
var statearr_22280_22335 = state_22248__$1;
(statearr_22280_22335[(2)] = inst_22242);

(statearr_22280_22335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (17))){
var state_22248__$1 = state_22248;
var statearr_22281_22336 = state_22248__$1;
(statearr_22281_22336[(2)] = false);

(statearr_22281_22336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (3))){
var state_22248__$1 = state_22248;
var statearr_22282_22337 = state_22248__$1;
(statearr_22282_22337[(2)] = false);

(statearr_22282_22337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (12))){
var inst_22246 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22248__$1,inst_22246);
} else {
if((state_val_22249 === (2))){
var inst_22154 = (state_22248[(8)]);
var inst_22159 = inst_22154.cljs$lang$protocol_mask$partition0$;
var inst_22160 = (inst_22159 & (64));
var inst_22161 = inst_22154.cljs$core$ISeq$;
var inst_22162 = (inst_22160) || (inst_22161);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22162)){
var statearr_22283_22338 = state_22248__$1;
(statearr_22283_22338[(1)] = (5));

} else {
var statearr_22284_22339 = state_22248__$1;
(statearr_22284_22339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (23))){
var inst_22207 = (state_22248[(14)]);
var inst_22213 = (inst_22207 == null);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22213)){
var statearr_22285_22340 = state_22248__$1;
(statearr_22285_22340[(1)] = (26));

} else {
var statearr_22286_22341 = state_22248__$1;
(statearr_22286_22341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (35))){
var inst_22233 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
if(cljs.core.truth_(inst_22233)){
var statearr_22287_22342 = state_22248__$1;
(statearr_22287_22342[(1)] = (36));

} else {
var statearr_22288_22343 = state_22248__$1;
(statearr_22288_22343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (19))){
var inst_22178 = (state_22248[(7)]);
var inst_22197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22178);
var state_22248__$1 = state_22248;
var statearr_22289_22344 = state_22248__$1;
(statearr_22289_22344[(2)] = inst_22197);

(statearr_22289_22344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (11))){
var inst_22178 = (state_22248[(7)]);
var inst_22182 = (inst_22178 == null);
var inst_22183 = cljs.core.not.call(null,inst_22182);
var state_22248__$1 = state_22248;
if(inst_22183){
var statearr_22290_22345 = state_22248__$1;
(statearr_22290_22345[(1)] = (13));

} else {
var statearr_22291_22346 = state_22248__$1;
(statearr_22291_22346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (9))){
var inst_22154 = (state_22248[(8)]);
var state_22248__$1 = state_22248;
var statearr_22292_22347 = state_22248__$1;
(statearr_22292_22347[(2)] = inst_22154);

(statearr_22292_22347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (5))){
var state_22248__$1 = state_22248;
var statearr_22293_22348 = state_22248__$1;
(statearr_22293_22348[(2)] = true);

(statearr_22293_22348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (14))){
var state_22248__$1 = state_22248;
var statearr_22294_22349 = state_22248__$1;
(statearr_22294_22349[(2)] = false);

(statearr_22294_22349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (26))){
var inst_22208 = (state_22248[(9)]);
var inst_22215 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22208);
var state_22248__$1 = state_22248;
var statearr_22295_22350 = state_22248__$1;
(statearr_22295_22350[(2)] = inst_22215);

(statearr_22295_22350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (16))){
var state_22248__$1 = state_22248;
var statearr_22296_22351 = state_22248__$1;
(statearr_22296_22351[(2)] = true);

(statearr_22296_22351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (38))){
var inst_22238 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
var statearr_22297_22352 = state_22248__$1;
(statearr_22297_22352[(2)] = inst_22238);

(statearr_22297_22352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (30))){
var inst_22208 = (state_22248[(9)]);
var inst_22202 = (state_22248[(13)]);
var inst_22201 = (state_22248[(10)]);
var inst_22225 = cljs.core.empty_QMARK_.call(null,inst_22201);
var inst_22226 = inst_22202.call(null,inst_22208);
var inst_22227 = cljs.core.not.call(null,inst_22226);
var inst_22228 = (inst_22225) && (inst_22227);
var state_22248__$1 = state_22248;
var statearr_22298_22353 = state_22248__$1;
(statearr_22298_22353[(2)] = inst_22228);

(statearr_22298_22353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (10))){
var inst_22154 = (state_22248[(8)]);
var inst_22174 = (state_22248[(2)]);
var inst_22175 = cljs.core.get.call(null,inst_22174,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22176 = cljs.core.get.call(null,inst_22174,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22177 = cljs.core.get.call(null,inst_22174,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22178 = inst_22154;
var state_22248__$1 = (function (){var statearr_22299 = state_22248;
(statearr_22299[(16)] = inst_22175);

(statearr_22299[(17)] = inst_22176);

(statearr_22299[(7)] = inst_22178);

(statearr_22299[(18)] = inst_22177);

return statearr_22299;
})();
var statearr_22300_22354 = state_22248__$1;
(statearr_22300_22354[(2)] = null);

(statearr_22300_22354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (18))){
var inst_22192 = (state_22248[(2)]);
var state_22248__$1 = state_22248;
var statearr_22301_22355 = state_22248__$1;
(statearr_22301_22355[(2)] = inst_22192);

(statearr_22301_22355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (37))){
var state_22248__$1 = state_22248;
var statearr_22302_22356 = state_22248__$1;
(statearr_22302_22356[(2)] = null);

(statearr_22302_22356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22249 === (8))){
var inst_22154 = (state_22248[(8)]);
var inst_22171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22154);
var state_22248__$1 = state_22248;
var statearr_22303_22357 = state_22248__$1;
(statearr_22303_22357[(2)] = inst_22171);

(statearr_22303_22357[(1)] = (10));


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
});})(c__20598__auto___22311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20486__auto__,c__20598__auto___22311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20487__auto__ = null;
var cljs$core$async$mix_$_state_machine__20487__auto____0 = (function (){
var statearr_22307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22307[(0)] = cljs$core$async$mix_$_state_machine__20487__auto__);

(statearr_22307[(1)] = (1));

return statearr_22307;
});
var cljs$core$async$mix_$_state_machine__20487__auto____1 = (function (state_22248){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_22248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e22308){if((e22308 instanceof Object)){
var ex__20490__auto__ = e22308;
var statearr_22309_22358 = state_22248;
(statearr_22309_22358[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22359 = state_22248;
state_22248 = G__22359;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20487__auto__ = function(state_22248){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20487__auto____1.call(this,state_22248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20487__auto____0;
cljs$core$async$mix_$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20487__auto____1;
return cljs$core$async$mix_$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___22311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20600__auto__ = (function (){var statearr_22310 = f__20599__auto__.call(null);
(statearr_22310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___22311);

return statearr_22310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___22311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19096__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p,v,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22360 = [];
var len__19501__auto___22363 = arguments.length;
var i__19502__auto___22364 = (0);
while(true){
if((i__19502__auto___22364 < len__19501__auto___22363)){
args22360.push((arguments[i__19502__auto___22364]));

var G__22365 = (i__19502__auto___22364 + (1));
i__19502__auto___22364 = G__22365;
continue;
} else {
}
break;
}

var G__22362 = args22360.length;
switch (G__22362) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22360.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p);
} else {
var m__19096__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p,v);
} else {
var m__19096__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22368 = [];
var len__19501__auto___22493 = arguments.length;
var i__19502__auto___22494 = (0);
while(true){
if((i__19502__auto___22494 < len__19501__auto___22493)){
args22368.push((arguments[i__19502__auto___22494]));

var G__22495 = (i__19502__auto___22494 + (1));
i__19502__auto___22494 = G__22495;
continue;
} else {
}
break;
}

var G__22370 = args22368.length;
switch (G__22370) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22368.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18432__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18432__auto__,mults){
return (function (p1__22367_SHARP_){
if(cljs.core.truth_(p1__22367_SHARP_.call(null,topic))){
return p1__22367_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22367_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18432__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22372 = meta22372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22373,meta22372__$1){
var self__ = this;
var _22373__$1 = this;
return (new cljs.core.async.t_cljs$core$async22371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22373){
var self__ = this;
var _22373__$1 = this;
return self__.meta22372;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22372","meta22372",1933239449,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22371";

cljs.core.async.t_cljs$core$async22371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22371");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22371 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22372){
return (new cljs.core.async.t_cljs$core$async22371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20598__auto___22497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___22497,mults,ensure_mult,p){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___22497,mults,ensure_mult,p){
return (function (state_22445){
var state_val_22446 = (state_22445[(1)]);
if((state_val_22446 === (7))){
var inst_22441 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22447_22498 = state_22445__$1;
(statearr_22447_22498[(2)] = inst_22441);

(statearr_22447_22498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (20))){
var state_22445__$1 = state_22445;
var statearr_22448_22499 = state_22445__$1;
(statearr_22448_22499[(2)] = null);

(statearr_22448_22499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (1))){
var state_22445__$1 = state_22445;
var statearr_22449_22500 = state_22445__$1;
(statearr_22449_22500[(2)] = null);

(statearr_22449_22500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (24))){
var inst_22424 = (state_22445[(7)]);
var inst_22433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22424);
var state_22445__$1 = state_22445;
var statearr_22450_22501 = state_22445__$1;
(statearr_22450_22501[(2)] = inst_22433);

(statearr_22450_22501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (4))){
var inst_22376 = (state_22445[(8)]);
var inst_22376__$1 = (state_22445[(2)]);
var inst_22377 = (inst_22376__$1 == null);
var state_22445__$1 = (function (){var statearr_22451 = state_22445;
(statearr_22451[(8)] = inst_22376__$1);

return statearr_22451;
})();
if(cljs.core.truth_(inst_22377)){
var statearr_22452_22502 = state_22445__$1;
(statearr_22452_22502[(1)] = (5));

} else {
var statearr_22453_22503 = state_22445__$1;
(statearr_22453_22503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (15))){
var inst_22418 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22454_22504 = state_22445__$1;
(statearr_22454_22504[(2)] = inst_22418);

(statearr_22454_22504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (21))){
var inst_22438 = (state_22445[(2)]);
var state_22445__$1 = (function (){var statearr_22455 = state_22445;
(statearr_22455[(9)] = inst_22438);

return statearr_22455;
})();
var statearr_22456_22505 = state_22445__$1;
(statearr_22456_22505[(2)] = null);

(statearr_22456_22505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (13))){
var inst_22400 = (state_22445[(10)]);
var inst_22402 = cljs.core.chunked_seq_QMARK_.call(null,inst_22400);
var state_22445__$1 = state_22445;
if(inst_22402){
var statearr_22457_22506 = state_22445__$1;
(statearr_22457_22506[(1)] = (16));

} else {
var statearr_22458_22507 = state_22445__$1;
(statearr_22458_22507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (22))){
var inst_22430 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
if(cljs.core.truth_(inst_22430)){
var statearr_22459_22508 = state_22445__$1;
(statearr_22459_22508[(1)] = (23));

} else {
var statearr_22460_22509 = state_22445__$1;
(statearr_22460_22509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (6))){
var inst_22424 = (state_22445[(7)]);
var inst_22376 = (state_22445[(8)]);
var inst_22426 = (state_22445[(11)]);
var inst_22424__$1 = topic_fn.call(null,inst_22376);
var inst_22425 = cljs.core.deref.call(null,mults);
var inst_22426__$1 = cljs.core.get.call(null,inst_22425,inst_22424__$1);
var state_22445__$1 = (function (){var statearr_22461 = state_22445;
(statearr_22461[(7)] = inst_22424__$1);

(statearr_22461[(11)] = inst_22426__$1);

return statearr_22461;
})();
if(cljs.core.truth_(inst_22426__$1)){
var statearr_22462_22510 = state_22445__$1;
(statearr_22462_22510[(1)] = (19));

} else {
var statearr_22463_22511 = state_22445__$1;
(statearr_22463_22511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (25))){
var inst_22435 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22464_22512 = state_22445__$1;
(statearr_22464_22512[(2)] = inst_22435);

(statearr_22464_22512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (17))){
var inst_22400 = (state_22445[(10)]);
var inst_22409 = cljs.core.first.call(null,inst_22400);
var inst_22410 = cljs.core.async.muxch_STAR_.call(null,inst_22409);
var inst_22411 = cljs.core.async.close_BANG_.call(null,inst_22410);
var inst_22412 = cljs.core.next.call(null,inst_22400);
var inst_22386 = inst_22412;
var inst_22387 = null;
var inst_22388 = (0);
var inst_22389 = (0);
var state_22445__$1 = (function (){var statearr_22465 = state_22445;
(statearr_22465[(12)] = inst_22389);

(statearr_22465[(13)] = inst_22388);

(statearr_22465[(14)] = inst_22387);

(statearr_22465[(15)] = inst_22411);

(statearr_22465[(16)] = inst_22386);

return statearr_22465;
})();
var statearr_22466_22513 = state_22445__$1;
(statearr_22466_22513[(2)] = null);

(statearr_22466_22513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (3))){
var inst_22443 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22445__$1,inst_22443);
} else {
if((state_val_22446 === (12))){
var inst_22420 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22467_22514 = state_22445__$1;
(statearr_22467_22514[(2)] = inst_22420);

(statearr_22467_22514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (2))){
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22445__$1,(4),ch);
} else {
if((state_val_22446 === (23))){
var state_22445__$1 = state_22445;
var statearr_22468_22515 = state_22445__$1;
(statearr_22468_22515[(2)] = null);

(statearr_22468_22515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (19))){
var inst_22376 = (state_22445[(8)]);
var inst_22426 = (state_22445[(11)]);
var inst_22428 = cljs.core.async.muxch_STAR_.call(null,inst_22426);
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22445__$1,(22),inst_22428,inst_22376);
} else {
if((state_val_22446 === (11))){
var inst_22400 = (state_22445[(10)]);
var inst_22386 = (state_22445[(16)]);
var inst_22400__$1 = cljs.core.seq.call(null,inst_22386);
var state_22445__$1 = (function (){var statearr_22469 = state_22445;
(statearr_22469[(10)] = inst_22400__$1);

return statearr_22469;
})();
if(inst_22400__$1){
var statearr_22470_22516 = state_22445__$1;
(statearr_22470_22516[(1)] = (13));

} else {
var statearr_22471_22517 = state_22445__$1;
(statearr_22471_22517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (9))){
var inst_22422 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22472_22518 = state_22445__$1;
(statearr_22472_22518[(2)] = inst_22422);

(statearr_22472_22518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (5))){
var inst_22383 = cljs.core.deref.call(null,mults);
var inst_22384 = cljs.core.vals.call(null,inst_22383);
var inst_22385 = cljs.core.seq.call(null,inst_22384);
var inst_22386 = inst_22385;
var inst_22387 = null;
var inst_22388 = (0);
var inst_22389 = (0);
var state_22445__$1 = (function (){var statearr_22473 = state_22445;
(statearr_22473[(12)] = inst_22389);

(statearr_22473[(13)] = inst_22388);

(statearr_22473[(14)] = inst_22387);

(statearr_22473[(16)] = inst_22386);

return statearr_22473;
})();
var statearr_22474_22519 = state_22445__$1;
(statearr_22474_22519[(2)] = null);

(statearr_22474_22519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (14))){
var state_22445__$1 = state_22445;
var statearr_22478_22520 = state_22445__$1;
(statearr_22478_22520[(2)] = null);

(statearr_22478_22520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (16))){
var inst_22400 = (state_22445[(10)]);
var inst_22404 = cljs.core.chunk_first.call(null,inst_22400);
var inst_22405 = cljs.core.chunk_rest.call(null,inst_22400);
var inst_22406 = cljs.core.count.call(null,inst_22404);
var inst_22386 = inst_22405;
var inst_22387 = inst_22404;
var inst_22388 = inst_22406;
var inst_22389 = (0);
var state_22445__$1 = (function (){var statearr_22479 = state_22445;
(statearr_22479[(12)] = inst_22389);

(statearr_22479[(13)] = inst_22388);

(statearr_22479[(14)] = inst_22387);

(statearr_22479[(16)] = inst_22386);

return statearr_22479;
})();
var statearr_22480_22521 = state_22445__$1;
(statearr_22480_22521[(2)] = null);

(statearr_22480_22521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (10))){
var inst_22389 = (state_22445[(12)]);
var inst_22388 = (state_22445[(13)]);
var inst_22387 = (state_22445[(14)]);
var inst_22386 = (state_22445[(16)]);
var inst_22394 = cljs.core._nth.call(null,inst_22387,inst_22389);
var inst_22395 = cljs.core.async.muxch_STAR_.call(null,inst_22394);
var inst_22396 = cljs.core.async.close_BANG_.call(null,inst_22395);
var inst_22397 = (inst_22389 + (1));
var tmp22475 = inst_22388;
var tmp22476 = inst_22387;
var tmp22477 = inst_22386;
var inst_22386__$1 = tmp22477;
var inst_22387__$1 = tmp22476;
var inst_22388__$1 = tmp22475;
var inst_22389__$1 = inst_22397;
var state_22445__$1 = (function (){var statearr_22481 = state_22445;
(statearr_22481[(12)] = inst_22389__$1);

(statearr_22481[(13)] = inst_22388__$1);

(statearr_22481[(17)] = inst_22396);

(statearr_22481[(14)] = inst_22387__$1);

(statearr_22481[(16)] = inst_22386__$1);

return statearr_22481;
})();
var statearr_22482_22522 = state_22445__$1;
(statearr_22482_22522[(2)] = null);

(statearr_22482_22522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (18))){
var inst_22415 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22483_22523 = state_22445__$1;
(statearr_22483_22523[(2)] = inst_22415);

(statearr_22483_22523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (8))){
var inst_22389 = (state_22445[(12)]);
var inst_22388 = (state_22445[(13)]);
var inst_22391 = (inst_22389 < inst_22388);
var inst_22392 = inst_22391;
var state_22445__$1 = state_22445;
if(cljs.core.truth_(inst_22392)){
var statearr_22484_22524 = state_22445__$1;
(statearr_22484_22524[(1)] = (10));

} else {
var statearr_22485_22525 = state_22445__$1;
(statearr_22485_22525[(1)] = (11));

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
});})(c__20598__auto___22497,mults,ensure_mult,p))
;
return ((function (switch__20486__auto__,c__20598__auto___22497,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_22489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22489[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_22489[(1)] = (1));

return statearr_22489;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_22445){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_22445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e22490){if((e22490 instanceof Object)){
var ex__20490__auto__ = e22490;
var statearr_22491_22526 = state_22445;
(statearr_22491_22526[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22527 = state_22445;
state_22445 = G__22527;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_22445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_22445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___22497,mults,ensure_mult,p))
})();
var state__20600__auto__ = (function (){var statearr_22492 = f__20599__auto__.call(null);
(statearr_22492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___22497);

return statearr_22492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___22497,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22528 = [];
var len__19501__auto___22531 = arguments.length;
var i__19502__auto___22532 = (0);
while(true){
if((i__19502__auto___22532 < len__19501__auto___22531)){
args22528.push((arguments[i__19502__auto___22532]));

var G__22533 = (i__19502__auto___22532 + (1));
i__19502__auto___22532 = G__22533;
continue;
} else {
}
break;
}

var G__22530 = args22528.length;
switch (G__22530) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22528.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22535 = [];
var len__19501__auto___22538 = arguments.length;
var i__19502__auto___22539 = (0);
while(true){
if((i__19502__auto___22539 < len__19501__auto___22538)){
args22535.push((arguments[i__19502__auto___22539]));

var G__22540 = (i__19502__auto___22539 + (1));
i__19502__auto___22539 = G__22540;
continue;
} else {
}
break;
}

var G__22537 = args22535.length;
switch (G__22537) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22535.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22542 = [];
var len__19501__auto___22613 = arguments.length;
var i__19502__auto___22614 = (0);
while(true){
if((i__19502__auto___22614 < len__19501__auto___22613)){
args22542.push((arguments[i__19502__auto___22614]));

var G__22615 = (i__19502__auto___22614 + (1));
i__19502__auto___22614 = G__22615;
continue;
} else {
}
break;
}

var G__22544 = args22542.length;
switch (G__22544) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22542.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20598__auto___22617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___22617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___22617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22583){
var state_val_22584 = (state_22583[(1)]);
if((state_val_22584 === (7))){
var state_22583__$1 = state_22583;
var statearr_22585_22618 = state_22583__$1;
(statearr_22585_22618[(2)] = null);

(statearr_22585_22618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (1))){
var state_22583__$1 = state_22583;
var statearr_22586_22619 = state_22583__$1;
(statearr_22586_22619[(2)] = null);

(statearr_22586_22619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (4))){
var inst_22547 = (state_22583[(7)]);
var inst_22549 = (inst_22547 < cnt);
var state_22583__$1 = state_22583;
if(cljs.core.truth_(inst_22549)){
var statearr_22587_22620 = state_22583__$1;
(statearr_22587_22620[(1)] = (6));

} else {
var statearr_22588_22621 = state_22583__$1;
(statearr_22588_22621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (15))){
var inst_22579 = (state_22583[(2)]);
var state_22583__$1 = state_22583;
var statearr_22589_22622 = state_22583__$1;
(statearr_22589_22622[(2)] = inst_22579);

(statearr_22589_22622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (13))){
var inst_22572 = cljs.core.async.close_BANG_.call(null,out);
var state_22583__$1 = state_22583;
var statearr_22590_22623 = state_22583__$1;
(statearr_22590_22623[(2)] = inst_22572);

(statearr_22590_22623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (6))){
var state_22583__$1 = state_22583;
var statearr_22591_22624 = state_22583__$1;
(statearr_22591_22624[(2)] = null);

(statearr_22591_22624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (3))){
var inst_22581 = (state_22583[(2)]);
var state_22583__$1 = state_22583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22583__$1,inst_22581);
} else {
if((state_val_22584 === (12))){
var inst_22569 = (state_22583[(8)]);
var inst_22569__$1 = (state_22583[(2)]);
var inst_22570 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22569__$1);
var state_22583__$1 = (function (){var statearr_22592 = state_22583;
(statearr_22592[(8)] = inst_22569__$1);

return statearr_22592;
})();
if(cljs.core.truth_(inst_22570)){
var statearr_22593_22625 = state_22583__$1;
(statearr_22593_22625[(1)] = (13));

} else {
var statearr_22594_22626 = state_22583__$1;
(statearr_22594_22626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (2))){
var inst_22546 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22547 = (0);
var state_22583__$1 = (function (){var statearr_22595 = state_22583;
(statearr_22595[(7)] = inst_22547);

(statearr_22595[(9)] = inst_22546);

return statearr_22595;
})();
var statearr_22596_22627 = state_22583__$1;
(statearr_22596_22627[(2)] = null);

(statearr_22596_22627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (11))){
var inst_22547 = (state_22583[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22583,(10),Object,null,(9));
var inst_22556 = chs__$1.call(null,inst_22547);
var inst_22557 = done.call(null,inst_22547);
var inst_22558 = cljs.core.async.take_BANG_.call(null,inst_22556,inst_22557);
var state_22583__$1 = state_22583;
var statearr_22597_22628 = state_22583__$1;
(statearr_22597_22628[(2)] = inst_22558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (9))){
var inst_22547 = (state_22583[(7)]);
var inst_22560 = (state_22583[(2)]);
var inst_22561 = (inst_22547 + (1));
var inst_22547__$1 = inst_22561;
var state_22583__$1 = (function (){var statearr_22598 = state_22583;
(statearr_22598[(7)] = inst_22547__$1);

(statearr_22598[(10)] = inst_22560);

return statearr_22598;
})();
var statearr_22599_22629 = state_22583__$1;
(statearr_22599_22629[(2)] = null);

(statearr_22599_22629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (5))){
var inst_22567 = (state_22583[(2)]);
var state_22583__$1 = (function (){var statearr_22600 = state_22583;
(statearr_22600[(11)] = inst_22567);

return statearr_22600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22583__$1,(12),dchan);
} else {
if((state_val_22584 === (14))){
var inst_22569 = (state_22583[(8)]);
var inst_22574 = cljs.core.apply.call(null,f,inst_22569);
var state_22583__$1 = state_22583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22583__$1,(16),out,inst_22574);
} else {
if((state_val_22584 === (16))){
var inst_22576 = (state_22583[(2)]);
var state_22583__$1 = (function (){var statearr_22601 = state_22583;
(statearr_22601[(12)] = inst_22576);

return statearr_22601;
})();
var statearr_22602_22630 = state_22583__$1;
(statearr_22602_22630[(2)] = null);

(statearr_22602_22630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (10))){
var inst_22551 = (state_22583[(2)]);
var inst_22552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22583__$1 = (function (){var statearr_22603 = state_22583;
(statearr_22603[(13)] = inst_22551);

return statearr_22603;
})();
var statearr_22604_22631 = state_22583__$1;
(statearr_22604_22631[(2)] = inst_22552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22584 === (8))){
var inst_22565 = (state_22583[(2)]);
var state_22583__$1 = state_22583;
var statearr_22605_22632 = state_22583__$1;
(statearr_22605_22632[(2)] = inst_22565);

(statearr_22605_22632[(1)] = (5));


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
});})(c__20598__auto___22617,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20486__auto__,c__20598__auto___22617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_22609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22609[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_22609[(1)] = (1));

return statearr_22609;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_22583){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_22583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e22610){if((e22610 instanceof Object)){
var ex__20490__auto__ = e22610;
var statearr_22611_22633 = state_22583;
(statearr_22611_22633[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22634 = state_22583;
state_22583 = G__22634;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_22583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_22583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___22617,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20600__auto__ = (function (){var statearr_22612 = f__20599__auto__.call(null);
(statearr_22612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___22617);

return statearr_22612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___22617,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22636 = [];
var len__19501__auto___22692 = arguments.length;
var i__19502__auto___22693 = (0);
while(true){
if((i__19502__auto___22693 < len__19501__auto___22692)){
args22636.push((arguments[i__19502__auto___22693]));

var G__22694 = (i__19502__auto___22693 + (1));
i__19502__auto___22693 = G__22694;
continue;
} else {
}
break;
}

var G__22638 = args22636.length;
switch (G__22638) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22636.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20598__auto___22696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___22696,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___22696,out){
return (function (state_22668){
var state_val_22669 = (state_22668[(1)]);
if((state_val_22669 === (7))){
var inst_22647 = (state_22668[(7)]);
var inst_22648 = (state_22668[(8)]);
var inst_22647__$1 = (state_22668[(2)]);
var inst_22648__$1 = cljs.core.nth.call(null,inst_22647__$1,(0),null);
var inst_22649 = cljs.core.nth.call(null,inst_22647__$1,(1),null);
var inst_22650 = (inst_22648__$1 == null);
var state_22668__$1 = (function (){var statearr_22670 = state_22668;
(statearr_22670[(7)] = inst_22647__$1);

(statearr_22670[(9)] = inst_22649);

(statearr_22670[(8)] = inst_22648__$1);

return statearr_22670;
})();
if(cljs.core.truth_(inst_22650)){
var statearr_22671_22697 = state_22668__$1;
(statearr_22671_22697[(1)] = (8));

} else {
var statearr_22672_22698 = state_22668__$1;
(statearr_22672_22698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (1))){
var inst_22639 = cljs.core.vec.call(null,chs);
var inst_22640 = inst_22639;
var state_22668__$1 = (function (){var statearr_22673 = state_22668;
(statearr_22673[(10)] = inst_22640);

return statearr_22673;
})();
var statearr_22674_22699 = state_22668__$1;
(statearr_22674_22699[(2)] = null);

(statearr_22674_22699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (4))){
var inst_22640 = (state_22668[(10)]);
var state_22668__$1 = state_22668;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22668__$1,(7),inst_22640);
} else {
if((state_val_22669 === (6))){
var inst_22664 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22675_22700 = state_22668__$1;
(statearr_22675_22700[(2)] = inst_22664);

(statearr_22675_22700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (3))){
var inst_22666 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22668__$1,inst_22666);
} else {
if((state_val_22669 === (2))){
var inst_22640 = (state_22668[(10)]);
var inst_22642 = cljs.core.count.call(null,inst_22640);
var inst_22643 = (inst_22642 > (0));
var state_22668__$1 = state_22668;
if(cljs.core.truth_(inst_22643)){
var statearr_22677_22701 = state_22668__$1;
(statearr_22677_22701[(1)] = (4));

} else {
var statearr_22678_22702 = state_22668__$1;
(statearr_22678_22702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (11))){
var inst_22640 = (state_22668[(10)]);
var inst_22657 = (state_22668[(2)]);
var tmp22676 = inst_22640;
var inst_22640__$1 = tmp22676;
var state_22668__$1 = (function (){var statearr_22679 = state_22668;
(statearr_22679[(10)] = inst_22640__$1);

(statearr_22679[(11)] = inst_22657);

return statearr_22679;
})();
var statearr_22680_22703 = state_22668__$1;
(statearr_22680_22703[(2)] = null);

(statearr_22680_22703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (9))){
var inst_22648 = (state_22668[(8)]);
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22668__$1,(11),out,inst_22648);
} else {
if((state_val_22669 === (5))){
var inst_22662 = cljs.core.async.close_BANG_.call(null,out);
var state_22668__$1 = state_22668;
var statearr_22681_22704 = state_22668__$1;
(statearr_22681_22704[(2)] = inst_22662);

(statearr_22681_22704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (10))){
var inst_22660 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22682_22705 = state_22668__$1;
(statearr_22682_22705[(2)] = inst_22660);

(statearr_22682_22705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (8))){
var inst_22647 = (state_22668[(7)]);
var inst_22649 = (state_22668[(9)]);
var inst_22648 = (state_22668[(8)]);
var inst_22640 = (state_22668[(10)]);
var inst_22652 = (function (){var cs = inst_22640;
var vec__22645 = inst_22647;
var v = inst_22648;
var c = inst_22649;
return ((function (cs,vec__22645,v,c,inst_22647,inst_22649,inst_22648,inst_22640,state_val_22669,c__20598__auto___22696,out){
return (function (p1__22635_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22635_SHARP_);
});
;})(cs,vec__22645,v,c,inst_22647,inst_22649,inst_22648,inst_22640,state_val_22669,c__20598__auto___22696,out))
})();
var inst_22653 = cljs.core.filterv.call(null,inst_22652,inst_22640);
var inst_22640__$1 = inst_22653;
var state_22668__$1 = (function (){var statearr_22683 = state_22668;
(statearr_22683[(10)] = inst_22640__$1);

return statearr_22683;
})();
var statearr_22684_22706 = state_22668__$1;
(statearr_22684_22706[(2)] = null);

(statearr_22684_22706[(1)] = (2));


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
});})(c__20598__auto___22696,out))
;
return ((function (switch__20486__auto__,c__20598__auto___22696,out){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_22688 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22688[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_22688[(1)] = (1));

return statearr_22688;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_22668){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_22668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e22689){if((e22689 instanceof Object)){
var ex__20490__auto__ = e22689;
var statearr_22690_22707 = state_22668;
(statearr_22690_22707[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22708 = state_22668;
state_22668 = G__22708;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_22668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_22668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___22696,out))
})();
var state__20600__auto__ = (function (){var statearr_22691 = f__20599__auto__.call(null);
(statearr_22691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___22696);

return statearr_22691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___22696,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22709 = [];
var len__19501__auto___22758 = arguments.length;
var i__19502__auto___22759 = (0);
while(true){
if((i__19502__auto___22759 < len__19501__auto___22758)){
args22709.push((arguments[i__19502__auto___22759]));

var G__22760 = (i__19502__auto___22759 + (1));
i__19502__auto___22759 = G__22760;
continue;
} else {
}
break;
}

var G__22711 = args22709.length;
switch (G__22711) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22709.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20598__auto___22762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___22762,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___22762,out){
return (function (state_22735){
var state_val_22736 = (state_22735[(1)]);
if((state_val_22736 === (7))){
var inst_22717 = (state_22735[(7)]);
var inst_22717__$1 = (state_22735[(2)]);
var inst_22718 = (inst_22717__$1 == null);
var inst_22719 = cljs.core.not.call(null,inst_22718);
var state_22735__$1 = (function (){var statearr_22737 = state_22735;
(statearr_22737[(7)] = inst_22717__$1);

return statearr_22737;
})();
if(inst_22719){
var statearr_22738_22763 = state_22735__$1;
(statearr_22738_22763[(1)] = (8));

} else {
var statearr_22739_22764 = state_22735__$1;
(statearr_22739_22764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (1))){
var inst_22712 = (0);
var state_22735__$1 = (function (){var statearr_22740 = state_22735;
(statearr_22740[(8)] = inst_22712);

return statearr_22740;
})();
var statearr_22741_22765 = state_22735__$1;
(statearr_22741_22765[(2)] = null);

(statearr_22741_22765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (4))){
var state_22735__$1 = state_22735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22735__$1,(7),ch);
} else {
if((state_val_22736 === (6))){
var inst_22730 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
var statearr_22742_22766 = state_22735__$1;
(statearr_22742_22766[(2)] = inst_22730);

(statearr_22742_22766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (3))){
var inst_22732 = (state_22735[(2)]);
var inst_22733 = cljs.core.async.close_BANG_.call(null,out);
var state_22735__$1 = (function (){var statearr_22743 = state_22735;
(statearr_22743[(9)] = inst_22732);

return statearr_22743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22735__$1,inst_22733);
} else {
if((state_val_22736 === (2))){
var inst_22712 = (state_22735[(8)]);
var inst_22714 = (inst_22712 < n);
var state_22735__$1 = state_22735;
if(cljs.core.truth_(inst_22714)){
var statearr_22744_22767 = state_22735__$1;
(statearr_22744_22767[(1)] = (4));

} else {
var statearr_22745_22768 = state_22735__$1;
(statearr_22745_22768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (11))){
var inst_22712 = (state_22735[(8)]);
var inst_22722 = (state_22735[(2)]);
var inst_22723 = (inst_22712 + (1));
var inst_22712__$1 = inst_22723;
var state_22735__$1 = (function (){var statearr_22746 = state_22735;
(statearr_22746[(10)] = inst_22722);

(statearr_22746[(8)] = inst_22712__$1);

return statearr_22746;
})();
var statearr_22747_22769 = state_22735__$1;
(statearr_22747_22769[(2)] = null);

(statearr_22747_22769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (9))){
var state_22735__$1 = state_22735;
var statearr_22748_22770 = state_22735__$1;
(statearr_22748_22770[(2)] = null);

(statearr_22748_22770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (5))){
var state_22735__$1 = state_22735;
var statearr_22749_22771 = state_22735__$1;
(statearr_22749_22771[(2)] = null);

(statearr_22749_22771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (10))){
var inst_22727 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
var statearr_22750_22772 = state_22735__$1;
(statearr_22750_22772[(2)] = inst_22727);

(statearr_22750_22772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (8))){
var inst_22717 = (state_22735[(7)]);
var state_22735__$1 = state_22735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22735__$1,(11),out,inst_22717);
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
});})(c__20598__auto___22762,out))
;
return ((function (switch__20486__auto__,c__20598__auto___22762,out){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_22754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22754[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_22754[(1)] = (1));

return statearr_22754;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_22735){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_22735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e22755){if((e22755 instanceof Object)){
var ex__20490__auto__ = e22755;
var statearr_22756_22773 = state_22735;
(statearr_22756_22773[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22774 = state_22735;
state_22735 = G__22774;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_22735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_22735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___22762,out))
})();
var state__20600__auto__ = (function (){var statearr_22757 = f__20599__auto__.call(null);
(statearr_22757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___22762);

return statearr_22757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___22762,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22782 = (function (map_LT_,f,ch,meta22783){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22783 = meta22783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22784,meta22783__$1){
var self__ = this;
var _22784__$1 = this;
return (new cljs.core.async.t_cljs$core$async22782(self__.map_LT_,self__.f,self__.ch,meta22783__$1));
});

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22784){
var self__ = this;
var _22784__$1 = this;
return self__.meta22783;
});

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22785 = (function (map_LT_,f,ch,meta22783,_,fn1,meta22786){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22783 = meta22783;
this._ = _;
this.fn1 = fn1;
this.meta22786 = meta22786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22787,meta22786__$1){
var self__ = this;
var _22787__$1 = this;
return (new cljs.core.async.t_cljs$core$async22785(self__.map_LT_,self__.f,self__.ch,self__.meta22783,self__._,self__.fn1,meta22786__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22787){
var self__ = this;
var _22787__$1 = this;
return self__.meta22786;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22785.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22775_SHARP_){
return f1.call(null,(((p1__22775_SHARP_ == null))?null:self__.f.call(null,p1__22775_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22785.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22783","meta22783",-23241409,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22782","cljs.core.async/t_cljs$core$async22782",1358906574,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22786","meta22786",1194782526,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22785";

cljs.core.async.t_cljs$core$async22785.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22785");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22785 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22785(map_LT___$1,f__$1,ch__$1,meta22783__$1,___$2,fn1__$1,meta22786){
return (new cljs.core.async.t_cljs$core$async22785(map_LT___$1,f__$1,ch__$1,meta22783__$1,___$2,fn1__$1,meta22786));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22785(self__.map_LT_,self__.f,self__.ch,self__.meta22783,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18420__auto__ = ret;
if(cljs.core.truth_(and__18420__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18420__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22783","meta22783",-23241409,null)], null);
});

cljs.core.async.t_cljs$core$async22782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22782";

cljs.core.async.t_cljs$core$async22782.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22782");
});

cljs.core.async.__GT_t_cljs$core$async22782 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22782(map_LT___$1,f__$1,ch__$1,meta22783){
return (new cljs.core.async.t_cljs$core$async22782(map_LT___$1,f__$1,ch__$1,meta22783));
});

}

return (new cljs.core.async.t_cljs$core$async22782(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22791 = (function (map_GT_,f,ch,meta22792){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22792 = meta22792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22793,meta22792__$1){
var self__ = this;
var _22793__$1 = this;
return (new cljs.core.async.t_cljs$core$async22791(self__.map_GT_,self__.f,self__.ch,meta22792__$1));
});

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22793){
var self__ = this;
var _22793__$1 = this;
return self__.meta22792;
});

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22791.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22792","meta22792",-54370534,null)], null);
});

cljs.core.async.t_cljs$core$async22791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22791";

cljs.core.async.t_cljs$core$async22791.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22791");
});

cljs.core.async.__GT_t_cljs$core$async22791 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22791(map_GT___$1,f__$1,ch__$1,meta22792){
return (new cljs.core.async.t_cljs$core$async22791(map_GT___$1,f__$1,ch__$1,meta22792));
});

}

return (new cljs.core.async.t_cljs$core$async22791(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22797 = (function (filter_GT_,p,ch,meta22798){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22798 = meta22798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22799,meta22798__$1){
var self__ = this;
var _22799__$1 = this;
return (new cljs.core.async.t_cljs$core$async22797(self__.filter_GT_,self__.p,self__.ch,meta22798__$1));
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22799){
var self__ = this;
var _22799__$1 = this;
return self__.meta22798;
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22798","meta22798",1001965873,null)], null);
});

cljs.core.async.t_cljs$core$async22797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22797";

cljs.core.async.t_cljs$core$async22797.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22797");
});

cljs.core.async.__GT_t_cljs$core$async22797 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22797(filter_GT___$1,p__$1,ch__$1,meta22798){
return (new cljs.core.async.t_cljs$core$async22797(filter_GT___$1,p__$1,ch__$1,meta22798));
});

}

return (new cljs.core.async.t_cljs$core$async22797(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22800 = [];
var len__19501__auto___22844 = arguments.length;
var i__19502__auto___22845 = (0);
while(true){
if((i__19502__auto___22845 < len__19501__auto___22844)){
args22800.push((arguments[i__19502__auto___22845]));

var G__22846 = (i__19502__auto___22845 + (1));
i__19502__auto___22845 = G__22846;
continue;
} else {
}
break;
}

var G__22802 = args22800.length;
switch (G__22802) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22800.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20598__auto___22848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___22848,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___22848,out){
return (function (state_22823){
var state_val_22824 = (state_22823[(1)]);
if((state_val_22824 === (7))){
var inst_22819 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22825_22849 = state_22823__$1;
(statearr_22825_22849[(2)] = inst_22819);

(statearr_22825_22849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (1))){
var state_22823__$1 = state_22823;
var statearr_22826_22850 = state_22823__$1;
(statearr_22826_22850[(2)] = null);

(statearr_22826_22850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (4))){
var inst_22805 = (state_22823[(7)]);
var inst_22805__$1 = (state_22823[(2)]);
var inst_22806 = (inst_22805__$1 == null);
var state_22823__$1 = (function (){var statearr_22827 = state_22823;
(statearr_22827[(7)] = inst_22805__$1);

return statearr_22827;
})();
if(cljs.core.truth_(inst_22806)){
var statearr_22828_22851 = state_22823__$1;
(statearr_22828_22851[(1)] = (5));

} else {
var statearr_22829_22852 = state_22823__$1;
(statearr_22829_22852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (6))){
var inst_22805 = (state_22823[(7)]);
var inst_22810 = p.call(null,inst_22805);
var state_22823__$1 = state_22823;
if(cljs.core.truth_(inst_22810)){
var statearr_22830_22853 = state_22823__$1;
(statearr_22830_22853[(1)] = (8));

} else {
var statearr_22831_22854 = state_22823__$1;
(statearr_22831_22854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (3))){
var inst_22821 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22823__$1,inst_22821);
} else {
if((state_val_22824 === (2))){
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22823__$1,(4),ch);
} else {
if((state_val_22824 === (11))){
var inst_22813 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22832_22855 = state_22823__$1;
(statearr_22832_22855[(2)] = inst_22813);

(statearr_22832_22855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (9))){
var state_22823__$1 = state_22823;
var statearr_22833_22856 = state_22823__$1;
(statearr_22833_22856[(2)] = null);

(statearr_22833_22856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (5))){
var inst_22808 = cljs.core.async.close_BANG_.call(null,out);
var state_22823__$1 = state_22823;
var statearr_22834_22857 = state_22823__$1;
(statearr_22834_22857[(2)] = inst_22808);

(statearr_22834_22857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (10))){
var inst_22816 = (state_22823[(2)]);
var state_22823__$1 = (function (){var statearr_22835 = state_22823;
(statearr_22835[(8)] = inst_22816);

return statearr_22835;
})();
var statearr_22836_22858 = state_22823__$1;
(statearr_22836_22858[(2)] = null);

(statearr_22836_22858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (8))){
var inst_22805 = (state_22823[(7)]);
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22823__$1,(11),out,inst_22805);
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
});})(c__20598__auto___22848,out))
;
return ((function (switch__20486__auto__,c__20598__auto___22848,out){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_22840 = [null,null,null,null,null,null,null,null,null];
(statearr_22840[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_22840[(1)] = (1));

return statearr_22840;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_22823){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_22823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e22841){if((e22841 instanceof Object)){
var ex__20490__auto__ = e22841;
var statearr_22842_22859 = state_22823;
(statearr_22842_22859[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22860 = state_22823;
state_22823 = G__22860;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_22823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_22823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___22848,out))
})();
var state__20600__auto__ = (function (){var statearr_22843 = f__20599__auto__.call(null);
(statearr_22843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___22848);

return statearr_22843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___22848,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22861 = [];
var len__19501__auto___22864 = arguments.length;
var i__19502__auto___22865 = (0);
while(true){
if((i__19502__auto___22865 < len__19501__auto___22864)){
args22861.push((arguments[i__19502__auto___22865]));

var G__22866 = (i__19502__auto___22865 + (1));
i__19502__auto___22865 = G__22866;
continue;
} else {
}
break;
}

var G__22863 = args22861.length;
switch (G__22863) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22861.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto__){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto__){
return (function (state_23033){
var state_val_23034 = (state_23033[(1)]);
if((state_val_23034 === (7))){
var inst_23029 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23035_23076 = state_23033__$1;
(statearr_23035_23076[(2)] = inst_23029);

(statearr_23035_23076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (20))){
var inst_22999 = (state_23033[(7)]);
var inst_23010 = (state_23033[(2)]);
var inst_23011 = cljs.core.next.call(null,inst_22999);
var inst_22985 = inst_23011;
var inst_22986 = null;
var inst_22987 = (0);
var inst_22988 = (0);
var state_23033__$1 = (function (){var statearr_23036 = state_23033;
(statearr_23036[(8)] = inst_22987);

(statearr_23036[(9)] = inst_22988);

(statearr_23036[(10)] = inst_22986);

(statearr_23036[(11)] = inst_23010);

(statearr_23036[(12)] = inst_22985);

return statearr_23036;
})();
var statearr_23037_23077 = state_23033__$1;
(statearr_23037_23077[(2)] = null);

(statearr_23037_23077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (1))){
var state_23033__$1 = state_23033;
var statearr_23038_23078 = state_23033__$1;
(statearr_23038_23078[(2)] = null);

(statearr_23038_23078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (4))){
var inst_22974 = (state_23033[(13)]);
var inst_22974__$1 = (state_23033[(2)]);
var inst_22975 = (inst_22974__$1 == null);
var state_23033__$1 = (function (){var statearr_23039 = state_23033;
(statearr_23039[(13)] = inst_22974__$1);

return statearr_23039;
})();
if(cljs.core.truth_(inst_22975)){
var statearr_23040_23079 = state_23033__$1;
(statearr_23040_23079[(1)] = (5));

} else {
var statearr_23041_23080 = state_23033__$1;
(statearr_23041_23080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (15))){
var state_23033__$1 = state_23033;
var statearr_23045_23081 = state_23033__$1;
(statearr_23045_23081[(2)] = null);

(statearr_23045_23081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (21))){
var state_23033__$1 = state_23033;
var statearr_23046_23082 = state_23033__$1;
(statearr_23046_23082[(2)] = null);

(statearr_23046_23082[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (13))){
var inst_22987 = (state_23033[(8)]);
var inst_22988 = (state_23033[(9)]);
var inst_22986 = (state_23033[(10)]);
var inst_22985 = (state_23033[(12)]);
var inst_22995 = (state_23033[(2)]);
var inst_22996 = (inst_22988 + (1));
var tmp23042 = inst_22987;
var tmp23043 = inst_22986;
var tmp23044 = inst_22985;
var inst_22985__$1 = tmp23044;
var inst_22986__$1 = tmp23043;
var inst_22987__$1 = tmp23042;
var inst_22988__$1 = inst_22996;
var state_23033__$1 = (function (){var statearr_23047 = state_23033;
(statearr_23047[(8)] = inst_22987__$1);

(statearr_23047[(14)] = inst_22995);

(statearr_23047[(9)] = inst_22988__$1);

(statearr_23047[(10)] = inst_22986__$1);

(statearr_23047[(12)] = inst_22985__$1);

return statearr_23047;
})();
var statearr_23048_23083 = state_23033__$1;
(statearr_23048_23083[(2)] = null);

(statearr_23048_23083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (22))){
var state_23033__$1 = state_23033;
var statearr_23049_23084 = state_23033__$1;
(statearr_23049_23084[(2)] = null);

(statearr_23049_23084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (6))){
var inst_22974 = (state_23033[(13)]);
var inst_22983 = f.call(null,inst_22974);
var inst_22984 = cljs.core.seq.call(null,inst_22983);
var inst_22985 = inst_22984;
var inst_22986 = null;
var inst_22987 = (0);
var inst_22988 = (0);
var state_23033__$1 = (function (){var statearr_23050 = state_23033;
(statearr_23050[(8)] = inst_22987);

(statearr_23050[(9)] = inst_22988);

(statearr_23050[(10)] = inst_22986);

(statearr_23050[(12)] = inst_22985);

return statearr_23050;
})();
var statearr_23051_23085 = state_23033__$1;
(statearr_23051_23085[(2)] = null);

(statearr_23051_23085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (17))){
var inst_22999 = (state_23033[(7)]);
var inst_23003 = cljs.core.chunk_first.call(null,inst_22999);
var inst_23004 = cljs.core.chunk_rest.call(null,inst_22999);
var inst_23005 = cljs.core.count.call(null,inst_23003);
var inst_22985 = inst_23004;
var inst_22986 = inst_23003;
var inst_22987 = inst_23005;
var inst_22988 = (0);
var state_23033__$1 = (function (){var statearr_23052 = state_23033;
(statearr_23052[(8)] = inst_22987);

(statearr_23052[(9)] = inst_22988);

(statearr_23052[(10)] = inst_22986);

(statearr_23052[(12)] = inst_22985);

return statearr_23052;
})();
var statearr_23053_23086 = state_23033__$1;
(statearr_23053_23086[(2)] = null);

(statearr_23053_23086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (3))){
var inst_23031 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23033__$1,inst_23031);
} else {
if((state_val_23034 === (12))){
var inst_23019 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23054_23087 = state_23033__$1;
(statearr_23054_23087[(2)] = inst_23019);

(statearr_23054_23087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (2))){
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23033__$1,(4),in$);
} else {
if((state_val_23034 === (23))){
var inst_23027 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23055_23088 = state_23033__$1;
(statearr_23055_23088[(2)] = inst_23027);

(statearr_23055_23088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (19))){
var inst_23014 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23056_23089 = state_23033__$1;
(statearr_23056_23089[(2)] = inst_23014);

(statearr_23056_23089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (11))){
var inst_22999 = (state_23033[(7)]);
var inst_22985 = (state_23033[(12)]);
var inst_22999__$1 = cljs.core.seq.call(null,inst_22985);
var state_23033__$1 = (function (){var statearr_23057 = state_23033;
(statearr_23057[(7)] = inst_22999__$1);

return statearr_23057;
})();
if(inst_22999__$1){
var statearr_23058_23090 = state_23033__$1;
(statearr_23058_23090[(1)] = (14));

} else {
var statearr_23059_23091 = state_23033__$1;
(statearr_23059_23091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (9))){
var inst_23021 = (state_23033[(2)]);
var inst_23022 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23033__$1 = (function (){var statearr_23060 = state_23033;
(statearr_23060[(15)] = inst_23021);

return statearr_23060;
})();
if(cljs.core.truth_(inst_23022)){
var statearr_23061_23092 = state_23033__$1;
(statearr_23061_23092[(1)] = (21));

} else {
var statearr_23062_23093 = state_23033__$1;
(statearr_23062_23093[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (5))){
var inst_22977 = cljs.core.async.close_BANG_.call(null,out);
var state_23033__$1 = state_23033;
var statearr_23063_23094 = state_23033__$1;
(statearr_23063_23094[(2)] = inst_22977);

(statearr_23063_23094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (14))){
var inst_22999 = (state_23033[(7)]);
var inst_23001 = cljs.core.chunked_seq_QMARK_.call(null,inst_22999);
var state_23033__$1 = state_23033;
if(inst_23001){
var statearr_23064_23095 = state_23033__$1;
(statearr_23064_23095[(1)] = (17));

} else {
var statearr_23065_23096 = state_23033__$1;
(statearr_23065_23096[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (16))){
var inst_23017 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23066_23097 = state_23033__$1;
(statearr_23066_23097[(2)] = inst_23017);

(statearr_23066_23097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (10))){
var inst_22988 = (state_23033[(9)]);
var inst_22986 = (state_23033[(10)]);
var inst_22993 = cljs.core._nth.call(null,inst_22986,inst_22988);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23033__$1,(13),out,inst_22993);
} else {
if((state_val_23034 === (18))){
var inst_22999 = (state_23033[(7)]);
var inst_23008 = cljs.core.first.call(null,inst_22999);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23033__$1,(20),out,inst_23008);
} else {
if((state_val_23034 === (8))){
var inst_22987 = (state_23033[(8)]);
var inst_22988 = (state_23033[(9)]);
var inst_22990 = (inst_22988 < inst_22987);
var inst_22991 = inst_22990;
var state_23033__$1 = state_23033;
if(cljs.core.truth_(inst_22991)){
var statearr_23067_23098 = state_23033__$1;
(statearr_23067_23098[(1)] = (10));

} else {
var statearr_23068_23099 = state_23033__$1;
(statearr_23068_23099[(1)] = (11));

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
});})(c__20598__auto__))
;
return ((function (switch__20486__auto__,c__20598__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20487__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20487__auto____0 = (function (){
var statearr_23072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23072[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20487__auto__);

(statearr_23072[(1)] = (1));

return statearr_23072;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20487__auto____1 = (function (state_23033){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_23033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e23073){if((e23073 instanceof Object)){
var ex__20490__auto__ = e23073;
var statearr_23074_23100 = state_23033;
(statearr_23074_23100[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23101 = state_23033;
state_23033 = G__23101;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20487__auto__ = function(state_23033){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20487__auto____1.call(this,state_23033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20487__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20487__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto__))
})();
var state__20600__auto__ = (function (){var statearr_23075 = f__20599__auto__.call(null);
(statearr_23075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto__);

return statearr_23075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto__))
);

return c__20598__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23102 = [];
var len__19501__auto___23105 = arguments.length;
var i__19502__auto___23106 = (0);
while(true){
if((i__19502__auto___23106 < len__19501__auto___23105)){
args23102.push((arguments[i__19502__auto___23106]));

var G__23107 = (i__19502__auto___23106 + (1));
i__19502__auto___23106 = G__23107;
continue;
} else {
}
break;
}

var G__23104 = args23102.length;
switch (G__23104) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23102.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23109 = [];
var len__19501__auto___23112 = arguments.length;
var i__19502__auto___23113 = (0);
while(true){
if((i__19502__auto___23113 < len__19501__auto___23112)){
args23109.push((arguments[i__19502__auto___23113]));

var G__23114 = (i__19502__auto___23113 + (1));
i__19502__auto___23113 = G__23114;
continue;
} else {
}
break;
}

var G__23111 = args23109.length;
switch (G__23111) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23109.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23116 = [];
var len__19501__auto___23167 = arguments.length;
var i__19502__auto___23168 = (0);
while(true){
if((i__19502__auto___23168 < len__19501__auto___23167)){
args23116.push((arguments[i__19502__auto___23168]));

var G__23169 = (i__19502__auto___23168 + (1));
i__19502__auto___23168 = G__23169;
continue;
} else {
}
break;
}

var G__23118 = args23116.length;
switch (G__23118) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23116.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20598__auto___23171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___23171,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___23171,out){
return (function (state_23142){
var state_val_23143 = (state_23142[(1)]);
if((state_val_23143 === (7))){
var inst_23137 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23144_23172 = state_23142__$1;
(statearr_23144_23172[(2)] = inst_23137);

(statearr_23144_23172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (1))){
var inst_23119 = null;
var state_23142__$1 = (function (){var statearr_23145 = state_23142;
(statearr_23145[(7)] = inst_23119);

return statearr_23145;
})();
var statearr_23146_23173 = state_23142__$1;
(statearr_23146_23173[(2)] = null);

(statearr_23146_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (4))){
var inst_23122 = (state_23142[(8)]);
var inst_23122__$1 = (state_23142[(2)]);
var inst_23123 = (inst_23122__$1 == null);
var inst_23124 = cljs.core.not.call(null,inst_23123);
var state_23142__$1 = (function (){var statearr_23147 = state_23142;
(statearr_23147[(8)] = inst_23122__$1);

return statearr_23147;
})();
if(inst_23124){
var statearr_23148_23174 = state_23142__$1;
(statearr_23148_23174[(1)] = (5));

} else {
var statearr_23149_23175 = state_23142__$1;
(statearr_23149_23175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (6))){
var state_23142__$1 = state_23142;
var statearr_23150_23176 = state_23142__$1;
(statearr_23150_23176[(2)] = null);

(statearr_23150_23176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (3))){
var inst_23139 = (state_23142[(2)]);
var inst_23140 = cljs.core.async.close_BANG_.call(null,out);
var state_23142__$1 = (function (){var statearr_23151 = state_23142;
(statearr_23151[(9)] = inst_23139);

return statearr_23151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23142__$1,inst_23140);
} else {
if((state_val_23143 === (2))){
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23142__$1,(4),ch);
} else {
if((state_val_23143 === (11))){
var inst_23122 = (state_23142[(8)]);
var inst_23131 = (state_23142[(2)]);
var inst_23119 = inst_23122;
var state_23142__$1 = (function (){var statearr_23152 = state_23142;
(statearr_23152[(10)] = inst_23131);

(statearr_23152[(7)] = inst_23119);

return statearr_23152;
})();
var statearr_23153_23177 = state_23142__$1;
(statearr_23153_23177[(2)] = null);

(statearr_23153_23177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (9))){
var inst_23122 = (state_23142[(8)]);
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23142__$1,(11),out,inst_23122);
} else {
if((state_val_23143 === (5))){
var inst_23122 = (state_23142[(8)]);
var inst_23119 = (state_23142[(7)]);
var inst_23126 = cljs.core._EQ_.call(null,inst_23122,inst_23119);
var state_23142__$1 = state_23142;
if(inst_23126){
var statearr_23155_23178 = state_23142__$1;
(statearr_23155_23178[(1)] = (8));

} else {
var statearr_23156_23179 = state_23142__$1;
(statearr_23156_23179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (10))){
var inst_23134 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23157_23180 = state_23142__$1;
(statearr_23157_23180[(2)] = inst_23134);

(statearr_23157_23180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (8))){
var inst_23119 = (state_23142[(7)]);
var tmp23154 = inst_23119;
var inst_23119__$1 = tmp23154;
var state_23142__$1 = (function (){var statearr_23158 = state_23142;
(statearr_23158[(7)] = inst_23119__$1);

return statearr_23158;
})();
var statearr_23159_23181 = state_23142__$1;
(statearr_23159_23181[(2)] = null);

(statearr_23159_23181[(1)] = (2));


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
});})(c__20598__auto___23171,out))
;
return ((function (switch__20486__auto__,c__20598__auto___23171,out){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_23163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23163[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_23163[(1)] = (1));

return statearr_23163;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_23142){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_23142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e23164){if((e23164 instanceof Object)){
var ex__20490__auto__ = e23164;
var statearr_23165_23182 = state_23142;
(statearr_23165_23182[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23183 = state_23142;
state_23142 = G__23183;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_23142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_23142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___23171,out))
})();
var state__20600__auto__ = (function (){var statearr_23166 = f__20599__auto__.call(null);
(statearr_23166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___23171);

return statearr_23166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___23171,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23184 = [];
var len__19501__auto___23254 = arguments.length;
var i__19502__auto___23255 = (0);
while(true){
if((i__19502__auto___23255 < len__19501__auto___23254)){
args23184.push((arguments[i__19502__auto___23255]));

var G__23256 = (i__19502__auto___23255 + (1));
i__19502__auto___23255 = G__23256;
continue;
} else {
}
break;
}

var G__23186 = args23184.length;
switch (G__23186) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23184.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20598__auto___23258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___23258,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___23258,out){
return (function (state_23224){
var state_val_23225 = (state_23224[(1)]);
if((state_val_23225 === (7))){
var inst_23220 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
var statearr_23226_23259 = state_23224__$1;
(statearr_23226_23259[(2)] = inst_23220);

(statearr_23226_23259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (1))){
var inst_23187 = (new Array(n));
var inst_23188 = inst_23187;
var inst_23189 = (0);
var state_23224__$1 = (function (){var statearr_23227 = state_23224;
(statearr_23227[(7)] = inst_23189);

(statearr_23227[(8)] = inst_23188);

return statearr_23227;
})();
var statearr_23228_23260 = state_23224__$1;
(statearr_23228_23260[(2)] = null);

(statearr_23228_23260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (4))){
var inst_23192 = (state_23224[(9)]);
var inst_23192__$1 = (state_23224[(2)]);
var inst_23193 = (inst_23192__$1 == null);
var inst_23194 = cljs.core.not.call(null,inst_23193);
var state_23224__$1 = (function (){var statearr_23229 = state_23224;
(statearr_23229[(9)] = inst_23192__$1);

return statearr_23229;
})();
if(inst_23194){
var statearr_23230_23261 = state_23224__$1;
(statearr_23230_23261[(1)] = (5));

} else {
var statearr_23231_23262 = state_23224__$1;
(statearr_23231_23262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (15))){
var inst_23214 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
var statearr_23232_23263 = state_23224__$1;
(statearr_23232_23263[(2)] = inst_23214);

(statearr_23232_23263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (13))){
var state_23224__$1 = state_23224;
var statearr_23233_23264 = state_23224__$1;
(statearr_23233_23264[(2)] = null);

(statearr_23233_23264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (6))){
var inst_23189 = (state_23224[(7)]);
var inst_23210 = (inst_23189 > (0));
var state_23224__$1 = state_23224;
if(cljs.core.truth_(inst_23210)){
var statearr_23234_23265 = state_23224__$1;
(statearr_23234_23265[(1)] = (12));

} else {
var statearr_23235_23266 = state_23224__$1;
(statearr_23235_23266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (3))){
var inst_23222 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23224__$1,inst_23222);
} else {
if((state_val_23225 === (12))){
var inst_23188 = (state_23224[(8)]);
var inst_23212 = cljs.core.vec.call(null,inst_23188);
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23224__$1,(15),out,inst_23212);
} else {
if((state_val_23225 === (2))){
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23224__$1,(4),ch);
} else {
if((state_val_23225 === (11))){
var inst_23204 = (state_23224[(2)]);
var inst_23205 = (new Array(n));
var inst_23188 = inst_23205;
var inst_23189 = (0);
var state_23224__$1 = (function (){var statearr_23236 = state_23224;
(statearr_23236[(7)] = inst_23189);

(statearr_23236[(10)] = inst_23204);

(statearr_23236[(8)] = inst_23188);

return statearr_23236;
})();
var statearr_23237_23267 = state_23224__$1;
(statearr_23237_23267[(2)] = null);

(statearr_23237_23267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (9))){
var inst_23188 = (state_23224[(8)]);
var inst_23202 = cljs.core.vec.call(null,inst_23188);
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23224__$1,(11),out,inst_23202);
} else {
if((state_val_23225 === (5))){
var inst_23189 = (state_23224[(7)]);
var inst_23192 = (state_23224[(9)]);
var inst_23197 = (state_23224[(11)]);
var inst_23188 = (state_23224[(8)]);
var inst_23196 = (inst_23188[inst_23189] = inst_23192);
var inst_23197__$1 = (inst_23189 + (1));
var inst_23198 = (inst_23197__$1 < n);
var state_23224__$1 = (function (){var statearr_23238 = state_23224;
(statearr_23238[(11)] = inst_23197__$1);

(statearr_23238[(12)] = inst_23196);

return statearr_23238;
})();
if(cljs.core.truth_(inst_23198)){
var statearr_23239_23268 = state_23224__$1;
(statearr_23239_23268[(1)] = (8));

} else {
var statearr_23240_23269 = state_23224__$1;
(statearr_23240_23269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (14))){
var inst_23217 = (state_23224[(2)]);
var inst_23218 = cljs.core.async.close_BANG_.call(null,out);
var state_23224__$1 = (function (){var statearr_23242 = state_23224;
(statearr_23242[(13)] = inst_23217);

return statearr_23242;
})();
var statearr_23243_23270 = state_23224__$1;
(statearr_23243_23270[(2)] = inst_23218);

(statearr_23243_23270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (10))){
var inst_23208 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
var statearr_23244_23271 = state_23224__$1;
(statearr_23244_23271[(2)] = inst_23208);

(statearr_23244_23271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (8))){
var inst_23197 = (state_23224[(11)]);
var inst_23188 = (state_23224[(8)]);
var tmp23241 = inst_23188;
var inst_23188__$1 = tmp23241;
var inst_23189 = inst_23197;
var state_23224__$1 = (function (){var statearr_23245 = state_23224;
(statearr_23245[(7)] = inst_23189);

(statearr_23245[(8)] = inst_23188__$1);

return statearr_23245;
})();
var statearr_23246_23272 = state_23224__$1;
(statearr_23246_23272[(2)] = null);

(statearr_23246_23272[(1)] = (2));


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
});})(c__20598__auto___23258,out))
;
return ((function (switch__20486__auto__,c__20598__auto___23258,out){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_23250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23250[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_23250[(1)] = (1));

return statearr_23250;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_23224){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_23224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e23251){if((e23251 instanceof Object)){
var ex__20490__auto__ = e23251;
var statearr_23252_23273 = state_23224;
(statearr_23252_23273[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23274 = state_23224;
state_23224 = G__23274;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_23224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_23224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___23258,out))
})();
var state__20600__auto__ = (function (){var statearr_23253 = f__20599__auto__.call(null);
(statearr_23253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___23258);

return statearr_23253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___23258,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23275 = [];
var len__19501__auto___23349 = arguments.length;
var i__19502__auto___23350 = (0);
while(true){
if((i__19502__auto___23350 < len__19501__auto___23349)){
args23275.push((arguments[i__19502__auto___23350]));

var G__23351 = (i__19502__auto___23350 + (1));
i__19502__auto___23350 = G__23351;
continue;
} else {
}
break;
}

var G__23277 = args23275.length;
switch (G__23277) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23275.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20598__auto___23353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20598__auto___23353,out){
return (function (){
var f__20599__auto__ = (function (){var switch__20486__auto__ = ((function (c__20598__auto___23353,out){
return (function (state_23319){
var state_val_23320 = (state_23319[(1)]);
if((state_val_23320 === (7))){
var inst_23315 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23321_23354 = state_23319__$1;
(statearr_23321_23354[(2)] = inst_23315);

(statearr_23321_23354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (1))){
var inst_23278 = [];
var inst_23279 = inst_23278;
var inst_23280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23319__$1 = (function (){var statearr_23322 = state_23319;
(statearr_23322[(7)] = inst_23280);

(statearr_23322[(8)] = inst_23279);

return statearr_23322;
})();
var statearr_23323_23355 = state_23319__$1;
(statearr_23323_23355[(2)] = null);

(statearr_23323_23355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (4))){
var inst_23283 = (state_23319[(9)]);
var inst_23283__$1 = (state_23319[(2)]);
var inst_23284 = (inst_23283__$1 == null);
var inst_23285 = cljs.core.not.call(null,inst_23284);
var state_23319__$1 = (function (){var statearr_23324 = state_23319;
(statearr_23324[(9)] = inst_23283__$1);

return statearr_23324;
})();
if(inst_23285){
var statearr_23325_23356 = state_23319__$1;
(statearr_23325_23356[(1)] = (5));

} else {
var statearr_23326_23357 = state_23319__$1;
(statearr_23326_23357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (15))){
var inst_23309 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23327_23358 = state_23319__$1;
(statearr_23327_23358[(2)] = inst_23309);

(statearr_23327_23358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (13))){
var state_23319__$1 = state_23319;
var statearr_23328_23359 = state_23319__$1;
(statearr_23328_23359[(2)] = null);

(statearr_23328_23359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (6))){
var inst_23279 = (state_23319[(8)]);
var inst_23304 = inst_23279.length;
var inst_23305 = (inst_23304 > (0));
var state_23319__$1 = state_23319;
if(cljs.core.truth_(inst_23305)){
var statearr_23329_23360 = state_23319__$1;
(statearr_23329_23360[(1)] = (12));

} else {
var statearr_23330_23361 = state_23319__$1;
(statearr_23330_23361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (3))){
var inst_23317 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else {
if((state_val_23320 === (12))){
var inst_23279 = (state_23319[(8)]);
var inst_23307 = cljs.core.vec.call(null,inst_23279);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,(15),out,inst_23307);
} else {
if((state_val_23320 === (2))){
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(4),ch);
} else {
if((state_val_23320 === (11))){
var inst_23283 = (state_23319[(9)]);
var inst_23287 = (state_23319[(10)]);
var inst_23297 = (state_23319[(2)]);
var inst_23298 = [];
var inst_23299 = inst_23298.push(inst_23283);
var inst_23279 = inst_23298;
var inst_23280 = inst_23287;
var state_23319__$1 = (function (){var statearr_23331 = state_23319;
(statearr_23331[(11)] = inst_23297);

(statearr_23331[(7)] = inst_23280);

(statearr_23331[(12)] = inst_23299);

(statearr_23331[(8)] = inst_23279);

return statearr_23331;
})();
var statearr_23332_23362 = state_23319__$1;
(statearr_23332_23362[(2)] = null);

(statearr_23332_23362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (9))){
var inst_23279 = (state_23319[(8)]);
var inst_23295 = cljs.core.vec.call(null,inst_23279);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,(11),out,inst_23295);
} else {
if((state_val_23320 === (5))){
var inst_23280 = (state_23319[(7)]);
var inst_23283 = (state_23319[(9)]);
var inst_23287 = (state_23319[(10)]);
var inst_23287__$1 = f.call(null,inst_23283);
var inst_23288 = cljs.core._EQ_.call(null,inst_23287__$1,inst_23280);
var inst_23289 = cljs.core.keyword_identical_QMARK_.call(null,inst_23280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23290 = (inst_23288) || (inst_23289);
var state_23319__$1 = (function (){var statearr_23333 = state_23319;
(statearr_23333[(10)] = inst_23287__$1);

return statearr_23333;
})();
if(cljs.core.truth_(inst_23290)){
var statearr_23334_23363 = state_23319__$1;
(statearr_23334_23363[(1)] = (8));

} else {
var statearr_23335_23364 = state_23319__$1;
(statearr_23335_23364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (14))){
var inst_23312 = (state_23319[(2)]);
var inst_23313 = cljs.core.async.close_BANG_.call(null,out);
var state_23319__$1 = (function (){var statearr_23337 = state_23319;
(statearr_23337[(13)] = inst_23312);

return statearr_23337;
})();
var statearr_23338_23365 = state_23319__$1;
(statearr_23338_23365[(2)] = inst_23313);

(statearr_23338_23365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (10))){
var inst_23302 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23339_23366 = state_23319__$1;
(statearr_23339_23366[(2)] = inst_23302);

(statearr_23339_23366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (8))){
var inst_23283 = (state_23319[(9)]);
var inst_23287 = (state_23319[(10)]);
var inst_23279 = (state_23319[(8)]);
var inst_23292 = inst_23279.push(inst_23283);
var tmp23336 = inst_23279;
var inst_23279__$1 = tmp23336;
var inst_23280 = inst_23287;
var state_23319__$1 = (function (){var statearr_23340 = state_23319;
(statearr_23340[(14)] = inst_23292);

(statearr_23340[(7)] = inst_23280);

(statearr_23340[(8)] = inst_23279__$1);

return statearr_23340;
})();
var statearr_23341_23367 = state_23319__$1;
(statearr_23341_23367[(2)] = null);

(statearr_23341_23367[(1)] = (2));


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
});})(c__20598__auto___23353,out))
;
return ((function (switch__20486__auto__,c__20598__auto___23353,out){
return (function() {
var cljs$core$async$state_machine__20487__auto__ = null;
var cljs$core$async$state_machine__20487__auto____0 = (function (){
var statearr_23345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23345[(0)] = cljs$core$async$state_machine__20487__auto__);

(statearr_23345[(1)] = (1));

return statearr_23345;
});
var cljs$core$async$state_machine__20487__auto____1 = (function (state_23319){
while(true){
var ret_value__20488__auto__ = (function (){try{while(true){
var result__20489__auto__ = switch__20486__auto__.call(null,state_23319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20489__auto__;
}
break;
}
}catch (e23346){if((e23346 instanceof Object)){
var ex__20490__auto__ = e23346;
var statearr_23347_23368 = state_23319;
(statearr_23347_23368[(5)] = ex__20490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23369 = state_23319;
state_23319 = G__23369;
continue;
} else {
return ret_value__20488__auto__;
}
break;
}
});
cljs$core$async$state_machine__20487__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20487__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20487__auto____0;
cljs$core$async$state_machine__20487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20487__auto____1;
return cljs$core$async$state_machine__20487__auto__;
})()
;})(switch__20486__auto__,c__20598__auto___23353,out))
})();
var state__20600__auto__ = (function (){var statearr_23348 = f__20599__auto__.call(null);
(statearr_23348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20598__auto___23353);

return statearr_23348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20600__auto__);
});})(c__20598__auto___23353,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1463305604905