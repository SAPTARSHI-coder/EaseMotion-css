# Checklist

Vertical list of items with checkmark icons, title, and description. Available in default, compact, large, and multi-column layouts.

## Usage

```html
<ul class="ease-checklist-az">
  <li class="ease-checklist-item-az">
    <span class="ease-checklist-icon-az">&#x2713;</span>
    <div class="ease-checklist-content-az">
      <strong class="ease-checklist-title-az">Unlimited projects</strong>
      <p class="ease-checklist-desc-az">Create as many projects as you need.</p>
    </div>
  </li>
</ul>
```

## Variants

- **Icon styles**: Default green, `--primary` (indigo), `--muted` (gray)
- **`--compact`**: Reduced spacing, hides description
- **`--lg`**: Larger icons and title
- **`--columns`**: CSS grid multi-column layout

## CSS Variables

| Variable                 | Default   |
| ------------------------ | --------- |
| `--ease-space-*`         | spacing   |
| `--ease-color-success`   | #10b981   |
| `--ease-color-primary`   | #6366f1   |
| `--ease-color-neutral-*` | grays     |
| `--ease-font-sans`       | system-ui |
