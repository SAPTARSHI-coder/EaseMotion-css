# CSS Accessible Password Strength Meter

A modern, responsive, and accessible Password Strength Meter component built purely with HTML5 and CSS3. Features WCAG AA compliant contrast colors, ARIA progressbar semantics, smooth transitions, and prefers-reduced-motion support.

## Overview

The Password Strength Meter visually and semantically presents password complexity ratings (Empty, Weak, Fair, Good, Strong). It utilizes `role="progressbar"` along with ARIA attributes (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`, `aria-valuetext`) to ensure complete accessibility for screen reader software.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript required.
- **ARIA Semantic Support**: Exposes `role="progressbar"` with active ARIA values.
- **WCAG AA Compliance**: High-contrast color palette exceeding 4.5:1 ratio requirements.
- **Interactive State Switcher**: Pure CSS state selection for testing password strength states.
- **Motion Safety**: Full support for `prefers-reduced-motion`.
- **Responsive Layout**: Fluid design adaptable across desktop, tablet, and mobile screens.

## Folder Structure

```
css-password-strength-meter/
├── demo.html    # HTML structure with semantic ARIA markup
├── style.css    # Modern CSS styles, variables & animations
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML file and add the password strength meter component structure inside your form:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<div class="strength-container">
  <div class="strength-meta">
    <span class="meta-label">Password Strength</span>
    <span id="strength-text" class="meta-status" aria-live="polite">Strong</span>
  </div>

  <!-- Semantic ARIA progressbar -->
  <div 
    id="strength-meter-bar" 
    class="strength-meter-track"
    role="progressbar" 
    aria-label="Password Strength" 
    aria-valuemin="0" 
    aria-valuemax="100" 
    aria-valuenow="100" 
    aria-valuetext="Strong"
  >
    <div class="strength-meter-fill"></div>
  </div>
</div>
```

## CSS Variables

The component customizable design tokens defined in `:root`:

```css
:root {
  --bg-primary: #0f172a;
  --bg-card: #1e293b;
  --bg-input: #334155;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border-color: #475569;
  --focus-ring: #38bdf8;

  /* Strength Level Colors */
  --strength-0: #64748b;
  --strength-1: #ef4444; /* Weak: Red */
  --strength-2: #f59e0b; /* Fair: Orange */
  --strength-3: #3b82f6; /* Good: Blue */
  --strength-4: #10b981; /* Strong: Green */
}
```

## Customization

You can easily override color variables to match your brand theme or design system:

```css
.card {
  --strength-1: #dc2626;
  --strength-4: #059669;
}
```

## Accessibility

- **ARIA Progressbar**: Provides screen readers with quantitative and qualitative password strength feedback.
- **Focus Management**: High-visibility focus indicators on all interactive form elements.
- **Live Announcements**: `aria-live="polite"` region notifies assistive technologies on status changes.
- **WCAG AA Compliance**: High contrast background and text pairings.

## Responsive Behaviour

- Fully responsive design scaling dynamically down to mobile viewports (320px+).
- Single-column checklist layout fallback on mobile screens.

## Browser Compatibility

- Chrome / Edge 105+ (Supports `:has()` selector)
- Firefox 121+
- Safari 15.4+
- iOS Safari / Android Chrome
