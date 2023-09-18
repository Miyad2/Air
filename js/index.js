flatpickr("#date", {
    // enableTime: false,
    // dateFormat: "Y-m-d H:i",
    // altInput: true,
    // altFormat: "F j, Y",
    dateFormat: "d-m-Y",
    minDate: "today"
});
// flatpickr("#time", {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "H:i",
//     // time_24hr: true,
// });




// const videoImg = document.querySelector('.video-cover-img');
//  videoImg.addEventListener('click', function(){
//     videoImg.style.display='block';
//     this.style.display='none';
//     <img class = "img" src="img/sddefault.webp"></img>
//  });



// $('.team-slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   Infinity:true,
//   swipeToSlide:true,
//   arrows:false,

//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false,
//       }
//     },
//     {
//       breakpoint: 601,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }

//   ]
// });











$('.team-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  Infinity:true,
  swipeToSlide:true,
  arrows:false,

  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  