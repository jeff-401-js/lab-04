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
  // let article =  Buffer.from('<article>');
  // let articleClose = Buffer.from('</article>');
  let article = `<article>`;
  let articleClose = `</article>`;
  // console.log(article);
  // article.split(' ');
  // console.log(article);
  let h2 = `<h2>`;
  let h2Close = `</h2>`;
  let h3 = `<h3>`;
  let h3Close = `</h3>`;
  let li = `<li>`;
  let liClose = `</li>`;

  fs.readFile('./files/pair-programming.txt', (err, data) => {
    if(err) throw err;
    let bufferArray = [...data];
    // bufferArray.unshift(article);
    // bufferArray.push(articleClose);
    // console.log(bufferArray);
    // console.log(data);
    // bufferArray.join('');
    // console.log(bufferArray);
    let newData = stringfyBuffer(bufferArray);
    let type = article + newData;
    // console.log(type);
    newData = type + articleClose;
    // newData += article;
    // console.log(newData);
    // changer(newData);
    let arr = newData.split('\n');
    // console.log(arr);

    arr.forEach((element) => {
      if(element.includes('.')){
        
        // element.unshift(h2);
        // element.push(h2Close);
        let newb = element.split('.');
        console.log(newb);
        newb.forEach((element, idx) => {
          console.log(element + idx);
          element = '<li>\n ' + element + '\n</li>';
        });
      }
    });
    // console.log(arr);
    

    fs.writeFile('./files/index.html', newData, (err) => {
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

