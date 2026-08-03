# Ripple-Wave Fintech Navbar

A pure CSS navigation experience for a fintech treasury dashboard. Selecting a view sends a fill wave and expanding ring across the active item, then reveals its matching operational panel.

## Features

- Native radio controls for keyboard-friendly state management
- Ripple fill and wave-ring animations without JavaScript
- Four synchronized fintech dashboard panels
- Horizontally scrollable mobile navigation
- Visible keyboard focus treatment
- Reduced-motion and forced-colors support
- Responsive metrics and activity layouts

## Usage

Place radio controls before the navbar and panels so sibling selectors can synchronize the active item and content.

```html
<input id="nav-overview" name="treasury-nav" type="radio" checked />

<nav class="ripple-navbar">
  <label for="nav-overview">
    <span class="nav-icon" aria-hidden="true">01</span>
    <span>Overview</span>
  </label>
</nav>

<div class="panels">
  <article class="panel panel--overview">Overview content</article>
</div>
```

Add equivalent checked-state selectors for each navigation item and panel.

## Custom Properties

| Property          | Default   | Purpose                    |
| ----------------- | --------- | -------------------------- |
| `--accent`        | `#1d5ee8` | Active navigation color    |
| `--accent-soft`   | `#e8efff` | Ripple fill color          |
| `--nav-height`    | `68px`    | Minimum navbar item height |
| `--wave-duration` | `560ms`   | Ripple animation duration  |
| `--line`          | `#d7dde6` | Component border color     |

## Accessibility

The hidden radio inputs remain keyboard operable and expose native checked state. Their labels provide large activation targets, while `:focus-visible` draws a clear inset outline. Reduced-motion mode removes the ripple and panel entrance animations.

## Browser Support

The example uses standard radio controls, sibling selectors, keyframes, and media queries supported by current Chrome, Edge, Firefox, and Safari releases.
