const _ = require('lodash');

function keys(value) {
    if(!isObj(value)) return [];
    // if(Object.keys) return Object.keys(value);
    let keys = [];
    for(let key in value){
        if(_.has(value, key)){
            keys.push(key);
        }
    }
    return  keys;
 
}

function isObj(obj){
    const type = typeof obj;
    return type ==='function' || type === 'object' && !!obj;
}

console.log(keys({name: 'rohit', age:27}));