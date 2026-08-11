# CSS Neon Tab Switcher

A responsive CSS-only tab switcher featuring a glowing neon underline that moves between active tabs.

## Features

- Pure HTML and CSS
- No JavaScript
- Animated neon active indicator
- CSS-only tab state management
- Smooth panel transitions
- Responsive layout
- Keyboard focus styling
- Reduced-motion support
- CSS custom properties
- No external dependencies

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create the tab controls using radio inputs and labels:

```html
<div class="tabs">
  <input
    class="tabs__input"
    type="radio"
    name="neon-tabs"
    id="tab-overview"
    checked
  >

  <label class="tabs__label" for="tab-overview">
    Overview
  </label>

  <input
    class="tabs__input"
    type="radio"
    name="neon-tabs"
    id="tab-features"
  >

  <label class="tabs__label" for="tab-features">
    Features
  </label>

  <span class="tabs__indicator"></span>
</div>
```

The checked radio input determines the active tab and moves the neon indicator using CSS sibling selectors.

## Customization

Change the theme using CSS variables:

```css
:root {
  --cyan: #39f6ff;
  --purple: #9d5cff;
  --pink: #ff42d0;
  --page-bg: #070914;
}
```

The indicator transition can also be adjusted:

```css
.tabs__indicator {
  transition: transform 280ms ease;
}
```

## Accessibility

The component provides:

- Native radio controls for state management
- Associated labels for keyboard interaction
- Visible keyboard focus styling
- Semantic headings and content
- Reduced-motion support

The radio controls remain available to keyboard users even though they are visually hidden.

## Browser Support

The component uses standard CSS selectors, transitions, animations, gradients, and media queries.

No JavaScript or external libraries are required.

## Why it fits EaseMotion CSS

This component demonstrates reusable CSS motion techniques through an animated neon indicator, active-state transitions, panel reveal animation, hover effects, and responsive behavior.

It remains dependency-free and can be copied into a project as a standalone CSS component.