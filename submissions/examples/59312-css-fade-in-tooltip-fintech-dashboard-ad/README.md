# CSS Fade-In Tooltip for Fintech Dashboard Layouts

> Issue: [#59312](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59312)

Four-directional tooltips that fade in after a short intent delay, with full hover and keyboard-focus parity. No JavaScript.

## What it does

Provides `--top`, `--bottom`, `--left` and `--right` placements sharing one bubble component. Each drifts a few pixels toward its trigger as it fades in. Tooltips open on `:hover` **or** `:focus-within`, so tabbing to a trigger shows the same tooltip a mouse user sees.

## How it is used

```html
<span class="tt-ad">
    <button class="tt-trigger-ad" type="button" aria-describedby="tt-top-ad">Top placement</button>
    <span class="tt-ad__bubble tt-ad__bubble--top" id="tt-top-ad" role="tooltip">
        <span class="tt-ad__bubble-title">Net Interest Margin</span>
        Interest earned minus interest paid, over average earning assets.
    </span>
</span>
```

The bubble is a real sibling element, not a `::before` on the trigger — so it can hold rich markup and be referenced by `aria-describedby`.

## Key CSS custom properties

```css
--tt-open-delay: 320ms;  /* intent filter before opening */
--tt-fade-in:    180ms;
--tt-fade-out:   120ms;  /* faster out than in */
--tt-travel:       5px;  /* drift toward the trigger */
--tt-gap:         10px;  /* trigger-to-bubble distance */
--tt-bubble-max: 240px;
```

## Why it fits EaseMotion

The open delay lives in `transition-delay` on the **open** state only, while the closed state has no delay. That asymmetry is the whole trick: tooltips wait 320ms before appearing, filtering out incidental pointer travel across a dense dashboard, but dismiss immediately when the pointer leaves.

`visibility` is transitioned alongside opacity — delayed by the fade-out duration when closing, and by the open delay when opening. This keeps closed bubbles out of the accessibility tree and unhittable without `display: none`, which would break the fade entirely.

Under `prefers-reduced-motion` the fade collapses to 1ms and the drift is removed, but **the open delay is deliberately kept** — it is an intent filter rather than decoration, and dropping it would make tooltips flicker on every incidental pointer movement. Below 620px the left/right placements re-point downward, since a side bubble would otherwise overflow a narrow viewport.
