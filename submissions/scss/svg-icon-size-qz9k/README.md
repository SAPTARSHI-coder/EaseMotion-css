# svg-icon-size-qz9k

Sass mixins for consistent SVG icon sizing — a named-size scale (sm/md/lg/xl)
for standalone icons, and an em-relative variant for icons meant to match
their surrounding text size.

## Usage

```scss
@use 'svg-icon-size' as *;

.nav-icon { @include svg-icon-size('lg'); }

.btn-icon { @include svg-icon-inline; }         // matches the button's own font-size
.btn-icon--large { @include svg-icon-inline(1.3); }
```

| Mixin | Sizing basis |
|---|---|
| `svg-icon-size($size)` | Fixed rem value from the named scale, independent of surrounding text. |
| `svg-icon-inline($ratio)` | `em`-relative to the current `font-size`, scales with surrounding text. |

## Why is it useful?

An icon set with ad-hoc pixel sizes scattered across a codebase (`width:
18px` here, `width: 20px` there) tends to drift into a slightly
inconsistent visual rhythm as more icons get added by different people —
the named-size scale in `$svg-icon-sizes` gives every icon a value from one
shared, intentional set instead. An unrecognized size name fails at
compile time via `@error`, the same defensive pattern used elsewhere in
this set (`ratio-box-qz9k`), catching a typo'd size name immediately
rather than during visual review.

`svg-icon-inline` solves a different, more specific problem: an icon sitting
inline with text (inside a button, a paragraph, a heading) usually needs
to scale *with* that text — a button icon at `font-size: 0.875rem` should
be visibly smaller than the same icon inside a `font-size: 1.5rem`
heading, which a fixed rem size can't express without an override at every
different font-size context the icon appears in. Sizing in `em` ties the
icon directly to whatever `font-size` is currently in effect, so it scales
automatically wherever it's placed. The `vertical-align: -0.15em` nudges
the icon down slightly to visually center it against the text baseline,
compensating for the difference between an SVG's default inline baseline
alignment and where text glyphs actually sit.

## Choosing between the two mixins

As a rule of thumb: `svg-icon-size` for icons that stand alone or sit in a
UI region with its own independent scale (a sidebar nav, a toolbar) where
consistent absolute sizing across the whole region matters more than
matching one specific piece of adjacent text. `svg-icon-inline` for icons
genuinely inline with text content, where visually matching that text's
size is the more important property, and the surrounding font-size can
vary by context (an icon reused in both button and heading contexts,
say).

```scss
.sidebar-nav-icon { @include svg-icon-size('md'); }

.error-message-icon { @include svg-icon-inline; } // scales with the error text's own font-size
```

## Adding a size to the shared scale

Extending the named scale for a specific project is a `map.merge` away,
following the same pattern used by other named-preset mixins in this set
(`ratio-box-qz9k`):

```scss
$svg-icon-sizes: map.merge($svg-icon-sizes, (
  '2xl': 3.5rem,
));
```

## Aspect ratio assumption

Both mixins set `width` and `height` to the same value, which assumes
every icon in the set is authored as a square SVG viewBox — true for the
overwhelming majority of icon sets, but worth confirming for a
non-square icon (a wordmark logo, a wide badge), which would need
`width`/`height` set independently rather than through either of these
mixins as written.

## Why flex: none

Both mixins set `flex: none` unconditionally, which prevents the icon from
being stretched or shrunk by a flex parent's default `flex: 1 1 auto`
sizing behavior — without it, an icon placed inside a flex container
(a button with `display: flex` aligning its icon and label) can end up
distorted from its intended aspect ratio if the container's available
space doesn't exactly match the icon's natural size.
