// //函数是带有名称和参数的JavaScript代码段,可以一次定义多次调用.
// var y = 3;

// function plus1(x) { //  定义了名为plus1的一个函数,带有参数
//     return x + 1; //返回一个比传入的参数达的值
// } //函数的代码块是由花括号包裹起来的部分
// console.log(plus1(y)); //=>4:y为3,调用函数的结果为3+1

// var square = function(x) { //函数是一种值.可以赋值给变量
//     return x * x; //计算函数的值
// }; //分号标识了赋值语句的结束
// console.log(square(2));
// console.log(square(plus1(y))) //=>16:在一个表达式中调用两个函数


// /*当将函数和对象和写在一起时,函数就变成了"方法"( method)
// 当函数赋值给对象的属性,我们称为"方法",所有的JavaScript对象都含有方法
// */
// var a = []; //创建一个空数组
// a.push(1, 2, 3); //push()方法向数组中添加元素
// console.log(a); //=>[ 1, 2, 3 ]
// a.reverse(); //另一个方法,将数组元素的次序反转  reverse相反
// console.log(a); //=>[ 3, 2, 1 ]

//我们也可以定义自己的方法,"this"关键词是对定义方法的对象的引用:这里的例子是包含两个位置信息的数组
// var points = [{ x: 0, y: 0 }, { x: 1, y: 1 }];
// points.dist = function() { //定义一个方法用来计算两点之间的距离
//     var p1 = this[0]; //通过this获取对当前数组的引用,并取得调用的数组前两个元素
//     var p2 = this[1];
//     var a = p2.x - p1.x; //X坐标轴上的距离
//     var b = p2.y - p1.y; //Y坐标轴上的距离
//     return Math.sqrt(a * a + b * b); //勾股定理,Math.sqrt来计算平方根
// }
// console.log(points); //=>[ { x: 0, y: 0 }, { x: 1, y: 1 }, dist: [Function] ]
// console.log(points.dist()); //=>1.4142135623730951 求得两个点之间的距离

// //控制语句
// //JavaScript语句使用该语句包含条件判断和循环
// //使用了类似于C/C++/Java和其他语言的语法
// function abs(x) { //求绝对值的函数
//     if (x >= 0) { //if语句...
//         return x; //如果比较结果为true则执行这里的代码
//     } //子句的结束
//     else { //当if条件不满足时执行else子句
//         return -x;
//     } //如果分支中只有一条语句,花括号是可以省略的,注意if/else中嵌套的return语句
// }
// console.log(abs(-1)); //正数的绝对值是它本身。负数的绝对值是它的相反数。0的绝对值还是0

// function factorial(n) { //计算阶乘的函数
//     var product = 1; //给product赋值为1
//     while (n > 1) { //当()内的表达式为true时循环执行{}内的代码
//         product *= n; //"product=product*n"的简写式
//         n--; //"n=n-1"的简写式
//     } //循环结束
//     return product; //返回product
// }

// console.log(factorial(4)); //=>24:1*4*3*2

// function factorial2(n) { //实现循环的另一种写法
//     var i, product = 1; //给product赋值为1
//     for (i = 2; i <= n; i++) //将i从2自增至 n
//         product *= i; //循环体,当循环体中只有一句代码,可以省略{}
//     return product; //返回计算好的阶乘
// }
// console.log(factorial2(5)); //=>120:1*2*3*4*5

// function Point(x, y) { //按照惯例,构造函数均以大写字母开始
//     this.x = x; //关键字this指代初始化的实例
//     this.y = y; //将函数参数存储为对象的属性
// } //不需要return
// console.log(Point(2, 3)) //=>undefined

//使用new关键字和构造函数



// function getAge() {
//     var y = new Date().getFullYear;
//     return y - this.birth;
// }


// function add(x, y, f) {
//     return f(x) + f(y);
// }
// console.log(add(-5, 6, Math.abs))

// //Math对象  内置对象  不需要被创建  也不需要被实例化
// // 属性个方法
// Math.E //2.718
// Math.LN //自然对数
// Math.PI //3.14  π

// // 方法
// Math.abs() //绝对值
// Math.ceil(4.2) //向上取整 5
// Math.floor(4.2) //向下取整 4
// Math.round(4.5) //四舍五入 3
// Math.random() //随机数
// function randomColor() {
//     var str = "0123456789abcdef";
//     var color = "#";
//     for (var i = 0; i < 6; i++)
//         color += [Math.floor(Math.random() * str.length)];
//     return color;
// }
// console.log(randomColor());

