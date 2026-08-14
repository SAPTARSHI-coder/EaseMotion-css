# Skeleton Content Card

A profile card that shows shimmering placeholder blocks while content loads, then fades them out when marked `.loaded`.

## How is it used?

Give every loading block the `.skel` class; toggling `.loaded` on the card fades the blocks away:

```html
<div class="card" id="card">
  <div class="skel banner"></div>
  <div class="skel line short"></div>
  <div class="skel line"></div>
</div>
```

```css
.skel::after {
  animation: shimmer 1.5s ease-in-out infinite;
}
.card.loaded .skel {
  animation: fadeOut 0.4s ease forwards;
}
```

The `.skel::after` pseudo-element carries a skewed white gradient that sweeps across via `translateX`.

## Why is it useful?

Skeleton screens are the standard way to signal loading without a spinner. This component isolates the shimmer in a single reusable `.skel` class backed by one `::after` pseudo-element, so any block in a card becomes a loading placeholder — plus a smooth fade-out transition into real content. A compact, realistic EaseMotion example.
