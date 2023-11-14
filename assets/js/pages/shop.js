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

//------------ Toglle Sort ------------//

function sort2() {
  let showThree = document.getElementById("shop3");
  let showTwo = document.getElementById("shop2");
  let btnSort2 = document.getElementById("sort2");
  let btnSort3 = document.getElementById("sort3");
  showThree.style.display = "none";
  showTwo.style.display = "block";
  btnSort3.classList.remove("active");
  btnSort2.classList.add("active");
}

function sort3() {
  let showThree = document.getElementById("shop3");
  let showTwo = document.getElementById("shop2");
  let btnSort2 = document.getElementById("sort2");
  let btnSort3 = document.getElementById("sort3");
  showThree.style.display = "block";
  showTwo.style.display = "none";
  btnSort3.classList.add("active");
  btnSort2.classList.remove("active");
}



