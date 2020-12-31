goog.provide('comp.calculator');
comp.calculator.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"0",new cljs.core.Keyword(null,"operation","operation",-1267664310),"",new cljs.core.Keyword(null,"del-display","del-display",848825222),false,new cljs.core.Keyword(null,"buffer","buffer",617295198),""], null));
comp.calculator.check_delete_display = (function comp$calculator$check_delete_display(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"del-display","del-display",848825222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),"0");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"del-display","del-display",848825222),false);
} else {
return null;
}
});
comp.calculator.add_num = (function comp$calculator$add_num(symbol){
comp.calculator.check_delete_display();

var num = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state));
var added = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",num))?symbol:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)].join(''));
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),added);
return null;
});
comp.calculator.s_PERCENT_f = (function comp$calculator$s_PERCENT_f(precision,num){
return goog.string.format(["%.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(precision),"f"].join(''),num);
});
comp.calculator.adapt_size = (function comp$calculator$adapt_size(num){
var max = (8);
var str_num = cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
var len = ((str_num).length);
var pnt = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(str_num,".");
if((len > max)){
if((pnt == null)){
return "OVERFOW";
} else {
if((pnt > max)){
return "OVERFLOW";
} else {
return comp.calculator.s_PERCENT_f((max - pnt),num);
}
}
} else {
return str_num;
}
});
comp.calculator.str_calc_a_op_b = (function comp$calculator$str_calc_a_op_b(the_op,the_a,the_b){
console.log("operation: ",the_op," ",the_a," ",the_b);

var a = parseFloat(the_a);
var b = parseFloat(the_b);
return comp.calculator.adapt_size((function (){var G__27104 = the_op;
switch (G__27104) {
case "+":
return (a + b);

break;
case "-":
return (a - b);

break;
case "x":
return (a * b);

break;
case "/":
return (a / b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27104)].join('')));

}
})());
});
comp.calculator.calc_op = (function comp$calculator$calc_op(symbol){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)))){
console.log("in when");

var result_27107 = comp.calculator.str_calc_a_op_b(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)),new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),result_27107);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"operation","operation",-1267664310),symbol);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"del-display","del-display",848825222),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)));
});
comp.calculator.the_EQ_ = (function comp$calculator$the_EQ_(){
return comp.calculator.calc_op("");
});
comp.calculator.operation = (function comp$calculator$operation(symbol){
var G__27105 = symbol;
switch (G__27105) {
case "C":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"operation","operation",-1267664310),"");
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),"0");
}

break;
case "%":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),comp.calculator.str_calc_a_op_b("/",new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)),"100"));

break;
case "+/-":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp.calculator.state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),comp.calculator.str_calc_a_op_b("-","0",new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state))));

break;
case "=":
return comp.calculator.the_EQ_();

break;
default:
return comp.calculator.calc_op(symbol);

}
});
comp.calculator.get_op_color = (function comp$calculator$get_op_color(symbol,default$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(symbol,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state)))){
return "black";
} else {
return default$;
}
});
comp.calculator.display = (function comp$calculator$display(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display","div.display",-313156596),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp.calculator.state))], null);
});
comp.calculator.anop = (function comp$calculator$anop(symbol,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.akey","div.akey",222309659),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),comp.calculator.get_op_color(symbol,color)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return comp.calculator.operation(symbol);
})], null),symbol], null);
});
comp.calculator.anum = (function comp$calculator$anum(symbol){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.akey","div.akey",222309659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return comp.calculator.add_num(symbol);
})], null),symbol], null);
});
comp.calculator.key0 = (function comp$calculator$key0(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.key0","div.key0",925235167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return comp.calculator.add_num("0");
})], null),"0"], null);
});
comp.calculator.akey = (function comp$calculator$akey(symbol,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.akey","div.akey",222309659),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return comp.calculator.add_num(symbol);
})], null),symbol], null);
});
comp.calculator.calc = (function comp$calculator$calc(heading){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),heading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.display], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"C","lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"+/-","lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"%","lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"/","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"9"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"x","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"6"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"-","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"+","orange"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.key0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.akey,"."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.calculator.anop,"=","orange"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://gist.github.com/bennoloeffler/f33c61b2d8ba0dd5dc9c396a6ced8482"], null),"source"], null)], null);
});

//# sourceMappingURL=comp.calculator.js.map
