// //以数字为索引的列表
// var prime = [2, 3, 4, 5]; //拥有4个值的数组,由"["和"]"划定边界
// console.log(prime[0]); //=>返回2,数组中的第一个元素(索引为0)
// console.log(prime.length); //=>返回4,数组中元素的个数
// console.log(prime[prime.length - 1]); //=>返回5,数组中最后一个元素
// prime[4] = 9; //通过赋值来添加新元素   [ 2, 3, 4, 5, 9 ]
// prime[4] = 11; //或通过赋值来改变已有的元素   [ 2, 3, 4, 5, 11 ]
// console.log(prime);

// var empty = []; //[]是空数组,它具有0个元素
// console.log(empty.length); //=>返回0

// //数组和对象中都可以包含另一个数组和对象:(语称为: 初始化表达式)
// var points = [{ x: 0, y: 0 }, { x: 1, y: 1 }]; //具有两个元素的数组,每个元素都是一个对象
// var data = {
//     trial1: [ //一个包含两个属性的对象,每个属性都是数组,数组的元素也是数组
//         [1, 2],
//         [3, 4]
//     ],
//     trial2: [
//         [2, 3],
//         [4, 5]
//     ]
// };
// console.log(points[1].x - points[0].x) //=>1  
// var num = "3" + "2";
// console.log(num); //=>32


//利用filter，去除Array的重复元素  indexOf()
var arr = [1, 2, 3, 4, 5, 3, 3, 3, 5];
var r = arr.filter(function(element, index, self) { //self等于arr,可不传
    // console.log(element);
    // console.log(index);
    // console.log(self);
    return self.indexOf(element) === index;
});

console.log(r);

// var arr = ["2", "23", "223", "2", "23"];
// arr = arr.filter(function(element, index, self) {
//     return arr.indexOf(element) === index;
// })
// console.log(arr);
// var arr = ["alpha", "beta", "copy", "delta"].copyWithin(2, 0, 2); //3为改动的起始位置,0为复制的开始,2为复制的结束,在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
// console.log(arr); //=>[ 'alpha', 'beta', 'alpha', 'beta' ]
// console.log(arr.fill(1)); //=>[ 1, 1, 1, 1 ]fill() 方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引,
// console.log(arr.fill(1, 1, 3)); //=>[ 'alpha', 1, 1, 'beta' ]将数组中指定区间的所有元素的值，都替换成某个固定的值。

// var arr2 = [1, 2, 3];
// arr2.fill(4); // [4, 4, 4]
// arr2.fill(4, 1); // [1, 4, 4]
// arr2.fill(4, 1, 2); // [1, 4, 3]
// arr2.fill(4, 1, 1); // [1, 2, 3]
// console.log(arr2.length);
// arr2.fill(4, -3, -2); // [4, 2, 3]:length3+(-3)=0,length3+(-2)=1
// arr2.fill(4, NaN, NaN); // [1, 2, 3]

// var arr4 = Array(3).fill(4); // [4, 4, 4]
// console.log(arr4);
// var arr3 = [].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3};{ '0': 4, '1': 4, '2': 4, length: 3 }
// console.log(arr3);

// parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。
// var arr5 = 2.2345;
// arr5 = parseInt(arr5); //arr5 =Number.parseInt(arr5);
// console.log(arr5); //=>2:console.log(parseInt(arr5));


//arguments 是一个类似数组的对象, 对应于传递给函数的参数。arguments对象是所有函数中可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数的条目，第一个条目的索引从0开始。
// let args = Array.prototype.slice.call(arguments);
// let args = [].slice.call(arguments);
// let args = Array.from(arguments);
// let args = [...arguments];
// let args = (
//     arguments.length === 1 ? [arguments[0]] :
//     Array.apply(null, arguments)
// );
// // console.log(args);
// // console.log(typeof arguments); //=>object
// console.log(typeof arguments[0]);

// var arr5 = [];
// if (!Array.prototype.fill) {
//     Array.prototype.fill = function(value) {

//         // Steps 1-2.
//         if (this == null) {
//             throw new TypeError('this is null or not defined');
//         }

//         var O = Object(this);

//         // Steps 3-5.
//         var len = O.length >>> 0; // parseInt(O.length)

//         // Steps 6-7.
//         var start = arguments[1];
//         var relativeStart = start >> 0;

//         // Step 8.
//         var k = relativeStart < 0 ?
//             Math.max(len + relativeStart, 0) :
//             Math.min(relativeStart, len);

//         // Steps 9-10.
//         var end = arguments[2];
//         var relativeEnd = end === undefined ?
//             len :
//             end >> 0;

//         // Step 11.
//         var final = relativeEnd < 0 ?
//             Math.max(len + relativeEnd, 0) :
//             Math.min(relativeEnd, len);

//         // Step 12.
//         while (k < final) {
//             O[k] = value;
//             k++;
//         }

//         // Step 13.
//         return O;
//     };
// }

// 排序
// var arr = [10, 20, 1, 2];
// arr.sort(function(x, y) {
//     if (x < y) {
//         return 1;
//     }
//     if (x > y) {
//         return -1;
//     }
//     return 0;
// });
// console.log(arr); //=>[ 20, 10, 2, 1 ]


// var a1 = ['B', 'A', 'C'];
// var a2 = a1.sort();
// console.log(a1);; // ['A', 'B', 'C']
// console.log(a2); // ['A', 'B', 'C']
// console.log(a1 === a2); // true, a1和a2是同一对象