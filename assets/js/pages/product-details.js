//------------ Writereview ------------//
let btnWritereview = document.getElementById("write-review");
let writeReview = document.getElementById("review-input");
function writeReviews() {
  writeReview.style.display = "block";
}

let bagination = document.querySelectorAll(".bagination ul li");
let imgSdetals = Array.from(document.querySelectorAll(".img-slide-detals"));

console.log(imgSdetals);

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
    bagenationItem.appendChild(document.createTextNode(i));
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
  };

// Col function
theChecker();

  function theChecker() {
    removeAllActive();
  
    // Set active classes
    imgSdetals[curentSlide - 1].classList.add("active");
    pagenationCreateUl.children[curentSlide - 1].classList.add("active");
  

  }