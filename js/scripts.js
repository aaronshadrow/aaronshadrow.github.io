/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    var connect = ""
    connect += "<div class='container'>"
    connect += "    <div class='row'>"
    connect += "        <!--<div class='col-md-4 mb-3 mb-md-0'>-->"
    connect += "        <!--    <div class='card py-4 h-100'>-->"
    connect += "        <!--        <div class='card-body text-center'>-->"
    connect += "        <!--            <i class='fas fa-map-marked-alt text-primary mb-2'></i>-->"
    connect += "        <!--            <h4 class='text-uppercase m-0'>Address</h4>-->"
    connect += "        <!--            <hr class='my-4' />-->"
    connect += "        <!--            <div class='small text-black-50'>4923 Market Street, Orlando FL</div>-->"
    connect += "        <!--        </div>-->"
    connect += "        <!--    </div>-->"
    connect += "        <!--</div>-->"
    connect += "        <div class='offset-md-4 col-md-4 mb-3 mb-md-0'>"
    connect += "            <div class='card py-4 h-100'>"
    connect += "                <div class='card-body text-center'>"
    connect += "                    <i class='fas fa-envelope text-primary mb-2'></i>"
    connect += "                    <h4 class='text-uppercase m-0'>Email</h4>"
    connect += "                    <hr class='my-4' />"
    connect += "                    <div class='small text-black-50'><a href='#!'>internetfashionbiz@gmail.com</a></div>"
    connect += "                </div>"
    connect += "            </div>"
    connect += "        </div>"
    connect += "        <!--<div class='col-md-4 mb-3 mb-md-0'>-->"
    connect += "        <!--    <div class='card py-4 h-100'>-->"
    connect += "        <!--        <div class='card-body text-center'>-->"
    connect += "        <!--            <i class='fas fa-mobile-alt text-primary mb-2'></i>-->"
    connect += "        <!--            <h4 class='text-uppercase m-0'>Phone</h4>-->"
    connect += "        <!--            <hr class='my-4' />-->"
    connect += "        <!--            <div class='small text-black-50'>+1 (555) 902-8832</div>-->"
    connect += "        <!--        </div>-->"
    connect += "        <!--    </div>-->"
    connect += "        <!--</div>-->"
    connect += "    </div>"
    connect += "    <div class='social d-flex justify-content-center'>"
    connect += "        <a class='mx-2' href='https://twitter.com/aaronshadrow'><i class='fab fa-twitter'></i></a>"
    connect += "        <a class='mx-2' href='https://open.spotify.com/artist/2qefeq0VFAsuHzlZMQNcI5'><i class='fab fa-spotify'></i></a>"
    connect += "        <a class='mx-2' href='https://aaronshadrow.bandcamp.com/music'><i class='fab fa-bandcamp'></i></a>"
    connect += "        <a class='mx-2' href='https://linktr.ee/aaronshadrow'><i class='fas fa-tree'></i></a>"
    connect += "    </div>"
    connect += "</div>"
    $("#contact").append(connect)
    
    var footer = "<!-- Footer-->"
    footer += "<footer class='footer bg-black small text-center text-white-50'>"
    footer += "<div class='container'>Copyright © Aaron Shadrow 2020</div>"
    footer += "</footer>"
    footer += "<!-- Bootstrap core JS-->"
    footer += "<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>"
    footer += "<script src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'></script>"
    footer += "<!-- Third party plugin JS-->"
    footer += "<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'></script>"
    $('#footer').append(footer)

    var nav = "<!-- Navigation-->"
    nav+= "<nav class='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>"
    nav+= "    <div class='container'>"
    nav+= "        <!--<a class='navbar-brand js-scroll-trigger' href='#page-top'>Start Bootstrap</a>-->"
    nav+= "        <button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>"
    nav+= "            Menu"
    nav+= "            <i class='fas fa-bars'></i>"
    nav+= "        </button>"
    nav+= "        <div class='collapse navbar-collapse' id='navbarResponsive'>"
    nav+= "            <ul class='navbar-nav ml-auto'>"
    nav+= "                <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./index'>About</a></li>"
    nav+= "                <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./projects'>Production/Work Sessions</a></li>"
    nav+= "                <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./mixing'>Mixing/Mastering</a></li>"
    nav+= "                <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./touring'>Touring</a></li>"
    nav+= "                <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./teaching'>Teaching</a></li>"
    nav+= "                <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./connect'>Connect</a></li>"
    nav+= "            </ul>"
    nav+= "        </div>"
    nav+= "    </div>"
    nav+= "</nav>"
    $("#nav").append(nav)



    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict