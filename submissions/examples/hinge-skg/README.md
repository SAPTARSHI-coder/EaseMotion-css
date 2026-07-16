# hinge-skg — Hinge Animation Example

> EaseMotion CSS · Standard Track Submission
> Contributor: karrisanthoshigayatri · Issue #47734

---

## What does this do?

Implements a **Hinge** animation — the element pivots on its top-left corner
(as if one hinge snapped) and falls off-screen under gravity, fading to
transparent at the end. Also includes a lighter hover-wobble variant for
micro-interactions that don't require a full exit.

---

## How is it used?

### Full hinge fall (click-triggered)

```html
<!-- Add .hinge-active via JavaScript to start the animation -->
<div class="hinge-card hinge-trigger" onclick="this.classList.add('hinge-active')">
  Click Me
</div>
```

### Auto-play on load

```html
<div class="hinge-card hinge-auto">
  Drops after 1 s delay
</div>
```

### Hover wobble (no fall)

```html
<div class="hinge-card hinge-hover-wobble">
  Hover to wobble
</div>
```

### Speed modifiers

```html
<div class="hinge-card hinge-trigger hinge-slow">Slow (3.5 s)</div>
<div class="hinge-card hinge-trigger">Default (2 s)</div>
<div class="hinge-card hinge-trigger hinge-fast">Fast (0.9 s)</div>
```

### CSS custom properties

All timing and physics are controlled via CSS variables — override them on
any element or globally in `:root`:

| Variable           | Default   | Description                          |
| ------------------ | --------- | ------------------------------------ |
| `--hinge-duration` | `2s`      | Total animation duration             |
| `--hinge-delay`    | `0s`      | Delay before animation starts        |
| `--hinge-angle`    | `80deg`   | Maximum swing angle from pivot       |
| `--hinge-gravity`  | `1500px`  | Fall distance (translateY at exit)   |

```css
/* example — custom speed and angle */
.my-element {
  --hinge-duration: 1.2s;
  --hinge-angle: 60deg;
}
```

---

## Why is it useful?

The hinge effect is a classic **exit animation** pattern used to:

- Dismiss modals, cards, or notifications in a memorable way
- Draw attention to an element being removed from the UI
- Add personality to onboarding flows or tutorial overlays

It fits EaseMotion's philosophy by encapsulating a complex multi-keyframe
motion into a single utility class while remaining fully customizable through
CSS custom properties. The `prefers-reduced-motion` media query is respected —
on devices with reduced motion preferences the animation is suppressed and the
element is simply hidden.

---

## Variants included

| Class                | Behavior                                    |
| -------------------- | ------------------------------------------- |
| `hinge-trigger`      | Plays on click (JS adds `.hinge-active`)    |
| `hinge-auto`         | Auto-plays once after a 1 s load delay      |
| `hinge-hover-wobble` | Gentle wobble on hover, no fall             |
| `hinge-slow`         | Modifier — sets duration to 3.5 s           |
| `hinge-fast`         | Modifier — sets duration to 0.9 s           |

---

## File structure

```
submissions/examples/hinge-skg/
├── demo.html   ← self-contained demo, works by opening in a browser
├── style.css   ← all keyframes, utility classes, custom properties
└── README.md   ← this file
```

---

## Setup & Preview

No build step required. Open `demo.html` directly in any modern browser:

```
# Windows
start submissions/examples/hinge-skg/demo.html

# macOS
open submissions/examples/hinge-skg/demo.html
```

---

## Browser compatibility

Tested against:

| Browser | Status |
| ------- | ------ |
| Chrome 120+ | ✅ |
| Firefox 121+ | ✅ |
| Safari 17+ | ✅ |
| Edge 120+ | ✅ |

---

## Accessibility

- `prefers-reduced-motion: reduce` — animations are disabled; the element
  fades to 40% opacity instead of animating, preserving intent without motion.
- Interactive cards carry `role="button"` and `tabindex="0"` with keyboard
  support (`Enter` / `Space`) so the demo is reachable without a mouse.

---

## Contribution notes

- Class naming follows contributor conventions; the maintainer will rename
  to the `ease-*` prefix before merging into core.
- No core framework files were modified.
- All files are contained within `submissions/examples/hinge-skg/`.
