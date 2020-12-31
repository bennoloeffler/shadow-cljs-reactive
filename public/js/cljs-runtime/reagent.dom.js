goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26518 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26519 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26519);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26520 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26521 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26521);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26520);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26518);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26523 = arguments.length;
switch (G__26523) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__26524 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26527_26544 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26528_26545 = null;
var count__26529_26546 = (0);
var i__26530_26547 = (0);
while(true){
if((i__26530_26547 < count__26529_26546)){
var vec__26537_26548 = chunk__26528_26545.cljs$core$IIndexed$_nth$arity$2(null,i__26530_26547);
var container_26549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537_26548,(0),null);
var comp_26550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537_26548,(1),null);
reagent.dom.re_render_component(comp_26550,container_26549);


var G__26551 = seq__26527_26544;
var G__26552 = chunk__26528_26545;
var G__26553 = count__26529_26546;
var G__26554 = (i__26530_26547 + (1));
seq__26527_26544 = G__26551;
chunk__26528_26545 = G__26552;
count__26529_26546 = G__26553;
i__26530_26547 = G__26554;
continue;
} else {
var temp__5735__auto___26555 = cljs.core.seq(seq__26527_26544);
if(temp__5735__auto___26555){
var seq__26527_26556__$1 = temp__5735__auto___26555;
if(cljs.core.chunked_seq_QMARK_(seq__26527_26556__$1)){
var c__4556__auto___26557 = cljs.core.chunk_first(seq__26527_26556__$1);
var G__26558 = cljs.core.chunk_rest(seq__26527_26556__$1);
var G__26559 = c__4556__auto___26557;
var G__26560 = cljs.core.count(c__4556__auto___26557);
var G__26561 = (0);
seq__26527_26544 = G__26558;
chunk__26528_26545 = G__26559;
count__26529_26546 = G__26560;
i__26530_26547 = G__26561;
continue;
} else {
var vec__26540_26562 = cljs.core.first(seq__26527_26556__$1);
var container_26563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26540_26562,(0),null);
var comp_26564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26540_26562,(1),null);
reagent.dom.re_render_component(comp_26564,container_26563);


var G__26565 = cljs.core.next(seq__26527_26556__$1);
var G__26566 = null;
var G__26567 = (0);
var G__26568 = (0);
seq__26527_26544 = G__26565;
chunk__26528_26545 = G__26566;
count__26529_26546 = G__26567;
i__26530_26547 = G__26568;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
