// Compiled by ClojureScript 1.8.34 {}
goog.provide('orbit.coords');
goog.require('cljs.core');
goog.require('orbit.common');
orbit.coords.radians = (function orbit$coords$radians(degrees){
return (degrees * ((Math["PI"]) / (180)));
});
orbit.coords.radius = (function orbit$coords$radius(altitude){
return (orbit.common.earth_radius + altitude);
});
orbit.coords.cartesian_x = (function orbit$coords$cartesian_x(alpha,beta,r){
return ((r * Math.cos(alpha)) * Math.cos(beta));
});
orbit.coords.cartesian_y = (function orbit$coords$cartesian_y(alpha,beta,r){
return ((r * Math.cos(alpha)) * Math.sin(beta));
});
orbit.coords.cartesian_z = (function orbit$coords$cartesian_z(alpha,beta,r){
return (r * Math.sin(alpha));
});
orbit.coords.cartesian = (function orbit$coords$cartesian(lat,lon,alt){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),orbit.coords.cartesian_x.call(null,orbit.coords.radians.call(null,lat),orbit.coords.radians.call(null,lon),orbit.coords.radius.call(null,alt)),new cljs.core.Keyword(null,"y","y",-1757859776),orbit.coords.cartesian_y.call(null,orbit.coords.radians.call(null,lat),orbit.coords.radians.call(null,lon),orbit.coords.radius.call(null,alt)),new cljs.core.Keyword(null,"z","z",-789527183),orbit.coords.cartesian_z.call(null,orbit.coords.radians.call(null,lat),orbit.coords.radians.call(null,lon),orbit.coords.radius.call(null,alt))], null);
});

//# sourceMappingURL=coords.js.map?rel=1463435960874