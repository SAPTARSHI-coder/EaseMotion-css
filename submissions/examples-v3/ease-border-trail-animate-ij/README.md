# Border Trail Animate

A CSS-only border animation effect where a gradient continuously trails around the edges of a card element.

## Preview

A rotating conic-gradient is rendered behind the card content via a `::before` pseudo-element. The gradient peeks through the border area, creating the illusion of a glowing, traveling border.

## Usage

Include the `style.css` in your HTML. The card markup requires a `.card` wrapper and a `.card-content` inner element:

```html
<div class="card">
  <div class="card-content">
    <h2>Title</h2>
    <p>Content here.</p>
  </div>
</div>
```

## Customisation

Override CSS custom properties at the card level to tweak each instance:

| Variable                | Default                                         | Description            |
| ----------------------- | ----------------------------------------------- | ---------------------- |
| `--trail-duration`      | `3s`                                            | Animation speed        |
| `--trail-gradient`      | `conic-gradient(from 0deg, #ff6b6b, ...)`       | Gradient colours       |
| `--trail-border-width`  | `3px`                                           | Border thickness       |
| `--trail-card-bg`       | `#1a1a2e`                                       | Card background colour |
| `--trail-card-radius`   | `16px`                                          | Card border radius     |

Add modifier classes (`.slow`, `.fast`, `.reverse`) or set custom properties directly on a card to vary the effect.

## Browser Support

All modern browsers that support `conic-gradient`, `@keyframes`, and `::before`/`::after` pseudo-elements.

## License

MIT
