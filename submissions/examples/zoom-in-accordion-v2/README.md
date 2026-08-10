# Zoom-In Accordion

A lightweight, responsive **CSS Zoom-In Accordion** designed for fintech dashboard layouts.

This example uses semantic HTML `<details>` and `<summary>` elements with pure CSS animations. No JavaScript or external framework is required.

## Features

* Pure HTML and CSS
* Smooth zoom-in opening animation
* Responsive desktop, tablet, and mobile layout
* Semantic and keyboard-friendly accordion structure
* CSS custom properties for easy customization
* Fintech dashboard-inspired design
* Respects `prefers-reduced-motion`
* No external dependencies

## Files

```text
zoom-in-accordion/
├── demo.html
├── style.css
└── README.md
```

## Usage

Link the stylesheet inside your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then use the accordion structure:

```html
<details class="accordion-item">
  <summary>
    <span>
      <strong>Account Overview</strong>
      <small>Monitor your financial activity</small>
    </span>
    <span class="icon" aria-hidden="true">+</span>
  </summary>

  <div class="accordion-content">
    Your content goes here.
  </div>
</details>
```

The `<details>` element provides the accordion interaction without JavaScript.

## CSS Custom Properties

The component can be customized using the following variables:

```css
:root {
  --bg: #eef2f7;
  --surface: #ffffff;
  --surface-soft: #f7f9fc;
  --text: #172033;
  --muted: #687386;
  --border: #dce2eb;
  --accent: #315efb;
  --accent-soft: #eaf0ff;
  --success: #16834b;

  --radius: 18px;
  --transition: 420ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

Change these values to match your project's design system.

## Animation

The opening animation uses the `zoom-in` keyframes:

```css
@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.92);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

The accordion content scales from `0.92` to `1` while fading into view.

## Accessibility

The component uses native `<details>` and `<summary>` elements, providing built-in keyboard interaction and semantic disclosure behavior.

The animation is also disabled for users who enable reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Browser Support

The component relies on standard HTML and CSS features supported by modern browsers.

## License

Part of the EaseMotion CSS examples collection.
