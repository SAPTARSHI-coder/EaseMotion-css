# Glitch-Flicker Popover

A pure CSS/HTML popover component that reveals project details with a
cyberpunk-style RGB-split glitch and neon flicker effect — built for
creative portfolio layouts. No JavaScript required.

## 🎬 Preview

Hover or keyboard-focus a **"View details"** button to trigger the
popover. The title text splits into cyan/magenta layers and flickers
like an unstable neon sign or CRT signal while the popover is open.

## 📦 Files

```
submissions/examples/glitch-flicker-popover/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include `style.css` and reuse the markup pattern below for any
portfolio card:

```html
<div class="em-glitch-popover-wrap">
  <button class="em-glitch-trigger" aria-describedby="glitch-pop-1">
    View details
  </button>

  <div id="glitch-pop-1" class="em-glitch-popover" role="tooltip">
    <span class="em-glitch-popover__text" data-text="SYSTEM ONLINE">
      SYSTEM ONLINE
    </span>
    <p class="em-glitch-popover__desc">
      Your project description goes here.
    </p>
  </div>
</div>
```

**Important:** the `data-text` attribute on
`.em-glitch-popover__text` must match the element's visible text
content exactly — the glitch layers are generated from
`attr(data-text)`.

Give each popover a unique `id` and match it to the trigger's
`aria-describedby` so assistive tech announces the right content.

## 🎛️ CSS Custom Properties

All properties are defined on `:root` and can be overridden globally
or scoped to a single card:

| Property | Default | Description |
|---|---|---|
| `--em-glitch-color-1` | `#ff2ec4` | First glitch split-layer color (magenta) |
| `--em-glitch-color-2` | `#2ee6ff` | Second glitch split-layer color (cyan) |
| `--em-glitch-accent` | `#7c4dff` | Trigger button accent color |
| `--em-glitch-surface` | `#16161f` | Card background |
| `--em-glitch-border` | `#2a2a38` | Card/popover border color |
| `--em-glitch-text` | `#f2f2f5` | Base text color |
| `--em-glitch-muted` | `#a3a3b3` | Secondary/description text color |
| `--em-glitch-radius` | `10px` | Card border radius |
| `--em-glitch-popover-width` | `280px` | Popover panel width |
| `--em-glitch-flicker-duration` | `1.6s` | Length of one flicker cycle |
| `--em-glitch-shift-duration` | `3.2s` | Length of one RGB-split shift cycle |
| `--em-glitch-reveal-duration` | `220ms` | Fade/slide-in duration for the popover panel |

Example override for a single card:

```css
.em-glitch-card--danger {
  --em-glitch-color-1: #ff003c;
  --em-glitch-color-2: #ffb400;
  --em-glitch-accent: #ff003c;
}
```

## ✨ Features

- **Pure CSS/HTML** — no JavaScript, no dependencies.
- **RGB-split glitch title** using layered `::before`/`::after`
  pseudo-elements clipped and offset with `clip-path`.
- **Irregular flicker** via a `steps()` keyframe animation that mimics
  unstable neon/CRT signal behavior.
- **Keyboard accessible** — the popover opens on both `:hover` and
  `:focus-within`, so it's fully usable via Tab navigation.
- **Fully responsive** — the popover re-centers under its trigger and
  shrinks to fit on narrow viewports (tested down to 320px).
- **`prefers-reduced-motion` support** — all glitch/flicker animations
  are disabled for users who request reduced motion; the split-color
  effect degrades gracefully to a static offset instead of vanishing.
- **Semantic & ARIA-aware** — uses `role="tooltip"` and
  `aria-describedby` to connect the trigger to its popover content.

## ♿ Accessibility Notes

- Animations respect `prefers-reduced-motion: reduce`.
- The trigger is a real `<button>`, so it is natively focusable and
  operable with the keyboard/Enter/Space.
- Color is never the only signal — the popover's visibility is driven
  by `opacity`/`visibility`/`transform`, not color alone.

## 🌐 Browser Support

Works in all modern evergreen browsers (Chrome, Edge, Firefox,
Safari) — relies only on standard CSS: `clip-path`, custom properties,
`:focus-within`, and keyframe animations.