# Slide-Up SaaS Showcase Popover

## What does this do?
A pure CSS popover styled for SaaS marketing/pricing pages, revealing plan details with a smooth slide-up transition.

## How is it used?
```html
<div class="saas-popover-wrap">
  <button class="saas-popover-trigger" id="saasBtn" aria-expanded="false" aria-controls="saasBox">
    See Plan Details
  </button>

  <div class="saas-popover-box" id="saasBox" role="dialog" aria-labelledby="saasBoxTitle" aria-hidden="true">
    <span class="saas-popover-badge">Pro Plan</span>
    <h3 id="saasBoxTitle">Title</h3>
    <ul class="saas-popover-list">
      <li>Feature one</li>
      <li>Feature two</li>
    </ul>
    <button class="saas-popover-close" id="saasCloseBtn">Close</button>
  </div>
</div>
```
Toggle `is-open` on `.saas-popover-box` (with `aria-hidden`/`aria-expanded` updates, handled in the demo script) to trigger the slide-up transition. Customize via `--saas-offset`, `--saas-duration`, `--saas-easing`.

## Why is it useful?
It provides a clean, conversion-friendly "plan details" reveal pattern common in SaaS pricing/showcase pages — CSS-only animation, minimal JS for state, keyboard accessible (Escape, click-outside close), and respects `prefers-reduced-motion`, matching EaseMotion's lightweight, animation-first philosophy.