# Skew-Active SaaS Card Popover

### 1. What does this do?
A pure CSS popover anchored to a feature/pricing card, revealed on hover or keyboard focus with a smooth skew-to-straight and scale transition. Built for modern SaaS marketing interfaces (feature grids, pricing cards) where a static tooltip feels too abrupt.

### 2. How is it used?
\`\`\`html
<div class="saas-card-wrap">
  <div class="saas-card" tabindex="0">
    <h3 class="saas-card-title">Analytics Suite</h3>
    <p class="saas-card-hint">Hover or focus for details</p>
  </div>
  <div class="skewpop-saas">
    <h4 class="skewpop-saas-title">Analytics Suite</h4>
    <p class="skewpop-saas-body">Details go here.</p>
  </div>
</div>
\`\`\`
- Wrap a `.saas-card` (with `tabindex="0"` for keyboard access) and a sibling `.skewpop-saas` in a `.saas-card-wrap`. The popover reveals on card hover or keyboard focus via `:focus-visible + .skewpop-saas`.
- Customize the motion with CSS custom properties on `.skewpop-saas`:
  - `--skewpop-timing` — transition duration (default `0.35s`)
  - `--skewpop-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--skewpop-scale` — entry scale factor (default `1`)
  - `--skewpop-angle` — starting skew angle (default `8deg`)

### 3. Why is it useful?
Feature and pricing cards are core to SaaS marketing pages, and hover-revealed detail panels are a common pattern for keeping the main layout scannable. The skew-active transition gives that reveal a distinctive, purposeful motion instead of a flat fade, fitting EaseMotion's animation-first philosophy — fully CSS-driven, keyboard accessible via `:focus-visible`, and zero JS.
