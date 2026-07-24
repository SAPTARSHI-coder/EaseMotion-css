# Zoom-In Popover (SaaS Style)

Pure CSS animated popover with a smooth zoom-in transition, addressing #46394.

## Files
- `demo.html` — trigger button + popover panel using the native HTML `popover` attribute and `popovertarget`
- `style.css` — zoom-in open/close animation, fully theme-able via CSS custom properties
- `README.md` — this file

## Usage
Open `demo.html` and click "Show plan details." The panel zooms in from `var(--popover-scale-start)` to full scale. Click "Close" or click outside to dismiss — all native browser behavior, zero JavaScript.

## Customization
Exposed as CSS custom properties on `:root`:
- `--popover-bg`, `--popover-text`, `--popover-border` — colors
- `--popover-shadow` — drop shadow
- `--popover-accent` — button/link accent color
- `--popover-radius` — corner rounding
- `--popover-scale-start` — starting scale factor for the zoom-in (default `0.85`)
- `--popover-duration` — animation duration (default `0.28s`)
- `--popover-easing` — timing function (default a slight overshoot cubic-bezier for a springy feel)

## Accessibility
- Uses the native HTML Popover API (`popover`, `popovertarget`, `popovertargetaction`), which handles focus management, `Esc`-to-close, and light-dismiss (click-outside) automatically.
- Trigger and close button both have visible `:focus-visible` outlines.
- No custom JS event handling means no risk of broken keyboard traps.

## Notes on scope
The Popover API (`popover` attribute, `:popover-open`, `@starting-style`) is a modern CSS/HTML feature and may not render the zoom transition in older browsers that lack support — in unsupported browsers the panel will still show/hide correctly (native fallback), just without the animated zoom-in. No JavaScript was used anywhere in this submission, per the "zero JavaScript overhead" requirement in the issue.