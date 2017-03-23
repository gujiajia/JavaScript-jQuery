var str = 'sjjdjhhdgdggdgdgdg';
var obj = {};
for (var i = 0, l = str.length, k; i < l; i++) {
    k = str.charAt(i);
    if (obj[k]) {
        obj[k]++;
    } else {
        obj[k] = 1;
    }
}
var m = 0;
var i = null;
for (var k in obj) {
    if (obj[k] > m) {
        m = obj[k];
        i = k;
    }
}
console.log(i + ':' + m);

// var anyString = "Brave new world";

// console.log("The character at index 0   is '" + anyString.charAt(0) + "'");
// console.log("The character at index 1   is '" + anyString.charAt(1) + "'");
// console.log("The character at index 2   is '" + anyString.charAt(2) + "'");
// console.log("The character at index 3   is '" + anyString.charAt(3) + "'");
// console.log("The character at index 4   is '" + anyString.charAt(4) + "'");
// console.log("The character at index 999 is '" + anyString.charAt(999) + "'");