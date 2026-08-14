# CSS Scale-Hover Feature Grid for Fintech Dashboard Layouts

> Issue: [#59420](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59420)

A feature tile grid where hovering a tile scales it forward while its siblings dim back, pulling focus to the active card. Pure CSS, no `:has()` required.

## What it does

Six feature tiles (one spanning two columns) in an auto-fitting grid. Hover or keyboard focus scales the tile, brightens its surface, fades in a gradient wash, tilts the icon, and nudges the link arrow — while every other tile drops to 55% opacity.

## How it is used

```html
<section class="fg-grid-ad">
    <article class="fg-tile-ad fg-tile-ad--wide">
        <span class="fg-tile-ad__icon" aria-hidden="true">◈</span>
        <h2 class="fg-tile-ad__title">Real-time reconciliation</h2>
        <p class="fg-tile-ad__copy">…</p>
        <div class="fg-tile-ad__stat">
            <span class="fg-tile-ad__stat-num">1.2s</span>
            <span class="fg-tile-ad__stat-label">median match latency</span>
        </div>
        <a class="fg-tile-ad__link" href="#">Explore reconciliation</a>
    </article>
</section>
```

## Key CSS custom properties

```css
--fg-scale-ad:      1.04;  /* hover depth */
--fg-dim-ad:        0.55;  /* sibling opacity */
--fg-duration-ad:  300ms;
--fg-accent-ad:  #818cf8;
```

## Why it fits EaseMotion

The dim-out is the interesting part. Rather than `.fg-grid-ad:has(.fg-tile-ad:hover) .fg-tile-ad:not(:hover)`, it dims *every* tile on `.fg-grid-ad:hover` and then restores the hovered one at higher specificity. Same visual result, but no dependency on `:has()`, so it degrades gracefully in older engines instead of failing silently.

Only `opacity` and `transform` animate, so scale and dim stay on the compositor. `z-index: 2` on the active tile keeps the scaled card above its neighbours rather than clipping under them.

Two device-specific guards matter here. `@media (hover: none)` disables both the dim-out and the scale on touch devices — without it, the first tap latches `:hover` and leaves the grid permanently dimmed with no way to clear it. And below 640px the scale drops to 1.015, because a 4% grow on a full-bleed tile clips against the viewport edge and reads as a rendering glitch. `prefers-reduced-motion` removes every transform while keeping the colour and shadow feedback.
