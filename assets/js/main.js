


// <-------------------- owl-carsoul options ---------------------------->
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1, // Number of items to display
      loop: true, // Infinite loop
      // Autoplay
      autoplay: true, // Autoplay interval in milliseconds
     autoplayTimeout:3000,
      autoplayHoverPause: true,
      // Pause autoplay on hover,
      nav: false,
      dots: false,
      margin: 0,
      mouseDrag: false,
      // Enable navigation
      responsive: {
        0: {
          items: 1, // 1 item displayed on screens less than 600px wide
        },
        600: {
          items: 2, // 2 items displayed on screens 600px and wider
        },
        1000: {
          items: 1, // 3 items displayed on screens 1000px and wider
        },
        // Add more breakpoints and configurations as needed
      },
    });
  });

  // <-------------------- owl-carsoul2 options ---------------------------->
$(document).ready(function () {
    $(".carousel2").owlCarousel({
      items: 1, // Number of items to display
      loop: true, // Infinite loop
      // Autoplay
      autoplay: false, // Autoplay interval in milliseconds
      autoplayTimeout:3000,
      autoplayHoverPause: true,
      // Pause autoplay on hover,
      nav: false,
      dots: false,
      margin: 0,
      mouseDrag: false,
      // Enable navigation
      responsive: {
        0: {
          items: 1, // 1 item displayed on screens less than 600px wide
        },
        600: {
          items: 2, // 2 items displayed on screens 600px and wider
        },
        1000: {
          items: 1, // 3 items displayed on screens 1000px and wider
        },
        // Add more breakpoints and configurations as needed
      },
    });
  });



  //------------ Change Icon Heart ------------//
  let heartChange = document.querySelectorAll(".heart");
  let hearToggle = false;
  for(let i=0 ; i<=heartChange.length ; i++){
  heartChange[i].addEventListener("click", ()=>{
    hearToggle=!hearToggle
    if(hearToggle){
      heartChange[i].src="./assets/images/heart-red.svg"
    }else{
      heartChange[i].src="./assets/images/heart.svg"
  
    }
  })
  }
