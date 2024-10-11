$(document).ready(function() {
    // Event handler for #dateInfo click
    $('#dateInfo').on('click', function() {
        $('#infoBox').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $(this).text('Ski').fadeIn(500);
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