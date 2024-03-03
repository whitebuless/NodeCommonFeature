//搭建一个http服务响应一个四行三列的表格，表格要求隔色换行效果，点击单元格能够高亮
const http=require("http");

const server=http.createServer((request,response)=>{
  response.setHeader("content-type","text/html;charset=utf-8");
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        td{
          padding:20px 40px;
        }
        table tr:nth-child(odd){
          background:#aef;
        }
        table tr:nth-child(even){
          background:#fcb;
        }
        table,td{
          border-collapse:collapse;
        }
      </style>
    </head> 
    <body>
      <table border='1'>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
      </table>
      <script>
      // 通过事件委托绑定点击事件触发变色
        let table=document.querySelector("table")
        table.addEventListener("click",(e)=>{
          e.target.style.background='#222'
        })
      </script>
    </body>
    </html>
  `)
})

server.listen(9000,()=>{
  console.log("SUCCESS");
})