let rectangles = Array.from(document.getElementsByClassName("rectangle"))

rectangles.forEach(element => {
    element.onclick = function (event) {
        event.stopPropagation();

        if (event.target.id == 'div1') {
            alert('Div 1')
        } else if (event.target.id == 'div2') {
            alert('Div 2')
        } else if (event.target.id == 'div3') {
            alert('Div 3')
        }
    }
});
