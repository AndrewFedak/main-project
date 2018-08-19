$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 340) {
            $('#mainLine').css('opacity', 0.9);
        }
        else {
            $('#mainLine').css('opacity', 0.6);
        }
    });
});


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.bg-content, .greet').animate({
               opacity: 1
            }, 200);
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.essence').animate({
               opacity: 1
            }, 1000);
        }
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 450) {
            $('.second-essence').animate({
               opacity: 1
            }, 1000);
        }
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 750) {
            $('.third-essence').animate({
               opacity: 1
            }, 1000);
        }
    });
});