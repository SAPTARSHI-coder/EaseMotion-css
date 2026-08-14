# scroll-margin-advk

A Sass mixin that sets `scroll-margin-top` on anchor targets, so jumping to
an in-page anchor doesn't leave the target heading hidden behind a
fixed/sticky header. Also sets `scroll-behavior: smooth` at the root,
disabled under `prefers-reduced-motion`.

## Usage

```scss
@use 'scroll-margin' as *;

h2[id] {
  @include scroll-margin-for-header($header-height: 3.5rem, $gap: 0.75rem);
}
```

| Param | Default | Description |
|---|---|---|
| `$header-height` | `4rem` | Height of the fixed/sticky header covering the top of the viewport. |
| `$gap` | `1rem` | Extra breathing room below the header. |

## Why is it useful?

`id`-based in-page navigation (`<a href="#section-2">`) scrolls the target
element flush to the top of the viewport by default, which puts it directly
under a fixed or sticky header — a longstanding annoyance usually patched
with a JS scroll-offset hack that recalculates on every click.
`scroll-margin-top` solves this natively: it's respected by both anchor
navigation and `Element.scrollIntoView()`, and by keeping the header height
as a single Sass parameter, every target element (headings, form fields, TOC
anchors) derives its offset from one source instead of duplicating a magic
pixel number.

`scroll-behavior: smooth` is gated behind
`prefers-reduced-motion: reduce` reverting it to `auto`, since smooth
scrolling is itself a motion effect some users have explicitly opted out of.
