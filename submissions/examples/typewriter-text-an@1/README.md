# Typewriter Text Effect (`ease-typewriter-an`)

## Description
This submission adds a **Typewriter Text Effect** to EaseMotion CSS.

The text appears character by character like a typing animation, with a blinking cursor on the right side. The effect is created using pure CSS only.

## Features
- Pure CSS, zero JavaScript
- Typing animation with blinking cursor
- Customizable speed and cursor color
- Works with page load animation
- Includes `prefers-reduced-motion` support

## How to Use
Apply the class to any heading or text element:

```html
<h1 class="ease-typewriter-an">
  EaseMotion is amazing
</h1>
```

## Customization
You can change speed and cursor color using CSS variables:

```html
<h1
  class="ease-typewriter-an"
  style="--tw-speed-an: 1.8s; --tw-cursor-an: #a78bfa;"
>
  EaseMotion is amazing
</h1>
```

## Important Note
The default CSS uses `21ch` width and `steps(21, end)` because the demo text contains 21 characters.

If you change the text length, update these values accordingly:

```css
--tw-width-an: yourTextLengthch;
```

and adjust:

```css
steps(yourTextLength, end)
```

## Demo
Open `demo.html` directly in your browser. No server is required.

## Checklist
- [x] Code is placed inside `submissions/examples/typewriter-text-an/`
- [x] Includes `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] Follows unique suffix naming rule
- [x] No changes made to `core/`
- [x] No changes made to `components/`