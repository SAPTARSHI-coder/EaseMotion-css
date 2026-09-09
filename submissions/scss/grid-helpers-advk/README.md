# grid-helpers-advk

Intrinsic layout mixins that respond to available space rather than to viewport
breakpoints.

## API

| Mixin | Purpose |
|---|---|
| `auto-grid($min, $gap, $fill)` | Wrapping columns, no media queries. |
| `stack($align, $justify)` | All children on one grid cell. |
| `content-grid($content, $gutter, $wide)` | Centred column with full-bleed escapes. |
| `card-rows($body-row)` | Equal-height cards with pinned footers. |
| `sidebar($side, $content-min, $gap)` | Sidebar that collapses on its own. |

## Usage

```scss
@use "grid-helpers-advk" as g;

.gallery { @include g.auto-grid(12rem, 0.75rem); }
.crossfade { @include g.stack; }
.article { @include g.content-grid; }
.card { @include g.card-rows; }
.layout { @include g.sidebar(18rem); }
```

```html
<div class="article">
  <p>Normal width</p>
  <figure class="full">Edge to edge</figure>
</div>
```

## Why it fits EaseMotion CSS

Every one of these avoids a media query, which matters for a component library:
breakpoints key off the viewport, but a component does not know how much space it
has been given. A card grid inside a sidebar should wrap at a different point than
the same grid full-width, and viewport queries cannot express that.

`auto-grid` includes the `min($min, 100%)` guard that most `auto-fill` snippets
omit. Without it, a `minmax(14rem, 1fr)` grid overflows horizontally the moment
its container is narrower than 14rem — common inside a drawer or a narrow column.

`stack` is the correct primitive for crossfades: absolutely positioning stacked
layers removes them from flow so the parent collapses to zero height, whereas grid
items sharing `grid-area: 1 / 1` still contribute their size.

`sidebar` uses the `flex: 999` ratio trick so the content region wins available
space until it drops below its minimum, at which point the layout wraps on its own
— a genuine container-driven breakpoint with no query at all.
