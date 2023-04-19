$('.open-menu').click(() => {
    $('.open-menu').toggleClass('fa-xmark')
    $('.open-menu').toggleClass('fa-bars')
    $('.header-menu').slideToggle()
})

$('.show-items').click(function() {
    $(this).parent().next().find('ul').slideToggle()
})
$('.icon-wrapper').click(function() {
    $(this).next().find('ul').fadeToggle()
})