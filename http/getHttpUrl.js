// 导入模块
const http=require("http");
const url=require("url")

// 创建服务
const server=http.createServer((request,response)=>{
  let res=url.parse(request.url,true);
  let pathname=res.pathname;
  let val=res.query.keyword;
  console.log(res);
  console.log(pathname);
  console.log(val);
  // 设置响应体
  response.end("hello");
})

// 设置端口
server.listen(9000,()=>{
  console.log("服务启动成功");
})