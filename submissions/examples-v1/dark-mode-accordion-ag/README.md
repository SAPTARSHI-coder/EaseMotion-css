# Accordion — Native Dark Mode

Part of the "Add Native Dark Mode (prefers-color-scheme) for all 30 Components" effort (#55139), scoped to the **accordion** component.

## Files
- `demo.html` — accordion markup using native `<details>`/`<summary>`
- `style.css` — light theme by default, dark theme applied automatically via `@media (prefers-color-scheme: dark)`
- `README.md` — this file

## Usage
Open `demo.html` in a browser. Switch your OS/browser color scheme preference to see the accordion repaint automatically — no toggle button, no JS.

## Customization
All colors are exposed as CSS custom properties on `:root`, redefined inside the dark media query:
- `--accordion-bg`
- `--accordion-border`
- `--accordion-text`
- `--accordion-summary-bg`
- `--accordion-summary-hover`
- `--accordion-accent`
- `--accordion-radius`
- `--accordion-transition`

Override any of these in your own stylesheet to reskin the component.

## Accessibility
- Uses native `<details>`/`<summary>`, which is keyboard-operable and exposes correct expanded/collapsed semantics out of the box.
- Visible `:focus-visible` outline on the summary control.
- Color contrast checked against both light and dark palettes.

## Notes on scope
This PR only covers **accordion**. The parent issue lists 30 components; each is being submitted as its own separate PR/folder rather than one large PR, since this repo's contribution model is one new self-contained folder per submission (no edits to existing files).