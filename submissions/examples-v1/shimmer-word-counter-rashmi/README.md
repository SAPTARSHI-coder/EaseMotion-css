# Shimmer Word Counter

A word-count progress indicator for blog editors, with a shimmering fill bar and shimmering number. Inspired by the little "words remaining" widget you see in blog CMS sidebars. Pure CSS, no JavaScript.

## Try it

Open `demo.html` in a browser. It shows three states: a draft on track, one near its word limit, and one that's gone over.

## How to use it

```html
<div class="ease-shimmer-counter ease-shimmer-counter--ok" style="--ease-counter-percent: 34;">
  <div class="ease-shimmer-counter__head">
    <span class="ease-shimmer-counter__icon" aria-hidden="true">✎</span>
    <span class="ease-shimmer-counter__stat">
      <span class="ease-shimmer-counter__value">412</span> / 1,200 words
    </span>
  </div>
  <div
    class="ease-shimmer-counter__track"
    role="progressbar"
    aria-valuenow="412"
    aria-valuemin="0"
    aria-valuemax="1200"
    aria-label="Word count: 412 of 1,200 word target"
  >
    <div class="ease-shimmer-counter__fill"></div>
  </div>
  <span class="ease-shimmer-counter__caption">788 words to go</span>
</div>
```

`--ease-counter-percent` controls how full the bar is (0–100). Set it inline per instance, based on however you're calculating word count on your end.

## Color variants

- `ease-shimmer-counter--ok` (blue, default — plenty of room left)
- `ease-shimmer-counter--near` (amber — getting close to the target)
- `ease-shimmer-counter--over` (red — past the target, fill maxes out at 100%)

## About the "no JavaScript" part

This component is honestly a CSS/visual layer, not a live word-counting engine — counting words as someone types has to come from somewhere, and that somewhere is always going to be a few lines of JS reading a textarea's value. What's pure CSS here is everything else: the shimmering fill bar, the shimmering number text, the color states, the responsive layout, and the accessibility markup. You plug in the actual word count (however you calculate it) by updating `--ease-counter-percent` and the visible numbers — that's the only "dynamic" part, and it's a one-line style update, not a rewrite of the component.

If you're wiring this to a live textarea, something like this on the JS side is enough:

```js
counter.style.setProperty('--ease-counter-percent', percentValue);
```

## How the shimmer works

The fill bar has a diagonal gradient sweeping across it in a loop (`ease-shimmer-sweep`), same idea as a skeleton loading shimmer. The number itself uses a gradient clipped to the text (`background-clip: text`) that slides back and forth (`ease-shimmer-text`), so the digits catch a bit of light as they animate.

## Accessibility

- The track has `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` so screen readers can announce actual progress, not just visuals
- `aria-label` on the track spells out the count and target in plain language
- The pencil icon is `aria-hidden` since it's decorative
- `prefers-reduced-motion` turns off both shimmer animations and falls back to solid, readable text
- Color isn't the only signal — the caption text ("788 words to go" / "250 words over target") carries the same meaning as the color change

## Responsive

Under 480px the counter drops its fixed minimum width and stretches to fill its container.

## Files

```
shimmer-word-counter-himanshu/
├── demo.html
├── style.css
└── README.md
```