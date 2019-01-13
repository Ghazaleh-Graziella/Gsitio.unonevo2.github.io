jQuery(document).ready(function(){
     
   "use strict"
    $(".slider").ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
     $(".text").typed({
        strings:["<strong>i love</strong><strong class='primary'> codings.</strong>","<strong>and to</strong><strong class='primary'> share !!.</strong>"],
         typespeed:0,
         loop:true
         
     });

      $('.gallery').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
      enabled: true
          }                        
    });

       $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          400:{
            items:2
          },
          768:{
            items:3
          }
        }  

       });



        $('.counter').counterUp({
                delay: 10,
                time: 6000
            });



       $("a.smoothscroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();
  });



  window.onscroll = function() {myFunction()};
  var nav = document.getElementById("mynav");
  var sticky = nav.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      nav.classList.add("secondary");
    } 
    else  {
      nav.classList.remove("secondary");
    }
  }


