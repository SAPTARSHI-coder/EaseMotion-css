# Glitch-Flicker Accordion

A pure CSS/HTML accordion component with a cyberpunk-style **glitch/flicker**
reveal on the panel title, built for creative portfolio layouts. No
JavaScript is required — the open/close state is driven entirely by hidden
`<input type="checkbox">` elements paired with `<label>` triggers.

![difficulty](https://img.shields.io/badge/level-intermediate-yellow)
![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

## Files

| File         | Purpose                                             |
| ------------ | ---------------------------------------------------- |
| `demo.html`  | Standalone showcase page with four example panels     |
| `style.css`  | The component styles (self-contained, no other deps) |
| `README.md`  | This file                                             |

## How it works

- Each accordion item is a `checkbox` + `label` pair. Checking the box
  (clicking the header) toggles a sibling combinator (`~`) that reveals the
  panel — the classic "checkbox hack," so no JS is needed.
- The panel height animates using `grid-template-rows: 0fr → 1fr`, which
  gives a smooth expand/collapse without needing to know the content's
  pixel height ahead of time.
- The glitch effect is created with two `::before` / `::after` "ghost"
  copies of the title (via `content: attr(data-text)`), each animated with
  its own `clip-path` + `transform` keyframes and `mix-blend-mode: screen`,
  layered with a short `opacity` flicker keyframe and a scanline overlay.
  The animation runs once per open action (`animation ... 1`), so it reads
  as a signal glitch rather than a looping effect.

## Usage

Copy `style.css` into your project and reuse this markup pattern per item:

```html
<div class="gfa-accordion">
  <div class="gfa-item">
    <input type="checkbox" id="gfa-1" name="gfa-group" />
    <label class="gfa-header" for="gfa-1">
      <span class="gfa-title" data-text="Your Title Here">Your Title Here</span>
      <span class="gfa-icon" aria-hidden="true"></span>
    </label>
    <div class="gfa-panel">
      <div class="gfa-panel-inner">
        <div class="gfa-content">
          Your panel content goes here.
        </div>
      </div>
    </div>
  </div>
  <!-- repeat .gfa-item for each panel -->
</div>
```

**Important:** the `data-text` attribute on `.gfa-title` must match the
visible text exactly — it's what the glitch ghost layers render via
`content: attr(data-text)`.

By default, each item's checkbox is independent, so more than one panel can
be open at the same time (a "multi-open" accordion). If you want classic
single-open behavior, give every `input` in the group the same `name`
attribute and swap `type="checkbox"` for `type="radio"`.

## CSS Custom Properties

Override these on `.gfa-accordion` or `:root` to re-theme the component:

| Property                  | Default     | Description                                  |
| -------------------------- | ----------- | --------------------------------------------- |
| `--gfa-panel-bg`           | `#16191d`   | Background color of each accordion item       |
| `--gfa-accent`             | `#ff2e63`   | Primary glitch/ghost color                     |
| `--gfa-accent-2`           | `#08d9d6`   | Secondary glitch/ghost color + icon color      |
| `--gfa-text`               | `#eaeaea`   | Header title color (closed state)              |
| `--gfa-text-muted`         | `#9aa0a6`   | Panel body text color                          |
| `--gfa-border-radius`      | `10px`      | Corner radius of each item                     |
| `--gfa-transition-speed`   | `320ms`     | Speed of the panel expand/collapse             |
| `--gfa-flicker-speed`      | `120ms`     | Speed of the brightness "noise" pulse on open   |

Example override:

```css
.gfa-accordion {
  --gfa-accent: #7c3aed;
  --gfa-accent-2: #22d3ee;
  --gfa-panel-bg: #ffffff;
  --gfa-text: #111111;
  --gfa-text-muted: #444444;
}
```

## Features

- ✅ Pure CSS/HTML — zero JavaScript, zero dependencies
- ✅ Smooth height transitions via `grid-template-rows`
- ✅ One-shot glitch/flicker animation on each open action
- ✅ Fully responsive (desktop, tablet, mobile breakpoint included)
- ✅ Keyboard accessible (`label`/`input` pairing + `:focus-visible` outline)
- ✅ Respects `prefers-reduced-motion`: glitch/flicker and ghost layers are
  disabled and the accordion falls back to a quick, plain height transition

## Browser support

Uses `grid-template-rows` animation, `:has()`, `clip-path`, and
`mix-blend-mode`. Supported in current versions of Chrome, Edge, Safari,
and Firefox. In browsers without `:has()` support, the scanline flicker
overlay is simply skipped — the accordion and title glitch still work.

## Accessibility notes

- The header is a real `<label>` bound to a real `<input>`, so it's
  reachable and operable via keyboard (Tab + Space) without any ARIA
  patching.
- Users with `prefers-reduced-motion: reduce` get the same functional
  accordion with the flashy parts turned off.
