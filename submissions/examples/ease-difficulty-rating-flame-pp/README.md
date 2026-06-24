# ease-difficulty-rating-flame-pp

Issue: #14039

## What does this do?

An animated flame-themed rating indicator designed for displaying recipe difficulty levels with a staggered scale-in effect, accompanied by an interactive rating picker.

## How is it used?

For read-only difficulty indicators:

```html
<div class="ease-difficulty-rating-pp" data-animate>
  <div class="flame-icon flame-filled">
    <svg>...</svg>
  </div>
  <div class="flame-icon flame-filled">
    <svg>...</svg>
  </div>
  <div class="flame-icon">
    <svg>...</svg>
  </div>
  <!-- ... repeat up to 5 times -->
</div>
```

For interactive selection:

```html
<div class="ease-rating-flame-interactive">
  <input type="radio" name="difficulty" id="flame-5" value="5" />
  <label for="flame-5"><svg>...</svg></label>

  <input type="radio" name="difficulty" id="flame-4" value="4" />
  <label for="flame-4"><svg>...</svg></label>

  <!-- ... repeat down to flame-1 -->
</div>
```

## Why is it useful?

It provides a themed, tactile alternative to the standard rating star pattern, specifically tailored for recipe difficulty displays. The staggered entrance animations draw user focus to the difficulty cards, while the interactive picker uses pure CSS sibling selection to animate both hovered/selected elements and preceding ones seamlessly, without requiring JavaScript.

## Main Classes

- `.ease-difficulty-rating-pp`: Container for display-only flame ratings.
- `.flame-icon`: Wrapper for flame SVG element.
- `.flame-filled`: Applies the fiery orange gradient fill and active state.
- `.ease-rating-flame-interactive`: Flex container for interactive selector.

## Tech Stack

- HTML5 (custom inline SVGs)
- CSS3 (transitions, keyframe animations, sibling selectors, SVG gradients, prefers-reduced-motion fallback)
- Pure JavaScript (only used in the demo to toggle the reset animation trigger class and display live feedback text).
