# Avatar Group Component

## Overview

Avatar Group Component is a responsive, CSS-only avatar stack layout for displaying overlapping profile images. It features smooth hover animations, flexible sizing variants, and support for overflow indicators, making it ideal for team sections, dashboards, collaboration tools, and social applications.

## Features

- Overlapping avatar layout with elegant stacking
- Smooth hover scaling and elevation effects
- Circular avatars with customizable sizing
- Support for image and text-based avatars
- Overflow indicator for additional members (+N)
- Color gradients and status indicators
- Responsive design with mobile support
- CSS variables for full customization
- Zero JavaScript required
- Respects `prefers-reduced-motion`

## Available Classes

- `.ease-avatar-group` — Container for the avatar stack.
- `.ease-avatar` — Individual avatar element (supports img or text).
- `.ease-avatar-overlap` — Modifier to apply overlapping spacing to avatars.
- `.ease-avatar-more` — Badge/indicator for overflow count.

## Sizing Variants

- `.ease-avatar-sm` — Small avatars (1.75rem).
- `.ease-avatar-lg` — Large avatars (3.5rem).
- `.ease-avatar-xl` — Extra-large avatars (4.5rem).

## Color Variants

Apply background color gradients using modifier classes:

- `.red`, `.blue`, `.green`, `.purple`, `.pink`, `.amber`

## Special Features

- `.ease-avatar-status` — Online status indicator (green by default).
- `.ease-avatar-status.away` — Away status (amber).
- `.ease-avatar-status.offline` — Offline status (gray).
- `.ease-avatar-group-hover` — Hover reveal animation variant.

## Usage

### Basic Avatar Group

```html
<div class="ease-avatar-group">
  <div class="ease-avatar ease-avatar-overlap red">A</div>
  <div class="ease-avatar ease-avatar-overlap blue">B</div>
  <div class="ease-avatar ease-avatar-overlap green">C</div>
  <div class="ease-avatar ease-avatar-overlap purple">D</div>
</div>
```

### With Overflow Indicator

```html
<div class="ease-avatar-group">
  <div class="ease-avatar ease-avatar-overlap red">A</div>
  <div class="ease-avatar ease-avatar-overlap blue">B</div>
  <div class="ease-avatar ease-avatar-overlap green">C</div>
  <div class="ease-avatar ease-avatar-overlap purple">D</div>
  <div class="ease-avatar-more">+12</div>
</div>
```

### Image Avatars

```html
<div class="ease-avatar-group">
  <div class="ease-avatar ease-avatar-overlap">
    <img src="avatar1.jpg" alt="User 1" />
  </div>
  <div class="ease-avatar ease-avatar-overlap">
    <img src="avatar2.jpg" alt="User 2" />
  </div>
  <div class="ease-avatar ease-avatar-overlap">
    <img src="avatar3.jpg" alt="User 3" />
  </div>
</div>
```

### Large Size

```html
<div class="ease-avatar-group ease-avatar-lg">
  <div class="ease-avatar ease-avatar-overlap red">A</div>
  <div class="ease-avatar ease-avatar-overlap blue">B</div>
</div>
```

### With Status Indicator

```html
<div class="ease-avatar-group">
  <div class="ease-avatar ease-avatar-overlap red">
    A
    <div class="ease-avatar-status"></div>
  </div>
  <div class="ease-avatar ease-avatar-overlap blue">
    B
    <div class="ease-avatar-status away"></div>
  </div>
</div>
```

### Hover Animation

```html
<div class="ease-avatar-group ease-avatar-group-hover">
  <div class="ease-avatar ease-avatar-overlap red">A</div>
  <div class="ease-avatar ease-avatar-overlap blue">B</div>
  <div class="ease-avatar ease-avatar-overlap green">C</div>
</div>
```

## Customization

Override CSS variables to customize the component:

```css
.ease-avatar-group {
  --ease-avatar-size: 3rem;
  --ease-avatar-overlap: 0.75rem;
  --ease-avatar-border: 3px solid #ffffff;
  --ease-avatar-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  --ease-avatar-transition: 0.32s cubic-bezier(0.2, 0.9, 0.3, 1);
  --ease-avatar-badge-bg: #3b82f6;
}
```

## Browser Compatibility

- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Accessibility

- Proper `alt` text required for image avatars.
- Focus styles with keyboard navigation support.
- Respects `prefers-reduced-motion` by disabling animations.
- Semantic HTML and ARIA-friendly structure.

## Notes

- Use `.ease-avatar-overlap` on all avatars except the first to create the stacking effect.
- For accessibility, always provide descriptive alt text for image avatars.
- The component scales responsively; adjust `--ease-avatar-size` for different breakpoints.
- Combine with other EaseMotion utilities for enhanced interactivity.
