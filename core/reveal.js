(function () {
  'use strict';

  var revealClass = 'ease-reveal';
  var activeClass = 'ease-reveal-active';

  function isCentered(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight;
    return rect.top < vh * 0.85 && rect.bottom > 0;
  }

  var supportsObserver = 'IntersectionObserver' in window;
  var observer = null;
  var mutationObserver = null;
  var observedCount = 0;

  function disconnectAll() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver = null;
    }
    observedCount = 0;
  }

  function initObserver() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            observer.unobserve(entry.target);
            observedCount--;
            if (observedCount <= 0) {
              observer.disconnect();
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    observedCount = 0;
  }

  function observeElements() {
    if (!supportsObserver) return;
    initObserver();
    var els = document.querySelectorAll('.' + revealClass + ':not(.' + activeClass + ')');
    Array.prototype.forEach.call(els, function (el) {
      if (isCentered(el)) {
        el.classList.add(activeClass);
      } else {
        observer.observe(el);
        observedCount++;
      }
    });
  }

  function initMutationObserver() {
    if (!supportsObserver || mutationObserver) return;
    mutationObserver = new MutationObserver(function (mutations) {
      var needsRefresh = false;
      for (var i = 0; i < mutations.length; i++) {
        var addedNodes = mutations[i].addedNodes;
        for (var j = 0; j < addedNodes.length; j++) {
          var node = addedNodes[j];
          if (node.nodeType === 1) {
            if (node.classList.contains(revealClass)) {
              needsRefresh = true;
            } else if (node.querySelectorAll && node.querySelectorAll('.' + revealClass).length > 0) {
              needsRefresh = true;
            }
          }
        }
      }
      if (needsRefresh) {
        observeElements();
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (supportsObserver) {
    var ready = function () {
      initMutationObserver();
      observeElements();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      ready();
    }
  } else {
    var readyFallback = function () {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el, index) {
        setTimeout(function () {
          el.classList.add(activeClass);
        }, index * 100);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyFallback);
    } else {
      readyFallback();
    }
  }

  window.__easeRevealRefresh = function () {
    disconnectAll();
    if (supportsObserver) {
      initObserver();
      initMutationObserver();
      observeElements();
    } else {
      readyFallback();
    }
  };

  window.__easeRevealDisconnect = function () {
    disconnectAll();
  };
})();
