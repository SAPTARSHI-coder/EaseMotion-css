# Counter Digit Roll

An odometer-style digit roll counter. Each digit position contains a vertical strip of digits 0–9 that scrolls into view via `translateY` driven by a `--cdr-value` custom property.

## Features

- Roll-up animation on each digit via CSS `transform` transition
- Overflow-hidden viewport per digit position with inset shadow shading
- Driven entirely by `--cdr-value` inline custom property — no animation class toggling
- Respects `prefers-reduced-motion`

## Usage

Each `.cdr-strip` holds digits 0–9 stacked vertically. Set `--cdr-value` on the strip to the target digit (0–9). The strip translates so the matching digit aligns inside the `.cdr-digit` viewport.

```css
.cdr-strip {
  transform: translateY(calc(var(--cdr-value) * -1 * var(--cdr-digit-height)));
  transition: transform var(--cdr-transition-duration) ease;
}
```

Custom properties available on `:root`:

| Variable | Default | Description |
|---|---|---|
| `--cdr-digit-height` | `72px` | Height of each digit and viewport |
| `--cdr-digit-color` | `#e2e8f0` | Digit text color |
| `--cdr-bg-color` | `#1e293b` | Digit cell background |
| `--cdr-transition-duration` | `0.4s` | Roll animation duration |
| `--cdr-font-size` | `2.25rem` | Digit font size |
