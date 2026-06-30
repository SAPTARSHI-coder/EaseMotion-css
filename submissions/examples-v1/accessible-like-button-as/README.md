# Accessible Like Button (-as)

## What does this do?

A like/favourite toggle, built on a real checkbox, that plays a heart "pop" and an expanding burst when liked - keyboard operable and screen-reader friendly, with no JavaScript.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="ease-like-demo" class="ease-like__input" />
<label for="ease-like-demo" class="ease-like">
  <span class="ease-like__burst" aria-hidden="true"></span>
  <svg
    class="ease-like__heart"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12 21s-7.4-4.6-9.4-9C1.1 8.6 2.6 5.6 5.6 5.6c1.9 0 3.2 1.1 4.4 2.6 1.2-1.5 2.5-2.6 4.4-2.6 3 0 4.5 3 3 6.4-2 4.4-9.4 9-9.4 9z"
    />
  </svg>
  <span class="ease-like__text ease-like__text--off">Like</span>
  <span class="ease-like__text ease-like__text--on">Liked</span>
</label>
```

The hidden `<input type="checkbox">` does the work: `Tab` moves focus to it and `Space` toggles it. The `:checked` state drives the colour, the heart pop, the burst rings, and the `Like` to `Liked` text swap via sibling selectors.

## Why is it useful?

Like buttons are one of the most common micro-interactions, but they are usually built from a `<div>` or a hover-only effect, which keyboard and screen-reader users cannot operate. This version is accessible by construction: a native checkbox provides focus and toggling for free, the keyboard focus ring is visible, and the announced state stays correct. The animation is pure CSS and respects `prefers-reduced-motion` (the burst and pop are dropped, leaving just the colour change), which fits EaseMotion's animation-first but accessible and zero-dependency philosophy.
