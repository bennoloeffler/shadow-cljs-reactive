goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30332 = arguments.length;
switch (G__30332) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30333 = (function (f,blockable,meta30334){
this.f = f;
this.blockable = blockable;
this.meta30334 = meta30334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30335,meta30334__$1){
var self__ = this;
var _30335__$1 = this;
return (new cljs.core.async.t_cljs$core$async30333(self__.f,self__.blockable,meta30334__$1));
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30335){
var self__ = this;
var _30335__$1 = this;
return self__.meta30334;
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30334","meta30334",672286945,null)], null);
}));

(cljs.core.async.t_cljs$core$async30333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30333");

(cljs.core.async.t_cljs$core$async30333.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30333.
 */
cljs.core.async.__GT_t_cljs$core$async30333 = (function cljs$core$async$__GT_t_cljs$core$async30333(f__$1,blockable__$1,meta30334){
return (new cljs.core.async.t_cljs$core$async30333(f__$1,blockable__$1,meta30334));
});

}

return (new cljs.core.async.t_cljs$core$async30333(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30339 = arguments.length;
switch (G__30339) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30341 = arguments.length;
switch (G__30341) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__30344 = arguments.length;
switch (G__30344) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32210 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32210) : fn1.call(null,val_32210));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32210) : fn1.call(null,val_32210));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30346 = arguments.length;
switch (G__30346) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32222 = n;
var x_32223 = (0);
while(true){
if((x_32223 < n__4613__auto___32222)){
(a[x_32223] = x_32223);

var G__32224 = (x_32223 + (1));
x_32223 = G__32224;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30348 = (function (flag,meta30349){
this.flag = flag;
this.meta30349 = meta30349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30350,meta30349__$1){
var self__ = this;
var _30350__$1 = this;
return (new cljs.core.async.t_cljs$core$async30348(self__.flag,meta30349__$1));
}));

(cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30350){
var self__ = this;
var _30350__$1 = this;
return self__.meta30349;
}));

(cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30349","meta30349",78081717,null)], null);
}));

(cljs.core.async.t_cljs$core$async30348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30348");

(cljs.core.async.t_cljs$core$async30348.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30348.
 */
cljs.core.async.__GT_t_cljs$core$async30348 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30348(flag__$1,meta30349){
return (new cljs.core.async.t_cljs$core$async30348(flag__$1,meta30349));
});

}

return (new cljs.core.async.t_cljs$core$async30348(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30359 = (function (flag,cb,meta30360){
this.flag = flag;
this.cb = cb;
this.meta30360 = meta30360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30361,meta30360__$1){
var self__ = this;
var _30361__$1 = this;
return (new cljs.core.async.t_cljs$core$async30359(self__.flag,self__.cb,meta30360__$1));
}));

(cljs.core.async.t_cljs$core$async30359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30361){
var self__ = this;
var _30361__$1 = this;
return self__.meta30360;
}));

(cljs.core.async.t_cljs$core$async30359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30360","meta30360",437158058,null)], null);
}));

(cljs.core.async.t_cljs$core$async30359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30359");

(cljs.core.async.t_cljs$core$async30359.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30359.
 */
cljs.core.async.__GT_t_cljs$core$async30359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30359(flag__$1,cb__$1,meta30360){
return (new cljs.core.async.t_cljs$core$async30359(flag__$1,cb__$1,meta30360));
});

}

