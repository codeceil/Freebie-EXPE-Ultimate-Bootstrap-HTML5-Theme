
/*
  Theme Name: Expe
  Author: Nababur Rahaman
  Support: nababurbd@gmail.com
  Author URL: https://bootelements.com/author
  Description: One page Bootstrap HTML5 Template.
  Version: 1.0
*/



(function ($) {
    "use strict";

      //===== Prealoader
      
      $(window).on('load', function(){
          $('.preloader').delay(500).fadeOut(500);
      });

      /*==============================
        AOS
      ================================*/ 
        AOS.init();

        
      /*==============================
        Smoth Scroll js
      ================================*/ 
        $('a.expe-scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top -85)
                    }, 1200, "easeInOutExpo");
                    return false;
                }
            }
        });


      //Hamburger menu toggle
      $('.top-manu ul li.nav-item a').on('click', function(){
          // check if window is small enough so dropdown is created
          var toggle = $(".navbar-toggler").is(":visible");
          if (toggle) {
            $(".navbar-collapse").collapse('hide');
          }

      });



     /*==============================
        Scroll To Top
      ================================*/ 
      $(window).scroll(function(){
          if ($(this).scrollTop() > 200) {
            $(".scroll-top-top").fadeIn('600');
          }else{
            $(".scroll-top-top").fadeOut('700');
          }
      });

      // Top to Scroll 
      $(document).ready(function() {
          $(".scroll-top-top").on("click", function(){
             $('html, body').animate({scrollTop: 0}, 'slow');
          });
      });


      //===== Sticky
      
      $(window).on('scroll',function(event) {    
          var scroll = $(window).scrollTop();
          if (scroll < 100) {
          $(".navbar").removeClass("sticky");
          }else{
          $(".navbar").addClass("sticky");
          }
      });


    //===== Bootstrap Touch Slider
    (function($) {
      //Function to animate slider captions
      function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function() {
          var $this = $(this),
            $animationType = $this.data("animation");
          $this.addClass($animationType).one(animEndEv, function() {
            $this.removeClass($animationType);
          });
        });
      }

      //Variables on page load
      var $myCarousel = $("#homeSlideIndicator"),
        $firstAnimatingElems = $myCarousel
          .find("#slider-home .carousel-item:first")
          .find("[data-animation ^= 'animated']");

      //Initialize carousel
      $myCarousel.carousel();

      //Animate captions in first slide on page load
      doAnimations($firstAnimatingElems);

      //Other slides to be animated on carousel slide event
      $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
          "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
      });
    })(jQuery);


    //Isotop active js
    $('.grid').isotope({
      itemSelector: '.grid-item',
    });

    // filter items on button click
    $('.filter-button-group').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $('.grid').isotope({ filter: filterValue });
      $('.filter-button-group li').removeClass('active');
      $(this).addClass('active');
    });



    $('.top-manu ul li.nav-item a').on( 'click', function() {
      $('.top-manu ul li.nav-item a').removeClass('active');
      $(this).addClass('active');
    });



  $(document).ready(function(){
        var quantitiy=0;
        $('.quantity-right-plus').on( 'click', function(e) {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);

              
                // Increment
            
        });
        $('.quantity-left-minus').on( 'click', function(e) {
         
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
      
  });









})(jQuery);


