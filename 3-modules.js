// NodeJS uses CommonJS where every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utls')
const data = require('./6-alternative-flavor')


require('./7-mind-grenade')
console.log( data.singlePerson.name + " has " + data.items[0])
sayHi('Mike')
sayHi(names.john)
sayHi(names.peter)
