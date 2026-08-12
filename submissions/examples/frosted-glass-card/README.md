# Frosted Glass Card

`.ease-glass-card` — a semi-transparent card using a real
`backdrop-filter: blur()`, so whatever's actually behind it in the page
shows through, softened, rather than a fake pre-blurred background image
standing in for the effect. Pure CSS.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Three cards (default, dark, tinted) over a colorful backdrop |
| `style.css` | The component, its variants, and the demo backdrop |
| `README.md` | This file |

## Usage

```html
<article class="ease-glass-card">
  <span class="ease-glass-card__badge">New</span>
  <h2 class="ease-glass-card__title">Cloud sync</h2>
  <p class="ease-glass-card__text">Every change saves instantly across all your devices.</p>
  <a href="#" class="ease-glass-card__link">Learn more &rarr;</a>
</article>
```

**Glassmorphism needs something to blur.** This component makes no
assumptions about what's behind it — the demo ships an animated
gradient backdrop specifically so the effect is visible at all, but in a
real page `.ease-glass-card` would just as happily sit over a photo, a
video, or any other content. Put it over a plain flat background and the
blur has nothing to do; it'll just look like a slightly translucent box.

## The core declarations

```css
.ease-glass-card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px); /* Safari still needs the prefix */
  box-shadow:
    0 20px 40px -20px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
```

The `inset` shadow is doing real work here, not just extra polish — a
1px inner highlight along the top edge is what makes a flat translucent
box start reading as a physical pane of glass catching light, rather than
just a semi-transparent rectangle.

## CSS custom properties

| Property | Default | Controls |
|---|---|---|
| `--gc-glass-bg` | `rgba(255,255,255,0.12)` | The glass tint itself |
| `--gc-glass-border` | `rgba(255,255,255,0.35)` | Edge highlight |
| `--gc-glass-blur` | `14px` | Backdrop blur radius |
| `--gc-duration` / `--gc-ease` | `240ms` / custom curve | Hover transition |

## Variants

- `.ease-glass-card-dark` — a darker glass tint, for use over lighter
  backdrops where white-tinted glass would wash out.
- `.ease-glass-card-tinted` — mixes a color (violet, by default) into the
  glass itself while staying translucent, rather than just changing the
  border/badge accent.

Both are two-line overrides on the same base component — no duplicated
structure.

## Accessibility

- `:focus-within` puts a visible outline on the whole card when its
  internal link is focused, not just a default browser outline on the
  link alone — easier to see against a busy, blurred backdrop.
- Text colors (`--gc-text`, `--gc-text-muted`) are chosen for contrast
  against the specific backdrop this demo ships; a project reusing this
  component over a different backdrop should re-check contrast, since
  glass-over-arbitrary-content is inherently a contrast risk no fixed
  color choice can fully solve on its own.
- Respects `prefers-reduced-motion: reduce`: the backdrop's ambient drift
  animation stops, and the hover lift transition collapses to `1ms`.

## Fallback for unsupported browsers

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .ease-glass-card {
    background: rgba(20, 22, 28, 0.72);
  }
}
```

Where `backdrop-filter` isn't supported at all, the card falls back to a
solid-looking dark translucent panel instead of a fully see-through box
with illegible text over a busy backdrop.

## Responsive behavior

The card grid drops from three columns to two at `760px` and to one at
`520px`.

## Browser support

`backdrop-filter` needs the `-webkit-` prefix on Safari (included above)
and is otherwise supported in all current evergreen browsers. The
`@supports` fallback covers anything older.