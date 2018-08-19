$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 340) {
            $('#mainLine').css('opacity', 0.9);
        }
        else {
            $('#mainLine', ).css('opacity', 0.6);
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('.bg-content').animate({
                opacity: 1
            }, 500);
        }
    });
});
