const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];
let data2 =[data[0],data[1],data[2],data[3]];
const homesGuestLoves = document.querySelector('.hotels_main');
function drawHotelItems(){
    return data2.map(i =>
        `<div class="hotels_item">
    <div class="hotels_item_img">
    <img src="${i.imageUrl}" alt="Hotel_picture">
    </div>
    <div class="hotel_item_name">${i.name}</div>
    <div class="hotel_item_place">${i.city}, ${i.country}</div>
</div>`).join('');
}
homesGuestLoves.innerHTML = drawHotelItems();
let btn_prev = document.querySelector('.left_btn_hotel');
let btn_next = document.querySelector('.right_btn_hotel');
let i=0;
let newItem;
btn_prev.onclick = function(){
    i === 0 ? newItem= data.length-1 : newItem = i-1;
    data2.pop();
    data2.unshift(data[newItem]);
    homesGuestLoves.innerHTML = drawHotelItems();
    i = i - 1;
    if(i < 0){
        i = data.length-1;
    }
}
btn_next.onclick = function(){
    i+4 > data.length-1 ? newItem= i+4-data.length : newItem = i+4;
    data2.shift();
    data2.push(data[newItem]);
    homesGuestLoves.innerHTML = drawHotelItems();
    i = i + 1;
    if(i === data.length){
        i = 0;
    }
}

// const homesGuestLoves = document.querySelector('.hotels_main');
// let data2=[];
// function drawHotelItems() {
//     fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
//         .then((resp) => resp.json())
//         .then(data => {
//             data2.push(data[0]);
//             data2.push(data[1]);
//             data2.push(data[2]);
//             data2.push(data[3]);
//             homesGuestLoves.innerHTML=data2.map(i =>
//                 `<div class="hotels_item">
//             <div class="hotels_item_img">
//             <img src="${i.imageUrl}" alt="Hotel_picture">
//             </div>
//             <div class="hotel_item_name">${i.name}</div>
//             <div class="hotel_item_place">${i.city}, ${i.country}</div>
//             </div>`).join('');
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
// drawHotelItems();
// let btn_prev = document.querySelector('.left_btn_hotel');
// let btn_next = document.querySelector('.right_btn_hotel');
// btn_prev.onclick = function () {
//     data2=[];
//     drawHotelItems();
// }
// btn_next.onclick = function () {
//     data2=[];
//     drawHotelItems();
// }