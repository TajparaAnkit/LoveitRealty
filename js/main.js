(function ($) {
  "use strict";

  // Spinner Global
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("sticky-bg shadow");
      } else {
        $(".fixed-top").removeClass("sticky-bg shadow");
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("sticky-bg shadow").css("top", -45);
      } else {
        $(".fixed-top").removeClass("sticky-bg shadow").css("top", 0);
      }
    }
  });

  //Fixed Navbar inner page
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top-inner").addClass("sticky-bg shadow");
      } else {
        $(".fixed-top-inner").removeClass("sticky-bg shadow");
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top-inner").addClass("sticky-bg shadow").css("top", -45);
      } else {
        $(".fixed-top-inner").removeClass("sticky-bg shadow").css("top", 0);
      }
    }
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    lazyLoad: true,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  // Team member carousel
  $(".ltr-teammember-slider").owlCarousel({
    loop: true,
    autoHeight: true,
    lazyLoad: true,
    margin: 10,
    autoplay: false,
    items: 1,
    nav: true,
    dots: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });

  // Life Style carousel
  $(".ltr-lifestyle-slider").owlCarousel({
    loop: false,
    autoHeight: true,
    lazyLoad: true,
    margin: 10,
    autoplay: false,
    items: 1,
    nav: true,
    dots: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });

  // slider in slider carousel
  $(".ltr-sliderinslider-owl").owlCarousel({
    loop: false,
    autoHeight: false,
    margin: 10,
    lazyLoad: true,
    autoplay: false,
    items: 1,
    nav: true,
    dots: false,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });

  // For Sell desktop range slider
  // const setLabel = (lbl, val) => {
  //   const label = $(`.slider-${lbl}`);
  //   label.text(val);
  //   const slider = $(`#slider-div .${lbl}-slider-handle`);
  //   const rect = slider[0].getBoundingClientRect();
  //   label.offset({
  //     top: rect.top - 30,
  //     left: rect.left,
  //   });
  // };

  // const setLabels = (values) => {
  //   setLabel("min", values[0]);
  //   setLabel("max", values[1]);
  // };

  // $("#ex2")
  //   .slider()
  //   .on("slide", function (ev) {
  //     setLabels(ev.value);
  //   });
  // setLabels($("#ex2").attr("data-value").split(","));

  // For sell mobile range slider

  // const setLabelOn = (lbel, val) => {
  //   const label = $(`.slider-${lbel}-label`);
  //   label.text(val);
  //   const slider = $(`#slider-div-1 .${lbel}-slider-handle`);
  //   const rectLabel = slider[0].getBoundingClientRect();
  //   label.offset({
  //     top: rectLabel.top - 30,
  //     left: rectLabel.left,
  //   });
  // };

  // const setLabelOne = (values) => {
  //   setLabelOn("min", values[0]);
  //   setLabelOn("max", values[1]);
  // };

  // $("#ex3")
  //   .slider()
  //   .on("slide", function (ev) {
  //     setLabelOne(ev.value);
  //   });
  // setLabelOne($("#ex3").attr("data-value").split(","));

  //Adavnce search
  $(".propSearchTab").on("click", function () {
    $(".propSearchPanel").css("display", "none");

    $(".propSearchTab").removeClass("propSearchTabActive");
    $(this).addClass("propSearchTabActive");

    var $this = $(this);
    var id = $this.attr("id");
    var tabId = id.substring(18);

    var panelToDisplay = "#propSearchPanel_" + tabId;

    $(panelToDisplay).css("display", "block");
  });

  // Featur listing filter
  $(".propactivelistingTab").on("click", function () {
    $(".proplistingPanel").css("display", "none");

    $(".propactivelistingTab").removeClass("propactivelistingTabActive");
    $(this).addClass("propactivelistingTabActive");

    var $this = $(this);
    var id = $this.attr("id");
    var activetabId = id.substring(20);

    var panelToDisplay = "#proplistingPanel_" + activetabId;

    $(panelToDisplay).css("display", "block");
  });

  // Property details filter
  $(".propdetailsfilterTab").on("click", function () {
    // debugger
    $(".propdetailsfilterPanel").css("display", "none");

    $(".propdetailsfilterTab").removeClass("propactivefilterTabActive");
    $(this).addClass("propactivefilterTabActive");

    var $this = $(this);
    var id = $this.attr("id");
    var filtertabId = id.substring(21);

    var panelToDisplay = "#propdetailsfilterPanel_" + filtertabId;

    $(panelToDisplay).css("display", "block");
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // tab script

  var hidWidth;
  var scrollBarWidths = 40;

  var widthOfList = function () {
    var itemsWidth = 0;
    $(".list a").each(function () {
      var itemWidth = $(this).outerWidth();
      itemsWidth += itemWidth;
    });
    return itemsWidth;
  };

  var widthOfHidden = function () {
    var ww = 0 - $(".wrapper-nav").outerWidth();

    var hw =
      $(".wrapper-nav").outerWidth() -
      widthOfList() -
      getLeftPosi() -
      scrollBarWidths;

    var rp =
      $(document).width() -
      ($(".nav-item.nav-link").last().offset().left +
        $(".nav-item.nav-link").last().outerWidth());

    if (ww > hw) {
      //return ww;
      return rp > ww ? rp : ww;
    } else {
      //return hw;
      return rp > hw ? rp : hw;
    }
  };

  var getLeftPosi = function () {
    var ww = 0 - $(".wrapper-nav").outerWidth();
    var lp = $(".list").position().left;

    if (ww > lp) {
      return ww;
    } else {
      return lp;
    }
  };

  var reAdjust = function () {
    // check right pos of last nav item
    var rp =
      $(document).width() -
      ($(".nav-item.nav-link").last().offset().left +
        $(".nav-item.nav-link").last().outerWidth());

    if ($(".wrapper-nav").outerWidth() < widthOfList() && rp < 0) {
      $(".scroller-right").show().css("display", "flex");
    } else {
      $(".scroller-right").hide();
    }

    if (getLeftPosi() < 0) {
      $(".scroller-left").show().css("display", "flex");
    } else {
      $(".scroller-left").hide();
    }
  };

  reAdjust();

  $(window).on("resize", function (e) {
    reAdjust();
  });

  $(".scroller-right").click(function () {
    $(".scroller-left").fadeIn("slow");
    $(".scroller-right").fadeOut("slow");

    $(".list").animate({ left: `+=${widthOfHidden()}px` }, "slow", function () {
      reAdjust();
    });
  });

  $(".scroller-left").click(function () {
    $(".scroller-right").fadeIn("slow");
    $(".scroller-left").fadeOut("slow");

    $(".list").animate({ left: `-=${getLeftPosi()}px` }, "slow", function () {
      reAdjust();
    });
  });

  // develpment page map/photo hide/show  
})(jQuery);
