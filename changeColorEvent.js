//lesson 9
const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        const arr = this.data;
        return {
            next(index) {
                return {
                    value: arr[index],
                    done: index === arr.length
                }
            }
        }
    }
}
function changeStyle (){
    let i = 0;
    return function () {
        let iterator = colors[Symbol.iterator]();
            this.style.color = iterator.next(i).value;
            i++;
            if(iterator.next(i).done){
                i=0;
            }
    }
}
document.getElementById("text1").addEventListener('click', changeStyle());
document.getElementById("text2").addEventListener('click', changeStyle());
document.getElementById("text3").addEventListener('click', changeStyle());

