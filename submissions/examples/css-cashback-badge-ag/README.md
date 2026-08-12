# CSS Cashback Badge

A premium, interactive cashback reward badge featuring a 3D spinning coin animation and metallic sweep effects.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript.
- **3D Coin Spin**: Hovering the badge applies a `rotateY(360deg)` 3D transform to the coin element, creating a delightful spinning illusion perfectly suited for gamified reward mechanics.
- **Micro-Interactions**: Features a playful `cubic-bezier` scale and translate elevation effect on the entire badge when focused. A bright metallic `linear-gradient` sweep glides across the badge (`::after`) to simulate light catching a golden surface.
- **Accessible & Responsive**: Built on a semantic `<a>` tag for perfect keyboard navigability. Uses `aria-label` to announce the full reward proposition to screen readers. Respects user preferences by gracefully disabling the spin, scale, and sweep animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your pricing tables or checkout flow layout.

```html
<a href="#" class="cashback-badge" aria-label="Earn 5% Cashback">
  <div class="coin-wrapper" aria-hidden="true">
    <span class="coin-inner">$</span>
  </div>
  <span class="badge-text">5% Cashback</span>
</a>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--badge-bg`: Background gradient base color (default: `#fffbeb`)
- `--badge-border`: Border color of the pill (default: `#fde68a`)
- `--text-main`: The main text color (default: `#92400e`)
- `--accent-gold`: The active hover border color (default: `#fbbf24`)
- `--shadow-color`: The ambient drop shadow color (default: `rgba(251, 191, 36, 0.2)`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge).
