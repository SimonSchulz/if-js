// lesson-12
let carouselItemsCount;
if(window.innerWidth>1200){
    carouselItemsCount=4;
} else if (window.innerWidth<1200 && window.innerWidth>920){
    carouselItemsCount=3
} else {
    carouselItemsCount=2
}

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

//lesson-11
const inputs = document.getElementsByClassName("thirdInputs");
const childrenSelectors = document.getElementById("childrenSelectors");
const inputsValidation = {
    adults: {
        min: 1,
        max: 30,
        defaultValue: 1,
        counterElementId: "adultsCounter",
    },
    children: {
        min: 0,
        max: 10,
        defaultValue: 0,
        counterElementId: "childrenCounter",
        additionalChanges: input => {
            const { value } = input;
            if (value > 0) {
                document.getElementById("childrenSelectorsTitle").style.display = "block";
            } else {
                document.getElementById("childrenSelectorsTitle").style.display = "none";
            }
            if ({ value })
                childrenSelectors.innerHTML = "";
            for (let i = 0; i < value; i++) {
                const newSelect = document.createElement('select');
                newSelect.name = `select${i}`;
                for (let j = 1; j < 18; j++) {
                    newSelect.innerHTML += `<option value="${j}">${j} years old</option>`;
                }
                childrenSelectors.appendChild(newSelect);
            }
        },
    },
    rooms: {
        min: 1,
        max: 30,
        defaultValue: 1,
        counterElementId: "roomsCounter",
    },
};

const inputDefaultInitialization = (input) => {
    const { min, max, defaultValue, counterElementId, additionalChanges } = inputsValidation[input.name];
    input.value = defaultValue;
    const ElChang = () => {
        counterElement.textContent = input.value;
        if (additionalChanges) {
            additionalChanges(input);
        }}
    const counterElement = document.getElementById(counterElementId);
    counterElement.textContent = defaultValue;
    const btns = Array.prototype.slice.call( input.closest(".numberChanger").getElementsByTagName("button") );
    for (let btn of btns) {
        if (btn.textContent === "-") {
            btn.addEventListener('click', () => {
                const plusBtn = btns.find(btn => btn.textContent === "+");
                if (min < input.value) {
                    input.value--;
                    plusBtn.classList.add("btnActive");
                }
                if(input.value <= min) {
                    btn.classList.remove("btnActive");
                }
                ElChang()
            });
        } else {
            btn.addEventListener('click', () => {
                const minusBtn = btns.find(btn => btn.textContent === "-");
                if (max > input.value) {
                    input.value++;
                    minusBtn.classList.add("btnActive");
                }
                if(input.value >= max) {
                    btn.classList.remove("btnActive");
                }
                ElChang()
            });
        }
    }
};

for (let input of inputs) {
    inputDefaultInitialization(input);
}
const mainMenu = document.querySelector(".header_form_people");
const menu = document.querySelector('.modalMenu');
const toggleMenu = function() {
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
}

mainMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
});
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target === menu || menu.contains(target);
    const its_mainMenu = target === mainMenu;
    const menu_is_active = menu.classList.contains('open');
    if (!its_menu && !its_mainMenu && menu_is_active) {
        toggleMenu();
    }
});
