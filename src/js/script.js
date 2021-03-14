$(document).ready(function () {

    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-nav .nav-link").removeClass("active"),
            $(this).addClass("active")
    });//navbar-nav

    $("a").click(function () {
        var e = $(this).attr("href");
        $("html, body").animate({scrollTop: $(e).offset().top}, 1e3);
    });//cluck add class

    $('.skitter-large').skitter({
        numbers: true,
        dots: false
    });//skitter

    $("html").niceScroll({interval: 9e3});/*end of nice Scroll*/

});//document ready

