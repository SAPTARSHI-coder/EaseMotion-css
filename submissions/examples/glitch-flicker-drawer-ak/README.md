# Glitch-Flicker Drawer for Gaming Hub Layouts

## What does this do?
A pure CSS slide-out navigation drawer with a CRT-style glitch/flicker entrance animation and flickering title text, built for gaming hub layouts.

## How is it used?
```html
<input type="checkbox" id="drawer-toggle">
<label for="drawer-toggle" class="drawer-trigger">☰ Open Menu</label>
<label for="drawer-toggle" class="drawer-overlay"></label>

<div class="glitch-drawer">
  <label for="drawer-toggle" class="drawer-close">✕</label>
  <h2>MENU</h2>
  <nav>
    <a href="#">Library</a>
    <a href="#">Store</a>
  </nav>
</div>
```
The drawer opens/closes using the checkbox hack (pure CSS, no JS).

## Why is it useful?
Gaming hub UIs often lean into a "digital/glitch" aesthetic. This drawer provides a slide-out nav with a stepped clip-path glitch entrance and subtle text flicker, giving that CRT/cyberpunk feel with pure CSS. It's fully responsive, keyboard-focus friendly, and respects `prefers-reduced-motion` by disabling the glitch/flicker effects for motion-sensitive users — fitting EaseMotion's animation-first, accessible philosophy.

## CSS Custom Properties
- `--drawer-width`: width of the drawer (default `280px`)
- `--drawer-bg`: drawer background color (default `#0d0d17`)
- `--glitch-cyan` / `--glitch-magenta`: glitch text-shadow colors
- `--transition-speed`: base transition duration (default `0.4s`)
