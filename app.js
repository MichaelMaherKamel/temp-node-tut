// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// Global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest files ( stores important info about our project/package)
// manual approac ( create package.json in the root, create properties etc)
// npm init ( step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');  //lodadash module

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)