# Dynamic Modal with Neon Styling

A pure CSS cyberpunk-themed overlay modal dialog component. Operates seamlessly using CSS `:target` pseudo-class triggers and features ambient backdrop blurring, neon border glow effects, and responsive modal transitions. Built without JavaScript dependencies.

## How it works

The modal overlay (`.ease-modal-overlay`) leverages the CSS `:target` pseudo-class linked via an anchor trigger (`href="#ease-neon-modal"`). When activated, the modal transitions from `opacity: 0` to `opacity: 1`, while `.ease-modal-window` scales into place (`transform: scale(1)`). Closing the modal redirects back to `#`, resetting the `:target` state smoothly.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-neon-bg`: Outer dark background (`#030712`)
- `--ease-neon-card-bg`: Card surface background (`#0b0f19`)
- `--ease-neon-modal-bg`: Inner modal frame background (`#090d16`)
- `--ease-neon-border`: Boundary line color (`#1f293d`)
- `--ease-neon-cyan`: Primary cyan neon accent color (`#06b6d4`)
- `--ease-neon-magenta`: Secondary magenta badge accent color (`#ec4899`)
- `--ease-neon-duration`: Modal window transition speed (`0.4s`)

## Accessibility & Performance

- Fully accessible using semantic HTML5 tags (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), keyboard navigation, and close triggers.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables scale transform animations and backdrop transitions.