# Zoom-Out Modal for Cyberpunk Neon Layouts (sou)

## 📌 What does this do?

A pure CSS animated modal that zooms out from a larger scale to its final size with a springy transition, styled with cyberpunk neon aesthetics — glowing borders, animated grid backgrounds, and futuristic typography.

---

## 🛠️ How is it used?

Trigger the modal using an anchor link pointing to the modal's `id`, and close it with a link back to `#`. Fully powered by the CSS `:target` pseudo-class — no JavaScript required.

### HTML Usage

```html
<!-- Trigger Button -->
<a href="#zoom-cyber-sou" class="btn-neon-sou">Access Mainframe</a>

<!-- Modal Structure -->
<div id="zoom-cyber-sou" class="zoom-cyber-overlay-sou" role="dialog" aria-modal="true">
  <div class="zoom-cyber-modal-sou">
    <a href="#" class="zoom-cyber-close-sou" aria-label="Close modal">✕</a>
    <div class="zoom-cyber-content-sou">
      <h2>Access Granted</h2>
      <p>Your modal content here.</p>
    </div>
  </div>
</div>
```

### 🎨 Customization via CSS Variables

| CSS Variable | Default | Purpose |
|---|---|---|
| `--zoom-cyber-duration-sou` | `0.6s` | Duration of the zoom-out animation |
| `--zoom-cyber-easing-sou` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy easing curve |
| `--zoom-cyber-scale-start-sou` | `3` | Initial (zoomed-in) scale |
| `--zoom-cyber-scale-end-sou` | `1` | Final (natural) scale |
| `--zoom-cyber-neon-pink-sou` | `#ff2e97` | Primary neon pink accent |
| `--zoom-cyber-neon-cyan-sou` | `#00f0ff` | Primary neon cyan accent |
| `--zoom-cyber-neon-purple-sou` | `#b537f2` | Secondary neon purple |
| `--zoom-cyber-bg-sou` | `#0a0015` | Page background |
| `--zoom-cyber-modal-bg-sou` | `#14002b` | Modal background |

**Example — override defaults:**

```css
:root {
  --zoom-cyber-duration-sou: 0.9s;
  --zoom-cyber-neon-pink-sou: #ff00ff;
  --zoom-cyber-neon-cyan-sou: #00ffcc;
}
```

---

## 💡 Why is it useful?

This component brings EaseMotion's **CSS-first, zero-JavaScript philosophy** to cyberpunk-themed interfaces. It:

- ✅ **Delivers a bold aesthetic** — perfect for gaming UIs, cyberpunk dashboards, sci-fi SaaS products, and Web3/crypto interfaces.
- ✅ **Uses zero JavaScript** — powered entirely by the CSS `:target` pseudo-class.
- ✅ **Fully accessible** — ARIA attributes, keyboard focus states, and `prefers-reduced-motion` support.
- ✅ **Fully customizable** — 9+ CSS variables expose timing, easing, scale, and the neon color palette.
- ✅ **Immersive details** — animated neon grid background, glowing corner accents, flickering title, and a springy zoom-out effect that mimics a hologram materializing.

This modal fills a niche in the EaseMotion examples library, giving developers a ready-made futuristic modal pattern that stays true to the framework's minimalist, animation-first mission.
