# ease-testimonial

## What does this do?

Provides a **testimonial card** component for displaying customer quotes with quotation styling, avatar/initials, name, title, and star ratings. Supports card and inline variants with accent bar option.

## How is it used?

```html
<div class="ease-testimonial ease-testimonial-card ease-reveal ease-slide-up">
  <div class="ease-testimonial-quote">
    Great product! Changed our workflow completely.
  </div>
  <div class="ease-testimonial-author">
    <div class="ease-testimonial-avatar-initials">JD</div>
    <div class="ease-testimonial-info">
      <div class="ease-testimonial-name">John Doe</div>
      <div class="ease-testimonial-title">CEO, TechCorp</div>
      <div class="ease-testimonial-rating">
        <span class="ease-testimonial-star ease-star-filled">★</span>
        <span class="ease-testimonial-star ease-star-filled">★</span>
        <span class="ease-testimonial-star ease-star-filled">★</span>
        <span class="ease-testimonial-star ease-star-filled">★</span>
        <span class="ease-testimonial-star">★</span>
      </div>
    </div>
  </div>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-testimonial` | Testimonial container |
| `.ease-testimonial-card` | Card variant with border, shadow, hover lift |
| `.ease-testimonial-inline` | Inline variant (author beside quote) |
| `.ease-testimonial-accent` | Accent bar instead of quotation mark |
| `.ease-testimonial-quote` | Quote text (large `\201C` via `::before`) |
| `.ease-testimonial-author` | Author row (avatar + info) |
| `.ease-testimonial-avatar` | Avatar `<img>` |
| `.ease-testimonial-avatar-initials` | Initials fallback when no image |
| `.ease-testimonial-info` | Author name/title/rating wrapper |
| `.ease-testimonial-name` | Author name |
| `.ease-testimonial-title` | Author title/role |
| `.ease-testimonial-rating` | Star rating row |
| `.ease-testimonial-star` | Individual star |
| `.ease-star-filled` | Filled star (amber) |

### Variants

| Variant | Classes | Description |
|---------|---------|-------------|
| Card | `.ease-testimonial-card` | Bordered card with hover lift, hanging quote mark |
| Accent bar | `.ease-testimonial-card.ease-testimonial-accent` | Purple left bar instead of quote mark |
| Inline | `.ease-testimonial-inline` | Side-by-side layout (author + quote) |

### Animation

Use `ease-reveal ease-slide-up` for scroll-triggered stagger entrance animation.

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-color-surface` | `#fff` / `#141e33` | Card background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Quote, name |
| `--ease-color-neutral-200` | `#e2e8f0` | Card border |
| `--ease-color-neutral-100` | `#f1f5f9` | Author divider |
| `--ease-color-neutral-500` | `#64748b` | Title text |
| `--ease-color-neutral-700` | `#334155` | Dark card border, avatar bg |
| `--ease-color-neutral-800` | `#1e293b` | Dark author divider |
| `--ease-color-primary` | `#6c63ff` | Accent bar, initials bg |
| `--ease-color-primary-light` | `#a09af8` | Quote mark color |
| `--ease-shadow-sm` | `0 1px 3px...` | Card shadow |
| `--ease-shadow-lg` | `0 10px 30px...` | Hover shadow |
| `--ease-radius-lg` | `1rem` | Card border radius |
| `--ease-space-8` | `2rem` | Card padding |
| `--ease-space-6` | `1.5rem` | Inline gap, quote padding, author margin |
| `--ease-space-4` | `1rem` | Author padding top |
| `--ease-space-3` | `0.75rem` | Author gap |
| `--ease-space-2` | `0.5rem` | Quote padding top |
| `--ease-space-1` | `0.25rem` | Rating margin top |
| `--ease-text-base` | `1rem` | Quote font size |
| `--ease-text-lg` | `1.125rem` | Inline quote font size |
| `--ease-text-sm` | `0.875rem` | Name, initials font size |
| `--ease-text-xs` | `0.75rem` | Title font size |
| `--ease-speed-fast` | `150ms` | Card hover transition |

Fixes #25562
