/* Делаем собственный слайдер на jQuery */

$(function () {
  let slideNow = 1;
  let slideCount = $(".sliderwrapper").children().length;
  let slideTime = 5000;
  let navBtn = $(".slide-nav");

  navBtn.click(function () {
    navBtn = $(this).index();
    $(".active").removeClass("active");
    $(this).toggleClass("active");
    if (navBtn + 1 != slideNow) {
      let translateWidth = -$(".viewport").width() * navBtn;
      $(".sliderwrapper").css({
        transform: "translate(" + translateWidth + "px,0)",
        "-o-transform": "translate(" + translateWidth + "px,0)",
        "-webkit-transform": "translate(" + translateWidth + "px,0)",
      });
      slideNow = navBtn + 1;
    }
  });

  // setInterval(nextSlide, slideTime);
  function fillActiveBtn() {
    navBtn = $(this).index();
    $(".active").removeClass("active");
    $(this).toggleClass("active");
  }

  $(".btn-next").click(nextSlide);
  $(".btn-prev").click(prevSlide);

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $(".sliderwrapper").css({
        transform: "translate(0,0)",
        "-o-transform": "translate(0,0)",
        "-webkit-transform": "translate(0,0)",
      });
      slideNow = 1;
    } else {
      let translateWidth = -$(".viewport").width() * slideNow;
      $(".sliderwrapper").css({
        transform: "translate(" + translateWidth + "px,0)",
        "-o-transform": "translate(" + translateWidth + "px,0)",
        "-webkit-transform": "translate(" + translateWidth + "px,0)",
      });
      slideNow++;
    }
  }
  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      let translateWidth = -$(".viewport").width() * (slideCount - 1);
      $(".sliderwrapper").css({
        transform: "translate(" + translateWidth + "px,0)",
        "-o-transform": "translate(" + translateWidth + "px,0)",
        "-webkit-transform": "translate(" + translateWidth + "px,0)",
      });
      slideNow = slideCount;
    } else {
      let translateWidth = -$(".viewport").width() * (slideNow - 2);
      $(".sliderwrapper").css({
        transform: "translate(" + translateWidth + "px,0)",
        "-o-transform": "translate(" + translateWidth + "px,0)",
        "-webkit-transform": "translate(" + translateWidth + "px,0)",
      });
      slideNow--;
    }
  }
});
