//运算符
//运算符操作数,生成一个新的值
//最常见的是算数运算符
3 + 2 //=>5:加法
3 - 2 //=>1:减法
3 * 2 //=>6:乘法
3 / 2 //=>1.5:除法


//JavaScript定义了一些算数运算符的简写形式
var count = 0; //定义一个变量
count++; //自增1
count--; //自减1
count += 2; //自增2:和"count=count+2"写法一样
count *= 3; //自乘3:和"count=count*3"写法一样
console.log(count); //=>6:变量名本身也是一个表达式

//相等关系运算符用来判断两值是否相等
//不等/大于/小于运算符的运算结果是true或false
var x = 2,
    y = 3; //这里的等是赋值的意思,不是比较相等
console.log(x == y) //=>false:相等
console.log(x != y) //=>true:不等
console.log(x < y) //=>true:小于
console.log(x <= y) //=>true:小于或等于
console.log(x > y) //=>false:大于
console.log(x >= y) //=>false:大于或等于
console.log("two" == "three") //=>false:两个字符串不想等
console.log("two" > "three") //=>true:"tw"在字母表中的索引大于"th"
console.log(false == (x > y)) //true:false和false相等

//逻辑运算符是对布尔值的合并或求反
console.log((x == 2) && (y == 3)) //=>true:两个比较都是true,&&表示"与"
console.log((x > 3) || (y < 3)) //=>false:两个比较不都是true,||表示"或"
console.log(!(x == y)) //=>true:求反
console.log((x > 2) && (y == 3)) //false:必须满足两个条件
console.log((x > 2) || (y == 3)) //true:只要满足一个条件