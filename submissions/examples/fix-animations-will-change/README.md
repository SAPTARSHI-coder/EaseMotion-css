# Fix: Move will-change to :hover State in ease-hover-morph-card

## Problem

`core/animations.css` applied `will-change: border-radius, transform` statically on `.ease-hover-morph-card`:

```css
.ease-hover-morph-card {
  will-change: border-radius, transform; /* always on — wastes GPU memory */
}
```

`will-change` hints the browser to promote an element to a GPU compositing layer permanently. Applying it statically means every `.ease-hover-morph-card` on the page is GPU-promoted even at rest.

## Solution

Move `will-change` to the `:hover` state so GPU promotion only happens just before the animation:

```css
.ease-hover-morph-card {
  /* No will-change here */
  transition: border-radius ..., transform ...;
}

@media (hover: hover) and (pointer: fine) {
  .ease-hover-morph-card:hover {
    will-change: border-radius, transform;
  }
}
```

## Usage

No class changes needed:

```html
<div class="ease-hover-morph-card">Hover me</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS prioritises performance. Static `will-change` on component selectors causes unnecessary GPU overhead on every page that uses the framework. Moving it to `:hover` follows the recommended browser guidance: set `will-change` just before the animation, let the browser clean up after.

Fixes #10250
