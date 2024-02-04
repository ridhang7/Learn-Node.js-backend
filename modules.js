const name = require('./names')
const data = require('./alternate')
const _sayHi = require('./utils')

//without exporting module code is getting executed 
require('./mind-grenade');

//alternate.js ways to export module
console.log(data);

_sayHi('suzan')
_sayHi(name.john)
_sayHi(name.peter)