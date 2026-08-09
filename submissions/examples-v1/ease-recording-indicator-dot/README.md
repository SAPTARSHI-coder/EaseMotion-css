# Ease Recording Indicator Dot

A responsive, accessible, and pure HTML/CSS component to showcase recording, broadcasting, or active live states.

Related Issue: #48016

---

## 📢 Repository Standard Answers

### 1. What does this do?
It provides a lightweight, highly customizable recording indicator dot with smooth, high-performance CSS keyframe animations (such as radar wave ripples, soft breathing glow, and viewfinder blinking) suitable for live overlays, CCTV dashboards, audio players, or video chat interfaces.

### 2. How is it used?
Add the markup to your HTML structure, then apply the `.ease-rec-dot` class and customize the animation variant and color accents using helper modifiers.

```html
<!-- Base Indicator with Label -->
<span class="ease-rec-indicator">
  <span class="ease-rec-dot ease-rec-dot--red ease-rec-dot--radar" aria-hidden="true"></span>
  LIVE
</span>
```

### 3. Why is it useful?
It aligns with the EaseMotion CSS guidelines by achieving clean, interactive user flows and micro-interactions entirely through CSS (no JavaScript required). It adheres to accessibility standards, offers custom styling variables, and handles reduced-motion user configurations gracefully.

---

## ✨ Features

- **Pure HTML + CSS**: Extremely lightweight (no JavaScript, external icons, or font dependencies).
- **Multiple Animation Options**:
  - **Breathing Pulse (`.ease-rec-dot--pulse`)**: Smooth size scale & opacity transition.
  - **Radar Ripple (`.ease-rec-dot--radar`)**: Double concentric infinite pulse ring waves.
  - **Hard Blink (`.ease-rec-dot--blink`)**: Camera viewfinder stepped flash.
  - **Glow Breath (`.ease-rec-dot--glow`)**: Soft back-glow box shadow respiration.
- **Theme Color Variants**: Built-in support for Red (`--red`), Green (`--green`), Yellow (`--yellow`), and Blue (`--blue`).
- **Interactive Recorder Demo**: Includes a pure CSS radio-button-driven audio voice recorder mockup to showcase live state switching, waveform animation control, and label changes without any JS.
- **Accessibility (A11y) First**:
  - Screen reader-only helpers (`.sr-only`) for dynamic indicators.
  - Live region indicators (`aria-live="polite"`) to announce state updates.
  - Standard focus indications for keyboard control accessibility.
  - Automatic animation slowing/disablement when system `prefers-reduced-motion` is enabled.

---

## 🛠️ Customization

The component uses scoped CSS custom variables (`:root`) allowing easy custom theme integration:

| Variable | Description | Default |
|----------|-------------|---------|
| `--ease-dot-size` | Sizing of the indicator dot | `12px` |
| `--ease-dot-color` | Active color background | `#ef4444` (Red) |
| `--ease-dot-scale` | Scale factor for radar ripple bounds | `3.5` |
| `--ease-radius` | Card border corners radius | `12px` |

### Adding Custom Accents
You can easily override variables locally or create brand-new variants:

```css
.ease-rec-dot--custom {
  --ease-dot-color: #a855f7; /* Purple */
  --ease-dot-color-rgb: 168, 85, 247;
  --ease-dot-scale: 4;
}
```

---

## 📂 Folder Structure

```text
submissions/examples/ease-recording-indicator-dot/
├── demo.html       ← Interactive showcases (Audio voice note, Video stream, Camera HUD)
├── style.css       ← Scoped, well-commented stylesheet containing variables and keyframes
└── README.md       ← Component documentation (This file)
```
