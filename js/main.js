$('.open-menu').click(function() {
    $(this).toggleClass('fa-xmark')
    $(this).toggleClass('fa-bars')
    $('.header-menu').slideToggle()
})

$('.show-items').click(function() {
    $(this).parent().next().find('ul').slideToggle()
})
$('.icon-wrapper').click(function() {
    $(this).next().find('ul').fadeToggle()
})

$('.question').click(function() {
    $(this).next().slideToggle()
    $(this).find('i').toggleClass('fa-minus')
    $(this).find('i').toggleClass('fa-plus')
})

if(innerWidth < 768 ){
    $('.chat-item').click(function(){
        $('.chat-list').css('display', 'none')
        $('.chat-box').css('display', 'flex')
    })
}

$('.close-chat').click(function(){
    $('.chat-box').css('display', 'none')
    $('.chat-list').css('display', 'block')
})

$('.toggle-nav').click(function(){
    

    $('.dashboard-buttons nav').slideToggle()
    $('.toggle-nav i').toggleClass('fa-chevron-down')
    $('.toggle-nav i').toggleClass('fa-chevron-up')

    $('.toggle-nav p').text() === 'Exibir Menu' ?  $('.toggle-nav p').text('Ocultar Menu') : $('.toggle-nav p').text('Exibir Menu')
})
