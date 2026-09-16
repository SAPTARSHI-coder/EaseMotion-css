# Fade Scale Modal
A self-contained modal animation component for the EaseMotion CSS gallery.

## Features
- Fade and scale entrance animation.
- Animated backdrop with optional blur.
- Pure HTML and CSS.
- No JavaScript or external dependencies.
- Uses native `<details>` and `<summary>` for the demo toggle.
- Responsive modal layout.
- Mobile bottom-sheet presentation.
- Keyboard-accessible native controls and links.
- Visible `:focus-visible` states.
- `prefers-reduced-motion` support.
- EaseMotion-style CSS custom properties.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.
The demo uses `<details>` to provide the open/close state without
JavaScript.

## Customization
The main component tokens are defined in `:root`:
- `--em-bg`
- `--em-surface`
- `--em-border`
- `--em-text`
- `--em-muted`
- `--em-accent`
- `--em-accent-bright`
- `--em-accent-soft`
- `--em-ease`
- `--em-radius`

These can be mapped to existing EaseMotion design tokens during
gallery integration.

## Accessibility
The demo uses native disclosure semantics, native links, visible
focus indicators, and dialog semantics.
Because this example intentionally avoids JavaScript, it does not
implement a full application-level focus trap or programmatic focus
restoration.
For a production modal requiring strict focus management, the native
`<dialog>` API or an appropriately managed JavaScript implementation
should be considered.
The animation is minimized when
`prefers-reduced-motion: reduce` is active.
