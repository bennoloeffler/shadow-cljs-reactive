goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35964){
var map__35965 = p__35964;
var map__35965__$1 = (((((!((map__35965 == null))))?(((((map__35965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35965):map__35965);
var m = map__35965__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35967_36181 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35968_36182 = null;
var count__35969_36183 = (0);
var i__35970_36184 = (0);
while(true){
if((i__35970_36184 < count__35969_36183)){
var f_36185 = chunk__35968_36182.cljs$core$IIndexed$_nth$arity$2(null,i__35970_36184);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36185], 0));


var G__36186 = seq__35967_36181;
var G__36187 = chunk__35968_36182;
var G__36188 = count__35969_36183;
var G__36189 = (i__35970_36184 + (1));
seq__35967_36181 = G__36186;
chunk__35968_36182 = G__36187;
count__35969_36183 = G__36188;
i__35970_36184 = G__36189;
continue;
} else {
var temp__5735__auto___36190 = cljs.core.seq(seq__35967_36181);
if(temp__5735__auto___36190){
var seq__35967_36191__$1 = temp__5735__auto___36190;
if(cljs.core.chunked_seq_QMARK_(seq__35967_36191__$1)){
var c__4556__auto___36192 = cljs.core.chunk_first(seq__35967_36191__$1);
var G__36193 = cljs.core.chunk_rest(seq__35967_36191__$1);
var G__36194 = c__4556__auto___36192;
var G__36195 = cljs.core.count(c__4556__auto___36192);
var G__36196 = (0);
seq__35967_36181 = G__36193;
chunk__35968_36182 = G__36194;
count__35969_36183 = G__36195;
i__35970_36184 = G__36196;
continue;
} else {
var f_36197 = cljs.core.first(seq__35967_36191__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36197], 0));


var G__36198 = cljs.core.next(seq__35967_36191__$1);
var G__36199 = null;
var G__36200 = (0);
var G__36201 = (0);
seq__35967_36181 = G__36198;
chunk__35968_36182 = G__36199;
count__35969_36183 = G__36200;
i__35970_36184 = G__36201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36202], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36202)))?cljs.core.second(arglists_36202):arglists_36202)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35971_36203 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35972_36204 = null;
var count__35973_36205 = (0);
var i__35974_36206 = (0);
while(true){
if((i__35974_36206 < count__35973_36205)){
var vec__35988_36207 = chunk__35972_36204.cljs$core$IIndexed$_nth$arity$2(null,i__35974_36206);
var name_36208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35988_36207,(0),null);
var map__35991_36209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35988_36207,(1),null);
var map__35991_36210__$1 = (((((!((map__35991_36209 == null))))?(((((map__35991_36209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35991_36209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35991_36209):map__35991_36209);
var doc_36211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35991_36210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35991_36210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36208], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36212], 0));

if(cljs.core.truth_(doc_36211)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36211], 0));
} else {
}


var G__36213 = seq__35971_36203;
var G__36214 = chunk__35972_36204;
var G__36215 = count__35973_36205;
var G__36216 = (i__35974_36206 + (1));
seq__35971_36203 = G__36213;
chunk__35972_36204 = G__36214;
count__35973_36205 = G__36215;
i__35974_36206 = G__36216;
continue;
} else {
var temp__5735__auto___36217 = cljs.core.seq(seq__35971_36203);
if(temp__5735__auto___36217){
var seq__35971_36218__$1 = temp__5735__auto___36217;
if(cljs.core.chunked_seq_QMARK_(seq__35971_36218__$1)){
var c__4556__auto___36219 = cljs.core.chunk_first(seq__35971_36218__$1);
var G__36220 = cljs.core.chunk_rest(seq__35971_36218__$1);
var G__36221 = c__4556__auto___36219;
var G__36222 = cljs.core.count(c__4556__auto___36219);
var G__36223 = (0);
seq__35971_36203 = G__36220;
chunk__35972_36204 = G__36221;
count__35973_36205 = G__36222;
i__35974_36206 = G__36223;
continue;
} else {
var vec__35995_36224 = cljs.core.first(seq__35971_36218__$1);
var name_36225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35995_36224,(0),null);
var map__35998_36226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35995_36224,(1),null);
var map__35998_36227__$1 = (((((!((map__35998_36226 == null))))?(((((map__35998_36226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35998_36226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35998_36226):map__35998_36226);
var doc_36228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35998_36227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35998_36227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36225], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36229], 0));

if(cljs.core.truth_(doc_36228)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36228], 0));
} else {
}


var G__36234 = cljs.core.next(seq__35971_36218__$1);
var G__36235 = null;
var G__36236 = (0);
var G__36237 = (0);
seq__35971_36203 = G__36234;
chunk__35972_36204 = G__36235;
count__35973_36205 = G__36236;
i__35974_36206 = G__36237;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36002 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36003 = null;
var count__36004 = (0);
var i__36005 = (0);
while(true){
if((i__36005 < count__36004)){
var role = chunk__36003.cljs$core$IIndexed$_nth$arity$2(null,i__36005);
var temp__5735__auto___36240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36240__$1)){
var spec_36241 = temp__5735__auto___36240__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36241)], 0));
} else {
}


