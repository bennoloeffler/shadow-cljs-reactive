goog.provide('starter.calculator');
starter.calculator.calc_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"0",new cljs.core.Keyword(null,"del-display","del-display",848825222),false,new cljs.core.Keyword(null,"buffer","buffer",617295198),"",new cljs.core.Keyword(null,"operation","operation",-1267664310),""], null));
starter.calculator.display = (function starter$calculator$display(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display","div.display",-313156596),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state))], null);
});
starter.calculator.check_delete_display = (function starter$calculator$check_delete_display(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"del-display","del-display",848825222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),"0");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"del-display","del-display",848825222),false);
} else {
return null;
}
});
starter.calculator.add_num = (function starter$calculator$add_num(symbol){
starter.calculator.check_delete_display();

var num = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state));
var added = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",num))?symbol:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)].join(''));
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),added);
return null;
});
starter.calculator.str_calc_a_op_b = (function starter$calculator$str_calc_a_op_b(op,a,b){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__40235 = parseFloat(a);
var G__40236 = parseFloat(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__40235,G__40236) : op.call(null,G__40235,G__40236));
})());
});
starter.calculator.the_EQ_ = (function starter$calculator$the_EQ_(){
return null;
});
starter.calculator.calc_op = (function starter$calculator$calc_op(symbol){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"operation","operation",-1267664310),symbol);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"del-display","del-display",848825222),true);
});
starter.calculator.operation = (function starter$calculator$operation(symbol){
var G__40237 = symbol;
switch (G__40237) {
case "C":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"operation","operation",-1267664310),"");
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),"0");
}

break;
case "%":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),starter.calculator.str_calc_a_op_b(cljs.core._SLASH_,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state)),"100"));

break;
case "+/-":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(starter.calculator.calc_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),starter.calculator.str_calc_a_op_b(cljs.core._,"0",new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state))));

break;
case "=":
return starter.calculator.the_EQ_();

break;
default:
return starter.calculator.calc_op(symbol);

}
});
starter.calculator.get_op_color = (function starter$calculator$get_op_color(symbol,default$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(symbol,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(starter.calculator.calc_state)))){
return "black";
} else {
return default$;
}
});
starter.calculator.anop = (function starter$calculator$anop(symbol,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.akey","div.akey",222309659),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),starter.calculator.get_op_color(symbol,color)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return starter.calculator.operation(symbol);
})], null),symbol], null);
});
starter.calculator.anum = (function starter$calculator$anum(symbol){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.akey","div.akey",222309659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return starter.calculator.add_num(symbol);
})], null),symbol], null);
});
starter.calculator.key0 = (function starter$calculator$key0(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.key0","div.key0",925235167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return starter.calculator.add_num("0");
})], null),"0"], null);
});
starter.calculator.akey = (function starter$calculator$akey(symbol,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.akey","div.akey",222309659),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return starter.calculator.add_num(symbol);
})], null),symbol], null);
});
starter.calculator.calc = (function starter$calculator$calc(heading){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),heading,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),(4)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.display], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"C","lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"+/-","lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"%","lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"/","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"9"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"x","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"6"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"-","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"+","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.key0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.akey,"."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.calculator.anop,"=","orange"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=starter.calculator.js.map
