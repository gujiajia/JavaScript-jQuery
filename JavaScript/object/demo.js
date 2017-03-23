var book = {
    topic: "JavaScript",
    fat: true
};
console.log(book.topic); //JavaScript
console.log(book["fat"]); //true
book.author = "Flanagn"; //通过赋值创建一个新属性{ topic: 'JavaScript', fat: true, author: 'Flanagn' }
book.contents = {}; //{}是一个空对象,它没属性{ topic: 'JavaScript', fat: true, author: 'Flanagn',contents: {} }
console.log(book);