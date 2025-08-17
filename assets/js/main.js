jQuery(window).on('load', function () {
    "use strict";


    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");

    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function () {

        $("#intro .animation-container").each(function () {

            var e = $(this);

            setTimeout(function () {

                e.addClass("run-animation");

            }, e.data("animation-delay"));

        });

    }, 700);


});


jQuery(document).ready(function ($) {
    "use strict";


    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function (event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);

    });


    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated", {
        duration: 600,
        delay: 0,
        origin: "left",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });


    $(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();

        var form = $(this);
        var postdata = form.serialize(); 

        $.ajax({
            type: "POST",
            url: "https://formspree.io/f/mldlknzv",
            data: postdata,
            dataType: "json",
            headers: {
                'Accept': 'application/json'
            },
            
            success: function(response) {
                if (response.ok) {
                    form.addClass("success");
                    form.find('input, textarea').val('');

                    setTimeout(function() {
                        form.removeClass("success");
                    }, 4000);
                }
            },

            error: function(xhr, status, error) {
                console.error("Form submission failed:", status, error);
                alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
            }
        });
    });
});


});