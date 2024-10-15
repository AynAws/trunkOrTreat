$(document).ready(
    $('#infoBox').hide(),
    $('#showInfo').on('click', () => {
        $('#infoBox').fadeToggle()
    }),
    $('#dyslexia').on('click', () => {
        $('link[rel="stylesheet"]').attr('disabled', 'disabled')
        $('style').remove()
    })
)