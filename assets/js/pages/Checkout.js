let btnPrevious = document.querySelectorAll(".previous");
// let btnNext = document.querySelectorAll(".next");
let nextButton = document.querySelector(".btn-next");
let formStep = document.querySelectorAll(".form-step");
let active =1 ;
console.log(btnNext);

nextButton.addEventListener("click" , ()=>{
  active++
})



// Previous
// for (const previos of btnPrevious) {
//   previos.addEventListener("click", () => {
//     previos.style.color = "red";
//   });
// }

// for (const next of btnNext) {
//   next.addEventListener("click", () => {
//     shippingInfo.classList.add("disable");
//     paymentMethod.classList.remove("disable");
//   });
// }


