const http=require("http");


// 创建服务器
const server=http.createServer((request,response)=>{
  let {method}=request;
  let {pathname}=new URL(request.url,"http://127.0.0.1");
  response.setHeader("content-type","text/html;charset=utf-8");
  if(method=="GET" && pathname=="/login"){
    response.end("登陆页面")
  }
  else if(method=="GET" && pathname=="/regis"){
    response.end("注册页面")
  }
  else{
    response.end("ELSE")
  }
})

// 设置端口
server.listen(9000,()=>{
  console.log("success");
})