// const num = document.querySelectorAll(".num");

// function Min() {
//   for (let i = 0; i <= num.length; i++) {
//     if (num[i].value <= 1) {
//       num[i].value = 1;
//     } else {
//       num[i].value = parseInt(num[i].value) - 1;
//     }
//   }
// }
// function Plus() {
//   for (let i = 0; i <= num.length; i++) {
//     num[i].value = parseInt(num[i].value) + 1;
//   }

// }

let num = document.querySelectorAll(".num");
let qtyAdd = document.getElementById("plus");

console.log(qtyAdd);

qtyAdd.onclick=function pluss(e){
  console.log(e.target);
  for (let i = 0; i <= num.length; i++) {
        num[i].value = parseInt(num[i].value) + 1;
      }
}

// function Min() {
//   for (let i = 0; i <= num.length; i++) {
//     if (num[i].value <= 1) {
//       num[i].value = 1;
//     } else {
//       num[i].value = parseInt(num[i].value) - 1;
//     }
//   }
// }


// function Plus() {
//   n++;
//   n = n < 10 ? +n : n;
//   for (let i = 0; i <= num.length; i++) {
//     num[i].value = n;
//   }
// }
// function Min() {
//   if (n > 1) {
//     n--;
//     n = n < 10 ? +n : n;
//     for (let i = 0; i <= num.length; i++) {
//       num[i].value = n;
//     }
//   }
// }

//------------ Change Icon Heart ------------//
let heartChange = document.querySelectorAll(".heart");
let hearToggle = false;
for (let i = 0; i <= heartChange.length; i++) {
  heartChange[i].addEventListener("click", () => {
    hearToggle = !hearToggle;
    if (hearToggle) {
      heartChange[i].src = "http://127.0.0.1:5500/assets/images/heart-red.svg";
    } else {
      heartChange[i].src = "http://127.0.0.1:5500/assets/images/heart.svg";
    }
  });
}
