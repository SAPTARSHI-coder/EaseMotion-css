# Skew-Active Popover

### 1. What does this do?
A pure CSS popover styled for SaaS showcase layouts. On open, it transitions in with a subtle skew-to-straight and scale motion instead of a flat fade, using the native HTML Popover API — no JavaScript required.

### 2. How is it used?
\`\`\`html
<div class="skew-popover-wrap">
  <button class="skew-trigger" popovertarget="skew-pop-1">
    View Plan Details
  </button>
  <div class="skew-popover" id="skew-pop-1" popover>
    <h3 class="skew-popover-title">Pro Plan</h3>
    <p class="skew-popover-body">Details go here.</p>
  </div>
</div>
\`\`\`
- Link a trigger `<button>` to a popover via matching `popovertarget` / `id`, and add the `popover` attribute to the popover element. The browser handles open/close, click-outside dismissal, and Escape-to-close natively.
- Customize the motion with CSS custom properties on `.skew-popover`:
  - `--skew-timing` — transition duration (default `0.35s`)
  - `--skew-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--skew-scale` — entry scale factor (default `1`)
  - `--skew-angle` — starting skew angle (default `-6deg`)

### 3. Why is it useful?
Popovers are a staple of SaaS marketing and dashboard UI (plan details, feature callouts, tooltips-with-content). The native Popover API gives keyboard accessibility (focus handling, Escape to dismiss) and top-layer stacking for free, while the skew-active transition adds a distinctive, purposeful motion moment instead of a generic fade — fitting EaseMotion's animation-first philosophy with zero JS overhead.
