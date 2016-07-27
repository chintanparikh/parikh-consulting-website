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
  });

  $(".info").hover(function() {
    $(this).animate({
      width: "375px",
      height: "275px",
      marginTop: "88px",
      padding: "30px",
      right: "7.5px"
    }, 500)
  })
})