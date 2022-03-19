import {inputsValidation} from "./inputsValidation.js";
const inputDefaultInitialization = (input) => {
    const {min, max, defaultValue, counterElementId, additionalChanges} = inputsValidation[input.name];
    input.value = defaultValue;
    const ElChang = () => {
        counterElement.textContent = input.value;
        if (additionalChanges) {
            additionalChanges(input);
        }
    }
    const counterElement = document.getElementById(counterElementId);
    counterElement.textContent = defaultValue;
    const btns = Array.prototype.slice.call(input.closest(".numberChanger").getElementsByTagName("button"));
    for (let btn of btns) {
        if (btn.textContent === "-") {
            btn.addEventListener('click', () => {
                const plusBtn = btns.find(btn => btn.textContent === "+");
                if (min < input.value) {
                    input.value--;
                    plusBtn.classList.add("btnActive");
                }
                if (input.value <= min) {
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
                if (input.value >= max) {
                    btn.classList.remove("btnActive");
                }
                ElChang()
            });
        }
    }
};
export {inputDefaultInitialization};