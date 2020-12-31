goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26061__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26062__i = 0, G__26062__a = new Array(arguments.length -  0);
while (G__26062__i < G__26062__a.length) {G__26062__a[G__26062__i] = arguments[G__26062__i + 0]; ++G__26062__i;}
  args = new cljs.core.IndexedSeq(G__26062__a,0,null);
} 
return G__26061__delegate.call(this,args);};
G__26061.cljs$lang$maxFixedArity = 0;
G__26061.cljs$lang$applyTo = (function (arglist__26063){
var args = cljs.core.seq(arglist__26063);
return G__26061__delegate(args);
});
G__26061.cljs$core$IFn$_invoke$arity$variadic = G__26061__delegate;
return G__26061;
})()
);

(o.error = (function() { 
var G__26064__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26066__i = 0, G__26066__a = new Array(arguments.length -  0);
while (G__26066__i < G__26066__a.length) {G__26066__a[G__26066__i] = arguments[G__26066__i + 0]; ++G__26066__i;}
  args = new cljs.core.IndexedSeq(G__26066__a,0,null);
} 
return G__26064__delegate.call(this,args);};
G__26064.cljs$lang$maxFixedArity = 0;
G__26064.cljs$lang$applyTo = (function (arglist__26067){
var args = cljs.core.seq(arglist__26067);
return G__26064__delegate(args);
});
G__26064.cljs$core$IFn$_invoke$arity$variadic = G__26064__delegate;
return G__26064;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
