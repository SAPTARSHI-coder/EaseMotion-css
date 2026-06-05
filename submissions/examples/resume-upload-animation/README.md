# Resume Upload Animation

An animated **drag-and-drop resume upload UI** built with **pure CSS** — no JavaScript.  
Showcases a glowing drop zone, floating upload icon, animated progress bar with shimmer, staggered file card entrance, success/error validation hints, and a button sweep-shine — all via CSS keyframes and modern selectors (`:has()`, `:focus-visible`, `:hover`).

---

## What does it add?

A composable `em-upload-*` CSS class system that brings a premium upload experience to any file input — relevant for student profile pages, resume submission flows, or any drag-and-drop UI. Zero JavaScript required.

---

## File Structure

```
submissions/examples/resume-upload-animation/
├── demo.html   — Standalone demo, opens directly in a browser
├── style.css   — All animation classes, keyframes, and design tokens
└── README.md   — This file
```

---

## How to Use

### 1. Drop Zone (idle state)

```html
<label class="em-upload-label" for="resume-file">
  <input
    id="resume-file"
    class="em-upload-input"
    type="file"
    accept="application/pdf"
  />
  <div class="em-upload-zone">
    <div class="em-upload-icon">📄</div>
    <p class="em-upload-zone__title">
      Drag &amp; drop or <span>browse file</span>
    </p>
    <p class="em-upload-zone__sub">Supports PDF format only</p>
  </div>
</label>
```

The zone activates its glow border and radial background on hover **and** on keyboard focus (`:focus-visible`) — fully keyboard-accessible without any JS.

---

### 2. Progress Bar (uploading state)

```html
<div
  class="em-upload-progress-wrap"
  role="progressbar"
  aria-label="Upload progress"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="em-upload-progress-label">
    <strong>Uploading…</strong>
    <span>100%</span>
  </div>
  <div class="em-upload-track">
    <div class="em-upload-fill"></div>
  </div>
</div>
```

The fill bar animates from `0%` to `100%` width via `em-kf-progress-fill` (2.2s). A shimmer overlay sweeps across it continuously during the upload animation.

---

### 3. File Info Card

```html
<div class="em-upload-file-card">
  <div class="em-upload-file-icon">📋</div>
  <div class="em-upload-file-info">
    <p class="em-upload-file-name">Resume_2025.pdf</p>
    <p class="em-upload-file-meta">2.4 MB · Uploaded</p>
  </div>
  <div class="em-upload-file-status">✓</div>
</div>
```

Slides in from the left with a bounce curve on page load. Hover adds a subtle border glow.

---

### 4. Validation Hints

```html
<!-- Success -->
<div
  class="em-upload-hint em-upload-hint--success"
  role="status"
  aria-live="polite"
>
  ✅ Resume uploaded successfully!
</div>

<!-- Error -->
<div class="em-upload-hint em-upload-hint--error" role="alert">
  ⛔ Invalid file type. Please upload a PDF under 5 MB.
</div>
```

---

### 5. Submit Button

```html
<button class="em-upload-btn" type="submit">🚀 Submit Resume</button>
```

On hover: lifts with `translateY(-2px)`, adds an indigo glow `box-shadow`, and a shine sweep crosses the button via `::before`.

---

## How the Animations Work

### Drop Zone Glow — CSS `:has()` + `:focus-visible`

```css
.em-upload-label:has(.em-upload-input:focus-visible) .em-upload-zone,
.em-upload-zone:hover {
  border-color: rgba(99, 102, 241, 0.55);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.25);
  transform: translateY(-3px);
}
```

No JavaScript needed to detect keyboard focus — pure CSS selector chain.

### Floating Icon

```css
@keyframes em-kf-icon-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
```

Pauses on hover so the icon doesn't fight the zoom scale.

### Progress Fill with Shimmer

```css
@keyframes em-kf-progress-fill {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
/* Shimmer overlay on ::after */
@keyframes em-kf-shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
```

### Button Shine Sweep

```css
.em-upload-btn::before {
  left: -100%;
  transition: left 0.4s ease;
}
.em-upload-btn:hover::before {
  left: 140%;
}
```

A diagonal gradient slides across on hover — a premium micro-interaction with zero JavaScript.

---

## Customisation

```css
:root {
  --em-upload-accent: #f59e0b; /* amber brand */
  --em-upload-accent-glow: rgba(245, 158, 11, 0.2);
  --em-upload-bg: #ffffff; /* light mode */
  --em-upload-surface: #f8fafc;
  --em-upload-text: #0f172a;
}
```

---

## Why This Fits EaseMotion CSS

- **Animation-first** — every state transition (idle → hover → uploading → done) has a distinct, purposeful motion.
- **Zero JavaScript** — all interactivity driven by CSS `:has()`, `:hover`, `:focus-visible`.
- **Composable classes** — drop zone, progress bar, file card, and button are fully independent.
- **Accessible** — keyboard-focusable drop zone, `role="progressbar"` with ARIA attributes, `role="alert"` for error hints, `role="status"` for success.
- **Reduced motion safe** — all animations collapse to instant via `@media (prefers-reduced-motion: reduce)`.

---

## Browser Support

| Browser       | Version | Notes                       |
| ------------- | ------- | --------------------------- |
| Chrome / Edge | 105+    | Full support incl. `:has()` |
| Firefox       | 121+    | Full support incl. `:has()` |
| Safari        | 15.4+   | Full support incl. `:has()` |

> **Note**: The drop zone focus state uses `:has()`. For older browsers without `:has()` support, the zone still works on hover — the keyboard-focus glow is a progressive enhancement.

---

## License

Submitted under the same license as the EaseMotion CSS repository.
