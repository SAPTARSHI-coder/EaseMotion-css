# ease-pricing-card — Glassmorphic Pricing Card with Toggle

**Implements:** Issue #4061  
**Type:** Feature — new component  
**Label:** `component` `type:feature`

---

## What this adds

A SaaS-style glassmorphic pricing card component with:
- Pure CSS Monthly/Annual billing toggle (hidden checkbox hack)
- Smooth price swap micro-animation (scale-fade)
- Ambient gradient glow that activates on hover
- Frosted glass `backdrop-filter` with solid-color fallback
- `prefers-reduced-motion` safe
- Zero JavaScript

---

## How It Works

### 1. Pure CSS Toggle — Hidden Checkbox Hack
A visually hidden `<input type="checkbox">` is placed as a sibling to
both the toggle UI and the pricing grid. CSS general sibling selectors
(`~`) target `.ease-price-monthly` and `.ease-price-annual` inside the
grid when the checkbox is `:checked`:

```css
.ease-pricing-toggle-input:checked ~ .ease-pricing-grid .ease-price-monthly {
  opacity: 0;
  transform: scale(0.85) translateY(-8px);
}
.ease-pricing-toggle-input:checked ~ .ease-pricing-grid .ease-price-annual {
  opacity: 1;
  transform: scale(1) translateY(0);
}
```

### 2. Price Swap Micro-animation
Both `.ease-price-monthly` and `.ease-price-annual` are absolutely
positioned in the same space. Toggling switches opacity + scale + translateY
simultaneously, producing a clean scale-fade cross-dissolve.

### 3. Ambient Glow on Hover
Each card has a `::before` pseudo-element — a radial gradient orb —
that fades in and scales up on `:hover`, giving the illusion of an
ambient light source tracking the card.

### 4. Fallback
`@supports not (backdrop-filter: blur(0))` provides a solid dark
background for Firefox < 103 and other unsupporting browsers.

---

## Usage

```html
<!-- Input MUST be a sibling of both toggle-wrap AND pricing-grid -->
<input type="checkbox" id="ease-billing-toggle" class="ease-pricing-toggle-input" />

<section class="ease-pricing-section">
  <div class="ease-pricing-toggle-wrap">
    <span class="ease-toggle-text-monthly">Monthly</span>
    <label for="ease-billing-toggle" class="ease-pricing-toggle-label">
      <span class="ease-toggle-track"></span>
      <span class="ease-toggle-thumb"></span>
    </label>
    <span class="ease-toggle-text-annual">Annual</span>
  </div>

  <div class="ease-pricing-grid">
    <div class="ease-pricing-card ease-pricing-popular">
      <!-- ... -->
      <div class="ease-price-wrap" style="position:relative; height:3.2rem;">
        <span class="ease-price-currency">$</span>
        <span class="ease-price-monthly">29</span>
        <span class="ease-price-annual">23</span>
        <span class="ease-price-period">&nbsp;/ mo</span>
      </div>
      <!-- ... -->
    </div>
  </div>
</section>
```

---

## Classes

| Class | Purpose |
|---|---|
| `.ease-pricing-toggle-input` | Hidden checkbox — powers the toggle |
| `.ease-pricing-toggle-wrap` | Toggle UI container |
| `.ease-pricing-toggle-label` | Clickable slider track + thumb |
| `.ease-pricing-section` | Page section wrapper |
| `.ease-pricing-grid` | Responsive card grid |
| `.ease-pricing-card` | Glass card base |
| `.ease-pricing-popular` | Popular/highlighted card variant |
| `.ease-popular-badge` | "Most Popular" badge pill |
| `.ease-price-monthly` | Monthly price (default visible) |
| `.ease-price-annual` | Annual price (revealed on toggle) |
| `.ease-feature-list` | Checkmark feature list |
| `.ease-pricing-cta` | Call-to-action button |

---

## Acceptance Criteria

- [x] Glassmorphic `backdrop-filter` card design
- [x] Pure CSS Monthly/Annual toggle — zero JavaScript
- [x] Smooth price swap micro-animation (scale-fade)
- [x] Ambient gradient glow on hover
- [x] Popular card glow accent badge
- [x] `@supports not` fallback for no-backdrop-filter browsers
- [x] `prefers-reduced-motion` — all transitions frozen
- [x] No `core/` or `components/` files modified