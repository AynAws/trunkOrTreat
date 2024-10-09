$(document).ready(
    $('#infoBox').hide(),
    $('#showInfo').on('click', () => {
        $('#infoBox').fadeToggle()
    }),
    $('#dyslexia').on('click', () => {
        $('body').css('background-color', 'white')
        $('link[rel="stylesheet"]').attr('disabled', 'disabled');
        $('style').remove();
    })
)