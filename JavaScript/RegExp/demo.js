//  //test() 测试 返回布尔值
//  var reg = /^1[3578]\d{9}$/;
//  var str = 13728930439; //true
//  console.log(reg.test(str));
//  var qq = /^[1-9]\d{4,12}$/;
//  var str2 = 100000000000;
//  console.log(qq.test(str2));
//  var email = /^(\d|\w)*[@](\d|\w){2,3}\.[c](om|n)$/;
//  var str3 = "947452831@qq.com"; //false
//  console.log(email.test(str3));

//  //  exec() 返回数组
//  //  math()
//  // replace()  对字符串进行查找,替换成指定的字符串
//  //search()
//  //  split()
//  var reg2 = /box/;
//  var str4 = "this is box ! this is box";
//  console.log(reg.test(str4));
//  console.log(reg.exec(str4));
//  console.log(str.replace(reg2, "tom"));
//  console.log(str.split(reg2));

// 获取焦点事件
// 姓名
function focus_username() {
    //  1.input 获取焦点事件 onfocus="focus_username()"
    var result_username = document.getElementById("result_username");
    // 提示语
    result_username.innerHTML = "请输入您的姓名(2-4个中文字符)";
    // 字体颜色
    result_username.style.color = "#f00";
    //  input border变颜色
    document.form.username.style.border = "1px solid #f00";
    //  清空input内容 input.value=""
    document.form.username.value = "";
}
// 失去焦点事件
// onblur=blur_username()
// 获取输入的值 input.value
//指定一个正则表达式  reg=//;
//   if(){提示没有输入的情况}else{if(){提示输入不合法的情况}else{提示输入合法的情况}}
function blur_username() {
    var result_username = document.getElementById("result_username");
    var pre = document.form.username.value;
    var reg = /^[\u4e00-\u9fa5]{2,}/;
    if (pre == "") {
        result_username.innerHTML = "(必填项)用户名不能为空";
        result_username.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        result_username.innerHTML = "姓名必须两位及两位以上的汉字";
        result_username.style.color = "#f00";
        return false;
    } else {
        result_username.innerHTML = '<img src="true.png">';
        document.form.username.style.border = "1px solid #a9a9a9";
        return true;
    }
}
// 年龄
function focus_userage() {
    var result_userage = document.getElementById("result_userage");
    result_userage.innerHTML = "(必填项)18-28岁之间";
    result_userage.style.color = "#f00";
    document.form.userage.style.border = "1px solid #f00";
    document.form.userage.value = "";
}

function blur_userage() {
    var result_userage = document.getElementById("result_userage");
    var pre = document.form.userage.value;
    var reg = /^([1][89]|[2][0-8])$/;
    if (pre == "") {
        result_userage.innerHTML = "(必填项)年龄不能为空";
        result_userage.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        result_userage.innerHTML = "年龄输入不合法";
        result_userage.style.color = "#f00";
        return false;
    } else {
        result_userage.innerHTML = '<img src="true.png">';
        document.form.userage.style.border = "1px solid #a9a9a9";
        return true;
    }
}
// 身份证号
function focus_ID() {
    var result_ID = document.getElementById("result_ID");
    result_ID.innerHTML = "(必填项)请输入您的二代身份证号";
    result_ID.style.color = "#f00";
    document.form.ID.style.border = "1px solid #f00";
    // document.form.ID.value = "";
}

function blur_ID() {
    var result_ID = document.getElementById("result_ID");
    var pre = document.form.ID.value;
    var reg = /^[1-9]\d{16}(\d|x)$/;
    if (pre == "") {
        result_ID.innerHTML = "(必填项)二代身份证号码不能为空";
        result_ID.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        result_ID.innerHTML = "二代身份证号码输入不合法";
        result_ID.style.color = "#f00";
        return false;
    } else {
        result_ID.innerHTML = '<img src="true.png">';
        document.form.ID.style.border = "1px solid #a9a9a9";
        return true;
    }
}
// 固定电话
function focus_telephone() {
    var result_telephone = document.getElementById("result_telephone");
    result_telephone.innerHTML = "请输入您的座机号码";
    result_telephone.style.color = "#f00";
    document.form.Telephone.style.border = "1px solid #f00";
    document.form.Telephone.value = "";
}

