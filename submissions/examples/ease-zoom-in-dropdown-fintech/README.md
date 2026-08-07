# CSS Zoom-In Dropdown for Fintech Dashboard

A lightweight, responsive fintech dashboard dropdown featuring a smooth CSS-only zoom-in animation.

## ✨ Features

* Pure HTML and CSS
* No JavaScript or external frameworks
* Smooth zoom-in dropdown animation
* Subtle vertical entrance movement
* CSS custom properties for easy customization
* Hover and keyboard focus support
* Responsive desktop, tablet, and mobile layouts
* Accessible `prefers-reduced-motion` support
* Fintech dashboard-inspired UI
* GPU-friendly `transform` and `opacity` animations

## 📁 Files

```text
ease-zoom-in-dropdown-fintech/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Use the dropdown structure:

```html
<div class="dropdown">
  <button class="dropdown-trigger" type="button">
    Account
  </button>

  <div class="dropdown-menu">
    <a href="#profile">Profile</a>
    <a href="#settings">Settings</a>
    <a href="#support">Support</a>
  </div>
</div>
```

The dropdown opens when the user hovers over the component or focuses an element inside it.

## 🎨 CSS Custom Properties

The animation can be customized using these variables:

```css
:root {
  --ease-zoom-duration: 280ms;
  --ease-zoom-distance: 8px;
  --ease-zoom-scale: 0.92;
  --ease-zoom-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Properties

| Property               | Description               | Default                          |
| ---------------------- | ------------------------- | -------------------------------- |
| `--ease-zoom-duration` | Animation duration        | `280ms`                          |
| `--ease-zoom-distance` | Initial vertical offset   | `8px`                            |
| `--ease-zoom-scale`    | Initial dropdown scale    | `0.92`                           |
| `--ease-zoom-easing`   | Animation timing function | `cubic-bezier(0.22, 1, 0.36, 1)` |

## ♿ Accessibility

The component supports keyboard navigation through `:focus-within`.

Reduced-motion preferences are respected:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users who prefer reduced motion will receive an almost instantaneous interaction instead of the animated transition.

## 📱 Responsive Behavior

* Desktop: dropdown appears beside the dashboard content.
* Tablet: account control expands to available width.
* Mobile: dropdown uses the full available width.
* Dashboard cards automatically switch to a single-column layout.

## ⚡ Performance

The animation primarily uses:

* `transform`
* `opacity`
* `visibility`

These properties help keep the interaction smooth without requiring JavaScript.

## 🧩 Browser Support

The component uses modern CSS features including:

* CSS custom properties
* CSS transforms
* CSS transitions
* `:hover`
* `:focus-within`
* `prefers-reduced-motion`

Modern versions of Chrome, Firefox, Safari, and Edge are supported.

## 📄 License

This example follows the license and contribution guidelines of the EaseMotion CSS repository.
