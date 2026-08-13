# tag-pill-qz9k

Sass mixins for tag/pill badges deriving both a tinted background and a
readable text colour from a single accent colour, plus a solid-fill
variant.

## Usage

```scss
@use 'tag-pill' as *;

.tag-bug { @include tag-pill(#e0483f); }
.tag-feature { @include tag-pill(#34a853); }

.status-badge--live { @include tag-pill-solid(#f5a623); }
```

| Mixin | Look |
|---|---|
| `tag-pill($accent)` | Light tinted background, darkened accent text. |
| `tag-pill-solid($accent)` | Solid accent background, auto black/white text. |

## Why is it useful?

A tag system with many categories (bug/feature/docs labels, status
badges) usually wants each category to have a distinct colour, which means
picking a background/text pair *per tag* — and it's easy for one of those
pairs to end up with poor contrast if picked independently by eye, since a
colour that looks fine as an accent doesn't automatically produce readable
text against a background derived from it. `tag-pill` sidesteps
per-tag colour picking entirely: given one accent colour, `color.mix($accent,
white, 15%)` produces a light, low-saturation tint for the background, and
`color.adjust($accent, $lightness: -12%)` darkens the same accent for the
text — both derived from one input, so every tag automatically gets a
background/text pairing with a consistent, reasonable contrast
relationship regardless of which accent colour is chosen.

`tag-pill-solid` picks between black and white text automatically based on
the accent's own lightness channel (read via `color.channel($accent,
"lightness", $space: hsl)` — light accents like `#f5a623` get dark text;
dark accents get white text), rather than requiring a second colour
parameter — a caller only ever supplies the one accent colour they
actually care about, and the mixin works out what's readable against it.

## The 60% lightness threshold is a heuristic, not a guarantee

Picking black-or-white text based on a single lightness threshold is a
reasonable default that works for most saturated accent colours, but it's
a heuristic, not a WCAG contrast guarantee — a colour near the 60%
boundary, or a low-saturation colour whose perceived brightness doesn't
track its HSL lightness value closely, can still land on a text/background
pairing with borderline contrast. For a design system with strict
accessibility requirements, verify contrast on the actual accent palette
in use (rather than trusting the threshold blindly for arbitrary future
accent colours), or use `tag-pill` (the tinted variant) instead, which
always pairs a light background with darkened text of the same hue and
tends to land in a safer contrast range across a wider variety of inputs.

## Extending with a border for low-contrast environments

Both mixins can be paired with a subtle border to keep the pill's edge
distinguishable from its surroundings under `forced-colors` or a
high-contrast OS theme, since `background`/`color` alone can be overridden
entirely by a forced-colors palette:

```scss
.tag-status {
  @include tag-pill-solid(#34a853);

  @media (forced-colors: active) {
    forced-color-adjust: none;
    border: 1px solid CanvasText;
  }
}
```

## Usage in a filterable tag list

Combined with the `useArray`/`toggle` pattern from `use-array-qz9k`, these
mixins pair naturally with a multi-select tag filter where each tag's pill
colour also communicates its category at a glance, independent of whether
it's currently selected.
