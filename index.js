'use strict';

const fs = require('fs');

let test = 'test';

let writer = (bitFile) =>{
  fs.writeFile('./files/loop.js', bitFile, (err) => {
    if(err) throw err;
  });
};

let code = `'use strict';\n\nlet names = ['bob', 'jim', 'ted'];\nlet loop = (names) => {  names.forEach((element) => {\n  console.log(element);\n});\n};\nloop(names);`.split('');

let turnsky = Buffer.from('');


let fileFunc = (arr) => {
  arr.forEach((element) => {
    turnsky = Buffer.concat([turnsky, Buffer.from(element)]);
  });
  writer(turnsky);
};

fileFunc(code);
// console.log(turnsky);

let stringfyBuffer = (buffer) => {
  let str = '';
  for(let char of buffer){
    str += String.fromCharCode(char);
  }

  return str;
};

let fileWriter = () => {
  
  fs.readFile('./files/pair-programming.txt', (err, data) => {
    if(err) throw err;
    
    // console.log(stringfyBuffer(data));
    let newData = stringfyBuffer(data);
    console.log(newData);
    fs.writeFile('./files/index.html', newData, (err) => {
      if(err) throw err;
    });
  });
};

fileWriter();
