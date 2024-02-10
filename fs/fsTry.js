//写文件步骤

/*
  1.导入fs模块
  2.执行写入操作，fs.writeFile(file,data[,options],callback)
**/
const { log } = require('console');
const fs=require('fs')
// 主JS线程与IO线程异步执行，主线程调用结束后，callback才可以执行，执行错误对象传入err中
fs.writeFile('D:/MYProgramme/Projects/NodeCommonFeature/fs/sentence','helo nodejs',err=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
})

// 同步版本（不推荐）无回调函数，后续js需要等待io结束后执行
fs.writeFileSync('D:/MYProgramme/Projects/NodeCommonFeature/fs/sentence','helo nodejs')

// 追加写入
fs.appendFile('D:/MYProgramme/Projects/NodeCommonFeature/fs/sentence','helo nodejs',err=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
})

//追加写入（同步）
fs.appendFileSync('D:/MYProgramme/Projects/NodeCommonFeature/fs/sentence','helo nodejs')

