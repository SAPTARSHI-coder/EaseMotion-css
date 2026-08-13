# skip-link-advk

A "skip to main content" link mixin: hidden off-screen until it receives
keyboard focus, then pinned above the page so the first Tab stop on any
page lets keyboard users bypass repeated navigation.

## Usage

```scss
@use 'skip-link' as *;

.skip-link {
  @include skip-link;
}
```

```html
<a href="#main" class="skip-link">Skip to content</a>
<nav>...</nav>
<main id="main">...</main>
```

| Param | Default | Description |
|---|---|---|
| `$bg` | `#1c2028` | Background colour when focused. |
| `$color` | `#fff` | Text colour when focused. |
| `$z` | `999` | z-index, high enough to sit above sticky headers. |

## Why is it useful?

Skip links are frequently implemented with `display: none`, which removes
them from the accessibility tree entirely and defeats their purpose — a
keyboard user tabbing from the top of the page never reaches them. This
mixin instead moves the link off-screen with `top: -3rem` while it stays
focusable, and animates it into view on `:focus-visible`, so it's silent for
mouse/touch users but appears immediately for anyone tabbing through the
page.

Using `:focus-visible` rather than `:focus` keeps it from flashing into view
on a mouse click that happens to land on the link's hit area, and the
`forced-colors` branch swaps the hand-picked colours for system `ButtonFace`/
`ButtonText` so the link stays legible in Windows High Contrast mode instead
of rendering with author colours the user has explicitly overridden
elsewhere.
