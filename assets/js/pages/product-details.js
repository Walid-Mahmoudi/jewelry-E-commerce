//------------ Writereview ------------//
let btnWritereview = document.getElementById("write-review");
let writeReview = document.getElementById("review-input");
function writeReviews() {
  writeReview.style.display = "block";
}

// ********** Slider ********** //
let bagination = document.querySelectorAll(".bagination ul li");
let imgSdetals = Array.from(document.querySelectorAll(".img-slide-detals img"));
let baginationImgs = document.querySelector(".bagination-img");
let ProductImg = document.querySelector(".Product-img");
console.log(ProductImg);

// get num of slide
var countSlide = imgSdetals.length;
// set curent slide
var curentSlide = 1;
// Create the Ul Element
var bagenationElement = document.createElement("ul");
bagenationElement.setAttribute("id", "pagenation-ul");
// Create list item
for (let i = 1; i <= countSlide; i++) {
  var bagenationItem = document.createElement("li");
  bagenationItem.setAttribute("data-slide", i);
  bagenationItem.appendChild(document.createTextNode("0" + i));
  bagenationElement.appendChild(bagenationItem);
}
// Add the Ul on page
document.getElementById("bagination").appendChild(bagenationElement);
// Get Ul
var pagenationCreateUl = document.getElementById("pagenation-ul");
// Array from Ul
var pagenationBullets = Array.from(
  document.querySelectorAll("#pagenation-ul li")
);
for (var i = 0; i < pagenationBullets.length; i++) {
  pagenationBullets[i].onclick = function () {
    curentSlide = parseInt(this.getAttribute("data-slide"));
    theChecker();
  };
}
// Col function
theChecker();

// Next
// let next = document.getElementById("next").addEventListener("click", ()=>{
//   removeAllActive()
//   pagenationCreateUl.children[curentSlide++].classList.add("active");
//   imgSdetals[curentSlide++].classList.add("active");

//   console.log("lalallal");
// })


// Change images on click
let img_slider = document.getElementsByClassName("img-slide-detals");
console.log(pagenationCreateUl.childNodes);
for (const item of img_slider) {
  item.addEventListener("click", function (e) {
    console.log(e.target);
    ProductImg.style.backgroundImage = `url(${e.target.currentSrc})`;
    removeAllActive();
    e.target.classList.add("active");
    pagenationCreateUl.children[curentSlide].classList.add("active") = e.target
      // pagenationBullets[curentSlide].classList.add("active");
      // pagenationCreateUl.children[curentSlide++];
  });
}

function theChecker() {
  removeAllActive();
  // Set active classes
  imgSdetals[curentSlide - 1].classList.add("active");
  pagenationCreateUl.children[curentSlide - 1].classList.add("active");
  let imgActive = document.querySelector(".img-slide-detals img.active");
  console.log(imgActive);
  if (imgActive) {
    ProductImg.style.backgroundImage = `url(${imgActive.src})`;
  }
  if (pagenationCreateUl.lastChild.classList.contains("active")||pagenationCreateUl.childNodes[3].classList.contains("active")) {
    baginationImgs.scroll(300, 0);
  } else if (pagenationCreateUl.firstChild.classList.contains("active")) {
    baginationImgs.scroll(0, 0);
  }
}

// remove all active classes
function removeAllActive() {
  imgSdetals.forEach(function (images) {
    images.classList.remove("active");
  });
  pagenationBullets.forEach(function (Bullets) {
    Bullets.classList.remove("active");
  });
}

