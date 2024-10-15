$(document).ready(function() {
    $('#moreInfo').hide()
    // Event handler for #dateInfo click
    $('#dateInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('Ski').fadeIn()
        });
        console.log('ski');
    });
    $('#dressInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('sKI').fadeIn()
        });
        console.log('ski');
    });
    $('#trunkInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('SKIII').fadeIn()
        });
        console.log('ski');
    });

    // Event handler for #dyslexia click
    $('#dyslexia').on('click', function() {
        $('body').css('background-color', 'white');
        $('link[rel="stylesheet"]').attr('disabled', 'disabled');
        $('style').remove();
    });
});