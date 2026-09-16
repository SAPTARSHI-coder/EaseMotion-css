# Hover Glitch Text Effect (`ease-glitch-mk`)

## Description
This submission adds a **Hover-Triggered Glitch Text** utility to EaseMotion CSS. It uses modern CSS techniques like `clip-path`, `data-text` attributes, and `@keyframes` to split the text into Neon Cyan and Neon Pink layers that jitter independently when hovered, creating a Cyberpunk/Glitch effect.

## Features
- ⚡ **Hover-Triggered**: Saves resources by only animating when interacted with.
- 🎨 **Modern CSS**: Uses `clip-path` instead of deprecated `clip: rect()`.
- ⚙️ **Zero JavaScript**: 100% pure CSS performance.
- 📱 **Responsive**: Works flawlessly across all screen sizes.

## How to Use
Apply the `ease-glitch-mk` class to any heading or text element. **Important:** You must include a `data-text` attribute containing the exact same text so the pseudo-elements can copy it.

```html
<h1 class="ease-glitch-mk" data-text="CYBERPUNK">
    CYBERPUNK
</h1>