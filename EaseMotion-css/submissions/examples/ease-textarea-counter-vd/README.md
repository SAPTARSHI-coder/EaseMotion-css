# Ease Textarea Counter

## What does this do?

A styled textarea component with a character counter and maximum character limit display.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<textarea
    id="message"
    maxlength="200"
    placeholder="Write your message..."
></textarea>

<div class="counter">
    <span>Maximum 200 characters</span>
    <span class="count">0 / 200</span>
</div>
```

### Features

- Textarea input
- Character count display
- Maximum limit display
- Focus state
- Warning-ready counter styling
- Responsive layout
- Pure CSS styling

## Why is it useful?

Textarea counters are commonly used in comments, feedback forms, contact forms, and content editors where users need to know how much text they can enter.

This component provides a clean and reusable textarea pattern while following the animation-first philosophy of EaseMotion CSS.