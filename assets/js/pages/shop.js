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

//------------ Add TO Cart ------------//

let addCart = document.querySelector(".img-head");

console.log(addCart);
function added() {
  window.location.href= "/assets/html/pages/Product details.html"
}


// *************** *************//
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0.00].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
