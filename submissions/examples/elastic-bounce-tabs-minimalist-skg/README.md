# CSS Elastic Bounce Tabs — Minimalist Tech Layouts

**Implements enhancement [#50144](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50144)**

---

## 1. What does this do?

A pure CSS tab component with an elastic-bounce active indicator styled for Minimalist Tech interfaces — whitespace-first, system-font, hairline borders, three layout variants (outline pill, hairline underline, filled pill), and five accent colour themes. Zero JavaScript required.

---

## 2. How is it used?

### Variant 1 — Outline pill

```html
<div class="mt-tabs mt-tabs-pill" role="tablist" aria-label="Settings tabs">

  <input class="mt-tab-input" type="radio" name="tabs" id="tab-1" checked />
  <input class="mt-tab-input" type="radio" name="tabs" id="tab-2" />
  <input class="mt-tab-input" type="radio" name="tabs" id="tab-3" />

  <div class="mt-tabs-nav">
    <div class="mt-tab-pill" aria-hidden="true"></div>
    <label for="tab-1" class="mt-tab-label" role="tab">Overview</label>
    <label for="tab-2" class="mt-tab-label" role="tab">Specs</label>
    <label for="tab-3" class="mt-tab-label" role="tab">Changelog</label>
  </div>

  <div class="mt-tabs-content">
    <div class="mt-tab-panel" role="tabpanel">Overview…</div>
    <div class="mt-tab-panel" role="tabpanel">Specs…</div>
    <div class="mt-tab-panel" role="tabpanel">Changelog…</div>
  </div>

</div>
```

### Variant 2 — Hairline underline

```html
<div class="mt-tabs mt-tabs-line mt-emerald" aria-label="Data tabs">
  <!-- same radio inputs -->
  <div class="mt-tabs-nav">
    <div class="mt-tab-line" aria-hidden="true"></div>  <!-- underline indicator -->
    <label for="tab-1" class="mt-tab-label">Data</label>
    <!-- more labels -->
  </div>
  <!-- panels -->
</div>
```

### Variant 3 — Filled pill (macOS style)

```html
<div class="mt-tabs mt-tabs-filled" aria-label="Docs tabs">
  <!-- same radio inputs -->
  <div class="mt-tabs-nav">
    <div class="mt-tab-fill" aria-hidden="true"></div>  <!-- filled white card -->
    <!-- labels -->
  </div>
  <!-- panels -->
</div>
```

### Accent colour classes

```html
<!-- Monochrome (default) — near-black #111827 -->
<div class="mt-tabs mt-tabs-pill"> … </div>

<div class="mt-tabs mt-tabs-pill mt-indigo">  … </div>  <!-- #6c63ff -->
<div class="mt-tabs mt-tabs-pill mt-emerald"> … </div>  <!-- #059669 -->
<div class="mt-tabs mt-tabs-pill mt-rose">    … </div>  <!-- #e11d48 -->
<div class="mt-tabs mt-tabs-pill mt-amber">   … </div>  <!-- #d97706 -->
<div class="mt-tabs mt-tabs-pill mt-sky">     … </div>  <!-- #0284c7 -->
```

### Speed modifiers

```html
<div class="mt-tabs mt-tabs-pill tabs-slow"> … </div>  <!-- 700 ms -->
<div class="mt-tabs mt-tabs-pill">           … </div>  <!-- 380 ms (default) -->
<div class="mt-tabs mt-tabs-pill tabs-fast"> … </div>  <!-- 200 ms -->
```

### 4-tab layout

```html
<div class="mt-tabs mt-tabs-pill tabs-4"> … </div>
```

### CSS custom properties

```css
.my-tabs {
  --mt-accent:       #6c63ff;        /* indicator + active text colour */
  --mt-accent-light: rgba(108,99,255,.07); /* pill background fill */
  --mt-bg:           #fafafa;
  --mt-surface:      #ffffff;
  --mt-border:       #e5e7eb;
  --mt-text:         #6b7280;
  --mt-text-active:  #111827;
  --mt-bounce-dur:   380ms;
  --mt-bounce-ease:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --mt-radius:       6px;
}
```

---

## 3. Why is it useful?

### Minimalist Tech aesthetic principles

Minimalist tech UI avoids decoration and lets content lead. In this component:

- **No box-shadows or glows** — the only depth cue is the variant-3 filled-pill's single `0 1px 3px rgba(0,0,0,.08)` shadow (matching macOS/iOS segmented controls)
- **System font stack** — `system-ui, -apple-system, 'Segoe UI'` — no web font load
- **Hairline borders** — `1px solid #e5e7eb` — barely-visible containment lines
- **Tight type** — 0.8125 rem (13 px), `font-weight: 500` inactive → `600` active
- **Generous padding** — whitespace creates visual hierarchy without decoration

The elastic bounce is the **sole animation** in the component. It adds perceived responsiveness and physical weight without adding visual noise.

### How the three variants differ

| Variant | Indicator | Background | Use when |
|---|---|---|---|
| Outline pill | Outlined rectangle | Transparent + accent-light fill | Tab bar is the primary navigation element |
| Hairline underline | 2 px line | None | Content-dense layouts; max whitespace |
| Filled pill | White card + micro-shadow | Light grey container | Settings pages; macOS-style toggle |

### How it differs from the Neumorphic and Cyberpunk variants

| Property | Neumorphic | Cyberpunk | Minimalist |
|---|---|---|---|
| Background | `#e0e5ec` grey | `#0a0a0f` near-black | `#fafafa` near-white |
| Indicator effect | Dual-layer shadows (raised/inset) | Neon box-shadow glow | Hairline border or micro-shadow |
| Font | System | Monospace, ALL CAPS | System, sentence case |
| Texture | None | Scanlines, corner marks | None |
| Active emphasis | Shadow change + scale | Neon text-shadow | Font weight change |

### Feature checklist

| Requirement | Implementation |
|---|---|
| Elastic bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` on indicator `translateX()` |
| Minimalist Tech aesthetics | System font, hairline borders, whitespace, no glows |
| 3 layout variants | Outline pill, hairline underline, filled pill |
| Responsive | Font/padding scale on ≤ 380 px |
| Keyboard accessible | Radio inputs + `:focus-visible` ring on labels |
| CSS custom properties | 12 tuneable variables |
| `prefers-reduced-motion` | All animation disabled; states preserved |
| Zero JavaScript | CSS radio input + sibling selector pattern |
