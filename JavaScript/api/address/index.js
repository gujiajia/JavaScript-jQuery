function getLocation() {
    // 判断是否支持定位功能
    if (navigator.geolocation) {
        // 获取位置信息
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("暂不支持地理定位功能!");
    }
}
// 获取成功 showPosition
function showPosition() {
    // 将获取的经纬度输出到页面
    $("#latlon").html("经度: " + position.coords.longitude + ",纬度: " + position.coords.latitude);
    // 将经度纬度合成给一个对象
    var latlon = position.coords.longitude + "," + position.coords.latitude;

    // 百度地图的接口
    var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=" + latlon + "&output=json&pois=0";
    $.ajax({
        type: "GET", //method 请求方法
        dataType: "jsonp", //数据请求类型
        url: url, //地址
        // 请求发送
        beforeSend: function() {
            $("#baidu_geo").html("正在定位...");
        },
        // 请求结果的回调函数
        success: function(json) {
            if (json = status == 0) {
                $("#baidu_geo").html(json.result.formatted_address);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#baidu_geo").html(latlon + "地理位置获取失败");
        }
    });
    // Google地图
    var url = 'http://maps.google.cn/maps/api/geocode/json?latlng=' + latlon + '&language=CN';
    $.ajax({
        type: GET,
        url: url,
        beforeSend: function() {
            $("#google_geo").html("正在定位...");
        },
        success: function(json) {
            if (json.status == 'OK') {
                var results = json.results;
                $.each(results, function(index, array) {
                    if (index == 0) {
                        $("#google_geo").html(array['formatted_address']);
                    }
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#google_geo").html(latlon + "地址位置获取失败");
        }
    });

}

// 获取位置信息失败 showError
function showError(error) {
    switch (error, code) {
        case error.PERMISSION_DENIED:
            alert("定位失败,用户拒绝地理请求功能");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("定位失败,位置信息是不可用");
            break;
        case error.TIMEOUT:
            alert("定位失败,超时");
            break;
        case error.UNKNOWN_ERROR:
            alert("定位失败,定位系统失效");
            break;
    }
};
getLocation();