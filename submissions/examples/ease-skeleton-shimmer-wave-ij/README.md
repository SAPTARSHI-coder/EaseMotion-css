# Skeleton Shimmer Wave

## What does this do?

Creates skeleton loading placeholders with a sweeping shimmer wave animation. Each skeleton element renders as a muted placeholder that fills with a moving gradient light sweep, simulating content loading.

## How is it used?

Apply the `skeleton-ij` class to any element you want to act as a skeleton placeholder. Use the modifier classes for predefined shapes:

```html
<div class="skeleton-ij skeleton-avatar-ij"></div>
<div class="skeleton-ij skeleton-title-ij"></div>
<div class="skeleton-ij skeleton-text-ij"></div>
```

Wrap related skeleton elements in a `skeleton-card-ij` container for a card layout with avatar alignment:

```html
<div class="skeleton-card-ij">
  <div class="skeleton-ij skeleton-avatar-ij"></div>
  <div style="flex: 1;">
    <div class="skeleton-ij skeleton-title-ij"></div>
    <div class="skeleton-ij skeleton-text-ij"></div>
    <div class="skeleton-ij skeleton-text-ij"></div>
  </div>
</div>
```

Toggle the `loaded-ij` class to reveal the actual content underneath:

```js
element.classList.add("loaded-ij");  // hides shimmer
element.classList.remove("loaded-ij"); // shows shimmer
```

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--skeleton-duration` | `1.6s` | Animation speed of the shimmer sweep |
| `--skeleton-base-color` | `#e2e8f0` | Background color of the skeleton |
| `--skeleton-shimmer-color` | `rgba(255,255,255,0.6)` | Color of the sweeping highlight |
| `--skeleton-border-radius` | `8px` | Border radius on skeleton elements |

## Why is this useful?

Provides a lightweight, pure-CSS loading indicator that communicates to users that content is being fetched. No JavaScript animation libraries or external dependencies required. Respects `prefers-reduced-motion` by disabling the shimmer animation.
