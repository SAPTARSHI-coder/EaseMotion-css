# Jello-Hover Modal for Responsive Dashboard (sou)

## 📌 What does this do?

A pure CSS animated modal that pops in with a playful jello-bounce effect — designed for responsive dashboard layouts, widget configurators, and interactive admin panels.

---

## 🛠️ How is it used?

Trigger the modal via anchor links pointing to the modal's `id`. Close it with a link back to `#`. No JavaScript — powered entirely by the CSS `:target` pseudo-class and CSS keyframe animations.

### HTML Usage

```html
<!-- Trigger Button or Card -->
<a href="#jello-dash-sou" class="btn-dash-sou">Add Widget</a>

<!-- Jello Modal -->
<div id="jello-dash-sou" class="jello-dash-overlay-sou" role="dialog" aria-modal="true">
  <div class="jello-dash-modal-sou">
    <a href="#" class="jello-dash-close-sou" aria-label="Close">&times;</a>
    <div class="jello-dash-content-sou">
      <h2>Widget Configuration</h2>
      <p>Customize your dashboard widget.</p>
      <div class="jello-dash-actions-sou">
        <a href="#" class="btn-dash-sou">Confirm</a>
      </div>
    </div>
  </div>
</div>
```

### 🎨 Customization via CSS Variables

| CSS Variable | Default | Purpose |
|---|---|---|
| `--jello-dash-duration-sou` | `0.9s` | Jello-bounce duration |
| `--jello-dash-easing-sou` | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` | Bouncy easing curve |
| `--jello-dash-scale-sou` | `1` | Final scale factor |
| `--jello-dash-bg-sou` | `#ffffff` | Modal background |
| `--jello-dash-primary-sou` | `#06b6d4` | Primary accent (cyan) |
| `--jello-dash-sidebar-sou` | `#1e293b` | Dashboard sidebar color |
| `--jello-dash-overlay-sou` | `rgba(15,23,42,0.65)` | Backdrop color |
| `--jello-dash-radius-sou` | `16px` | Border radius |

**Example — override defaults:**

```css
:root {
  --jello-dash-duration-sou: 1.2s;
  --jello-dash-primary-sou: #f97316;
}
```

---

## 💡 Why is it useful?

This component brings a **delightful, playful modal pattern** to responsive dashboards using pure CSS:

- ✅ **Zero JavaScript** — powered by CSS `:target` + `@keyframes`.
- ✅ **Jello-bounce animation** — 6-stage keyframe animation for a squishy, elastic entrance.
- ✅ **Dashboard-ready** — demo includes sidebar, header, stat cards, and widget grid.
- ✅ **Fully accessible** — ARIA attributes, keyboard focus states, `prefers-reduced-motion` support.
- ✅ **Highly customizable** — 12+ CSS variables for timing, easing, colors, and layout.
- ✅ **Responsive** — sidebar collapses to horizontal nav on mobile.

Perfect for admin panels, analytics dashboards, SaaS product interfaces, and any layout where a playful modal entrance boosts engagement over a plain fade.
