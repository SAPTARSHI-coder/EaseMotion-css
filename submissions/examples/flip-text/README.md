# Flip Text
A dependency-free animated text effect for the EaseMotion CSS gallery.

## Features
* Pure HTML and CSS
* Individual letters flip vertically on hover
* Sequential letter-by-letter timing
* Keyboard focus support
* Responsive typography
* `prefers-reduced-motion` support
* No JavaScript or external dependencies

## Structure
```text
flip-text/
├── demo.html
├── style.css
├── README.md
└── PR.md
```

## Usage
Open `demo.html` in a browser and hover over the text to trigger the effect. The animation is built by placing two copies of each character inside a clipped letter container. CSS 3D transforms move the first character upward while the second rolls into view.

## Customization
The displayed text can be changed by replacing the characters inside each `.letter`. Animation timing and the staggered delay can be adjusted in `style.css`. The main colors and design values are exposed as CSS custom properties at the top of the stylesheet.

## Accessibility
The component uses an accessible link label while the decorative duplicate characters are hidden from assistive technologies with `aria-hidden`. A visible `:focus-visible` state allows keyboard users to trigger and inspect the same effect. The animation respects `prefers-reduced-motion`.

## Dependencies
None. The component uses only HTML and CSS.
