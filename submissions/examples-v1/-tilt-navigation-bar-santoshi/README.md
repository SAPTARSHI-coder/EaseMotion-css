# 3D Tilt Navigation Bar

A premium, glassmorphic navigation bar for EaseMotion CSS where every link lifts into a real 3D tilt on hover and keyboard focus — built with CSS `perspective`, `rotateX`/`rotateY`/`translateZ`, and `transform-style: preserve-3d`. No JavaScript.

## 🧩 Component Overview

Inspired by the floating, glassy nav bars seen on sites like Linear, Vercel, and Framer, this component gives each link its own small 3D scene rather than a single flat hover state. Behind each link's face sits a glow layer positioned deeper in Z-space, and the label itself sits slightly forward of its face — so hovering doesn't just change color, it genuinely rotates and lifts the link toward you.

**An important distinction:** this is a *fixed-angle* tilt (every link rotates toward the same deliberate angle on interaction), not a *cursor-tracking* tilt like the popular `vanilla-tilt.js` effect, where the rotation amount depends on exactly where your pointer sits over the element. Reading live pointer coordinates and mapping them to a rotation angle requires JavaScript — CSS alone cannot do that. This component instead treats every interaction (mouse hover *and* keyboard focus) identically, which keeps the effect fully accessible without sacrificing the 3D feel.

## ✨ Features

- Genuine 3D tilt using `perspective`, `rotateX`, `rotateY`, `translateZ`, and `transform-style: preserve-3d` — not a faked 2D shadow trick
- Layered depth: a glow plane behind the face, the face itself, and a label popped slightly forward, all sharing one 3D coordinate space
- Glassmorphic floating pill navbar with backdrop blur and layered ambient shadow
- Smooth spring-style easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on every transform
- Animated, permanently visible active-page indicator (gradient label + pulsing dot) via `aria-current="page"`
- Identical tilt state on `:hover` **and** `:focus-visible`, so keyboard users get the same effect as mouse users
- Fluid, `clamp()`-based spacing and type sizing instead of fixed pixel values
- Flex-wrap layout — no JavaScript hamburger menu; the bar wraps naturally on narrow viewports
- `prefers-reduced-motion` support disables all tilt, glow, and pulse animation
- Fully responsive across desktop, tablet, and mobile, with progressively subtler tilt angles at smaller sizes

## 📁 Folder Structure

submissions/examples/3d-tilt-navigation-bar-santoshikumbhar3-art/
├── demo.html   # Navbar markup plus minimal page context
├── style.css   # Design tokens, 3D tilt mechanics, glass styling, responsive rules
└── README.md   # This file

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS component.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this component's folder
cd easemotion-css/submissions/examples/3d-tilt-navigation-bar-santoshikumbhar3-art

# Open the demo directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🚀 Usage

1. Open `demo.html` in any modern browser and hover or tab through the nav links to see the tilt.
2. To reuse the bar in your own project, copy the `.tilt-navbar` block (including its `perspective` ancestor) into your layout.
3. Mark whichever link represents the current page with `aria-current="page"` to apply the active gradient label and pulsing indicator dot.
4. Update the `href` values to point at your real routes.

## 🎨 Customization

All key visual and motion properties live in `:root` as CSS custom properties:

| Variable | Controls |
|---|---|
| `--nav-bg`, `--nav-border`, `--nav-blur` | Glassmorphism surface of the navbar shell |
| `--accent-start`, `--accent-end`, `--accent-glow` | Gradient and glow colour used on hover, the active label, and the indicator dot |
| `--tilt-perspective` | How dramatic the 3D depth feels — a smaller value exaggerates the tilt, a larger value flattens it |
| `--ease-spring` | The overshoot curve driving the tilt's spring feel |
| `--duration-tilt` | How long the tilt transition takes |
| `--nav-padding-y/x`, `--link-padding-y/x`, `--nav-gap` | Fluid spacing throughout the bar |

To change the tilt angle itself, adjust the `rotateX()` / `rotateY()` / `translateZ()` values inside `.tilt-item:hover .tilt-face` (and its `:focus-visible` and responsive counterparts).

## 📱 Responsive Design

| Breakpoint | Behavior |
|---|---|
| 🖥 Desktop (> 768px) | Full tilt angle, generous fluid spacing |
| 📟 Tablet (≤ 768px) | Tilt angles reduced proportionally so the effect doesn't feel exaggerated on a smaller bar |
| 📱 Mobile (≤ 480px) | Bar wraps onto multiple rows via `flex-wrap`, tilt angles reduced further, corner radii tightened |

No fixed pixel widths are used for the navbar or its links — sizing is driven by `clamp()`, Flexbox, and content, so the bar reflows naturally at any viewport width.

## ♿ Accessibility

- Every link is a real `<a>` element inside a `<nav aria-label="Primary">` — no non-semantic `<div>`-based navigation.
- The active page is marked with `aria-current="page"`, the standard attribute assistive technology recognizes for current-page indication — not just a visual-only class.
- `:focus-visible` triggers the *exact same* tilt, glow, and label transforms as `:hover`, so keyboard users experience the full effect, plus a distinct visible outline ring on top of it.
- A skip link (`.skip-link`) lets keyboard and screen reader users bypass the navigation and jump straight to `#main-content`.
- All motion is disabled under `prefers-reduced-motion: reduce`, including the tilt transforms, the glow fade, and the active indicator's pulse.
- Text and background colour pairs were chosen for strong contrast against the dark glass surface.

## 🌐 Browser Compatibility

Built with widely supported CSS 3D transform features:

- `perspective`, `transform-style: preserve-3d`, `rotateX()`/`rotateY()`/`translateZ()` — supported in all current major browsers (Chrome, Edge, Firefox, Safari)
- `backdrop-filter` — supported in all current major browsers (Safari requires no prefix in recent versions; a `-webkit-` prefix is included for broader coverage)
- CSS custom properties, Flexbox, `:focus-visible` — broadly supported

Browsers without `backdrop-filter` support will show the navbar without the blur effect; the semi-transparent background and all functionality remain intact.

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.