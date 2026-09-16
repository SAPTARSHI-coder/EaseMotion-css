# Tab Pill Switcher
A responsive, dependency-free tab indicator component for the
EaseMotion CSS gallery.

## Features
- Pure HTML and CSS.
- No JavaScript dependencies.
- Three interactive tabs.
- Sliding active pill background.
- Accent underline animation.
- Responsive mobile layout.
- CSS-only content switching.
- Visible keyboard focus states.
- Smooth state transitions.
- `prefers-reduced-motion` support.
- EaseMotion-style CSS custom properties.

## Files
- `demo.html` — semantic tab demo and interactive controls.
- `style.css` — component styling, transitions, responsive behavior,
  and animations.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.

The tabs use visually hidden radio inputs and labels, allowing the
active state and content to be controlled entirely with CSS.

## Customization
The main design tokens are defined in `:root`:
- `--em-bg`
- `--em-surface`
- `--em-border`
- `--em-border-hover`
- `--em-text`
- `--em-muted`
- `--em-accent`
- `--em-accent-bright`
- `--em-accent-cyan`
- `--em-accent-soft`
- `--em-ease`

These can be mapped to existing EaseMotion CSS variables during
integration.

## Accessibility
The controls are native radio inputs with associated labels, which
makes the component keyboard-operable.

Visible `:focus-visible` styling is included, and the component
respects `prefers-reduced-motion: reduce`.

The visual `role="tab"` attributes are included for the gallery demo,
but a production-grade ARIA tab implementation should use the full
tablist/tab/tabpanel keyboard interaction pattern, including arrow-key
navigation and programmatic selection.
