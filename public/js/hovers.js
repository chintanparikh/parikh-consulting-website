$(document).ready(function(){
  $('.work-element').each(function(i, elem) {
    var waypoint = new Waypoint({
      element: $(elem),
      handler: function(direction) {
        $(this.element).addClass('in-viewport');
      },
      offset: 100
    });
  })

});