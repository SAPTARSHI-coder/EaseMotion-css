# Glitch Animation Effect

## What does this do?

It creates a cyberpunk-inspired text glitch animation featuring RGB split color shifts and sliced layout distortions using pure CSS.

## How is it used?

Apply the `text-glitch-uj` class and define the `data-text` attribute with matching text content:

```html
<div class="text-glitch-uj" data-text="SYSTEM ERROR">
  SYSTEM ERROR
</div>
```

You can change the primary text color by styling the element:

```css
.text-glitch-uj {
  color: #00f0ff; /* Custom main color */
}
```

## Why is this useful?

This utility adds a high-fidelity visual distortion effect for cyber-themed titles, landing pages, and gaming platforms. Bound completely to compositor-friendly styling, it avoids main thread JavaScript overhead, runs smoothly at high framerates, and halts all motion when the user requests a reduced motion environment.
