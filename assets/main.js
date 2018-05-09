// custom js for portfolio
$(document).ready(function () {

    //for animated navbar on scroll
    $(window).scroll(function () {
        // Method 1: Using addClass and removeClass
        if ($(document).scrollTop() > 50) {
           $('.navbar-light').addClass('navbar-shrink');
        } else {
           $('.navbar-light').removeClass('navbar-shrink');
        }
        // Method 2: Using toggleClass
        // $(".navbar-light").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
    });

    // for scroll to top button
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

});