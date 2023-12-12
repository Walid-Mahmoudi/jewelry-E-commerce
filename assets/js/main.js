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
for (const item of heartChange) {
  item.addEventListener("click", function (e) {
    hearToggle = !hearToggle;
    if (hearToggle) {
      e.target.src = "http://127.0.0.1:5500/assets/images/heart-red.svg";
    } else {
      e.target.src = "http://127.0.0.1:5500/assets/images/heart.svg";
    }
  });
}
