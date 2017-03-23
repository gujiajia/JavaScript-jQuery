 function focus_username() {
     var resultObj = document.getElementById('result_username');
     resultObj.innerHTML = "请输入您的姓名";
     resultObj.style.color = "blue";
     document.form.username.style = "border:1px solid red";
 }

 function blur_username() {
     var resultObj = document.getElementById('result_username')
     var pre = document.form.username.value;
     var reg = /^[\u4e00-\u9fa5]{2,}/;
     if (pre == '') {
         resultObj.innerHTML = "(必填项)用户名不能为空";
         resultObj.style.color = "red";
         return false;
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "姓名必须为两位以上的汉字";
         resultObj.style.color = "red";
         return false;
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
         return true;
     }
 }


 function focus_userage() {
     var resultObj = document.getElementById('result_userage');
     resultObj.innerHTML = "(必填项)年龄在18-28岁之间";
     resultObj.style.color = "blue";
     document.form.userage.style = "border:1px solid red";
 }

 function blur_userage() {
     var resultObj = document.getElementById('result_userage')
     var pre = document.form.userage.value;
     var reg = /1[8|9]|2[0-8]/;
     if (pre == '') {
         resultObj.innerHTML = "(必填项)年龄不能为空";
         resultObj.style.color = "red";
         return false;
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "年龄输入不合法";
         resultObj.style.color = "red";
         return false;
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
         return true;
     }
 }


 function focus_ID() {
     var resultObj = document.getElementById('result_ID');
     resultObj.innerHTML = "(必填项)请输入你位的二代身份证号码";
     resultObj.style.color = "blue";
     document.form.ID.style = "border:1px solid red";
 }

 function blur_ID() {
     var resultObj = document.getElementById('result_ID');
     var pre = document.form.ID.value;
     var reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
     if (pre == '') {
         resultObj.innerHTML = "(必填项)二代身份证号码字符不能为空";
         resultObj.style.color = "red";
         return false;
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "二代身份证号码字符输入不合法";
         resultObj.style.color = "red";
         return false;
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
         return true;
     }
 }


 function focus_Mobile() {
     var resultObj = document.getElementById('result_Mobile');
     resultObj.innerHTML = "请输入你位数的手机号码";
     resultObj.style.color = "blue";
     document.form.Mobile.style = "border:1px solid red";
 }

 function blur_Mobile() {
     var resultObj = document.getElementById('result_Mobile')
     var pre = document.form.Mobile.value;
     var reg = /^1[3|5|7|8][0-9]{9}$/;
     if (pre == '') {
         resultObj.innerHTML = "手机号码不能为空";
         resultObj.style.color = "red";
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "手机号码字符输入不合法";
         resultObj.style.color = "red";
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
     }
 }




 function focus_Tel() {
     var resultObj = document.getElementById('result_Tel');
     resultObj.innerHTML = "请输入你的座机号码";
     resultObj.style.color = "blue";
     document.form.Tel.style = "border:1px solid red";
 }

 function blur_Tel() {
     var resultObj = document.getElementById('result_Tel')
     var pre = document.form.Tel.value;
     var reg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
     if (pre == '') {
         resultObj.innerHTML = "座机号码不能为空";
         resultObj.style.color = "red";
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "座机号码字符输入不合法";
         resultObj.style.color = "red";
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
     }
 }





 function focus_mail() {
     var resultObj = document.getElementById('result_mail');
     resultObj.innerHTML = "请输入你的邮箱号码";
     resultObj.style.color = "blue";
     document.form.mail.style = "border:px solid red";
 }

 function blur_mail() {
     var resultObj = document.getElementById('result_mail');
     var pre = document.form.mail.value;
     var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
     oyakuki @163.com
     if (pre == '') {
         resultObj.innerHTML = "邮箱号码不能为空";
         resultObj.style.color = "red";
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "邮箱号码字符输入不合法";
         resultObj.style.color = "red";
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
     }
 }





 function focus_qq() {
     var resultObj = document.getElementById('result_qq');
     resultObj.innerHTML = "(必填项)请输入你的QQ号";
     resultObj.style.color = "blue";
     document.form.qq.style = "border:1px solid red";
 }

 function blur_qq() {
     var resultObj = document.getElementById('result_qq');
     var pre = document.form.qq.value;
     var reg = /[1-9]([0-9]{5,11})/;
     if (pre == '') {
         resultObj.innerHTML = "(必填项)QQ字符不能为空";
         resultObj.style.color = "red";
         return false;
     } else if (!reg.test(pre)) {
         resultObj.innerHTML = "QQ字符输入不合法";
         resultObj.style.color = "red";
         return false;
     } else {
         resultObj.innerHTML = "ok";
         resultObj.style.color = "green";
         return true;
     }
 }



 function checkForm() {
     var flag_username = blur_username();
     var flag_userage = blur_userage();
     var flag_ID = blur_ID();
     var flag_Tel = blur_Tel();
     var flag_Mobile = blur_Mobile();
     var flag_qq = blur_qq();
     var flag_mail = blur_mail();
     if (flag_username == true && flag_userage == true && flag_ID == true && flag_Tel == true &&
         flag_Mobile == true && flag_mail == true
     ) {
         return true;
     } else {
         return false;
     }
 }