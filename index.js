'use strict';

const fs = require('fs');

let test = 'test';

let writer = (bitFile) =>{
  fs.appendFile('./files/loop.js', bitFile, (err) => {
    if(err) throw err;
  });
};

let buffer = `let names = ['bob', 'jim', 'ted'];\nlet loop = (names) => {  names.forEach((element) => {\n  console.log(element);\n});\n};\nloop(names);`.split('');

let turnsky = Buffer.from('');

let fileFunc = (arr) => {
  arr.forEach((element) => {
    turnsky += element;
  });
  writer(turnsky);
};

fileFunc(buffer);
console.log(turnsky);

