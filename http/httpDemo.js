const http=require("http");


// 创建服务器
const server=http.createServer((request,response)=>{
  response.end("practive")
})

// 设置端口
server.listen(9000,()=>{
  console.log("success");
})