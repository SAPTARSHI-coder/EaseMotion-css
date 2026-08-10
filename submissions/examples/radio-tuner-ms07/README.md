# CSS Retro Radio Station Tuner

A retro-styled FM tuner dial with a sliding needle and digital-style
frequency readout, built entirely with CSS using native `<input
type="radio">` elements for station selection — no JavaScript.

## Files

- `demo.html` — standalone demo page
- `style.css` — all styles (prefixed with `ease-`)

## How it works

- Five stations are modeled as a native radio group, visually hidden
  but still real, focusable form controls.
- Each radio's label is styled as a rounded "preset" pill; the
  currently checked one is highlighted via `:checked +
  .ease-tuner-preset-label`.
- The needle's horizontal position is a CSS custom property,
  `--ease-needle-pos`, animated with `transition: left 0.6s`. Each
  station sets a different value for it via sibling selectors.
- The digital readout (frequency + station name) is generated with
  `content` on `::before` pseudo-elements, swapped per station the
  same way.

## Interactivity (no JavaScript)

Click any preset pill, or Tab into the station group and use the
Arrow keys — native radio group behavior, no custom JS needed.

## Accessibility

- Wrapped in a `<fieldset>`/`<legend>`, real `<label for="">` pairs.
- Readout is `role="status" aria-live="polite"` so station changes
  are announced.
- Visible `:focus-visible` outline on preset labels.
- Decorative tick scale is `aria-hidden="true"`.
- Needle glow animation disabled under `prefers-reduced-motion: reduce`.

## Responsive behavior

Caps at 480px width, shrinks fluidly; font/padding scale down under
`max-width: 420px`.

## Customization

| Property | Purpose |
|---|---|
| `--ease-tuner-bg` | Outer case background color |
| `--ease-tuner-panel` | Dial face / text color |
| `--ease-tuner-accent` | Active preset highlight color |
| `--ease-tuner-needle` | Needle color/glow |
| `--ease-needle-pos` | Needle position (0–100%) per station |