let btnPrevious = document.querySelectorAll(".previous");
let btnNext = document.querySelector(".next");


// Previous
for (let i = 0; i <= btnPrevious.length; i++) {
  btnPrevious[i].addEventListener("click", Previous)
}

function Previous(evt){
    console.log(evt.target);
    evt.target.style.color="red"
}
