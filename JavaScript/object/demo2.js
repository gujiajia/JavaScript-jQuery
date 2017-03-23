// // _proto_ 
// //1. 创建一个原形对象
// var Student = {
//     name: "小明",
//     height: 1.7,
//     run: function() {
//         console.log(this.name + "is running");
//     }
// };
// // // _proto_ 低版本IE不建议用
// // var xiaoming = {
// //     name: "xiaoming"
// // }
// // xiaoming__proto__ = Student;
// // console.log(xiaoming.name); //xiaoming
// // console.log(xiaoming.run()); //undfined;

// // 2.创建一个方法
// function createStudent(name, height) {
//     // 基于原型创建一个新的对象
//     var s = Object.create(Student);
//     // 初始化新对象
//     s.name = name;
//     s.height = height;
//     return s;
// }
// // 3.基于原型创建一个新的对象
// var xiaoming = createStudent("小明", 1.8);
// console.log(xiaoming.name);
// console.log(xiaoming.height)
// xiaoming.run()
// console.log(xiaoming.__proto__ == Student);

// JS 原型对象的理解:1.所有对象都有原型对象
//使用构造器创建对象(构造函数)
// 普通函数
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // 静态属性
//     // this.location = "地球";
// } //new 创建后就变成构造函数

// // 静态属性和静态方法
// Person.prototype.location = "地球";
// Person.prototype.killPerson = function() {
//     console.log("kill" + this.name);
// }
// var a = new Person("张三", 24);
// var b = new Person("韩磊", 38);
// var c = new Person("李雪", 38);
// // console.log(a.location);
// // a.killPerson();
// // console.log(a.name);
// // console.log(b.name);
// // console.log(c.name);
// // Object.getPrototypeOf() 返回原型对象
// console.log(Object.getPrototypeOf(a));
// // 判断原型对象,是否属于某种类型
// console.log(a instanceof Person);
// // 构造函数的原型链
// console.log(a.__proto__ == Person.prototype);
// console.log(Person.prototype.constructor == Person);
// console.log(Person.prototype.__proto__ == Object.prototype);
// console.log(Object.prototype.__proto__ == null);
// console.log(Object == Object.prototype.constructor);

// // 面试题
// // 一
// var obj1 = { name: 'one' };
// obj2 = Object.create(obj1);
// obj2.name = 'two';
// console.log(obj1.name); //one
// // 二
// var obj1 = { prop: { name: 'one' } };
// obj2 = Object.create(obj1);
// obj2.prop.name = 'two';
// console.log(obj1.prop.name); // two
// // 三
// var obj1 = { list: ['one', 'one', 'one'] };
// obj2 = Object.create(obj1);
// obj2.list[0] = 'two';
// console.log(obj1.list[0]); // two
// /* 为什么后面两段代码修改的是原型链上的属性呢？
//  问题是，为什么二、三中的代码不是像代码一中直接给obj2添加属性，而是修改了原型链上的属性？求解释下一、二、三的结果？
//  */



// 创建一个构造函数
// function Student(props) {
//     this.name = props.name || '匿名'; // 忘传递参数,备用一个匿名
// }
// Student.prototype.hello = function() {
//         console.log('hello' + this.name + '!');
//     }
//     // call 绑定一个  Student扩展Primarystudent小学生
// function PrimaryStudent(props) {
//     // 调用Student 构造函数,绑定this
//     // this的指向  创建的时候,指向不能确定,谁调用指向谁
//     // student.call(xiaoming,参数)xiaoming是谁调用
//     //student.apply()
//     Student.call(this, props);
//     this.grade = props.grade || 1;
// }
// var a = new PrimaryStudent(props);



// 
class Student {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('hello' + this.name + '!');
    }
}
var xiaoming = new Student("小明");
xiaoming.hello();
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); //记得用super调用父类的构造方法!
        this.grade = grade;
    }
    myGrade() {
        console.log('I am at grade' + this.grade);
    }

}

var xiaohong = new PrimaryStudent("小红", 12)
xiaohong.myGrade();

class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(this.name + " is running");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    say() {
        console.log('hello,' + this.name);
    }
}
var xiao = new Animal("xiao");
xiao.run();
var hong = new Cat("hong");
hong.say();