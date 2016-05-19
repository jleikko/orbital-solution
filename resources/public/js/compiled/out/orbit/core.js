// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbit.core');
goog.require('cljs.core');
goog.require('orbit.parse');
goog.require('orbit.route');
orbit.core.get_raw_data = (function orbit$core$get_raw_data(){
return "#SEED: 0.0533969490788877\nSAT0,67.84534277348689,38.45724797780886,574.8784371035017\nSAT1,-10.191654781073794,-18.69844683442267,541.7659825279877\nSAT2,39.0209876418501,-112.2489059864599,601.167191221042\nSAT3,2.507808606672313,-71.54737191836693,501.3581479548847\nSAT4,15.388749519126435,-90.00493420165043,678.5936110018993\nSAT5,-54.66226217618411,38.54380122194456,508.4777415171144\nSAT6,-73.93475638302925,-149.42372880866807,682.5969993365551\nSAT7,-20.535960519803865,143.46388866150988,669.7171783217132\nSAT8,27.281483176627958,52.15107976767666,468.072579772786\nSAT9,-87.68844428780996,167.92338028461603,613.6325600845254\nSAT10,80.02999874817769,-19.326006636262207,422.3624893141424\nSAT11,88.94845119420535,-44.0255966540596,358.53302175212195\nSAT12,25.47970280551533,-16.315998874603423,303.4305232610965\nSAT13,-42.4039713793233,136.1134519204312,611.3729260451272\nSAT14,-9.686197295055848,-168.2395222540369,568.750612404486\nSAT15,54.18597191694286,-43.030630880812765,316.35524999034396\nSAT16,-88.76683808288861,-120.40994038386523,430.25365882622043\nSAT17,81.92546112364323,131.30335416764444,595.6372425158074\nSAT18,59.98765553806544,-35.667808269121394,462.13392518638\nSAT19,12.584508066684734,-142.40044515858048,397.2955133567856\nROUTE,-46.68418774557557,52.702632313282066,48.30677954454114,-84.68958586546985";
});
orbit.core.resolve_challenge = (function orbit$core$resolve_challenge(){

var raw_data = orbit.core.get_raw_data.call(null);
var parsed_data = orbit.parse.parse_input.call(null,raw_data);
var routes = orbit.route.find_routes.call(null,parsed_data);
var route = orbit.route.pick_optimal.call(null,routes);
return orbit.parse.parse_output.call(null,route);
});

//# sourceMappingURL=core.js.map?rel=1463435960947