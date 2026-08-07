# Fade-Out Modal for Accessible Web (sou)

## 📌 What does this do?

A pure CSS animated modal that fades in and out with a subtle scale transition, built with WCAG AA accessibility standards — high contrast, keyboard navigation, screen-reader support, and reduced-motion respect.

---

## 🛠️ How is it used?

Trigger the modal via an anchor link pointing to the modal's `id`. Close it with a link back to the main content anchor. No JavaScript — powered entirely by the CSS `:target` pseudo-class.

### HTML Usage

```html
<!-- Skip Link (Accessibility Best Practice) -->
<a href="#main-content-sou" class="skip-link-sou">Skip to main content</a>

<!-- Trigger Button -->
<a href="#fade-a11y-sou" class="btn-a11y-sou" aria-haspopup="dialog">Open Modal</a>

<!-- Modal Structure -->
<div id="fade-a11y-sou" class="fade-a11y-overlay-sou" role="dialog"
     aria-modal="true" aria-labelledby="fade-a11y-title-sou"
     aria-describedby="fade-a11y-desc-sou" tabindex="-1">
  <div class="fade-a11y-modal-sou">
    <a href="#main-content-sou" class="fade-a11y-close-sou" aria-label="Close modal">&times;</a>
    <div class="fade-a11y-content-sou">
      <h2 id="fade-a11y-title-sou">Modal Title</h2>
      <p id="fade-a11y-desc-sou">Modal description goes here.</p>
    </div>
  </div>
</div>
```

### 🎨 Customization via CSS Variables

| CSS Variable | Default | Purpose |
|---|---|---|
| `--fade-a11y-duration-sou` | `0.4s` | Duration of fade animation |
| `--fade-a11y-easing-sou` | `ease-in-out` | Easing function |
| `--fade-a11y-scale-sou` | `1` | Final scale factor |
| `--fade-a11y-bg-sou` | `#ffffff` | Modal background |
| `--fade-a11y-text-sou` | `#1a1a1a` | Text color (WCAG AA) |
| `--fade-a11y-primary-sou` | `#0055cc` | Primary accent (WCAG AA) |
| `--fade-a11y-focus-ring-sou` | `#ffbf00` | Visible focus indicator |
| `--fade-a11y-overlay-sou` | `rgba(0,0,0,0.6)` | Backdrop overlay |

**Example — override defaults:**

```css
:root {
  --fade-a11y-duration-sou: 0.6s;
  --fade-a11y-primary-sou: #7c3aed;
}
```

---

## 💡 Why is it useful?

This component embodies EaseMotion's **CSS-first philosophy** while making accessibility a first-class citizen:

- ✅ **WCAG AA Compliant** — high-contrast colors (4.5:1+ ratio), visible focus rings, and semantic markup.
- ✅ **Zero JavaScript** — pure CSS `:target` for state management.
- ✅ **Keyboard Accessible** — full tab navigation, `focus-visible` outlines, and a skip link.
- ✅ **Screen Reader Ready** — proper ARIA attributes (`role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`).
- ✅ **Motion-Sensitive** — respects `prefers-reduced-motion` and `prefers-contrast`.
- ✅ **Fully Customizable** — 11 CSS variables for timing, colors, and layout.

Perfect for government sites, education platforms, healthcare apps, and any product where inclusive design isn't optional — it's the standard.
