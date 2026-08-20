# line-height-crop-qz9k

A Sass mixin that removes the extra vertical space `line-height` adds
above and below text, so a heading's box matches its actual glyph bounds
rather than including built-in "leading" inherited from print typesetting.

## Usage

```scss
@use 'line-height-crop' as *;

.hero-title {
  @include line-height-crop($line-height: 1.2, $font-size: 3rem);
  font-size: 3rem;
}
```

| Param | Default | Description |
|---|---|---|
| `$line-height` | `1.4` | The element's own line-height. |
| `$font-size` | `1rem` | The element's font-size (informational; sizing is expressed in `em` relative to it). |
| `$cap-height` | `0.73` | Fraction of font-size from baseline to cap height, typeface-specific. |
| `$ascender` | `0.9` | Fraction of font-size from baseline to the tallest ascender, typeface-specific. |

## Why is it useful?

`line-height` reserves space above and below the actual glyph shapes —
useful for body text, where that breathing room improves readability
across multiple lines, but often unwanted for large display headings where
designers expect the text box to hug the visible letterforms tightly (to
align precisely with an adjacent icon, or to control margin spacing
exactly). The mismatch between a heading's `line-height`-inflated box and
its visual glyph bounds is a common source of "why is there invisible
space above my heading that I can't get rid of with margin alone" bugs.

The crop amount depends on the specific typeface's metrics (cap height and
ascender height as fractions of font-size), which differ between fonts —
the defaults here approximate a typical system-ui/Inter-style sans-serif,
but a pixel-accurate crop for a different typeface needs its own measured
values, obtainable from the font's own metadata (many type foundries
publish these) or by rendering sample text and measuring the visual gap
directly in a browser dev tools inspector. This is why the mixin exposes
`$cap-height`/`$ascender` as parameters rather than hard-coding them — the
correct numbers are typeface-specific, not universal.

## Measuring metrics for a specific typeface

A practical way to derive `$cap-height`/`$ascender` for a typeface not
already covered by the defaults:

1. Render a sample string in the target typeface at a known `font-size`
   (e.g. `100px`, so measured pixel values convert to fractions directly).
2. Using browser dev tools, measure the pixel distance from the text
   baseline up to the top of a capital letter (cap height) and separately
   to the top of a tall lowercase letter like `h` or `l` (ascender height).
3. Divide each measurement by the `font-size` used to get the fraction —
   a cap height of 68px at 100px font-size is `$cap-height: 0.68`.

Font foundries and some web font services also publish these metrics
directly in font metadata (`OS/2` table `sCapHeight`/`sTypoAscender`
values), which is more precise than visual measurement if that data is
available for the specific font in use.

## Why this only crops single-line text well

The technique crops space above the first line and below the last line of
a text block, using the font's own ascender/cap-height relationship — it
doesn't compensate for the *inter-line* spacing multi-line text still
needs between wrapped lines, which is exactly what `line-height` is
supposed to provide there. Applying this crop to genuinely multi-line body
text removes the extra space at the very top and bottom of the whole block
while leaving line-to-line spacing untouched, which is the intended
behavior for a heading that happens to wrap, but worth confirming matches
intent before applying broadly to paragraph-level text.

## Browser rendering variance

Because the technique relies on approximated typeface metrics rather than
metrics read live from the actual rendered font, the crop can be
imprecise by a pixel or two across different browsers/OS font-rendering
engines, particularly for system font stacks where the exact rendered
typeface varies by platform. For a design system that needs pixel-perfect
consistency across every browser, treat this as a close approximation
rather than an exact guarantee, and verify visually on each target
platform.
