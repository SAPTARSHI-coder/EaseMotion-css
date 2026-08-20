# CSS Rating Input Stars

A pure CSS rating input component supporting half-star precision, hover preview, keyboard navigation, and responsive scaling. Built without any JavaScript dependency using native HTML form controls and modern CSS parent-state selectors (`:has()`).

## Features

- **Zero JavaScript**: Pure CSS state engine leveraging `<input type="radio">` and CSS `:has()` parent selectors.
- **Half-Star Precision**: 11 discrete rating states from `0.0` to `5.0` in `0.5` increments using non-distorting SVG fill clipping.
- **Hover Preview**: Live visual hover preview that reverts back to the checked value upon mouse leave.
- **Keyboard Accessible**: Screen-reader accessible radio group semantics (`<fieldset>`, `<legend>`), keyboard navigation via Arrow keys, and `:focus-visible` focus rings.
- **EaseMotion Design Tokens**: Integrates directly with EaseMotion color variables, spring easing curves (`var(--ease-ease-bounce)`), dark mode, and reduced-motion preferences.

## Usage

Include `style.css` alongside `easemotion.css`:

```html
<link rel="stylesheet" href="path/to/easemotion.css">
<link rel="stylesheet" href="path/to/style.css">
```

### HTML Markup Structure

```html
<fieldset class="ease-rating-fieldset">
  <legend class="ease-rating-legend">Product Rating</legend>

  <div class="ease-rating">
    <input type="radio" id="star-0-5" name="rating" value="0.5" class="ease-rating-input">
    <input type="radio" id="star-1-0" name="rating" value="1.0" class="ease-rating-input">
    <input type="radio" id="star-1-5" name="rating" value="1.5" class="ease-rating-input">
    <input type="radio" id="star-2-0" name="rating" value="2.0" class="ease-rating-input">
    <input type="radio" id="star-2-5" name="rating" value="2.5" class="ease-rating-input">
    <input type="radio" id="star-3-0" name="rating" value="3.0" class="ease-rating-input">
    <input type="radio" id="star-3-5" name="rating" value="3.5" class="ease-rating-input">
    <input type="radio" id="star-4-0" name="rating" value="4.0" class="ease-rating-input">
    <input type="radio" id="star-4-5" name="rating" value="4.5" class="ease-rating-input" checked>
    <input type="radio" id="star-5-0" name="rating" value="5.0" class="ease-rating-input">

    <div class="ease-rating-stars" aria-hidden="true">
      <div class="ease-star-item">
        <label for="star-0-5" class="ease-star-hit ease-star-left" title="0.5 stars"></label>
        <label for="star-1-0" class="ease-star-hit ease-star-right" title="1.0 star"></label>
        <div class="ease-star-graphic">
          <svg class="ease-star-svg ease-star-bg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <div class="ease-star-fill"><svg class="ease-star-svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
        </div>
      </div>
      <!-- Repeat .ease-star-item for remaining stars 2 to 5 -->
    </div>

    <span class="ease-rating-value" aria-live="polite"></span>
  </div>
</fieldset>
```

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--rating-size` | `2rem` | Width & height of individual star icons |
| `--rating-gap` | `0.375rem` | Horizontal gap between star icons |
| `--rating-empty` | `rgba(244, 63, 94, 0.15)` | Color of unfilled star background |
| `--rating-fill` | `#f43f5e` | Color of active checked star fill |
| `--rating-hover` | `#fb7185` | Color of hovered star fill |
| `--rating-glow` | `rgba(244, 63, 94, 0.45)` | Drop-shadow glow color on hover/focus |
