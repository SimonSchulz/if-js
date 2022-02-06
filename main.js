let carouselItemsCount=4;
const data =[];
const carousel =[];
const list = document.querySelector('.hotels_main');
function drawHotelItems(content){
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
}