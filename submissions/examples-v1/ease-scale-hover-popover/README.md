# Scale-Hover Popover

### 1. What does this do?
A pure CSS popover revealed on hover or keyboard focus with a smooth scale-up transition (growing from slightly smaller to full size), styled for creative portfolio layouts where thumbnails need quick context on hover.

### 2. How is it used?
\`\`\`html
<figure class="portfolio-item" tabindex="0">
  <div class="portfolio-thumb" style="background: url(...);"></div>
  <div class="scalepop">
    <h4 class="scalepop-title">Project Title</h4>
    <p class="scalepop-body">Details go here.</p>
  </div>
</figure>
\`\`\`
- Wrap a `.portfolio-thumb` and a sibling `.scalepop` in a `.portfolio-item` (with `tabindex="0"` for keyboard access). The popover reveals on item hover or focus.
- Customize the motion with CSS custom properties on `.scalepop`:
  - `--scalepop-timing` — transition duration (default `0.3s`)
  - `--scalepop-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--scalepop-scale` — final scale factor on reveal (default `1`)

### 3. Why is it useful?
Creative portfolios rely on thumbnail grids where hover reveals project context without navigating away. A scale-up transition feels more tactile and "alive" than a flat fade, fitting EaseMotion's animation-first philosophy — fully CSS-driven, keyboard accessible via `:focus-visible`, and zero JS.
