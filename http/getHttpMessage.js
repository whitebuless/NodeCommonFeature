// 导入模块
const http=require("http");

//创建服务
const server=http.createServer((request,response)=>{
  // 获取请求的“方法”
  // console.log(request.method);
  // 获取请求的url
  // console.log(request.url);
  // 获取协议版本号
  // console.log(request.httpVersion);
  // 获取http请求头
  console.log(request.headers);
  // 设置响应体
  response.end("http");
})

//设置端口 
server.listen(9000,()=>{
  console.log("服务启动成功！");
})