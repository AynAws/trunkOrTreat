if (window.innerWidth >= 576) {
    $(document).ready(function () {
      $('img').on('mouseover', function (event) {
        $(event.currentTarget).siblings('.text-box').fadeIn();
      });
  
      $('img').on('mouseout', function (event) {
        $(event.currentTarget).siblings('.text-box').fadeOut();
      });
    });
  } else {
    $(document).ready(function () {
        $('.text-box').fadeIn();
    }
}
