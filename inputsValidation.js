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
            const {value} = input;
            if ({value})
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
export {inputsValidation,childrenSelectors};