# ease-glitch

Submission for EaseMotion CSS — resolves Issue #2740

---

## 1. What does this do?

Adds a retro RGB-split glitch effect using CSS clip-path on ::before / ::after
pseudo-elements. Creates red and cyan offset layers with horizontal slice
distortion. No JavaScript required.

---

## 2. How is it used?

```html
<!-- Hover to glitch -->
<h1 class="ease-glitch ease-glitch-text" data-text="GLITCH">GLITCH</h1>

<!-- Always animating -->
<div class="ease-glitch ease-glitch-auto" data-text="ERROR 404">ERROR 404</div>

<!-- Intense version -->
<h2 class="ease-glitch ease-glitch-heavy" data-text="CHAOS">CHAOS</h2>
```

The data-text attribute must match the inner text.

---

## 3. Why is it useful?

Glitch effects are widely used in gaming, cyberpunk, and portfolio UIs.
Pure CSS implementation means zero dependencies and no JavaScript overhead.
Composable modifiers let developers pick intensity and trigger style freely.

---

## Classes

| Class               | Effect                        | Trigger |
|---------------------|-------------------------------|---------|
| .ease-glitch        | RGB split glitch              | hover   |
| .ease-glitch-auto   | Continuous glitch loop        | always  |
| .ease-glitch-text   | Heading optimised             | —       |
| .ease-glitch-subtle | Light distortion              | hover   |
| .ease-glitch-heavy  | Intense rapid distortion      | hover   |
| .ease-glitch-red    | Red/cyan split                | hover   |
| .ease-glitch-green  | Matrix green variant          | hover   |

---

## Files

| File      | Purpose                        |
|-----------|--------------------------------|
| style.css | 7 utility classes + keyframes  |
| demo.html | 8 live demos                   |
| README.md | This file                      |

Includes prefers-reduced-motion support.
