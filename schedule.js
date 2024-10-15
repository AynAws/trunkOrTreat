$(document).ready(function() {
    $('#moreInfo').hide()
    // Event handler for #dateInfo click
    $('#dateInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('Trunk or Treat starts at 4:00 PM and ends at 5:30 PM on October 29th. Should, for any reason, the event be cancelled on the 29th, it will be moved to the 30th. Volunteers should arrive at 3:00 PM for setup and 5:30 for cleanup.').fadeIn()
        });
        console.log('ski');
    });
    $('#dressInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('Wear your craziest costume!').fadeIn()
        });
        console.log('ski');
    });
    $('#trunkInfo').on('click', function() {
        $('#moreInfo').fadeOut(500, function() {
            // Change text after fadeOut is complete
            $('#moreInfo').text('Accessorize your trunks however you like! Just keep it school-appropriate.').fadeIn()
        });
        console.log('ski');
    });
});