````markdown
# Responsive Stat Metric Card — Cyberpunk

A responsive, cyberpunk-styled Stat Metric Card component built using
pure CSS.

The component is designed to work across mobile, tablet, and desktop
screen sizes while using EaseMotion CSS variables and design tokens.

## Features

- Cyberpunk visual styling
- Responsive layout
- Mobile, tablet and desktop support
- Pure CSS implementation
- Zero JavaScript dependencies
- EaseMotion CSS variables
- Reusable design tokens
- Smooth hover/state transitions
- High-contrast visual hierarchy
- `prefers-reduced-motion` support
- Semantic HTML
- Accessible status labels

## Project Structure

```text
responsive-stat-card/
│
├── demo.html
├── style.css
└── README.md
````

## Implementation

The component uses semantic HTML:

```html
<article class="stat-card">
  ...
</article>
```

No JavaScript is required.

## Design Tokens

The component defines reusable EaseMotion-style tokens for:

* Colors
* Spacing
* Border radius
* Motion duration
* Motion easing
* Transitions

Example:

```css
:root {
  --em-color-primary: #00f5ff;
  --em-color-secondary: #b400ff;

  --em-motion-duration: 220ms;
  --em-motion-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

## Responsive Behavior

### Mobile

Cards are displayed in a single column.

```text
┌───────────────┐
│   Metric 01   │
└───────────────┘
┌───────────────┐
│   Metric 02   │
└───────────────┘
```

### Tablet

Cards use a two-column grid.

```text
┌─────────┐ ┌─────────┐
│ Metric  │ │ Metric  │
└─────────┘ └─────────┘

┌─────────┐ ┌─────────┐
│ Metric  │ │ Metric  │
└─────────┘ └─────────┘
```

### Desktop

Cards use a four-column layout.

```text
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│  01  │ │  02  │ │  03  │ │  04  │
└──────┘ └──────┘ └──────┘ └──────┘
```

## Accessibility

The component is designed with accessibility in mind.

### Semantic Structure

Each metric is represented using an `<article>` element.

The page uses:

* `<main>`
* `<header>`
* `<section>`
* `<article>`

### Reduced Motion

Animations and transitions are disabled/reduced when the user has
enabled reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  ...
}
```

This prevents decorative motion from causing discomfort for users who
prefer reduced motion.

## Browser Compatibility

The component uses standard CSS features supported by modern browsers,
including:

* CSS Grid
* CSS Custom Properties
* CSS Media Queries
* `prefers-reduced-motion`
* CSS transitions
* `clamp()`

Tested target browsers:

* Chrome
* Microsoft Edge
* Firefox
* Safari

## Testing Checklist

### Responsive

* [x] Mobile layout
* [x] Tablet layout
* [x] Desktop layout

### Accessibility

* [x] Semantic HTML
* [x] Reduced-motion support
* [x] Status information available to screen readers
* [x] No JavaScript dependency
* [x] Sufficient visual hierarchy

### Visual

* [x] Cyberpunk styling
* [x] Hover state
* [x] Smooth transitions
* [x] Responsive typography
* [x] Design tokens
* [x] EaseMotion variables

## Run the Demo

Open:

```text
demo.html
```

directly in a modern browser.

No installation or build process is required.

## Acceptance Criteria

* [x] Responsive Stat Metric Card created
* [x] Cyberpunk styling implemented
* [x] Pure CSS implementation
* [x] EaseMotion variables/design tokens used
* [x] Smooth state transitions implemented
* [x] Mobile layout supported
* [x] Tablet layout supported
* [x] Desktop layout supported
* [x] Zero JS dependencies
* [x] `prefers-reduced-motion` supported
* [x] Cross-browser compatibility considered

```
```
