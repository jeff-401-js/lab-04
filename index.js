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
    let newArr = [];
    let answer = [];

    let newData = stringfyBuffer(data);
    // console.log(newData);
    // let type = article + h2 + newData;
    // console.log(type);
    // newData = type + liClose + articleClose;
    // newData += article;
    // console.log(newData);
    // changer(newData);
    let arr = newData.split('\n\n');
    // console.log(arr);

    arr.forEach((element, idx) => {
      newArr.push(arr[idx]);
      console.log(newArr);
        let newb = element.split('.');
        // console.log(newb);
        newb.forEach((element, idx) => {
          // console.log(element + idx);
          // element.unshift(li);
          element = `${li}\n` + element + `\n${liClose}`;
          
        });
        return element;
      }
    });
    // console.log(arr);
    

    fs.writeFile('./files/index.html', newArr, (err) => {
      if(err) throw err;
    });
  });
};

fileWriter();


// let changer = (data) => {
//   let arr = data.split('\n');
//   console.log(arr);
//   return arr;
// };

