// 导入模块
const http=require('http');

// 创建服务
const server=http.createServer((request,response)=>{
  // 设置响应体
  response.end("httpRequestBody")
})

// 设置端口