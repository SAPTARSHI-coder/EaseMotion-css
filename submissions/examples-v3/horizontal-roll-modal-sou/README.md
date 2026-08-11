# Horizontal Roll Modal for SaaS Showcase (sou)

## 📌 What does this do?

A pure CSS animated modal that rolls in horizontally from the right with a smooth spin transition — designed to complement SaaS showcase layouts with zero JavaScript overhead.

---

## 🛠️ How is it used?

Trigger the modal using a simple anchor link pointing to the modal's `id`, and close it by linking back to `#`. No JavaScript required — powered entirely by the CSS `:target` pseudo-class.

### HTML Usage

```html
<!-- Trigger Button -->
<a href="#hroll-modal-sou" class="btn-primary-sou">Launch Modal</a>

<!-- Modal Structure -->
<div id="hroll-modal-sou" class="hroll-modal-overlay-sou" role="dialog" aria-modal="true">
  <div class="hroll-modal-sou">
    <a href="#" class="hroll-modal-close-sou" aria-label="Close modal">&times;</a>
    <div class="hroll-modal-content-sou">
      <h2>Your Modal Title</h2>
      <p>Your modal content goes here.</p>
    </div>
  </div>
</div>
```

### 🎨 Customization via CSS Variables

All animation parameters are exposed as CSS custom properties for easy customization:

| CSS Variable | Default | Purpose |
|---|---|---|
| `--hroll-duration-sou` | `0.7s` | Duration of the roll animation |
| `--hroll-easing-sou` | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Easing function for the roll effect |
| `--hroll-scale-sou` | `1` | Final scale factor of the modal |
| `--hroll-bg-sou` | `#ffffff` | Modal background color |
| `--hroll-overlay-sou` | `rgba(15, 23, 42, 0.75)` | Overlay backdrop color |
| `--hroll-primary-sou` | `#6366f1` | Primary accent color |
| `--hroll-radius-sou` | `16px` | Modal border radius |

**Example — override defaults:**

```css
:root {
  --hroll-duration-sou: 1.2s;
  --hroll-scale-sou: 1.1;
  --hroll-primary-sou: #10b981;
}
```

---

## 💡 Why is it useful?

This component embodies EaseMotion CSS's core philosophy: **beautiful, meaningful motion with zero JavaScript overhead**. It:

- ✅ **Adds delight** to SaaS onboarding flows, feature announcements, and showcase pages with an eye-catching roll animation.
- ✅ **Preserves performance** — no JS event listeners, no reflows triggered by scripts, and minimal CSS footprint.
- ✅ **Fully accessible** — includes ARIA attributes (`role="dialog"`, `aria-modal`), keyboard focus states, and honors `prefers-reduced-motion`.
- ✅ **Framework-agnostic** — works in any HTML environment (static sites, React, Vue, Angular).
- ✅ **Highly customizable** — every animation property is exposed via CSS variables, allowing designers to tune timing, easing, and scale without touching the core styles.

This modal fills a gap in the EaseMotion examples library, giving SaaS developers a modern, animated pattern that stays true to the framework's "CSS-first" mission.
