# Skew-Active Card Grid

A modern, dynamic pure CSS layout perfect for E-Commerce checkout flows or pricing tables. The cards feature a subtle skew and scaling effect when inactive, creating a dynamic visual flow. Upon interaction (hover or keyboard focus), the cards elegantly un-skew, scale up, and elevate, drawing immediate user attention.

## Features

- **Pure CSS/HTML**: Zero JavaScript required for all animations and interactions.
- **Dynamic Skew Effect**: Uses `transform: skewY()` with counter-skewing on inner content to keep text perfectly readable.
- **Accessible & Focusable**: Cards use `tabindex="0"` and `:focus-within` to remain fully usable via keyboard navigation.
- **Responsive Grid**: Uses CSS Grid for fluid adaptation across desktop, tablet, and mobile viewports.
- **Reduced Motion Support**: Fully respects user accessibility preferences with `@media (prefers-reduced-motion: reduce)`.

## Files Included

- `demo.html` — Interactive clean HTML5 showcase
- `style.css` — Core animation and layout styles
- `README.md` — This documentation file

## Usage

Simply link the `style.css` in your project and copy the HTML structure from `demo.html`. The CSS custom properties (variables) make it extremely easy to adapt the theme to your brand.

### CSS Custom Properties

```css
:root {
  --bg-color: #0f172a;        /* Main background color */
  --card-bg: #1e293b;         /* Card background color */
  --text-primary: #f8fafc;    /* Primary text color */
  --text-secondary: #94a3b8;  /* Secondary text color (features) */
  --accent-color: #3b82f6;    /* Primary accent color (borders, prices) */
  --accent-hover: #60a5fa;    /* Hover state for accents */
  --skew-angle: -4deg;        /* The angle of the default skew */
  --transition-speed: 0.4s;   /* Speed of the interactive animations */
}
```

## Preview

Open `demo.html` in your browser to see the smooth transitions in action. The cards respond beautifully to both mouse hover and keyboard focus.
