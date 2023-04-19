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

$('.toggle-answer').click(function() {
    $(this).parent().next().slideToggle()
    $(this).toggleClass('fa-minus')
    $(this).toggleClass('fa-plus')
})