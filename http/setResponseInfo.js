const http=require("http")

const server=http.createServer((request,response)=>{
  response.statusCode=200
  response.statusMessage="FlashWebApp"
  response.setHeader("content-type","text/html;charset=utf-8");
  response.setHeader("Server","Node.js");
  response.setHeader("arr",["a","b","c"]);

  response.write("love")
  response.end("")
})

server.listen(9000,()=>{
  console.log("建立成功");
})