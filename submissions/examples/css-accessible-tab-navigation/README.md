# CSS Accessible Tab Navigation with Arrow Keys Support

A modern, responsive, WAI-ARIA compliant Tabbed Navigation Widget component built purely with HTML5 and CSS3. Features Arrow keys navigation (Left/Right/Up/Down), smooth active indicator transitions, and high-contrast WCAG AA colors.

## Overview

The Accessible Tab Navigation component resolves the keyboard accessibility deficit where tab widgets lacked native Arrow key navigation. Built with WAI-ARIA tabbed widget markup (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`), radio group controls allow seamless Arrow key navigation across active tabs.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript execution.
- **WAI-ARIA Tabbed Widget**: Includes `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Arrow Keys Support**: Keyboard users can switch tabs with Arrow Left/Right/Up/Down buttons.
- **Active Motion Indicator**: Pure CSS smooth indicator sliding transitions.
- **WCAG AA Compliance**: High-contrast theme colors.
- **Prefers-Reduced-Motion**: Disables indicator physics for motion-sensitive users.

## Folder Structure

```
css-accessible-tab-navigation/
├── demo.html    # HTML tablist & tabpanel markup
├── style.css    # CSS tab indicator physics, variables & accessibility
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<div class="tab-list-wrapper" role="tablist" aria-label="Feature Sections">
  <label for="tab-btn-1" id="tab-label-1" class="tab-label" role="tab" aria-selected="true" aria-controls="panel-1" tabindex="0">
    <span class="tab-icon">&#9881;</span> Overview
  </label>
  <label for="tab-btn-2" id="tab-label-2" class="tab-label" role="tab" aria-selected="false" aria-controls="panel-2" tabindex="0">
    <span class="tab-icon">&#128200;</span> Analytics
  </label>
  <span class="tab-indicator" aria-hidden="true"></span>
</div>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --bg-tab-list: #1e2942;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
  --accent-cyan: #38bdf8;
  --focus-ring: #38bdf8;

  --radius-lg: 16px;
}
```

## Customization

Customize theme accent colors or indicator pill geometry easily:

```css
.tab-indicator {
  background: #10b981; /* Green active pill */
}
```

## Accessibility

- **Arrow Key Navigation**: Native keyboard radio group focus switching via Arrow keys.
- **ARIA Semantics**: Implements `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, and `aria-controls`.
- **Focus Ring Indicators**: High-visibility focus outline on focused tab labels.
- **WCAG AA Compliance**: High text-to-background contrast ratios.

## Responsive Behaviour

- **Desktop (600px+)**: Horizontal tab list with sliding indicator animation.
- **Mobile (<600px)**: Vertical tab layout with full-width active tab background highlighting.

## Browser Compatibility

- Chrome / Edge 105+ (Supports `:has()` selector)
- Firefox 121+
- Safari 15.4+
- iOS Safari / Android Chrome
