# CSS Zoom-In Card Grid for Fintech Dashboard Layouts

> Issue: [#59284](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59284)

A responsive KPI card grid whose cards zoom into place in a staggered wave on load, with a depth-scale hover state. Pure CSS.

## What it does

Eight portfolio-signal cards in an auto-fitting grid. Each scales up from `0.86` while fading in, offset by `--zg-stagger-step` per card so the grid resolves as a wave rather than all at once. Hover and `:focus-within` lift the card, wipe in an accent hairline, and brighten the sparkline.

## How it is used

```html
<section class="zg-grid-ad">
    <article class="zg-card-ad">
        <div class="zg-card-ad__top">
            <p class="zg-card-ad__label">Liquidity Ratio</p>
            <span class="zg-tag-ad zg-tag-ad--live">Live</span>
        </div>
        <p class="zg-card-ad__value">1.84×</p>
        <p class="zg-card-ad__delta zg-card-ad__delta--up">▲ 0.12</p>
        <div class="zg-spark-ad"><span class="zg-spark-ad__bar" style="height: 38%"></span>…</div>
        <a class="zg-card-ad__link" href="#">Open breakdown →</a>
    </article>
</section>
```

Stagger is wired through `:nth-child(1)`–`(8)`. Add more selectors to extend past eight cards.

## Key CSS custom properties

```css
--zg-zoom-duration: 520ms;  /* entrance length */
--zg-zoom-from:      0.86;  /* starting scale */
--zg-stagger-step:   70ms;  /* per-card delay */
--zg-hover-scale:   1.022;  /* depth on hover */
--zg-accent:      #38bdf8;
```

## Why it fits EaseMotion

Only `opacity` and `transform` animate, so the whole wave stays on the compositor and never triggers layout — important when eight cards enter simultaneously.

`animation-fill-mode: both` is what makes the stagger actually work. Without it, a card with a 560ms delay would render at full opacity and full size for those 560ms, then snap to `opacity: 0` when the animation started. `both` holds the `from` frame during the delay, so the wave reads correctly.

That same detail drives the reduced-motion handling: the animation is *shortened to 1ms*, never removed. Removing it would leave `both` fill holding every card at `opacity: 0`, making the grid invisible to exactly the users who opted out of motion. `forced-colors: active` drops the decorative hairline and gives sparkline bars a system colour.
