# ease-newsletter

## What does this do?

Provides a **newsletter subscription** component with email input, submit button, and animated success/error/loading states. Supports both stacked (vertical) and inline (horizontal) form layouts.

## How is it used?

```html
<form class="ease-newsletter">
  <h3 class="ease-newsletter-title">Subscribe</h3>
  <p class="ease-newsletter-text">Get weekly updates.</p>
  <div class="ease-newsletter-form">
    <input type="email" class="ease-newsletter-input" placeholder="your@email.com" required />
    <button type="submit" class="ease-newsletter-btn">Subscribe</button>
  </div>
  <div class="ease-newsletter-status ease-newsletter-success ease-visible">
    Thanks for subscribing!
  </div>
</form>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-newsletter` | Newsletter card container |
| `.ease-newsletter-title` | Heading |
| `.ease-newsletter-text` | Description paragraph |
| `.ease-newsletter-form` | Input + button wrapper |
| `.ease-newsletter-input` | Email input field |
| `.ease-newsletter-btn` | Submit button |
| `.ease-newsletter-status` | Status message container (hidden by default) |
| `.ease-newsletter-success` | Success state (green) |
| `.ease-newsletter-error` | Error state (red) |
| `.ease-newsletter-loading` | Loading state (neutral) |
| `.ease-newsletter-spinner` | CSS spinner for loading state |
| `.ease-newsletter-btn-loading` | Button loading state (disabled) |

### Layout Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Stacked (default) | `.ease-newsletter` | Input above button vertically |
| Inline | `.ease-newsletter.ease-newsletter-inline` | Input + button side by side |
| Compact | `.ease-newsletter.ease-newsletter-compact` | Smaller padding and font sizes |

### States

| Class | Display | Visual |
|-------|---------|--------|
| `.ease-newsletter-success` | Green background | ✅ |
| `.ease-newsletter-error` | Red background | ❌ |
| `.ease-newsletter-loading` | Neutral background | ⏳ with spinner |

States use `ease-visible` for fade-in animation (opacity/visibility transition).

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-color-surface` | `#fff` / `#141e33` | Card background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Title, input text |
| `--ease-color-neutral-200` | `#e2e8f0` | Card border |
| `--ease-color-neutral-300` | `#cbd5e1` | Input border |
| `--ease-color-neutral-400` | `#94a3b8` | Placeholder text |
| `--ease-color-neutral-500` | `#64748b` | Description, loading text |
| `--ease-color-neutral-600` | `#475569` | Dark input border |
| `--ease-color-neutral-700` | `#334155` | Dark card border |
| `--ease-color-neutral-800` | `#1e293b` | Dark input bg |
| `--ease-color-primary` | `#6c63ff` | Button, focus ring |
| `--ease-color-primary-dark` | `#5a52e0` | Button hover |
| `--ease-color-success` | `#16a34a` | Success text |
| `--ease-color-danger` | `#dc2626` | Error text |
| `--ease-color-input-bg` | `#f8fafc` | Input background |
| `--ease-radius-md` | `0.75rem` | Input, button, status border radius |
| `--ease-radius-lg` | `1rem` | Card border radius |
| `--ease-space-2` | `0.5rem` | Title margin, status padding |
| `--ease-space-3` | `0.75rem` | Form gap, input/button padding |
| `--ease-space-4` | `1rem` | Status padding, compact text margin |
| `--ease-space-6` | `1.5rem` | Card padding (compact), text margin |
| `--ease-space-10` | `2.5rem` | Card padding (default) |
| `--ease-text-sm` | `0.875rem` | Description, status, compact |
| `--ease-text-xs` | `0.75rem` | Compact description |
| `--ease-shadow-md` | `0 4px 12px...` | Card shadow |
| `--ease-speed-fast` | `150ms` | Input focus, button hover transition |
| `--ease-speed-normal` | `200ms` | Status fade transition |

Fixes #25564
