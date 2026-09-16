````markdown
# Responsive Dropdown with Glassmorphism

A modern and responsive dropdown component featuring a glassmorphism design, smooth transitions, and a clean user interface.

## Features

- Pure HTML and CSS
- No JavaScript required
- Responsive design
- Glassmorphism effect
- Backdrop blur
- Smooth open/close animation
- Hover and focus states
- Keyboard accessible
- `prefers-reduced-motion` support
- CSS custom properties for easy customization

## Folder Structure

```text
responsive-dropdown-glassmorphism/
├── index.html
├── style.css
└── README.md
````

## Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then use the dropdown markup provided in `index.html`.

The component uses the native HTML `<details>` and `<summary>` elements, so no JavaScript is required.

## Customization

The component can be customized using CSS variables:

```css
:root {
  --dropdown-surface: rgba(255, 255, 255, 0.09);
  --dropdown-border: rgba(255, 255, 255, 0.18);
  --dropdown-accent: #a78bfa;
  --dropdown-radius: 22px;
}
```

Change these values to match your application's design system.

## Responsive Behavior

The dropdown adapts to different screen sizes:

* Desktop: Full-width glass dropdown with floating menu
* Tablet: Flexible width with reduced spacing
* Mobile: Compact layout optimized for smaller screens

## Accessibility

The component includes:

* Semantic HTML using `<details>` and `<summary>`
* Keyboard-accessible interaction
* Visible focus states
* Descriptive text
* Reduced-motion support using `prefers-reduced-motion`

## Technologies

* HTML5
* CSS3
* CSS Custom Properties
* CSS Backdrop Filter
* CSS Animations
* Responsive Media Queries

## Browser Support

Designed for modern versions of:

* Google Chrome
* Mozilla Firefox
* Safari
* Microsoft Edge

## Issue

Created for EaseMotion-css issue #79801.

```
```
