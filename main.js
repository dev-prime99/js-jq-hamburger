
$(".hamburger-menu").css("opacity", "0");

$('.header-right > a').click(function(){
  $(".hamburger-menu").css("display", "block");
  $(".hamburger-menu").animate({opacity: "1"}, "1500");
});

$(".close").click(function(){
  $(".hamburger-menu").animate({opacity: "0"}, "slow");
  $(".hamburger-menu").css("display", "none");
});
