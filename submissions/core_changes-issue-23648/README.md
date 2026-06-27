# Optimized Scroll Reveal Observer — Issue #23648

## What does this do?

This submission proposes an optimization to the scroll-reveal engine (`core/reveal.js`) that automatically stops tracking once-only reveal elements (`data-ease-reveal-once`) after they trigger and completely disconnects the `IntersectionObserver` once no elements remain to be tracked, freeing browser memory and CPU resources.

## How is it used?

In HTML, declare reveal elements using `.ease-reveal` classes. Add `data-ease-reveal-once` to elements that should only animate the first time they enter the viewport:

```html
<!-- Animates once, then unobserves itself -->
<div class="ease-reveal ease-fade-in" data-ease-reveal-once>Animate Once</div>

<!-- Animates every time it enters the viewport -->
<div class="ease-reveal ease-slide-up">Always Re-trigger</div>
```

The modified `core/reveal.js` script handles element counting, selective `unobserve()` calls, and `disconnect()` trigger lifecycles behind the scenes automatically.

## Why is it useful?

It optimizes client-side performance, particularly on long scrolling pages or dashboard layouts with hundreds of animated elements, by eliminating persistent, redundant IntersectionObserver polling and scroll tracking once the animation states have settled.

---

## Proposed Changes in Core Code

To promote this submission, the following modifications are proposed for `core/reveal.js`:

### File: `core/reveal.js`

Replace the implementation inside the `supportsObserver` branch:

```javascript
if (supportsObserver) {
  var onceElementsCount = 0;
  var alwaysElementsCount = 0;
  var isDisconnected = false;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;
        var isOnce = el.hasAttribute("data-ease-reveal-once");

        if (entry.isIntersecting) {
          el.classList.add(activeClass);

          if (isOnce) {
            observer.unobserve(el);
            onceElementsCount--;

            if (
              onceElementsCount === 0 &&
              alwaysElementsCount === 0 &&
              !isDisconnected
            ) {
              observer.disconnect();
              isDisconnected = true;
            }
          }
        } else {
          // Remove activeClass when out of view if NOT once-only
          if (!isOnce) {
            el.classList.remove(activeClass);
          }
        }
      });
    },
    { threshold: 0.15 }
  );

  var ready = function () {
    var els = document.querySelectorAll("." + revealClass);
    Array.prototype.forEach.call(els, function (el) {
      var isOnce = el.hasAttribute("data-ease-reveal-once");
      if (isOnce) {
        onceElementsCount++;
      } else {
        alwaysElementsCount++;
      }

      if (isCentered(el)) {
        el.classList.add(activeClass);
        if (isOnce) {
          onceElementsCount--;
          return; // Don't observe if already revealed on page load
        }
      }
      observer.observe(el);
    });

    if (
      onceElementsCount === 0 &&
      alwaysElementsCount === 0 &&
      !isDisconnected
    ) {
      observer.disconnect();
      isDisconnected = true;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
}
```

Fixes #23648
