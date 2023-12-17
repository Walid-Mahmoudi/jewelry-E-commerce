let btnPrevious = document.querySelectorAll(".previous");
let btnNext = document.querySelectorAll(".next");
let nextButton = document.querySelector(".btn-next");
let backButton = document.querySelector(".back-step");
let formStep = document.querySelectorAll(".form-step");
let stepsNumber = document.querySelector(".step");
let titleHeader = document.querySelector(".title-header");
let progresBar = document.querySelector(".circular-progres");
let progresValue = document.querySelector(".value-progres");
let placeOrder = document.querySelector(".place-oreder");

let progresValues = 1;
let progresEndvalues = formStep.length;
progresBar.style.background = `conic-gradient(#DCB996 ${
  progresValues * 120
}deg,#EDE3D9 ${progresValues * 120}deg)`;
progresValue.textContent = `0${progresValues} of 0${progresEndvalues}`;
stepsNumber.innerHTML = `${progresValues}`;
formStep[2].classList.add("active");
formStep[0].classList.remove("active");
formStep[1].classList.add("active");
titleHeader.innerHTML = "Shipping Information";


for (const next of btnNext) {
  next.addEventListener("click", () => {
    if (progresValues == progresEndvalues) {
      return false;
    } else {
      progresValues++;
      progresBar.style.background = `conic-gradient(#DCB996 ${
        progresValues * 120
      }deg,#EDE3D9 ${progresValues * 120}deg)`;
      progresValue.textContent = `0${progresValues} of 0${progresEndvalues}`;
      stepsNumber.innerHTML = `${progresValues}`;
      if (progresValues == 2) {
        formStep[2].classList.add("active");
        formStep[0].classList.add("active");
        formStep[1].classList.remove("active");
        titleHeader.innerHTML = "Payment Method";
        placeOrder.classList.add("disabeld");
      } else if (progresValues == 3) {
        formStep[2].classList.remove("active");
        formStep[0].classList.add("active");
        formStep[1].classList.add("active");
        titleHeader.innerHTML = "Review Order";
        placeOrder.classList.remove("disabeld");
      }
    }
  });
}

for (const previos of btnPrevious) {
  previos.addEventListener("click", () => {
    if (progresValues == 1) {
      return false;
    } else {
      progresValues--;
      progresBar.style.background = `conic-gradient(#DCB996 ${
        progresValues * 120
      }deg,#EDE3D9 ${progresValues * 120}deg)`;
      progresValue.textContent = `0${progresValues} of 0${progresEndvalues}`;
      stepsNumber.innerHTML = `${progresValues}`;
      if (progresValues == 1) {
        formStep[2].classList.add("active");
        formStep[0].classList.remove("active");
        formStep[1].classList.add("active");
        titleHeader.innerHTML = "Shipping Information";
      } else if (progresValues == 2) {
        formStep[2].classList.add("active");
        formStep[0].classList.add("active");
        formStep[1].classList.remove("active");
        titleHeader.innerHTML = "Payment Method";
        placeOrder.classList.add("disabeld");
      }
    }
  });
}


nextButton.addEventListener("click", ()=>{
  progresValues++;
  progresBar.style.background = `conic-gradient(#DCB996 ${
    progresValues * 120
  }deg,#EDE3D9 ${progresValues * 120}deg)`;
  progresValue.textContent = `0${progresValues} of 0${progresEndvalues}`;
  stepsNumber.innerHTML = `${progresValues}`;

    formStep[2].classList.add("active");
    formStep[0].classList.add("active");
    formStep[1].classList.remove("active");
    titleHeader.innerHTML = "Payment Method";
})

console.log(backButton);

backButton.addEventListener("click", ()=>{
  progresValues--;
  progresBar.style.background = `conic-gradient(#DCB996 ${
    progresValues * 120
  }deg,#EDE3D9 ${progresValues * 120}deg)`;
  progresValue.textContent = `0${progresValues} of 0${progresEndvalues}`;
  stepsNumber.innerHTML = `${progresValues}`;

    formStep[2].classList.add("active");
    formStep[0].classList.remove("active");
    formStep[1].classList.add("active");
    titleHeader.innerHTML = "Shipping Information";
})