const fs=require('fs')
for(var i=0;i<1000;i++){
  fs.appendFile('./sentence','this is a sentence',err=>{console.log('success');})
}