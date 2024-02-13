const fs=require('fs')
const path=require('path')
// console.log(__dirname+'/index.html');

// resolve
// console.log(path.resolve(__dirname,'./index.html'));
// console.log(path.resolve(__dirname,'index.html'));

//sep
// console.log(path.sep);

// parse      __filename文件的绝对路径
// console.log(__filename);
let str=__filename
// console.log(path.parse(str));

// basename
console.log(path.basename(str));
// dirname    路径目录名
console.log(path.dirname(str));
// extname    路径拓展名
console.log(path.dirname(str));