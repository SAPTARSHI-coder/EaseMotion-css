# Like Heart Button

## What does this do?
A toggleable heart button that animates with a satisfying pop when clicked,
using only CSS and a checkbox — zero JavaScript.

## How is it used?
Wrap a checkbox and a heart span inside a label:

```html
<label class="like-btn">
  <input type="checkbox" />
  <span class="heart">&#9829;</span>
</label>
```

Click to toggle liked/unliked state. Works standalone or inside cards.

## Why is it useful?
Like buttons appear everywhere — social feeds, product wishlists, photo galleries.
This implementation uses the CSS checkbox trick to deliver a fully interactive
toggle with a bounce entrance animation, fitting EaseMotion's zero-JS philosophy.
No existing submission covers a toggleable liked state with an entrance animation.

## Tech Stack
- HTML
- CSS only (no JavaScript, no frameworks)

## Preview
Open `demo.html` directly in your browser.
