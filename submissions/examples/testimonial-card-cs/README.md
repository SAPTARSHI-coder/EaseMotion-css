# Testimonial Card
A responsive, dependency-free testimonial card component for the
EaseMotion CSS gallery.

## Features
* Pure HTML and CSS.
* No JavaScript or external dependencies.
* Floating quote mark.
* Five-star rating.
* Author avatar chip.
* Verified indicator.
* Subtle card lift on hover.
* Gradient and glow effects.
* Responsive layout.
* Semantic `<article>`, `<blockquote>`, and `<footer>` markup.
* Accessible star-rating label.
* `prefers-reduced-motion` support.
* EaseMotion-style CSS custom properties.

## Files
* `demo.html` — self-contained testimonial demonstration.
* `style.css` — card styling, hover effects, and responsive behavior.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.
No build step, framework, library, image asset, or JavaScript
dependency is required.

## Customization
The main design tokens are defined in `:root`:
* `--em-bg`
* `--em-surface`
* `--em-surface-hover`
* `--em-border`
* `--em-border-hover`
* `--em-text`
* `--em-muted`
* `--em-subtle`
* `--em-accent`
* `--em-accent-bright`
* `--em-accent-cyan`
* `--em-star`
* `--em-ease`
The example avatar uses initials so the component remains completely
self-contained.
Replace the initials inside `.avatar` with any short author
identifier, or replace the element with an image when integrating
the component into a real project.

## Accessibility
* Uses semantic `<article>` markup.
* The review text is contained inside a `<blockquote>`.
* The star rating has an accessible `aria-label`.
* Decorative quote and star characters are hidden from assistive
  technology where appropriate.
* Author information is presented as structured text.
* Reduced-motion preferences are respected.
