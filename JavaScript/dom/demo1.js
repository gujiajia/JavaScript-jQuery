// var test_p = document.getElementById("test-p");
// console.log(test_p);
// var c_red = document.getElementsByClassName("c-red");
// var c_green = document.getElementByTagName("c-red>p");
// console.log(c_green);
function disable() {
    document.getElementById("check1").disabled = flase
}

function DateDemo() {
    var d, s = "今天日期是：";
    d = new Date();
    s += d.getMonth() + "/";
    s += d.getDate() + "/";
    s += d.getYear();
    return s;
}
console.log(DateDemo());
var arr = [1, 2, 4, 5, 3, 4, 1, 1];
arr = arr.filter(function(element, index) {
    return arr.indexOf(element) === index;
})

console.log(arr.sort());

var Array = [];

function getRandom(start, end) {
    var Choice = start - end + 1;
    return Math.abs(Math.floor(Math.random() * Choice)) + start;
}
for (var i = 0; i < 10; i++) {
    Array.push(getRandom(10, 100))
}
console.log(Array.sort());

function counter() {

    var date = new Date();

    var year = date.getFullYear();

    var date2 = new Date(year, 12, 31, 23, 59, 59);

    /*转换成秒*/
    var time = (date2 - date) / 1000;

    var day = Math.floor(time / (24 * 60 * 60))


    var hour = Math.floor(time % (24 * 60 * 60) / (60 * 60))

    var minute = Math.floor(time % (24 * 60 * 60) % (60 * 60) / 60);

    var second = Math.floor(time % (24 * 60 * 60) % (60 * 60) % 60);

    var str = year + "年还剩" + day + "天" + hour + "时" + minute + "分" + second + "秒";

    console.log(str);

}

window.setInterval("counter()", 1000);