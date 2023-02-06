let rectangles = Array.from(document.getElementsByClassName("rectangle"))

rectangles.forEach(element => {
    element.onclick = function (event) {
        event.stopPropagation();
        alert(element.id)
    }
});
