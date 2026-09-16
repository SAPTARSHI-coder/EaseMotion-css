# Modern CSS Text Glitch Effect Component

A high-performance, lightweight digital glitch and chromatic aberration effect built entirely with pure HTML and CSS. It supports three distinct variants: a periodic display headline, an interactive hover-triggered button, and a continuous micro-vibrating terminal status bar.

---

## 1. What does this do?
This component simulates digital screen interference, signal failure, and chromatic aberration (cyan/magenta color displacement). It features:
- **Zero JavaScript**: Animates clip-paths, translations, and colors using pure CSS keyframes.
- **Burst-Style Loop (Dormant Periods)**: Unlike common glitches that flicker non-stop, the main display text remains static and 100% readable for 85% of the loop cycle. It glitch-flickers only in brief, high-impact bursts, maintaining readability.
- **Hover Trigger Mode**: Triggers a rapid visual distortion and offset aberration only when the cursor hovers over buttons or links, providing interactive tactile feedback.
- **Low-Intensity Micro-Glitch**: A continuous, low-amplitude glitch suitable for dashboard indicators, monospaced logs, and HUD overlays.
- **Adaptive Theme Support**: Automatically adapts to light and dark themes using built-in CSS variables.

---

## 2. How is it used?

### Layout A: Periodic Burst Glitch Headline
Place the target word inside an element with `.ease-glitch-title` and duplicate it in the `data-text` attribute. This attribute is read by the CSS pseudo-elements (`::before` and `::after`) to align the cyan and magenta layers:

```html
<h2 class="ease-glitch-title" data-text="NEO-TOKYO 2088">
  NEO-TOKYO 2088
</h2>
```

### Layout B: Interactive Glitch Button (Hover Triggered)
To create a button that glitches on hover, apply the `.ease-glitch-btn` class and mirror the text in `data-text`:

```html
<button class="ease-glitch-btn" data-text="INITIATE SYSTEM HACK">
  INITIATE SYSTEM HACK
</button>
```

### Layout C: Continuous Monospace Tag
To apply a low-intensity, persistent terminal glitch, use the `.ease-glitch-terminal-text` class:

```html
<div class="terminal-container">
  <span class="ease-glitch-terminal-text" data-text="SYS_SECURE_CORE: ACTIVE">
    SYS_SECURE_CORE: ACTIVE
  </span>
</div>
```

---

## Class Catalog

| Class Name | Type | Description |
| :--- | :--- | :--- |
| `.ease-glitch-title` | Element | Main display title with a periodic looping burst glitch (6s cycle). |
| `.ease-glitch-btn` | Button | Interactive button that glitches and vibrates on cursor hover. |
| `.ease-glitch-terminal-text` | Element | Monospaced text running a continuous, low-intensity micro-glitch. |
| `.terminal-bg` | Container | Card container with scanline filters simulating a glowing retro monitor. |

---

## 3. Why is it useful?
1. **Perfect Text Readability**: Confining the primary loop glitch to brief 0.2-second bursts ensures the text remains crisp and readable. This makes it suitable for headlines and body tags.
2. **High-Performance rendering**: The CSS overlays use `clip-path: inset(100% 0 0 0)` and `opacity: 0` during quiet phases. This prevents the browser from rendering or blending overlapping text except during active glitch moments, keeping repaint cycles at a minimum.
3. **No Image Assets**: Chromatic aberrations are drawn on the fly by offsetting text layers in CSS, meaning no heavy image loaders or asset requests are needed.
4. **Universal Background Compatibility**: Since the pseudo-elements use clip-paths rather than background masks, the glitch effects overlay cleanly on top of transparent cards, rich image hero banners, and background videos.
5. **Reduced Motion Compliant**: The stylesheet honors browser preferences by checking `@media (prefers-reduced-motion: reduce)`, immediately turning off all flashing, translations, and clipping to accommodate motion-sensitive users.
