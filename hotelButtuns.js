import {list, carousel, carouselItemsCount, data} from "./getResponse.js";
import drawHotelItems from "./drawHotelItems.js";

let i = 0;
let newItem;
let btnPrev = () => {
    i === 0 ? newItem = data.length - 1 : newItem = i - 1;
    carousel.pop();
    carousel.unshift(data[newItem]);
    list.innerHTML = drawHotelItems(carousel);
    i = i - 1;
    if (i < 0) {
        i = data.length - 1;
    }
}
let btnNext = () => {
    i + carouselItemsCount > data.length - 1 ? newItem = i + carouselItemsCount - data.length : newItem = i + carouselItemsCount;
    carousel.shift();
    carousel.push(data[newItem]);
    list.innerHTML = drawHotelItems(carousel);
    i = i + 1;
    if (i === data.length) {
        i = 0;
    }
}
export {btnPrev,btnNext}