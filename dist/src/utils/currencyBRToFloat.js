const toString=require("./toString.js"),isNumber=require("../helpers/isNumber.js");function currencyBRToFloat(r){if(isNumber(r))return r;let e=toString(r).replace(/\./g,"");if(e=e.replace(/,/g,"."),e=e.replace("R",""),e=e.replace("$","").trim(),/[A-Za-zÀ-ú]/g.test(e))return!1;try{const r=parseFloat(e);if(isNumber(r))return r}catch(r){}return!1}module.exports=currencyBRToFloat;