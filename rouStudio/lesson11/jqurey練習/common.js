$(function () {
    $('.set').on('click', function () {
        $('h1').text('Hi!');
    })
})


$(function () {
    $('.append').on('click', function () {
        $('h1').append('雷侯');
    })
})

$(function () {
    $('.prepend').on('click', function () {
        $('h1').prepend('123');
    })
})

$(function () {
    $('.after').on('click', function () {
        $('h1').after('<h2>H2 tag </h2>');
    })
})

$(function () {
    $('.empty').on('click', function () {
        $('h1').empty();
    })
})

$(function () {
    $('.css').on('click', function () {
        $('h1').css({
            'color': 'red',
            'font-size': '100px',
            'background-color': 'green'
        })
    })
    $('.addcls').on('click',function(){
        $('h1').addClass('active')
    })
    
    $('.removecls').on('click',function(){
        $('h1').removeClass('active')
    })
    $('.togglecls').on('click',function(){
        $('h1').toggleClass('active')
    })
})



// $(function(){
//     $('.animate').on('click',function(){
//         $('h1').animate({
//             'fontSize':'100px',
//         },0)
//     })
// })