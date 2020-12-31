goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32970 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32970(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32976 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32976(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32233 = coll;
var G__32234 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32233,G__32234) : shadow.dom.lazy_native_coll_seq.call(null,G__32233,G__32234));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32256 = arguments.length;
switch (G__32256) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32262 = arguments.length;
switch (G__32262) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32270 = arguments.length;
switch (G__32270) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32276 = arguments.length;
switch (G__32276) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32284 = arguments.length;
switch (G__32284) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32290 = arguments.length;
switch (G__32290) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32291){if((e32291 instanceof Object)){
var e = e32291;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32291;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32311 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32312 = null;
var count__32313 = (0);
var i__32314 = (0);
while(true){
if((i__32314 < count__32313)){
var el = chunk__32312.cljs$core$IIndexed$_nth$arity$2(null,i__32314);
var handler_33016__$1 = ((function (seq__32311,chunk__32312,count__32313,i__32314,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32311,chunk__32312,count__32313,i__32314,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33016__$1);


var G__33017 = seq__32311;
var G__33018 = chunk__32312;
var G__33019 = count__32313;
var G__33020 = (i__32314 + (1));
seq__32311 = G__33017;
chunk__32312 = G__33018;
count__32313 = G__33019;
i__32314 = G__33020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32311);
if(temp__5735__auto__){
var seq__32311__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32311__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32311__$1);
var G__33022 = cljs.core.chunk_rest(seq__32311__$1);
var G__33023 = c__4556__auto__;
var G__33024 = cljs.core.count(c__4556__auto__);
var G__33025 = (0);
seq__32311 = G__33022;
chunk__32312 = G__33023;
count__32313 = G__33024;
i__32314 = G__33025;
continue;
} else {
var el = cljs.core.first(seq__32311__$1);
var handler_33027__$1 = ((function (seq__32311,chunk__32312,count__32313,i__32314,el,seq__32311__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32311,chunk__32312,count__32313,i__32314,el,seq__32311__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33027__$1);


var G__33030 = cljs.core.next(seq__32311__$1);
var G__33031 = null;
var G__33032 = (0);
var G__33033 = (0);
seq__32311 = G__33030;
chunk__32312 = G__33031;
count__32313 = G__33032;
i__32314 = G__33033;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32322 = arguments.length;
switch (G__32322) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32337 = cljs.core.seq(events);
var chunk__32338 = null;
var count__32339 = (0);
var i__32340 = (0);
while(true){
if((i__32340 < count__32339)){
var vec__32347 = chunk__32338.cljs$core$IIndexed$_nth$arity$2(null,i__32340);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32347,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33038 = seq__32337;
var G__33039 = chunk__32338;
var G__33040 = count__32339;
var G__33041 = (i__32340 + (1));
seq__32337 = G__33038;
chunk__32338 = G__33039;
count__32339 = G__33040;
i__32340 = G__33041;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32337);
if(temp__5735__auto__){
var seq__32337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32337__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32337__$1);
var G__33042 = cljs.core.chunk_rest(seq__32337__$1);
var G__33043 = c__4556__auto__;
var G__33044 = cljs.core.count(c__4556__auto__);
var G__33045 = (0);
seq__32337 = G__33042;
chunk__32338 = G__33043;
count__32339 = G__33044;
i__32340 = G__33045;
continue;
} else {
var vec__32350 = cljs.core.first(seq__32337__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33047 = cljs.core.next(seq__32337__$1);
var G__33048 = null;
var G__33049 = (0);
var G__33050 = (0);
seq__32337 = G__33047;
chunk__32338 = G__33048;
count__32339 = G__33049;
i__32340 = G__33050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32353 = cljs.core.seq(styles);
var chunk__32354 = null;
var count__32355 = (0);
var i__32356 = (0);
while(true){
if((i__32356 < count__32355)){
var vec__32377 = chunk__32354.cljs$core$IIndexed$_nth$arity$2(null,i__32356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32377,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33053 = seq__32353;
var G__33054 = chunk__32354;
var G__33055 = count__32355;
var G__33056 = (i__32356 + (1));
seq__32353 = G__33053;
chunk__32354 = G__33054;
count__32355 = G__33055;
i__32356 = G__33056;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32353);
if(temp__5735__auto__){
var seq__32353__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32353__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32353__$1);
var G__33059 = cljs.core.chunk_rest(seq__32353__$1);
var G__33060 = c__4556__auto__;
var G__33061 = cljs.core.count(c__4556__auto__);
var G__33062 = (0);
seq__32353 = G__33059;
chunk__32354 = G__33060;
count__32355 = G__33061;
i__32356 = G__33062;
continue;
} else {
var vec__32381 = cljs.core.first(seq__32353__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32381,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33064 = cljs.core.next(seq__32353__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__32353 = G__33064;
chunk__32354 = G__33065;
count__32355 = G__33066;
i__32356 = G__33067;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32387_33068 = key;
var G__32387_33069__$1 = (((G__32387_33068 instanceof cljs.core.Keyword))?G__32387_33068.fqn:null);
switch (G__32387_33069__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33074 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33074,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33074,"aria-");
}
})())){
el.setAttribute(ks_33074,value);
} else {
(el[ks_33074] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32404){
var map__32405 = p__32404;
var map__32405__$1 = (((((!((map__32405 == null))))?(((((map__32405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32405):map__32405);
var props = map__32405__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32405__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32407 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32407,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32407,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32407,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32410 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32410,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32410;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32436){
var vec__32438 = p__32436;
var seq__32439 = cljs.core.seq(vec__32438);
var first__32440 = cljs.core.first(seq__32439);
var seq__32439__$1 = cljs.core.next(seq__32439);
var nn = first__32440;
var first__32440__$1 = cljs.core.first(seq__32439__$1);
var seq__32439__$2 = cljs.core.next(seq__32439__$1);
var np = first__32440__$1;
var nc = seq__32439__$2;
var node = vec__32438;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32442 = nn;
var G__32443 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32442,G__32443) : create_fn.call(null,G__32442,G__32443));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32446 = nn;
var G__32447 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32446,G__32447) : create_fn.call(null,G__32446,G__32447));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32452 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(1),null);
var seq__32456_33085 = cljs.core.seq(node_children);
var chunk__32457_33086 = null;
var count__32458_33087 = (0);
var i__32459_33088 = (0);
while(true){
if((i__32459_33088 < count__32458_33087)){
var child_struct_33089 = chunk__32457_33086.cljs$core$IIndexed$_nth$arity$2(null,i__32459_33088);
var children_33090 = shadow.dom.dom_node(child_struct_33089);
if(cljs.core.seq_QMARK_(children_33090)){
var seq__32476_33091 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33090));
var chunk__32478_33092 = null;
var count__32479_33093 = (0);
var i__32480_33094 = (0);
while(true){
if((i__32480_33094 < count__32479_33093)){
var child_33095 = chunk__32478_33092.cljs$core$IIndexed$_nth$arity$2(null,i__32480_33094);
if(cljs.core.truth_(child_33095)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33095);


var G__33096 = seq__32476_33091;
var G__33097 = chunk__32478_33092;
var G__33098 = count__32479_33093;
var G__33099 = (i__32480_33094 + (1));
seq__32476_33091 = G__33096;
chunk__32478_33092 = G__33097;
count__32479_33093 = G__33098;
i__32480_33094 = G__33099;
continue;
} else {
var G__33100 = seq__32476_33091;
var G__33101 = chunk__32478_33092;
var G__33102 = count__32479_33093;
var G__33103 = (i__32480_33094 + (1));
seq__32476_33091 = G__33100;
chunk__32478_33092 = G__33101;
count__32479_33093 = G__33102;
i__32480_33094 = G__33103;
continue;
}
} else {
var temp__5735__auto___33104 = cljs.core.seq(seq__32476_33091);
if(temp__5735__auto___33104){
var seq__32476_33105__$1 = temp__5735__auto___33104;
if(cljs.core.chunked_seq_QMARK_(seq__32476_33105__$1)){
var c__4556__auto___33106 = cljs.core.chunk_first(seq__32476_33105__$1);
var G__33107 = cljs.core.chunk_rest(seq__32476_33105__$1);
var G__33108 = c__4556__auto___33106;
var G__33109 = cljs.core.count(c__4556__auto___33106);
var G__33110 = (0);
seq__32476_33091 = G__33107;
chunk__32478_33092 = G__33108;
count__32479_33093 = G__33109;
i__32480_33094 = G__33110;
continue;
} else {
var child_33111 = cljs.core.first(seq__32476_33105__$1);
if(cljs.core.truth_(child_33111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33111);


var G__33112 = cljs.core.next(seq__32476_33105__$1);
var G__33113 = null;
var G__33114 = (0);
var G__33115 = (0);
seq__32476_33091 = G__33112;
chunk__32478_33092 = G__33113;
count__32479_33093 = G__33114;
i__32480_33094 = G__33115;
continue;
} else {
var G__33116 = cljs.core.next(seq__32476_33105__$1);
var G__33117 = null;
var G__33118 = (0);
var G__33119 = (0);
seq__32476_33091 = G__33116;
chunk__32478_33092 = G__33117;
count__32479_33093 = G__33118;
i__32480_33094 = G__33119;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33090);
}


var G__33120 = seq__32456_33085;
var G__33121 = chunk__32457_33086;
var G__33122 = count__32458_33087;
var G__33123 = (i__32459_33088 + (1));
seq__32456_33085 = G__33120;
chunk__32457_33086 = G__33121;
count__32458_33087 = G__33122;
i__32459_33088 = G__33123;
continue;
} else {
var temp__5735__auto___33124 = cljs.core.seq(seq__32456_33085);
if(temp__5735__auto___33124){
var seq__32456_33125__$1 = temp__5735__auto___33124;
if(cljs.core.chunked_seq_QMARK_(seq__32456_33125__$1)){
var c__4556__auto___33126 = cljs.core.chunk_first(seq__32456_33125__$1);
var G__33127 = cljs.core.chunk_rest(seq__32456_33125__$1);
var G__33128 = c__4556__auto___33126;
var G__33129 = cljs.core.count(c__4556__auto___33126);
var G__33130 = (0);
seq__32456_33085 = G__33127;
chunk__32457_33086 = G__33128;
count__32458_33087 = G__33129;
i__32459_33088 = G__33130;
continue;
} else {
var child_struct_33131 = cljs.core.first(seq__32456_33125__$1);
var children_33132 = shadow.dom.dom_node(child_struct_33131);
if(cljs.core.seq_QMARK_(children_33132)){
var seq__32488_33133 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33132));
var chunk__32490_33134 = null;
var count__32491_33135 = (0);
var i__32492_33136 = (0);
while(true){
if((i__32492_33136 < count__32491_33135)){
var child_33137 = chunk__32490_33134.cljs$core$IIndexed$_nth$arity$2(null,i__32492_33136);
if(cljs.core.truth_(child_33137)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33137);


var G__33138 = seq__32488_33133;
var G__33139 = chunk__32490_33134;
var G__33140 = count__32491_33135;
var G__33141 = (i__32492_33136 + (1));
seq__32488_33133 = G__33138;
chunk__32490_33134 = G__33139;
count__32491_33135 = G__33140;
i__32492_33136 = G__33141;
continue;
} else {
var G__33142 = seq__32488_33133;
var G__33143 = chunk__32490_33134;
var G__33144 = count__32491_33135;
var G__33145 = (i__32492_33136 + (1));
seq__32488_33133 = G__33142;
chunk__32490_33134 = G__33143;
count__32491_33135 = G__33144;
i__32492_33136 = G__33145;
continue;
}
} else {
var temp__5735__auto___33146__$1 = cljs.core.seq(seq__32488_33133);
if(temp__5735__auto___33146__$1){
var seq__32488_33147__$1 = temp__5735__auto___33146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32488_33147__$1)){
var c__4556__auto___33148 = cljs.core.chunk_first(seq__32488_33147__$1);
var G__33149 = cljs.core.chunk_rest(seq__32488_33147__$1);
var G__33150 = c__4556__auto___33148;
var G__33151 = cljs.core.count(c__4556__auto___33148);
var G__33152 = (0);
seq__32488_33133 = G__33149;
chunk__32490_33134 = G__33150;
count__32491_33135 = G__33151;
i__32492_33136 = G__33152;
continue;
} else {
var child_33153 = cljs.core.first(seq__32488_33147__$1);
if(cljs.core.truth_(child_33153)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33153);


var G__33154 = cljs.core.next(seq__32488_33147__$1);
var G__33155 = null;
var G__33156 = (0);
var G__33157 = (0);
seq__32488_33133 = G__33154;
chunk__32490_33134 = G__33155;
count__32491_33135 = G__33156;
i__32492_33136 = G__33157;
continue;
} else {
var G__33158 = cljs.core.next(seq__32488_33147__$1);
var G__33159 = null;
var G__33160 = (0);
var G__33161 = (0);
seq__32488_33133 = G__33158;
chunk__32490_33134 = G__33159;
count__32491_33135 = G__33160;
i__32492_33136 = G__33161;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33132);
}


var G__33162 = cljs.core.next(seq__32456_33125__$1);
var G__33163 = null;
var G__33164 = (0);
var G__33165 = (0);
seq__32456_33085 = G__33162;
chunk__32457_33086 = G__33163;
count__32458_33087 = G__33164;
i__32459_33088 = G__33165;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32502 = cljs.core.seq(node);
var chunk__32503 = null;
var count__32504 = (0);
var i__32505 = (0);
while(true){
if((i__32505 < count__32504)){
var n = chunk__32503.cljs$core$IIndexed$_nth$arity$2(null,i__32505);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33166 = seq__32502;
var G__33167 = chunk__32503;
var G__33168 = count__32504;
var G__33169 = (i__32505 + (1));
seq__32502 = G__33166;
chunk__32503 = G__33167;
count__32504 = G__33168;
i__32505 = G__33169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32502);
if(temp__5735__auto__){
var seq__32502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32502__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32502__$1);
var G__33170 = cljs.core.chunk_rest(seq__32502__$1);
var G__33171 = c__4556__auto__;
var G__33172 = cljs.core.count(c__4556__auto__);
var G__33173 = (0);
seq__32502 = G__33170;
chunk__32503 = G__33171;
count__32504 = G__33172;
i__32505 = G__33173;
continue;
} else {
var n = cljs.core.first(seq__32502__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33188 = cljs.core.next(seq__32502__$1);
var G__33189 = null;
var G__33190 = (0);
var G__33191 = (0);
seq__32502 = G__33188;
chunk__32503 = G__33189;
count__32504 = G__33190;
i__32505 = G__33191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32541 = arguments.length;
switch (G__32541) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32560 = arguments.length;
switch (G__32560) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32586 = arguments.length;
switch (G__32586) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33195 = arguments.length;
var i__4737__auto___33196 = (0);
while(true){
if((i__4737__auto___33196 < len__4736__auto___33195)){
args__4742__auto__.push((arguments[i__4737__auto___33196]));

var G__33197 = (i__4737__auto___33196 + (1));
i__4737__auto___33196 = G__33197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32610_33198 = cljs.core.seq(nodes);
var chunk__32611_33199 = null;
var count__32612_33200 = (0);
var i__32613_33201 = (0);
while(true){
if((i__32613_33201 < count__32612_33200)){
var node_33202 = chunk__32611_33199.cljs$core$IIndexed$_nth$arity$2(null,i__32613_33201);
fragment.appendChild(shadow.dom._to_dom(node_33202));


var G__33203 = seq__32610_33198;
var G__33204 = chunk__32611_33199;
var G__33205 = count__32612_33200;
var G__33206 = (i__32613_33201 + (1));
seq__32610_33198 = G__33203;
chunk__32611_33199 = G__33204;
count__32612_33200 = G__33205;
i__32613_33201 = G__33206;
continue;
} else {
var temp__5735__auto___33207 = cljs.core.seq(seq__32610_33198);
if(temp__5735__auto___33207){
var seq__32610_33208__$1 = temp__5735__auto___33207;
if(cljs.core.chunked_seq_QMARK_(seq__32610_33208__$1)){
var c__4556__auto___33209 = cljs.core.chunk_first(seq__32610_33208__$1);
var G__33210 = cljs.core.chunk_rest(seq__32610_33208__$1);
var G__33211 = c__4556__auto___33209;
var G__33212 = cljs.core.count(c__4556__auto___33209);
var G__33213 = (0);
seq__32610_33198 = G__33210;
chunk__32611_33199 = G__33211;
count__32612_33200 = G__33212;
i__32613_33201 = G__33213;
continue;
} else {
var node_33214 = cljs.core.first(seq__32610_33208__$1);
fragment.appendChild(shadow.dom._to_dom(node_33214));


var G__33215 = cljs.core.next(seq__32610_33208__$1);
var G__33216 = null;
var G__33217 = (0);
var G__33218 = (0);
seq__32610_33198 = G__33215;
chunk__32611_33199 = G__33216;
count__32612_33200 = G__33217;
i__32613_33201 = G__33218;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32607){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32607));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32618_33219 = cljs.core.seq(scripts);
var chunk__32619_33220 = null;
var count__32620_33221 = (0);
var i__32621_33222 = (0);
while(true){
if((i__32621_33222 < count__32620_33221)){
var vec__32628_33223 = chunk__32619_33220.cljs$core$IIndexed$_nth$arity$2(null,i__32621_33222);
var script_tag_33224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628_33223,(0),null);
var script_body_33225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628_33223,(1),null);
eval(script_body_33225);


var G__33226 = seq__32618_33219;
var G__33227 = chunk__32619_33220;
var G__33228 = count__32620_33221;
var G__33229 = (i__32621_33222 + (1));
seq__32618_33219 = G__33226;
chunk__32619_33220 = G__33227;
count__32620_33221 = G__33228;
i__32621_33222 = G__33229;
continue;
} else {
var temp__5735__auto___33230 = cljs.core.seq(seq__32618_33219);
if(temp__5735__auto___33230){
var seq__32618_33231__$1 = temp__5735__auto___33230;
if(cljs.core.chunked_seq_QMARK_(seq__32618_33231__$1)){
var c__4556__auto___33232 = cljs.core.chunk_first(seq__32618_33231__$1);
var G__33233 = cljs.core.chunk_rest(seq__32618_33231__$1);
var G__33234 = c__4556__auto___33232;
var G__33235 = cljs.core.count(c__4556__auto___33232);
var G__33236 = (0);
seq__32618_33219 = G__33233;
chunk__32619_33220 = G__33234;
count__32620_33221 = G__33235;
i__32621_33222 = G__33236;
continue;
} else {
var vec__32648_33237 = cljs.core.first(seq__32618_33231__$1);
var script_tag_33238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648_33237,(0),null);
var script_body_33239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648_33237,(1),null);
eval(script_body_33239);


var G__33240 = cljs.core.next(seq__32618_33231__$1);
var G__33241 = null;
var G__33242 = (0);
var G__33243 = (0);
seq__32618_33219 = G__33240;
chunk__32619_33220 = G__33241;
count__32620_33221 = G__33242;
i__32621_33222 = G__33243;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32651){
var vec__32652 = p__32651;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32656 = arguments.length;
switch (G__32656) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32673 = cljs.core.seq(style_keys);
var chunk__32674 = null;
var count__32675 = (0);
var i__32676 = (0);
while(true){
if((i__32676 < count__32675)){
var it = chunk__32674.cljs$core$IIndexed$_nth$arity$2(null,i__32676);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33245 = seq__32673;
var G__33246 = chunk__32674;
var G__33247 = count__32675;
var G__33248 = (i__32676 + (1));
seq__32673 = G__33245;
chunk__32674 = G__33246;
count__32675 = G__33247;
i__32676 = G__33248;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32673);
if(temp__5735__auto__){
var seq__32673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32673__$1);
var G__33249 = cljs.core.chunk_rest(seq__32673__$1);
var G__33250 = c__4556__auto__;
var G__33251 = cljs.core.count(c__4556__auto__);
var G__33252 = (0);
seq__32673 = G__33249;
chunk__32674 = G__33250;
count__32675 = G__33251;
i__32676 = G__33252;
continue;
} else {
var it = cljs.core.first(seq__32673__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33253 = cljs.core.next(seq__32673__$1);
var G__33254 = null;
var G__33255 = (0);
var G__33256 = (0);
seq__32673 = G__33253;
chunk__32674 = G__33254;
count__32675 = G__33255;
i__32676 = G__33256;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32678,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32688 = k32678;
var G__32688__$1 = (((G__32688 instanceof cljs.core.Keyword))?G__32688.fqn:null);
switch (G__32688__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32678,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32689){
var vec__32690 = p__32689;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32690,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32690,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32677){
var self__ = this;
var G__32677__$1 = this;
return (new cljs.core.RecordIter((0),G__32677__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32679,other32680){
var self__ = this;
var this32679__$1 = this;
return (((!((other32680 == null)))) && ((this32679__$1.constructor === other32680.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32679__$1.x,other32680.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32679__$1.y,other32680.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32679__$1.__extmap,other32680.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32677){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32696 = cljs.core.keyword_identical_QMARK_;
var expr__32697 = k__4388__auto__;
if(cljs.core.truth_((pred__32696.cljs$core$IFn$_invoke$arity$2 ? pred__32696.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32697) : pred__32696.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32697)))){
return (new shadow.dom.Coordinate(G__32677,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32696.cljs$core$IFn$_invoke$arity$2 ? pred__32696.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32697) : pred__32696.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32697)))){
return (new shadow.dom.Coordinate(self__.x,G__32677,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32677),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32677){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32677,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32681){
var extmap__4419__auto__ = (function (){var G__32707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32681,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32681)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32707);
} else {
return G__32707;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32681),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32681),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32742,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32751 = k32742;
var G__32751__$1 = (((G__32751 instanceof cljs.core.Keyword))?G__32751.fqn:null);
switch (G__32751__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32742,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32752){
var vec__32753 = p__32752;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32753,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32753,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32741){
var self__ = this;
var G__32741__$1 = this;
return (new cljs.core.RecordIter((0),G__32741__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32743,other32744){
var self__ = this;
var this32743__$1 = this;
return (((!((other32744 == null)))) && ((this32743__$1.constructor === other32744.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32743__$1.w,other32744.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32743__$1.h,other32744.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32743__$1.__extmap,other32744.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32741){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32765 = cljs.core.keyword_identical_QMARK_;
var expr__32766 = k__4388__auto__;
if(cljs.core.truth_((pred__32765.cljs$core$IFn$_invoke$arity$2 ? pred__32765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32766) : pred__32765.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32766)))){
return (new shadow.dom.Size(G__32741,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32765.cljs$core$IFn$_invoke$arity$2 ? pred__32765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32766) : pred__32765.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32766)))){
return (new shadow.dom.Size(self__.w,G__32741,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32741),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32741){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32741,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32746){
var extmap__4419__auto__ = (function (){var G__32779 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32746,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32746)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32779);
} else {
return G__32779;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32746),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32746),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33286 = (i + (1));
var G__33287 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33286;
ret = G__33287;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32802){
var vec__32804 = p__32802;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32808 = arguments.length;
switch (G__32808) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33292 = ps;
var G__33293 = (i + (1));
el__$1 = G__33292;
i = G__33293;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32835 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32838_33301 = cljs.core.seq(props);
var chunk__32839_33302 = null;
var count__32840_33303 = (0);
var i__32841_33304 = (0);
while(true){
if((i__32841_33304 < count__32840_33303)){
var vec__32848_33305 = chunk__32839_33302.cljs$core$IIndexed$_nth$arity$2(null,i__32841_33304);
var k_33306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848_33305,(0),null);
var v_33307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848_33305,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33306);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33306),v_33307);


var G__33308 = seq__32838_33301;
var G__33309 = chunk__32839_33302;
var G__33310 = count__32840_33303;
var G__33311 = (i__32841_33304 + (1));
seq__32838_33301 = G__33308;
chunk__32839_33302 = G__33309;
count__32840_33303 = G__33310;
i__32841_33304 = G__33311;
continue;
} else {
var temp__5735__auto___33312 = cljs.core.seq(seq__32838_33301);
if(temp__5735__auto___33312){
var seq__32838_33313__$1 = temp__5735__auto___33312;
if(cljs.core.chunked_seq_QMARK_(seq__32838_33313__$1)){
var c__4556__auto___33314 = cljs.core.chunk_first(seq__32838_33313__$1);
var G__33315 = cljs.core.chunk_rest(seq__32838_33313__$1);
var G__33316 = c__4556__auto___33314;
var G__33317 = cljs.core.count(c__4556__auto___33314);
var G__33318 = (0);
seq__32838_33301 = G__33315;
chunk__32839_33302 = G__33316;
count__32840_33303 = G__33317;
i__32841_33304 = G__33318;
continue;
} else {
var vec__32855_33319 = cljs.core.first(seq__32838_33313__$1);
var k_33320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32855_33319,(0),null);
var v_33321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32855_33319,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33320);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33320),v_33321);


var G__33322 = cljs.core.next(seq__32838_33313__$1);
var G__33323 = null;
var G__33324 = (0);
var G__33325 = (0);
seq__32838_33301 = G__33322;
chunk__32839_33302 = G__33323;
count__32840_33303 = G__33324;
i__32841_33304 = G__33325;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32862 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32862,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32862,(1),null);
var seq__32866_33329 = cljs.core.seq(node_children);
var chunk__32868_33330 = null;
var count__32869_33331 = (0);
var i__32870_33332 = (0);
while(true){
if((i__32870_33332 < count__32869_33331)){
var child_struct_33333 = chunk__32868_33330.cljs$core$IIndexed$_nth$arity$2(null,i__32870_33332);
if((!((child_struct_33333 == null)))){
if(typeof child_struct_33333 === 'string'){
var text_33334 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33334),child_struct_33333].join(''));
} else {
var children_33335 = shadow.dom.svg_node(child_struct_33333);
if(cljs.core.seq_QMARK_(children_33335)){
var seq__32891_33336 = cljs.core.seq(children_33335);
var chunk__32893_33337 = null;
var count__32894_33338 = (0);
var i__32895_33339 = (0);
while(true){
if((i__32895_33339 < count__32894_33338)){
var child_33340 = chunk__32893_33337.cljs$core$IIndexed$_nth$arity$2(null,i__32895_33339);
if(cljs.core.truth_(child_33340)){
node.appendChild(child_33340);


var G__33342 = seq__32891_33336;
var G__33343 = chunk__32893_33337;
var G__33344 = count__32894_33338;
var G__33345 = (i__32895_33339 + (1));
seq__32891_33336 = G__33342;
chunk__32893_33337 = G__33343;
count__32894_33338 = G__33344;
i__32895_33339 = G__33345;
continue;
} else {
var G__33346 = seq__32891_33336;
var G__33347 = chunk__32893_33337;
var G__33348 = count__32894_33338;
var G__33349 = (i__32895_33339 + (1));
seq__32891_33336 = G__33346;
chunk__32893_33337 = G__33347;
count__32894_33338 = G__33348;
i__32895_33339 = G__33349;
continue;
}
} else {
var temp__5735__auto___33351 = cljs.core.seq(seq__32891_33336);
if(temp__5735__auto___33351){
var seq__32891_33352__$1 = temp__5735__auto___33351;
if(cljs.core.chunked_seq_QMARK_(seq__32891_33352__$1)){
var c__4556__auto___33353 = cljs.core.chunk_first(seq__32891_33352__$1);
var G__33354 = cljs.core.chunk_rest(seq__32891_33352__$1);
var G__33355 = c__4556__auto___33353;
var G__33356 = cljs.core.count(c__4556__auto___33353);
var G__33357 = (0);
seq__32891_33336 = G__33354;
chunk__32893_33337 = G__33355;
count__32894_33338 = G__33356;
i__32895_33339 = G__33357;
continue;
} else {
var child_33358 = cljs.core.first(seq__32891_33352__$1);
if(cljs.core.truth_(child_33358)){
node.appendChild(child_33358);


var G__33359 = cljs.core.next(seq__32891_33352__$1);
var G__33360 = null;
var G__33361 = (0);
var G__33362 = (0);
seq__32891_33336 = G__33359;
chunk__32893_33337 = G__33360;
count__32894_33338 = G__33361;
i__32895_33339 = G__33362;
continue;
} else {
var G__33363 = cljs.core.next(seq__32891_33352__$1);
var G__33364 = null;
var G__33365 = (0);
var G__33366 = (0);
seq__32891_33336 = G__33363;
chunk__32893_33337 = G__33364;
count__32894_33338 = G__33365;
i__32895_33339 = G__33366;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33335);
}
}


var G__33367 = seq__32866_33329;
var G__33368 = chunk__32868_33330;
var G__33369 = count__32869_33331;
var G__33370 = (i__32870_33332 + (1));
seq__32866_33329 = G__33367;
chunk__32868_33330 = G__33368;
count__32869_33331 = G__33369;
i__32870_33332 = G__33370;
continue;
} else {
var G__33371 = seq__32866_33329;
var G__33372 = chunk__32868_33330;
var G__33373 = count__32869_33331;
var G__33374 = (i__32870_33332 + (1));
seq__32866_33329 = G__33371;
chunk__32868_33330 = G__33372;
count__32869_33331 = G__33373;
i__32870_33332 = G__33374;
continue;
}
} else {
var temp__5735__auto___33375 = cljs.core.seq(seq__32866_33329);
if(temp__5735__auto___33375){
var seq__32866_33376__$1 = temp__5735__auto___33375;
if(cljs.core.chunked_seq_QMARK_(seq__32866_33376__$1)){
var c__4556__auto___33377 = cljs.core.chunk_first(seq__32866_33376__$1);
var G__33378 = cljs.core.chunk_rest(seq__32866_33376__$1);
var G__33379 = c__4556__auto___33377;
var G__33380 = cljs.core.count(c__4556__auto___33377);
var G__33381 = (0);
seq__32866_33329 = G__33378;
chunk__32868_33330 = G__33379;
count__32869_33331 = G__33380;
i__32870_33332 = G__33381;
continue;
} else {
var child_struct_33382 = cljs.core.first(seq__32866_33376__$1);
if((!((child_struct_33382 == null)))){
if(typeof child_struct_33382 === 'string'){
var text_33384 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33384),child_struct_33382].join(''));
} else {
var children_33385 = shadow.dom.svg_node(child_struct_33382);
if(cljs.core.seq_QMARK_(children_33385)){
var seq__32904_33386 = cljs.core.seq(children_33385);
var chunk__32906_33387 = null;
var count__32907_33388 = (0);
var i__32908_33389 = (0);
while(true){
if((i__32908_33389 < count__32907_33388)){
var child_33390 = chunk__32906_33387.cljs$core$IIndexed$_nth$arity$2(null,i__32908_33389);
if(cljs.core.truth_(child_33390)){
node.appendChild(child_33390);


var G__33391 = seq__32904_33386;
var G__33392 = chunk__32906_33387;
var G__33393 = count__32907_33388;
var G__33394 = (i__32908_33389 + (1));
seq__32904_33386 = G__33391;
chunk__32906_33387 = G__33392;
count__32907_33388 = G__33393;
i__32908_33389 = G__33394;
continue;
} else {
var G__33395 = seq__32904_33386;
var G__33396 = chunk__32906_33387;
var G__33397 = count__32907_33388;
var G__33398 = (i__32908_33389 + (1));
seq__32904_33386 = G__33395;
chunk__32906_33387 = G__33396;
count__32907_33388 = G__33397;
i__32908_33389 = G__33398;
continue;
}
} else {
var temp__5735__auto___33399__$1 = cljs.core.seq(seq__32904_33386);
if(temp__5735__auto___33399__$1){
var seq__32904_33400__$1 = temp__5735__auto___33399__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32904_33400__$1)){
var c__4556__auto___33401 = cljs.core.chunk_first(seq__32904_33400__$1);
var G__33406 = cljs.core.chunk_rest(seq__32904_33400__$1);
var G__33407 = c__4556__auto___33401;
var G__33408 = cljs.core.count(c__4556__auto___33401);
var G__33409 = (0);
seq__32904_33386 = G__33406;
chunk__32906_33387 = G__33407;
count__32907_33388 = G__33408;
i__32908_33389 = G__33409;
continue;
} else {
var child_33410 = cljs.core.first(seq__32904_33400__$1);
if(cljs.core.truth_(child_33410)){
node.appendChild(child_33410);


var G__33412 = cljs.core.next(seq__32904_33400__$1);
var G__33413 = null;
var G__33414 = (0);
var G__33415 = (0);
seq__32904_33386 = G__33412;
chunk__32906_33387 = G__33413;
count__32907_33388 = G__33414;
i__32908_33389 = G__33415;
continue;
} else {
var G__33416 = cljs.core.next(seq__32904_33400__$1);
var G__33417 = null;
var G__33418 = (0);
var G__33419 = (0);
seq__32904_33386 = G__33416;
chunk__32906_33387 = G__33417;
count__32907_33388 = G__33418;
i__32908_33389 = G__33419;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33385);
}
}


var G__33420 = cljs.core.next(seq__32866_33376__$1);
var G__33421 = null;
var G__33422 = (0);
var G__33423 = (0);
seq__32866_33329 = G__33420;
chunk__32868_33330 = G__33421;
count__32869_33331 = G__33422;
i__32870_33332 = G__33423;
continue;
} else {
var G__33424 = cljs.core.next(seq__32866_33376__$1);
var G__33425 = null;
var G__33426 = (0);
var G__33427 = (0);
seq__32866_33329 = G__33424;
chunk__32868_33330 = G__33425;
count__32869_33331 = G__33426;
i__32870_33332 = G__33427;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33429 = arguments.length;
var i__4737__auto___33430 = (0);
while(true){
if((i__4737__auto___33430 < len__4736__auto___33429)){
args__4742__auto__.push((arguments[i__4737__auto___33430]));

var G__33431 = (i__4737__auto___33430 + (1));
i__4737__auto___33430 = G__33431;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32910){
var G__32911 = cljs.core.first(seq32910);
var seq32910__$1 = cljs.core.next(seq32910);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32911,seq32910__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32925 = arguments.length;
switch (G__32925) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30274__auto___33437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30275__auto__ = (function (){var switch__29922__auto__ = (function (state_32948){
var state_val_32949 = (state_32948[(1)]);
if((state_val_32949 === (1))){
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32948__$1,(2),once_or_cleanup);
} else {
if((state_val_32949 === (2))){
var inst_32945 = (state_32948[(2)]);
var inst_32946 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32948__$1 = (function (){var statearr_32954 = state_32948;
(statearr_32954[(7)] = inst_32945);

return statearr_32954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32948__$1,inst_32946);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29923__auto__ = null;
var shadow$dom$state_machine__29923__auto____0 = (function (){
var statearr_32958 = [null,null,null,null,null,null,null,null];
(statearr_32958[(0)] = shadow$dom$state_machine__29923__auto__);

(statearr_32958[(1)] = (1));

return statearr_32958;
});
var shadow$dom$state_machine__29923__auto____1 = (function (state_32948){
while(true){
var ret_value__29924__auto__ = (function (){try{while(true){
var result__29925__auto__ = switch__29922__auto__(state_32948);
if(cljs.core.keyword_identical_QMARK_(result__29925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29925__auto__;
}
break;
}
}catch (e32959){var ex__29926__auto__ = e32959;
var statearr_32960_33438 = state_32948;
(statearr_32960_33438[(2)] = ex__29926__auto__);


if(cljs.core.seq((state_32948[(4)]))){
var statearr_32961_33439 = state_32948;
(statearr_32961_33439[(1)] = cljs.core.first((state_32948[(4)])));

} else {
throw ex__29926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_32948;
state_32948 = G__33440;
continue;
} else {
return ret_value__29924__auto__;
}
break;
}
});
shadow$dom$state_machine__29923__auto__ = function(state_32948){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29923__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29923__auto____1.call(this,state_32948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29923__auto____0;
shadow$dom$state_machine__29923__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29923__auto____1;
return shadow$dom$state_machine__29923__auto__;
})()
})();
var state__30276__auto__ = (function (){var statearr_32963 = f__30275__auto__();
(statearr_32963[(6)] = c__30274__auto___33437);

return statearr_32963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30276__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
