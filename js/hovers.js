$(document).ready(function() {
  $(".button").hover(function() {
    $(this).animate({
      padding: "12px 22px",
    }, 100);
  },
  function() {
    $(this).animate({
      padding: "10px 20px",
    }, 500, 'easeOutQuart');
  })
})