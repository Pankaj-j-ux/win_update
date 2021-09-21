const path = require('path');
const {typer, name} = require('./index.js');

console.log(path.dirname('D:/PPBP/NodeJs/first/path.js'));

const ext = path.extname(`D:\PPBP\NodeJs\first\osmod.js`);
console.log(ext);

// console.log(path.format('D:/PPBP/NodeJs/first/osmod.js'));

console.log(typer(name));
