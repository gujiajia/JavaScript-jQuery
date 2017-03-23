//     var x = 1;

//     function bar() {
//         var y = x + 1;
//         console.log(y); //2
//     }
//     // var z = y + 1;
//     bar();
//     console.log(x); //1
//     // console.log(z); //找不到y 的变量  y is not defined
// }
// foo();


// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     var y = 'Bob';
// }
// foo();

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };

// xiaoming.age(); // 27,正常结果  //调用者是xiaoming这个对象，所以指向的是小明
// getAge(); // NaN   //没有明确指向的时候，指的就是window这个顶级对象 ，但是并没有birth这个属性 所以返回的是NaN