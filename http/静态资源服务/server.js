const http=require("http")
const fs=require("fs")

const server=http.createServer((request,response)=>{
  let {pathname}=new URL(request.url,"http://127.0.0.1")

  let filePath=__dirname+"/page"+pathname

  fs.readFile(filePath,(err,data)=>{
    if(err){
      response.statusCode=500;
      response.end("文件读取失败");
      return;
    }
    else{
      response.end(data)
    }
  })

})

server.listen(9000,()=>{
  console.log("Run success")
})