# Skew-Active Hero Section — Fintech Dashboard Layouts

Submission for [#59385](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59385)
("Enhancement: Add CSS Skew-Active Hero Section for Fintech Dashboard Layouts").

## What it is

A pure CSS/HTML hero section styled for a fintech dashboard landing page.
The content panel and floating stat cards rest at a skewed angle and
straighten out on hover/focus (the "skew-active" behavior), with an
optional scroll-entrance skew animation as a progressive enhancement.

## Files

- `demo.html` — self-contained showcase page, opens directly in a browser
- `style.css` — pure CSS, no external dependencies
- `README.md` — this file

## How a developer uses it

```html
<section class="ease-skew-hero">
  <div class="ease-skew-hero__content">
    <h1 class="ease-skew-hero__title">Your headline</h1>
    <p class="ease-skew-hero__subtitle">Supporting copy.</p>
    <div class="ease-skew-hero__actions">
      <a href="#" class="ease-skew-hero__btn ease-skew-hero__btn--primary">Primary action</a>
    </div>
  </div>
</section>
```

Customize via CSS custom properties on `:root` or scoped to `.ease-skew-hero`:

```css
.ease-skew-hero {
  --ease-hero-accent: #2f6fed;
  --ease-hero-skew-angle: -6deg;
  --ease-hero-skew-angle-hover: -3deg;
}
```

## Behavior

- **Resting state:** content panel and dashboard cards sit skewed
  (`--ease-hero-skew-angle`), inner content counter-skewed so text stays
  readable.
- **Active (hover/focus-within):** panel straightens toward
  `--ease-hero-skew-angle-hover` with a lift and glow shadow.
- **Scroll entrance:** where supported, `animation-timeline: view()`
  animates the panel and cards in with an exaggerated skew that settles
  into the resting state as the section enters the viewport. This is
  wrapped in `@supports (animation-timeline: view())`, so browsers
  without support simply render the resting skewed state — no broken
  layout, no JS fallback needed.

## Why it fits EaseMotion CSS

- Pure CSS/HTML, no JavaScript or build step.
- Human-readable class names (`ease-skew-hero__content`,
  `ease-skew-hero__card`, etc.) matching the project's naming style.
- Uses CSS custom properties for easy theming, consistent with other
  EaseMotion components.
- Respects `prefers-reduced-motion` by disabling all transforms/animations
  and rendering a static, upright layout.
- Fully responsive: dashboard cards hide below 900px to avoid crowding
  on tablet/mobile, hero padding scales down on small screens.

## Testing

1. Open `demo.html` directly in a browser (no server required).
2. Hover or tab-focus into the hero content panel — it un-skews and lifts.
3. In a browser supporting scroll-driven animations (e.g. current Chrome),
   reload and scroll the hero section into view to see the entrance skew.
4. Enable "reduce motion" at the OS level and reload — all
   skew/transition effects should be disabled, layout stays upright.
5. Resize the viewport down to mobile width — dashboard cards hide,
   content panel remains readable and properly padded.

## Notes for Maintainer

- Scroll-entrance skew uses `animation-timeline: view()`
  (CSS scroll-driven animations), which has partial browser support as of
  this submission (Chromium-based browsers). It's feature-detected via
  `@supports` and degrades gracefully to the static skewed resting state
  in browsers without support — no JavaScript fallback was added, to keep
  this pure CSS/HTML per the issue's requirements. Happy to adjust the
  entrance behavior if a different approach is preferred.