function blur_telephone() {
    var result_telephone = document.getElementById("result_telephone");
    var pre = document.form.Telephone.value;
    var reg = /^0\d{2,3}(\-|\s)?\d{7,8}$/;
    if (pre == "") {
        result_telephone.innerHTML = "座机号码不能为空";
        result_telephone.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        result_telephone.innerHTML = "座机号码字符输入不合法";
        result_telephone.style.color = "#f00";
        return false;
    } else {
        result_telephone.innerHTML = '<img src="true.png">';
        document.form.Telephone.style.border = "1px solid #a9a9a9";
        return true;
    }
}
// 手机号
function focus_Mobile() {
    var result_Mobile = document.getElementById("result_Mobile");
    result_Mobile.innerHTML = "请输入您的手机号码";
    result_Mobile.style.color = "#f00";
    document.form.Mobile.style.border = "1px solid #f00";
    document.form.Mobile.value = "";
}

function blur_Mobile() {
    var result_Mobile = document.getElementById("result_Mobile");
    var pre = document.form.Mobile.value;
    var reg = /^[1][3578]\d{9}$/;
    if (pre == "") {
        result_Mobile.innerHTML = "手机号码不能为空";
        result_Mobile.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        result_Mobile.innerHTML = "您输入的手机号码不合法";
        result_Mobile.style.color = "#f00";
        return false;
    } else {
        result_Mobile.innerHTML = '<img src="true.png">';
        document.form.Mobile.style.border = "1px solid #a9a9a9";
        return true;
    }
}
// 邮箱
function focus_qq() {
    var result_qq = document.getElementById("result_qq");
    result_qq.innerHTML = "(必填项)请输入您的QQ号";
    result_qq.style.color = "#f00";
    document.form.qq.style.border = "1px solid #f00";
    document.form.qq.value = "";
}

function blur_qq() {
    var result_qq = document.getElementById("result_qq");
    var pre = document.form.qq.value;
    var reg = /^[1-9](\d{4,12})$/;
    if (pre == "") {
        result_qq.innerHTML = "(必填项)QQ字符不能为空";
        result_qq.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        result_qq.innerHTML = "QQ字符输入不合法";
        result_qq.style.color = "#f00";
        return false;
    } else {
        result_qq.innerHTML = '<img src="true.png"';
        document.form.qq.style.border = "1px solid #a9a9a9";
        return true;
    }
}

function focus_email() {
    var result_email = document.getElementById("result_email");
    result_email.innerHTML = "请输入你的邮箱号码";
    result_email.style.color = "#f00";
    document.form.email.style.border = "1px solid #f00";
    // document.form.email.value = "";
}

function blur_email() {
    var result_email = document.getElementById("result_email");
    var pre = document.form.email.value;
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    if (pre == "") {
        result_email.innerHTML = "邮箱号码不能为空";
        result_email.style.color = "#f00";
        return false;
    } else if (!reg.test(pre)) {
        console.log(reg.test(pre));
        result_email.innerHTML = "邮箱号码输入不合法";
        result_email.style.color = "#f00";
        return false;
    } else {
        result_email.innerHTML = '<img src="true.png">';
        document.form.email.style.border = "1px solid #a9a9a9";
        return true;
    }
}
// 表单提交
function checkForm() {
    var flag_username = blur_username();
    var flag_userage = blur_userage();
    var flag_ID = blur_ID();
    var flag_Tel = blur_telephone();
    var flag_Mobile = blur_Mobile();
    var flag_qq = blur_qq();
    var flag_mail = blur_email();
    if (flag_username == true && flag_userage == true && flag_ID == true && flag_Tel == true &&
        flag_Mobile == true && flag_email == true
    ) {
        console.log("提交成功");
        return true;
    } else {
        alert("提交失败");
        return false;
    }
}