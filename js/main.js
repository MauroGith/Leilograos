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