# Stacked Depth Card

## What does this do?

A product card with layered pseudo-elements that shift at different speeds on hover, creating a 3D parallax depth effect using only CSS transforms.

## How is it used?

Wrap `.stacked-card-ak` around your content. The card accepts an optional image URL via the `--card-img-ak` custom property.

```html
<div class="stacked-card-ak" style="--card-img-ak: url('https://picsum.photos/400/300');">
  <div class="stacked-card-layer-ak"></div>
  <div class="stacked-card-accent-ak"></div>
  <div class="stacked-card-content-ak">
    <span class="stacked-card-tag-ak">Design</span>
    <h3>Card Title</h3>
    <p>Description text here.</p>
  </div>
</div>
```

### Custom Properties

| Variable | Default | Purpose |
|---|---|---|
| `--card-img-ak` | gradient fallback | Background image URL |
| `--card-radius-ak` | `16px` | Border radius |
| `--card-depth-ak` | `8px` | Parallax translate offset |

## Why is it useful?

Brings a premium 3D hover effect to cards without JavaScript. The layered parallax mimics depth perception and adds tactile feedback to product galleries, portfolios, and dashboards.
