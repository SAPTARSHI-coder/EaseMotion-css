# Article Card Hover

Article/blog cards with a hover reveal effect. Images zoom, overlays fade in, and info slides up.

## Features

- Image scale on hover
- Overlay fade with info slide-up
- Category tag badge
- Arrow animation on read-more link
- Responsive grid layout

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ach-duration` | `0.35s` | Animation duration |
| `--ach-card-bg` | `#1e293b` | Card background |
| `--ach-overlay-bg` | `rgba(15,23,42,0.85)` | Hover overlay color |
| `--ach-text-color` | `#f1f5f9` | Text color |
| `--ach-tag-color` | `#f59e0b` | Tag badge color |
| `--ach-radius` | `12px` | Border radius |

## Usage

```html
<article class="ach-card">
  <div class="ach-image">
    <img src="..." alt="">
    <div class="ach-overlay">
      <span class="ach-tag">Category</span>
      <div class="ach-info">
        <h2>Title</h2>
        <p>Excerpt...</p>
        <a href="#" class="ach-link">Read More <span>&rarr;</span></a>
      </div>
    </div>
  </div>
</article>
```
