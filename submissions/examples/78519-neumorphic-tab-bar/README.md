# Neumorphic Tab Bar with Dark Mode

A responsive neumorphic tab bar built with semantic HTML and modern CSS.

## Features

* Responsive tab navigation
* Neumorphic soft-shadow design
* Light and dark mode styling
* CSS-only tab switching
* No external libraries
* Keyboard-focus styling
* Mobile-friendly layout
* Reduced-motion support
* Smooth panel transitions

## Preview

The component provides four tabs:

* Home
* Profile
* Settings
* Alerts

Each tab displays its corresponding content panel.

## Usage

Copy the HTML structure from `demo.html` and include `style.css`:

```html
<link rel="stylesheet" href="style.css" />
```

The tab system works without JavaScript by using radio inputs and CSS sibling selectors.

## Dark Mode

Dark mode can be enabled by adding the `dark-mode` class to the `<body>`:

```html
<body class="dark-mode">
```

The demo also includes a toggle button that dynamically adds or removes the class.

## Responsive Behavior

The component adapts across screen sizes:

* Desktop: four tabs in one row
* Tablet: two tabs per row
* Mobile: compact two-column tab layout

## Accessibility

The component includes:

* Visible keyboard focus indicators
* Semantic tab-related roles
* Reduced-motion support through `prefers-reduced-motion`
* Properly associated labels and form controls

## Files

```text
78519-neumorphic-tab-bar/
├── demo.html
├── style.css
└── README.md
```

## Issue

Implemented for EaseMotion CSS issue #78519.
