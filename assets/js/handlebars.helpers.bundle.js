"use strict";(()=>{function n(t){t.registerHelper("contains",function(r,i,s){return r=t.escapeExpression(r),i=t.escapeExpression(i),i.indexOf(r)>-1?s.fn(this):s.inverse(this)}),t.registerHelper("ifCond",function(r,i,s,e){switch(i){case"==":return r==s?e.fn(this):e.inverse(this);case"===":return r===s?e.fn(this):e.inverse(this);case"!=":return r!=s?e.fn(this):e.inverse(this);case"!==":return r!==s?e.fn(this):e.inverse(this);case"<":return r<s?e.fn(this):e.inverse(this);case"<=":return r<=s?e.fn(this):e.inverse(this);case">":return r>s?e.fn(this):e.inverse(this);case">=":return r>=s?e.fn(this):e.inverse(this);case"&&":return r&&s?e.fn(this):e.inverse(this);case"||":return r||s?e.fn(this):e.inverse(this);case"contains":return typeof r=="string"&&typeof s=="string"?r.toLowerCase().indexOf(s.toLowerCase())>=0?e.fn(this):e.inverse(this):e.inverse(this);default:return e.inverse(this)}})}})();
//# sourceMappingURL=handlebars.helpers.bundle.js.map