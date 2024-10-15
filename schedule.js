$(document).ready(function() {
    $('#moreInfo').hide()
    // Event handler for #dateInfo click
    $('#dateInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('Trunk or Treat starts at 4:00 PM and ends at 5:30 PM on October 29th. Should, for any reason, the event be cancelled on the 29th, it will be moved to the 30th.').fadeIn()
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