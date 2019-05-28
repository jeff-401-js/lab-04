'use strict';

const fs = require('fs');
const reader = require('readline');

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
    let newArr = [];
    let answer = [];


    let newData = stringfyBuffer(data);
    // console.log(newData);
    let arr = newData.split('\n\n');
    // console.log(arr);

    arr.forEach((e, idx) => {
      newArr.push(arr[idx]);
      console.log(newArr);

      newArr.forEach((element, index) => {

        if(element.includes(newArr[idx][index][0] + newArr[idx][index][1])){
          answer.push(`<h3>${newArr[idx][index].split('\n')[0]}</h3>`);
          answer.push('\n');
          answer.push(`<li>${newArr[idx][index].split('.')[1]}</li>`);
          answer.push('\n\n');
        }
      });
    });

    fs.writeFile('./files/index.html', answer, (err) => {
      if(err) throw err;
    });
  });
};

fileWriter();



