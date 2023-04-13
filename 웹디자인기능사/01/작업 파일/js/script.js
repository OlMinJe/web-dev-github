//$(document).ready(function() {
$(() => {
    /*
    $(".mainMenu > li").mouseover(function() {
        $(".subMenu").stop().slideDown(500);
        $(".menu_bg").stop().slideDown(5000);
    }).mouseout(function() {
        $(".subMenu").slideDown(500);
        $(".menu_bg").slideDown(5000);
    });
    */
    $(".mainMenu > li").on({
        mouseover: () => {
            $(".subMenu").stop().slideDown(500);
            $(".menu_bg").stop().slideDown(5000);
        },
        mouseout: () => {
            $(".subMenu").slideDown(500);
            $(".menu_bg").slideDown(5000);
        }
    });
    $(".imageSlide a:gt(0)").hide();
    setInterval(() => {
        $(".imageSlide a:first-child")
            .fadeOut()
            .next("a")
            .fadeIn()
            .end()
            .appendTo(".imageSlide");
    }, 3000);

    $(".notice > ul > li:first").click(() => {
        $("#modal").show(500);
    })
    $("#btnClose").click(() => {
        $("#modal").hide(500);
    })
});