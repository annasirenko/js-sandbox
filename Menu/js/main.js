/* Делаем адаптивное меню на jQuery */

$(function () {
  let menuLink = $(".menu-link");
  let menu = $("menu");
  let close = $(".close-btn");
  let navLink = $("li a");

  menuLink.click(function () {
    menu.toggleClass("active-menu");
    // $("body").css("overflow", "hidden");
  });
  close.click(function () {
    menu.toggleClass("active-menu");
    // $("body").css("overflow", "auto");
  });

  navLink.on("click", function (event) {
    event.preventDefault();
    let target = $(this).attr("href");
    let top = $(target).offset().top;
    $("html,body").animate({ scrollTop: top }, 500);
  });

  //   $(".active-menu")    .modal()
  //     .on("shown", function () {
  //       $("body").css("overflow", "hidden");
  //     })
  //     .on("hidden", function () {
  //       $("body").css("overflow", "auto");
  //     });
});
