const http=require("http")
const fs=require("fs")

const server=http.createServer((request,response)=>{
  let {pathname}=new URL(request.url,"http://127.0.0.1")
  if(pathname==='/'){
    let html=fs.readFileSync(__dirname+'/table2.html')
    response.end(html)
  }
  else if(pathname==='/style.css'){
    let css=fs.readFileSync(__dirname+'/style.css')
    response.end(css)
  }
  else if(pathname==='/index.js'){
    let js=fs.readFileSync(__dirname+'/index.js')
    response.end(js)
  }
  else{
    response.statusCode=404;
    response.end("找不到该页面")
  }
})

server.listen(9000,()=>{
  console.log("Run success")
})