# Contact Card

Contact information card with email, phone, address items (icon + label + value), header, and social links. Available in default, compact, and centered layouts.

## Usage

```html
<div class="ease-contact-card-az">
  <div class="ease-contact-header-az">
    <h2 class="ease-contact-name-az">Acme Inc.</h2>
    <p class="ease-contact-subtitle-az">Get in touch.</p>
  </div>
  <div class="ease-contact-items-az">
    <div class="ease-contact-item-az">
      <span class="ease-contact-item-icon-az">&#x2709;</span>
      <div class="ease-contact-item-content-az">
        <div class="ease-contact-item-label-az">Email</div>
        <div class="ease-contact-item-value-az"><a href="mailto:hello@acme.com">hello@acme.com</a></div>
      </div>
    </div>
  </div>
  <div class="ease-contact-social-az">
    <a class="ease-contact-social-link-az" href="#">...</a>
  </div>
</div>
```

## Variants

- **Default**: Left-aligned with header
- **`--compact`**: Reduced padding, minimal layout
- **`--centered`**: Centered text with stacked items

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-*` | spacing |
| `--ease-radius-lg` | 12px |
| `--ease-radius-md` | 8px |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-neutral-*` | grays |
| `--ease-font-sans` | system-ui |
