# Minimalist Sliding Tab Selector — Neumorphic Finish

A modern, mobile-first sliding tab selector featuring a soft neumorphic
interface and spring-inspired sliding animation.

## Features

* Neumorphic UI design
* Smooth spring-style sliding indicator
* Interactive tab switching
* Responsive mobile-first layout
* Keyboard accessibility
* Visible focus states
* Reduced-motion support
* Pure HTML, CSS and JavaScript
* No external dependencies

## Folder Structure

```text
ease-advanced-minimalist-sliding-tab-selector-with-smooth-spring-physics-204/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` directly in a modern web browser.

No installation, package manager or build tool is required.

## Customization

The primary design values are controlled through CSS variables:

```css
:root {
  --bg: #e4e7ec;
  --text: #292d35;
  --muted: #747b87;
  --accent: #5965f2;
}
```

Change the tab labels and `data-target` values in `demo.html` to reuse the
component for different applications.

## Animation

The sliding indicator uses a spring-inspired cubic-bezier timing function:

```css
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

JavaScript calculates the selected tab's width and horizontal position,
allowing the indicator to smoothly follow tabs of different sizes.

## Accessibility

The component includes:

* Semantic button elements
* `role="tablist"`
* `role="tab"`
* `aria-selected`
* Keyboard activation
* Visible focus indicators
* `prefers-reduced-motion` support

## License

This component is submitted as part of the EaseMotion CSS project.
