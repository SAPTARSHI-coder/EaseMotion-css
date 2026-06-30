# Newsletter Subscribe

Email signup form with input, button, feedback states, and multiple layout variants.

## Usage

```html
<div class="ease-newsletter-az">
  <div class="ease-newsletter-header-az">
    <h2 class="ease-newsletter-title-az">Stay in the loop</h2>
    <p class="ease-newsletter-desc-az">Get the latest updates.</p>
  </div>
  <div class="ease-newsletter-form-az">
    <input
      class="ease-newsletter-input-az"
      type="email"
      placeholder="Enter your email"
    />
    <button class="ease-newsletter-btn-az">Subscribe</button>
  </div>
  <p class="ease-newsletter-incentive-az">No spam. Unsubscribe anytime.</p>
</div>
```

## Variants

- **`--card`**: Wrapped in a card with border, radius, shadow
- **`--stacked`**: Button below input (full width)
- **`--inline`**: Horizontal layout (title + form on same row)
- **Input state**: `.--error` (red border)
- **Button state**: `.--subscribed` (green, disabled)
- **Feedback**: `.--success` / `.--error` on `.ease-newsletter-feedback-az`

## CSS Variables

| Variable               | Default   |
| ---------------------- | --------- |
| `--ease-space-*`       | spacing   |
| `--ease-radius-md`     | 8px       |
| `--ease-color-primary` | #6366f1   |
| `--ease-color-success` | #10b981   |
| `--ease-color-danger`  | #ef4444   |
| `--ease-font-sans`     | system-ui |
