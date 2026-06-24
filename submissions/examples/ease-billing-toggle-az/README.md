# Billing Toggle

Monthly/yearly billing toggle switch with savings badge. Includes custom checkbox input, track, thumb animation, and active label states.

## Usage

```html
<div class="ease-billing-toggle-az">
  <span class="ease-billing-label-az --active">Monthly</span>
  <label class="ease-billing-switch-az">
    <input class="ease-billing-switch-input-az" type="checkbox" />
    <span class="ease-billing-switch-track-az"></span>
    <span class="ease-billing-switch-thumb-az"></span>
  </label>
  <span class="ease-billing-label-az">Yearly</span>
  <span class="ease-billing-savings-az">Save 20%</span>
</div>
```

## States

- **Monthly**: Unchecked input, `--active` on Monthly label
- **Yearly**: Checked input (`checked`), `--active` on Yearly label
- **Savings badge**: `.ease-billing-savings-az` shows discount text

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-*` | spacing |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-success` | #10b981 |
| `--ease-color-neutral-*` | grays |
| `--ease-font-sans` | system-ui |
