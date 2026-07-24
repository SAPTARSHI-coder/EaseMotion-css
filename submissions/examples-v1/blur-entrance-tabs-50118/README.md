# CSS Blur-Entrance Tabs - Neumorphic Soft Layouts

A pure HTML/CSS tab component featuring a smooth blur-entrance transition, designed for neumorphic soft interface aesthetics.

Related Issue: #50118

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where switching tabs triggers a blur-entrance animation — the new panel fades in from a blurred, scaled-down state using only CSS. Styled with neumorphic soft shadows for a tactile, raised/felt UI feel.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.bet` class to the container.

```html
<section class="bet" aria-label="Tabs">
  <div class="bet__list" role="tablist">
    <input type="radio" name="demo" id="d-1" class="bet__input" checked>
    <label for="d-1" class="bet__trigger" role="tab">Tab 1</label>
    <input type="radio" name="demo" id="d-2" class="bet__input">
    <label for="d-2" class="bet__trigger" role="tab">Tab 2</label>
  </div>
  <div class="bet__panels">
    <div class="bet__panel" role="tabpanel"><p>Panel 1 content</p></div>
    <div class="bet__panel" role="tabpanel"><p>Panel 2 content</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with a premium blur-entrance animation that feels smooth and modern. The neumorphic soft styling gives a tactile, approachable feel suitable for dashboards, settings panels, and documentation sites.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Blur-Entrance Animation**: Panel content fades in from a blurred, scaled state with a vertical slide.
- **Neumorphic Soft Aesthetic**: Raised/inset shadows on surfaces, triggers, and panels for a tactile feel.
- **Multiple Variants**: Default, compact, and pill styles included.
- **Keyboard Accessible**: Tab navigation via radio inputs; focus-visible outlines.
- **Reduced Motion**: Disables blur animation when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--bet-duration` | Animation duration | `0.4s` |
| `--bet-easing` | Easing curve | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--bet-blur-from` | Starting blur amount | `8px` |
| `--bet-scale-from` | Starting scale | `0.95` |
| `--bet-translate-y` | Starting vertical offset | `6px` |
| `--bet-bg` | Page background | `#e0e5ec` |
| `--bet-surface` | Card surface | `#e0e5ec` |
| `--bet-accent` | Active tab color | `#6366f1` |
| `--bet-shadow-out` | Raised neumorphic shadow | `6px 6px 12px ...` |
| `--bet-shadow-in` | Inset neumorphic shadow | `inset 4px 4px 8px ...` |

---

## Folder Structure

```text
submissions/examples/blur-entrance-tabs-50118/
├── demo.html       ← Demo with 3 tab variants (default, compact, pill)
├── style.css       ← Component styles with blur-entrance animation and CSS custom properties
└── README.md       ← This file
```
