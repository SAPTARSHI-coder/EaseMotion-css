# Slide-Right Modal for Marketing Landing Page (sou)

## 📌 What does this do?

A pure CSS animated side-drawer modal that slides in smoothly from the right — designed for marketing landing pages, lead-capture forms, and conversion-focused CTAs.

---

## 🛠️ How is it used?

Trigger the modal via anchor links pointing to the modal's `id`. Close it with a link back to `#`. No JavaScript — powered by the CSS `:target` pseudo-class.

### HTML Usage

```html
<!-- Trigger Button -->
<a href="#slide-mkt-sou" class="btn-mkt-primary-sou">Start Free Trial</a>

<!-- Slide-Right Modal -->
<div id="slide-mkt-sou" class="slide-mkt-overlay-sou" role="dialog" aria-modal="true">
  <div class="slide-mkt-modal-sou">
    <a href="#" class="slide-mkt-close-sou" aria-label="Close">&times;</a>
    <div class="slide-mkt-content-sou">
      <h2>Start Your Free Trial</h2>
      <form>
        <input type="email" placeholder="Your email" />
        <button type="submit" class="btn-mkt-primary-sou">Get Started</button>
      </form>
    </div>
  </div>
</div>
```

### 🎨 Customization via CSS Variables

| CSS Variable | Default | Purpose |
|---|---|---|
| `--slide-mkt-duration-sou` | `0.55s` | Slide animation duration |
| `--slide-mkt-easing-sou` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve |
| `--slide-mkt-scale-sou` | `1` | Final scale factor |
| `--slide-mkt-width-sou` | `480px` | Modal panel width |
| `--slide-mkt-primary-sou` | `#7c3aed` | Primary brand color |
| `--slide-mkt-accent-sou` | `#f59e0b` | Accent color |
| `--slide-mkt-overlay-sou` | `rgba(15,23,42,0.55)` | Backdrop color |

**Example — override defaults:**

```css
:root {
  --slide-mkt-duration-sou: 0.8s;
  --slide-mkt-width-sou: 560px;
  --slide-mkt-primary-sou: #ef4444;
}
```

---

## 💡 Why is it useful?

This component brings a modern **side-drawer conversion pattern** to marketing landing pages using pure CSS:

- ✅ **Zero JavaScript** — powered by CSS `:target`.
- ✅ **Conversion-optimized** — includes badge, headline, benefits list, form, and trust footnote slots.
- ✅ **Slide-right side drawer** — non-intrusive, doesn't block hero content on entry.
- ✅ **Fully accessible** — ARIA attributes, keyboard focus states, `prefers-reduced-motion` support.
- ✅ **Highly customizable** — 10+ CSS variables for timing, colors, width, and easing.
- ✅ **Backdrop blur** — modern glass-morphism effect for a polished feel.

Perfect for SaaS landing pages, newsletter opt-ins, free-trial CTAs, waitlists, and any lead-capture flow where a slide-in panel converts better than a centered modal.
