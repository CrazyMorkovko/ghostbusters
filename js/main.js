$(document).ready(function () {
  const mMenuButton = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");
  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 25,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });

  mMenuButton.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");

    let activeTabContent = $(this).attr("data-target");

    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
});
