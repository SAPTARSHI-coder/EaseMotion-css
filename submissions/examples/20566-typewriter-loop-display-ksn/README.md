# Typewriter Loop Display (ease-typewriter-loop-display)

### 1. What does this do?

This is a dynamic, multi-phrase typewriter loop component. It types out a phrase character by character, pauses, deletes the phrase character by character, pauses, and cycles to the next phrase in a loop.

### 2. How is it used?

Define a container with a typewriter highlight target:

```html
<div class="typewriter-container">
  <span>We design experiences that are </span>
  <span
    class="typewriter-text"
    id="typewriter"
    data-phrases='["visually breathtaking.", "incredibly fast.", "perfectly responsive."]'
  ></span>
  <span class="typewriter-cursor">|</span>
</div>
```

Configure your animation speed using custom CSS variables (in milliseconds per character):

```css
.typewriter-text {
  --ease-type-speed: 100;
  --ease-delete-speed: 50;
  color: #a78bfa;
}
```

Initialize the script block with the `TypewriterLoop` controller class:

```javascript
const typeEl = document.getElementById("typewriter");
new TypewriterLoop(typeEl);
```

### 3. Why is it useful?

It creates engaging, lively hero section subheadings without heavy dependencies. By using CSS custom variables (`--ease-type-speed` and `--ease-delete-speed`), developers can fine-tune typing/deleting paces on different elements or dynamically via JavaScript. It also respects the `prefers-reduced-motion` media query to ensure accessible compliance, swapping words instantly rather than character by character.
