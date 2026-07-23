# Zoom-In Portfolio Popover

## What does this do?
A pure CSS zoom-in animated popover styled for creative portfolio project cards, revealing project details on click.

## How is it used?
```html
<div class="portfolio-card">
  <img class="portfolio-thumb" src="thumbnail.jpg" alt="Project thumbnail">
  <button class="portfolio-popover-trigger" id="portfolioBtn" aria-expanded="false" aria-describedby="portfolioBox">
    View Details
  </button>

  <div class="portfolio-popover-box" id="portfolioBox" role="tooltip">
    <h3>Project Name</h3>
    <p>Project description.</p>
    <span class="portfolio-tag">Category · Year</span>
  </div>
</div>
```
Toggle `is-open` on `.portfolio-popover-box` to trigger the centered zoom-in reveal. Customize via `--portfolio-scale-from`, `--portfolio-duration`, `--portfolio-easing`.

## Why is it useful?
It gives creative portfolio layouts a polished, centered case-study reveal pattern — CSS-only animation, minimal JS for state, keyboard accessible, and respects `prefers-reduced-motion`, matching EaseMotion's lightweight animation-first philosophy.