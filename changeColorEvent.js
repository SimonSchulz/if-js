//change color by click
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let textFirst = document.getElementById("text1");
let textSecond = document.getElementById("text2");
let textThird = document.getElementById("text3");
function changeColor () {
    let i = 0;
    return function () {
        this.style.color = colors[i];
        i++;
        if (i === colors.length) {
            i = 0;
        }
    }
}
textFirst.addEventListener('click', changeColor());
textSecond.addEventListener('click', changeColor());
textThird.addEventListener('click', changeColor());
