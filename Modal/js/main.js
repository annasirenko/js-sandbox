/* Всё о всплывающих (модальных) окнах */

// $(document).ready(function () {
// 	let modal = $(".popup");
// 	let overlay = $(".overlay");
// 	let link = $('button[data-popup="true"]');
// 	let close = $(".close-btn");

// 	link.on("click", function () {
// 	  console.log(modal);
// 	  overlay.show();
// 	  modal.show();
// 	});
// 	close.click(function () {
// 	  overlay.hide();
// 	  modal.hide();
// 	});
//   });
// Самый простой вариант всплывающего окна

// $(document).ready(function () {
//   let modal = $(".popup");
//   let overlay = $(".overlay");
//   let link = $('button[data-popup="true"]');
//   let close = $(".close-btn");

//   close.click(function () {
//     modal.toggleClass("popup_active");
//     overlay.hide();
//   });
//   link.on("click", function () {
//     console.log(modal);
//     overlay.show();
//     modal.toggleClass("popup_active");
//   });
// }); // Красивое появляение окна

$(document).ready(function () {
  let modal = $(".popup");
  let overlay = $(".overlay");
  let link = $('button[data-popup="true"]');
  let close = $(".close-btn");
  let fruitName = $(".fruit-name");

  close.click(function () {
    modal.toggleClass("popup_active");
    overlay.hide();
  });
  link.on("click", function () {
    fruitName.text($(this).attr("data-fruit"));
    overlay.show();
    modal.toggleClass("popup_active");
  });
}); // Много кнопок - одно окно
