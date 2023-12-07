// let btnMin = document.querySelector(".min");
// let btnMax = document.querySelector(".max");

// btnMax.addEventListener("click", Plus);
// btnMin.addEventListener("click" , Mins);


//------------ plus and minus ------------//
function Plus(e) {
  e.target.parentNode.children[1].innerText++;
  e.target.parentNode.previousElementSibling.children[0].innerText++;
}

function Mins(e) {
  console.log(e.target.parentNode.previousElementSibling.children.innerHtml);
  if (e.target.parentNode.children[1].innerText > 1) {
    e.target.parentNode.children[1].innerText--;
    e.target.parentNode.previousElementSibling.children[0].innerText--;
  }
}

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
