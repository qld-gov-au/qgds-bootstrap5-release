"use strict";(()=>{function a(f){f.registerHelper("contains",function(r,i,t){return r=f.escapeExpression(r),i=f.escapeExpression(i),i.indexOf(r)>-1?t.fn(this):t.inverse(this)}),f.registerHelper("ifCond",function(r,i,t,e){switch(i){case"==":return r==t?e.fn(this):e.inverse(this);case"===":return r===t?e.fn(this):e.inverse(this);case"!=":return r!=t?e.fn(this):e.inverse(this);case"!==":return r!==t?e.fn(this):e.inverse(this);case"<":return r<t?e.fn(this):e.inverse(this);case"<=":return r<=t?e.fn(this):e.inverse(this);case">":return r>t?e.fn(this):e.inverse(this);case">=":return r>=t?e.fn(this):e.inverse(this);case"&&":return r&&t?e.fn(this):e.inverse(this);case"||":return r||t?e.fn(this):e.inverse(this);case"contains":return typeof r=="string"&&typeof t=="string"?r.toLowerCase().indexOf(t.toLowerCase())>=0?e.fn(this):e.inverse(this):e.inverse(this);default:return e.inverse(this)}}),f.registerHelper("isType",function(r,i,t){return r===i?t.fn(this):t.inverse(this)}),f.registerHelper("ifAny",function(...r){let i=r.pop();return r.some(t=>!!t)?i.fn(this):i.inverse(this)}),f.registerHelper("now",function(){return new Date().toISOString()}),f.registerHelper("formatDate",function(r,i,t){let e;if(r&&(e=new Date(r)),isNaN(e)&&i&&(e=new Date(i)),isNaN(e))return"Invalid Date";var n=["January","February","March","April","May","June","July","August","September","October","November","December"],u=e.getDate(),s=n[e.getMonth()],h=e.getFullYear();switch(t){case"YYYY":return`${h}`;case"MMMM YYYY":return`${s} ${h}`;default:return`${u} ${s} ${h}`}}),f.registerHelper("formatDateOrToday",function(r,i){let t=r||new Date().toISOString();return f.helpers.formatDate(r,t,i)}),f.registerHelper("formatDuration",function(r,i){if(!r)return"";if(typeof r=="string"&&i!=="long")return r;let t="",e=[],n,u,s;if(typeof r=="string"){let h=r.split(":");s=h[0],h.length==2?[u="",s=""]=h:h.length==3&&([n="",u="",s=""]=h)}else[n="",u="",s=""]=r;return i==="long"?(n>0&&e.push(`${n} hour${n>1?"s":""}`),u>0&&e.push(`${u} minute${u>1?"s":""}`),s>0&&e.push(`${s} second${s>1?"s":""}`),t=e.join(" ")):(n>0&&e.push(n.toString().padStart(2,0)),e.push(u.toString().padStart(2,0)),e.push(s.toString().padStart(2,0)),t=e.join(":")),t}),f.registerHelper("getClassNames",function(r,i){let t=r.split(",").map(n=>n.trim()),e=[];for(let n=0;n<t.length;n++){let u=t[n];for(let s=0;s<i.length;s++)if(i[s][u]===!0){e.push(u);break}}return e.length>0?e.join(" "):""})}typeof Handlebars!="undefined"&&a(Handlebars);})();
//# sourceMappingURL=handlebars.helpers.bundle.js.map
