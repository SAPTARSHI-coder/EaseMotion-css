# Scroll Progress Bar Browser Fallback

## What does this do?

This contribution implements a progressive-enhancement compatibility fix for the CSS-driven scroll progress bar. It isolates native animations via CSS feature queries and loads a lightweight, passive JavaScript fallback listener for browsers that lack scroll-driven animation support (Safari < 18, Firefox, and older Chromium engines).

## How is it used?

Include the CSS stylesheet, the HTML bar container, and the lightweight script helper:

```html
<link rel="stylesheet" href="style.css" />

<!-- Progress Indicator Bar -->
<div class="scroll-progress-hn"></div>

<script>
  // Enable JS fallback for unsupported browsers
  if (!CSS.supports("animation-timeline: scroll()")) {
    window.addEventListener(
      "scroll",
      () => {
        const winScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = height > 0 ? winScroll / height : 0;
        document.querySelectorAll(".scroll-progress-hn").forEach((el) => {
          el.style.transform = `scaleX(${scrolled})`;
        });
      },
      { passive: true }
    );
  }
</script>
```

## Why is it useful?

It prevents the progress indicator bar from remaining completely invisible on Safari (prior to macOS 15/iOS 18) and Firefox. The progress bar now operates smoothly and renders correctly on all client platforms and devices, preserving design continuity.
