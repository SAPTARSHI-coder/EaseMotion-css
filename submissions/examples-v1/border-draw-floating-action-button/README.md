# Border Draw Floating Action Button

## Overview

The Border Draw Floating Action Button is a polished, animation-first action control for the EaseMotion CSS library. It brings a premium border-draw interaction to a compact floating button that feels natural in chat apps, delivery experiences, shopping interfaces, and mobile dashboards.

## Features

- Pure HTML and CSS only
- Responsive and mobile-friendly layout
- Accessible hover and keyboard focus states
- Smooth border-draw animation using pseudo-elements
- Reusable CSS variables for easy customization
- Reduced-motion support for accessibility
- Modern, professional appearance with minimal markup

## Folder Structure

```text
border-draw-floating-action-button/
├── demo.html
├── style.css
└── README.md
```

## Usage

Place the button in your page and link the stylesheet:

```html
<link rel="stylesheet" href="style.css" />
```

Then add the component markup:

```html
<button class="ease-fab" type="button" aria-label="Open new action">
  <span class="ease-fab__icon" aria-hidden="true">+</span>
</button>
```

## HTML Example

```html
<body>
  <main class="ease-page-shell">
    <section class="ease-hero">
      <h1>Border Draw Floating Action Button</h1>
    </section>
  </main>

  <button class="ease-fab" type="button" aria-label="Open new action">
    <span class="ease-fab__icon" aria-hidden="true">+</span>
  </button>
</body>
```

## Customization

The component is designed to be easy to customize through CSS variables:

```css
:root {
  --ease-fab-size: 3.75rem;
  --ease-fab-bg: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  --ease-fab-color: #ffffff;
  --ease-border-color: rgba(255, 255, 255, 0.95);
  --ease-duration: 0.32s;
  --ease-shadow: 0 18px 36px rgba(37, 99, 235, 0.28);
  --ease-radius: 999px;
}
```

## Accessibility

- Uses a semantic button element
- Supports keyboard users through `:focus-visible`
- Preserves visible focus styling
- Respects `prefers-reduced-motion`
- Includes clear labeling with `aria-label`

## Responsive Design

The floating button is positioned at:

- `24px` from the bottom-right on desktop
- `16px` from the bottom-right on mobile
- Slightly smaller on narrow screens for a more balanced layout

## Browser Support

The implementation uses modern CSS features that are broadly supported in current evergreen browsers.

## Animation Details

The border is drawn with two pseudo-elements:

- `::before` handles the top and right edge
- `::after` handles the bottom and left edge

On hover or keyboard focus, the border appears as if it is being traced around the button with a smooth, premium transition.

## CSS Variables

- `--ease-fab-size` controls the overall button size
- `--ease-fab-bg` defines the background fill
- `--ease-fab-color` controls the icon color
- `--ease-border-color` defines the border-draw color
- `--ease-duration` adjusts animation timing
- `--ease-shadow` controls the floating shadow
- `--ease-radius` adjusts border radius

## Future Improvements

Possible enhancements include:

- Optional icon variants
- Multiple color themes
- Expanded motion presets
- Support for a mini speed-dial action menu

## License

This component is part of the EaseMotion CSS project and follows the project’s existing open-source licensing terms.
