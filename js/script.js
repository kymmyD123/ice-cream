$(function () {

    //up button scroll top
    var options = {
        class: '',
        positionY: 'bottom',
        positionX: 'left',
        text: 'Наверх',
        displayAlways: false
    };

    new Up(options);

    //img heart lighting
    $(".heart").bind("click", function () {
        $(this).toggleClass("heart-active");
    });

    //popup window appear(disappear)
    $(".popup-btn").bind("click", function () {
        $(".popup").fadeIn();
        $(".wrapper").fadeIn();
    });

    $(".wrapper").bind("click", function () {
        $(this).fadeOut();
        $(".popup").fadeOut();
    });
});