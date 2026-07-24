# Accessible Scale-Hover Popover

### 1. What does this do?
An info-icon-triggered popover with a smooth scale-up transition, built for accessible web layouts. It uses `aria-describedby`, `aria-expanded`, `aria-label`, and `role="tooltip"` so the content is properly announced by screen readers, and respects `prefers-reduced-motion`.

### 2. How is it used?
\`\`\`html
<span class="a11y-info-wrap">
  <button
    type="button"
    class="a11y-info-btn"
    aria-describedby="a11y-pop-1"
    aria-expanded="false"
    aria-label="Why we need this"
  >i</button>
  <span class="a11y-scalepop" role="tooltip" id="a11y-pop-1">
    Explanation text goes here.
  </span>
</span>
\`\`\`
- The trigger is a real `<button>` (focusable and operable by keyboard by default) linked to the popover via `aria-describedby`.
- A small inline script toggles `aria-expanded` on hover/focus/blur so assistive tech knows the popover's visibility state — the actual show/hide transition itself is pure CSS (`:hover` / `:focus-visible` + sibling selector).
- Customize the motion with CSS custom properties on `.a11y-scalepop`:
  - `--a11ypop-timing` — transition duration (default `0.3s`)
  - `--a11ypop-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--a11ypop-scale` — final scale factor on reveal (default `1`)
- Motion is disabled automatically under `prefers-reduced-motion: reduce`.

### 3. Why is it useful?
Contextual help icons (form field explanations, password requirements, etc.) are common in accessible web forms, but are often built with JS-heavy tooltip libraries. This component shows the same pattern achievable with a native button, proper ARIA wiring, and CSS-only motion — fitting EaseMotion's animation-first, zero-JS-overhead philosophy while staying genuinely accessible.