var G__36244 = seq__36002;
var G__36245 = chunk__36003;
var G__36246 = count__36004;
var G__36247 = (i__36005 + (1));
seq__36002 = G__36244;
chunk__36003 = G__36245;
count__36004 = G__36246;
i__36005 = G__36247;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36002);
if(temp__5735__auto____$1){
var seq__36002__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36002__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36002__$1);
var G__36248 = cljs.core.chunk_rest(seq__36002__$1);
var G__36249 = c__4556__auto__;
var G__36250 = cljs.core.count(c__4556__auto__);
var G__36251 = (0);
seq__36002 = G__36248;
chunk__36003 = G__36249;
count__36004 = G__36250;
i__36005 = G__36251;
continue;
} else {
var role = cljs.core.first(seq__36002__$1);
var temp__5735__auto___36252__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36252__$2)){
var spec_36253 = temp__5735__auto___36252__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36253)], 0));
} else {
}


var G__36254 = cljs.core.next(seq__36002__$1);
var G__36255 = null;
var G__36256 = (0);
var G__36257 = (0);
seq__36002 = G__36254;
chunk__36003 = G__36255;
count__36004 = G__36256;
i__36005 = G__36257;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36258 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36259 = cljs.core.ex_cause(t);
via = G__36258;
t = G__36259;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36030 = datafied_throwable;
var map__36030__$1 = (((((!((map__36030 == null))))?(((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36030):map__36030);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36030__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36031 = cljs.core.last(via);
var map__36031__$1 = (((((!((map__36031 == null))))?(((((map__36031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36031):map__36031);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36032 = data;
var map__36032__$1 = (((((!((map__36032 == null))))?(((((map__36032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36032):map__36032);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36032__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36032__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36032__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36033 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36033__$1 = (((((!((map__36033 == null))))?(((((map__36033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36033):map__36033);
var top_data = map__36033__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36033__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36042 = phase;
var G__36042__$1 = (((G__36042 instanceof cljs.core.Keyword))?G__36042.fqn:null);
switch (G__36042__$1) {
case "read-source":
var map__36046 = data;
var map__36046__$1 = (((((!((map__36046 == null))))?(((((map__36046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36046):map__36046);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36048 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36048__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36048,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36048);
var G__36048__$2 = (cljs.core.truth_((function (){var fexpr__36049 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36049.cljs$core$IFn$_invoke$arity$1 ? fexpr__36049.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36049.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36048__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36048__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36048__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36048__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36050 = top_data;
var G__36050__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36050);
var G__36050__$2 = (cljs.core.truth_((function (){var fexpr__36051 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36051.cljs$core$IFn$_invoke$arity$1 ? fexpr__36051.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36051.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36050__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36050__$1);
var G__36050__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36050__$2);
var G__36050__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36050__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36050__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36050__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36057 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(3),null);
var G__36060 = top_data;
var G__36060__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36060,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36060);
var G__36060__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36060__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36060__$1);
var G__36060__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36060__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36060__$2);
var G__36060__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36060__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36060__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36060__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36060__$4;
}

break;
case "execution":
var vec__36074 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36029_SHARP_){
var or__4126__auto__ = (p1__36029_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36105 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36105.cljs$core$IFn$_invoke$arity$1 ? fexpr__36105.cljs$core$IFn$_invoke$arity$1(p1__36029_SHARP_) : fexpr__36105.call(null,p1__36029_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36117__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36117,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36117);
var G__36117__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36117__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36117__$1);
var G__36117__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36117__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36117__$2);
var G__36117__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36117__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36117__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36117__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36117__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36042__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36138){
var map__36139 = p__36138;
var map__36139__$1 = (((((!((map__36139 == null))))?(((((map__36139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36139):map__36139);
var triage_data = map__36139__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36142 = phase;
var G__36142__$1 = (((G__36142 instanceof cljs.core.Keyword))?G__36142.fqn:null);
switch (G__36142__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36143 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36145 = loc;
var G__36146 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36147_36264 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36148_36265 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36149_36266 = true;
var _STAR_print_fn_STAR__temp_val__36150_36267 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36149_36266);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36150_36267);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36135_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36135_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36148_36265);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36147_36264);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36143,G__36144,G__36145,G__36146) : format.call(null,G__36143,G__36144,G__36145,G__36146));

break;
case "macroexpansion":
var G__36152 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36153 = cause_type;
var G__36154 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36155 = loc;
var G__36156 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36152,G__36153,G__36154,G__36155,G__36156) : format.call(null,G__36152,G__36153,G__36154,G__36155,G__36156));

break;
case "compile-syntax-check":
var G__36157 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36158 = cause_type;
var G__36159 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36160 = loc;
var G__36161 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36157,G__36158,G__36159,G__36160,G__36161) : format.call(null,G__36157,G__36158,G__36159,G__36160,G__36161));

break;
case "compilation":
var G__36162 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36163 = cause_type;
var G__36164 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36165 = loc;
var G__36166 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36162,G__36163,G__36164,G__36165,G__36166) : format.call(null,G__36162,G__36163,G__36164,G__36165,G__36166));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36167 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36168 = symbol;
var G__36169 = loc;
var G__36170 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36171_36268 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36172_36269 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36173_36270 = true;
var _STAR_print_fn_STAR__temp_val__36174_36271 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36173_36270);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36174_36271);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36136_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36136_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36172_36269);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36171_36268);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36167,G__36168,G__36169,G__36170) : format.call(null,G__36167,G__36168,G__36169,G__36170));
} else {
var G__36175 = "Execution error%s at %s(%s).\n%s\n";
var G__36176 = cause_type;
var G__36177 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36178 = loc;
var G__36179 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36175,G__36176,G__36177,G__36178,G__36179) : format.call(null,G__36175,G__36176,G__36177,G__36178,G__36179));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36142__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
