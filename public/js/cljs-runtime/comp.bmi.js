goog.provide('comp.bmi');
comp.bmi.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kg","kg",-1868327609),(91),new cljs.core.Keyword(null,"cm","cm",540591536),(177),new cljs.core.Keyword(null,"bmi","bmi",1421979636),29.05], null));
comp.bmi.calc_kg = (function comp$bmi$calc_kg(cm,bmi){
return (bmi * ((cm / (100)) * (cm / (100))));
});
comp.bmi.calc_cm = (function comp$bmi$calc_cm(kg,bmi){
return ((100) * Math.sqrt((kg / bmi)));
});
comp.bmi.calc_bmi = (function comp$bmi$calc_bmi(kg,cm){
return (kg / ((cm / (100)) * (cm / (100))));
});
comp.bmi.s_PERCENT_f = (function comp$bmi$s_PERCENT_f(precision,num){
return goog.string.format(["%.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(precision),"f"].join(''),num);
});
comp.bmi.calc_state = (function comp$bmi$calc_state(p__27194){
var map__27195 = p__27194;
var map__27195__$1 = (((((!((map__27195 == null))))?(((((map__27195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27195):map__27195);
var kg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27195__$1,new cljs.core.Keyword(null,"kg","kg",-1868327609));
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27195__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27195__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
if((bmi == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.bmi.state,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),comp.bmi.calc_bmi(kg,cm));
} else {
if((kg == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.bmi.state,cljs.core.assoc,new cljs.core.Keyword(null,"kg","kg",-1868327609),comp.bmi.calc_kg(cm,bmi));
} else {
if((cm == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.bmi.state,cljs.core.assoc,new cljs.core.Keyword(null,"cm","cm",540591536),comp.bmi.calc_cm(kg,bmi));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.bmi.state,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),comp.bmi.calc_bmi(kg,cm));

}
}
}
});
comp.bmi.slider = (function comp$bmi$slider(sym,precision,min,max,value,invalidates){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = parseInt(e.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.bmi.state,cljs.core.assoc,sym,new_value);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.bmi.state,cljs.core.assoc,invalidates,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(comp.bmi.state,comp.bmi.calc_state,cljs.core.deref(comp.bmi.state));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),comp.bmi.s_PERCENT_f(precision,(function (){var G__27197 = cljs.core.deref(comp.bmi.state);
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27197) : sym.call(null,G__27197));
})())], null)], null);
});
comp.bmi.bmi = (function comp$bmi$bmi(){
var bmi = new cljs.core.Keyword(null,"bmi","bmi",1421979636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.bmi.state));
var vec__27198 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["too skinny","red"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["totally ok","lightgreen"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a litte fat","orange"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["definitely too fat","red"], null)
)));
var statement = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27198,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27198,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI Calculator - your are ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),statement], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"cm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.bmi.slider,new cljs.core.Keyword(null,"cm","cm",540591536),(0),(80),(240),new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.bmi.state)),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"kg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.bmi.slider,new cljs.core.Keyword(null,"kg","kg",-1868327609),(1),(20),(200),new cljs.core.Keyword(null,"kg","kg",-1868327609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.bmi.state)),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"bmi"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.bmi.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(2),(5),(70),new cljs.core.Keyword(null,"bmi","bmi",1421979636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.bmi.state)),new cljs.core.Keyword(null,"kg","kg",-1868327609)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://gist.github.com/bennoloeffler/93bb1436229f6dcb8a843505615cee4b"], null),"source"], null)], null);
});

//# sourceMappingURL=comp.bmi.js.map
