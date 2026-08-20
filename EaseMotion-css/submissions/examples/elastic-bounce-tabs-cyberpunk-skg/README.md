# CSS Elastic Bounce Tabs — Cyberpunk Neon Layouts

**Implements enhancement [#50145](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50145)**

---

## 1. What does this do?

A pure CSS tab component with an elastic-bounce active indicator styled for Cyberpunk Neon interfaces — featuring neon glow box-shadows, scanline texture overlays, corner accent marks, two layout variants (glowing pill and neon underline), and four neon colour themes. Zero JavaScript required.

---

## 2. How is it used?

### Variant 1 — Glowing pill indicator

```html
<div class="cyb-tabs cyb-tabs-pill" role="tablist" aria-label="System tabs">

  <!-- Hidden radio inputs (no JS) -->
  <input class="cyb-tab-input" type="radio" name="tabs" id="tab-1" checked />
  <input class="cyb-tab-input" type="radio" name="tabs" id="tab-2" />
  <input class="cyb-tab-input" type="radio" name="tabs" id="tab-3" />

  <!-- Nav bar with bouncing pill -->
  <div class="cyb-tabs-nav">
    <div class="cyb-tab-pill" aria-hidden="true"></div>
    <label for="tab-1" class="cyb-tab-label" role="tab">◈ SYSTEM</label>
    <label for="tab-2" class="cyb-tab-label" role="tab">◎ NETWORK</label>
    <label for="tab-3" class="cyb-tab-label" role="tab">⚠ BREACH</label>
  </div>

  <!-- Panels -->
  <div class="cyb-tabs-content">
    <div class="cyb-tab-panel" role="tabpanel">System content…</div>
    <div class="cyb-tab-panel" role="tabpanel">Network content…</div>
    <div class="cyb-tab-panel" role="tabpanel">Breach log…</div>
  </div>

</div>
```

### Variant 2 — Neon underline

```html
<div class="cyb-tabs cyb-tabs-line cyb-neon-green" aria-label="Database tabs">
  <input class="cyb-tab-input" type="radio" name="db" id="db-1" checked />
  <input class="cyb-tab-input" type="radio" name="db" id="db-2" />
  <div class="cyb-tabs-nav">
    <div class="cyb-tab-line" aria-hidden="true"></div>  <!-- underline indicator -->
    <label for="db-1" class="cyb-tab-label">◷ QUERY</label>
    <label for="db-2" class="cyb-tab-label">◆ SCHEMA</label>
  </div>
  <div class="cyb-tabs-content">
    <div class="cyb-tab-panel">Query content…</div>
    <div class="cyb-tab-panel">Schema content…</div>
  </div>
</div>
```

### Neon colour themes

```html
<!-- Default: Cyan #00f5ff -->
<div class="cyb-tabs cyb-tabs-pill"> … </div>

<!-- Magenta -->
<div class="cyb-tabs cyb-tabs-pill cyb-neon-magenta"> … </div>

<!-- Green -->
<div class="cyb-tabs cyb-tabs-pill cyb-neon-green"> … </div>

<!-- Orange -->
<div class="cyb-tabs cyb-tabs-pill cyb-neon-orange"> … </div>
```

### Speed modifiers

```html
<div class="cyb-tabs cyb-tabs-pill tabs-slow"> … </div>  <!-- 700 ms -->
<div class="cyb-tabs cyb-tabs-pill">           … </div>  <!-- 400 ms (default) -->
<div class="cyb-tabs cyb-tabs-pill tabs-fast"> … </div>  <!-- 180 ms -->
```

### 4-tab layout

```html
<div class="cyb-tabs cyb-tabs-pill tabs-4"> … </div>
```

### Full custom property reference

```css
.my-cyb-tabs {
  --cyb-neon:        #00f5ff;    /* primary neon colour */
  --cyb-bg:          #0a0a0f;    /* page background */
  --cyb-surface:     #0f0f1a;    /* tab bar / panel surface */
  --cyb-border:      rgba(0, 245, 255, 0.2);
  --cyb-glow-blur:   16px;       /* neon spread radius */
  --cyb-bounce-dur:  400ms;      /* pill animation speed */
  --cyb-bounce-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --cyb-panel-dur:   300ms;
  --cyb-radius:      0.25rem;    /* sharp = cyberpunk */
}
```

---

## 3. Why is it useful?

### Elastic bounce technique

The same spring `cubic-bezier` used by `.ease-btn-hover` in the framework drives both the pill's `translateX()` and the label colour transition:

```css
cubic-bezier(0.34, 1.56, 0.64, 1)
/* ↑ the 1.56 value overshoots the target before snapping back */
```

### Cyberpunk aesthetic CSS techniques

| Effect | CSS used |
|---|---|
| Neon glow on pill | `box-shadow: 0 0 16px #00f5ff, 0 0 32px rgba(...)` |
| Neon text glow on active label | `text-shadow: 0 0 8px #00f5ff` |
| Scanline texture | `repeating-linear-gradient` at 3px intervals |
| Corner accent marks | `::before` / `::after` partial border trick |
| Dark surface with border | `background: #0f0f1a; border: 1px solid rgba(neon, 0.2)` |
| Panel blur-in animation | `filter: blur(2px)` → `blur(0)` on `cyb-panel-in` |

### Changing a theme = changing two variables

The entire colour system is driven by `--cyb-neon` and a derived `rgba()` opacity variant. Switching from cyan to magenta is one CSS property override:

```css
.cyb-neon-magenta {
  --cyb-neon:   #ff00ff;
  --cyb-border: rgba(255, 0, 255, 0.2);
  --cyb-glow:   0 0 16px #ff00ff, 0 0 32px rgba(255, 0, 255, 0.3);
}
```

### Feature checklist

| Requirement | Implementation |
|---|---|
| Elastic bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` on `translateX()` |
| Cyberpunk neon aesthetics | Neon glow, scanlines, corner marks, dark surface |
| Fully responsive | Font/padding scale down ≤ 380 px; icons hidden |
| Keyboard accessible | Radio inputs + `:focus-visible` focus ring |
| CSS custom properties | 10+ tuneable variables |
| `prefers-reduced-motion` | All animation disabled; states preserved |
| Zero JavaScript | CSS radio input + sibling selector pattern |
