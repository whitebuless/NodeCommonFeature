//缓冲区，处理二进制数据，大小固定，性能好，直接对内存操作
let buf1=Buffer.alloc(10);//全部初始化为0
let buf2=Buffer.allocUnsafe(10);//直接取出一段缓冲区，不进行初始化
let buf3=Buffer.from("hello!");//转为Unicode编码存入
//输出样例
console.log(buf1,buf2,buf3)
console.log(buf1[0])//单个字节输出
console.log(buf3.toString())//转字符串
console.log(buf3[0].toString(2))//转字符串（2进制形式）高位溢出