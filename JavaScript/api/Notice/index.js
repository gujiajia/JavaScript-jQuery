onload = function() {
    if (window.Notification) {
        var button = document.getElementById("button"),
            text = document.getElementById("text");
        // 点击按钮,桌面是否允许出现
        function popNotice() {
            if (Notification.permission == "granted") {
                var notice = new Notification("hi,帅哥", {
                    body: "允许我加你为好友吗?",
                    icon: "http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg"
                });
                notice.onclick = function() {
                    text.innerHTML = "张小姐" + new Date().toTimeString().split(" ")[0] + "加你为好友!";
                    // notice.close(); //关闭
                }
            }
        }
        button.onclick = function() {
            if (Notification.permission == "granted") {
                // 桌面通知的弹出框
                popNotice();
            } else if (Notification.permission != "denied") {
                Notification.requestPermission(function(permission) {
                    //桌面通知的弹框出现
                    popNotice();
                })
            };
        }
    } else {
        alert("你的浏览器暂不支持桌面通知");
    }
}