let obj = null;

let s1 = null;

// (function () {
    //'use strict';

    let s2 = Symbol();
    s1 = s2;
    obj = {[s2]: "mySymbol"};
    console.log(obj[s2]);
    console.log(obj[s2] == obj[s1]);

//}());

console.log(obj[s1]);