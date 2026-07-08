# Author Card

Bio/profile card with avatar (image or initials fallback), name, role, bio text, and social icon links. Available in vertical, horizontal, and mini layouts.

## Usage

```html
<div class="ease-author-card-az">
  <div class="ease-author-avatar-fallback-az">SK</div>
  <div class="ease-author-info-az">
    <h3 class="ease-author-name-az">Sarah Kim</h3>
    <p class="ease-author-role-az">Senior Designer</p>
    <p class="ease-author-bio-az">Bio text here.</p>
  </div>
  <div class="ease-author-social-az">
    <a class="ease-author-social-link-az" href="#">...</a>
  </div>
</div>
```

## Variants

- **Default**: Vertical centered layout
- **`--horizontal`**: Row layout with left avatar, right text
- **`--mini`**: Compact row (avatar + name + role only)
- **Image avatar**: Use `<img class="ease-author-avatar-az">`
- **Initials fallback**: Use `.ease-author-avatar-fallback-az` with text initials

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-*` | spacing |
| `--ease-radius-lg` | 12px |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-neutral-*` | grays |
| `--ease-font-sans` | system-ui |
