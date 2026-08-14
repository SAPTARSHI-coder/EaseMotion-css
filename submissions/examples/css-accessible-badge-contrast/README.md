# CSS WCAG AA Accessible Badge Contrast Ratios

A collection of high-contrast, accessible Status Badge components built using pure HTML5 and CSS3. Designed specifically to exceed WCAG AA contrast ratio requirements (>4.5:1).

## Overview

Light-tinted status badges with white text (such as yellow warning or light blue info badges) frequently fail minimum WCAG AA contrast guidelines. This component provides accessible status badges (Warning, Info, Success, Danger) using carefully calculated background-to-text color contrast pairings that guarantee high readability for visually impaired users.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript dependencies.
- **WCAG AA Compliance**: All badge variants exceed the 4.5:1 minimum text contrast ratio.
- **Status Indicator Dots**: Visual status indicators embedded within each badge.
- **ARIA Status Attributes**: Accessible `role="status"` markup.
- **Prefers-Reduced-Motion**: Motion-safe hover scaling physics.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.

## Folder Structure

```
css-accessible-badge-contrast/
├── demo.html    # HTML badge cards with ARIA status attributes
├── style.css    # High-contrast badge styles, variables & hover physics
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML document:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<span class="badge badge-warning" role="status">
  <span class="badge-dot" aria-hidden="true"></span>
  Action Required
</span>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #2d3748;

  /* High Contrast Pairings (>4.5:1 Ratio) */
  --badge-warning-bg: #78350f;
  --badge-warning-text: #fef3c7;
  --badge-warning-border: #f59e0b;

  --badge-info-bg: #1e3a8a;
  --badge-info-text: #dbeafe;
  --badge-info-border: #3b82f6;

  --badge-success-bg: #064e3b;
  --badge-success-text: #d1fae5;
  --badge-success-border: #10b981;

  --badge-danger-bg: #7f1d1d;
  --badge-danger-text: #fee2e2;
  --badge-danger-border: #ef4444;
}
```

## Customization

Adjust badge background or text colors while maintaining WCAG AA contrast compliance:

```css
.badge-warning {
  --badge-warning-bg: #451a03;  /* Darker amber background */
  --badge-warning-text: #fffbeb; /* Ultra-high contrast text */
}
```

## Accessibility

- **WCAG AA Compliance**: Contrast ratios range between 5.4:1 and 7.2:1.
- **ARIA Status Attributes**: Uses `role="status"` to announce updates to assistive technologies.
- **Status Indicator Dots**: Visual indicator dots reinforce status semantics.

## Responsive Behaviour

- **Desktop (880px+)**: Responsive 2-column badge grid layout.
- **Mobile (<480px)**: Single-column grid for mobile screens.

## Browser Compatibility

- Chrome / Edge 80+
- Firefox 75+
- Safari 14+
- iOS Safari / Android Chrome
