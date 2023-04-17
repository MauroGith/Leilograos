$('.open-menu').click(() => {
    $('.open-menu').toggleClass('fa-xmark')
    $('.open-menu').toggleClass('fa-bars')
    $('.header-menu').slideToggle()
})