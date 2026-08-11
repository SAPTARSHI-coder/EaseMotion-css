# CSS Animated Form Submit

A responsive form submission component where the submit button
transitions into a success state with an animated check mark.

The demonstration uses pure CSS and does not require JavaScript.

## Features

- Pure HTML and CSS
- Animated submit button
- Success-state transformation
- Animated check mark
- Button compression on press
- Hover elevation effect
- Responsive layout
- Keyboard focus support
- Accessible form labels
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Complete form demonstration
- `style.css` — Component styles and animations

## How It Works

The demo uses a visually hidden checkbox as a CSS state
controller. Clicking the submit label toggles the success state.

```html
<input
  class="submit-toggle"
  type="checkbox"
  id="submit-state"
>

<label class="submit-button" for="submit-state">
  ...
</label>