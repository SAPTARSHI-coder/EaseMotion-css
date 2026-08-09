# Glitch-Flicker Modal

A production-ready, cyberpunk-inspired glassmorphism checkout modal built for the **EaseMotion CSS** library. Combines a frosted glassmorphism surface, neon purple/cyan accents, an animated glowing border, and a glitch-flicker heading effect — all in pure, dependency-free CSS.

## Overview

This example demonstrates how EaseMotion CSS can power a premium, animated e-commerce checkout experience without any JavaScript or external libraries. It showcases layered CSS animations (fade, scale, float, border glow, and text glitch) built entirely with GPU-friendly `transform`/`opacity` properties, alongside a fully accessible dialog implementation.

## Features

- 🪟 Glassmorphism modal with frosted background blur
- 🟣 Neon purple + cyan cyberpunk color palette
- ⚡ Cyberpunk glitch-effect title using layered pseudo-elements
- 💡 Flickering neon subtitle text
- 🌊 Animated gradient glowing border
- 🎈 Floating shadow micro-motion
- 🖱️ Smooth hover glow and press feedback on buttons
- ⌨️ Full keyboard focus-visible support
- ♿ Semantic, accessible dialog markup
- 📱 Mobile-first responsive layout
- 🚫 Zero JavaScript, zero dependencies
- 🎛️ `prefers-reduced-motion` support built in

## Folder Structure

submissions/
└── examples/
└── glitch-flicker-modal/
├── demo.html
├── style.css
└── README.md

## Usage

1. Copy the `glitch-flicker-modal` folder into your project or the EaseMotion `examples/` directory.
2. Open `demo.html` directly in a browser, or serve the folder with any static file server.
3. No build step, bundler, or package installation is required.

```bash
# Optional: serve locally
npx serve submissions/examples/glitch-flicker-modal
```

## CSS Custom Properties

All design tokens are defined on `:root` in `style.css` for easy theming:

| Variable | Purpose | Default |
|---|---|---|
| `--bg` | Page background | `#0a0a12` |
| `--surface` | Modal glass surface (translucent) | `rgba(20, 20, 32, 0.55)` |
| `--primary` | Neon purple accent | `#b24bf3` |
| `--secondary` | Neon cyan accent | `#24e5ff` |
| `--text` | Primary text color | `#f2f1fa` |
| `--border` | Modal border color | `rgba(178, 75, 243, 0.35)` |
| `--radius` | Modal corner radius | `18px` |
| `--shadow` | Modal drop shadow / glow | layered box-shadow |
| `--duration` | Base transition/animation duration | `420ms` |

Override any of these on `:root` (or scope them to `.ease-modal`) to reskin the component for a different brand.

## Responsive Behavior

- **Mobile (default, < 640px):** Modal fills available width with `1rem` viewport padding, stacked buttons (Complete Purchase above Cancel).
- **Small tablet (≥ 480px):** Action buttons switch to a horizontal row.
- **Tablet (≥ 640px):** Modal max-width increases to `480px` with more generous internal padding.
- **Desktop (≥ 1024px):** Page backdrop gains additional breathing room; modal remains centered via flexbox.

The layout uses `clamp()` for the glitch title so font size scales fluidly between breakpoints instead of jumping.

## Accessibility Support

- Modal uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` pointing to the title and description.
- Buttons include descriptive `aria-label`s (e.g. total amount is announced on the purchase button).
- All interactive elements expose visible `:focus-visible` states with a high-contrast cyan outline and glow ring — not reliant on color alone.
- Decorative backdrop content is marked `aria-hidden="true"` so assistive tech focuses on the checkout dialog.
- Full `prefers-reduced-motion` support disables all animation and transition effects for users who request reduced motion at the OS level.
- Color contrast between text, background, and accent colors meets WCAG AA for body copy and interactive controls.

> Note: this static demo does not include focus-trapping or `Escape`-to-close behavior, since those require JavaScript. In production, pair this markup with your JS modal controller (or the EaseMotion JS module, if used) to trap focus and manage `Escape`/backdrop-click dismissal.

## Browser Compatibility

Tested against current stable releases of:

- Chrome / Edge (Chromium) — full support, including `backdrop-filter` and `mask-composite`
- Firefox — full support (backdrop-filter enabled by default in modern versions)
- Safari (macOS/iOS) — full support via `-webkit-backdrop-filter` and `-webkit-mask-composite` fallbacks

Graceful degradation: browsers without `backdrop-filter` support will render the modal with a solid/semi-opaque background instead of a blurred one; core layout and functionality remain intact.

## Animation Details

| Animation | Element | Technique |
|---|---|---|
| Fade-in | `.ease-overlay` | `opacity` keyframe on mount |
| Scale-in | `.ease-modal` | `transform: scale()` + `translateY()` entrance |
| Floating shadow | `.ease-modal` | Looping subtle `translateY` drift |
| Background blur | `.ease-overlay` | `backdrop-filter: blur()` |
| Glowing border | `.ease-modal::before` | Animated gradient with `mask-composite: exclude` |
| Glitch title | `.ease-glitch-title` | Two color-shifted `::before`/`::after` clip-path slices + skew jitter |
| Flicker text | `.ease-flicker` | Stepped `opacity` keyframes mimicking unstable neon |
| Button hover glow | `.ease-btn--primary` | `box-shadow` + `translateY` on `:hover` |
| Focus-visible | `.ease-btn`, `.ease-link` | Outline + glow ring on keyboard focus |

All animations rely solely on `transform` and `opacity` (plus `background-position` for the border sweep) to stay on the GPU compositing path and avoid layout thrashing.

## Customization Guide

- **Recolor the theme:** change `--primary` and `--secondary` on `:root` to swap the neon palette (e.g. pink/lime for a different cyberpunk mood).
- **Adjust glitch intensity:** tweak the translate values inside `ease-glitch-shift-1` / `ease-glitch-shift-2` keyframes, or reduce the `steps()` frequency in `ease-glitch-skew`.
- **Slow down / speed up motion:** change `--duration` and `--duration-slow`, or edit individual keyframe durations (e.g. `ease-float`, `ease-border-glow`).
- **Disable specific effects:** remove the relevant animation declaration from `.ease-modal`, `.ease-glitch-title`, or `.ease-flicker` without affecting the rest of the component.
- **Resize the modal:** adjust `max-width` on `.ease-modal` and its breakpoint override at `≥ 640px`.
- **Swap glass intensity:** adjust the alpha channel in `--surface` and the `blur()` value in `.ease-modal`'s `backdrop-filter`.