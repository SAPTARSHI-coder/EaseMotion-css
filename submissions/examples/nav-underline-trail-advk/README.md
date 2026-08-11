# Nav Underline Trail

## What does this do?

Navigation links whose underline grows outward from the centre on hover and
focus, with the current page permanently underlined.

## How is it used?

```html
<nav class="nut" aria-label="Docs">
  <a href="#a">Getting started</a>
  <a href="#d" class="is-current" aria-current="page">Components</a>
</nav>
```

## Why is it useful?

The popular version of this effect is a single shared indicator that slides
between links, which requires measuring each link's offset and width in
JavaScript and re-measuring on every resize or font load. It also behaves badly
when the nav wraps onto two lines, because a horizontal slide between rows cuts
diagonally across the layout.

Giving each link its own pair of half-underlines removes all measurement. The two
pseudo-elements are anchored at the centre and grow to 50% each, so the line
expands symmetrically regardless of the link's width, and a wrapped nav behaves
correctly because nothing travels between elements.

Pairing `.is-current` with `aria-current="page"` keeps the visual state and the
announced state together — a permanently underlined link that carries no
`aria-current` tells a screen reader user nothing about where they are.

Because the underline is `width` on an absolutely positioned pseudo-element
rather than `border-bottom` on the link, it never affects the link's box, so the
nav does not shift by a pixel when the effect engages.
