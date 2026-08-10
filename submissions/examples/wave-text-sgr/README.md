# Kinetic Typography / Wave Text Animation

### 1. What does this do?
This component animates individual letters of a word independently, creating sequenced ripples, bounces, flips, and focus shifts across heading text.

### 2. How is it used?
Apply the `.wave-text` class to any text container:

```html
<h2 class="wave-text wave-bounce">Rippling Heading</h2>
```

**Variants:**
- **Animations**:
  - `.wave-bounce`: Letters bounce vertically in a sine curve.
  - `.wave-flip`: Letters rotate 360 degrees.
  - `.wave-scale`: Letters expand and shrink in a pulsating breath.
  - `.wave-color`: Staggered neon color sweeps.
  - `.wave-blur`: Sequential blur/unblur focus shifts.
- **Triggers**:
  - `.wave-hover`: Pauses animations by default, running them only on hover.

**Custom Properties:**
- `--stagger-gap`: Stagger delay between consecutive characters (default: `0.06s`).
- `--wave-duration`: Speed of the animation loop cycle (default: `1.2s`).
- `--wave-bounce-height`: Max vertical offset height (default: `-15px`).
- `--wave-scale-size`: Max expansion scale (default: `1.35`).
- `--wave-highlight-color`: Highlight sweep color (default: Cyan).
- `--wave-blur-amount`: Max blur filter width (default: `4px`).

**Required 5-Line JavaScript Split Utility:**
Wrap characters in indexed spans to calculate delayed delays:

```javascript
document.querySelectorAll('.wave-text').forEach(el => {
  el.innerHTML = el.textContent.split('').map((char, i) => {
    return `<span style="--i: ${i}">${char}</span>`;
  }).join('');
});
```

### 3. Why is it useful?
It provides state-of-the-art kinetic motion typography natively in CSS without using heavyweight animation libraries. By utilizing index variables (`--i`) and CSS calculations, it allows complex multi-letter timeline offsets to be driven by a single keyframe declaration. It also respects user accessibility standards, utilizing a `prefers-reduced-motion` media check to disable all vertical translating, rotating, and scaling.
