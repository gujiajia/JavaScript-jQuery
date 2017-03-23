// 严格模式
'use strict';
window.onload = init;

function init() {
    // 获取提交按钮
    var takeNoteButton = document.getElementById("take-note");
    // 点击按钮添加
    takeNoteButton.onclick = createNote;
}

function addNoteToDOM(key, noteObj) {
    var notes = document.getElementById("note-list");
    var note = document.createElement("li");
    note.setAttribute("id", key);
    note.onclick = deleteNote;

    var value = noteObj.value;
    note.innerHTML = value;

    var level = noteObj.level;
    note.setAttribute("class", level);
    notes.appendChild(note);
}

function deleteNote(e) {
    var key = e.target.id;
    localStorage.removeItem(key);
    var notesArray = getNotesArray();

    for (var i = 0; i < notesArray.length; i++) {
        if (key === notesArray[i]) {
            notesArray.splice(i, 1);
        }
    }
    localStorage.setItem("notesArray", JSON.stringify(notesArray));

    deleteNoteFromDOM(key);
}

function deleteNoteFromDOM(key) {
    var note = document.getElementById(key);
    note.parentNode.removeChild(note);
}

// 添加内容
function createNote() {
    // 获取输入框内容
    var noteElement = document.getElementById("note");
    var noteValue = noteElement.value;
    // 提交后清空输入框
    noteElement.value = "";

    // 获取设置便签的重要程度
    var levelObj = document.getElementById("note-level");
    var index = levelObj.selectedIndex;
    var level = levelObj[index].value;
    // 便签对象 便签的内容  重要性
    var noteObj = {
            "value": noteValue,
            "level": level
        }
        // 创建时间
    var date = new Date();
    // 创建key  请求时间
    var key = "note_" + date.getTime();
    // 本地储存  JSON.stringify 把原生js转换为JSON字符串格式
    localStorage.setItem(key, JSON.stringify(noteObj));

    var notesArray = getNotesArray();
    notesArray.push(key);
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
    addNoteToDOM(key, noteObj);
}

function getNotesArray() {
    var notesArray = localStorage.getItem("notesArray");
    if (!notesArray) {
        notesArray = [];
        localStorage.setItem("notesArray", JSON.stringify(notesArray));
    } else {
        notesArray = JSON.parse(notesArray);
    }
    return notesArray;
}