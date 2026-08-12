# Glide Textarea Mixin (feature-glide-textarea-mixin-mixin-XX)

## What it does
A SCSS mixin that gives a `<textarea>` (or its wrapper) a smooth
**glide-out exit animation** — a gentle downward slide combined with
a fade and slight scale-down. Ideal for dismissible comment boxes,
inline edit fields, or feedback forms that disappear after submission
or cancellation.

## How to use
```scss
@use 'ease-motion' as *;

.my-textarea-wrapper {
  @include ease-glide-textarea-mixin-XX(0.5s);
}
```

Toggle the `.is-exiting` class (e.g. via JS) right before removing the
element from the DOM, then remove the node once the animation ends:

```js
const el = document.querySelector('.my-textarea-wrapper');
el.classList.add('is-exiting');
el.addEventListener('animationend', () => el.remove(), { once: true });
```

### Parameters

| Parameter   | Type      | Default                       | Description                              |
|-------------|-----------|--------------------------------|--------------------------------------------|
| `$duration` | time      | `0.5s`                         | How long the glide-out animation takes     |
| `$distance` | length    | `40px`                         | How far the element travels downward       |
| `$easing`   | timing fn | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve for the glide                 |

### Example markup
```html
<div class="my-textarea-wrapper">
  <label for="feedback">Feedback</label>
  <textarea id="feedback" rows="4"></textarea>
  <button type="button" id="cancel-btn">Cancel</button>
</div>
```

## Why it's useful
- **Purposeful feedback**: an exit animation signals removal instead
  of an abrupt disappearance, reducing layout jank surprise.
- **Configurable**: duration, distance, and easing are adjustable per use.
- **Trigger-based**: driven by a single `.is-exiting` class, so it's
  easy to hook into any framework's state/lifecycle logic.
- **Accessible**:
  - Works with a properly labeled `<textarea>` (`<label for>` pairing).
  - Fully respects `prefers-reduced-motion: reduce` — the element
    fades out immediately without translation/scale for users who
    prefer reduced motion.
- **Lightweight**: pure CSS animation, no dependencies, no JS animation logic.

## Accessibility notes
- Always pair the textarea with a `<label>` (visible or `aria-label`)
  so its purpose is announced by assistive tech before it exits.
- If the textarea's removal is a significant state change (e.g. after
  a successful submit), consider announcing that via an `aria-live`
  region elsewhere in the UI rather than relying on the animation alone.
