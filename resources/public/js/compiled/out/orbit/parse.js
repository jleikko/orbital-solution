// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbit.parse');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('orbit.common');
goog.require('orbit.coords');
orbit.parse.parse_seed = (function orbit$parse$parse_seed(raw_seed_line){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),parseFloat(cljs.core.subs.call(null,raw_seed_line,(7)))], null);
});
orbit.parse.parse_sat = (function orbit$parse$parse_sat(raw_sat_line){
var splitted = clojure.string.split.call(null,raw_sat_line,/,/);
var id = cljs.core.get.call(null,splitted,(0));
var lat = orbit.common.get_double.call(null,splitted,(1));
var lon = orbit.common.get_double.call(null,splitted,(2));
var alt = orbit.common.get_double.call(null,splitted,(3));
var xyz = orbit.coords.cartesian.call(null,lat,lon,alt);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lon","lon",522068437),lon,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null),xyz);
});
orbit.parse.parse_sats = (function orbit$parse$parse_sats(raw_sat_lines){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sats","sats",88532570),cljs.core.map.call(null,orbit.parse.parse_sat,raw_sat_lines)], null);
});
orbit.parse.parse_phones = (function orbit$parse$parse_phones(raw_phones_line){
var splitted = clojure.string.split.call(null,raw_phones_line,/,/);
var calling_lat = orbit.common.get_double.call(null,splitted,(1));
var calling_lon = orbit.common.get_double.call(null,splitted,(2));
var calling_alt = orbit.common.phone_altitude;
var calling_xyz = orbit.coords.cartesian.call(null,calling_lat,calling_lon,calling_alt);
var called_lat = orbit.common.get_double.call(null,splitted,(3));
var called_lon = orbit.common.get_double.call(null,splitted,(4));
var called_alt = orbit.common.phone_altitude;
var called_xyz = orbit.coords.cartesian.call(null,called_lat,called_lon,called_alt);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phones","phones",232561938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calling","calling",-1879714471),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"CALLING",new cljs.core.Keyword(null,"lat","lat",-580793929),calling_lat,new cljs.core.Keyword(null,"lon","lon",522068437),calling_lon,new cljs.core.Keyword(null,"alt","alt",-3214426),calling_alt], null),calling_xyz),new cljs.core.Keyword(null,"called","called",-2126645226),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"CALLED",new cljs.core.Keyword(null,"lat","lat",-580793929),orbit.common.get_double.call(null,splitted,(3)),new cljs.core.Keyword(null,"lon","lon",522068437),orbit.common.get_double.call(null,splitted,(4)),new cljs.core.Keyword(null,"alt","alt",-3214426),orbit.common.phone_altitude], null),called_xyz)], null)], null);
});
orbit.parse.parse_input = (function orbit$parse$parse_input(file_content){
var raw_lines = clojure.string.split_lines.call(null,file_content);
var seed = orbit.parse.parse_seed.call(null,cljs.core.first.call(null,raw_lines));
var sats = orbit.parse.parse_sats.call(null,cljs.core.rest.call(null,cljs.core.butlast.call(null,raw_lines)));
var phones = orbit.parse.parse_phones.call(null,cljs.core.last.call(null,raw_lines));
return cljs.core.merge.call(null,seed,sats,phones);
});
orbit.parse.parse_output = (function orbit$parse$parse_output(route){
return clojure.string.join.call(null,",",cljs.core.rest.call(null,cljs.core.butlast.call(null,cljs.core.map.call(null,(function (p1__21290_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21290_SHARP_);
}),route))));
});

//# sourceMappingURL=parse.js.map?rel=1463435960926