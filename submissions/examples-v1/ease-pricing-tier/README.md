# ease-pricing-tier

## What does this do?

Pricing card grid component for displaying **pricing tiers** with plan name, price (monthly/yearly), feature list with checkmarks, and a CTA button. Includes a highlighted "popular" variant, hover lift, and responsive multi-column layout.

## How is it used?

```html
<div class="ease-pricing-grid">
  <div class="ease-pricing-card">
    <h3 class="ease-pricing-plan">Starter</h3>
    <div class="ease-pricing-price">
      <span class="ease-pricing-amount">$9</span>
      <span class="ease-pricing-period">/month</span>
    </div>
    <ul class="ease-pricing-features">
      <li class="ease-pricing-feature">Feature</li>
      <li class="ease-pricing-feature ease-pricing-feature--muted">Unavailable</li>
    </ul>
    <div class="ease-pricing-action">
      <button class="ease-btn ease-btn-primary">Get Started</button>
    </div>
  </div>

  <div class="ease-pricing-card ease-pricing-popular">
    <div class="ease-pricing-badge">Most Popular</div>
    <!-- ... -->
  </div>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-pricing-grid` | CSS grid container (auto-fit, min 260px) |
| `.ease-pricing-card` | Individual pricing card |
| `.ease-pricing-popular` | Highlighted/featured variant (primary border + glow) |
| `.ease-pricing-badge` | "Most Popular" badge pill (absolute, top-center) |
| `.ease-pricing-plan` | Plan name (uppercase, muted) |
| `.ease-pricing-price` | Flex row for amount + period |
| `.ease-pricing-amount` | Large price number |
| `.ease-pricing-period` | /month or /year label |
| `.ease-pricing-desc` | Brief plan description |
| `.ease-pricing-features` | Feature list (flex column) |
| `.ease-pricing-feature` | Single feature row with checkmark |
| `.ease-pricing-feature--muted` | Unavailable feature (dimmed, no checkmark color) |
| `.ease-pricing-action` | Wrapper for CTA button |

### Animation

- Cards use `.ease-slide-up` for scroll-triggered entrance (stagger via `animation-delay`)
- Card hover: `translateY(-4px)` lift + shadow increase
- Feature items can be staggered with `animation-delay` increments

### Responsive

| Breakpoint | Columns |
|------------|---------|
| ≤768px | 1 column (stacked) |
| 769–1024px | 2 columns |
| ≥1025px | Auto-fit (3+ columns) |
| `.ease-pricing-popular` | Reorders to top on mobile |

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-color-surface` | `#fff` / `#141e33` | Card background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Amount, feature text |
| `--ease-color-primary` | `#6c63ff` | Popular border, badge, checkmark, CTA |
| `--ease-color-neutral-200` | `#e2e8f0` / `#334155` | Card border |
| `--ease-color-neutral-300` | `#cbd5e1` | Muted checkmark |
| `--ease-color-neutral-400` | `#94a3b8` | Plan name, period |
| `--ease-color-neutral-500` | `#64748b` | Description |
| `--ease-color-neutral-700` | `#334155` | Dark card border |
| `--ease-radius-xl` | `1.25rem` | Card border radius |
| `--ease-shadow-sm` | `0 1px 3px...` | Default card shadow |
| `--ease-shadow-md` | `0 4px 12px...` | Popular shadow |
| `--ease-shadow-lg` | `0 10px 30px...` | Hover shadow |
| `--ease-shadow-xl` | `0 20px 40px...` | Popular hover shadow |
| `--ease-speed-fast` | `150ms` | Hover transition |

Fixes #25557
