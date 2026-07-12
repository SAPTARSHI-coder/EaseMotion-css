# Cognitive Brain-Computer Interface Training Studio — Phase #748

**EaseMotion CSS Showcase** · `submissions/examples/cognitive-brain-computer-interface-training-studio-phase-748/`

A sleek, neuro-tech UI showcase representing a training studio for a brain-computer interface (BCI). Features CSS-rendered brainwave scrolling, spinning cognitive sync rings, and a bouncing neuro-feedback stream.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/cognitive-brain-computer-interface-training-studio-phase-748/demo.html
```

---

## Design Theme

Neuro-tech, Mind-machine interface, Cognitive training, and Medical UI.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#09090b` | Mind Black background |
| `--clr-teal`| `#14b8a6` | Cognitive Teal / Primary UI |
| `--clr-pink`| `#ec4899` | Neural Pink / Alerts & Secondary |
| `--clr-purple`| `#a855f7` | Focus Purple / High cognitive load |

---

## Component Breakdown

### 1. Cognitive Sync Rings (Center View)
- The `.sync-core` contains three concentric `.s-ring` elements.
- The `.outer` and `.mid` rings use the `spin-ring` keyframe to rotate in opposite directions.
- The `.inner` ring uses a dashed border and the `pulse-core` keyframe to simulate a central neural connection point.

### 2. Neuro-Feedback Stream (Center View)
- The `.stream-container` holds several `.stream-bar` elements acting like a data equalizer.
- Each bar uses the `stream-bounce` keyframe with `transform: scaleY()`.
- Varied `animation-duration` and `animation-delay` values on the `.stream-bar:nth-child()` selectors create an organic, randomized look to the feedback stream.

### 3. Brainwave Frequencies (Left Sidebar)
- The `.w-line` elements represent EEG waveforms.
- They use embedded SVG lines `data:image/svg+xml` as `background-image` set to `repeat-x`.
- The `wave-scroll` keyframe animates the `transform: translateX(-50px)` to make the brainwave pattern scroll infinitely, with different frequencies configured via CSS modifiers (`.beta`, `.theta`).

### 4. Neural Network Background
- The `body::before` creates soft radial ambient lighting.
- The `body::after` uses a repeating linear gradient grid to simulate synaptic connections, combined with a `radial-gradient` mask to fade it out at the edges, and animated with `breathe-grid`.

---

## File Structure

```
cognitive-brain-computer-interface-training-studio-phase-748/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
