# Firefly Poll Widget (Music Player UI)

A pure HTML + CSS interactive poll widget styled inside a modern music player dashboard card. The component operates completely without JavaScript, using hidden radio inputs for vote tracking. Selecting any option transitions the progress bars dynamically from `0%` to their voted values and displays percentage figures using sibling CSS rules.

## Features

- **Pure CSS Dynamic Voting**: Sibling selectors expand the progress fill bars, toggle checkmark visibility, and highlight the chosen track option the moment the user clicks.
- **Spinning Vinyl Disc & Controls**: The card header features a spinning vinyl record artwork (`@keyframes` rotation) alongside standard media buttons, styled inside a dark glassmorphic player UI.
- **Firefly Glow Spots**: Staggered glowing radial light nodes pulse slowly behind the card, matching the magical firefly design guidelines.
- **Keyboard Accessible**: Native keyboard inputs can be focused and selected. Focus rings are highlighted using `:focus-visible`.
- **Reduced Motion Support**: Disables vinyl disc spinning, glowing pulse animations, and progress bar delays if `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/firefly-poll-widget-music/
├── demo.html    # Standalone demo containing the music player card, poll inputs, and footer
├── style.css    # Layout properties, firefly pulses, progress bar transforms, and responsiveness
└── README.md    # Documentation & API guidelines
```

---

## Customization API

Easily adjust dimensions, timing curves, and glow parameters by updating these CSS custom properties in your stylesheet:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-poll-duration` | `0.45s` | Timing speed for progress bars and selector fades. |
| `--ease-poll-easing` | `cubic-bezier(0.25, 1, 0.5, 1)` | Transition timing curve. |
| `--ease-poll-glow` | `0 0 25px rgba(251, 191, 36, ...)` | Glowing gold drop shadow around card. |
| `--ease-poll-blur` | `16px` | Backdrop blur level of glassmorphism wrapper. |
| `--ease-poll-opacity` | `0.08` | Glass background translucent opacity. |
| `--ease-poll-radius` | `24px` | Outer border radius of the card. |
| `--ease-poll-shadow` | `0 15px 35px rgba(0, 0, 0, 0.4)` | Outer box-shadow strength. |
| `--ease-poll-spacing` | `0.75rem` | Gaps and margins separating selection options. |

---

## Technical Details

### Pure CSS State Machine
Placing radio input controls at the top level makes them siblings to the main widget card, allowing options to react to selection:

```html
<input type="radio" name="music-vibe" id="opt-1" class="ease-poll-radio">
...
<div class="ease-firefly-poll-widget">
  <label for="opt-1" class="ease-poll__option">
    <div class="ease-poll__progress-fill"></div>
  </label>
</div>
```

On selection, progress bars animate outwards from `0%` to their respective outcomes:

```css
#opt-1:checked ~ .ease-firefly-poll-widget .ease-poll__option:nth-of-type(1) .ease-poll__progress-fill,
#opt-2:checked ~ .ease-firefly-poll-widget .ease-poll__option:nth-of-type(1) .ease-poll__progress-fill {
  width: 54%;
}
```

### Spinning Turntable Artwork
The vinyl record rotates continuously:
```css
.ease-vinyl-record {
  animation: ease-kf-vinyl-spin 8s linear infinite;
}
@keyframes ease-kf-vinyl-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
If reduced motion is active, the rotation stops instantly.
