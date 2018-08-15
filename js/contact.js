$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 68) {
            $('.logo-header').css('opacity', 0.9); //logo-bar
        }
        else {
            $('.logo-header', ).css('opacity', 0.6);
        }
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 68) { //nav-bar
            $('.nav-bg').css('opacity', 0.9);
        }
        else {
            $('.nav-bg', ).css('opacity', 0.6);
        }
    });
});

/*$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 650) {
            $('.bg-content').animate({
                marginLeft: '+198',
                opacity: 1
            }, 500);
        }
    });
});*/
