# Cyberpunk Float-Drift Modal

A pure CSS/HTML modal component with a cyberpunk neon aesthetic. The modal
"floats" into view with a drifting entrance animation, then settles into a
subtle ambient float loop while open — all with zero JavaScript.

## ✨ Features

- **Pure CSS / HTML** — no JS frameworks, no dependencies
- **`:target`-driven** — open/close state handled entirely by anchor links and the `:target` pseudo-class
- **Float-drift entrance** — a multi-stage keyframe animation that drifts, overshoots, and settles
- **Ambient hover loop** — gentle continuous float while the modal stays open
- **Animated neon glow ring** — rotating conic-gradient border for a cyberpunk edge
- **Fully responsive** — adapts padding, layout, and button stacking down to small mobile viewports
- **Accessible** — honors `prefers-reduced-motion` by disabling all animation/transform effects

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page with a trigger button and modal markup |
| `style.css` | All styling and animation logic |
| `README.md` | This file |

## 🚀 Usage

1. Include `style.css` in your page `<head>`.
2. Add a trigger link pointing to the modal's `id` via a `#` hash:

```html
<a href="#em-modal-1" class="em-btn em-btn-neon">Launch Modal</a>
```

3. Add the modal markup. The overlay's `id` must match the trigger's hash:

```html
<div id="em-modal-1" class="em-modal-overlay">
  <a href="#" class="em-modal-backdrop" aria-label="Close modal"></a>

  <div class="em-modal em-modal--float-drift" role="dialog" aria-modal="true" aria-labelledby="em-modal-1-title">
    <div class="em-modal-glow"></div>

    <header class="em-modal-header">
      <h2 id="em-modal-1-title">Your Title</h2>
      <a href="#" class="em-modal-close" aria-label="Close">&times;</a>
    </header>

    <div class="em-modal-body">
      <p>Your content here.</p>
    </div>

    <footer class="em-modal-footer">
      <a href="#" class="em-btn em-btn-ghost">Cancel</a>
      <a href="#" class="em-btn em-btn-neon">Confirm</a>
    </footer>
  </div>
</div>
```

4. Closing links (`.em-modal-backdrop`, `.em-modal-close`, footer buttons)
   simply point to `#`, which clears the URL hash and closes the modal — no
   JS required.

> Multiple modals on one page just need unique `id`s and matching trigger
> hashes (e.g. `#em-modal-2`).

## 🎛️ CSS Custom Properties

Customize the theme by overriding these variables on `:root` or a scoped
parent:

```css
:root {
  --em-bg: #0a0a12;              /* page background */
  --em-surface: #12121e;         /* modal background (top of gradient) */
  --em-surface-2: #181828;       /* modal background (bottom of gradient) */
  --em-text: #e8e8f5;            /* primary text color */
  --em-text-dim: #9a9ab0;        /* secondary/muted text color */

  --em-neon-primary: #00f0ff;    /* primary neon (cyan) */
  --em-neon-secondary: #ff00e5;  /* secondary neon (magenta) */
  --em-neon-accent: #b026ff;     /* accent neon (violet) */

  --em-radius: 14px;             /* modal corner radius */
  --em-duration-fast: 0.2s;      /* button/link transitions */
  --em-duration-base: 0.4s;      /* overlay fade */
  --em-duration-drift: 6s;       /* float-drift entrance duration */
}
```

Swap `--em-neon-primary` / `--em-neon-secondary` / `--em-neon-accent` for a
different palette (e.g. green/amber for a terminal theme) — the glow ring,
text shadows, and button gradient all reference these automatically.

## 🧩 Key Classes

| Class | Purpose |
|---|---|
| `.em-modal-overlay` | Full-screen fixed container, toggled by `:target` |
| `.em-modal-backdrop` | Clickable dimmed backdrop that closes the modal |
| `.em-modal--float-drift` | Applies the float-drift entrance + ambient loop animation |
| `.em-modal-glow` | Rotating conic-gradient neon border effect |
| `.em-btn-neon` / `.em-btn-ghost` | Primary and secondary button styles |

## ♿ Accessibility Notes

- The modal container uses `role="dialog"`, `aria-modal="true"`, and
  `aria-labelledby` pointing to the modal title.
- All animation and transform effects are disabled under
  `prefers-reduced-motion: reduce`; the modal still opens/closes via a fast
  opacity fade instead of the drift/float motion.
- Close controls (`✕`, backdrop, Cancel button) are all standard focusable
  links, so keyboard and screen-reader users can dismiss the modal via
  native anchor navigation.

## 📱 Responsive Behavior

- Modal padding and max-width scale down under `600px` and `380px`
  breakpoints.
- Footer buttons stack full-width and reverse order on small screens for
  thumb-friendly tapping (primary action on top).

## 🌐 Browser Support

Relies on standard, widely-supported CSS: `:target`, CSS custom properties,
`backdrop-filter`, `mask-composite` (with `-webkit-mask-composite` fallback
for Safari), and CSS keyframe animations. Works in all modern evergreen
browsers.