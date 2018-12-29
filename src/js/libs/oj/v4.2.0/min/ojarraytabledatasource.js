/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a,g){a.hb=function(c,b){this.data=c||{};if(!(c instanceof Array)&&"function"!=typeof c&&"function"!=typeof c.subscribe)throw Error(a.ta.De._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.ta.De._ERR_DATA_INVALID_TYPE_DETAIL);null!=b&&null!=b.idAttribute||a.D.info(a.hb.De._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);a.hb.N.constructor.call(this,c,b);this.Uf=[];this.Pa={};null!=c&&void 0!==c&&(this.u5=null,null!=b&&null!=b.idAttribute&&(this.u5=b.idAttribute),
this.p=c instanceof Array?c:c(),this.sh=this.p.length,this.bV(c));if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.fM=!0};o_("ArrayTableDataSource",a.hb,a);a.f.ua(a.hb,a.ta,"oj.ArrayTableDataSource");a.hb.prototype.No=null;a.f.j("ArrayTableDataSource.prototype.comparator",{No:a.hb.prototype.No});a.hb.prototype.sortCriteria=null;a.f.j("ArrayTableDataSource.prototype.sortCriteria",{sortCriteria:a.hb.prototype.sortCriteria});a.hb.prototype.Init=function(){a.hb.N.Init.call(this)};
a.hb.prototype.add=function(a,b){b=b||{};this.Xz();return this.jIa(a,b.at,b)};a.f.j("ArrayTableDataSource.prototype.add",{add:a.hb.prototype.add});a.hb.prototype.at=function(a){this.Xz();var b;b=0>a||a>=this.Pa.data.length?null:{data:this.Pa.data[a],index:a,key:this.iu(this.Pa.data[a])};return new Promise(function(a){a(b)})};a.f.j("ArrayTableDataSource.prototype.at",{at:a.hb.prototype.at});a.hb.prototype.change=function(c,b){b=b||{};this.Xz();var d=b.silent,e,f,g,k,l={data:[],keys:[],indexes:[]};
c instanceof Array||(c=[c]);for(e=0;e<c.length;e++)f=c[e],null!=f&&(g=this.iu(f),k=this.un(g,!1),l.data.push(this.ik(f)),l.keys.push(g),l.indexes.push(k.index),this.Pa.data[k.index]=f);!d&&0<l.data.length&&a.ta.N.handleEvent.call(this,a.ta.ga.CHANGE,l);return Promise.resolve(l)};a.f.j("ArrayTableDataSource.prototype.change",{change:a.hb.prototype.change});a.hb.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.fM?this.si(a):Promise.resolve()};a.f.j("ArrayTableDataSource.prototype.fetch",
{fetch:a.hb.prototype.fetch});a.hb.prototype.get=function(a){this.Xz();return Promise.resolve(this.un(a,!0))};a.f.j("ArrayTableDataSource.prototype.get",{get:a.hb.prototype.get});a.hb.prototype.getCapability=function(){return"full"};a.f.j("ArrayTableDataSource.prototype.getCapability",{getCapability:a.hb.prototype.getCapability});a.hb.prototype.remove=function(a,b){b=b||{};this.Xz();return this.eB(a,b)};a.f.j("ArrayTableDataSource.prototype.remove",{remove:a.hb.prototype.remove});a.hb.prototype.reset=
function(c,b){b=b||{};b.previousRows=this.Pa;var d=b.silent;null!=c&&(this.p=c,this.bV(c),this.data=c);this.Pa={};this.sh=0;d||a.ta.N.handleEvent.call(this,a.ta.ga.RESET,null);return Promise.resolve()};a.f.j("ArrayTableDataSource.prototype.reset",{reset:a.hb.prototype.reset});a.hb.prototype.sort=function(c){null==c?c=this.sortCriteria:this.sortCriteria=c;this.Xz();var b=this;return new Promise(function(d){c=c||{};var e=b.UJ();b.Pa.data.sort(function(c,d){return a.hb.Rta(c,d,e,b)});b.OZa=!0;var f=
{header:c.key,direction:c.direction};a.ta.N.handleEvent.call(b,a.ta.ga.SORT,f);d(f)})};a.f.j("ArrayTableDataSource.prototype.sort",{sort:a.hb.prototype.sort});a.hb.prototype.totalSize=function(){return this.sh};a.f.j("ArrayTableDataSource.prototype.totalSize",{totalSize:a.hb.prototype.totalSize});a.hb.prototype.jIa=function(c,b,d){var e,f;d=d||{};var g=d.silent,k={data:[],keys:[],indexes:[]};c instanceof Array||(c=[c]);null==b||b instanceof Array||(b=[b]);for(d=0;d<c.length;d++)if(f=c[d],null!=f){e=
this.iu(f);k.data.push(this.ik(f));k.keys.push(e);if(!0==this.OZa&&0<this.Pa.data.length)for(e=0;e<this.Pa.data.length;e++)if(0>a.hb.Rta(f,this.Pa.data[e],this.UJ(),this)){this.Pa.data.splice(e,0,f);k.indexes.push(e);break}else{if(e==this.Pa.data.length-1){this.Pa.data.push(f);k.indexes.push(e+1);break}}else null==b?(this.Pa.data.push(f),k.indexes.push(this.Pa.data.length-1)):(this.Pa.data.splice(b[d],0,f),k.indexes.push(b[d]));this.sh++;this.AL()}!g&&0<k.data.length&&a.ta.N.handleEvent.call(this,
a.ta.ga.ADD,k);return Promise.resolve(k)};a.hb.prototype.Xz=function(){this.gpa()||(this.data instanceof Array||"function"!=typeof this.data||"function"!=typeof this.data.subscribe||(this.p=this.data()),this.Pa=this.vE(this.p),this.sh=this.p.length)};a.hb.prototype.gpa=function(){return null==this.Pa||null==this.Pa.data?!1:!0};a.hb.prototype.si=function(c){c=c||{};this.eM(c);this.Xz();var b;try{b=0<c.pageSize?c.pageSize:-1;this.oa||(this.oa=0);this.oa=null==c.startIndex?this.oa:c.startIndex;var d=
a.hb.hS(this.Pa,this.oa,b),e=[],f=[],g,k,l;for(g=this.oa;g<=d;g++)k=this.iu(this.Pa.data[g]),l=this.ik(this.Pa.data[g]),e[g-this.oa]=l,f[g-this.oa]=k}catch(m){return this.Mp(c,null,m),Promise.reject(m)}d<this.oa&&(this.oa=d+1);c.pageSize=b;c.startIndex=this.oa;c.refresh=!0;b={data:e,keys:f,startIndex:this.oa};this.Mp(c,b,null);return Promise.resolve(b)};a.hb.prototype.un=function(a,b){var d,e,f,h,k=null;for(d=0;d<this.Pa.data.length;d++)if(f=this.Pa.data[d],void 0!==f)if(h=this.iu(f),g.isArray(h)&&
g.isArray(a)){if(h.length==a.length){var l=!0;for(e=0;e<a.length;e++)if(h[e]!=a[e]){l=!1;break}if(l){b?(e=this.ik(f),k={data:e,key:h,index:this.Pa.indexes[d]}):k={data:f,key:h,index:this.Pa.indexes[d]};break}}}else if(h==a){b?(e=this.ik(f),k={data:e,key:h,index:this.Pa.indexes[d]}):k={data:f,key:h,index:this.Pa.indexes[d]};break}return k};a.hb.prototype.UJ=function(){var a=this.comparator;if(null==a){var b=this.sortCriteria.key,d=this.sortCriteria.direction;"ascending"==d?a=function(a){return g.isFunction(a[b])?
a[b]():a[b]}:"descending"==d&&(a=function(a,c){var d,k;g.isFunction(a[b])?(d=a[b](),k=c[b]()):(d=a[b],k=c[b]);return d===k?0:d>k?-1:1})}return a};a.hb.prototype.AL=function(){for(var a=0;a<this.Pa.data.length;a++)this.Pa.indexes[a]=a};a.hb.prototype.eB=function(c,b){var d,e;b=b||{};var f=b.silent,g={data:[],keys:[],indexes:[]};c instanceof Array||(c=[c]);var k=[];for(d=0;d<c.length;d++)e=c[d],null!=e&&(e=this.iu(e),e=this.un(e,!1),null!=e&&k.push({data:e.data,key:e.key,index:e.index}));k.sort(function(a,
b){return a.index-b.index});for(d=0;d<k.length;d++)g.data.push(k[d].data),g.keys.push(k[d].key),g.indexes.push(k[d].index);for(d=g.indexes.length-1;0<=d;d--)this.Pa.data.splice(g.indexes[d],1),this.Pa.indexes.splice(g.indexes[d],1),this.sh--;this.AL();!f&&0<g.data.length&&a.ta.N.handleEvent.call(this,a.ta.ga.REMOVE,g);return Promise.resolve(g)};a.hb.prototype.eM=function(c){c.silent||a.ta.N.handleEvent.call(this,a.ta.ga.REQUEST,{startIndex:c.startIndex})};a.hb.prototype.Mp=function(c,b,d){null!=d?
a.ta.N.handleEvent.call(this,a.ta.ga.ERROR,d):c.silent||a.ta.N.handleEvent.call(this,a.ta.ga.SYNC,b)};a.hb.Wt=function(a,b,d){if("descending"==d){if(a<b)return 1;if(b<a)return-1}else{if(a>b)return 1;if(b>a)return-1}return 0};a.hb.hS=function(a,b,d){var e=a.data.length-1;0<d&&(e=b+d-1,e=e>a.data.length-1?a.data.length-1:e);return e};a.hb.nb=function(a,b){return"function"==typeof a[b]?a[b]():a[b]};a.hb.prototype.vE=function(a){var b=a.length-1,d={},e,f;d.data=[];d.indexes=[];this.uw=null;for(e=0;e<=
b;e++){var g={},k=a[e];for(f in k)k.hasOwnProperty(f)&&(g[f]=k[f],0==e&&(null==this.uw&&(this.uw=[]),this.uw.push(f)));d.data[e]=g;d.indexes[e]=e}return d};a.hb.prototype.iu=function(c){var b,d=this.G3(c);if(g.isArray(d)){var e;b=[];for(e=0;e<d.length;e++)if(d[e]in c)b[e]=a.hb.nb(c,d[e]);else throw c=a.Aa.kd(a.hb.De._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW,[d[e]]),Error(c);}else if(d in c)b=a.hb.nb(c,d);else throw c=a.Aa.kd(a.hb.De._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW,[d]),Error(c);
return b};a.hb.prototype.G3=function(a){if(null!=this.u5)return this.u5;if(null==this.uw){this.uw=[];for(var b in a)a.hasOwnProperty(b)&&this.uw.push(b)}return this.uw.hasOwnProperty("id")?"id":this.uw};a.hb.Rta=function(c,b,d,e){var f,h=e.sortCriteria.direction;if(g.isFunction(d)){if(1===d.length){f=d.call(e,c);e=d.call(e,b);c=a.ab.Gd(f)?f.split(","):[f];b=a.ab.Gd(e)?e.split(","):[e];for(d=0;d<c.length;d++)if(f=a.hb.Wt(c[d],b[d],h),0!==f)return f;return 0}return d.call(e,c,b)}if(a.ab.Gd(d)){var k=
d.split(",");for(d=0;d<k.length;d++)if(f=a.hb.nb(c,k[d]),e=a.hb.nb(b,k[d]),f=a.hb.Wt(f,e,h),0!==f)return f}return 0};a.hb.prototype.bV=function(a){if(!(a instanceof Array)){var b=this;a.subscribe(function(a){if(b.gpa()){var c,f=[],g=[];for(c=0;c<a.length;c++)"deleted"===a[c].status&&f.push(a[c].value);b.remove(f,null);f=[];g=[];for(c=0;c<a.length;c++)"added"===a[c].status&&(f.push(a[c].value),g.push(a[c].index));b.add(f,{at:g})}},null,"arrayChange")}};a.hb.prototype.ik=function(c){var b={},d,e=Object.keys(c);
for(d=0;d<e.length;d++)a.hb.o2(b,c,e[d]);return b};a.hb.o2=function(a,b,d){Object.defineProperty(a,d,{get:function(){return b[d]},set:function(a){b[d]=a},enumerable:!0})};a.hb.De={_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields.",_ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW:"Specified idAttribute {0} not in row data. Please ensure all specified idAttribute fields are in the row data or do not specify idAttribute and all fields will be used as id."}});