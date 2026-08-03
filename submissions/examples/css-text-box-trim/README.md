# CSS `text-box-trim` & `text-box-edge` — Optical Alignment

A showcase of `text-box-trim` and `text-box-edge`, two CSS properties
that trim the invisible whitespace above and below text. Eliminates
the need for negative margins, magic-number padding hacks, or
`line-height: 1` workarounds to achieve pixel-precise vertical
alignment.

## What `text-box-trim` does

Every font includes internal metrics space — ascender height above
capitals and descender depth below baselines. This space is rendered
as part of the text's inline box, even when no glyphs occupy it.

`text-box-trim: both` trims that space, making the box hug the
actual visible glyphs:

```css
.trimmed {
  text-box-trim: both;
  text-box-edge: text;
}
```

- `text-box-trim: both` — trim above and below the text
- `text-box-edge: text` — trim to the edge of the rendered text

This is part of CSS Inline Layout Level 3 (draft).

## Demo sections

| Section | What it shows |
|---------|--------------|
| **Buttons** | Fill and outline buttons — before/after trim comparison |
| **Headings** | Heading box boundaries with and without trimming |
| **Badges & Tags** | Small UI elements where vertical precision matters most |
| **Ruler Comparison** | Dashed box-boundary visualization (red = standard, green = trimmed) |
| **Design System** | Alert components — identical padding values, visibly tighter output |

## Why this matters for design systems

With `text-box-trim`, designers can specify exact pixel padding and
get exactly that — no compensating for the font's internal leading.
This eliminates the "why is there extra space?" conversation for
every button, badge, and input component.

## Browser support

- Chrome 133+ (shipping behind a flag)
- Firefox — experimental support
- Safari — under consideration

Experimental — progressive enhancement with `@supports`.

## Why it fits EaseMotion CSS

- **Pure CSS** — zero JavaScript for alignment.
- **Zero dedicated demos** — no `text-box-trim` or `text-box-edge`
  usage exists anywhere in `submissions/examples/`.
- **Production-minded** — focused on real-world design-system
  problems, not abstract demos.
- **Accessible** — full dark mode, contrast, forced-colors, print.

## Accessibility

- `@media (prefers-color-scheme: dark)` full dark theme.
- `@media (prefers-contrast: high)` strengthened borders.
- `@media (forced-colors: active)` system color overrides.
- `@media print` stripped decorative styles.

## Files

- `demo.html` — five comparison sections with before/after pairs.
- `style.css` — all text-box-trim declarations and theming.
- `README.md` — this file.
