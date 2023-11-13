  //------------ Change Icon Heart ------------//
  let showThree = document.getElementById("shop3");
  let showTwo = document.getElementById("shop2");
  let btnSort2 = document.getElementById("sort2");
  let btnSort3 = document.getElementById("sort3");


  
btnSort2.addEventListener("click",()=>{
    showThree.style.display=("none")
    showTwo.style.display=("block")
    btnSort3.classList.remove("active")
    btnSort2.classList.add("active")
})
btnSort3.addEventListener("click",()=>{
    showThree.style.display=("block")
    showTwo.style.display=("none")
    btnSort3.classList.add("active")
    btnSort2.classList.remove("active")
})


//------------ Change Icon Heart ------------//
  let heartChange = document.querySelectorAll(".heart");
  let hearToggle = false;
  for(let i=0 ; i<=heartChange.length ; i++){
  heartChange[i].addEventListener("click", ()=>{
    hearToggle=!hearToggle
    if(hearToggle){
      heartChange[i].src="/assets/images/heart-red.svg"
    }else{
      heartChange[i].src="/assets/images/heart.svg"
  
    }
  })
  }

