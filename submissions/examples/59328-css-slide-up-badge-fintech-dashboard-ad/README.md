# CSS Slide-Up Badge for Fintech Dashboard Layouts

> Issue: [#59328](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59328)

Status and delta badges that rise into place in a staggered wave, with a semantic colour ramp for gain, loss, warning, info and idle states. Pure CSS.

## What it does

Provides five semantic variants plus an outline modifier and a pulsing live dot. Badges inside a `.badge-row-ad` stagger their reveal, so a row resolves as a wave rather than appearing all at once.

## How it is used

```html
<div class="badge-row-ad">
    <span class="badge-ad badge-ad--gain">
        <span class="badge-ad__glyph" aria-hidden="true">▲</span>
        Gain <span class="badge-ad__num">+6.4%</span>
    </span>
    <span class="badge-ad badge-ad--loss">…</span>
    <span class="badge-ad badge-ad--gain badge-ad--outline">
        <span class="badge-ad__dot" aria-hidden="true"></span>
        Live
    </span>
</div>
```

Variants: `--gain`, `--loss`, `--warn`, `--info`, plus the default idle state. `--outline` swaps the fill for an inset ring and composes with any of them.

## Key CSS custom properties

```css
--rise-duration-ad: 420ms;
--rise-travel-ad:     9px;  /* entrance distance */
--rise-step-ad:      60ms;  /* per-badge delay */
--sem-gain-ad:    #34d399;
--sem-loss-ad:    #f87171;
```

## Why it fits EaseMotion

Stagger is scoped to `.badge-row-ad .badge-ad:nth-child(n)` rather than applied globally. Each row therefore restarts its own wave from index 1, so a badge sitting fourth in the document but first in its row does not inherit a long, wrong delay. This is what lets the same component work in a standalone row and attached to list items.

Direction is carried by a glyph (`▲` / `▼` / `!`) as well as by colour, so a delta badge still reads correctly without colour perception. The glyphs are `aria-hidden` because the adjacent text already states the meaning.

Reduced motion is handled in two different ways on purpose: the entrance is *shortened* to 1ms (removing it would leave `both` fill holding badges at `opacity: 0`), while the live dot's infinite pulse is stopped outright — a perpetual loop is precisely what motion-sensitive users are opting out of.
