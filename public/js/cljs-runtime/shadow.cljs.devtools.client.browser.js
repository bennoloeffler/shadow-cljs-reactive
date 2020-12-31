goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34996 = arguments.length;
var i__4737__auto___34997 = (0);
while(true){
if((i__4737__auto___34997 < len__4736__auto___34996)){
args__4742__auto__.push((arguments[i__4737__auto___34997]));

var G__34998 = (i__4737__auto___34997 + (1));
i__4737__auto___34997 = G__34998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34835){
var G__34836 = cljs.core.first(seq34835);
var seq34835__$1 = cljs.core.next(seq34835);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34836,seq34835__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34841 = cljs.core.seq(sources);
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var map__34852 = chunk__34842.cljs$core$IIndexed$_nth$arity$2(null,i__34844);
var map__34852__$1 = (((((!((map__34852 == null))))?(((((map__34852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34852):map__34852);
var src = map__34852__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34852__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34852__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34852__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34852__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34854){var e_34999 = e34854;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34999);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34999.message)].join('')));
}

var G__35000 = seq__34841;
var G__35001 = chunk__34842;
var G__35002 = count__34843;
var G__35003 = (i__34844 + (1));
seq__34841 = G__35000;
chunk__34842 = G__35001;
count__34843 = G__35002;
i__34844 = G__35003;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34841);
if(temp__5735__auto__){
var seq__34841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34841__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34841__$1);
var G__35004 = cljs.core.chunk_rest(seq__34841__$1);
var G__35005 = c__4556__auto__;
var G__35006 = cljs.core.count(c__4556__auto__);
var G__35007 = (0);
seq__34841 = G__35004;
chunk__34842 = G__35005;
count__34843 = G__35006;
i__34844 = G__35007;
continue;
} else {
var map__34855 = cljs.core.first(seq__34841__$1);
var map__34855__$1 = (((((!((map__34855 == null))))?(((((map__34855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34855):map__34855);
var src = map__34855__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34855__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34855__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34855__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34855__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34858){var e_35008 = e34858;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35008);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35008.message)].join('')));
}

var G__35009 = cljs.core.next(seq__34841__$1);
var G__35010 = null;
var G__35011 = (0);
var G__35012 = (0);
seq__34841 = G__35009;
chunk__34842 = G__35010;
count__34843 = G__35011;
i__34844 = G__35012;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34867 = cljs.core.seq(js_requires);
var chunk__34868 = null;
var count__34869 = (0);
var i__34870 = (0);
while(true){
if((i__34870 < count__34869)){
var js_ns = chunk__34868.cljs$core$IIndexed$_nth$arity$2(null,i__34870);
var require_str_35013 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35013);


var G__35014 = seq__34867;
var G__35015 = chunk__34868;
var G__35016 = count__34869;
var G__35017 = (i__34870 + (1));
seq__34867 = G__35014;
chunk__34868 = G__35015;
count__34869 = G__35016;
i__34870 = G__35017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34867);
if(temp__5735__auto__){
var seq__34867__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34867__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34867__$1);
var G__35018 = cljs.core.chunk_rest(seq__34867__$1);
var G__35019 = c__4556__auto__;
var G__35020 = cljs.core.count(c__4556__auto__);
var G__35021 = (0);
seq__34867 = G__35018;
chunk__34868 = G__35019;
count__34869 = G__35020;
i__34870 = G__35021;
continue;
} else {
var js_ns = cljs.core.first(seq__34867__$1);
var require_str_35022 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35022);


