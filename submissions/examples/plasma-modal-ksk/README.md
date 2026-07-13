# Plasma Modal (`plasma-modal-ksk`)

> Closes #41872

A SaaS Dashboard-inspired modal with animated plasma glow blobs drifting inside the card. Pure CSS — no JavaScript required.

## Preview

Open `demo.html` in your browser to see:
- Three drifting gradient plasma blobs inside the modal card
- Springy scale + fade entry animation on open
- Blurred backdrop with click-to-close
- Gradient stats row and dual action buttons

## Structure

```
plasma-modal-ksk/
├── demo.html   ← self-contained showcase page
├── style.css   ← all animations, layout, open/close state
└── README.md
```

## Usage

```html
<!-- Toggle controller -->
<input type="checkbox" id="plasma-toggle" class="plasma-toggle">

<!-- Trigger -->
<label for="plasma-toggle" class="plasma-trigger-label">Open Modal</label>

<!-- Modal -->
<div class="plasma-backdrop">
  <div class="plasma-modal">
    <div class="plasma-glow-wrap">
      <div class="plasma-blob plasma-blob-1"></div>
      <div class="plasma-blob plasma-blob-2"></div>
      <div class="plasma-blob plasma-blob-3"></div>
    </div>
    <div class="plasma-content">
      <!-- your content here -->
    </div>
  </div>
</div>
```

## Key Classes

| Class | Description |
|-------|-------------|
| `.plasma-toggle` | Hidden checkbox that controls open/close state |
| `.plasma-trigger-label` | Button label that checks the toggle |
| `.plasma-backdrop` | Full-screen blurred overlay |
| `.plasma-modal` | Card with scale + fade entry animation |
| `.plasma-glow-wrap` | Container for the three plasma blobs |
| `.plasma-blob-1/2/3` | Individual drifting gradient spheres |
| `.plasma-content` | Content layer above blobs (`z-index: 1`) |

## Animation Details

- **Entry**: `scale(0.88) translateY(28px)` → `scale(1) translateY(0)` via `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **Plasma blobs**: Three independent `plasma-drift-*` keyframes with `alternate` direction and different durations (7s / 9s / 11s)
- **Backdrop**: `opacity` + `backdrop-filter: blur(8px)` transition

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #41872.*
