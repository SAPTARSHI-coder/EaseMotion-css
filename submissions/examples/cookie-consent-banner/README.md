# Cookie Consent Banner Component

## Overview

Cookie Consent Banner is a responsive, CSS-only component for displaying cookie consent notices and preferences. It supports multiple layout variants (bottom banner, floating card, centered modal), smooth entrance animations, dark mode, and glassmorphism effects—all without JavaScript.

## Features

- Multiple layout variants: bottom banner, floating card, centered modal
- Smooth slide-up and fade-in entrance animations
- Dark mode and glassmorphism styling
- Compact variant for space-constrained layouts
- Accept, Decline, and Settings buttons with hover effects
- Fully responsive design
- CSS variables for customization
- Accessibility-first approach
- Respects `prefers-reduced-motion`
- Zero JavaScript required

## Available Classes

- `.ease-cookie-banner` — Main banner container.
- `.ease-cookie-content` — Content section with heading and description.
- `.ease-cookie-actions` — Button container.
- `.ease-cookie-accept` — Accept button (primary action).
- `.ease-cookie-decline` — Decline button (secondary action).
- `.ease-cookie-settings` — Settings button (tertiary action).

## Layout Variants

- `.ease-cookie-banner-bottom` — Full-width banner fixed at bottom.
- `.ease-cookie-floating` — Floating card in bottom-right corner.
- `.ease-cookie-centered` — Centered modal-style popup.

## Style Variants

- `.ease-cookie-dark` — Dark theme variant.
- `.ease-cookie-glass` — Glassmorphism effect with backdrop blur.
- `.ease-cookie-compact` — Compact spacing for minimal height.

## Usage

### Bottom Banner

```html
<div class="ease-cookie-banner ease-cookie-banner-bottom">
  <div class="ease-cookie-content">
    <h3>We use cookies</h3>
    <p>We use cookies to enhance your experience and analyze site traffic.</p>
  </div>
  <div class="ease-cookie-actions">
    <button class="ease-cookie-accept">Accept all</button>
    <button class="ease-cookie-decline">Decline</button>
    <button class="ease-cookie-settings">Settings</button>
  </div>
</div>
```

### Floating Card

```html
<div class="ease-cookie-banner ease-cookie-floating">
  <div class="ease-cookie-content">
    <h3>Cookies</h3>
    <p>We use cookies to personalize content.</p>
  </div>
  <div class="ease-cookie-actions">
    <button class="ease-cookie-accept">Accept</button>
    <button class="ease-cookie-decline">Decline</button>
  </div>
</div>
```

### Centered Modal

```html
<div class="ease-cookie-banner ease-cookie-centered">
  <div class="ease-cookie-content">
    <h3>Cookie Preferences</h3>
    <p>Choose your cookie preferences below.</p>
  </div>
  <div class="ease-cookie-actions">
    <button class="ease-cookie-accept">Accept all</button>
    <button class="ease-cookie-decline">Reject all</button>
  </div>
</div>
```

### Dark Mode

```html
<div class="ease-cookie-banner ease-cookie-dark ease-cookie-banner-bottom">
  <!-- Content -->
</div>
```

### Glassmorphism

```html
<div class="ease-cookie-banner ease-cookie-glass ease-cookie-floating">
  <!-- Content -->
</div>
```

### Compact Variant

```html
<div class="ease-cookie-banner ease-cookie-compact ease-cookie-banner-bottom">
  <!-- Content -->
</div>
```

## Customization

Override CSS variables to adapt the component to your design:

```css
.ease-cookie-banner {
  --ease-cookie-bg: #1f2937;
  --ease-cookie-text: #f3f4f6;
  --ease-cookie-muted: #9ca3af;
  --ease-cookie-radius: 1.25rem;
  --ease-cookie-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
  --ease-cookie-padding: 2rem;
  --ease-cookie-gap: 1.5rem;
  --ease-cookie-transition: 0.32s cubic-bezier(0.2, 0.9, 0.3, 1);
  --ease-cookie-primary: #3b82f6;
  --ease-cookie-primary-hover: #2563eb;
}
```

## Button States

The component provides three button types with distinct styles:

- **Accept button** (`.ease-cookie-accept`) — Primary action with full color.
- **Decline button** (`.ease-cookie-decline`) — Secondary action with neutral background.
- **Settings button** (`.ease-cookie-settings`) — Tertiary action with outline style.

All buttons feature smooth hover effects with elevation and color transitions.

## Browser Compatibility

- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Accessibility

- Proper contrast ratios for all text and buttons.
- Focus-visible styles for keyboard navigation.
- Respects `prefers-reduced-motion` by disabling animations for users with motion sensitivity.
- Semantic HTML structure with proper heading hierarchy.
- Clear, descriptive button labels.

## Positioning Notes

- `.ease-cookie-banner-bottom` uses `fixed` positioning with bottom alignment.
- `.ease-cookie-floating` uses `fixed` positioning with bottom-right alignment.
- `.ease-cookie-centered` uses `fixed` positioning with center alignment.

On mobile screens, floating and bottom banners stack responsively and take full width (minus margins).

## Notes

- The component is purely decorative; you'll need to add JavaScript to handle button interactions and store preferences.
- Use semantic HTML inside `.ease-cookie-content` for better accessibility.
- All positioning styles use `z-index: 9999` to ensure the banner appears above other page content.
- Combine with other EaseMotion utilities for enhanced animations and styling.
