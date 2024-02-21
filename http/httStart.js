// 导入模块
const http=require('http')

// 创建服务对象
const server=http.createServer((request,response)=>{
  //设置响应头，告诉浏览器采用html格式，编码字符集为utf-8防止中文乱码问题
  response.setHeader('content-type','text/html;charset=utf-8')
  response.end('<h1>你好<h1>');//设置响应体
});

// 监听端口，启动服务,
server.listen(9000,()=>{
  console.log('服务已经启动');
})


// 