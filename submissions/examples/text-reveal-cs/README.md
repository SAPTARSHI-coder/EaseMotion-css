# Text Reveal
A reusable CSS text-reveal animation for typography, headings, and hero sections.
The effect uses an overflow-hidden wrapper as a mask while the child element slides upward from outside the visible area.

## Structure
```text
text-reveal/
├── demo.html
├── style.css
└── README.md
```

## Required HTML Structure
The wrapper must contain the element that receives the animation class:

```html
<span class="em-text-reveal-wrapper">
  <span class="em-text-reveal-up">
    Your text goes here
  </span>
</span>
```

### Wrapper
`.em-text-reveal-wrapper` applies:

```css
overflow: hidden;
```
This hides the animated element while it is positioned below the visible area.

### Animated Child
`.em-text-reveal-up` initially uses:
```css
transform: translateY(100%);
```
The animation then moves the element to:
```css
transform: translateY(0);
```

## Features
* Vertical text reveal animation
* Masked overflow effect
* EaseMotion-style CSS custom properties
* Configurable duration and easing
* Optional reveal delay
* Responsive example
* `prefers-reduced-motion` support
* No JavaScript
* No external dependencies

## Customization
The animation can be customized through the provided variables:
```css
:root {
  --em-duration: 850ms;
  --em-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
For a staggered sequence, apply different `animation-delay` values to multiple `.em-text-reveal-up` elements.

## Accessibility
The demo uses real text rather than duplicated visual text. The animation is decorative and does not change the underlying content.
When `prefers-reduced-motion: reduce` is enabled, the text is displayed immediately without the reveal movement.

## Usage
Copy the `.em-text-reveal-wrapper` and `.em-text-reveal-up` styles into a project and use the documented HTML structure around the text that should be revealed.

## Browser Support
The component relies on broadly supported CSS features including:

* `overflow`
* `transform`
* CSS animations
* CSS custom properties
* Media queries
