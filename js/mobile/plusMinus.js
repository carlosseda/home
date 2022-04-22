export let renderPlusMinus = () => {

    let plusMinusButtons = document.querySelectorAll(".plus-minus-button");

    plusMinusButtons.forEach(plusMinusButton => {

        plusMinusButton.addEventListener("click", () => {
            
            let plusMinusInput = plusMinusButton.closest(".plus-minus").querySelector("input");
            let value = parseInt(plusMinusInput.value);

            if(plusMinusButton.dataset.type == "plus") {
                value++;
            } else if (plusMinusButton.dataset.type == "minus" && value > 1) {
                value--;
            }

            plusMinusInput.value = value;
        });
    });
}