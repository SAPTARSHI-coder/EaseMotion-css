# ease-hover-border-glow-isk

## What does this do?
Applies a vibrant, soft border glow effect on hover using box-shadow and border-color transitions, perfect for inputs, cards, and buttons.

## How is it used?
Add the class to any hoverable HTML element like a button, card, or input:

```html
<button class="ease-hover-border-glow-isk">Glow Button</button>
<input type="text" class="ease-hover-border-glow-isk" placeholder="Glow Input...">
```

You can customize the glow color by overriding the `--ease-border-glow-color` CSS variable:

```css
.custom-element {
  --ease-border-glow-color: #f43f5e;
}
```

## Why is it useful?
A border glow effect provides a focused, high-end feel for key call-to-actions, form fields, and feature cards without overlaying a heavy background color shift. It preserves the clean layout of dark/light modes while drawing the user's attention.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)
