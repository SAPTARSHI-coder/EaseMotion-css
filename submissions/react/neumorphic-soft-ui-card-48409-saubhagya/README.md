# Neumorphic Soft UI Card

A modern, soft UI card component for **EaseMotion CSS**, built around classic neumorphic design patterns: an outer-extrusion shadow that elevates the card, an inset "sunken" frame for image or icon placeholders, and an interactive button that shifts from raised to inset on `:active`.

> Implements [#48409 — \[FEATURE\]: add neumorphic soft UI card component](../../issues/48409)

## Features

- **Outer-extrusion elevation** — the card casts a dual light/dark shadow that makes it appear to rise off the background.
- **Inset placeholder frame** — the image/icon area uses inset shadows to appear pressed into the surface, ready for an image, icon, or illustration.
- **Animated depth on interaction** — the button transitions from a raised state to an inset (pressed) state on `:active`, giving tactile, motion-driven feedback.
- **CSS variable driven** — all colors and shadow tones are exposed as custom properties, so the dual-shadow configuration can be retuned or reused elsewhere in a layout without touching component rules.
- **Accessible by default** — includes a visible `:focus-visible` outline and respects `prefers-reduced-motion`.
- **Zero dependencies** — plain HTML and CSS, no build step required.

## Usage

Include the stylesheet and drop the markup wherever you need it:

```html
<link rel="stylesheet" href="nm-card.css">

<div class="nm-card">
  <div class="nm-card-image-placeholder">
    <span class="nm-icon">✦</span>
  </div>
  <div class="nm-card-content">
    <span class="nm-card-tag">Design</span>
    <h3 class="nm-card-title">Neumorphism UI</h3>
    <p class="nm-card-text">
      A beautiful soft UI card component featuring clean dual-shadow extrusion effects.
    </p>
    <button class="nm-btn">Explore</button>
  </div>
</div>
```

Open `index.html` in a browser to see a live example.

## Customization

All visual tokens live in `:root` and can be overridden globally or scoped to a container:

| Variable          | Default   | Purpose                                   |
|--------------------|-----------|--------------------------------------------|
| `--bg-color`        | `#e0e8f6` | Base surface color for card, image frame, and button |
| `--text-primary`    | `#4a5568` | Heading and button text color              |
| `--text-secondary`  | `#718096` | Body text, icon, and tag color             |
| `--shadow-dark`     | `#beccde` | Darker shadow tone (bottom-right light source) |
| `--shadow-light`    | `#ffffff` | Lighter shadow tone (top-left highlight)   |

**Example — a darker theme:**

```css
.nm-card.nm-dark {
  --bg-color: #2d3348;
  --text-primary: #e2e8f0;
  --text-secondary: #a0aec0;
  --shadow-dark: #1c2033;
  --shadow-light: #3e4664;
}
```

Because both the card's outer shadow and the inner elements' inset shadows read from the same two variables, changing `--shadow-dark` / `--shadow-light` retunes the entire component consistently.

## Component anatomy

| Class                       | Role                                                        |
|------------------------------|---------------------------------------------------------------|
| `.nm-card`                   | Outer container; raised (outer-extrusion) shadow             |
| `.nm-card-image-placeholder` | Sunken frame for an image or icon; inset shadow               |
| `.nm-icon`                   | Centered icon/glyph inside the placeholder                    |
| `.nm-card-content`           | Wrapper for text and the call-to-action button                |
| `.nm-card-tag`                | Small uppercase eyebrow label                                 |
| `.nm-card-title`              | Card heading                                                   |
| `.nm-card-text`               | Supporting/body copy                                            |
| `.nm-btn`                    | Call-to-action button; raised by default, inset on `:active`  |

## Browser support

Uses standard `box-shadow`, `border-radius`, and `:focus-visible`, all supported in current versions of Chrome, Firefox, Safari, and Edge.

## Files

```
nm-card/
├── index.html    # Live demo
├── nm-card.css   # Component styles
└── README.md     # This file
```

## License

Distributed under the same license as the EaseMotion CSS project.
