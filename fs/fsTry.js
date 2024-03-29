//写文件步骤

/*
  1.导入fs模块
  2.执行写入操作，fs.writeFile(file,data[,options],callback)
**/
const { log } = require('console');
const process=require('process')
const fs=require('fs')
// 主JS线程与IO线程异步执行，主线程调用结束后，callback才可以执行，执行错误对象传入err中
// fs.writeFile('./sentence','helo nodejs',err=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("success");
//   }
// })

// 同步版本（不推荐）无回调函数，后续js需要等待io结束后执行
// fs.writeFileSync('./sentence','helo nodejs')

// // 追加写入
// fs.appendFile('./sentence','helo nodejs',err=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("success");
//   }
// })

//追加写入（同步）
// fs.appendFileSync('./sentence','helo nodejs')

// 流式写入  用于写入频繁的场景
// const ws=fs.createWriteStream('./sentence');
//写入
// ws.write("first\n");
// ws.write('second\n');
// ws.write('third\n');
//关闭
// ws.close()

// 文件读取
//1.异步读取
// fs.readFile(path[,option],callback)
// fs.readFile("./sentence",(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(data.toString())
//   }
// })
//2.同步
// let data=fs.readFileSync('./sentence')
// console.log(data.toString());

// 流式读取
// const rs=fs.createReadStream('./0829.jpg')
// // 绑定data事件读完一块执行回调
// rs.on('data',chunk=>{
//   console.log(chunk);
// })
// // 绑定可选事件end
// rs.on('end',()=>{
//   console.log("读取完成");
// })

//复制文件
// way1  readFile
// let data=fs.readFileSync('./pic.jpg');
// fs.writeFileSync('./copy.jpg',data);
// console.log(process.memoryUsage())  //通过rss比较内存的占用量
// way2 stream  <better>
// const rs=fs.createReadStream('./pic.jpg');
// const ws=fs.createWriteStream('./copy2.jpg');
// rs.on('data',chunk=>{
//   ws.write(chunk)
// })
// console.log(process.memoryUsage())

// 重命名
// fs.rename(file,newfile,callback)
// fs.rename('./sentence','./words',err=>{
//   if(err){
//     console.log('操作失败');
//   }
//   else{
//     console.log('重命名成功');
//   }
// })
// 文件移动
// fs.rename('./copy.jpg','./deepfile/COPY.jpg',err=>{
//   if(err){
//     console.log('操作失败');
//   }
//   else{
//     console.log('重命名成功');
//   }
// })

// 文件删除    unlink  unlinkSync
// fs.unlink('./copy2 copy.jpg',err=>{
//   if(err){
//     console.log('删除失败');
//     return;
//   }
//   else{
//     console.log('删除成功');
//   }
// })
//way2       rm  rmSync
// fs.rm('./copy2 copy.jpg',err=>{
//   if(err){
//     console.log('失败');
//   }
//   else{
//     console.log('成功');
//   }
// })

// 文件夹操作
// 创建文件夹
// fs.mkdir('./html',err=>{
//   if(err){
//     console.log('创建失败');
//     return;
//   }
//   else{
//     console.log('成功');
//   }
// })
// 递归创建
// fs.mkdir('./a/b/c',{recursive:true},err=>{
//   if(err){
//     console.log('创建失败');
//     return;
//   }
//   else{
//     console.log('成功');
//   }
// })
//读取文件夹
// fs.readdir('../buffer',(err,data)=>{
//   if(err){
//     console.log('失败');
//     return;
//   }
//   else{
//     console.log(data);
//   }
// });

// 删除文件夹
// fs.rmdir('./html',err=>{
//   if(err){
//     console.log('失败');
//     return;
//   }
//   else{
//     console.log('成功');
//   }
// })
// fs.rmdir('./a',{recursive:true},err=>{
//   if(err){
//     console.log('失败');
//     return;
//   }
//   else{
//     console.log('成功');
//   }
// })

// 查看资源状态
fs.stat('./copy2.jpg',(err,data)=>{
  if(err){
    console.log('失败');
    return;
  }
  else{
    console.log(data);
  }
})