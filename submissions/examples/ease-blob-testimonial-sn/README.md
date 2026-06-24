# SVG Liquid Morphing Testimonial Card (`ease-blob-testimonial-sn`)

## What does this do?

An organic, fluid card layout component with a morphing liquid background blob that interactively scales, moves, and glows when hovering over the card.

## How is it used?

Apply the `.ease-blob-testimonial` class to your container card, and add a background blob div `.ease-blob-bg`:

```html
<div class="ease-blob-testimonial">
  <div class="ease-blob-bg"></div>
  <div class="ease-testimonial-content">
    <p class="ease-testimonial-quote">"Your quote here..."</p>
    <div class="ease-testimonial-author">
      <div class="ease-author-avatar">AV</div>
      <div class="ease-author-details">
        <h4>Author Name</h4>
        <span>Author Subtitle</span>
      </div>
    </div>
  </div>
</div>
```

### CSS Customization Variables

You can customize the blob styling directly using inline styles or CSS rules:

| CSS Variable          | Description                        | Default                             |
| --------------------- | ---------------------------------- | ----------------------------------- |
| `--ease-blob-color-1` | First gradient color               | `rgba(99, 102, 241, 0.18)` (Indigo) |
| `--ease-blob-color-2` | Second gradient color              | `rgba(236, 72, 153, 0.18)` (Pink)   |
| `--ease-blob-size`    | Size of the blob container         | `220px`                             |
| `--ease-blob-blur`    | Blur filter radius                 | `30px`                              |
| `--ease-blob-hover-x` | Relative X slide distance on hover | `-35%`                              |
| `--ease-blob-hover-y` | Relative Y slide distance on hover | `35%`                               |

## Why is it useful?

It provides a modern organic look for customer testimonials, product showcases, or team profiles. The morphing logic is computed dynamically on the browser's GPU using pure CSS keyframes on `border-radius`, requiring no heavy SVG rendering engines or JavaScript triggers.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

---

## Submission Details

- **Author:** Shafin Nigamana (GSSoC 2026)
- **Issue:** #6989
