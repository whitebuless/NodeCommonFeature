  // 通过事件委托绑定点击事件触发变色
  let table=document.querySelector("table")
  table.addEventListener("click",(e)=>{
    e.target.style.background='#222'
  })