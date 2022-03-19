import {getResponse} from "./getResponse.js";
import {inputDefaultInitialization} from "./InputInitialization.js";
import {submitForm} from "./searchForm.js";

getResponse();

const inputs = document.getElementsByClassName("thirdInputs");
for (let input of inputs) {
    inputDefaultInitialization(input);
}
const mainMenu = document.querySelector(".header_form_people");
const menu = document.querySelector('.modalMenu');
const toggleMenu = function () {
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
}

mainMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
});
document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target === menu || menu.contains(target);
    const its_mainMenu = target === mainMenu;
    const menu_is_active = menu.classList.contains('open');
    if (!its_menu && !its_mainMenu && menu_is_active) {
        toggleMenu();
    }
});

const searchFormBtn = document.querySelector('.form_btn');
searchFormBtn.addEventListener('click', submitForm);

const input = document.querySelector('.form_destinations');
input.addEventListener('input', () => {
    if (input.value !== '') {
        input.classList.add('input_filled');
    } else {
        input.classList.remove('input_filled');
    }
});

