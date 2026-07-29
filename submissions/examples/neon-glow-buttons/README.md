# Neon Glow Button Collection

A self-contained set of animated neon CTA buttons for dark-themed UIs — gaming dashboards, developer portfolios, and landing pages.

---

## What does this example demonstrate?

| Technique | Where |
|---|---|
| Layered `box-shadow` for depth | `.neon-btn--*` color variants |
| `@keyframes neon-flicker` | Triggered on `:hover` |
| `@keyframes ripple` via `::after` | Triggered on `click` (JS class toggle) |
| `@keyframes neon-pulse-*` | Idle breathing glow per color |
| CSS custom properties for theming | `:root` color tokens |

---

## Why does this belong in EaseMotion CSS examples?

EaseMotion already ships glassmorphism cards and magnetic hover effects.  
**Neon glow buttons** fill the missing *interactive CTA* slot:

- One of the most-requested patterns for dark-mode landing pages
- Showcases `box-shadow` + `@keyframes` working together (not covered elsewhere)
- Four ready-to-drop color themes (cyan · magenta · green · amber)

---

## How do I use it in my own project?

**1. Copy the files**
```
your-project/
└── neon-glow-buttons/
    ├── style.css   ← component styles
    └── demo.html   ← reference / copy-paste source
```

**2. Link the stylesheet**
```html
<link rel="stylesheet" href="neon-glow-buttons/style.css" />
```

**3. Add a button**
```html
<!-- Pick a color variant -->
<button class="neon-btn neon-btn--cyan">Launch</button>
<button class="neon-btn neon-btn--magenta">Connect</button>
<button class="neon-btn neon-btn--green">Execute</button>
<button class="neon-btn neon-btn--amber">Warning</button>
```

**4. Optional: size modifiers**
```html
<button class="neon-btn neon-btn--cyan neon-btn--sm">Small</button>
<button class="neon-btn neon-btn--green neon-btn--lg">Large</button>
```

**5. Optional: ripple on click**  
Copy the `<script>` block from `demo.html` — it's ~20 lines and has zero dependencies.

**6. Custom color**  
Override the tokens in your own `:root` block:
```css
:root {
  --neon-cyan-core:  #your-color;
  --neon-cyan-mid:   #your-mid;
  --neon-cyan-outer: #your-outer;
}
```

---

## File structure

```
neon-glow-buttons/
├── demo.html   — opens directly in browser, zero build step
├── style.css   — all keyframes, variants, tokens
└── README.md   — this file
```

---

## Browser support

All modern browsers (Chrome 88+, Firefox 85+, Safari 14+, Edge 88+).  
No preprocessor, no bundler, no dependencies.