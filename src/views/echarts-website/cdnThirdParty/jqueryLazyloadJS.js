/**
 * Minified by jsDelivr using UglifyJS v3.4.3.
 * Original file: /npm/jquery-lazyload@1.9.7/jquery.lazyload.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(l,o,n,a){var h=l(o);l.fn.lazyload=function(e){var t,r=this,f={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:o,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function i(){var t=0;r.each(function(){var e=l(this);if(!f.skip_invisible||e.is(":visible"))if(l.abovethetop(this,f)||l.leftofbegin(this,f));else if(l.belowthefold(this,f)||l.rightoffold(this,f)){if(++t>f.failure_limit)return!1}else e.trigger("appear"),t=0})}return e&&(a!==e.failurelimit&&(e.failure_limit=e.failurelimit,delete e.failurelimit),a!==e.effectspeed&&(e.effect_speed=e.effectspeed,delete e.effectspeed),l.extend(f,e)),t=f.container===a||f.container===o?h:l(f.container),0===f.event.indexOf("scroll")&&t.bind(f.event,function(){return i()}),this.each(function(){var o=this,n=l(o);o.loaded=!1,n.attr("src")!==a&&!1!==n.attr("src")||n.is("img")&&n.attr("src",f.placeholder),n.one("appear",function(){if(!this.loaded){if(f.appear){var e=r.length;f.appear.call(o,e,f)}l("<img />").bind("load",function(){var e=n.attr("data-"+f.data_attribute);n.hide(),n.is("img")?n.attr("src",e):n.css("background-image","url('"+e+"')"),n[f.effect](f.effect_speed),o.loaded=!0;var t=l.grep(r,function(e){return!e.loaded});if(r=l(t),f.load){var i=r.length;f.load.call(o,i,f)}}).attr("src",n.attr("data-"+f.data_attribute))}}),0!==f.event.indexOf("scroll")&&n.bind(f.event,function(){o.loaded||n.trigger("appear")})}),h.bind("resize",function(){i()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&h.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&r.each(function(){l(this).trigger("appear")})}),l(n).ready(function(){i()}),this},l.belowthefold=function(e,t){return(t.container===a||t.container===o?(o.innerHeight?o.innerHeight:h.height())+h.scrollTop():l(t.container).offset().top+l(t.container).height())<=l(e).offset().top-t.threshold},l.rightoffold=function(e,t){return(t.container===a||t.container===o?h.width()+h.scrollLeft():l(t.container).offset().left+l(t.container).width())<=l(e).offset().left-t.threshold},l.abovethetop=function(e,t){return(t.container===a||t.container===o?h.scrollTop():l(t.container).offset().top)>=l(e).offset().top+t.threshold+l(e).height()},l.leftofbegin=function(e,t){return(t.container===a||t.container===o?h.scrollLeft():l(t.container).offset().left)>=l(e).offset().left+t.threshold+l(e).width()},l.inviewport=function(e,t){return!(l.rightoffold(e,t)||l.leftofbegin(e,t)||l.belowthefold(e,t)||l.abovethetop(e,t))},l.extend(l.expr[":"],{"below-the-fold":function(e){return l.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!l.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return l.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!l.rightoffold(e,{threshold:0})},"in-viewport":function(e){return l.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!l.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return l.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!l.rightoffold(e,{threshold:0})}})}(jQuery,window,document);
//# sourceMappingURL=/sm/f6711e049497dcf598501e786ce4e626b7712ba54646e92de071a8dc36322a5d.map