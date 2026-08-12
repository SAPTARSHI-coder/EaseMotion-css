# link-underline-advk

Sass mixins for link underlines drawn with a background gradient instead of
`text-decoration` or `border-bottom`, so thickness, gap, and hover animation
are all controllable.

## Usage

```scss
@use 'link-underline' as *;

.body-link {
  @include link-underline($thickness: 0.06em, $gap: 0.18em);
}

.nav-link {
  @include link-underline-grow;
}
```

| Mixin | Behaviour |
|---|---|
| `link-underline` | Underline always visible, sits slightly lower on hover/focus. |
| `link-underline-grow` | Underline hidden at rest, grows in from the left on hover/focus. |

| Param | Default | Description |
|---|---|---|
| `$color` | `currentColor` | Underline colour. |
| `$thickness` | `0.08em` | Underline height, in `em` so it scales with font size. |
| `$gap` | `0.2em` (`0.15em` for `-grow`) | Space between text baseline and underline. |

## Why is it useful?

`text-decoration-line: underline` draws at a position and thickness the
browser controls, which can clip descenders (g, y, p) on some font/size
combinations, and animating its thickness isn't supported at all —
`text-decoration-thickness` isn't transitionable in most engines the way
`background-size` is. Drawing the underline as a `background-image`
positioned below the text with an explicit `$gap` avoids the descender
clipping, and because `background-size`/`background-position` are ordinary
animatable properties, both a "shift down slightly" hover effect and a
"grow in from nothing" effect fall out of the same technique.

`currentColor` as the default keeps the underline in sync with the link's
text colour automatically, including through `:visited`/dark-mode colour
changes, without a second colour value to keep in sync.
