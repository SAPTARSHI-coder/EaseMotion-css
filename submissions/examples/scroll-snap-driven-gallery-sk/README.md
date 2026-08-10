# Scroll-Snap + Scroll-Driven Gallery

Horizontal `scroll-snap-type: x mandatory` gallery with cards animated via `animation-timeline: view(x)`.

## Classes

| Class | Role |
|---|---|
| `ease-snap-gallery` | Scroll container with `scroll-snap-type: x mandatory` |
| `ease-snap-card` | Snapping card, animated via `view(x)` timeline |
| `ease-snap-img` | Counter-direction parallax on the same `view(x)` timeline |

## Usage

```html
<div class="ease-snap-gallery">
  <article class="ease-snap-card">
    <img class="ease-snap-img" src="photo.jpg" alt="" />
    <div class="ease-snap-body">...</div>
  </article>
</div>
```

## Key technique

`animation-timeline: view(x)` scopes the scroll timeline to the **horizontal** axis of the nearest scroll ancestor. `animation-range: entry 10% cover 50%` means the animation runs from when the card enters the viewport to when it reaches center. All effects are inside `@supports (animation-timeline: scroll())` so unsupported browsers get static cards.

Closes #9602
