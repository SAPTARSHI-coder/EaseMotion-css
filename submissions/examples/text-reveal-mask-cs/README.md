# Text Reveal Mask
A responsive, dependency-free headline reveal component for the
EaseMotion CSS gallery.

## Features
* Pure HTML and CSS.
* No JavaScript or external dependencies.
* Line-by-line headline reveal.
* Text unveils from behind a vertical wipe mask.
* Staggered animation timing between lines.
* Gradient text treatment.
* Subtle supporting text fade-up.
* CSS-only replay control.
* Responsive layout.
* Keyboard-accessible replay control.
* Visible `:focus-visible` state.
* `prefers-reduced-motion` support.
* EaseMotion-style CSS custom properties.

## Files
* `demo.html` — self-contained interactive demonstration.
* `style.css` — mask effect, animations, and responsive styling.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.
No build step, framework, library, or JavaScript dependency is
required.

## How It Works
Each headline line is wrapped inside an overflow-hidden container:
```html
<span class="line">
  <span class="line-mask">
    <span class="line-text">Ideas become</span>
  </span>
</span>
```
The inner `.line-mask` begins below the visible area:
```css
.line-mask {
  transform: translateY(110%);
}
```
The reveal animation then moves the text into its normal position:

```css
@keyframes reveal-line {
  from {
    transform: translateY(110%);
  }

  to {
    transform: translateY(0);
  }
}
```

Each line receives a different animation delay to create the
line-by-line reveal.

## Customization
The main visual tokens are defined in `:root`:
* `--em-bg`
* `--em-surface`
* `--em-border`
* `--em-border-hover`
* `--em-text`
* `--em-muted`
* `--em-subtle`
* `--em-accent`
* `--em-accent-cyan`
* `--em-ease`
Adjust the animation delays on `.line:nth-child()` selectors to
change the reveal rhythm.

## Accessibility
* The headline has an `aria-label` containing the complete text.
* The decorative line structure does not require JavaScript.
* The replay control uses a native checkbox and associated label.
* Keyboard interaction is supported.
* `:focus-visible` provides a visible focus indicator.
* Reduced-motion preferences are respected.