// var arr = [1, 2, 3, 5, 7, 9];
// var f = function(x, y) {
//     // return x * 10 + y; //f(f(f(1*10+2)*10+3)
//     return x + y;
// };
// console.log(arr.map(String).reduce(f));

// console.log(arr.map());




//删掉偶数，只保留奇数
// var arr = [1, 2, 4, 5, 6, 9, 10, 15];
// var r = arr.filter(function(x) {
//     return x % 2 !== 0;
// });
// console.log(r);
//获取时间
// var d = new Date();
// var y = d.getYear();
// var m = d.getMonth();
// var day = d.getDay();
// var h = d.getHours();
// var f = d.getMinutes();
// var miao = d.getSeconds();
// console.log(d); //当前时间
// console.log(y); //当前年份
// console.log(m + 1); //当前月份,设计缺陷
// console.log(day); //当前日期
// console.log(h); //当前小时
// console.log(f); //当前分
// console.log(miao); //当前秒

function f1() {　　　　
    var n = 999;　
    nAdd = function() {
        n += 1;
    }　　　
    function f2() {　　　　　　
        console.log("n的值" + n);　　
        return n;　　
    }　　　　
    return f2;　　
}　　
var result = f1();
console.log(result());
nAdd();
console.log(result());


// 箭头函数
var a = (x, y) => x + y;
console.log(a(3, 4));


//generator跟函数很像，定义如下：(生成器)
// var g = function* foo(x) {
//     yield x + 1;
//     yield x + 2;
//     return x + 3;
// }
// console.log(g(1));

// 构造函数
function Person(name, age) {
    this.name = name || "匿名";
    this.age = age || 20;

}
var a = new Person("张三", 20);
console.log(a.name); //张三
console.log(a.arguments); //undefined

// 时间戳
if (Date.now) {
    var b = Date.now(); //进行时区转换
} else {
    console.log(new Date().getTime());
}
var c = new Date(b);
console.log(c);


// 正则表达式 RegExp "//"
var reg = /box/igm; //字面量表达法  模式修饰符 i 不区分大小写   g 全局匹配  m 多行匹配,不写默认为不区分大小写,不全局匹配,不多行匹配
var reg2 = new RegExp("box"); //new 操作符
var reg3 = /[0-9]/; //匹配方括号中的值,[]范围,另一种/[0123456789]/
var reg4 = /[1-9][0-9][0-9]/; //匹配三位数,是一个字符一个字符逐个匹配
var reg5 = /[^0-9]/; //方括号里的^,表示否定,不出现0-9
var reg6 = /^1[3578][0-9]{9}$/ //手机号必须是是十一位的数字,1开头,第二位3578,剩下{9}位,^$4绝对
var reg7 = /^1[3578]\d{9}$/; //\d 代表[0-9]
var reg8 = /^1[3578]\D{9}$/; //大写D是进行否定[^0-9],不能出现数字;
// \s 任意空白字符[\r\t\y\u]
// \S 进行否定,不出现任意空白字符[^\r\t\y\u]
// \w 数字字母下划线 [a-zA-Z0-9_]
// \W 进行否定,不出现[^a-eA-e_]
var reg9 = /^0\d{3,4}}\-?\d{7,8}$/; //{3,4}出现3或4个,?不出现或者出现一次
var reg9 = /^0\d{3,4}}[\-\s]?\d{7,8}$/; // \s 空格字符   出现- 或者空格
//{n} 确定出现n次  n,m 均为非负整数,且m大于等于n
//{n,} 大于等于n次
//{n,m} 在n次和m之间
// ^ 该符号后面的字符,必须出现在字符串的首位
// $ 该符号后面的字符,必须出现在字符串的末尾
// \b 出现在边,字符的尾部
// \D 进行否定

/**
 * 手机号  11位
 * 省份证号 18位 首位不能是0  最后一位 数字或者x
 * QQ号 10000  最多13位
 * 邮箱  合法
 * 固定电话  全国范围内的固定电话
 * 年龄范围  18-45
 * 姓名  中文  2-4  [\u4e00-\u9fa5]
 */
var phone = /^1[3578]\d{9}$/;
var id = /^[1-9]\d{16}(\d|x)$/;
var qq = /^[1-9]\d{4,12}$/;
// var email = /^\d*[@][\d|\w]\.[c][om|n]$/;
var telephone = /^0\d{2,3}(\-|\s)?\d{7,8}$/;
// var age = /^[1-4][89]|[0-9]$/;
var name = /^[\u4e00-\u9fa5]{2,4}$/;