# CSS Elastic Bounce Tabs — Glassmorphism UI Layouts

**Implements enhancement [#50143](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50143)**

---

## 1. What does this do?

A pure CSS tab component with an elastic-bounce active indicator styled for Glassmorphism UI interfaces — featuring `backdrop-filter: blur()` frosted-glass surfaces, semi-transparent fills, soft white borders, subtle glow effects, and a panel fade-in with a brief focus-blur. Zero JavaScript required.

---

## 2. How is it used?

### Variant 1 — Frosted pill indicator

```html
<div class="gl-tabs gl-tabs-pill" role="tablist" aria-label="Dashboard tabs">

  <!-- Hidden radio inputs (no JS) -->
  <input class="gl-tab-input" type="radio" name="tabs" id="tab-1" checked />
  <input class="gl-tab-input" type="radio" name="tabs" id="tab-2" />
  <input class="gl-tab-input" type="radio" name="tabs" id="tab-3" />

  <!-- Nav bar with bouncing frosted pill -->
  <div class="gl-tabs-nav">
    <div class="gl-tab-pill" aria-hidden="true"></div>
    <label for="tab-1" class="gl-tab-label" role="tab">✦ Overview</label>
    <label for="tab-2" class="gl-tab-label" role="tab">◈ Analytics</label>
    <label for="tab-3" class="gl-tab-label" role="tab">◎ Reports</label>
  </div>

  <!-- Panels -->
  <div class="gl-tabs-content">
    <div class="gl-tab-panel" role="tabpanel">Overview content…</div>
    <div class="gl-tab-panel" role="tabpanel">Analytics content…</div>
    <div class="gl-tab-panel" role="tabpanel">Reports content…</div>
  </div>

</div>
```

### Variant 2 — Luminous underline

```html
<div class="gl-tabs gl-tabs-line gl-emerald" aria-label="Wallet tabs">
  <!-- same radio inputs -->
  <div class="gl-tabs-nav">
    <div class="gl-tab-line" aria-hidden="true"></div>  <!-- glowing line indicator -->
    <label for="tab-1" class="gl-tab-label">Balance</label>
    <label for="tab-2" class="gl-tab-label">Transactions</label>
    <label for="tab-3" class="gl-tab-label">Cards</label>
  </div>
  <!-- panels -->
</div>
```

### Accent colour classes

```html
<!-- Default: soft violet -->
<div class="gl-tabs gl-tabs-pill"> … </div>

<div class="gl-tabs gl-tabs-pill gl-rose">    … </div>  <!-- rose pink  -->
<div class="gl-tabs gl-tabs-pill gl-emerald"> … </div>  <!-- emerald    -->
<div class="gl-tabs gl-tabs-pill gl-amber">   … </div>  <!-- amber      -->
<div class="gl-tabs gl-tabs-pill gl-sky">     … </div>  <!-- sky blue   -->
```

### Speed modifiers

```html
<div class="gl-tabs gl-tabs-pill tabs-slow"> … </div>  <!-- 700 ms -->
<div class="gl-tabs gl-tabs-pill">           … </div>  <!-- 420 ms (default) -->
<div class="gl-tabs gl-tabs-pill tabs-fast"> … </div>  <!-- 200 ms -->
```

### 4-tab layout

```html
<div class="gl-tabs gl-tabs-pill tabs-4"> … </div>
```

### CSS custom properties

```css
.my-gl-tabs {
  /* Glass palette */
  --gl-surface:      rgba(255, 255, 255, 0.08);
  --gl-border:       rgba(255, 255, 255, 0.18);
  --gl-blur:         14px;                       /* backdrop-filter amount */

  /* Active pill */
  --gl-pill-bg:      rgba(255, 255, 255, 0.18);
  --gl-pill-border:  rgba(255, 255, 255, 0.35);

  /* Accent */
  --gl-accent:       rgba(167, 139, 250, 1);     /* indicator / underline */
  --gl-accent-glow:  rgba(167, 139, 250, 0.5);   /* glow shadow */

  /* Text */
  --gl-text:         rgba(255, 255, 255, 0.45);
  --gl-text-active:  rgba(255, 255, 255, 0.95);

  /* Animation */
  --gl-bounce-dur:   420ms;
  --gl-bounce-ease:  cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Shape */
  --gl-radius:       1rem;
}
```

---

## 3. Why is it useful?

### Glassmorphism CSS techniques

| Effect | CSS used |
|---|---|
| Frosted glass nav bar | `background: rgba(255,255,255, 0.08)` + `backdrop-filter: blur(14px)` |
| White border shimmer | `border: 1px solid rgba(255,255,255, 0.18)` |
| Top-edge highlight | `inset 0 1px 0 rgba(255,255,255, 0.15)` on `box-shadow` |
| Frosted pill | `background: rgba(255,255,255, 0.18)` + `backdrop-filter: blur(8px)` + `border: 1px solid rgba(255,255,255, 0.35)` |
| Glowing underline | `box-shadow: 0 0 12px var(--gl-accent-glow)` on the `.gl-tab-line` |
| Panel focus-blur enter | `filter: blur(3px) → blur(0)` inside `@keyframes gl-panel-in` |
| Active text "lit" effect | `text-shadow: 0 0 20px rgba(255,255,255, 0.4)` |

### Why a gradient background is required

`backdrop-filter: blur()` renders the _content behind_ the element blurred. On a solid-colour background the glass effect is invisible — the frosted surface needs a rich, multi-colour background to show through. The demo uses a dark-background radial gradient:

```css
body {
  background:
    radial-gradient(ellipse at 15% 15%, rgba(139, 92, 246, 0.35) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 80%, rgba(59, 130, 246, 0.3)  0%, transparent 55%),
    #0f0f1f;
}
```

### How it compares to the other three tab variants

| Property | Neumorphic | Cyberpunk | Minimalist | **Glassmorphism** |
|---|---|---|---|---|
| Background | Soft grey | Near-black | Near-white | Dark + colour gradients |
| Surface | Inset/outset shadows | Dark + neon border | White + hairline border | **Semi-transparent + blur** |
| Indicator | Shadow morphing | Neon box-shadow | Hairline border | **Frosted glass pill + blur** |
| Panel enter | Fade + slide | Fade + slide + blur | Fade + slide | **Fade + slide + `filter:blur`** |
| Key property | `box-shadow` (inset/outset) | `box-shadow` (neon glow) | `border` (hairline) | **`backdrop-filter: blur()`** |

### Feature checklist

| Requirement | Implementation |
|---|---|
| Elastic bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` on pill `translateX()` |
| Glassmorphism aesthetics | `backdrop-filter: blur()`, `rgba` surfaces, white borders |
| 2 layout variants | Frosted pill, luminous glowing underline |
| 5 accent colours | Violet (default), rose, emerald, amber, sky |
| Responsive | Font/padding scale on ≤ 380 px; icons hidden |
| Keyboard accessible | Radio inputs + `:focus-visible` ring on labels |
| CSS custom properties | 14 tuneable variables |
| `prefers-reduced-motion` | All animation + `filter` disabled; states preserved |
| Zero JavaScript | CSS radio input + sibling selector pattern |
