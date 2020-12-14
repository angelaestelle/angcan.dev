function changeCursor() {
    document.body.style.cursor = document.getElementById('cursorList').options[document.getElementById('example-cursor').selectedIndex].value;
}

function restoreCursor() {
    document.body.style.cursor = 'default';
}