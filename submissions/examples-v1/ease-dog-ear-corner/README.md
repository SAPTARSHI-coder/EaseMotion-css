# ease-dog-ear-corner

A folded-corner card effect using the CSS border triangle technique on `::before`. The card looks like a physical piece of paper with one corner dog-eared. Hover grows the fold size via a `border-width` transition. Two variants: top-right and bottom-left fold. No images, no SVG — pure CSS.

## Usage

```html
<!-- Top-right fold -->
<div class="dog-ear-card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

<!-- Bottom-left fold -->
<div class="dog-ear-card-bl">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

## How it works

- `::before` is positioned `absolute` at the fold corner (`top: 0; right: 0` for top-right)
- Zero width/height with opposing `border-width` values creates a CSS triangle
- `border-color` on the outer side matches the page background, making the triangle appear to cut into the card
- `::after` adds a shadow triangle offset by 2px to simulate depth on the fold
- `border-radius` on the card is set to `0` on the folded corner so the flat edge aligns with the triangle apex
- `transition: border-width` animates the fold size on hover

## Customization

| Property                     | Description                                                         |
| ---------------------------- | ------------------------------------------------------------------- |
| `border-width` on `::before` | Fold size at rest (default: `36px`)                                 |
| Hover `border-width`         | Fold size on hover (default: `56px`)                                |
| `border-color` outer side    | Must match page/container background                                |
| Card background              | `background` on `.dog-ear-card`                                     |
| Corner position              | Adjust `top/bottom/left/right` and `border-width` sides accordingly |

## Accessibility

Respects `prefers-reduced-motion`. The fold size transition is disabled when reduced motion is preferred.
