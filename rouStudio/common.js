$(function () {

    $('.btn-menu').on('click', function menuToggle() {
        let mainHeight = $('.main').get(0).scrollHeight;
        // console.log(mainHeight);
        $('.main-filter').css('height', mainHeight);
        $(this).toggleClass('active');
        $('.main').toggleClass('active');
        $('.menu-colBar').toggleClass('active');
        $('.go2top-outside').toggleClass('active');
        $('.main-filter').toggleClass('active');

    })

    $('.main-filter').on('click', function menuExit() {
        $('.btn-menu').removeClass('active');
        $('.menu-colBar').removeClass('active');
        $('.go2top-outside').removeClass('active');
        $('.main').removeClass('active');
        $(this).removeClass('active');
    })


    $('.go2top-outside').on('click', function moveToMainTop() {
        $(".main").animate({ scrollTop: 0 }, 400);
        return false;
    })

   
})
