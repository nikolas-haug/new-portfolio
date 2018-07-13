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
        // If page is scrolled more than 50px
        if ($(this).scrollTop() >= 50) { 
            // Fade in the arrow       
            $('#return-to-top').fadeIn(200);    
        } else {
            // Else fade out the arrow
            $('#return-to-top').fadeOut(200);   
        }
    });
    // When arrow is clicked
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            // Scroll to top of body
            scrollTop : 0                       
        }, 500);
    });

    // FOR THE NAVBAR SCROLLING FUNCTIONS - TO DO adjust offsets accordingly after section resize
    // TO DO - dry up this code
    $('.section-home').on('click', function() {
        $('body,html').animate({
            // Scroll to top of body
            scrollTop : 0                       
        }, 500);
    });
    $('#section-about').on('click', function() {
        $("html, body").animate({ scrollTop: $('#about-section').offset().top - 60}, 1000);
    });
    $('#section-portfolio').on('click', function() {
        $("html, body").animate({ scrollTop: $('#portfolio-section').offset().top - 60}, 1000);
    });
    $('#section-connect').on('click', function() {
        $("html, body").animate({ scrollTop: $('#connect-section').offset().top - 60}, 1000);
    });
    $('#section-contact').on('click', function() {
        $("html, body").animate({ scrollTop: $('#contact-section').offset().top - 60}, 1000);
    });
    
    //for the animated text on home screen view
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
      };

    //   $('#projects-display').hide();

    //   // portfolio section
    //   $('#btn-portfolio').on('click', function() {
    //     $('#projects-display').slideToggle();
    //   });

});