return (new cljs.core.async.t_cljs$core$async30359(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30423_SHARP_){
var G__30431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30423_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30431) : fret.call(null,G__30431));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30424_SHARP_){
var G__30434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30424_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30434) : fret.call(null,G__30434));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32229 = (i + (1));
i = G__32229;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4742__auto__ = [];
var len__4736__auto___32230 = arguments.length;
var i__4737__auto___32231 = (0);
while(true){
if((i__4737__auto___32231 < len__4736__auto___32230)){
args__4742__auto__.push((arguments[i__4737__auto___32231]));

var G__32232 = (i__4737__auto___32231 + (1));
i__4737__auto___32231 = G__32232;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30455){
var map__30456 = p__30455;
var map__30456__$1 = (((((!((map__30456 == null))))?(((((map__30456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30456):map__30456);
var opts = map__30456__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30450){
var G__30451 = cljs.core.first(seq30450);
var seq30450__$1 = cljs.core.next(seq30450);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30451,seq30450__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30483 = arguments.length;
switch (G__30483) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30274__auto___32236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30564){
var state_val_30566 = (state_30564[(1)]);
if((state_val_30566 === (7))){
var inst_30556 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30578_32237 = state_30564__$1;
(statearr_30578_32237[(2)] = inst_30556);

(statearr_30578_32237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (1))){
var state_30564__$1 = state_30564;
var statearr_30581_32238 = state_30564__$1;
(statearr_30581_32238[(2)] = null);

(statearr_30581_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (4))){
var inst_30520 = (state_30564[(7)]);
var inst_30520__$1 = (state_30564[(2)]);
var inst_30531 = (inst_30520__$1 == null);
var state_30564__$1 = (function (){var statearr_30586 = state_30564;
(statearr_30586[(7)] = inst_30520__$1);

return statearr_30586;
})();
if(cljs.core.truth_(inst_30531)){
var statearr_30587_32239 = state_30564__$1;
(statearr_30587_32239[(1)] = (5));

} else {
var statearr_30588_32240 = state_30564__$1;
(statearr_30588_32240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (13))){
var state_30564__$1 = state_30564;
var statearr_30590_32241 = state_30564__$1;
(statearr_30590_32241[(2)] = null);

(statearr_30590_32241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (6))){
var inst_30520 = (state_30564[(7)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30564__$1,(11),to,inst_30520);
} else {
if((state_val_30566 === (3))){
var inst_30559 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30564__$1,inst_30559);
} else {
if((state_val_30566 === (12))){
var state_30564__$1 = state_30564;
var statearr_30599_32242 = state_30564__$1;
(statearr_30599_32242[(2)] = null);

(statearr_30599_32242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30564__$1,(4),from);
} else {
if((state_val_30566 === (11))){
var inst_30542 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30542)){
var statearr_30602_32243 = state_30564__$1;
(statearr_30602_32243[(1)] = (12));

} else {
var statearr_30603_32244 = state_30564__$1;
(statearr_30603_32244[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (9))){
var state_30564__$1 = state_30564;
var statearr_30604_32245 = state_30564__$1;
(statearr_30604_32245[(2)] = null);

(statearr_30604_32245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (5))){
var state_30564__$1 = state_30564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30605_32246 = state_30564__$1;
(statearr_30605_32246[(1)] = (8));

} else {
var statearr_30606_32247 = state_30564__$1;
(statearr_30606_32247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (14))){
var inst_30554 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30607_32248 = state_30564__$1;
(statearr_30607_32248[(2)] = inst_30554);

(statearr_30607_32248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (10))){
var inst_30539 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30611_32249 = state_30564__$1;
(statearr_30611_32249[(2)] = inst_30539);

(statearr_30611_32249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (8))){
var inst_30534 = cljs.core.async.close_BANG_(to);
var state_30564__$1 = state_30564;
var statearr_30612_32250 = state_30564__$1;
(statearr_30612_32250[(2)] = inst_30534);

(statearr_30612_32250[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_30619 = [null,null,null,null,null,null,null,null];
(statearr_30619[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_30619[(1)] = (1));

return statearr_30619;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_30564){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30564);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30620){var ex__29926__auto__ = e30620;
var statearr_30623_32252 = state_30564;
(statearr_30623_32252[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30564[(4)]))){
var statearr_30624_32253 = state_30564;
(statearr_30624_32253[(1)] = cljs.core.first((state_30564[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32254 = state_30564;
state_30564 = G__32254;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30625 = f__30275__auto__();
(statearr_30625[(6)] = c__30274__auto___32236);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30627){
var vec__30628 = p__30627;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(1),null);
var job = vec__30628;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30274__auto___32257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30635){
var state_val_30636 = (state_30635[(1)]);
if((state_val_30636 === (1))){
var state_30635__$1 = state_30635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30635__$1,(2),res,v);
} else {
if((state_val_30636 === (2))){
var inst_30632 = (state_30635[(2)]);
var inst_30633 = cljs.core.async.close_BANG_(res);
var state_30635__$1 = (function (){var statearr_30637 = state_30635;
(statearr_30637[(7)] = inst_30632);

return statearr_30637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30635__$1,inst_30633);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0 = (function (){
var statearr_30638 = [null,null,null,null,null,null,null,null];
(statearr_30638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__);

(statearr_30638[(1)] = (1));

return statearr_30638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1 = (function (state_30635){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30635);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30639){var ex__29926__auto__ = e30639;
var statearr_30640_32258 = state_30635;
(statearr_30640_32258[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30635[(4)]))){
var statearr_30641_32259 = state_30635;
(statearr_30641_32259[(1)] = cljs.core.first((state_30635[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32261 = state_30635;
state_30635 = G__32261;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = function(state_30635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1.call(this,state_30635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30642 = f__30275__auto__();
(statearr_30642[(6)] = c__30274__auto___32257);

return statearr_30642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30643){
var vec__30644 = p__30643;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30644,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30644,(1),null);
var job = vec__30644;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32263 = n;
var __32264 = (0);
while(true){
if((__32264 < n__4613__auto___32263)){
var G__30648_32265 = type;
var G__30648_32266__$1 = (((G__30648_32265 instanceof cljs.core.Keyword))?G__30648_32265.fqn:null);
switch (G__30648_32266__$1) {
case "compute":
var c__30274__auto___32268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32264,c__30274__auto___32268,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async){
return (function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = ((function (__32264,c__30274__auto___32268,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async){
return (function (state_30661){
var state_val_30662 = (state_30661[(1)]);
if((state_val_30662 === (1))){
var state_30661__$1 = state_30661;
var statearr_30664_32271 = state_30661__$1;
(statearr_30664_32271[(2)] = null);

(statearr_30664_32271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (2))){
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30661__$1,(4),jobs);
} else {
if((state_val_30662 === (3))){
var inst_30659 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30661__$1,inst_30659);
} else {
if((state_val_30662 === (4))){
var inst_30651 = (state_30661[(2)]);
var inst_30652 = process(inst_30651);
var state_30661__$1 = state_30661;
if(cljs.core.truth_(inst_30652)){
var statearr_30669_32272 = state_30661__$1;
(statearr_30669_32272[(1)] = (5));

} else {
var statearr_30670_32273 = state_30661__$1;
(statearr_30670_32273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (5))){
var state_30661__$1 = state_30661;
var statearr_30675_32274 = state_30661__$1;
(statearr_30675_32274[(2)] = null);

(statearr_30675_32274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (6))){
var state_30661__$1 = state_30661;
var statearr_30680_32277 = state_30661__$1;
(statearr_30680_32277[(2)] = null);

(statearr_30680_32277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (7))){
var inst_30657 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30681_32278 = state_30661__$1;
(statearr_30681_32278[(2)] = inst_30657);

(statearr_30681_32278[(1)] = (3));


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
});})(__32264,c__30274__auto___32268,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async))
;
return ((function (__32264,switch__29922__auto__,c__30274__auto___32268,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0 = (function (){
var statearr_30682 = [null,null,null,null,null,null,null];
(statearr_30682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__);

(statearr_30682[(1)] = (1));

return statearr_30682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1 = (function (state_30661){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30661);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30683){var ex__29926__auto__ = e30683;
var statearr_30684_32279 = state_30661;
(statearr_30684_32279[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30661[(4)]))){
var statearr_30685_32280 = state_30661;
(statearr_30685_32280[(1)] = cljs.core.first((state_30661[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32281 = state_30661;
state_30661 = G__32281;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = function(state_30661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1.call(this,state_30661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__;
})()
;})(__32264,switch__29922__auto__,c__30274__auto___32268,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async))
})();
var state__30276__auto__ = (function (){var statearr_30686 = f__30275__auto__();
(statearr_30686[(6)] = c__30274__auto___32268);

return statearr_30686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
});})(__32264,c__30274__auto___32268,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async))
);


break;
case "async":
var c__30274__auto___32282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32264,c__30274__auto___32282,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async){
return (function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = ((function (__32264,c__30274__auto___32282,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async){
return (function (state_30699){
var state_val_30700 = (state_30699[(1)]);
if((state_val_30700 === (1))){
var state_30699__$1 = state_30699;
var statearr_30701_32285 = state_30699__$1;
(statearr_30701_32285[(2)] = null);

(statearr_30701_32285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (2))){
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30699__$1,(4),jobs);
} else {
if((state_val_30700 === (3))){
var inst_30697 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30699__$1,inst_30697);
} else {
if((state_val_30700 === (4))){
var inst_30689 = (state_30699[(2)]);
var inst_30690 = async(inst_30689);
var state_30699__$1 = state_30699;
if(cljs.core.truth_(inst_30690)){
var statearr_30702_32286 = state_30699__$1;
(statearr_30702_32286[(1)] = (5));

} else {
var statearr_30703_32287 = state_30699__$1;
(statearr_30703_32287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (5))){
var state_30699__$1 = state_30699;
var statearr_30704_32288 = state_30699__$1;
(statearr_30704_32288[(2)] = null);

(statearr_30704_32288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (6))){
var state_30699__$1 = state_30699;
var statearr_30705_32292 = state_30699__$1;
(statearr_30705_32292[(2)] = null);

(statearr_30705_32292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (7))){
var inst_30695 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
var statearr_30706_32293 = state_30699__$1;
(statearr_30706_32293[(2)] = inst_30695);

(statearr_30706_32293[(1)] = (3));


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
});})(__32264,c__30274__auto___32282,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async))
;
return ((function (__32264,switch__29922__auto__,c__30274__auto___32282,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0 = (function (){
var statearr_30707 = [null,null,null,null,null,null,null];
(statearr_30707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__);

(statearr_30707[(1)] = (1));

return statearr_30707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1 = (function (state_30699){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30699);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30708){var ex__29926__auto__ = e30708;
var statearr_30709_32294 = state_30699;
(statearr_30709_32294[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30699[(4)]))){
var statearr_30710_32295 = state_30699;
(statearr_30710_32295[(1)] = cljs.core.first((state_30699[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32296 = state_30699;
state_30699 = G__32296;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = function(state_30699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1.call(this,state_30699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__;
})()
;})(__32264,switch__29922__auto__,c__30274__auto___32282,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async))
})();
var state__30276__auto__ = (function (){var statearr_30711 = f__30275__auto__();
(statearr_30711[(6)] = c__30274__auto___32282);

return statearr_30711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
});})(__32264,c__30274__auto___32282,G__30648_32265,G__30648_32266__$1,n__4613__auto___32263,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30648_32266__$1)].join('')));

}

var G__32298 = (__32264 + (1));
__32264 = G__32298;
continue;
} else {
}
break;
}

var c__30274__auto___32299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30733){
var state_val_30734 = (state_30733[(1)]);
if((state_val_30734 === (7))){
var inst_30729 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30735_32300 = state_30733__$1;
(statearr_30735_32300[(2)] = inst_30729);

(statearr_30735_32300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (1))){
var state_30733__$1 = state_30733;
var statearr_30736_32301 = state_30733__$1;
(statearr_30736_32301[(2)] = null);

(statearr_30736_32301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (4))){
var inst_30714 = (state_30733[(7)]);
var inst_30714__$1 = (state_30733[(2)]);
var inst_30715 = (inst_30714__$1 == null);
var state_30733__$1 = (function (){var statearr_30737 = state_30733;
(statearr_30737[(7)] = inst_30714__$1);

return statearr_30737;
})();
if(cljs.core.truth_(inst_30715)){
var statearr_30738_32305 = state_30733__$1;
(statearr_30738_32305[(1)] = (5));

} else {
var statearr_30739_32306 = state_30733__$1;
(statearr_30739_32306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (6))){
var inst_30719 = (state_30733[(8)]);
var inst_30714 = (state_30733[(7)]);
var inst_30719__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30721 = [inst_30714,inst_30719__$1];
var inst_30722 = (new cljs.core.PersistentVector(null,2,(5),inst_30720,inst_30721,null));
var state_30733__$1 = (function (){var statearr_30740 = state_30733;
(statearr_30740[(8)] = inst_30719__$1);

return statearr_30740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30733__$1,(8),jobs,inst_30722);
} else {
if((state_val_30734 === (3))){
var inst_30731 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30733__$1,inst_30731);
} else {
if((state_val_30734 === (2))){
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30733__$1,(4),from);
} else {
if((state_val_30734 === (9))){
var inst_30726 = (state_30733[(2)]);
var state_30733__$1 = (function (){var statearr_30741 = state_30733;
(statearr_30741[(9)] = inst_30726);

return statearr_30741;
})();
var statearr_30742_32310 = state_30733__$1;
(statearr_30742_32310[(2)] = null);

(statearr_30742_32310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (5))){
var inst_30717 = cljs.core.async.close_BANG_(jobs);
var state_30733__$1 = state_30733;
var statearr_30743_32315 = state_30733__$1;
(statearr_30743_32315[(2)] = inst_30717);

(statearr_30743_32315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (8))){
var inst_30719 = (state_30733[(8)]);
var inst_30724 = (state_30733[(2)]);
var state_30733__$1 = (function (){var statearr_30744 = state_30733;
(statearr_30744[(10)] = inst_30724);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30733__$1,(9),results,inst_30719);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0 = (function (){
var statearr_30745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__);

(statearr_30745[(1)] = (1));

return statearr_30745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1 = (function (state_30733){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30733);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30746){var ex__29926__auto__ = e30746;
var statearr_30747_32316 = state_30733;
(statearr_30747_32316[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30733[(4)]))){
var statearr_30748_32317 = state_30733;
(statearr_30748_32317[(1)] = cljs.core.first((state_30733[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32320 = state_30733;
state_30733 = G__32320;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = function(state_30733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1.call(this,state_30733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30749 = f__30275__auto__();
(statearr_30749[(6)] = c__30274__auto___32299);

return statearr_30749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


var c__30274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30787){
var state_val_30788 = (state_30787[(1)]);
if((state_val_30788 === (7))){
var inst_30783 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30789_32323 = state_30787__$1;
(statearr_30789_32323[(2)] = inst_30783);

(statearr_30789_32323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (20))){
var state_30787__$1 = state_30787;
var statearr_30790_32324 = state_30787__$1;
(statearr_30790_32324[(2)] = null);

(statearr_30790_32324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (1))){
var state_30787__$1 = state_30787;
var statearr_30791_32325 = state_30787__$1;
(statearr_30791_32325[(2)] = null);

(statearr_30791_32325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (4))){
var inst_30752 = (state_30787[(7)]);
var inst_30752__$1 = (state_30787[(2)]);
var inst_30753 = (inst_30752__$1 == null);
var state_30787__$1 = (function (){var statearr_30792 = state_30787;
(statearr_30792[(7)] = inst_30752__$1);

return statearr_30792;
})();
if(cljs.core.truth_(inst_30753)){
var statearr_30793_32326 = state_30787__$1;
(statearr_30793_32326[(1)] = (5));

} else {
var statearr_30794_32327 = state_30787__$1;
(statearr_30794_32327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (15))){
var inst_30765 = (state_30787[(8)]);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30787__$1,(18),to,inst_30765);
} else {
if((state_val_30788 === (21))){
var inst_30778 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30795_32328 = state_30787__$1;
(statearr_30795_32328[(2)] = inst_30778);

(statearr_30795_32328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (13))){
var inst_30780 = (state_30787[(2)]);
var state_30787__$1 = (function (){var statearr_30796 = state_30787;
(statearr_30796[(9)] = inst_30780);

return statearr_30796;
})();
var statearr_30797_32329 = state_30787__$1;
(statearr_30797_32329[(2)] = null);

(statearr_30797_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (6))){
var inst_30752 = (state_30787[(7)]);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30787__$1,(11),inst_30752);
} else {
if((state_val_30788 === (17))){
var inst_30773 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
if(cljs.core.truth_(inst_30773)){
var statearr_30798_32330 = state_30787__$1;
(statearr_30798_32330[(1)] = (19));

} else {
var statearr_30799_32331 = state_30787__$1;
(statearr_30799_32331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (3))){
var inst_30785 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30787__$1,inst_30785);
} else {
if((state_val_30788 === (12))){
var inst_30762 = (state_30787[(10)]);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30787__$1,(14),inst_30762);
} else {
if((state_val_30788 === (2))){
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30787__$1,(4),results);
} else {
if((state_val_30788 === (19))){
var state_30787__$1 = state_30787;
var statearr_30800_32332 = state_30787__$1;
(statearr_30800_32332[(2)] = null);

(statearr_30800_32332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (11))){
var inst_30762 = (state_30787[(2)]);
var state_30787__$1 = (function (){var statearr_30801 = state_30787;
(statearr_30801[(10)] = inst_30762);

return statearr_30801;
})();
var statearr_30802_32333 = state_30787__$1;
(statearr_30802_32333[(2)] = null);

(statearr_30802_32333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (9))){
var state_30787__$1 = state_30787;
var statearr_30803_32334 = state_30787__$1;
(statearr_30803_32334[(2)] = null);

(statearr_30803_32334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (5))){
var state_30787__$1 = state_30787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30804_32335 = state_30787__$1;
(statearr_30804_32335[(1)] = (8));

} else {
var statearr_30805_32336 = state_30787__$1;
(statearr_30805_32336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (14))){
var inst_30765 = (state_30787[(8)]);
var inst_30765__$1 = (state_30787[(2)]);
var inst_30766 = (inst_30765__$1 == null);
var inst_30767 = cljs.core.not(inst_30766);
var state_30787__$1 = (function (){var statearr_30806 = state_30787;
(statearr_30806[(8)] = inst_30765__$1);

return statearr_30806;
})();
if(inst_30767){
var statearr_30807_32363 = state_30787__$1;
(statearr_30807_32363[(1)] = (15));

} else {
var statearr_30808_32364 = state_30787__$1;
(statearr_30808_32364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (16))){
var state_30787__$1 = state_30787;
var statearr_30809_32365 = state_30787__$1;
(statearr_30809_32365[(2)] = false);

(statearr_30809_32365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (10))){
var inst_30759 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30810_32366 = state_30787__$1;
(statearr_30810_32366[(2)] = inst_30759);

(statearr_30810_32366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (18))){
var inst_30770 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30811_32367 = state_30787__$1;
(statearr_30811_32367[(2)] = inst_30770);

(statearr_30811_32367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (8))){
var inst_30756 = cljs.core.async.close_BANG_(to);
var state_30787__$1 = state_30787;
var statearr_30812_32368 = state_30787__$1;
(statearr_30812_32368[(2)] = inst_30756);

(statearr_30812_32368[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0 = (function (){
var statearr_30813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__);

(statearr_30813[(1)] = (1));

return statearr_30813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1 = (function (state_30787){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30787);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30814){var ex__29926__auto__ = e30814;
var statearr_30815_32369 = state_30787;
(statearr_30815_32369[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30787[(4)]))){
var statearr_30816_32370 = state_30787;
(statearr_30816_32370[(1)] = cljs.core.first((state_30787[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32371 = state_30787;
state_30787 = G__32371;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__ = function(state_30787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1.call(this,state_30787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30817 = f__30275__auto__();
(statearr_30817[(6)] = c__30274__auto__);

return statearr_30817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));

return c__30274__auto__;
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
var G__30819 = arguments.length;
switch (G__30819) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30821 = arguments.length;
switch (G__30821) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30823 = arguments.length;
switch (G__30823) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30274__auto___32384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (7))){
var inst_30845 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30851_32385 = state_30849__$1;
(statearr_30851_32385[(2)] = inst_30845);

(statearr_30851_32385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (1))){
var state_30849__$1 = state_30849;
var statearr_30852_32386 = state_30849__$1;
(statearr_30852_32386[(2)] = null);

(statearr_30852_32386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (4))){
var inst_30826 = (state_30849[(7)]);
var inst_30826__$1 = (state_30849[(2)]);
var inst_30827 = (inst_30826__$1 == null);
var state_30849__$1 = (function (){var statearr_30853 = state_30849;
(statearr_30853[(7)] = inst_30826__$1);

return statearr_30853;
})();
if(cljs.core.truth_(inst_30827)){
var statearr_30854_32388 = state_30849__$1;
(statearr_30854_32388[(1)] = (5));

} else {
var statearr_30855_32389 = state_30849__$1;
(statearr_30855_32389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (13))){
var state_30849__$1 = state_30849;
var statearr_30856_32390 = state_30849__$1;
(statearr_30856_32390[(2)] = null);

(statearr_30856_32390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (6))){
var inst_30826 = (state_30849[(7)]);
var inst_30832 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30826) : p.call(null,inst_30826));
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30832)){
var statearr_30857_32391 = state_30849__$1;
(statearr_30857_32391[(1)] = (9));

} else {
var statearr_30858_32392 = state_30849__$1;
(statearr_30858_32392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (3))){
var inst_30847 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30849__$1,inst_30847);
} else {
if((state_val_30850 === (12))){
var state_30849__$1 = state_30849;
var statearr_30859_32393 = state_30849__$1;
(statearr_30859_32393[(2)] = null);

(statearr_30859_32393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (2))){
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30849__$1,(4),ch);
} else {
if((state_val_30850 === (11))){
var inst_30826 = (state_30849[(7)]);
var inst_30836 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30849__$1,(8),inst_30836,inst_30826);
} else {
if((state_val_30850 === (9))){
var state_30849__$1 = state_30849;
var statearr_30860_32394 = state_30849__$1;
(statearr_30860_32394[(2)] = tc);

(statearr_30860_32394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (5))){
var inst_30829 = cljs.core.async.close_BANG_(tc);
var inst_30830 = cljs.core.async.close_BANG_(fc);
var state_30849__$1 = (function (){var statearr_30861 = state_30849;
(statearr_30861[(8)] = inst_30829);

return statearr_30861;
})();
var statearr_30862_32395 = state_30849__$1;
(statearr_30862_32395[(2)] = inst_30830);

(statearr_30862_32395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (14))){
var inst_30843 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30863_32396 = state_30849__$1;
(statearr_30863_32396[(2)] = inst_30843);

(statearr_30863_32396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (10))){
var state_30849__$1 = state_30849;
var statearr_30864_32397 = state_30849__$1;
(statearr_30864_32397[(2)] = fc);

(statearr_30864_32397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (8))){
var inst_30838 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30838)){
var statearr_30865_32398 = state_30849__$1;
(statearr_30865_32398[(1)] = (12));

} else {
var statearr_30866_32399 = state_30849__$1;
(statearr_30866_32399[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_30867 = [null,null,null,null,null,null,null,null,null];
(statearr_30867[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_30867[(1)] = (1));

return statearr_30867;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_30849){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30849);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30868){var ex__29926__auto__ = e30868;
var statearr_30869_32400 = state_30849;
(statearr_30869_32400[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30849[(4)]))){
var statearr_30870_32413 = state_30849;
(statearr_30870_32413[(1)] = cljs.core.first((state_30849[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32414 = state_30849;
state_30849 = G__32414;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30871 = f__30275__auto__();
(statearr_30871[(6)] = c__30274__auto___32384);

return statearr_30871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30893){
var state_val_30894 = (state_30893[(1)]);
if((state_val_30894 === (7))){
var inst_30889 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30895_32416 = state_30893__$1;
(statearr_30895_32416[(2)] = inst_30889);

(statearr_30895_32416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (1))){
var inst_30872 = init;
var inst_30873 = inst_30872;
var state_30893__$1 = (function (){var statearr_30896 = state_30893;
(statearr_30896[(7)] = inst_30873);

return statearr_30896;
})();
var statearr_30897_32417 = state_30893__$1;
(statearr_30897_32417[(2)] = null);

(statearr_30897_32417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (4))){
var inst_30876 = (state_30893[(8)]);
var inst_30876__$1 = (state_30893[(2)]);
var inst_30877 = (inst_30876__$1 == null);
var state_30893__$1 = (function (){var statearr_30898 = state_30893;
(statearr_30898[(8)] = inst_30876__$1);

return statearr_30898;
})();
if(cljs.core.truth_(inst_30877)){
var statearr_30899_32418 = state_30893__$1;
(statearr_30899_32418[(1)] = (5));

} else {
var statearr_30900_32419 = state_30893__$1;
(statearr_30900_32419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (6))){
var inst_30873 = (state_30893[(7)]);
var inst_30880 = (state_30893[(9)]);
var inst_30876 = (state_30893[(8)]);
var inst_30880__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30873,inst_30876) : f.call(null,inst_30873,inst_30876));
var inst_30881 = cljs.core.reduced_QMARK_(inst_30880__$1);
var state_30893__$1 = (function (){var statearr_30901 = state_30893;
(statearr_30901[(9)] = inst_30880__$1);

return statearr_30901;
})();
if(inst_30881){
var statearr_30902_32421 = state_30893__$1;
(statearr_30902_32421[(1)] = (8));

} else {
var statearr_30903_32422 = state_30893__$1;
(statearr_30903_32422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (3))){
var inst_30891 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30893__$1,inst_30891);
} else {
if((state_val_30894 === (2))){
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30893__$1,(4),ch);
} else {
if((state_val_30894 === (9))){
var inst_30880 = (state_30893[(9)]);
var inst_30873 = inst_30880;
var state_30893__$1 = (function (){var statearr_30904 = state_30893;
(statearr_30904[(7)] = inst_30873);

return statearr_30904;
})();
var statearr_30905_32423 = state_30893__$1;
(statearr_30905_32423[(2)] = null);

(statearr_30905_32423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (5))){
var inst_30873 = (state_30893[(7)]);
var state_30893__$1 = state_30893;
var statearr_30906_32424 = state_30893__$1;
(statearr_30906_32424[(2)] = inst_30873);

(statearr_30906_32424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (10))){
var inst_30887 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30907_32425 = state_30893__$1;
(statearr_30907_32425[(2)] = inst_30887);

(statearr_30907_32425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (8))){
var inst_30880 = (state_30893[(9)]);
var inst_30883 = cljs.core.deref(inst_30880);
var state_30893__$1 = state_30893;
var statearr_30908_32427 = state_30893__$1;
(statearr_30908_32427[(2)] = inst_30883);

(statearr_30908_32427[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29923__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29923__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30909[(0)] = cljs$core$async$reduce_$_state_machine__29923__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var cljs$core$async$reduce_$_state_machine__29923__auto____1 = (function (state_30893){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30893);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30910){var ex__29926__auto__ = e30910;
var statearr_30911_32428 = state_30893;
(statearr_30911_32428[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30893[(4)]))){
var statearr_30912_32429 = state_30893;
(statearr_30912_32429[(1)] = cljs.core.first((state_30893[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32430 = state_30893;
state_30893 = G__32430;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29923__auto__ = function(state_30893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29923__auto____1.call(this,state_30893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29923__auto____0;
cljs$core$async$reduce_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29923__auto____1;
return cljs$core$async$reduce_$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30913 = f__30275__auto__();
(statearr_30913[(6)] = c__30274__auto__);

return statearr_30913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));

return c__30274__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30919){
var state_val_30920 = (state_30919[(1)]);
if((state_val_30920 === (1))){
var inst_30914 = cljs.core.async.reduce(f__$1,init,ch);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30919__$1,(2),inst_30914);
} else {
if((state_val_30920 === (2))){
var inst_30916 = (state_30919[(2)]);
var inst_30917 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30916) : f__$1.call(null,inst_30916));
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30919__$1,inst_30917);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29923__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29923__auto____0 = (function (){
var statearr_30921 = [null,null,null,null,null,null,null];
(statearr_30921[(0)] = cljs$core$async$transduce_$_state_machine__29923__auto__);

(statearr_30921[(1)] = (1));

return statearr_30921;
});
var cljs$core$async$transduce_$_state_machine__29923__auto____1 = (function (state_30919){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30919);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30922){var ex__29926__auto__ = e30922;
var statearr_30923_32431 = state_30919;
(statearr_30923_32431[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30919[(4)]))){
var statearr_30924_32432 = state_30919;
(statearr_30924_32432[(1)] = cljs.core.first((state_30919[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32433 = state_30919;
state_30919 = G__32433;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29923__auto__ = function(state_30919){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29923__auto____1.call(this,state_30919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29923__auto____0;
cljs$core$async$transduce_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29923__auto____1;
return cljs$core$async$transduce_$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30925 = f__30275__auto__();
(statearr_30925[(6)] = c__30274__auto__);

return statearr_30925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));

return c__30274__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30927 = arguments.length;
switch (G__30927) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_30952){
var state_val_30953 = (state_30952[(1)]);
if((state_val_30953 === (7))){
var inst_30934 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30954_32435 = state_30952__$1;
(statearr_30954_32435[(2)] = inst_30934);

(statearr_30954_32435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (1))){
var inst_30928 = cljs.core.seq(coll);
var inst_30929 = inst_30928;
var state_30952__$1 = (function (){var statearr_30955 = state_30952;
(statearr_30955[(7)] = inst_30929);

return statearr_30955;
})();
var statearr_30956_32437 = state_30952__$1;
(statearr_30956_32437[(2)] = null);

(statearr_30956_32437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (4))){
var inst_30929 = (state_30952[(7)]);
var inst_30932 = cljs.core.first(inst_30929);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30952__$1,(7),ch,inst_30932);
} else {
if((state_val_30953 === (13))){
var inst_30946 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30957_32441 = state_30952__$1;
(statearr_30957_32441[(2)] = inst_30946);

(statearr_30957_32441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (6))){
var inst_30937 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30937)){
var statearr_30958_32444 = state_30952__$1;
(statearr_30958_32444[(1)] = (8));

} else {
var statearr_30959_32445 = state_30952__$1;
(statearr_30959_32445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (3))){
var inst_30950 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30952__$1,inst_30950);
} else {
if((state_val_30953 === (12))){
var state_30952__$1 = state_30952;
var statearr_30960_32448 = state_30952__$1;
(statearr_30960_32448[(2)] = null);

(statearr_30960_32448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (2))){
var inst_30929 = (state_30952[(7)]);
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30929)){
var statearr_30961_32449 = state_30952__$1;
(statearr_30961_32449[(1)] = (4));

} else {
var statearr_30962_32450 = state_30952__$1;
(statearr_30962_32450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (11))){
var inst_30943 = cljs.core.async.close_BANG_(ch);
var state_30952__$1 = state_30952;
var statearr_30963_32451 = state_30952__$1;
(statearr_30963_32451[(2)] = inst_30943);

(statearr_30963_32451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (9))){
var state_30952__$1 = state_30952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30964_32455 = state_30952__$1;
(statearr_30964_32455[(1)] = (11));

} else {
var statearr_30965_32460 = state_30952__$1;
(statearr_30965_32460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (5))){
var inst_30929 = (state_30952[(7)]);
var state_30952__$1 = state_30952;
var statearr_30966_32461 = state_30952__$1;
(statearr_30966_32461[(2)] = inst_30929);

(statearr_30966_32461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (10))){
var inst_30948 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30967_32468 = state_30952__$1;
(statearr_30967_32468[(2)] = inst_30948);

(statearr_30967_32468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (8))){
var inst_30929 = (state_30952[(7)]);
var inst_30939 = cljs.core.next(inst_30929);
var inst_30929__$1 = inst_30939;
var state_30952__$1 = (function (){var statearr_30968 = state_30952;
(statearr_30968[(7)] = inst_30929__$1);

return statearr_30968;
})();
var statearr_30969_32482 = state_30952__$1;
(statearr_30969_32482[(2)] = null);

(statearr_30969_32482[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_30970 = [null,null,null,null,null,null,null,null];
(statearr_30970[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_30970[(1)] = (1));

return statearr_30970;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_30952){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_30952);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e30971){var ex__29926__auto__ = e30971;
var statearr_30972_32483 = state_30952;
(statearr_30972_32483[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_30952[(4)]))){
var statearr_30973_32484 = state_30952;
(statearr_30973_32484[(1)] = cljs.core.first((state_30952[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32485 = state_30952;
state_30952 = G__32485;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_30952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_30952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_30974 = f__30275__auto__();
(statearr_30974[(6)] = c__30274__auto__);

return statearr_30974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));

return c__30274__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30976 = arguments.length;
switch (G__30976) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32487 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32487(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32494 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32494(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32495 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32495(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32496 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32496(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30977 = (function (ch,cs,meta30978){
this.ch = ch;
this.cs = cs;
this.meta30978 = meta30978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30979,meta30978__$1){
var self__ = this;
var _30979__$1 = this;
return (new cljs.core.async.t_cljs$core$async30977(self__.ch,self__.cs,meta30978__$1));
}));

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30979){
var self__ = this;
var _30979__$1 = this;
return self__.meta30978;
}));

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30977.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30978","meta30978",431672916,null)], null);
}));

(cljs.core.async.t_cljs$core$async30977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30977");

(cljs.core.async.t_cljs$core$async30977.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30977.
 */
cljs.core.async.__GT_t_cljs$core$async30977 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30977(ch__$1,cs__$1,meta30978){
return (new cljs.core.async.t_cljs$core$async30977(ch__$1,cs__$1,meta30978));
});

}

return (new cljs.core.async.t_cljs$core$async30977(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30274__auto___32497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31112){
var state_val_31113 = (state_31112[(1)]);
if((state_val_31113 === (7))){
var inst_31108 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31114_32498 = state_31112__$1;
(statearr_31114_32498[(2)] = inst_31108);

(statearr_31114_32498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (20))){
var inst_31013 = (state_31112[(7)]);
var inst_31025 = cljs.core.first(inst_31013);
var inst_31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31025,(0),null);
var inst_31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31025,(1),null);
var state_31112__$1 = (function (){var statearr_31115 = state_31112;
(statearr_31115[(8)] = inst_31026);

return statearr_31115;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31116_32499 = state_31112__$1;
(statearr_31116_32499[(1)] = (22));

} else {
var statearr_31117_32500 = state_31112__$1;
(statearr_31117_32500[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (27))){
var inst_30982 = (state_31112[(9)]);
var inst_31062 = (state_31112[(10)]);
var inst_31057 = (state_31112[(11)]);
var inst_31055 = (state_31112[(12)]);
var inst_31062__$1 = cljs.core._nth(inst_31055,inst_31057);
var inst_31063 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31062__$1,inst_30982,done);
var state_31112__$1 = (function (){var statearr_31118 = state_31112;
(statearr_31118[(10)] = inst_31062__$1);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31063)){
var statearr_31119_32506 = state_31112__$1;
(statearr_31119_32506[(1)] = (30));

} else {
var statearr_31120_32507 = state_31112__$1;
(statearr_31120_32507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (1))){
var state_31112__$1 = state_31112;
var statearr_31121_32508 = state_31112__$1;
(statearr_31121_32508[(2)] = null);

(statearr_31121_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (24))){
var inst_31013 = (state_31112[(7)]);
var inst_31032 = (state_31112[(2)]);
var inst_31033 = cljs.core.next(inst_31013);
var inst_30991 = inst_31033;
var inst_30992 = null;
var inst_30993 = (0);
var inst_30994 = (0);
var state_31112__$1 = (function (){var statearr_31122 = state_31112;
(statearr_31122[(13)] = inst_30992);

(statearr_31122[(14)] = inst_30994);

(statearr_31122[(15)] = inst_31032);

(statearr_31122[(16)] = inst_30991);

(statearr_31122[(17)] = inst_30993);

return statearr_31122;
})();
var statearr_31123_32509 = state_31112__$1;
(statearr_31123_32509[(2)] = null);

(statearr_31123_32509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (39))){
var state_31112__$1 = state_31112;
var statearr_31127_32510 = state_31112__$1;
(statearr_31127_32510[(2)] = null);

(statearr_31127_32510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (4))){
var inst_30982 = (state_31112[(9)]);
var inst_30982__$1 = (state_31112[(2)]);
var inst_30983 = (inst_30982__$1 == null);
var state_31112__$1 = (function (){var statearr_31128 = state_31112;
(statearr_31128[(9)] = inst_30982__$1);

return statearr_31128;
})();
if(cljs.core.truth_(inst_30983)){
var statearr_31129_32511 = state_31112__$1;
(statearr_31129_32511[(1)] = (5));

} else {
var statearr_31130_32512 = state_31112__$1;
(statearr_31130_32512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (15))){
var inst_30992 = (state_31112[(13)]);
var inst_30994 = (state_31112[(14)]);
var inst_30991 = (state_31112[(16)]);
var inst_30993 = (state_31112[(17)]);
var inst_31009 = (state_31112[(2)]);
var inst_31010 = (inst_30994 + (1));
var tmp31124 = inst_30992;
var tmp31125 = inst_30991;
var tmp31126 = inst_30993;
var inst_30991__$1 = tmp31125;
var inst_30992__$1 = tmp31124;
var inst_30993__$1 = tmp31126;
var inst_30994__$1 = inst_31010;
var state_31112__$1 = (function (){var statearr_31131 = state_31112;
(statearr_31131[(13)] = inst_30992__$1);

(statearr_31131[(14)] = inst_30994__$1);

(statearr_31131[(16)] = inst_30991__$1);

(statearr_31131[(17)] = inst_30993__$1);

(statearr_31131[(18)] = inst_31009);

return statearr_31131;
})();
var statearr_31132_32513 = state_31112__$1;
(statearr_31132_32513[(2)] = null);

(statearr_31132_32513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (21))){
var inst_31036 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31136_32514 = state_31112__$1;
(statearr_31136_32514[(2)] = inst_31036);

(statearr_31136_32514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (31))){
var inst_31062 = (state_31112[(10)]);
var inst_31066 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31062);
var state_31112__$1 = state_31112;
var statearr_31137_32515 = state_31112__$1;
(statearr_31137_32515[(2)] = inst_31066);

(statearr_31137_32515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (32))){
var inst_31056 = (state_31112[(19)]);
var inst_31057 = (state_31112[(11)]);
var inst_31055 = (state_31112[(12)]);
var inst_31054 = (state_31112[(20)]);
var inst_31068 = (state_31112[(2)]);
var inst_31069 = (inst_31057 + (1));
var tmp31133 = inst_31056;
var tmp31134 = inst_31055;
var tmp31135 = inst_31054;
var inst_31054__$1 = tmp31135;
var inst_31055__$1 = tmp31134;
var inst_31056__$1 = tmp31133;
var inst_31057__$1 = inst_31069;
var state_31112__$1 = (function (){var statearr_31138 = state_31112;
(statearr_31138[(21)] = inst_31068);

(statearr_31138[(19)] = inst_31056__$1);

(statearr_31138[(11)] = inst_31057__$1);

(statearr_31138[(12)] = inst_31055__$1);

(statearr_31138[(20)] = inst_31054__$1);

return statearr_31138;
})();
var statearr_31139_32516 = state_31112__$1;
(statearr_31139_32516[(2)] = null);

(statearr_31139_32516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (40))){
var inst_31081 = (state_31112[(22)]);
var inst_31085 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31081);
var state_31112__$1 = state_31112;
var statearr_31140_32517 = state_31112__$1;
(statearr_31140_32517[(2)] = inst_31085);

(statearr_31140_32517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (33))){
var inst_31072 = (state_31112[(23)]);
var inst_31074 = cljs.core.chunked_seq_QMARK_(inst_31072);
var state_31112__$1 = state_31112;
if(inst_31074){
var statearr_31141_32518 = state_31112__$1;
(statearr_31141_32518[(1)] = (36));

} else {
var statearr_31142_32519 = state_31112__$1;
(statearr_31142_32519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (13))){
var inst_31003 = (state_31112[(24)]);
var inst_31006 = cljs.core.async.close_BANG_(inst_31003);
var state_31112__$1 = state_31112;
var statearr_31143_32520 = state_31112__$1;
(statearr_31143_32520[(2)] = inst_31006);

(statearr_31143_32520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (22))){
var inst_31026 = (state_31112[(8)]);
var inst_31029 = cljs.core.async.close_BANG_(inst_31026);
var state_31112__$1 = state_31112;
var statearr_31144_32521 = state_31112__$1;
(statearr_31144_32521[(2)] = inst_31029);

(statearr_31144_32521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (36))){
var inst_31072 = (state_31112[(23)]);
var inst_31076 = cljs.core.chunk_first(inst_31072);
var inst_31077 = cljs.core.chunk_rest(inst_31072);
var inst_31078 = cljs.core.count(inst_31076);
var inst_31054 = inst_31077;
var inst_31055 = inst_31076;
var inst_31056 = inst_31078;
var inst_31057 = (0);
var state_31112__$1 = (function (){var statearr_31145 = state_31112;
(statearr_31145[(19)] = inst_31056);

(statearr_31145[(11)] = inst_31057);

(statearr_31145[(12)] = inst_31055);

(statearr_31145[(20)] = inst_31054);

return statearr_31145;
})();
var statearr_31146_32522 = state_31112__$1;
(statearr_31146_32522[(2)] = null);

(statearr_31146_32522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (41))){
var inst_31072 = (state_31112[(23)]);
var inst_31087 = (state_31112[(2)]);
var inst_31088 = cljs.core.next(inst_31072);
var inst_31054 = inst_31088;
var inst_31055 = null;
var inst_31056 = (0);
var inst_31057 = (0);
var state_31112__$1 = (function (){var statearr_31147 = state_31112;
(statearr_31147[(25)] = inst_31087);

(statearr_31147[(19)] = inst_31056);

(statearr_31147[(11)] = inst_31057);

(statearr_31147[(12)] = inst_31055);

(statearr_31147[(20)] = inst_31054);

return statearr_31147;
})();
var statearr_31148_32523 = state_31112__$1;
(statearr_31148_32523[(2)] = null);

(statearr_31148_32523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (43))){
var state_31112__$1 = state_31112;
var statearr_31149_32524 = state_31112__$1;
(statearr_31149_32524[(2)] = null);

(statearr_31149_32524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (29))){
var inst_31096 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31150_32525 = state_31112__$1;
(statearr_31150_32525[(2)] = inst_31096);

(statearr_31150_32525[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (44))){
var inst_31105 = (state_31112[(2)]);
var state_31112__$1 = (function (){var statearr_31151 = state_31112;
(statearr_31151[(26)] = inst_31105);

return statearr_31151;
})();
var statearr_31152_32526 = state_31112__$1;
(statearr_31152_32526[(2)] = null);

(statearr_31152_32526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (6))){
var inst_31046 = (state_31112[(27)]);
var inst_31045 = cljs.core.deref(cs);
var inst_31046__$1 = cljs.core.keys(inst_31045);
var inst_31047 = cljs.core.count(inst_31046__$1);
var inst_31048 = cljs.core.reset_BANG_(dctr,inst_31047);
var inst_31053 = cljs.core.seq(inst_31046__$1);
var inst_31054 = inst_31053;
var inst_31055 = null;
var inst_31056 = (0);
var inst_31057 = (0);
var state_31112__$1 = (function (){var statearr_31153 = state_31112;
(statearr_31153[(27)] = inst_31046__$1);

(statearr_31153[(28)] = inst_31048);

(statearr_31153[(19)] = inst_31056);

(statearr_31153[(11)] = inst_31057);

(statearr_31153[(12)] = inst_31055);

(statearr_31153[(20)] = inst_31054);

return statearr_31153;
})();
var statearr_31154_32527 = state_31112__$1;
(statearr_31154_32527[(2)] = null);

(statearr_31154_32527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (28))){
var inst_31072 = (state_31112[(23)]);
var inst_31054 = (state_31112[(20)]);
var inst_31072__$1 = cljs.core.seq(inst_31054);
var state_31112__$1 = (function (){var statearr_31155 = state_31112;
(statearr_31155[(23)] = inst_31072__$1);

return statearr_31155;
})();
if(inst_31072__$1){
var statearr_31156_32528 = state_31112__$1;
(statearr_31156_32528[(1)] = (33));

} else {
var statearr_31157_32529 = state_31112__$1;
(statearr_31157_32529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (25))){
var inst_31056 = (state_31112[(19)]);
var inst_31057 = (state_31112[(11)]);
var inst_31059 = (inst_31057 < inst_31056);
var inst_31060 = inst_31059;
var state_31112__$1 = state_31112;
if(cljs.core.truth_(inst_31060)){
var statearr_31158_32530 = state_31112__$1;
(statearr_31158_32530[(1)] = (27));

} else {
var statearr_31159_32531 = state_31112__$1;
(statearr_31159_32531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (34))){
var state_31112__$1 = state_31112;
var statearr_31160_32532 = state_31112__$1;
(statearr_31160_32532[(2)] = null);

(statearr_31160_32532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (17))){
var state_31112__$1 = state_31112;
var statearr_31161_32533 = state_31112__$1;
(statearr_31161_32533[(2)] = null);

(statearr_31161_32533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (3))){
var inst_31110 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31112__$1,inst_31110);
} else {
if((state_val_31113 === (12))){
var inst_31041 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31162_32587 = state_31112__$1;
(statearr_31162_32587[(2)] = inst_31041);

(statearr_31162_32587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (2))){
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31112__$1,(4),ch);
} else {
if((state_val_31113 === (23))){
var state_31112__$1 = state_31112;
var statearr_31163_32588 = state_31112__$1;
(statearr_31163_32588[(2)] = null);

(statearr_31163_32588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (35))){
var inst_31094 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31164_32589 = state_31112__$1;
(statearr_31164_32589[(2)] = inst_31094);

(statearr_31164_32589[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (19))){
var inst_31013 = (state_31112[(7)]);
var inst_31017 = cljs.core.chunk_first(inst_31013);
var inst_31018 = cljs.core.chunk_rest(inst_31013);
var inst_31019 = cljs.core.count(inst_31017);
var inst_30991 = inst_31018;
var inst_30992 = inst_31017;
var inst_30993 = inst_31019;
var inst_30994 = (0);
var state_31112__$1 = (function (){var statearr_31165 = state_31112;
(statearr_31165[(13)] = inst_30992);

(statearr_31165[(14)] = inst_30994);

(statearr_31165[(16)] = inst_30991);

(statearr_31165[(17)] = inst_30993);

return statearr_31165;
})();
var statearr_31166_32591 = state_31112__$1;
(statearr_31166_32591[(2)] = null);

(statearr_31166_32591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (11))){
var inst_31013 = (state_31112[(7)]);
var inst_30991 = (state_31112[(16)]);
var inst_31013__$1 = cljs.core.seq(inst_30991);
var state_31112__$1 = (function (){var statearr_31167 = state_31112;
(statearr_31167[(7)] = inst_31013__$1);

return statearr_31167;
})();
if(inst_31013__$1){
var statearr_31168_32592 = state_31112__$1;
(statearr_31168_32592[(1)] = (16));

} else {
var statearr_31169_32593 = state_31112__$1;
(statearr_31169_32593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (9))){
var inst_31043 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31170_32594 = state_31112__$1;
(statearr_31170_32594[(2)] = inst_31043);

(statearr_31170_32594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (5))){
var inst_30989 = cljs.core.deref(cs);
var inst_30990 = cljs.core.seq(inst_30989);
var inst_30991 = inst_30990;
var inst_30992 = null;
var inst_30993 = (0);
var inst_30994 = (0);
var state_31112__$1 = (function (){var statearr_31171 = state_31112;
(statearr_31171[(13)] = inst_30992);

(statearr_31171[(14)] = inst_30994);

(statearr_31171[(16)] = inst_30991);

(statearr_31171[(17)] = inst_30993);

return statearr_31171;
})();
var statearr_31172_32595 = state_31112__$1;
(statearr_31172_32595[(2)] = null);

(statearr_31172_32595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (14))){
var state_31112__$1 = state_31112;
var statearr_31173_32604 = state_31112__$1;
(statearr_31173_32604[(2)] = null);

(statearr_31173_32604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (45))){
var inst_31102 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31174_32606 = state_31112__$1;
(statearr_31174_32606[(2)] = inst_31102);

(statearr_31174_32606[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (26))){
var inst_31046 = (state_31112[(27)]);
var inst_31098 = (state_31112[(2)]);
var inst_31099 = cljs.core.seq(inst_31046);
var state_31112__$1 = (function (){var statearr_31175 = state_31112;
(statearr_31175[(29)] = inst_31098);

return statearr_31175;
})();
if(inst_31099){
var statearr_31176_32608 = state_31112__$1;
(statearr_31176_32608[(1)] = (42));

} else {
var statearr_31177_32609 = state_31112__$1;
(statearr_31177_32609[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (16))){
var inst_31013 = (state_31112[(7)]);
var inst_31015 = cljs.core.chunked_seq_QMARK_(inst_31013);
var state_31112__$1 = state_31112;
if(inst_31015){
var statearr_31178_32614 = state_31112__$1;
(statearr_31178_32614[(1)] = (19));

} else {
var statearr_31179_32615 = state_31112__$1;
(statearr_31179_32615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (38))){
var inst_31091 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31180_32616 = state_31112__$1;
(statearr_31180_32616[(2)] = inst_31091);

(statearr_31180_32616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (30))){
var state_31112__$1 = state_31112;
var statearr_31181_32617 = state_31112__$1;
(statearr_31181_32617[(2)] = null);

(statearr_31181_32617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (10))){
var inst_30992 = (state_31112[(13)]);
var inst_30994 = (state_31112[(14)]);
var inst_31002 = cljs.core._nth(inst_30992,inst_30994);
var inst_31003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31002,(0),null);
var inst_31004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31002,(1),null);
var state_31112__$1 = (function (){var statearr_31182 = state_31112;
(statearr_31182[(24)] = inst_31003);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31004)){
var statearr_31183_32631 = state_31112__$1;
(statearr_31183_32631[(1)] = (13));

} else {
var statearr_31184_32632 = state_31112__$1;
(statearr_31184_32632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (18))){
var inst_31039 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31185_32633 = state_31112__$1;
(statearr_31185_32633[(2)] = inst_31039);

(statearr_31185_32633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (42))){
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31112__$1,(45),dchan);
} else {
if((state_val_31113 === (37))){
var inst_31081 = (state_31112[(22)]);
var inst_31072 = (state_31112[(23)]);
var inst_30982 = (state_31112[(9)]);
var inst_31081__$1 = cljs.core.first(inst_31072);
var inst_31082 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31081__$1,inst_30982,done);
var state_31112__$1 = (function (){var statearr_31186 = state_31112;
(statearr_31186[(22)] = inst_31081__$1);

return statearr_31186;
})();
if(cljs.core.truth_(inst_31082)){
var statearr_31187_32634 = state_31112__$1;
(statearr_31187_32634[(1)] = (39));

} else {
var statearr_31188_32635 = state_31112__$1;
(statearr_31188_32635[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (8))){
var inst_30994 = (state_31112[(14)]);
var inst_30993 = (state_31112[(17)]);
var inst_30996 = (inst_30994 < inst_30993);
var inst_30997 = inst_30996;
var state_31112__$1 = state_31112;
if(cljs.core.truth_(inst_30997)){
var statearr_31189_32636 = state_31112__$1;
(statearr_31189_32636[(1)] = (10));

} else {
var statearr_31190_32637 = state_31112__$1;
(statearr_31190_32637[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29923__auto__ = null;
var cljs$core$async$mult_$_state_machine__29923__auto____0 = (function (){
var statearr_31191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31191[(0)] = cljs$core$async$mult_$_state_machine__29923__auto__);

(statearr_31191[(1)] = (1));

return statearr_31191;
});
var cljs$core$async$mult_$_state_machine__29923__auto____1 = (function (state_31112){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31112);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31192){var ex__29926__auto__ = e31192;
var statearr_31193_32638 = state_31112;
(statearr_31193_32638[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31112[(4)]))){
var statearr_31194_32639 = state_31112;
(statearr_31194_32639[(1)] = cljs.core.first((state_31112[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32644 = state_31112;
state_31112 = G__32644;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29923__auto__ = function(state_31112){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29923__auto____1.call(this,state_31112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29923__auto____0;
cljs$core$async$mult_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29923__auto____1;
return cljs$core$async$mult_$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31195 = f__30275__auto__();
(statearr_31195[(6)] = c__30274__auto___32497);

return statearr_31195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31197 = arguments.length;
switch (G__31197) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32647 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32647(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32657 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32657(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32658 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32658(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32660 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32660(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32662 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32662(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32663 = arguments.length;
var i__4737__auto___32664 = (0);
while(true){
if((i__4737__auto___32664 < len__4736__auto___32663)){
args__4742__auto__.push((arguments[i__4737__auto___32664]));

var G__32665 = (i__4737__auto___32664 + (1));
i__4737__auto___32664 = G__32665;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31202){
var map__31203 = p__31202;
var map__31203__$1 = (((((!((map__31203 == null))))?(((((map__31203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31203):map__31203);
var opts = map__31203__$1;
var statearr_31205_32667 = state;
(statearr_31205_32667[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31206_32668 = state;
(statearr_31206_32668[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31207_32671 = state;
(statearr_31207_32671[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31198){
var G__31199 = cljs.core.first(seq31198);
var seq31198__$1 = cljs.core.next(seq31198);
var G__31200 = cljs.core.first(seq31198__$1);
var seq31198__$2 = cljs.core.next(seq31198__$1);
var G__31201 = cljs.core.first(seq31198__$2);
var seq31198__$3 = cljs.core.next(seq31198__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31199,G__31200,G__31201,seq31198__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31208 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31209){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31209 = meta31209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31210,meta31209__$1){
var self__ = this;
var _31210__$1 = this;
return (new cljs.core.async.t_cljs$core$async31208(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31209__$1));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31210){
var self__ = this;
var _31210__$1 = this;
return self__.meta31209;
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31209","meta31209",577914476,null)], null);
}));

(cljs.core.async.t_cljs$core$async31208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31208");

(cljs.core.async.t_cljs$core$async31208.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31208.
 */
cljs.core.async.__GT_t_cljs$core$async31208 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31208(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31209){
return (new cljs.core.async.t_cljs$core$async31208(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31209));
});

}

return (new cljs.core.async.t_cljs$core$async31208(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30274__auto___32682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31312){
var state_val_31313 = (state_31312[(1)]);
if((state_val_31313 === (7))){
var inst_31227 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
var statearr_31314_32683 = state_31312__$1;
(statearr_31314_32683[(2)] = inst_31227);

(statearr_31314_32683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (20))){
var inst_31239 = (state_31312[(7)]);
var state_31312__$1 = state_31312;
var statearr_31315_32684 = state_31312__$1;
(statearr_31315_32684[(2)] = inst_31239);

(statearr_31315_32684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (27))){
var state_31312__$1 = state_31312;
var statearr_31316_32685 = state_31312__$1;
(statearr_31316_32685[(2)] = null);

(statearr_31316_32685[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (1))){
var inst_31214 = (state_31312[(8)]);
var inst_31214__$1 = calc_state();
var inst_31216 = (inst_31214__$1 == null);
var inst_31217 = cljs.core.not(inst_31216);
var state_31312__$1 = (function (){var statearr_31317 = state_31312;
(statearr_31317[(8)] = inst_31214__$1);

return statearr_31317;
})();
if(inst_31217){
var statearr_31318_32686 = state_31312__$1;
(statearr_31318_32686[(1)] = (2));

} else {
var statearr_31319_32687 = state_31312__$1;
(statearr_31319_32687[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (24))){
var inst_31263 = (state_31312[(9)]);
var inst_31286 = (state_31312[(10)]);
var inst_31272 = (state_31312[(11)]);
var inst_31286__$1 = (inst_31263.cljs$core$IFn$_invoke$arity$1 ? inst_31263.cljs$core$IFn$_invoke$arity$1(inst_31272) : inst_31263.call(null,inst_31272));
var state_31312__$1 = (function (){var statearr_31320 = state_31312;
(statearr_31320[(10)] = inst_31286__$1);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31286__$1)){
var statearr_31321_32693 = state_31312__$1;
(statearr_31321_32693[(1)] = (29));

} else {
var statearr_31322_32694 = state_31312__$1;
(statearr_31322_32694[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (4))){
var inst_31230 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31230)){
var statearr_31323_32695 = state_31312__$1;
(statearr_31323_32695[(1)] = (8));

} else {
var statearr_31324_32699 = state_31312__$1;
(statearr_31324_32699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (15))){
var inst_31257 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31257)){
var statearr_31325_32700 = state_31312__$1;
(statearr_31325_32700[(1)] = (19));

} else {
var statearr_31326_32701 = state_31312__$1;
(statearr_31326_32701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (21))){
var inst_31262 = (state_31312[(12)]);
var inst_31262__$1 = (state_31312[(2)]);
var inst_31263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31262__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31262__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31262__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31312__$1 = (function (){var statearr_31327 = state_31312;
(statearr_31327[(9)] = inst_31263);

(statearr_31327[(13)] = inst_31264);

(statearr_31327[(12)] = inst_31262__$1);

return statearr_31327;
})();
return cljs.core.async.ioc_alts_BANG_(state_31312__$1,(22),inst_31265);
} else {
if((state_val_31313 === (31))){
var inst_31294 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31294)){
var statearr_31328_32702 = state_31312__$1;
(statearr_31328_32702[(1)] = (32));

} else {
var statearr_31329_32703 = state_31312__$1;
(statearr_31329_32703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (32))){
var inst_31271 = (state_31312[(14)]);
var state_31312__$1 = state_31312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31312__$1,(35),out,inst_31271);
} else {
if((state_val_31313 === (33))){
var inst_31262 = (state_31312[(12)]);
var inst_31239 = inst_31262;
var state_31312__$1 = (function (){var statearr_31330 = state_31312;
(statearr_31330[(7)] = inst_31239);

return statearr_31330;
})();
var statearr_31331_32704 = state_31312__$1;
(statearr_31331_32704[(2)] = null);

(statearr_31331_32704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (13))){
var inst_31239 = (state_31312[(7)]);
var inst_31246 = inst_31239.cljs$lang$protocol_mask$partition0$;
var inst_31247 = (inst_31246 & (64));
var inst_31248 = inst_31239.cljs$core$ISeq$;
var inst_31249 = (cljs.core.PROTOCOL_SENTINEL === inst_31248);
var inst_31250 = ((inst_31247) || (inst_31249));
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31250)){
var statearr_31332_32705 = state_31312__$1;
(statearr_31332_32705[(1)] = (16));

} else {
var statearr_31333_32706 = state_31312__$1;
(statearr_31333_32706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (22))){
var inst_31271 = (state_31312[(14)]);
var inst_31272 = (state_31312[(11)]);
var inst_31270 = (state_31312[(2)]);
var inst_31271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31270,(0),null);
var inst_31272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31270,(1),null);
var inst_31273 = (inst_31271__$1 == null);
var inst_31274 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31272__$1,change);
var inst_31275 = ((inst_31273) || (inst_31274));
var state_31312__$1 = (function (){var statearr_31336 = state_31312;
(statearr_31336[(14)] = inst_31271__$1);

(statearr_31336[(11)] = inst_31272__$1);

return statearr_31336;
})();
if(cljs.core.truth_(inst_31275)){
var statearr_31337_32708 = state_31312__$1;
(statearr_31337_32708[(1)] = (23));

} else {
var statearr_31338_32709 = state_31312__$1;
(statearr_31338_32709[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (36))){
var inst_31262 = (state_31312[(12)]);
var inst_31239 = inst_31262;
var state_31312__$1 = (function (){var statearr_31339 = state_31312;
(statearr_31339[(7)] = inst_31239);

return statearr_31339;
})();
var statearr_31340_32710 = state_31312__$1;
(statearr_31340_32710[(2)] = null);

(statearr_31340_32710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (29))){
var inst_31286 = (state_31312[(10)]);
var state_31312__$1 = state_31312;
var statearr_31341_32711 = state_31312__$1;
(statearr_31341_32711[(2)] = inst_31286);

(statearr_31341_32711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (6))){
var state_31312__$1 = state_31312;
var statearr_31342_32712 = state_31312__$1;
(statearr_31342_32712[(2)] = false);

(statearr_31342_32712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (28))){
var inst_31282 = (state_31312[(2)]);
var inst_31283 = calc_state();
var inst_31239 = inst_31283;
var state_31312__$1 = (function (){var statearr_31343 = state_31312;
(statearr_31343[(15)] = inst_31282);

(statearr_31343[(7)] = inst_31239);

return statearr_31343;
})();
var statearr_31344_32713 = state_31312__$1;
(statearr_31344_32713[(2)] = null);

(statearr_31344_32713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (25))){
var inst_31308 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
var statearr_31345_32714 = state_31312__$1;
(statearr_31345_32714[(2)] = inst_31308);

(statearr_31345_32714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (34))){
var inst_31306 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
var statearr_31346_32715 = state_31312__$1;
(statearr_31346_32715[(2)] = inst_31306);

(statearr_31346_32715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (17))){
var state_31312__$1 = state_31312;
var statearr_31347_32716 = state_31312__$1;
(statearr_31347_32716[(2)] = false);

(statearr_31347_32716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (3))){
var state_31312__$1 = state_31312;
var statearr_31348_32717 = state_31312__$1;
(statearr_31348_32717[(2)] = false);

(statearr_31348_32717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (12))){
var inst_31310 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31312__$1,inst_31310);
} else {
if((state_val_31313 === (2))){
var inst_31214 = (state_31312[(8)]);
var inst_31219 = inst_31214.cljs$lang$protocol_mask$partition0$;
var inst_31220 = (inst_31219 & (64));
var inst_31221 = inst_31214.cljs$core$ISeq$;
var inst_31222 = (cljs.core.PROTOCOL_SENTINEL === inst_31221);
var inst_31223 = ((inst_31220) || (inst_31222));
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31223)){
var statearr_31349_32718 = state_31312__$1;
(statearr_31349_32718[(1)] = (5));

} else {
var statearr_31350_32719 = state_31312__$1;
(statearr_31350_32719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (23))){
var inst_31271 = (state_31312[(14)]);
var inst_31277 = (inst_31271 == null);
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31277)){
var statearr_31351_32720 = state_31312__$1;
(statearr_31351_32720[(1)] = (26));

} else {
var statearr_31352_32721 = state_31312__$1;
(statearr_31352_32721[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (35))){
var inst_31297 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
if(cljs.core.truth_(inst_31297)){
var statearr_31353_32722 = state_31312__$1;
(statearr_31353_32722[(1)] = (36));

} else {
var statearr_31354_32723 = state_31312__$1;
(statearr_31354_32723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (19))){
var inst_31239 = (state_31312[(7)]);
var inst_31259 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31239);
var state_31312__$1 = state_31312;
var statearr_31355_32724 = state_31312__$1;
(statearr_31355_32724[(2)] = inst_31259);

(statearr_31355_32724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (11))){
var inst_31239 = (state_31312[(7)]);
var inst_31243 = (inst_31239 == null);
var inst_31244 = cljs.core.not(inst_31243);
var state_31312__$1 = state_31312;
if(inst_31244){
var statearr_31356_32725 = state_31312__$1;
(statearr_31356_32725[(1)] = (13));

} else {
var statearr_31357_32726 = state_31312__$1;
(statearr_31357_32726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (9))){
var inst_31214 = (state_31312[(8)]);
var state_31312__$1 = state_31312;
var statearr_31358_32727 = state_31312__$1;
(statearr_31358_32727[(2)] = inst_31214);

(statearr_31358_32727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (5))){
var state_31312__$1 = state_31312;
var statearr_31359_32728 = state_31312__$1;
(statearr_31359_32728[(2)] = true);

(statearr_31359_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (14))){
var state_31312__$1 = state_31312;
var statearr_31360_32729 = state_31312__$1;
(statearr_31360_32729[(2)] = false);

(statearr_31360_32729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (26))){
var inst_31272 = (state_31312[(11)]);
var inst_31279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31272);
var state_31312__$1 = state_31312;
var statearr_31361_32730 = state_31312__$1;
(statearr_31361_32730[(2)] = inst_31279);

(statearr_31361_32730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (16))){
var state_31312__$1 = state_31312;
var statearr_31362_32731 = state_31312__$1;
(statearr_31362_32731[(2)] = true);

(statearr_31362_32731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (38))){
var inst_31302 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
var statearr_31363_32732 = state_31312__$1;
(statearr_31363_32732[(2)] = inst_31302);

(statearr_31363_32732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (30))){
var inst_31263 = (state_31312[(9)]);
var inst_31264 = (state_31312[(13)]);
var inst_31272 = (state_31312[(11)]);
var inst_31289 = cljs.core.empty_QMARK_(inst_31263);
var inst_31290 = (inst_31264.cljs$core$IFn$_invoke$arity$1 ? inst_31264.cljs$core$IFn$_invoke$arity$1(inst_31272) : inst_31264.call(null,inst_31272));
var inst_31291 = cljs.core.not(inst_31290);
var inst_31292 = ((inst_31289) && (inst_31291));
var state_31312__$1 = state_31312;
var statearr_31364_32733 = state_31312__$1;
(statearr_31364_32733[(2)] = inst_31292);

(statearr_31364_32733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (10))){
var inst_31214 = (state_31312[(8)]);
var inst_31235 = (state_31312[(2)]);
var inst_31236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31235,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31235,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31235,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31239 = inst_31214;
var state_31312__$1 = (function (){var statearr_31365 = state_31312;
(statearr_31365[(16)] = inst_31236);

(statearr_31365[(17)] = inst_31238);

(statearr_31365[(18)] = inst_31237);

(statearr_31365[(7)] = inst_31239);

return statearr_31365;
})();
var statearr_31366_32734 = state_31312__$1;
(statearr_31366_32734[(2)] = null);

(statearr_31366_32734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (18))){
var inst_31254 = (state_31312[(2)]);
var state_31312__$1 = state_31312;
var statearr_31367_32735 = state_31312__$1;
(statearr_31367_32735[(2)] = inst_31254);

(statearr_31367_32735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (37))){
var state_31312__$1 = state_31312;
var statearr_31368_32736 = state_31312__$1;
(statearr_31368_32736[(2)] = null);

(statearr_31368_32736[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31313 === (8))){
var inst_31214 = (state_31312[(8)]);
var inst_31232 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31214);
var state_31312__$1 = state_31312;
var statearr_31369_32737 = state_31312__$1;
(statearr_31369_32737[(2)] = inst_31232);

(statearr_31369_32737[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29923__auto__ = null;
var cljs$core$async$mix_$_state_machine__29923__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = cljs$core$async$mix_$_state_machine__29923__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var cljs$core$async$mix_$_state_machine__29923__auto____1 = (function (state_31312){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31312);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31371){var ex__29926__auto__ = e31371;
var statearr_31372_32738 = state_31312;
(statearr_31372_32738[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31312[(4)]))){
var statearr_31373_32739 = state_31312;
(statearr_31373_32739[(1)] = cljs.core.first((state_31312[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32740 = state_31312;
state_31312 = G__32740;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29923__auto__ = function(state_31312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29923__auto____1.call(this,state_31312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29923__auto____0;
cljs$core$async$mix_$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29923__auto____1;
return cljs$core$async$mix_$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31374 = f__30275__auto__();
(statearr_31374[(6)] = c__30274__auto___32682);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32745 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32745(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32747 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32747(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32748 = (function() {
var G__32749 = null;
var G__32749__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32749__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32749 = function(p,v){
switch(arguments.length){
case 1:
return G__32749__1.call(this,p);
case 2:
return G__32749__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32749.cljs$core$IFn$_invoke$arity$1 = G__32749__1;
G__32749.cljs$core$IFn$_invoke$arity$2 = G__32749__2;
return G__32749;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31383 = arguments.length;
switch (G__31383) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32748(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32748(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31386 = arguments.length;
switch (G__31386) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31384_SHARP_){
if(cljs.core.truth_((p1__31384_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31384_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31384_SHARP_.call(null,topic)))){
return p1__31384_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31384_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31387 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31388){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31388 = meta31388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31389,meta31388__$1){
var self__ = this;
var _31389__$1 = this;
return (new cljs.core.async.t_cljs$core$async31387(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31388__$1));
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31389){
var self__ = this;
var _31389__$1 = this;
return self__.meta31388;
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31388","meta31388",-1769290576,null)], null);
}));

(cljs.core.async.t_cljs$core$async31387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31387");

(cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31387.
 */
cljs.core.async.__GT_t_cljs$core$async31387 = (function cljs$core$async$__GT_t_cljs$core$async31387(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31388){
return (new cljs.core.async.t_cljs$core$async31387(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31388));
});

}

return (new cljs.core.async.t_cljs$core$async31387(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30274__auto___32757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31472){
var state_val_31473 = (state_31472[(1)]);
if((state_val_31473 === (7))){
var inst_31465 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31474_32758 = state_31472__$1;
(statearr_31474_32758[(2)] = inst_31465);

(statearr_31474_32758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (20))){
var state_31472__$1 = state_31472;
var statearr_31475_32759 = state_31472__$1;
(statearr_31475_32759[(2)] = null);

(statearr_31475_32759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (1))){
var state_31472__$1 = state_31472;
var statearr_31477_32760 = state_31472__$1;
(statearr_31477_32760[(2)] = null);

(statearr_31477_32760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (24))){
var inst_31448 = (state_31472[(7)]);
var inst_31457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31448);
var state_31472__$1 = state_31472;
var statearr_31478_32761 = state_31472__$1;
(statearr_31478_32761[(2)] = inst_31457);

(statearr_31478_32761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (4))){
var inst_31400 = (state_31472[(8)]);
var inst_31400__$1 = (state_31472[(2)]);
var inst_31401 = (inst_31400__$1 == null);
var state_31472__$1 = (function (){var statearr_31479 = state_31472;
(statearr_31479[(8)] = inst_31400__$1);

return statearr_31479;
})();
if(cljs.core.truth_(inst_31401)){
var statearr_31480_32762 = state_31472__$1;
(statearr_31480_32762[(1)] = (5));

} else {
var statearr_31481_32763 = state_31472__$1;
(statearr_31481_32763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (15))){
var inst_31442 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31482_32764 = state_31472__$1;
(statearr_31482_32764[(2)] = inst_31442);

(statearr_31482_32764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (21))){
var inst_31462 = (state_31472[(2)]);
var state_31472__$1 = (function (){var statearr_31483 = state_31472;
(statearr_31483[(9)] = inst_31462);

return statearr_31483;
})();
var statearr_31484_32768 = state_31472__$1;
(statearr_31484_32768[(2)] = null);

(statearr_31484_32768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (13))){
var inst_31424 = (state_31472[(10)]);
var inst_31426 = cljs.core.chunked_seq_QMARK_(inst_31424);
var state_31472__$1 = state_31472;
if(inst_31426){
var statearr_31486_32769 = state_31472__$1;
(statearr_31486_32769[(1)] = (16));

} else {
var statearr_31487_32770 = state_31472__$1;
(statearr_31487_32770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (22))){
var inst_31454 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
if(cljs.core.truth_(inst_31454)){
var statearr_31488_32771 = state_31472__$1;
(statearr_31488_32771[(1)] = (23));

} else {
var statearr_31489_32772 = state_31472__$1;
(statearr_31489_32772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (6))){
var inst_31450 = (state_31472[(11)]);
var inst_31448 = (state_31472[(7)]);
var inst_31400 = (state_31472[(8)]);
var inst_31448__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31400) : topic_fn.call(null,inst_31400));
var inst_31449 = cljs.core.deref(mults);
var inst_31450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31449,inst_31448__$1);
var state_31472__$1 = (function (){var statearr_31490 = state_31472;
(statearr_31490[(11)] = inst_31450__$1);

(statearr_31490[(7)] = inst_31448__$1);

return statearr_31490;
})();
if(cljs.core.truth_(inst_31450__$1)){
var statearr_31491_32773 = state_31472__$1;
(statearr_31491_32773[(1)] = (19));

} else {
var statearr_31492_32774 = state_31472__$1;
(statearr_31492_32774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (25))){
var inst_31459 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31493_32775 = state_31472__$1;
(statearr_31493_32775[(2)] = inst_31459);

(statearr_31493_32775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (17))){
var inst_31424 = (state_31472[(10)]);
var inst_31433 = cljs.core.first(inst_31424);
var inst_31434 = cljs.core.async.muxch_STAR_(inst_31433);
var inst_31435 = cljs.core.async.close_BANG_(inst_31434);
var inst_31436 = cljs.core.next(inst_31424);
var inst_31410 = inst_31436;
var inst_31411 = null;
var inst_31412 = (0);
var inst_31413 = (0);
var state_31472__$1 = (function (){var statearr_31494 = state_31472;
(statearr_31494[(12)] = inst_31435);

(statearr_31494[(13)] = inst_31410);

(statearr_31494[(14)] = inst_31413);

(statearr_31494[(15)] = inst_31412);

(statearr_31494[(16)] = inst_31411);

return statearr_31494;
})();
var statearr_31495_32776 = state_31472__$1;
(statearr_31495_32776[(2)] = null);

(statearr_31495_32776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (3))){
var inst_31467 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31472__$1,inst_31467);
} else {
if((state_val_31473 === (12))){
var inst_31444 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31496_32777 = state_31472__$1;
(statearr_31496_32777[(2)] = inst_31444);

(statearr_31496_32777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (2))){
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31472__$1,(4),ch);
} else {
if((state_val_31473 === (23))){
var state_31472__$1 = state_31472;
var statearr_31497_32778 = state_31472__$1;
(statearr_31497_32778[(2)] = null);

(statearr_31497_32778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (19))){
var inst_31450 = (state_31472[(11)]);
var inst_31400 = (state_31472[(8)]);
var inst_31452 = cljs.core.async.muxch_STAR_(inst_31450);
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31472__$1,(22),inst_31452,inst_31400);
} else {
if((state_val_31473 === (11))){
var inst_31424 = (state_31472[(10)]);
var inst_31410 = (state_31472[(13)]);
var inst_31424__$1 = cljs.core.seq(inst_31410);
var state_31472__$1 = (function (){var statearr_31498 = state_31472;
(statearr_31498[(10)] = inst_31424__$1);

return statearr_31498;
})();
if(inst_31424__$1){
var statearr_31499_32780 = state_31472__$1;
(statearr_31499_32780[(1)] = (13));

} else {
var statearr_31504_32781 = state_31472__$1;
(statearr_31504_32781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (9))){
var inst_31446 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31505_32782 = state_31472__$1;
(statearr_31505_32782[(2)] = inst_31446);

(statearr_31505_32782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (5))){
var inst_31407 = cljs.core.deref(mults);
var inst_31408 = cljs.core.vals(inst_31407);
var inst_31409 = cljs.core.seq(inst_31408);
var inst_31410 = inst_31409;
var inst_31411 = null;
var inst_31412 = (0);
var inst_31413 = (0);
var state_31472__$1 = (function (){var statearr_31506 = state_31472;
(statearr_31506[(13)] = inst_31410);

(statearr_31506[(14)] = inst_31413);

(statearr_31506[(15)] = inst_31412);

(statearr_31506[(16)] = inst_31411);

return statearr_31506;
})();
var statearr_31507_32783 = state_31472__$1;
(statearr_31507_32783[(2)] = null);

(statearr_31507_32783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (14))){
var state_31472__$1 = state_31472;
var statearr_31512_32784 = state_31472__$1;
(statearr_31512_32784[(2)] = null);

(statearr_31512_32784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (16))){
var inst_31424 = (state_31472[(10)]);
var inst_31428 = cljs.core.chunk_first(inst_31424);
var inst_31429 = cljs.core.chunk_rest(inst_31424);
var inst_31430 = cljs.core.count(inst_31428);
var inst_31410 = inst_31429;
var inst_31411 = inst_31428;
var inst_31412 = inst_31430;
var inst_31413 = (0);
var state_31472__$1 = (function (){var statearr_31513 = state_31472;
(statearr_31513[(13)] = inst_31410);

(statearr_31513[(14)] = inst_31413);

(statearr_31513[(15)] = inst_31412);

(statearr_31513[(16)] = inst_31411);

return statearr_31513;
})();
var statearr_31514_32785 = state_31472__$1;
(statearr_31514_32785[(2)] = null);

(statearr_31514_32785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (10))){
var inst_31410 = (state_31472[(13)]);
var inst_31413 = (state_31472[(14)]);
var inst_31412 = (state_31472[(15)]);
var inst_31411 = (state_31472[(16)]);
var inst_31418 = cljs.core._nth(inst_31411,inst_31413);
var inst_31419 = cljs.core.async.muxch_STAR_(inst_31418);
var inst_31420 = cljs.core.async.close_BANG_(inst_31419);
var inst_31421 = (inst_31413 + (1));
var tmp31509 = inst_31410;
var tmp31510 = inst_31412;
var tmp31511 = inst_31411;
var inst_31410__$1 = tmp31509;
var inst_31411__$1 = tmp31511;
var inst_31412__$1 = tmp31510;
var inst_31413__$1 = inst_31421;
var state_31472__$1 = (function (){var statearr_31515 = state_31472;
(statearr_31515[(13)] = inst_31410__$1);

(statearr_31515[(17)] = inst_31420);

(statearr_31515[(14)] = inst_31413__$1);

(statearr_31515[(15)] = inst_31412__$1);

(statearr_31515[(16)] = inst_31411__$1);

return statearr_31515;
})();
var statearr_31516_32786 = state_31472__$1;
(statearr_31516_32786[(2)] = null);

(statearr_31516_32786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (18))){
var inst_31439 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31517_32787 = state_31472__$1;
(statearr_31517_32787[(2)] = inst_31439);

(statearr_31517_32787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (8))){
var inst_31413 = (state_31472[(14)]);
var inst_31412 = (state_31472[(15)]);
var inst_31415 = (inst_31413 < inst_31412);
var inst_31416 = inst_31415;
var state_31472__$1 = state_31472;
if(cljs.core.truth_(inst_31416)){
var statearr_31518_32788 = state_31472__$1;
(statearr_31518_32788[(1)] = (10));

} else {
var statearr_31519_32789 = state_31472__$1;
(statearr_31519_32789[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_31520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31520[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_31520[(1)] = (1));

return statearr_31520;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_31472){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31472);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31521){var ex__29926__auto__ = e31521;
var statearr_31522_32790 = state_31472;
(statearr_31522_32790[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31472[(4)]))){
var statearr_31523_32791 = state_31472;
(statearr_31523_32791[(1)] = cljs.core.first((state_31472[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32792 = state_31472;
state_31472 = G__32792;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_31472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_31472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31525 = f__30275__auto__();
(statearr_31525[(6)] = c__30274__auto___32757);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31527 = arguments.length;
switch (G__31527) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31531 = arguments.length;
switch (G__31531) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31533 = arguments.length;
switch (G__31533) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30274__auto___32800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31579){
var state_val_31580 = (state_31579[(1)]);
if((state_val_31580 === (7))){
var state_31579__$1 = state_31579;
var statearr_31581_32801 = state_31579__$1;
(statearr_31581_32801[(2)] = null);

(statearr_31581_32801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (1))){
var state_31579__$1 = state_31579;
var statearr_31582_32803 = state_31579__$1;
(statearr_31582_32803[(2)] = null);

(statearr_31582_32803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (4))){
var inst_31540 = (state_31579[(7)]);
var inst_31539 = (state_31579[(8)]);
var inst_31542 = (inst_31540 < inst_31539);
var state_31579__$1 = state_31579;
if(cljs.core.truth_(inst_31542)){
var statearr_31583_32809 = state_31579__$1;
(statearr_31583_32809[(1)] = (6));

} else {
var statearr_31584_32810 = state_31579__$1;
(statearr_31584_32810[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (15))){
var inst_31565 = (state_31579[(9)]);
var inst_31570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31565);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31579__$1,(17),out,inst_31570);
} else {
if((state_val_31580 === (13))){
var inst_31565 = (state_31579[(9)]);
var inst_31565__$1 = (state_31579[(2)]);
var inst_31566 = cljs.core.some(cljs.core.nil_QMARK_,inst_31565__$1);
var state_31579__$1 = (function (){var statearr_31585 = state_31579;
(statearr_31585[(9)] = inst_31565__$1);

return statearr_31585;
})();
if(cljs.core.truth_(inst_31566)){
var statearr_31586_32811 = state_31579__$1;
(statearr_31586_32811[(1)] = (14));

} else {
var statearr_31588_32812 = state_31579__$1;
(statearr_31588_32812[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (6))){
var state_31579__$1 = state_31579;
var statearr_31589_32813 = state_31579__$1;
(statearr_31589_32813[(2)] = null);

(statearr_31589_32813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (17))){
var inst_31572 = (state_31579[(2)]);
var state_31579__$1 = (function (){var statearr_31592 = state_31579;
(statearr_31592[(10)] = inst_31572);

return statearr_31592;
})();
var statearr_31593_32814 = state_31579__$1;
(statearr_31593_32814[(2)] = null);

(statearr_31593_32814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (3))){
var inst_31577 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31579__$1,inst_31577);
} else {
if((state_val_31580 === (12))){
var _ = (function (){var statearr_31594 = state_31579;
(statearr_31594[(4)] = cljs.core.rest((state_31579[(4)])));

return statearr_31594;
})();
var state_31579__$1 = state_31579;
var ex31591 = (state_31579__$1[(2)]);
var statearr_31595_32815 = state_31579__$1;
(statearr_31595_32815[(5)] = ex31591);


if((ex31591 instanceof Object)){
var statearr_31597_32816 = state_31579__$1;
(statearr_31597_32816[(1)] = (11));

(statearr_31597_32816[(5)] = null);

} else {
throw ex31591;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (2))){
var inst_31538 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31539 = cnt;
var inst_31540 = (0);
var state_31579__$1 = (function (){var statearr_31600 = state_31579;
(statearr_31600[(7)] = inst_31540);

(statearr_31600[(8)] = inst_31539);

(statearr_31600[(11)] = inst_31538);

return statearr_31600;
})();
var statearr_31601_32817 = state_31579__$1;
(statearr_31601_32817[(2)] = null);

(statearr_31601_32817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (11))){
var inst_31544 = (state_31579[(2)]);
var inst_31545 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31579__$1 = (function (){var statearr_31602 = state_31579;
(statearr_31602[(12)] = inst_31544);

return statearr_31602;
})();
var statearr_31603_32818 = state_31579__$1;
(statearr_31603_32818[(2)] = inst_31545);

(statearr_31603_32818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (9))){
var inst_31540 = (state_31579[(7)]);
var _ = (function (){var statearr_31604 = state_31579;
(statearr_31604[(4)] = cljs.core.cons((12),(state_31579[(4)])));

return statearr_31604;
})();
var inst_31551 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31540) : chs__$1.call(null,inst_31540));
var inst_31552 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31540) : done.call(null,inst_31540));
var inst_31553 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31551,inst_31552);
var ___$1 = (function (){var statearr_31605 = state_31579;
(statearr_31605[(4)] = cljs.core.rest((state_31579[(4)])));

return statearr_31605;
})();
var state_31579__$1 = state_31579;
var statearr_31606_32819 = state_31579__$1;
(statearr_31606_32819[(2)] = inst_31553);

(statearr_31606_32819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (5))){
var inst_31563 = (state_31579[(2)]);
var state_31579__$1 = (function (){var statearr_31607 = state_31579;
(statearr_31607[(13)] = inst_31563);

return statearr_31607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31579__$1,(13),dchan);
} else {
if((state_val_31580 === (14))){
var inst_31568 = cljs.core.async.close_BANG_(out);
var state_31579__$1 = state_31579;
var statearr_31609_32820 = state_31579__$1;
(statearr_31609_32820[(2)] = inst_31568);

(statearr_31609_32820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (16))){
var inst_31575 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31610_32821 = state_31579__$1;
(statearr_31610_32821[(2)] = inst_31575);

(statearr_31610_32821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (10))){
var inst_31540 = (state_31579[(7)]);
var inst_31556 = (state_31579[(2)]);
var inst_31557 = (inst_31540 + (1));
var inst_31540__$1 = inst_31557;
var state_31579__$1 = (function (){var statearr_31611 = state_31579;
(statearr_31611[(7)] = inst_31540__$1);

(statearr_31611[(14)] = inst_31556);

return statearr_31611;
})();
var statearr_31612_32822 = state_31579__$1;
(statearr_31612_32822[(2)] = null);

(statearr_31612_32822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (8))){
var inst_31561 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31613_32823 = state_31579__$1;
(statearr_31613_32823[(2)] = inst_31561);

(statearr_31613_32823[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_31616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31616[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_31616[(1)] = (1));

return statearr_31616;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_31579){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31579);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31618){var ex__29926__auto__ = e31618;
var statearr_31619_32824 = state_31579;
(statearr_31619_32824[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31579[(4)]))){
var statearr_31620_32825 = state_31579;
(statearr_31620_32825[(1)] = cljs.core.first((state_31579[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32826 = state_31579;
state_31579 = G__32826;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_31579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_31579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31621 = f__30275__auto__();
(statearr_31621[(6)] = c__30274__auto___32800);

return statearr_31621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31626 = arguments.length;
switch (G__31626) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30274__auto___32828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31661){
var state_val_31662 = (state_31661[(1)]);
if((state_val_31662 === (7))){
var inst_31641 = (state_31661[(7)]);
var inst_31640 = (state_31661[(8)]);
var inst_31640__$1 = (state_31661[(2)]);
var inst_31641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31640__$1,(0),null);
var inst_31642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31640__$1,(1),null);
var inst_31643 = (inst_31641__$1 == null);
var state_31661__$1 = (function (){var statearr_31663 = state_31661;
(statearr_31663[(7)] = inst_31641__$1);

(statearr_31663[(9)] = inst_31642);

(statearr_31663[(8)] = inst_31640__$1);

return statearr_31663;
})();
if(cljs.core.truth_(inst_31643)){
var statearr_31664_32829 = state_31661__$1;
(statearr_31664_32829[(1)] = (8));

} else {
var statearr_31665_32830 = state_31661__$1;
(statearr_31665_32830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (1))){
var inst_31628 = cljs.core.vec(chs);
var inst_31629 = inst_31628;
var state_31661__$1 = (function (){var statearr_31666 = state_31661;
(statearr_31666[(10)] = inst_31629);

return statearr_31666;
})();
var statearr_31667_32831 = state_31661__$1;
(statearr_31667_32831[(2)] = null);

(statearr_31667_32831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (4))){
var inst_31629 = (state_31661[(10)]);
var state_31661__$1 = state_31661;
return cljs.core.async.ioc_alts_BANG_(state_31661__$1,(7),inst_31629);
} else {
if((state_val_31662 === (6))){
var inst_31657 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31668_32832 = state_31661__$1;
(statearr_31668_32832[(2)] = inst_31657);

(statearr_31668_32832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (3))){
var inst_31659 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31661__$1,inst_31659);
} else {
if((state_val_31662 === (2))){
var inst_31629 = (state_31661[(10)]);
var inst_31631 = cljs.core.count(inst_31629);
var inst_31632 = (inst_31631 > (0));
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31632)){
var statearr_31670_32833 = state_31661__$1;
(statearr_31670_32833[(1)] = (4));

} else {
var statearr_31671_32834 = state_31661__$1;
(statearr_31671_32834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (11))){
var inst_31629 = (state_31661[(10)]);
var inst_31650 = (state_31661[(2)]);
var tmp31669 = inst_31629;
var inst_31629__$1 = tmp31669;
var state_31661__$1 = (function (){var statearr_31672 = state_31661;
(statearr_31672[(11)] = inst_31650);

(statearr_31672[(10)] = inst_31629__$1);

return statearr_31672;
})();
var statearr_31673_32851 = state_31661__$1;
(statearr_31673_32851[(2)] = null);

(statearr_31673_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (9))){
var inst_31641 = (state_31661[(7)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31661__$1,(11),out,inst_31641);
} else {
if((state_val_31662 === (5))){
var inst_31655 = cljs.core.async.close_BANG_(out);
var state_31661__$1 = state_31661;
var statearr_31674_32852 = state_31661__$1;
(statearr_31674_32852[(2)] = inst_31655);

(statearr_31674_32852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (10))){
var inst_31653 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31677_32853 = state_31661__$1;
(statearr_31677_32853[(2)] = inst_31653);

(statearr_31677_32853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (8))){
var inst_31641 = (state_31661[(7)]);
var inst_31642 = (state_31661[(9)]);
var inst_31640 = (state_31661[(8)]);
var inst_31629 = (state_31661[(10)]);
var inst_31645 = (function (){var cs = inst_31629;
var vec__31634 = inst_31640;
var v = inst_31641;
var c = inst_31642;
return (function (p1__31624_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31624_SHARP_);
});
})();
var inst_31646 = cljs.core.filterv(inst_31645,inst_31629);
var inst_31629__$1 = inst_31646;
var state_31661__$1 = (function (){var statearr_31678 = state_31661;
(statearr_31678[(10)] = inst_31629__$1);

return statearr_31678;
})();
var statearr_31679_32854 = state_31661__$1;
(statearr_31679_32854[(2)] = null);

(statearr_31679_32854[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_31661){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31661);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31683){var ex__29926__auto__ = e31683;
var statearr_31684_32858 = state_31661;
(statearr_31684_32858[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31661[(4)]))){
var statearr_31685_32859 = state_31661;
(statearr_31685_32859[(1)] = cljs.core.first((state_31661[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_31661;
state_31661 = G__32861;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_31661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_31661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31686 = f__30275__auto__();
(statearr_31686[(6)] = c__30274__auto___32828);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31691 = arguments.length;
switch (G__31691) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30274__auto___32878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31720){
var state_val_31721 = (state_31720[(1)]);
if((state_val_31721 === (7))){
var inst_31699 = (state_31720[(7)]);
var inst_31699__$1 = (state_31720[(2)]);
var inst_31702 = (inst_31699__$1 == null);
var inst_31703 = cljs.core.not(inst_31702);
var state_31720__$1 = (function (){var statearr_31722 = state_31720;
(statearr_31722[(7)] = inst_31699__$1);

return statearr_31722;
})();
if(inst_31703){
var statearr_31723_32879 = state_31720__$1;
(statearr_31723_32879[(1)] = (8));

} else {
var statearr_31724_32880 = state_31720__$1;
(statearr_31724_32880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (1))){
var inst_31694 = (0);
var state_31720__$1 = (function (){var statearr_31725 = state_31720;
(statearr_31725[(8)] = inst_31694);

return statearr_31725;
})();
var statearr_31726_32881 = state_31720__$1;
(statearr_31726_32881[(2)] = null);

(statearr_31726_32881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (4))){
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31720__$1,(7),ch);
} else {
if((state_val_31721 === (6))){
var inst_31714 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31727_32888 = state_31720__$1;
(statearr_31727_32888[(2)] = inst_31714);

(statearr_31727_32888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (3))){
var inst_31716 = (state_31720[(2)]);
var inst_31718 = cljs.core.async.close_BANG_(out);
var state_31720__$1 = (function (){var statearr_31728 = state_31720;
(statearr_31728[(9)] = inst_31716);

return statearr_31728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31720__$1,inst_31718);
} else {
if((state_val_31721 === (2))){
var inst_31694 = (state_31720[(8)]);
var inst_31696 = (inst_31694 < n);
var state_31720__$1 = state_31720;
if(cljs.core.truth_(inst_31696)){
var statearr_31729_32889 = state_31720__$1;
(statearr_31729_32889[(1)] = (4));

} else {
var statearr_31730_32890 = state_31720__$1;
(statearr_31730_32890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (11))){
var inst_31694 = (state_31720[(8)]);
var inst_31706 = (state_31720[(2)]);
var inst_31707 = (inst_31694 + (1));
var inst_31694__$1 = inst_31707;
var state_31720__$1 = (function (){var statearr_31731 = state_31720;
(statearr_31731[(8)] = inst_31694__$1);

(statearr_31731[(10)] = inst_31706);

return statearr_31731;
})();
var statearr_31732_32897 = state_31720__$1;
(statearr_31732_32897[(2)] = null);

(statearr_31732_32897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (9))){
var state_31720__$1 = state_31720;
var statearr_31733_32898 = state_31720__$1;
(statearr_31733_32898[(2)] = null);

(statearr_31733_32898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (5))){
var state_31720__$1 = state_31720;
var statearr_31734_32899 = state_31720__$1;
(statearr_31734_32899[(2)] = null);

(statearr_31734_32899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (10))){
var inst_31711 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31735_32900 = state_31720__$1;
(statearr_31735_32900[(2)] = inst_31711);

(statearr_31735_32900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (8))){
var inst_31699 = (state_31720[(7)]);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31720__$1,(11),out,inst_31699);
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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_31720){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31720);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31737){var ex__29926__auto__ = e31737;
var statearr_31738_32901 = state_31720;
(statearr_31738_32901[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31720[(4)]))){
var statearr_31739_32902 = state_31720;
(statearr_31739_32902[(1)] = cljs.core.first((state_31720[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32903 = state_31720;
state_31720 = G__32903;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_31720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_31720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31740 = f__30275__auto__();
(statearr_31740[(6)] = c__30274__auto___32878);

return statearr_31740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31742 = (function (f,ch,meta31743){
this.f = f;
this.ch = ch;
this.meta31743 = meta31743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31744,meta31743__$1){
var self__ = this;
var _31744__$1 = this;
return (new cljs.core.async.t_cljs$core$async31742(self__.f,self__.ch,meta31743__$1));
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31744){
var self__ = this;
var _31744__$1 = this;
return self__.meta31743;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31745 = (function (f,ch,meta31743,_,fn1,meta31746){
this.f = f;
this.ch = ch;
this.meta31743 = meta31743;
this._ = _;
this.fn1 = fn1;
this.meta31746 = meta31746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31747,meta31746__$1){
var self__ = this;
var _31747__$1 = this;
return (new cljs.core.async.t_cljs$core$async31745(self__.f,self__.ch,self__.meta31743,self__._,self__.fn1,meta31746__$1));
}));

(cljs.core.async.t_cljs$core$async31745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31747){
var self__ = this;
var _31747__$1 = this;
return self__.meta31746;
}));

(cljs.core.async.t_cljs$core$async31745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31741_SHARP_){
var G__31749 = (((p1__31741_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31741_SHARP_) : self__.f.call(null,p1__31741_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31749) : f1.call(null,G__31749));
});
}));

(cljs.core.async.t_cljs$core$async31745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31743","meta31743",357375986,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31742","cljs.core.async/t_cljs$core$async31742",1118358388,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31746","meta31746",1970797455,null)], null);
}));

(cljs.core.async.t_cljs$core$async31745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31745");

(cljs.core.async.t_cljs$core$async31745.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31745.
 */
cljs.core.async.__GT_t_cljs$core$async31745 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31745(f__$1,ch__$1,meta31743__$1,___$2,fn1__$1,meta31746){
return (new cljs.core.async.t_cljs$core$async31745(f__$1,ch__$1,meta31743__$1,___$2,fn1__$1,meta31746));
});

}

return (new cljs.core.async.t_cljs$core$async31745(self__.f,self__.ch,self__.meta31743,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31751 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31751) : self__.f.call(null,G__31751));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31743","meta31743",357375986,null)], null);
}));

(cljs.core.async.t_cljs$core$async31742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31742");

(cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31742.
 */
cljs.core.async.__GT_t_cljs$core$async31742 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31742(f__$1,ch__$1,meta31743){
return (new cljs.core.async.t_cljs$core$async31742(f__$1,ch__$1,meta31743));
});

}

return (new cljs.core.async.t_cljs$core$async31742(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31752 = (function (f,ch,meta31753){
this.f = f;
this.ch = ch;
this.meta31753 = meta31753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31754,meta31753__$1){
var self__ = this;
var _31754__$1 = this;
return (new cljs.core.async.t_cljs$core$async31752(self__.f,self__.ch,meta31753__$1));
}));

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31754){
var self__ = this;
var _31754__$1 = this;
return self__.meta31753;
}));

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31753","meta31753",-381814207,null)], null);
}));

(cljs.core.async.t_cljs$core$async31752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31752");

(cljs.core.async.t_cljs$core$async31752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31752.
 */
cljs.core.async.__GT_t_cljs$core$async31752 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31752(f__$1,ch__$1,meta31753){
return (new cljs.core.async.t_cljs$core$async31752(f__$1,ch__$1,meta31753));
});

}

return (new cljs.core.async.t_cljs$core$async31752(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31757 = (function (p,ch,meta31758){
this.p = p;
this.ch = ch;
this.meta31758 = meta31758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31759,meta31758__$1){
var self__ = this;
var _31759__$1 = this;
return (new cljs.core.async.t_cljs$core$async31757(self__.p,self__.ch,meta31758__$1));
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31759){
var self__ = this;
var _31759__$1 = this;
return self__.meta31758;
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31758","meta31758",-1030476480,null)], null);
}));

(cljs.core.async.t_cljs$core$async31757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31757");

(cljs.core.async.t_cljs$core$async31757.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31757.
 */
cljs.core.async.__GT_t_cljs$core$async31757 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31757(p__$1,ch__$1,meta31758){
return (new cljs.core.async.t_cljs$core$async31757(p__$1,ch__$1,meta31758));
});

}

return (new cljs.core.async.t_cljs$core$async31757(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31761 = arguments.length;
switch (G__31761) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30274__auto___32913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31782){
var state_val_31783 = (state_31782[(1)]);
if((state_val_31783 === (7))){
var inst_31778 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31784_32914 = state_31782__$1;
(statearr_31784_32914[(2)] = inst_31778);

(statearr_31784_32914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (1))){
var state_31782__$1 = state_31782;
var statearr_31785_32915 = state_31782__$1;
(statearr_31785_32915[(2)] = null);

(statearr_31785_32915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (4))){
var inst_31764 = (state_31782[(7)]);
var inst_31764__$1 = (state_31782[(2)]);
var inst_31765 = (inst_31764__$1 == null);
var state_31782__$1 = (function (){var statearr_31786 = state_31782;
(statearr_31786[(7)] = inst_31764__$1);

return statearr_31786;
})();
if(cljs.core.truth_(inst_31765)){
var statearr_31787_32916 = state_31782__$1;
(statearr_31787_32916[(1)] = (5));

} else {
var statearr_31788_32917 = state_31782__$1;
(statearr_31788_32917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (6))){
var inst_31764 = (state_31782[(7)]);
var inst_31769 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31764) : p.call(null,inst_31764));
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31769)){
var statearr_31789_32918 = state_31782__$1;
(statearr_31789_32918[(1)] = (8));

} else {
var statearr_31790_32919 = state_31782__$1;
(statearr_31790_32919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (3))){
var inst_31780 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31782__$1,inst_31780);
} else {
if((state_val_31783 === (2))){
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31782__$1,(4),ch);
} else {
if((state_val_31783 === (11))){
var inst_31772 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31791_32920 = state_31782__$1;
(statearr_31791_32920[(2)] = inst_31772);

(statearr_31791_32920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (9))){
var state_31782__$1 = state_31782;
var statearr_31792_32921 = state_31782__$1;
(statearr_31792_32921[(2)] = null);

(statearr_31792_32921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (5))){
var inst_31767 = cljs.core.async.close_BANG_(out);
var state_31782__$1 = state_31782;
var statearr_31793_32922 = state_31782__$1;
(statearr_31793_32922[(2)] = inst_31767);

(statearr_31793_32922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (10))){
var inst_31775 = (state_31782[(2)]);
var state_31782__$1 = (function (){var statearr_31794 = state_31782;
(statearr_31794[(8)] = inst_31775);

return statearr_31794;
})();
var statearr_31795_32924 = state_31782__$1;
(statearr_31795_32924[(2)] = null);

(statearr_31795_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (8))){
var inst_31764 = (state_31782[(7)]);
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31782__$1,(11),out,inst_31764);
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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_31796 = [null,null,null,null,null,null,null,null,null];
(statearr_31796[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_31796[(1)] = (1));

return statearr_31796;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_31782){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31782);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31797){var ex__29926__auto__ = e31797;
var statearr_31798_32926 = state_31782;
(statearr_31798_32926[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31782[(4)]))){
var statearr_31799_32927 = state_31782;
(statearr_31799_32927[(1)] = cljs.core.first((state_31782[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32928 = state_31782;
state_31782 = G__32928;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_31782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_31782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31800 = f__30275__auto__();
(statearr_31800[(6)] = c__30274__auto___32913);

return statearr_31800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31802 = arguments.length;
switch (G__31802) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31864){
var state_val_31865 = (state_31864[(1)]);
if((state_val_31865 === (7))){
var inst_31860 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31866_32930 = state_31864__$1;
(statearr_31866_32930[(2)] = inst_31860);

(statearr_31866_32930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (20))){
var inst_31830 = (state_31864[(7)]);
var inst_31841 = (state_31864[(2)]);
var inst_31842 = cljs.core.next(inst_31830);
var inst_31816 = inst_31842;
var inst_31817 = null;
var inst_31818 = (0);
var inst_31819 = (0);
var state_31864__$1 = (function (){var statearr_31867 = state_31864;
(statearr_31867[(8)] = inst_31818);

(statearr_31867[(9)] = inst_31817);

(statearr_31867[(10)] = inst_31816);

(statearr_31867[(11)] = inst_31819);

(statearr_31867[(12)] = inst_31841);

return statearr_31867;
})();
var statearr_31868_32931 = state_31864__$1;
(statearr_31868_32931[(2)] = null);

(statearr_31868_32931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (1))){
var state_31864__$1 = state_31864;
var statearr_31869_32932 = state_31864__$1;
(statearr_31869_32932[(2)] = null);

(statearr_31869_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (4))){
var inst_31805 = (state_31864[(13)]);
var inst_31805__$1 = (state_31864[(2)]);
var inst_31806 = (inst_31805__$1 == null);
var state_31864__$1 = (function (){var statearr_31870 = state_31864;
(statearr_31870[(13)] = inst_31805__$1);

return statearr_31870;
})();
if(cljs.core.truth_(inst_31806)){
var statearr_31871_32933 = state_31864__$1;
(statearr_31871_32933[(1)] = (5));

} else {
var statearr_31872_32934 = state_31864__$1;
(statearr_31872_32934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (15))){
var state_31864__$1 = state_31864;
var statearr_31876_32935 = state_31864__$1;
(statearr_31876_32935[(2)] = null);

(statearr_31876_32935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (21))){
var state_31864__$1 = state_31864;
var statearr_31877_32936 = state_31864__$1;
(statearr_31877_32936[(2)] = null);

(statearr_31877_32936[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (13))){
var inst_31818 = (state_31864[(8)]);
var inst_31817 = (state_31864[(9)]);
var inst_31816 = (state_31864[(10)]);
var inst_31819 = (state_31864[(11)]);
var inst_31826 = (state_31864[(2)]);
var inst_31827 = (inst_31819 + (1));
var tmp31873 = inst_31818;
var tmp31874 = inst_31817;
var tmp31875 = inst_31816;
var inst_31816__$1 = tmp31875;
var inst_31817__$1 = tmp31874;
var inst_31818__$1 = tmp31873;
var inst_31819__$1 = inst_31827;
var state_31864__$1 = (function (){var statearr_31878 = state_31864;
(statearr_31878[(14)] = inst_31826);

(statearr_31878[(8)] = inst_31818__$1);

(statearr_31878[(9)] = inst_31817__$1);

(statearr_31878[(10)] = inst_31816__$1);

(statearr_31878[(11)] = inst_31819__$1);

return statearr_31878;
})();
var statearr_31879_32937 = state_31864__$1;
(statearr_31879_32937[(2)] = null);

(statearr_31879_32937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (22))){
var state_31864__$1 = state_31864;
var statearr_31880_32938 = state_31864__$1;
(statearr_31880_32938[(2)] = null);

(statearr_31880_32938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (6))){
var inst_31805 = (state_31864[(13)]);
var inst_31814 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31805) : f.call(null,inst_31805));
var inst_31815 = cljs.core.seq(inst_31814);
var inst_31816 = inst_31815;
var inst_31817 = null;
var inst_31818 = (0);
var inst_31819 = (0);
var state_31864__$1 = (function (){var statearr_31881 = state_31864;
(statearr_31881[(8)] = inst_31818);

(statearr_31881[(9)] = inst_31817);

(statearr_31881[(10)] = inst_31816);

(statearr_31881[(11)] = inst_31819);

return statearr_31881;
})();
var statearr_31882_32939 = state_31864__$1;
(statearr_31882_32939[(2)] = null);

(statearr_31882_32939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (17))){
var inst_31830 = (state_31864[(7)]);
var inst_31834 = cljs.core.chunk_first(inst_31830);
var inst_31835 = cljs.core.chunk_rest(inst_31830);
var inst_31836 = cljs.core.count(inst_31834);
var inst_31816 = inst_31835;
var inst_31817 = inst_31834;
var inst_31818 = inst_31836;
var inst_31819 = (0);
var state_31864__$1 = (function (){var statearr_31883 = state_31864;
(statearr_31883[(8)] = inst_31818);

(statearr_31883[(9)] = inst_31817);

(statearr_31883[(10)] = inst_31816);

(statearr_31883[(11)] = inst_31819);

return statearr_31883;
})();
var statearr_31884_32940 = state_31864__$1;
(statearr_31884_32940[(2)] = null);

(statearr_31884_32940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (3))){
var inst_31862 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31864__$1,inst_31862);
} else {
if((state_val_31865 === (12))){
var inst_31850 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31885_32941 = state_31864__$1;
(statearr_31885_32941[(2)] = inst_31850);

(statearr_31885_32941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (2))){
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31864__$1,(4),in$);
} else {
if((state_val_31865 === (23))){
var inst_31858 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31886_32942 = state_31864__$1;
(statearr_31886_32942[(2)] = inst_31858);

(statearr_31886_32942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (19))){
var inst_31845 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31887_32943 = state_31864__$1;
(statearr_31887_32943[(2)] = inst_31845);

(statearr_31887_32943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (11))){
var inst_31816 = (state_31864[(10)]);
var inst_31830 = (state_31864[(7)]);
var inst_31830__$1 = cljs.core.seq(inst_31816);
var state_31864__$1 = (function (){var statearr_31888 = state_31864;
(statearr_31888[(7)] = inst_31830__$1);

return statearr_31888;
})();
if(inst_31830__$1){
var statearr_31889_32950 = state_31864__$1;
(statearr_31889_32950[(1)] = (14));

} else {
var statearr_31890_32951 = state_31864__$1;
(statearr_31890_32951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (9))){
var inst_31852 = (state_31864[(2)]);
var inst_31853 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31864__$1 = (function (){var statearr_31891 = state_31864;
(statearr_31891[(15)] = inst_31852);

return statearr_31891;
})();
if(cljs.core.truth_(inst_31853)){
var statearr_31892_32952 = state_31864__$1;
(statearr_31892_32952[(1)] = (21));

} else {
var statearr_31893_32953 = state_31864__$1;
(statearr_31893_32953[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (5))){
var inst_31808 = cljs.core.async.close_BANG_(out);
var state_31864__$1 = state_31864;
var statearr_31894_32955 = state_31864__$1;
(statearr_31894_32955[(2)] = inst_31808);

(statearr_31894_32955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (14))){
var inst_31830 = (state_31864[(7)]);
var inst_31832 = cljs.core.chunked_seq_QMARK_(inst_31830);
var state_31864__$1 = state_31864;
if(inst_31832){
var statearr_31895_32956 = state_31864__$1;
(statearr_31895_32956[(1)] = (17));

} else {
var statearr_31896_32957 = state_31864__$1;
(statearr_31896_32957[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (16))){
var inst_31848 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31897_32962 = state_31864__$1;
(statearr_31897_32962[(2)] = inst_31848);

(statearr_31897_32962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (10))){
var inst_31817 = (state_31864[(9)]);
var inst_31819 = (state_31864[(11)]);
var inst_31824 = cljs.core._nth(inst_31817,inst_31819);
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31864__$1,(13),out,inst_31824);
} else {
if((state_val_31865 === (18))){
var inst_31830 = (state_31864[(7)]);
var inst_31839 = cljs.core.first(inst_31830);
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31864__$1,(20),out,inst_31839);
} else {
if((state_val_31865 === (8))){
var inst_31818 = (state_31864[(8)]);
var inst_31819 = (state_31864[(11)]);
var inst_31821 = (inst_31819 < inst_31818);
var inst_31822 = inst_31821;
var state_31864__$1 = state_31864;
if(cljs.core.truth_(inst_31822)){
var statearr_31898_32964 = state_31864__$1;
(statearr_31898_32964[(1)] = (10));

} else {
var statearr_31899_32965 = state_31864__$1;
(statearr_31899_32965[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29923__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29923__auto____0 = (function (){
var statearr_31900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31900[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29923__auto__);

(statearr_31900[(1)] = (1));

return statearr_31900;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29923__auto____1 = (function (state_31864){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31864);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31901){var ex__29926__auto__ = e31901;
var statearr_31902_32966 = state_31864;
(statearr_31902_32966[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31864[(4)]))){
var statearr_31903_32967 = state_31864;
(statearr_31903_32967[(1)] = cljs.core.first((state_31864[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32968 = state_31864;
state_31864 = G__32968;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29923__auto__ = function(state_31864){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29923__auto____1.call(this,state_31864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29923__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29923__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31906 = f__30275__auto__();
(statearr_31906[(6)] = c__30274__auto__);

return statearr_31906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));

return c__30274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31912 = arguments.length;
switch (G__31912) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31918 = arguments.length;
switch (G__31918) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31927 = arguments.length;
switch (G__31927) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30274__auto___32973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_31951){
var state_val_31952 = (state_31951[(1)]);
if((state_val_31952 === (7))){
var inst_31946 = (state_31951[(2)]);
var state_31951__$1 = state_31951;
var statearr_31953_32974 = state_31951__$1;
(statearr_31953_32974[(2)] = inst_31946);

(statearr_31953_32974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (1))){
var inst_31928 = null;
var state_31951__$1 = (function (){var statearr_31954 = state_31951;
(statearr_31954[(7)] = inst_31928);

return statearr_31954;
})();
var statearr_31955_32975 = state_31951__$1;
(statearr_31955_32975[(2)] = null);

(statearr_31955_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (4))){
var inst_31931 = (state_31951[(8)]);
var inst_31931__$1 = (state_31951[(2)]);
var inst_31932 = (inst_31931__$1 == null);
var inst_31933 = cljs.core.not(inst_31932);
var state_31951__$1 = (function (){var statearr_31956 = state_31951;
(statearr_31956[(8)] = inst_31931__$1);

return statearr_31956;
})();
if(inst_31933){
var statearr_31957_32977 = state_31951__$1;
(statearr_31957_32977[(1)] = (5));

} else {
var statearr_31958_32978 = state_31951__$1;
(statearr_31958_32978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (6))){
var state_31951__$1 = state_31951;
var statearr_31959_32979 = state_31951__$1;
(statearr_31959_32979[(2)] = null);

(statearr_31959_32979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (3))){
var inst_31948 = (state_31951[(2)]);
var inst_31949 = cljs.core.async.close_BANG_(out);
var state_31951__$1 = (function (){var statearr_31960 = state_31951;
(statearr_31960[(9)] = inst_31948);

return statearr_31960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31951__$1,inst_31949);
} else {
if((state_val_31952 === (2))){
var state_31951__$1 = state_31951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31951__$1,(4),ch);
} else {
if((state_val_31952 === (11))){
var inst_31931 = (state_31951[(8)]);
var inst_31940 = (state_31951[(2)]);
var inst_31928 = inst_31931;
var state_31951__$1 = (function (){var statearr_31966 = state_31951;
(statearr_31966[(10)] = inst_31940);

(statearr_31966[(7)] = inst_31928);

return statearr_31966;
})();
var statearr_31967_32980 = state_31951__$1;
(statearr_31967_32980[(2)] = null);

(statearr_31967_32980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (9))){
var inst_31931 = (state_31951[(8)]);
var state_31951__$1 = state_31951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31951__$1,(11),out,inst_31931);
} else {
if((state_val_31952 === (5))){
var inst_31928 = (state_31951[(7)]);
var inst_31931 = (state_31951[(8)]);
var inst_31935 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31931,inst_31928);
var state_31951__$1 = state_31951;
if(inst_31935){
var statearr_31972_32981 = state_31951__$1;
(statearr_31972_32981[(1)] = (8));

} else {
var statearr_31973_32982 = state_31951__$1;
(statearr_31973_32982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (10))){
var inst_31943 = (state_31951[(2)]);
var state_31951__$1 = state_31951;
var statearr_31974_32983 = state_31951__$1;
(statearr_31974_32983[(2)] = inst_31943);

(statearr_31974_32983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31952 === (8))){
var inst_31928 = (state_31951[(7)]);
var tmp31968 = inst_31928;
var inst_31928__$1 = tmp31968;
var state_31951__$1 = (function (){var statearr_31975 = state_31951;
(statearr_31975[(7)] = inst_31928__$1);

return statearr_31975;
})();
var statearr_31976_32984 = state_31951__$1;
(statearr_31976_32984[(2)] = null);

(statearr_31976_32984[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_31977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31977[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_31977[(1)] = (1));

return statearr_31977;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_31951){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_31951);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e31978){var ex__29926__auto__ = e31978;
var statearr_31979_32985 = state_31951;
(statearr_31979_32985[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_31951[(4)]))){
var statearr_31980_32986 = state_31951;
(statearr_31980_32986[(1)] = cljs.core.first((state_31951[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32987 = state_31951;
state_31951 = G__32987;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_31951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_31951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_31981 = f__30275__auto__();
(statearr_31981[(6)] = c__30274__auto___32973);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31983 = arguments.length;
switch (G__31983) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30274__auto___32989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_32024){
var state_val_32025 = (state_32024[(1)]);
if((state_val_32025 === (7))){
var inst_32020 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32026_32990 = state_32024__$1;
(statearr_32026_32990[(2)] = inst_32020);

(statearr_32026_32990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (1))){
var inst_31987 = (new Array(n));
var inst_31988 = inst_31987;
var inst_31989 = (0);
var state_32024__$1 = (function (){var statearr_32027 = state_32024;
(statearr_32027[(7)] = inst_31988);

(statearr_32027[(8)] = inst_31989);

return statearr_32027;
})();
var statearr_32028_32991 = state_32024__$1;
(statearr_32028_32991[(2)] = null);

(statearr_32028_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (4))){
var inst_31992 = (state_32024[(9)]);
var inst_31992__$1 = (state_32024[(2)]);
var inst_31993 = (inst_31992__$1 == null);
var inst_31994 = cljs.core.not(inst_31993);
var state_32024__$1 = (function (){var statearr_32029 = state_32024;
(statearr_32029[(9)] = inst_31992__$1);

return statearr_32029;
})();
if(inst_31994){
var statearr_32030_32992 = state_32024__$1;
(statearr_32030_32992[(1)] = (5));

} else {
var statearr_32031_32993 = state_32024__$1;
(statearr_32031_32993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (15))){
var inst_32014 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32032_32994 = state_32024__$1;
(statearr_32032_32994[(2)] = inst_32014);

(statearr_32032_32994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (13))){
var state_32024__$1 = state_32024;
var statearr_32033_32995 = state_32024__$1;
(statearr_32033_32995[(2)] = null);

(statearr_32033_32995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (6))){
var inst_31989 = (state_32024[(8)]);
var inst_32010 = (inst_31989 > (0));
var state_32024__$1 = state_32024;
if(cljs.core.truth_(inst_32010)){
var statearr_32034_32996 = state_32024__$1;
(statearr_32034_32996[(1)] = (12));

} else {
var statearr_32035_32997 = state_32024__$1;
(statearr_32035_32997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (3))){
var inst_32022 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32024__$1,inst_32022);
} else {
if((state_val_32025 === (12))){
var inst_31988 = (state_32024[(7)]);
var inst_32012 = cljs.core.vec(inst_31988);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32024__$1,(15),out,inst_32012);
} else {
if((state_val_32025 === (2))){
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32024__$1,(4),ch);
} else {
if((state_val_32025 === (11))){
var inst_32004 = (state_32024[(2)]);
var inst_32005 = (new Array(n));
var inst_31988 = inst_32005;
var inst_31989 = (0);
var state_32024__$1 = (function (){var statearr_32052 = state_32024;
(statearr_32052[(10)] = inst_32004);

(statearr_32052[(7)] = inst_31988);

(statearr_32052[(8)] = inst_31989);

return statearr_32052;
})();
var statearr_32053_32998 = state_32024__$1;
(statearr_32053_32998[(2)] = null);

(statearr_32053_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (9))){
var inst_31988 = (state_32024[(7)]);
var inst_32002 = cljs.core.vec(inst_31988);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32024__$1,(11),out,inst_32002);
} else {
if((state_val_32025 === (5))){
var inst_31997 = (state_32024[(11)]);
var inst_31988 = (state_32024[(7)]);
var inst_31992 = (state_32024[(9)]);
var inst_31989 = (state_32024[(8)]);
var inst_31996 = (inst_31988[inst_31989] = inst_31992);
var inst_31997__$1 = (inst_31989 + (1));
var inst_31998 = (inst_31997__$1 < n);
var state_32024__$1 = (function (){var statearr_32054 = state_32024;
(statearr_32054[(11)] = inst_31997__$1);

(statearr_32054[(12)] = inst_31996);

return statearr_32054;
})();
if(cljs.core.truth_(inst_31998)){
var statearr_32055_33000 = state_32024__$1;
(statearr_32055_33000[(1)] = (8));

} else {
var statearr_32056_33001 = state_32024__$1;
(statearr_32056_33001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (14))){
var inst_32017 = (state_32024[(2)]);
var inst_32018 = cljs.core.async.close_BANG_(out);
var state_32024__$1 = (function (){var statearr_32058 = state_32024;
(statearr_32058[(13)] = inst_32017);

return statearr_32058;
})();
var statearr_32059_33003 = state_32024__$1;
(statearr_32059_33003[(2)] = inst_32018);

(statearr_32059_33003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (10))){
var inst_32008 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32060_33004 = state_32024__$1;
(statearr_32060_33004[(2)] = inst_32008);

(statearr_32060_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (8))){
var inst_31997 = (state_32024[(11)]);
var inst_31988 = (state_32024[(7)]);
var tmp32057 = inst_31988;
var inst_31988__$1 = tmp32057;
var inst_31989 = inst_31997;
var state_32024__$1 = (function (){var statearr_32061 = state_32024;
(statearr_32061[(7)] = inst_31988__$1);

(statearr_32061[(8)] = inst_31989);

return statearr_32061;
})();
var statearr_32062_33005 = state_32024__$1;
(statearr_32062_33005[(2)] = null);

(statearr_32062_33005[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_32063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32063[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_32063[(1)] = (1));

return statearr_32063;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_32024){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_32024);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e32064){var ex__29926__auto__ = e32064;
var statearr_32065_33008 = state_32024;
(statearr_32065_33008[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_32024[(4)]))){
var statearr_32066_33009 = state_32024;
(statearr_32066_33009[(1)] = cljs.core.first((state_32024[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33011 = state_32024;
state_32024 = G__33011;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_32024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_32024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_32067 = f__30275__auto__();
(statearr_32067[(6)] = c__30274__auto___32989);

return statearr_32067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32069 = arguments.length;
switch (G__32069) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30274__auto___33014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_32117){
var state_val_32118 = (state_32117[(1)]);
if((state_val_32118 === (7))){
var inst_32113 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32119_33015 = state_32117__$1;
(statearr_32119_33015[(2)] = inst_32113);

(statearr_32119_33015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (1))){
var inst_32076 = [];
var inst_32077 = inst_32076;
var inst_32078 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32117__$1 = (function (){var statearr_32120 = state_32117;
(statearr_32120[(7)] = inst_32078);

(statearr_32120[(8)] = inst_32077);

return statearr_32120;
})();
var statearr_32121_33021 = state_32117__$1;
(statearr_32121_33021[(2)] = null);

(statearr_32121_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (4))){
var inst_32081 = (state_32117[(9)]);
var inst_32081__$1 = (state_32117[(2)]);
var inst_32082 = (inst_32081__$1 == null);
var inst_32083 = cljs.core.not(inst_32082);
var state_32117__$1 = (function (){var statearr_32122 = state_32117;
(statearr_32122[(9)] = inst_32081__$1);

return statearr_32122;
})();
if(inst_32083){
var statearr_32123_33026 = state_32117__$1;
(statearr_32123_33026[(1)] = (5));

} else {
var statearr_32124_33028 = state_32117__$1;
(statearr_32124_33028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (15))){
var inst_32107 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32125_33029 = state_32117__$1;
(statearr_32125_33029[(2)] = inst_32107);

(statearr_32125_33029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (13))){
var state_32117__$1 = state_32117;
var statearr_32126_33034 = state_32117__$1;
(statearr_32126_33034[(2)] = null);

(statearr_32126_33034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (6))){
var inst_32077 = (state_32117[(8)]);
var inst_32102 = inst_32077.length;
var inst_32103 = (inst_32102 > (0));
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32103)){
var statearr_32127_33036 = state_32117__$1;
(statearr_32127_33036[(1)] = (12));

} else {
var statearr_32128_33037 = state_32117__$1;
(statearr_32128_33037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (3))){
var inst_32115 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32117__$1,inst_32115);
} else {
if((state_val_32118 === (12))){
var inst_32077 = (state_32117[(8)]);
var inst_32105 = cljs.core.vec(inst_32077);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32117__$1,(15),out,inst_32105);
} else {
if((state_val_32118 === (2))){
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32117__$1,(4),ch);
} else {
if((state_val_32118 === (11))){
var inst_32081 = (state_32117[(9)]);
var inst_32085 = (state_32117[(10)]);
var inst_32095 = (state_32117[(2)]);
var inst_32096 = [];
var inst_32097 = inst_32096.push(inst_32081);
var inst_32077 = inst_32096;
var inst_32078 = inst_32085;
var state_32117__$1 = (function (){var statearr_32130 = state_32117;
(statearr_32130[(11)] = inst_32097);

(statearr_32130[(7)] = inst_32078);

(statearr_32130[(8)] = inst_32077);

(statearr_32130[(12)] = inst_32095);

return statearr_32130;
})();
var statearr_32131_33046 = state_32117__$1;
(statearr_32131_33046[(2)] = null);

(statearr_32131_33046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (9))){
var inst_32077 = (state_32117[(8)]);
var inst_32093 = cljs.core.vec(inst_32077);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32117__$1,(11),out,inst_32093);
} else {
if((state_val_32118 === (5))){
var inst_32078 = (state_32117[(7)]);
var inst_32081 = (state_32117[(9)]);
var inst_32085 = (state_32117[(10)]);
var inst_32085__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32081) : f.call(null,inst_32081));
var inst_32086 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32085__$1,inst_32078);
var inst_32087 = cljs.core.keyword_identical_QMARK_(inst_32078,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32088 = ((inst_32086) || (inst_32087));
var state_32117__$1 = (function (){var statearr_32133 = state_32117;
(statearr_32133[(10)] = inst_32085__$1);

return statearr_32133;
})();
if(cljs.core.truth_(inst_32088)){
var statearr_32134_33051 = state_32117__$1;
(statearr_32134_33051[(1)] = (8));

} else {
var statearr_32135_33052 = state_32117__$1;
(statearr_32135_33052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (14))){
var inst_32110 = (state_32117[(2)]);
var inst_32111 = cljs.core.async.close_BANG_(out);
var state_32117__$1 = (function (){var statearr_32143 = state_32117;
(statearr_32143[(13)] = inst_32110);

return statearr_32143;
})();
var statearr_32144_33057 = state_32117__$1;
(statearr_32144_33057[(2)] = inst_32111);

(statearr_32144_33057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (10))){
var inst_32100 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32145_33058 = state_32117__$1;
(statearr_32145_33058[(2)] = inst_32100);

(statearr_32145_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (8))){
var inst_32081 = (state_32117[(9)]);
var inst_32085 = (state_32117[(10)]);
var inst_32077 = (state_32117[(8)]);
var inst_32090 = inst_32077.push(inst_32081);
var tmp32142 = inst_32077;
var inst_32077__$1 = tmp32142;
var inst_32078 = inst_32085;
var state_32117__$1 = (function (){var statearr_32146 = state_32117;
(statearr_32146[(7)] = inst_32078);

(statearr_32146[(14)] = inst_32090);

(statearr_32146[(8)] = inst_32077__$1);

return statearr_32146;
})();
var statearr_32147_33063 = state_32117__$1;
(statearr_32147_33063[(2)] = null);

(statearr_32147_33063[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29923__auto__ = null;
var cljs$core$async$state_machine__29923__auto____0 = (function (){
var statearr_32148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32148[(0)] = cljs$core$async$state_machine__29923__auto__);

(statearr_32148[(1)] = (1));

return statearr_32148;
});
var cljs$core$async$state_machine__29923__auto____1 = (function (state_32117){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_32117);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e32149){var ex__29926__auto__ = e32149;
var statearr_32150_33070 = state_32117;
(statearr_32150_33070[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_32117[(4)]))){
var statearr_32151_33071 = state_32117;
(statearr_32151_33071[(1)] = cljs.core.first((state_32117[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33073 = state_32117;
state_32117 = G__33073;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
cljs$core$async$state_machine__29923__auto__ = function(state_32117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29923__auto____1.call(this,state_32117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29923__auto____0;
cljs$core$async$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29923__auto____1;
return cljs$core$async$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_32152 = f__30275__auto__();
(statearr_32152[(6)] = c__30274__auto___33014);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
