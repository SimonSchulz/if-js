import bubbleSort from "./sorting.js";
import drawHotelItems from "./drawHotelItems.js";
import {btnNext, btnPrev} from "./hotelButtuns.js";
let carouselItemsCount;
if (window.innerWidth > 1200) {
    carouselItemsCount = 4;
} else if (window.innerWidth < 1200 && window.innerWidth > 920) {
    carouselItemsCount = 3
} else {
    carouselItemsCount = 2
}
let data = [];
const carousel = [];

const list = document.querySelector('.hotels_main');
const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const getResponse = async () => {
    try {
        const storageData = sessionStorage.getItem(url);
        if (storageData) {
            data = JSON.parse(storageData);
            data = bubbleSort(data, "name");
            for (let i = 0; i < carouselItemsCount; i++) {
                carousel.push(data[i]);
            }
            list.innerHTML = drawHotelItems(carousel);
        } else {
            const response = await fetch(url);
            const content = await response.json();
            sessionStorage.setItem(url, JSON.stringify(content))
            for (let i = 0; i < content.length; i++) {
                data.push(content[i]);
            }
            data = bubbleSort(data, "name");
            for (let i = 0; i < carouselItemsCount; i++) {
                carousel.push(data[i]);
            }
            list.innerHTML = drawHotelItems(carousel);
        }
    } catch (e) {
        console.error(e);
    }
}
let btn_prev = document.querySelector('.left_btn_hotel');
let btn_next = document.querySelector('.right_btn_hotel');
btn_prev.onclick = btnPrev;
btn_next.onclick = btnNext;
    export {getResponse,list,data,carousel,carouselItemsCount}