goog.provide('comp.click_counter');
comp.click_counter.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
comp.click_counter.click_counter = (function comp$click_counter$click_counter(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"click!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(comp.click_counter.counter,cljs.core.inc);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)," @counter"], null)," has value: ",cljs.core.deref(comp.click_counter.counter)], null);
});

//# sourceMappingURL=comp.click_counter.js.map
