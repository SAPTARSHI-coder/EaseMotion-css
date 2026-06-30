(function () {
  "use strict";

  var autoPlayInterval = 4000;

  function initCarousel(container) {
    var track = container.querySelector(".ease-carousel");
    var items = track.querySelectorAll(".ease-carousel-item");
    var prevBtn = container.querySelector(".ease-carousel-btn-prev");
    var nextBtn = container.querySelector(".ease-carousel-btn-next");
    var indicators = container.querySelectorAll(".ease-carousel-indicator");
    var autoPlayTimer = null;
    var itemCount = items.length;
    var currentIndex = 0;

    function goTo(index) {
      if (index < 0) index = itemCount - 1;
      if (index >= itemCount) index = 0;
      currentIndex = index;
      var target = items[index];
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      indicators.forEach(function (dot, i) {
        dot.classList.toggle("ease-carousel-indicator-active", i === index);
      });
    }

    function next() {
      goTo(currentIndex + 1);
    }
    function prev() {
      goTo(currentIndex - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      if (autoPlayInterval > 0) {
        autoPlayTimer = setInterval(next, autoPlayInterval);
      }
    }
    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    if (prevBtn)
      prevBtn.addEventListener("click", function () {
        stopAutoPlay();
        prev();
      });
    if (nextBtn)
      nextBtn.addEventListener("click", function () {
        stopAutoPlay();
        next();
      });

    indicators.forEach(function (dot) {
      dot.addEventListener("click", function () {
        stopAutoPlay();
        goTo(parseInt(dot.getAttribute("data-index"), 10));
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startAutoPlay();
          } else {
            stopAutoPlay();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(container);

    var scrollObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = parseInt(entry.target.getAttribute("data-index"), 10);
            if (!isNaN(idx)) currentIndex = idx;
            indicators.forEach(function (dot, i) {
              dot.classList.toggle("ease-carousel-indicator-active", i === idx);
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    items.forEach(function (item, i) {
      item.setAttribute("data-index", i);
      scrollObserver.observe(item);
    });

    indicators.forEach(function (dot, i) {
      dot.setAttribute("data-index", i);
    });
    if (indicators.length > 0)
      indicators[0].classList.add("ease-carousel-indicator-active");
  }

  function init() {
    var containers = document.querySelectorAll(".ease-carousel-container");
    Array.prototype.forEach.call(containers, initCarousel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
