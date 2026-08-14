# neumorphic-shadow-qz9k

Sass mixins for the soft-UI/"neumorphic" dual-shadow look, deriving both
shadow colours from a single base background instead of requiring them to
be hand-picked.

## Usage

```scss
@use 'neumorphic-shadow' as *;

.soft-card {
  @include neumorphic-raised($bg: #eef0f4);
}

.soft-button:active {
  @include neumorphic-inset($bg: #eef0f4);
}
```

| Param | Default | Description |
|---|---|---|
| `$bg` | `#e6e9ef` | Base background — both shadow colours are derived from this. |
| `$distance` | `8px` (raised) / `6px` (inset) | Shadow offset. |
| `$blur` | `16px` (raised) / `12px` (inset) | Shadow blur radius. |
| `$radius` | `1rem` | Corner radius. |

## Why is it useful?

The neumorphic look depends entirely on its two shadows reading as
consistent light-from-one-direction lighting on a surface that's the *same
colour as its background* — get the light/dark shadow colours even slightly
wrong relative to that background and the effect looks muddy or like a
generic double-shadow rather than a soft embossed surface. Most examples of
this style require picking both shadow colours by hand for every new
background colour, which is exactly the kind of manual-consistency
requirement that drifts the moment a design's palette changes.

Deriving the light shadow via `color.adjust($bg, $lightness: +8%)` and the
dark shadow via `color.adjust($bg, $lightness: -10%)` means both shadows
are always correctly related to whatever `$bg` is passed — changing the
base colour automatically keeps both shadows in the right relationship to
it and to each other, with no separate colour values to maintain.

The `-inset` variant exists for a "pressed" state (a toggle already active,
a button mid-click): the same light/dark logic with `inset` box-shadows
reads as a surface pressed *into* the background rather than raised above
it, giving the paired raised/pressed states real visual continuity.

## Pairing raised and inset for an interactive button

```scss
.soft-toggle {
  @include neumorphic-raised($bg: #eef0f4, $distance: 5px, $blur: 10px);
  border: none;
  padding: 0.9em 1.6em;
  transition: box-shadow 160ms ease;

  &:active,
  &.is-active {
    @include neumorphic-inset($bg: #eef0f4, $distance: 5px, $blur: 10px);
  }
}
```

Passing matching `$bg`/`$distance`/`$blur` values to both mixin calls keeps
the raised and pressed states visually consistent — mismatched parameters
between the two (a wider blur on one than the other, say) breaks the
illusion that it's the same physical surface simply moving between two
states.

## Why this doesn't work well on every background

Neumorphism depends on the light and dark shadow colours being
*perceptible but subtle* variations of the surface colour — which works
well against a mid-tone, fairly desaturated background (the soft greys this
mixin defaults to) and works poorly against a very dark or very saturated
background, where an 8%/10% lightness shift either disappears entirely
(too dark to show a lighter highlight) or produces shadows so strong they
stop reading as soft. This isn't something the mixin can fully compensate
for automatically — if a design's background falls outside roughly the
mid-lightness range, the `$distance`/`$blur` parameters may need
significant manual adjustment, or the technique may not suit that palette
at all.

## Accessibility consideration

Neumorphic surfaces rely on subtle shadow-based contrast rather than a
visible border or a strong background-colour difference to distinguish
interactive elements from their surroundings, which can fail WCAG contrast
requirements for input boundaries and can be genuinely hard to perceive for
users with low vision. Pairing this mixin with a visible `:focus-visible`
outline (not included here, since it's a separate concern from the shadow
styling itself) and considering a `prefers-contrast: more` fallback that
swaps in a real border are both worth adding on top of this mixin for
production use, rather than relying on the shadows alone to communicate
where a control's edges are.
