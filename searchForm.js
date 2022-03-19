import {childrenSelectors} from "./inputsValidation.js";

const availableBlock = document.querySelector('.available_hotels');
const getChildrenSelectorValues = () => {
    const selectors = childrenSelectors.getElementsByTagName("select");
    const childAgesData = [];
    for (let selector of selectors) {
        childAgesData.push(selector.value);
    }
    return childAgesData.toString();
}
const submitForm = (event) => {
    event.preventDefault();
    const textToFind = document.getElementById('form_destinations').value;
    const adults = event.target.adults;
    const children = getChildrenSelectorValues();
    const rooms = event.target.rooms;
    fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${textToFind}&adults=${adults}&children=${children}&rooms=${rooms}`)
        .then(data => data.text())
        .then(data => {
            return JSON.parse(data);
        })
        .then(data => {
            const availableForm = document.querySelector(".available_wrapper");
            availableForm.innerHTML = data.map(i => `
        <div class="hotels_item">
        <div class="available_img">
        <img src="${i.imageUrl}" alt="Hotel_picture">
        </div>
         <div class="available_name">${i.name}</div>
        <div class="available_place">${i.city}, ${i.country}</div>
        </div>`).join('');
        })
        .then(data => {
            availableBlock.classList.remove('none');
        })
}
export {submitForm};