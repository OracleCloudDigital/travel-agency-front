/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox","ojs/ojoption"],function(a,g){(function(){a.ib("oj.ojCheckboxset",g.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,labelledBy:null,required:!1,value:void 0},refresh:function(){this._super();this.qb()},widget:function(){return this.v7a},validate:a.ka.validate,Gh:function(b,c){var e=[],f;f=[{Ba:"disabled",mf:!0},{Ba:"title"},{Ba:"required",lk:!0,mf:!0}];this._super(b,
c);this.$()||a.ka.Gs(f,c,this);this.$()?this.D1(this.options.value):void 0===c.value?(this.zg=this.OR(),f=this.zg.filter(":checked"),0<f.length&&(f.each(function(){e.push(g(this).val())}),this.option("value",e,{_context:{Rc:!0,Sa:!0}})),void 0===this.options.value&&(this.options.value=[])):this.D1(this.options.value)},rc:function(){var a=this.element;this._super();if(a.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");a.uniqueId();this.Yr();this.zg=this.OR();
this.zg._ojRadioCheckbox().attr("data-oj-internal","");this.v7a=a.addClass("oj-checkboxset oj-component").attr("role","group");g(a.get(0).childNodes).filter(function(){return this.getAttribute&&"contextMenu"===this.getAttribute("slot")?!1:!0}).wrapAll("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");this._on(this.eu);this.qb()},e0:function(){this.Yr();this.zg=this.OR();this.zg.filter(".oj-checkbox").each(function(){var a=void 0!==g(this).attr("disabled")?!!g(this).prop("disabled"):!1;
g(this)._ojRadioCheckbox("option","disabled",a)});this.zg.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.xe().filter(":focusable").first().focus();return!0},h0:function(){},aj:function(){return this.options.required},Ie:a.ka.Ie,lo:a.ka.lo,Yr:function(){if(this.$()){var a,c,e=this.yr.bind(this),f=this.element.children("oj-option");if(0<f.length)for(a=0,c=f.length;a<c;a++)f[a].customOptionRenderer=e;f=this.element.children(".oj-checkboxset-wrapper").find("oj-option");if(0<f.length)for(a=
0,c=f.length;a<c;a++)f[a].customOptionRenderer=e}},yr:function(a){var c,e;g(a).uniqueId();var f=a.getAttribute("id"),h=f+"|cb",k=document.getElementById(h),l=null!==k;l||(c=document.createElement("span"),k=document.createElement("input"),e=document.createElement("label"),c.setAttribute("class","oj-choice-item"),k.setAttribute("type","checkbox"),k.setAttribute("id",h),e.setAttribute("for",h),a.parentElement.insertBefore(c,a),e.appendChild(a),c.appendChild(k),c.appendChild(e));c=this.element[0].id;
e=a.getAttribute("aria-label");h=a.getAttribute("aria-labelledby");k.setAttribute("data-oj-option-id",f);c&&""!=c?k.setAttribute("name",c):k.removeAttribute("name");e&&""!=e?k.setAttribute("aria-label",e):k.removeAttribute("aria-label");h&&""!=h?k.setAttribute("aria-labelledby",h):k.removeAttribute("aria-labelledby");a.disabled?k.setAttribute("disabled",!0):k.removeAttribute("disabled");l&&g(k)._ojRadioCheckbox("option","disabled",a.disabled)},hk:a.ka.hk,OR:function(){var b;b=this.element.find("input[type\x3dcheckbox]:first");
0===b.length&&a.D.warn("Could not find any input type\x3dcheckbox within this element");b=b.attr("name");return void 0===b?(b=this.element.find("input[type\x3dcheckbox]"),b.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+b+"]")},li:function(a,c,e){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.mi(c,e,{launcher:a})},_GetMessagingLauncherElement:function(){return this.widget()},qb:function(){this.tx(this.options.disabled);null!==this.zg&&(1===this.zg.length?
this.element.addClass("oj-checkboxset-single"):this.element.removeClass("oj-checkboxset-single"));this.element.hasClass("oj-choice-direction-column")||this.element.hasClass("oj-choice-direction-row")||this.element.addClass("oj-choice-direction-column");this.Ie(this.options.required);this.hk(null,this.options.labelledBy,this.widget())},eu:{change:function(a){this.KP(a)}},D1:function(a){void 0===a?this.option("value",[],{_context:{Rc:!0,Sa:!0}}):this.sKa(a)},sKa:function(a){if(!Array.isArray(a))throw Error("Invalid 'value' set on JET Checkboxset: "+
a+".It must be an Array. ");},KP:function(a){var d;d=this.zg;0<d.length&&d.each(function(){this===a.target&&g(this)._ojRadioCheckbox("setSelectedClass",a.target.checked)});d=this.$i();this.jc(d,a,c)},$i:function(){return this.gw()},Uk:function(a){var c,e=this.zg.length,f,h;this.D1(a);if(null===a||void 0===a||0===a.length)this.zg._ojRadioCheckbox("option","checked",!1);else for(c=0;c<e;c++){f=this.zg[c];h=g(f);f=this.Bt(f);f=this.hfa(a,f);var k=h._ojRadioCheckbox("option","checked");-1!==f?k||h._ojRadioCheckbox("option",
"checked",!0):k&&h._ojRadioCheckbox("option","checked",!1)}},gw:function(){var a=this,c=[],e=this.zg.filter(":checked");if(0===e.length)return[];e.each(function(){c.push(a.Bt(this))});return c},hfa:function(b,c){var e=b.indexOf(c),f;if(-1==e){f=b.length;for(var g=0;g<f;g++)if(a.f.Bb(b[g],c)){e=g;break}}return e},Bt:function(a){var c;this.$()?(a=document.getElementById(a.getAttribute("data-oj-option-id")))&&(c=a.value):c=a.value;return c},_GetDefaultStyleClass:function(){return"oj-checkboxset"},xe:function(){null==
this.zg&&(this.zg=this.OR());return this.zg},tz:function(){return!0},Eg:a.ka.Eg,tx:function(a){a=!!a;this.zg.each(function(){g(this).data("oj-_ojRadioCheckbox").JI(a)});this.zg._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,c,e){var f=this.options.labelledBy;this._super(a,c,e);switch(a){case "disabled":this.tx(c);break;case "labelledBy":this.hk(f,c,this.widget())}},vt:function(a,c,e){this._superApply(arguments);switch(a){case "required":this.Eg(a)}},getNodeBySubId:function(a){var c=this._super(a),
e,f;if(!c)switch(e=this.zg.get(),f=a.subId,f){case "oj-checkboxset-inputs":c=e;break;case "oj-checkboxset-checkbox":if(a=a.value,"undefined"!=typeof a){f=e.length;var g;g=-1;var k=[];for(g=0;g<f;g++)k[g]=this.Bt(e[g]);g=this.hfa(k,a);-1!==g&&(c=e[g])}}return c||null},getSubIdByNode:function(a){for(var c=this.xe()[0].parentElement.parentElement.parentElement,e=a;e&&e!=c;){"LABEL"==e.nodeName&&(e=document.getElementById(e["for"]));if("INPUT"==e.nodeName)return{subId:"oj-checkboxset-checkbox",value:this.Bt(e)};
e=e.parentElement}return this._super(a)},_destroy:function(){var a=this._super(),c=this.element[0].firstElementChild;this.zg&&this.zg._ojRadioCheckbox("destroy");g(c).contents().unwrap();return a}});var c={dv:!1}})();a.J.Ua("oj-checkboxset","editableValue",{properties:{disabled:{type:"boolean"},labelledBy:{type:"string"},required:{type:"boolean"},value:{type:"Array"}},methods:{validate:{}},extension:{Ya:"ojCheckboxset"}});a.J.register("oj-checkboxset",{metadata:a.J.getMetadata("oj-checkboxset")})});