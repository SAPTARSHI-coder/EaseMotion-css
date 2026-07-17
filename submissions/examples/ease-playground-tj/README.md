# EaseMotion Playground (`ease-playground-tj`)

## What
A self-contained, dependency-free interactive tool for previewing and tuning
EaseMotion-style animations directly in the browser, with a one-click CSS
copy button.

## How
- Runs entirely client-side — open `demo.html` directly, no build step or CDN.
- State is centralized in a single JS object and rendered through one
  `render()` function, rather than scattered inline event handlers, so the
  preview, generated CSS, and live keyframes never drift out of sync.
- `@keyframes` are generated dynamically at runtime via the CSSOM
  (`sheet.insertRule`) instead of being hardcoded, so any control change
  regenerates the actual animation rule used by the preview.
- Settings can be shared via a URL query string (`?duration=800&rotate=360...`)
  so a specific configuration can be sent as a link and reproduced exactly.
- Presets can be exported as JSON for reuse outside the browser session.
- CSS output copies via the Clipboard API with an `execCommand` fallback for
  older browsers, and confirms success through an `aria-live` status region.
- Layout is responsive (`grid-template-columns` collapses to one column under
  700px) and theming (light/dark) is handled entirely through CSS custom
  properties switched via `[data-theme="dark"]`.
- `prefers-reduced-motion` is respected — animation is disabled for users who
  request it at the OS level.
- All interactive controls are native form elements, so the whole tool is
  keyboard-operable and screen-reader labeled without extra ARIA scaffolding.

## Why
Most animation playgrounds either require a build step or lock configuration
inside JS you can't share. This tool treats the animation state as portable
data (URL params, JSON export) rather than throwaway UI state, so a
configuration a user lands on can be shared, saved, or reused — while still
being a single HTML file with zero dependencies.