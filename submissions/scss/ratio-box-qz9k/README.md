# ratio-box-qz9k

A Sass mixin exposing common aspect ratios (video, square, portrait,
photo, golden, ultrawide) by name, backed by a single `$ratio-box-presets`
map, rather than requiring every call site to spell out raw ratio numbers.

## Usage

```scss
@use 'ratio-box' as *;

.video-embed { @include ratio-box('video'); }
.profile-photo { @include ratio-box('square'); }
.hero-banner { @include ratio-box('ultrawide'); }
```

Passing an unrecognized preset name fails loudly at compile time via
`@error`, rather than silently producing no ratio:

```scss
.broken { @include ratio-box('widescreen'); }
// Error: ratio-box: unknown preset 'widescreen'. Available: "video", "square", ...
```

## Why is it useful?

A codebase using `aspect-ratio: 16 / 9` directly at every video-embed call
site works, but the actual ratio value becomes a magic number repeated
across however many places embed a video — if a design system later
standardizes on a slightly different ratio, or a typo introduces `16 / 6`
somewhere, there's no single place to catch or fix it. Centralizing the
approved ratios in one `$ratio-box-presets` map means every consumer
requests a *named* ratio ("video", "square") rather than a raw number, so
the actual values live in exactly one place, and requesting a ratio the
design system hasn't approved is a compile error rather than a silently
accepted arbitrary number.

The `@error` on an unrecognized preset (rather than silently emitting
nothing) is a deliberate choice: aspect-ratio bugs are otherwise easy to
miss visually until the specific element renders unexpectedly, and a
compile-time failure surfaces a typo'd preset name immediately rather than
during a later visual review.

## Why the ratios are stored as strings, not numbers

```scss
$ratio-box-presets: (
  'video': '16 / 9',
  ...
);
```

The values are quoted CSS-syntax strings, interpolated directly into the
`aspect-ratio` declaration via `#{...}`, rather than computed as Sass
numbers via `math.div(16, 9)`. That's a deliberate choice specific to this
mixin: these values are never used in further Sass arithmetic — they pass
straight through to a CSS property that itself expects the `W / H`
syntax — so parsing them as Sass numbers first, only to re-serialize them
back into that same syntax, would add a conversion step with no benefit.
Storing them as the exact string CSS expects keeps the map's values
literally identical to what ends up in the compiled output.

## Extending the preset list

Adding a new named ratio is a one-line addition to the map, with no
changes needed to the mixin itself:

```scss
$ratio-box-presets: map.merge($ratio-box-presets, (
  'a4-page': '210 / 297',
));
```

Using `map.merge` rather than editing the original map declaration keeps a
project-specific extension separate from the base preset file, which
matters if this partial is ever updated from an upstream source and local
additions need to survive that update without a merge conflict in the
preset map itself.

## Fallback for engines without aspect-ratio support

`aspect-ratio` has broad support in current browsers, but for an older
target, this mixin doesn't include a fallback — pairing it with the
`aspect-cover-qz9k`/`aspect-ratio-fallback` mixins elsewhere in this set
(which implement the classic padding-top intrinsic-ratio technique inside
an `@supports not (...)` block) is the way to add one, since this mixin's
scope is specifically the named-preset lookup, not ratio-fallback logic
that's already handled elsewhere.
