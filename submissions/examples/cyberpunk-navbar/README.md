# Access Terminal Navbar (`ease-navbar--terminal`)

A navbar designed as a corp-net access terminal panel rather than a generic neon sign — a CRT amber/cyan duotone, a clipped tech-armor silhouette, corner-bracket framing, a live link-status LED, and hex-indexed nav links revealed by a circuit-trace line. Built with **pure CSS**, no JavaScript.

## Files

- `demo.html` — standalone live demo
- `style.css` — the component

## Design intent

Cyberpunk UI in games and film (Blade Runner terminals, Cyberpunk 2077's netrunner interfaces) leans on *diegetic* HUD details — status readouts, hex addresses, bracket framing, scanlines — rather than a rounded pill with a magenta glow. This component borrows that vocabulary instead of the generic "neon gradient" look:

- **Clipped panel, not a rounded pill** — `clip-path` bevels two corners for an armor-plate silhouette.
- **Corner brackets** — four L-shaped brackets frame the whole nav like a targeting reticle, independent of the panel itself.
- **Hex-indexed links** — each nav item carries an address (`0x00`–`0x03`) that dims at rest and brightens on hover/focus, alongside a circuit-trace underline that grows in from the left.
- **Status LED + blinking cursor** — the brand block reads like a real terminal ident line (`SYS // LINK STABLE`), with a two-color pulsing LED and a blinking text cursor after the brand name.
- **Data-bus divider** — a dashed line beneath the panel with a glowing dot traveling along it, like a status pulse on a bus line.

## How it works

- **No JS**: the mobile menu uses the checkbox hack — `<input type="checkbox">` + `<label>` styled as `[ = ]` / `[ x ]`, toggled via the `:checked` sibling selector.
- **Boot-in animation**: the panel scales/brightens in on load (`ease-term-boot`) — a single deliberate moment rather than scattered ambient effects.
- **LED + cursor**: `ease-term-blink` cycles the status LED between cyan and amber; `ease-term-cursor` blinks a text cursor after the brand name, both using `step-end`/simple opacity keyframes, no JS timers.
- **Trace-line hover**: `.ease-navbar__link::after` grows `width: 0% → 100%` on hover/focus, paired with the hex index fading to full opacity — deliberate and readable, not a screen-flicker glitch.
- **Bus pulse**: `.ease-navbar__bus::after` is a small radial-gradient dot animated with `left` from off-screen to 100%, riding along a dashed "circuit" line.
- **Accessibility**:
  - Label/checkbox toggle is keyboard-focusable and works with the browser's native label-click and `Space` on the checkbox.
  - `:focus-visible` styling matches hover state on links.
  - `aria-label` on the burger toggle.
  - Respects `prefers-reduced-motion`: disables the boot animation, LED blink, cursor blink, and bus pulse; hover/focus states remain instant.
  - Color contrast: primary text (`--term-text`) and active-state colors meet WCAG AA against the dark panel background.
- **Responsive**: full horizontal layout down to 680px, then collapses into a stacked terminal-style menu.

## Customization

```css
.ease-navbar--terminal {
  --term-amber: #ffb000;
  --term-cyan: #55e6d5;
  --term-bg: #05080b;
  --ease-animation-duration: 2.4s;
}
```

The demo loads JetBrains Mono from Google Fonts for the terminal typography; swap `--term-mono` to any monospace stack if you'd rather self-host.

## Naming

Uses the `ease-` prefix (`ease-navbar--terminal`, `ease-navbar__panel`, `ease-navbar__link`, `ease-navbar__bus`, `ease-term-boot` / `ease-term-blink` / `ease-term-cursor` / `ease-term-pulse-travel` keyframes) to match EaseMotion CSS conventions.