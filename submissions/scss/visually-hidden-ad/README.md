# Visually Hidden mixin

> Issue: [#63556](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63556)

Hides content visually while keeping it available to assistive technology, plus a complete skip-link implementation.

## Mixins

### `visually-hidden($focusable: false)`

```scss
.sr-only    { @include visually-hidden; }
.skip       { @include visually-hidden($focusable: true); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$focusable` | `Bool` | `false` | Reveal the element when it receives focus. Required for skip links. |

### `visually-hidden-reset`

Undoes the hiding — for when a utility is applied conditionally and must be neutralised at a breakpoint.

### `skip-link($bg, $color, $accent, $offset)`

A complete skip-to-content link: hidden until focused, then pinned to the top of the viewport.

```scss
.skip-to-content { @include skip-link; }
```

### `visually-hidden-utilities($prefix, $breakpoint)`

Emits `.sr-only-ad`, `.sr-only-ad-focusable`, and a responsive `.sr-only-ad-until-{bp}` variant.

## Why it fits EaseMotion

This is a mixin rather than three copied lines because **every naive approach is subtly wrong**:

| Approach | What breaks |
|---|---|
| `display: none` / `visibility: hidden` | Removes content from the accessibility tree too — the screen reader never sees it. |
| `text-indent: -9999px` | Creates a 9999px layout overflow, and breaks entirely in RTL. |
| `width: 0; height: 0` | Some engines skip zero-sized boxes when building the accessibility tree, so it can silently stop working. |

The 1px box with `clip-path: inset(50%)` survives all three. `white-space: nowrap` is part of the pattern, not decoration: without it a long string wraps inside the 1px box, and some engines truncate what they announce.

**The skip link uses `position: fixed`, not `absolute`.** This is the detail most implementations miss. An absolutely positioned skip link renders at the *document* top — so on a long page, by the time the user has scrolled and tabbed to it, the link appears somewhere far off-screen and seems to do nothing at all. `fixed` pins it to the viewport where it is actually visible.

`:focus` and `:focus-visible` are both matched, because a skip link reached by <kbd>Tab</kbd> must appear even in engines where `:focus-visible` heuristics would suppress it.
