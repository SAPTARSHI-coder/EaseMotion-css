(function () {
  'use strict';

  var CSS_LIMIT = 20; // CSS supports up to 20 tabs natively

  function initializeTabs() {
    // Find all tab components
    var tabContainers = document.querySelectorAll('.ease-tabs');
    if (tabContainers.length === 0) return;

    // Create a style element for dynamic CSS rules (for tabs beyond the CSS limit)
    var styleId = 'ease-tabs-dynamic-rules';
    var existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    var styleElement = document.createElement('style');
    styleElement.id = styleId;
    var cssRules = '';

    // Process each tab container
    Array.prototype.forEach.call(tabContainers, function (container, containerIndex) {
      var inputs = container.querySelectorAll('.ease-tab-input');
      var numTabs = inputs.length;

      if (numTabs === 0) return;

      // Only generate dynamic CSS for tabs beyond CSS_LIMIT
      if (numTabs > CSS_LIMIT) {
        var containerId = 'ease-tabs-' + containerIndex;
        container.setAttribute('data-tabs-id', containerId);

        // Generate CSS rules for tabs beyond the CSS limit
        for (var i = CSS_LIMIT + 1; i <= numTabs; i++) {
          var translatePercent = (i - 1) * 100;

          // Focus visible state
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):focus-visible ~ .ease-tabs-nav .ease-tab-label:nth-of-type(' + i + ') { outline: 2px solid var(--ease-color-primary); outline-offset: -2px; }\n';

          // Checked state for labels
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(' + i + ') { color: var(--ease-color-primary); }\n';

          // Underline translation
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-nav .ease-tab-underline { transform: translateX(' + translatePercent + '%); }\n';

          // Content panel visibility
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-content .ease-tab-panel:nth-of-type(' + i + ') { display: block; }\n';

          // Auto-width variant
          if (container.classList.contains('ease-tabs-auto')) {
            cssRules += '[data-tabs-id="' + containerId + '"].ease-tabs-auto .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(' + i + ') { border-bottom: 2px solid var(--ease-color-primary); }\n';
          }
        }

        // Set CSS variable for tab width (for equal-width tabs)
        if (!container.classList.contains('ease-tabs-auto')) {
          var tabWidthPercent = (100 / numTabs);
          cssRules = '[data-tabs-id="' + containerId + '"] { --ease-tab-width: ' + tabWidthPercent + '%; }\n' + cssRules;
        }
      }

      // Initialize underline width for all containers
      var underline = container.querySelector('.ease-tabs-nav .ease-tab-underline');
      if (underline) {
        updateUnderlineWidth(container);
      }
    });

    // Inject generated CSS rules only if needed
    if (cssRules) {
      styleElement.textContent = cssRules;
      document.head.appendChild(styleElement);
    }

    // Add event listeners for dynamic underline width adjustment
    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        Array.prototype.forEach.call(tabContainers, function (container) {
          updateUnderlineWidth(container);
        });
      }, 150);
    });

    // Update underline width on tab change
    Array.prototype.forEach.call(tabContainers, function (container) {
      var inputs = container.querySelectorAll('.ease-tab-input');
      Array.prototype.forEach.call(inputs, function (input) {
        input.addEventListener('change', function () {
          updateUnderlineWidth(container);
        });
      });
    });
  }

  function updateUnderlineWidth(container) {
    var underline = container.querySelector('.ease-tabs-nav .ease-tab-underline');
    if (!underline) return;

    // For auto-width tabs, underline is hidden, so skip
    if (container.classList.contains('ease-tabs-auto')) {
      return;
    }

    var checkedInput = container.querySelector('.ease-tab-input:checked');
    if (!checkedInput) return;

    var navContainer = container.querySelector('.ease-tabs-nav');
    if (!navContainer) return;

    var labels = navContainer.querySelectorAll('.ease-tab-label');
    var checkedIndex = -1;

    // Find the index of the checked input
    var inputs = container.querySelectorAll('.ease-tab-input');
    Array.prototype.forEach.call(inputs, function (input, index) {
      if (input === checkedInput) {
        checkedIndex = index;
      }
    });

    if (checkedIndex < 0 || checkedIndex >= labels.length) return;

    var activeLabel = labels[checkedIndex];
    var labelWidth = activeLabel.offsetWidth;
    var labelLeft = activeLabel.offsetLeft;

    // Update underline width and position
    underline.style.width = labelWidth + 'px';
    underline.style.left = labelLeft + 'px';
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTabs);
  } else {
    initializeTabs();
  }

  // Re-initialize on dynamic content
  if ('MutationObserver' in window) {
    var observer = new MutationObserver(function () {
      // Debounce multiple mutations
      clearTimeout(observer.timeout);
      observer.timeout = setTimeout(function () {
        initializeTabs();
      }, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
