$(document).ready(function(){
  $('.work-element').each(function(i, elem) {
    var waypoint = new Waypoint({
      element: $(elem),
      handler: function(direction) {
        $(this.element).addClass('in-viewport');
      },
      offset: 100
    });
  });

  
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});