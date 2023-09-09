$(window).ready(function(){
    $(".loading").delay(5000).fadeOut(1000);
})


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

    $('.menu-colBar .dropdown-toggle').on('click', function moveToService() {
        var targetHeight = $('.slide').get(0).scrollHeight;
        console.log(targetHeight)
        $(".main").animate({ scrollTop: targetHeight }, 400);
        return false;
    })
    $('.service-text1').on('click', function moveToServiceItem1() {
        console.log('check1')
        moveTosServiceItem(1)
    })
    $('.service-text2').on('click', function moveToServiceItem2() {
        console.log('check2')
        moveTosServiceItem(2)
    })
    $('.service-text3').on('click', function moveToServiceItem3() {
        console.log('check3')
        moveTosServiceItem(3)
    })
    $('.service-text4').on('click', function moveToServiceItem4() {
        console.log('check4')
        moveTosServiceItem(4)
    })
    $('.service-text5').on('click', function moveToServiceItem5() {
        console.log('check5')
        moveTosServiceItem(5)
        // $('.main').scrollTop('.service-item5')
    })

    $('.menu-colBar>ul>li:nth-of-type(2)').on('click', function moveToAbout() {
        console.log('按我~')
        var targetHeight =$('.slide').get(0).scrollHeight + $('.service').get(0).scrollHeight;
        console.log(targetHeight)
        $(".main").animate({ scrollTop: targetHeight }, 400);
        return false;
    })
    $('.menu-colBar>ul>li:nth-of-type(3)').on('click', function moveToAssignment() {
        console.log('按我~')
        var targetHeight = $('.service').get(0).scrollHeight + $('.slide').get(0).scrollHeight + $('.about').get(0).scrollHeight;
        console.log(targetHeight)
        $(".main").animate({ scrollTop: targetHeight }, 400);
        return false;
    })
    $('.menu-colBar>ul>li:nth-of-type(4)').on('click', function moveToContact() {
        console.log('按我~')
        var targetHeight = $('.service').get(0).scrollHeight + $('.slide').get(0).scrollHeight + $('.about').get(0).scrollHeight + $('.assign').get(0).scrollHeight  ;
        console.log(targetHeight)
        $(".main").animate({ scrollTop: targetHeight }, 400);
        return false;
    })
    

})



function moveTosServiceItem(item) {
    var mainWidth = $('.main').width();
    var slideHeight = $('.slide').get(0).scrollHeight;
    var cardHeight = $('.service-item1').get(0).scrollHeight;
    // var h2Height= $('h2').get(0).scrollHeight;
    if (mainWidth <= 768) {
        targetHeight = slideHeight + cardHeight / 0.9 *(item-1);
        $(".main").animate({ scrollTop: targetHeight}, 400);
        
    }
    else {
        if (item < 4) {
            targetHeight = slideHeight + cardHeight*0.5;
            $(".main").animate({ scrollTop: targetHeight }, 400);
        }
        else{
            targetHeight = slideHeight + cardHeight*1.5;
            $(".main").animate({ scrollTop: targetHeight }, 400);
        }

    }
}