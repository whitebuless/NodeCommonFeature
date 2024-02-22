// 导入模块
const http=require('http');

// 创建服务
const server=http.createServer((request,response)=>{
  // 声明变量接受结果
  let body='';
  // 绑定data事件
  request.on('data',chunk=>{
    body+=chunk;
  })
  // 绑定end事件
  request.on('end',chunk=>{
    console.log(body);
    response.end('hello http')
  })
})

// 设置端口
server.listen(9000,()=>{
  console.log("服务启动成功！");
})