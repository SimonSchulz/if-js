let carouselItemsCount=4;
const data =[];
const carousel =[];
let list = document.querySelector('.hotels_main');
function drawHotelItems(content){
    console.log(content);
    return content.map(i => `<div class="hotels_item">
    <div class="hotels_item_img">
    <img src="${i.imageUrl}" alt="Hotel_picture">
    </div>
    <div class="hotel_item_name">${i.name}</div>
    <div class="hotel_item_place">${i.city}, ${i.country}</div>
</div>`);
}

const getResponse = async () => {
    try {
        const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
        const content = await response.json();
        for (let i = 0; i<content.length;i++){
            data.push(content[i]);
            if(i<carouselItemsCount){
                carousel.push(content[i]);
            }
        }
        list.innerHTML = drawHotelItems(carousel);
    } catch (e) {
        console.error(e);
    } finally {
    }
}
getResponse();
let btn_prev = document.querySelector('.left_btn_hotel');
let btn_next = document.querySelector('.right_btn_hotel');
let i=0;
let newItem;
btn_prev.onclick = function(){
    i === 0 ? newItem= data.length-1 : newItem = i-1;
    carousel.pop();
    carousel.unshift(data[newItem]);
    list.innerHTML=drawHotelItems(carousel);
    i = i - 1;
    if(i < 0){
        i = data.length-1;
    }
    console.log(list);
}
btn_next.onclick = function(){
    i+carouselItemsCount > data.length-1 ? newItem= i+carouselItemsCount-data.length : newItem = i+carouselItemsCount;
    carousel.shift();
    carousel.push(data[newItem]);
    list.innerHTML=drawHotelItems(carousel);
    i = i + 1;
    if(i === data.length){
        i = 0;
    }
    console.log(list);
}




















//
// for (let i = 0;i<carouselItems;i++){
//     data2.push(data[i]);
// }
// //const homesGuestLoves = document.querySelector('.hotels_main');
// // function drawHotelItems(){
// //     return data2.map(i =>
// //         `<div class="hotels_item">
// //     <div class="hotels_item_img">
// //     <img src="${i.imageUrl}" alt="Hotel_picture">
// //     </div>
// //     <div class="hotel_item_name">${i.name}</div>
// //     <div class="hotel_item_place">${i.city}, ${i.country}</div>
// // </div>`).join('');
// // }
// //homesGuestLoves.innerHTML = drawHotelItems();
// let btn_prev = document.querySelector('.left_btn_hotel');
// let btn_next = document.querySelector('.right_btn_hotel');
// let i=0;
// let newItem;
// btn_prev.onclick = function(){
//     i === 0 ? newItem= data.length-1 : newItem = i-1;
//     data2.pop();
//     data2.unshift(data[newItem]);
//     homesGuestLoves.innerHTML = drawHotelItems();
//     i = i - 1;
//     if(i < 0){
//         i = data.length-1;
//     }
// }
// btn_next.onclick = function(){
//     i+carouselItems > data.length-1 ? newItem= i+carouselItems-data.length : newItem = i+carouselItems;
//     data2.shift();
//     data2.push(data[newItem]);
//     homesGuestLoves.innerHTML = drawHotelItems();
//     i = i + 1;
//     if(i === data.length){
//         i = 0;
//     }
// }
//
// // const homesGuestLoves = document.querySelector('.hotels_main');
// // let data2=[];
// // function drawHotelItems() {
// //     fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
// //         .then((resp) => resp.json())
// //         .then(data => {
// //             data2.push(data[0]);
// //             data2.push(data[1]);
// //             data2.push(data[2]);
// //             data2.push(data[3]);
// //             homesGuestLoves.innerHTML=data2.map(i =>
// //                 `<div class="hotels_item">
// //             <div class="hotels_item_img">
// //             <img src="${i.imageUrl}" alt="Hotel_picture">
// //             </div>
// //             <div class="hotel_item_name">${i.name}</div>
// //             <div class="hotel_item_place">${i.city}, ${i.country}</div>
// //             </div>`).join('');
// //         })
// //         .catch(function (error) {
// //             console.log(error);
// //         });
// // }
// // drawHotelItems();
// // let btn_prev = document.querySelector('.left_btn_hotel');
// // let btn_next = document.querySelector('.right_btn_hotel');
// // btn_prev.onclick = function () {
// //     data2=[];
// //     drawHotelItems();
// // }
// // btn_next.onclick = function () {
// //     data2=[];
// //     drawHotelItems();
// // }