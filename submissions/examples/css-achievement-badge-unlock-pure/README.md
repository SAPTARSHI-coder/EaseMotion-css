# CSS Achievement Badge Unlock

A pure CSS interactive component that animates an achievement badge unlock sequence, featuring a dynamic starburst fanfare and a sweeping metallic shine, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--badge-bg`, `--gold-glow`, etc.). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a moody, high-contrast dark mode variant.
- **Unlock Animation Sequence (Documented in Code)**: 
  - **State Swap**: The badge defaults to a "locked" state (desaturated using `filter: grayscale(100%)`, scaled down, and slightly opaque). Hovering triggers the "unlocked" state, restoring full color, scaling up, and adding a gold drop shadow.
  - **Starburst Fanfare**: Behind the badge sits a `.fanfare-burst` div. It uses a `repeating-conic-gradient` masked by a `radial-gradient` to create a fading sunburst ray pattern. On hover, it springs into view (`scale(1)`) and continuously rotates (`animation: spinFanfare`).
  - **Metallic Sweep**: The `.badge-shine` is an absolute positioned diagonal `linear-gradient` inside the card (`overflow: hidden`). On hover, a `@keyframes` animation sweeps it from left to right across the card, simulating a shiny glare.
- Fully accessible with `prefers-reduced-motion` support. The bouncy translations, sweeps, and continuous spinning animations are disabled for motion-sensitive users, acting instead as a simple state-swap. The `.unlock-container` uses `tabindex="0"` and `:focus-within` to ensure keyboard navigators can interact with the component.

## Usage
Open `demo.html` in your browser. Hover your mouse (or tab focus) over the container to unlock the achievement and trigger the fanfare animation sequence.

## Files
- `demo.html`: The HTML structure containing the container, fanfare burst layer, metallic shine layer, and badge content.
- `style.css`: The styling, robust CSS Custom Property theming blocks, and the heavily commented animation and gradient techniques.
