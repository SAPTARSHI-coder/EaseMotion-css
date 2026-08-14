# CSS Zoom-In Navbar for E-Commerce Checkout

A lightweight, pure CSS and HTML navbar designed specifically for E-Commerce checkout flows. It features smooth zoom-in animations on load to guide the user's focus, along with hover effects for better interactivity.

## Features

- **Pure CSS/HTML:** No JavaScript required.
- **Performant Animations:** Uses CSS keyframes (`zoomInNavbar`) and `transform: scale()` for hardware-accelerated animations.
- **Staggered Entrance:** Utilizes CSS variables (`--zoom-delay`) to create a cascading entrance effect.
- **Checkout Steps (Stepper):** Clearly indicates the current step in the checkout process (e.g., Cart -> Shipping -> Payment).
- **Responsive:** Adapts to mobile and desktop screens.
- **Accessible:** Includes `prefers-reduced-motion` media queries to disable animations for users who prefer it.

## Usage

1. Copy the HTML structure from `demo.html` into your project.
2. Include the `style.css` file in your project or copy the relevant CSS.
3. Adjust the CSS variables in the `:root` pseudo-class to match your brand's color palette.

### HTML Structure

The navbar uses the `.zoom-in-element` class to trigger the entrance animation, with an inline style `--zoom-delay` to stagger the effect:

```html
<div class="ease-logo zoom-in-element" style="--zoom-delay: 0.1s;">
  <!-- Logo Content -->
</div>
```

### CSS Variables

Customize the following variables in the `:root` to style the navbar:

```css
:root {
  --ease-primary: #4F46E5;        /* Primary brand color (active step) */
  --ease-success: #10B981;        /* Color for completed steps */
  --ease-bg: #F3F4F6;             /* Background color */
  --ease-surface: #FFFFFF;        /* Navbar background color */
  --ease-text: #1F2937;           /* Main text color */
  --ease-text-muted: #6B7280;     /* Muted text color for inactive steps */
  --ease-border: #E5E7EB;         /* Border color */
  --ease-zoom-duration: 0.6s;     /* Duration of the zoom-in animation */
}
```

## Accessibility

The animation is fully responsive to the user's system preferences. If `prefers-reduced-motion: reduce` is enabled, all zoom and scale animations will be disabled automatically.
