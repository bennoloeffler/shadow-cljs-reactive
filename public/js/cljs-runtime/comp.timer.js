goog.provide('comp.timer');
comp.timer.timer = (function comp$timer$timer(start){
var time_sec = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(start);
return (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(time_sec,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"seconds: ",cljs.core.deref(time_sec)], null);
});
});

//# sourceMappingURL=comp.timer.js.map
