# Feature: ease-card-loading Skeleton State Variant

**Issue:** [#7858](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/7858)

## What This Adds

A composable `.ease-card-loading` modifier that instantly converts any
`.ease-card` into a shimmer skeleton loading state — using the **exact same
HTML markup**. No extra wrapper elements or separate skeleton components needed.

## Usage

```html
<!-- Loading state -->
<div class="ease-card ease-card-loading">
  <div class="ease-card-image"></div>
  <div class="ease-card-body">
    <span class="ease-card-title">Card Title</span>
    <span class="ease-card-subtitle">Subtitle</span>
    <p>Body text line one.</p>
    <p>Body text line two.</p>
  </div>
  <div class="ease-card-footer">
    <button class="btn">Action</button>
  </div>
</div>

<!-- Remove class when data loads -->
<script>
  card.classList.remove('ease-card-loading');
</script>
```

## How It Works

`.ease-card-loading` applies a shimmer gradient animation to all card
content elements, setting `color: transparent` to hide real text and
`pointer-events: none` to prevent interaction while loading.

Staggered `animation-delay` values give a realistic cascading effect.

## Accessibility

Respects `prefers-reduced-motion` — switches to a gentle pulse animation
instead of the moving shimmer for users who prefer reduced motion.

## CSS Variables

```css
:root {
  --ease-skeleton-base:      #2a2a4a;   /* base skeleton color */
  --ease-skeleton-highlight: #3a3a6a;   /* shimmer highlight   */
  --ease-skeleton-speed:     1.8s;      /* animation duration  */
}
```

## Files
- `style.css` — the `.ease-card-loading` implementation
- `demo.html` — live toggle between loading and loaded states