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

let createTag = (tag, buffer) => {
  if(!tags[tag]){
    tags[tag] = {
      open: Buffer.from(`<${tag}>`),
      close: Buffer.from(`</${tag}>`),
    };
  }
  this.buffer = Buffer.concat([this.buffer, this.tags[tag].open, buffer, this.tags[tag].close]);
};

let tags = {};

let fileWriter = (file) => {

  let lineReader = reader.createInterface({
    input: fs.createReadStream(file),
  });

  fs.readFile('./files/pair-programming.txt', (err, data) => {
    if(err) throw err;


      });
    });

    fs.writeFile('./files/index.html', answer, (err) => {
      if(err) throw err;
    });
  });
};

fileWriter();



class Converter {
  constructor(){
    this.buffer = Buffer.from('');
    this.tags = {};
  }
  createTag(tag, buffer){
    if(!this.tags[tag]){
      this.tags[tag] = {
        open: Buffer.from(`<${tag}>`),
        close: Buffer.from(`</${tag}>`),
      };
    }
    this.buffer = Buffer.concat([this.buffer, this.tags[tag].open, buffer, this.tags[tag].close]);
  }

  convert(file) {
    var lineReader = reader.createInterface({
      input: fs.createReadStream(file),
    });

    lineReader.on('line', function (line) {
      if(line.match(/^[0-9]\./)) {
        this.createTag('h3', Buffer.from(line));
      }
      else if (line.match(/\./)){
        line.split('.').forEach( sentence => {
          sentence && this.createTag('li', Buffer.from(sentence));
        });
      }
      else if(line){
        this.createTag('h2', Buffer.from(line));
      }
    }.bind(this));

    lineReader.on('close', () => {
      fs.writeFile('./files/index.html', this.buffer, (err, data) => {
        console.log('start live-server, file is there!');
      });
    });
  }
}

let html = new Converter();
html.convert('./files/pair-programming.txt');