//lesson 9
//iterator
// const colors = {
//     data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//     [Symbol.iterator]() {
//         const arr = this.data;
//         return {
//             next(index) {
//                 return {
//                     value: arr[index],
//                     done: index === arr.length
//                 }
//             }
//         }
//     }
// }
// function changeStyle (){
//     let i = 0;
//     return function () {
//         let iterator = colors[Symbol.iterator]();
//         this.style.color = iterator.next(i).value;
//         i++;
//         if(iterator.next(i).done){
//             i=0;
//         }
//     }
// }
// document.getElementById("text1").addEventListener('click', changeStyle());
// document.getElementById("text2").addEventListener('click', changeStyle());
// document.getElementById("text3").addEventListener('click', changeStyle());

//generator
const colors = {
    data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
};
function* gen() {
    for(let i = 0; i<colors.data.length; i++){
       yield colors.data[i];
    }
}
function changeStyle() {
    let index = 1;
    return function () {
        let iterator = gen();
        for(let i = 0; i < index; i++){
        this.style.color = iterator.next().value;
        }
        iterator.next().done ? index = 1 : index++;
   };
}

document.getElementById("text1").addEventListener("click", changeStyle());
document.getElementById("text2").addEventListener("click", changeStyle());
document.getElementById("text3").addEventListener("click", changeStyle());