var G__35023 = cljs.core.next(seq__34867__$1);
var G__35024 = null;
var G__35025 = (0);
var G__35026 = (0);
seq__34867 = G__35023;
chunk__34868 = G__35024;
count__34869 = G__35025;
i__34870 = G__35026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__34872){
var map__34873 = p__34872;
var map__34873__$1 = (((((!((map__34873 == null))))?(((((map__34873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34873):map__34873);
var msg = map__34873__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34873__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34873__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34876(s__34877){
return (new cljs.core.LazySeq(null,(function (){
var s__34877__$1 = s__34877;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34877__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34882 = cljs.core.first(xs__6292__auto__);
var map__34882__$1 = (((((!((map__34882 == null))))?(((((map__34882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34882):map__34882);
var src = map__34882__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34882__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34882__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__34877__$1,map__34882,map__34882__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34873,map__34873__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34876_$_iter__34878(s__34879){
return (new cljs.core.LazySeq(null,((function (s__34877__$1,map__34882,map__34882__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34873,map__34873__$1,msg,info,reload_info){
return (function (){
var s__34879__$1 = s__34879;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34879__$1);
if(temp__5735__auto____$1){
var s__34879__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34879__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34879__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34881 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34880 = (0);
while(true){
if((i__34880 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__34880);
cljs.core.chunk_append(b__34881,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35027 = (i__34880 + (1));
i__34880 = G__35027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34881),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34876_$_iter__34878(cljs.core.chunk_rest(s__34879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34881),null);
}
} else {
var warning = cljs.core.first(s__34879__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34876_$_iter__34878(cljs.core.rest(s__34879__$2)));
}
} else {
return null;
}
break;
}
});})(s__34877__$1,map__34882,map__34882__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34873,map__34873__$1,msg,info,reload_info))
,null,null));
});})(s__34877__$1,map__34882,map__34882__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34873,map__34873__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34876(cljs.core.rest(s__34877__$1)));
} else {
var G__35028 = cljs.core.rest(s__34877__$1);
s__34877__$1 = G__35028;
continue;
}
} else {
var G__35029 = cljs.core.rest(s__34877__$1);
s__34877__$1 = G__35029;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__34884_35030 = cljs.core.seq(warnings);
var chunk__34885_35031 = null;
var count__34886_35032 = (0);
var i__34887_35033 = (0);
while(true){
if((i__34887_35033 < count__34886_35032)){
var map__34892_35034 = chunk__34885_35031.cljs$core$IIndexed$_nth$arity$2(null,i__34887_35033);
var map__34892_35035__$1 = (((((!((map__34892_35034 == null))))?(((((map__34892_35034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34892_35034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34892_35034):map__34892_35034);
var w_35036 = map__34892_35035__$1;
var msg_35037__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892_35035__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892_35035__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892_35035__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892_35035__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35040)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35038),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35039),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35037__$1)].join(''));


var G__35041 = seq__34884_35030;
var G__35042 = chunk__34885_35031;
var G__35043 = count__34886_35032;
var G__35044 = (i__34887_35033 + (1));
seq__34884_35030 = G__35041;
chunk__34885_35031 = G__35042;
count__34886_35032 = G__35043;
i__34887_35033 = G__35044;
continue;
} else {
var temp__5735__auto___35045 = cljs.core.seq(seq__34884_35030);
if(temp__5735__auto___35045){
var seq__34884_35046__$1 = temp__5735__auto___35045;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35046__$1)){
var c__4556__auto___35047 = cljs.core.chunk_first(seq__34884_35046__$1);
var G__35048 = cljs.core.chunk_rest(seq__34884_35046__$1);
var G__35049 = c__4556__auto___35047;
var G__35050 = cljs.core.count(c__4556__auto___35047);
var G__35051 = (0);
seq__34884_35030 = G__35048;
chunk__34885_35031 = G__35049;
count__34886_35032 = G__35050;
i__34887_35033 = G__35051;
continue;
} else {
var map__34894_35052 = cljs.core.first(seq__34884_35046__$1);
var map__34894_35053__$1 = (((((!((map__34894_35052 == null))))?(((((map__34894_35052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34894_35052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34894_35052):map__34894_35052);
var w_35054 = map__34894_35053__$1;
var msg_35055__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894_35053__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894_35053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894_35053__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894_35053__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35058)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35056),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35057),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35055__$1)].join(''));


var G__35059 = cljs.core.next(seq__34884_35046__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__34884_35030 = G__35059;
chunk__34885_35031 = G__35060;
count__34886_35032 = G__35061;
i__34887_35033 = G__35062;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__34871_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34871_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__34897){
var map__34898 = p__34897;
var map__34898__$1 = (((((!((map__34898 == null))))?(((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34898):map__34898);
var msg = map__34898__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34900 = cljs.core.seq(updates);
var chunk__34902 = null;
var count__34903 = (0);
var i__34904 = (0);
while(true){
if((i__34904 < count__34903)){
var path = chunk__34902.cljs$core$IIndexed$_nth$arity$2(null,i__34904);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34936_35063 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34940_35064 = null;
var count__34941_35065 = (0);
var i__34942_35066 = (0);
while(true){
if((i__34942_35066 < count__34941_35065)){
var node_35067 = chunk__34940_35064.cljs$core$IIndexed$_nth$arity$2(null,i__34942_35066);
if(cljs.core.not(node_35067.shadow$old)){
var path_match_35068 = shadow.cljs.devtools.client.browser.match_paths(node_35067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35068)){
var new_link_35069 = (function (){var G__34948 = node_35067.cloneNode(true);
G__34948.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34948;
})();
(node_35067.shadow$old = true);

(new_link_35069.onload = ((function (seq__34936_35063,chunk__34940_35064,count__34941_35065,i__34942_35066,seq__34900,chunk__34902,count__34903,i__34904,new_link_35069,path_match_35068,node_35067,path,map__34898,map__34898__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35067);
});})(seq__34936_35063,chunk__34940_35064,count__34941_35065,i__34942_35066,seq__34900,chunk__34902,count__34903,i__34904,new_link_35069,path_match_35068,node_35067,path,map__34898,map__34898__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35068], 0));

goog.dom.insertSiblingAfter(new_link_35069,node_35067);


var G__35070 = seq__34936_35063;
var G__35071 = chunk__34940_35064;
var G__35072 = count__34941_35065;
var G__35073 = (i__34942_35066 + (1));
seq__34936_35063 = G__35070;
chunk__34940_35064 = G__35071;
count__34941_35065 = G__35072;
i__34942_35066 = G__35073;
continue;
} else {
var G__35074 = seq__34936_35063;
var G__35075 = chunk__34940_35064;
var G__35076 = count__34941_35065;
var G__35077 = (i__34942_35066 + (1));
seq__34936_35063 = G__35074;
chunk__34940_35064 = G__35075;
count__34941_35065 = G__35076;
i__34942_35066 = G__35077;
continue;
}
} else {
var G__35078 = seq__34936_35063;
var G__35079 = chunk__34940_35064;
var G__35080 = count__34941_35065;
var G__35081 = (i__34942_35066 + (1));
seq__34936_35063 = G__35078;
chunk__34940_35064 = G__35079;
count__34941_35065 = G__35080;
i__34942_35066 = G__35081;
continue;
}
} else {
var temp__5735__auto___35082 = cljs.core.seq(seq__34936_35063);
if(temp__5735__auto___35082){
var seq__34936_35083__$1 = temp__5735__auto___35082;
if(cljs.core.chunked_seq_QMARK_(seq__34936_35083__$1)){
var c__4556__auto___35084 = cljs.core.chunk_first(seq__34936_35083__$1);
var G__35085 = cljs.core.chunk_rest(seq__34936_35083__$1);
var G__35086 = c__4556__auto___35084;
var G__35087 = cljs.core.count(c__4556__auto___35084);
var G__35088 = (0);
seq__34936_35063 = G__35085;
chunk__34940_35064 = G__35086;
count__34941_35065 = G__35087;
i__34942_35066 = G__35088;
continue;
} else {
var node_35089 = cljs.core.first(seq__34936_35083__$1);
if(cljs.core.not(node_35089.shadow$old)){
var path_match_35090 = shadow.cljs.devtools.client.browser.match_paths(node_35089.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35090)){
var new_link_35091 = (function (){var G__34949 = node_35089.cloneNode(true);
G__34949.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35090),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34949;
})();
(node_35089.shadow$old = true);

(new_link_35091.onload = ((function (seq__34936_35063,chunk__34940_35064,count__34941_35065,i__34942_35066,seq__34900,chunk__34902,count__34903,i__34904,new_link_35091,path_match_35090,node_35089,seq__34936_35083__$1,temp__5735__auto___35082,path,map__34898,map__34898__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35089);
});})(seq__34936_35063,chunk__34940_35064,count__34941_35065,i__34942_35066,seq__34900,chunk__34902,count__34903,i__34904,new_link_35091,path_match_35090,node_35089,seq__34936_35083__$1,temp__5735__auto___35082,path,map__34898,map__34898__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35090], 0));

goog.dom.insertSiblingAfter(new_link_35091,node_35089);


var G__35092 = cljs.core.next(seq__34936_35083__$1);
var G__35093 = null;
var G__35094 = (0);
var G__35095 = (0);
seq__34936_35063 = G__35092;
chunk__34940_35064 = G__35093;
count__34941_35065 = G__35094;
i__34942_35066 = G__35095;
continue;
} else {
var G__35096 = cljs.core.next(seq__34936_35083__$1);
var G__35097 = null;
var G__35098 = (0);
var G__35099 = (0);
seq__34936_35063 = G__35096;
chunk__34940_35064 = G__35097;
count__34941_35065 = G__35098;
i__34942_35066 = G__35099;
continue;
}
} else {
var G__35100 = cljs.core.next(seq__34936_35083__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__34936_35063 = G__35100;
chunk__34940_35064 = G__35101;
count__34941_35065 = G__35102;
i__34942_35066 = G__35103;
continue;
}
}
} else {
}
}
break;
}


var G__35104 = seq__34900;
var G__35105 = chunk__34902;
var G__35106 = count__34903;
var G__35107 = (i__34904 + (1));
seq__34900 = G__35104;
chunk__34902 = G__35105;
count__34903 = G__35106;
i__34904 = G__35107;
continue;
} else {
var G__35108 = seq__34900;
var G__35109 = chunk__34902;
var G__35110 = count__34903;
var G__35111 = (i__34904 + (1));
seq__34900 = G__35108;
chunk__34902 = G__35109;
count__34903 = G__35110;
i__34904 = G__35111;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34900);
if(temp__5735__auto__){
var seq__34900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34900__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34900__$1);
var G__35112 = cljs.core.chunk_rest(seq__34900__$1);
var G__35113 = c__4556__auto__;
var G__35114 = cljs.core.count(c__4556__auto__);
var G__35115 = (0);
seq__34900 = G__35112;
chunk__34902 = G__35113;
count__34903 = G__35114;
i__34904 = G__35115;
continue;
} else {
var path = cljs.core.first(seq__34900__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34950_35116 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34954_35117 = null;
var count__34955_35118 = (0);
var i__34956_35119 = (0);
while(true){
if((i__34956_35119 < count__34955_35118)){
var node_35120 = chunk__34954_35117.cljs$core$IIndexed$_nth$arity$2(null,i__34956_35119);
if(cljs.core.not(node_35120.shadow$old)){
var path_match_35121 = shadow.cljs.devtools.client.browser.match_paths(node_35120.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35121)){
var new_link_35122 = (function (){var G__34962 = node_35120.cloneNode(true);
G__34962.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35121),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34962;
})();
(node_35120.shadow$old = true);

(new_link_35122.onload = ((function (seq__34950_35116,chunk__34954_35117,count__34955_35118,i__34956_35119,seq__34900,chunk__34902,count__34903,i__34904,new_link_35122,path_match_35121,node_35120,path,seq__34900__$1,temp__5735__auto__,map__34898,map__34898__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35120);
});})(seq__34950_35116,chunk__34954_35117,count__34955_35118,i__34956_35119,seq__34900,chunk__34902,count__34903,i__34904,new_link_35122,path_match_35121,node_35120,path,seq__34900__$1,temp__5735__auto__,map__34898,map__34898__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35121], 0));

goog.dom.insertSiblingAfter(new_link_35122,node_35120);


var G__35123 = seq__34950_35116;
var G__35124 = chunk__34954_35117;
var G__35125 = count__34955_35118;
var G__35126 = (i__34956_35119 + (1));
seq__34950_35116 = G__35123;
chunk__34954_35117 = G__35124;
count__34955_35118 = G__35125;
i__34956_35119 = G__35126;
continue;
} else {
var G__35127 = seq__34950_35116;
var G__35128 = chunk__34954_35117;
var G__35129 = count__34955_35118;
var G__35130 = (i__34956_35119 + (1));
seq__34950_35116 = G__35127;
chunk__34954_35117 = G__35128;
count__34955_35118 = G__35129;
i__34956_35119 = G__35130;
continue;
}
} else {
var G__35131 = seq__34950_35116;
var G__35132 = chunk__34954_35117;
var G__35133 = count__34955_35118;
var G__35134 = (i__34956_35119 + (1));
seq__34950_35116 = G__35131;
chunk__34954_35117 = G__35132;
count__34955_35118 = G__35133;
i__34956_35119 = G__35134;
continue;
}
} else {
var temp__5735__auto___35135__$1 = cljs.core.seq(seq__34950_35116);
if(temp__5735__auto___35135__$1){
var seq__34950_35136__$1 = temp__5735__auto___35135__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34950_35136__$1)){
var c__4556__auto___35137 = cljs.core.chunk_first(seq__34950_35136__$1);
var G__35138 = cljs.core.chunk_rest(seq__34950_35136__$1);
var G__35139 = c__4556__auto___35137;
var G__35140 = cljs.core.count(c__4556__auto___35137);
var G__35141 = (0);
seq__34950_35116 = G__35138;
chunk__34954_35117 = G__35139;
count__34955_35118 = G__35140;
i__34956_35119 = G__35141;
continue;
} else {
var node_35142 = cljs.core.first(seq__34950_35136__$1);
if(cljs.core.not(node_35142.shadow$old)){
var path_match_35143 = shadow.cljs.devtools.client.browser.match_paths(node_35142.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35143)){
var new_link_35144 = (function (){var G__34963 = node_35142.cloneNode(true);
G__34963.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35143),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34963;
})();
(node_35142.shadow$old = true);

(new_link_35144.onload = ((function (seq__34950_35116,chunk__34954_35117,count__34955_35118,i__34956_35119,seq__34900,chunk__34902,count__34903,i__34904,new_link_35144,path_match_35143,node_35142,seq__34950_35136__$1,temp__5735__auto___35135__$1,path,seq__34900__$1,temp__5735__auto__,map__34898,map__34898__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35142);
});})(seq__34950_35116,chunk__34954_35117,count__34955_35118,i__34956_35119,seq__34900,chunk__34902,count__34903,i__34904,new_link_35144,path_match_35143,node_35142,seq__34950_35136__$1,temp__5735__auto___35135__$1,path,seq__34900__$1,temp__5735__auto__,map__34898,map__34898__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35143], 0));

goog.dom.insertSiblingAfter(new_link_35144,node_35142);


var G__35145 = cljs.core.next(seq__34950_35136__$1);
var G__35146 = null;
var G__35147 = (0);
var G__35148 = (0);
seq__34950_35116 = G__35145;
chunk__34954_35117 = G__35146;
count__34955_35118 = G__35147;
i__34956_35119 = G__35148;
continue;
} else {
var G__35149 = cljs.core.next(seq__34950_35136__$1);
var G__35150 = null;
var G__35151 = (0);
var G__35152 = (0);
seq__34950_35116 = G__35149;
chunk__34954_35117 = G__35150;
count__34955_35118 = G__35151;
i__34956_35119 = G__35152;
continue;
}
} else {
var G__35153 = cljs.core.next(seq__34950_35136__$1);
var G__35154 = null;
var G__35155 = (0);
var G__35156 = (0);
seq__34950_35116 = G__35153;
chunk__34954_35117 = G__35154;
count__34955_35118 = G__35155;
i__34956_35119 = G__35156;
continue;
}
}
} else {
}
}
break;
}


var G__35157 = cljs.core.next(seq__34900__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__34900 = G__35157;
chunk__34902 = G__35158;
count__34903 = G__35159;
i__34904 = G__35160;
continue;
} else {
var G__35161 = cljs.core.next(seq__34900__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__34900 = G__35161;
chunk__34902 = G__35162;
count__34903 = G__35163;
i__34904 = G__35164;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__34964){
var map__34965 = p__34964;
var map__34965__$1 = (((((!((map__34965 == null))))?(((((map__34965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34965):map__34965);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34965__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__34967){
var map__34968 = p__34967;
var map__34968__$1 = (((((!((map__34968 == null))))?(((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34968):map__34968);
var _ = map__34968__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34968__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__34970,done,error){
var map__34971 = p__34970;
var map__34971__$1 = (((((!((map__34971 == null))))?(((((map__34971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34971):map__34971);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34971__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__34973,done,error){
var map__34974 = p__34973;
var map__34974__$1 = (((((!((map__34974 == null))))?(((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34974):map__34974);
var msg = map__34974__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34976){
var map__34977 = p__34976;
var map__34977__$1 = (((((!((map__34977 == null))))?(((((map__34977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34977):map__34977);
var src = map__34977__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__34979 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__34979) : done.call(null,G__34979));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__34980){
var map__34981 = p__34980;
var map__34981__$1 = (((((!((map__34981 == null))))?(((((map__34981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34981):map__34981);
var msg__$1 = map__34981__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34981__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e34983){var ex = e34983;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__34984){
var map__34985 = p__34984;
var map__34985__$1 = (((((!((map__34985 == null))))?(((((map__34985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34985):map__34985);
var env = map__34985__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34985__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__34987){
var map__34988 = p__34987;
var map__34988__$1 = (((((!((map__34988 == null))))?(((((map__34988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34988):map__34988);
var msg = map__34988__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34988__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__34990){
var map__34991 = p__34990;
var map__34991__$1 = (((((!((map__34991 == null))))?(((((map__34991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34991):map__34991);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34991__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34991__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__34993){
var map__34994 = p__34993;
var map__34994__$1 = (((((!((map__34994 == null))))?(((((map__34994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34994):map__34994);
var svc = map__34994__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
