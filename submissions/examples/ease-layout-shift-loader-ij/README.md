# Layout Shift Loader

Simulated page loading animation with skeleton shimmer placeholders that resolve to content with staggered fade-in.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lsl-duration` | `0.5s` | Duration of the content fade-in animation |
| `--lsl-stagger` | `0.12s` | Stagger delay between each card's reveal |
| `--lsl-skeleton-bg` | `#2a2a35` | Skeleton placeholder background |
| `--lsl-shimmer-color` | `rgba(255,255,255,0.06)` | Shimmer highlight overlay color |
| `--lsl-content-color` | `#e0e0e0` | Loaded content background color |
| `--lsl-radius` | `8px` | Card border radius |

## Usage

```html
<div class="card-list is-loading" id="cardList">
  <article class="ls-card">
    <div class="ls-card__avatar skeleton"></div>
    <div class="ls-card__body">
      <div class="ls-card__line skeleton skeleton--text w-60"></div>
    </div>
  </article>
</div>
```

Toggle state with `is-loading` / `is-loaded` classes on the container.
