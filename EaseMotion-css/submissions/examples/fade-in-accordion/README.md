# Fade-In Accordion

A lightweight, responsive **CSS Fade-In Accordion** designed for fintech dashboard layouts.

The component uses semantic HTML and pure CSS. No JavaScript or external framework is required.

## Features

* Pure HTML and CSS
* Smooth fade-in animation
* Responsive desktop, tablet, and mobile design
* Native `<details>` and `<summary>` interaction
* CSS custom properties
* Fintech dashboard-inspired interface
* No external dependencies
* `prefers-reduced-motion` support

## Files

```text
fade-in-accordion/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create an accordion using:

```html
<details class="accordion-item">
  <summary>
    <span class="summary-content">
      <strong>Account Overview</strong>
      <small>View your account information</small>
    </span>

    <span class="accordion-icon" aria-hidden="true">+</span>
  </summary>

  <div class="accordion-content">
    Your content goes here.
  </div>
</details>
```

The native `<details>` element provides the interaction without JavaScript.

## CSS Custom Properties

The main design values can be customized through CSS variables:

```css
:root {
  --background: #eef2f7;
  --surface: #ffffff;
  --surface-soft: #f7f9fc;
  --text: #172033;
  --muted: #687386;
  --border: #dce2eb;
  --accent: #315efb;
  --accent-soft: #eaf0ff;
  --success: #16834b;

  --radius: 18px;
  --transition: 300ms ease;
}
```

## Animation

The accordion content uses a lightweight fade-in animation:

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

The animation is applied when the accordion is opened:

```css
.accordion-item[open] .accordion-content {
  animation: fade-in 400ms ease both;
}
```

## Accessibility

The component uses semantic `<details>` and `<summary>` elements, which provide native disclosure behavior and keyboard support.

Reduced-motion preferences are respected:

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

Designed for modern browsers supporting standard HTML5 and CSS features.

## License

Part of the EaseMotion CSS examples collection.
