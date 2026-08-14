# Skew-Active Tabs — Cyberpunk Neon Layouts

A pure CSS tab component with skew transforms, neon glow effects, and cyberpunk dark UI styling. Tabs skew on hover and activation, panels animate in with a skewed entrance, and stat cards respond with a neon flash.

## Features

- **Skew transforms** — tabs and stat cards use `skewX(-8deg)` for a dynamic cyberpunk tilt
- **Neon glow effects** — active tabs and hovered stats emit cyan box-shadows
- **Panel entrance animation** — panels slide in with a skewed-to-straight transition
- **Scanline overlay** — subtle CRT-style scanlines on the panel area
- **Animated background** — pulsing cyan and magenta glow orbs with horizontal grid lines
- **Fully responsive** — tab bar wraps to 2x2 grid on mobile, stats stack vertically
- **Reduced-motion accessible** — all animations disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--sat-bg` | `#05080f` | Page background |
| `--sat-surface` | `rgba(255,255,255,0.04)` | Panel and card fill |
| `--sat-surface-hover` | `rgba(255,255,255,0.08)` | Hovered surface fill |
| `--sat-border` | `rgba(255,255,255,0.08)` | Border color |
| `--sat-text` | `#e0e6f0` | Primary text |
| `--sat-text-dim` | `rgba(224,230,240,0.5)` | Secondary text |
| `--sat-cyan` | `#00f0ff` | Primary neon accent |
| `--sat-magenta` | `#ff2d95` | Secondary neon accent |
| `--sat-yellow` | `#ffe600` | Highlight accent |
| `--sat-cyan-glow` | `rgba(0,240,255,0.35)` | Cyan glow shadow |
| `--sat-magenta-glow` | `rgba(255,45,149,0.35)` | Magenta glow shadow |
| `--sat-skew` | `-8deg` | Skew angle for tabs and cards |
| `--sat-transition` | `0.3s cubic-bezier(0.4,0,0.2,1)` | Transition timing |

## How It Works

1. Tab buttons use `transform: skewX(-8deg)` in their default and active states for a tilted appearance.
2. Hovering a tab intensifies the skew with a neon gradient overlay via `::before`.
3. The active tab gets a cyan border, text color, and `box-shadow` glow.
4. Panel entrance uses `satPanelIn` keyframes — starting skewed and shifting to straight.
5. Stat cards default to skewed and straighten on hover with a cyan neon flash.
6. Background lines and glow orbs complete the cyberpunk atmosphere.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust skew angles, neon colors, or glow intensity.
