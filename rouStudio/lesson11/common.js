$(function () {
    $('.btn-menu').on('click', function () {
        $('.menu').toggleClass('active');
        $(this).toggleClass('active');
    })

})


$(function () {

    $('.lists').on('click', '.icon',function () {
        // (this).closest('.list-item').addClass('active');
        (this).closest('.list-item').remove();
    })
    $('.btn').on('click', function () {
        // let content = $('.lists').find('.list-item').first().clone();
        // console.log(content)
        let count = $(".lists > .list-item").length + 1 ;
        let content = '<div class="list-item"><div class="text">List' + count + '</div><div class="icon"><div></div><div></div></div></div>'
        $('.lists').append(content);
    })
})