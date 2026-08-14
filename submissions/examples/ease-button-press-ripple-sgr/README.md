# Button Press Ripple Animation

## What does this do?

Triggers a Material Design-style circular ripple animation expanding outward from the precise coordinate of the cursor's click, but only during the `:active` (press) state. It does not trigger on hover.

## How is it used?

1. Apply the button ripple classes to your HTML element:

```html
<button class="btn-press-ripple">Click Me</button>
```

2. Standard click-point tracking script updates `--ripple-x` and `--ripple-y` coordinates on click or pointerdown:

```javascript
button.addEventListener("pointerdown", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  button.style.setProperty("--ripple-x", `${x}px`);
  button.style.setProperty("--ripple-y", `${y}px`);
});
```

## Why is it useful?

Material design click ripples provide instantaneous, intuitive feedback to users, indicating exactly where and when a click action occurred. Differentiating this animation to trigger specifically on press/active states (rather than simple mouse entry/hover) satisfies design guidelines for apps requiring strict button-press indicators (such as payment buttons, submit buttons, and toggle buttons).

## Tech Stack

- HTML
- CSS (animations, custom properties, `:active` selector)
- Vanilla JavaScript (for relative click-point detection)

## Preview

Open `demo.html` directly in your browser to see the effect.
