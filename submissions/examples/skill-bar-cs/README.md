# Skill Bar
A responsive, dependency-free skill/progress bar component for the
EaseMotion CSS gallery.

## Features
- Pure HTML and CSS.
- No JavaScript or external dependencies.
- Stacked skill bars with labels and percentages.
- Fill expands to 100% on hover.
- Gradient fill with subtle glow.
- Animated highlight sweep on hover.
- Responsive layout.
- Accessible progressbar semantics.
- `prefers-reduced-motion` support.
- EaseMotion-style CSS custom properties.

## Files
- `demo.html` — self-contained interactive demonstration.
- `style.css` — component styling, hover effects, and responsive
  behavior.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.
The component does not require a build step, framework, library, or
JavaScript dependency.

## Customization
The primary design tokens are defined in `:root`:
- `--em-bg`
- `--em-surface`
- `--em-track`
- `--em-border`
- `--em-border-hover`
- `--em-text`
- `--em-muted`
- `--em-accent`
- `--em-accent-bright`
- `--em-accent-cyan`
- `--em-ease`

Each skill also has its own CSS custom property controlling its
initial fill percentage.
For example:
```css
.fill-html {
  --skill-width: 95%;
}