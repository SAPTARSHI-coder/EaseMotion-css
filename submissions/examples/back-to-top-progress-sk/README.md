# Floating Back to Top Button & Scroll Progress Indicator

A lightweight, responsive, and accessible UI component suite implementing a fixed Scroll Progress Indicator and a floating Back to Top button.

## What does this do?

This component provides users with real-time feedback on their scroll depth through a progress bar at the top of the viewport, alongside a floating "Back to Top" button that appears smoothly after scrolling past 300px to allow quick, smooth navigation back to the top of the page.

## How is it used?

### 1. HTML Structure

Add the progress bar and button markup to your main layout:

```html
<!-- Scroll Progress Bar -->
<div
  class="scroll-progress-container"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="0"
  id="progressContainer"
>
  <div
    class="scroll-progress-bar"
    id="scrollProgressBar"
    aria-label="Reading progress"
  ></div>
</div>

<!-- Back to Top Button -->
<button
  class="back-to-top"
  id="backToTopBtn"
  aria-label="Back to top"
  title="Back to top"
  tabindex="-1"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</button>
```

### 2. Vanilla JavaScript Logic

Include the passive scroll listener to drive the dynamic updates:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const progressContainer = document.getElementById("progressContainer");
  const backToTopBtn = document.getElementById("backToTopBtn");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const totalScrollable = documentHeight - windowHeight;

    let scrollPercent = 0;
    if (totalScrollable > 0) {
      scrollPercent = (scrollY / totalScrollable) * 100;
    }

    const boundedPercent = Math.min(
      Math.max(Math.round(scrollPercent), 0),
      100
    );

    // Update Progress Bar
    scrollProgressBar.style.width = `${boundedPercent}%`;
    progressContainer.setAttribute("aria-valuenow", boundedPercent.toString());

    // Toggle Back to Top Button
    if (scrollY > 300) {
      backToTopBtn.classList.add("active");
      backToTopBtn.setAttribute("tabindex", "0");
    } else {
      backToTopBtn.classList.remove("active");
      backToTopBtn.setAttribute("tabindex", "-1");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
```

---

## Why is it useful?

1. **Enhanced User Experience (UX):** Gives readers clear visual indication of how far they have scrolled inside long pages or articles, while offering an effortless way to navigate back to the top menu.
2. **Aligned with EaseMotion Philosophy:** Zero external dependencies (no jQuery, React, or heavy libraries required). Standardized CSS variables enable developer-friendly styling that can easily transition between dark and light color palettes.
3. **Inclusive Design (A11y):** Employs descriptive ARIA labels, supports complete keyboard tabbing, and automatically disables animations when the user has set the `prefers-reduced-motion` system accessibility preference.
