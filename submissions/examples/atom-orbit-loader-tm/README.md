# Atom Electron Orbit Loader

**Issue:** #63191 | **Category:** loader / animation | **Tech Stack:** Pure HTML + CSS

---

## Overview

A glowing nucleus with tilted elliptical electron orbits at staggered
durations. Pure CSS, zero JavaScript, dark-mode ready.

## Design tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--atom-size` | 96px | Root container diameter |
| `--atom-nucleus-size` | 22px | Nucleus diameter |
| `--atom-nucleus-color` | #3b82f6 | Nucleus fill + glow |
| `--atom-orbit-1-duration` | 2.4s | First orbit speed |
| `--atom-orbit-2-duration` | 3.6s | Second orbit speed |
| `--atom-orbit-3-duration` | 4.8s | Third orbit speed |
| `--atom-primary-easing` | cubic-bezier(0.4,0,0.6,1) | Nucleus pulse easing |
| `--atom-ease-spin` | linear | Orbit spin easing |

## Variants

- `.<feature>--sm` / `.<feature>--lg` — size scale
- `.<feature>--purple` / `.<feature>--green` / `.<feature>--orange` — color themes
- `.<feature>__orbit--2` / `.<feature>__orbit--3` — additional orbits
- `.<feature>--paused` — paused state

## Usage

```html
<div class="atom" role="status" aria-label="Loading">
  <span class="atom__nucleus"></span>
  <span class="atom__orbit"></span>
  <span class="atom__orbit atom__orbit--2"></span>
</div>
```

## Accessibility

- `role="status"` + `aria-label="Loading"` on container
- `prefers-reduced-motion: reduce` disables animation
- `prefers-color-scheme: dark` transparent background

## Files

```
submissions/examples/atom-orbit-loader-tm/
  demo.html
  style.css
  README.md
```
