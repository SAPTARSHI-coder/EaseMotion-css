# Animated Dock Navigation

> Part of **EaseMotion CSS** — an open-source CSS animation library built on the philosophy that motion should be expressive, composable, and human-readable.

---

## Description

A premium macOS-inspired floating dock navigation component built with **pure HTML and CSS** — zero JavaScript, zero frameworks. It sits fixed at the bottom-center of the viewport, wrapped in glassmorphism styling, and responds to hover with a fluid neighbour-magnification effect that mirrors the real macOS Dock behaviour — all driven by CSS `:has()`, `transform`, and `transition` alone.

Designed to look at home on a product by Apple or Linear.

---

## Preview

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           Animated Dock Navigation                   │
│     A macOS-inspired floating dock — pure CSS        │
│                                                      │
│                                                      │
│   ╔══════════════════════════════════════════════╗   │
│   ║  🏠   🔍   📁  │  ❤️   💬   ⚙️              ║   │
│   ║ [●]                                          ║   │
│   ╚══════════════════════════════════════════════╝   │
└──────────────────────────────────────────────────────┘
```

---

## Features

### Floating Dock
A fixed-position dock anchored to the bottom-center of the viewport. Works across all screen sizes — from widescreen desktops to narrow mobile phones — remaining perfectly centred at all times.

### Glassmorphism
The dock panel uses `backdrop-filter: blur()` with a translucent background, a one-pixel frosted border, and a layered box-shadow to achieve the depth and dimensionality of frosted glass. A subtle top-edge shine strip reinforces the glass illusion.

### Hover Animation
Hovering an icon triggers a spring-eased scale-up, upward lift, and slight rotation on the target icon, plus a per-icon soft glow that matches its unique gradient palette (blue, cyan, purple, pink, green). The CSS `:has()` selector magnifies immediate neighbours at 1.2× and second-degree neighbours at 1.08× — recreating the classic macOS Dock magnification wave with no JavaScript.

### Entrance Animation
On page load:
- The dock panel fades in, slides upward from below, and de-blurs over `0.7s` with a spring curve.
- Each icon pops in sequentially with a staggered delay (`0.65s` → `1.15s`), creating a cascading appearance effect.
- The hero text fades in independently with a matching ease.

### Responsive
Three layout tiers via `@media` breakpoints:
- **Desktop** (`> 768px`): Full 58px icons, standard spacing.
- **Tablet** (`≤ 768px`): 50px icons, tightened gaps.
- **Mobile** (`≤ 480px`): 44px icons, minimal padding, separator hidden.

All tiers keep the dock centred with `position: fixed; left: 50%; transform: translateX(-50%)`.

### CSS Only
No JavaScript. No frameworks. No build step. Drop the two files into any project and it works.

---

## File Structure

```
dock-navigation/
├── demo.html    ← Open directly in any browser
└── style.css    ← All styling, animations, and tokens
```

---

## Usage

### 1. Standalone demo
Just open `demo.html` in a browser — no server, no build, no dependencies.

### 2. Drop into an existing project

Copy `style.css` into your project, link it in your `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css" />
```

Then paste the dock markup wherever you need it:

```html
<nav class="dock" role="navigation" aria-label="Main navigation dock">

  <a href="#home" class="dock__item dock__item--active" data-label="Home" aria-label="Home">
    <span class="dock__icon dock__icon--home">🏠</span>
    <span class="dock__dot"></span>
  </a>

  <a href="#search" class="dock__item" data-label="Search" aria-label="Search">
    <span class="dock__icon dock__icon--search">🔍</span>
    <span class="dock__dot"></span>
  </a>

  <!-- Add more items as needed -->

</nav>
```

### 3. Customise via CSS variables

All design decisions are exposed as CSS custom properties in `:root`. Override any of them to retheme the component without touching the animation logic:

```css
:root {
  /* Change icon size */
  --icon-size: 64px;

  /* Change animation speed */
  --t-normal: 0.25s;

  /* Change glass tint */
  --color-glass-bg: rgba(255, 255, 255, 0.10);

  /* Replace icon gradient */
  --gradient-icon-home: linear-gradient(135deg, #f97316, #ec4899);
}
```

### 4. Adding a new icon

1. Add a new `<a class="dock__item">` with a unique `data-label`.
2. Create a modifier class for it (e.g. `dock__icon--camera`).
3. Add a gradient variable and a glow variable in `:root`.
4. Add a hover `box-shadow` rule for the new modifier class.

---

## Accessibility

- All icons include `aria-label` on the anchor and `role="img"` / `aria-hidden="true"` on the emoji span, keeping the accessible name clean.
- The component respects `prefers-reduced-motion`: all animation durations collapse to `0.01ms` when the user has requested reduced motion at the OS level.
- The dock uses semantic `<nav>` with an `aria-label`, making it discoverable by screen readers.

---

## Browser Support

| Feature              | Chrome | Firefox | Safari | Edge |
|----------------------|--------|---------|--------|------|
| `backdrop-filter`    | ✅ 76+ | ✅ 103+ | ✅ 9+  | ✅   |
| CSS `:has()`         | ✅ 105+| ✅ 121+ | ✅ 15.4+| ✅  |
| CSS Custom Properties| ✅     | ✅      | ✅     | ✅   |
| `animation`          | ✅     | ✅      | ✅     | ✅   |

In browsers without `:has()` support, the neighbour magnification degrades gracefully — the hovered icon still scales, glows, and lifts; only the wave effect is absent.

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built on three core principles. This component embodies all of them:

**Animation-first.** Motion is not an afterthought layered on top of a static UI — it *is* the UI. Every interaction (hover, entrance, press) is driven by a purposeful animation that communicates state and gives the interface a physical presence. The entrance sequence, the neighbour magnification, and the per-icon glow are all load-bearing design decisions, not decoration.

**Human-readable.** The CSS is written to be understood at a glance. CSS custom properties are named for what they *mean* (`--glow-home`, `--t-normal`, `--ease-spring`), not what they are (`--rgba-79-158-255`, `--duration-2`). The keyframe names (`dockEntrance`, `iconEntrance`, `orbFloat`) read like sentences. Any developer can open the file, find the animation they want to change, and change it without fear.

**Composable.** The component is built from isolated, overridable pieces. The dock panel, the icon, the glow, the tooltip, the active dot — each is a self-contained layer that can be adopted or dropped independently. CSS variables create a clean public API. You can take just the glass panel, just the spring hover, or just the staggered entrance, and compose them into something entirely different. That is the EaseMotion CSS way.

---

## License

MIT — free to use, modify, and redistribute.