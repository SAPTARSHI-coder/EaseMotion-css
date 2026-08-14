# Animated Star Rating Widget

A fully interactive 5-star rating widget using the radio-button CSS trick — no JavaScript required for selection, hover preview, or animation.

## Features

- ⭐ Click any star to select a rating; hover previews the rating before committing
- ✨ Stars pop with a small bounce animation on hover
- 🎯 Built on real `<input type="radio">` elements, so it's keyboard-accessible and form-submittable
- 📱 Responsive — star size scales down on small screens
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Stars must be written in **descending value order** (5 down to 1) in the HTML, then laid out with `flex-direction: row-reverse` so they display left-to-right correctly — this is what allows the sibling selector trick to highlight "this star and everything before it":

```html
<div class="star-rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5" title="5 stars">★</label>

  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4" title="4 stars">★</label>

  <!-- ...down to star1 -->
</div>
```

Give each `<div class="star-rating">` instance a unique `name` attribute if you have multiple rating widgets on the same page (radio groups must not collide).

## Why it fits EaseMotion CSS

Selection state, hover preview, and the pop animation are handled entirely by CSS `:checked`, `:hover`, and the `~` general sibling selector — no JavaScript needed. Class-free, semantic `<input>`/`<label>` markup keeps it accessible by default.

## Files

- `demo.html` — a working 5-star widget defaulted to 3 stars
- `style.css` — all styles and the hover pop animation
- `README.md` — this file

## Notes

Reading the selected value (e.g. to submit it) works exactly like any radio group — check `document.querySelector('input[name="rating"]:checked').value` in JavaScript, or submit it as part of a real `<form>`.