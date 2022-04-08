$('.collapse').collapse()

function changeColor(event) {
    colorChangeAccordion.classList.remove("active");
  
}

let colorChangeAccordion = document.querySelector("#accordion-button");
colorChangeAccordion.addEventListener("click", changeColor);
