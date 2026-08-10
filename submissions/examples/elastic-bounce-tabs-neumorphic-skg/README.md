# CSS Elastic Bounce Tabs — Neumorphic Soft Layouts

**Implements enhancement [#50146](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50146)**

---

## 1. What does this do?

A pure CSS tab component with an elastic-bounce active indicator, styled in Neumorphic Soft aesthetics — featuring layered box-shadows for a raised/pressed effect, a springy pill that bounces between tabs, and full keyboard accessibility. Zero JavaScript required.

---

## 2. How is it used?

### Variant 1 — Raised pill indicator (recommended)

```html
<div class="neu-tabs neu-tabs-pill" role="tablist" aria-label="Dashboard tabs">

  <!-- Hidden radio inputs drive all state (no JS) -->
  <input class="neu-tab-input" type="radio" name="tabs" id="tab-1" checked />
  <input class="neu-tab-input" type="radio" name="tabs" id="tab-2" />
  <input class="neu-tab-input" type="radio" name="tabs" id="tab-3" />

  <!-- Nav bar with bouncing pill -->
  <div class="neu-tabs-nav">
    <div class="neu-tab-pill" aria-hidden="true"></div>  <!-- the animated indicator -->
    <label for="tab-1" class="neu-tab-label" role="tab">🏠 Overview</label>
    <label for="tab-2" class="neu-tab-label" role="tab">📊 Analytics</label>
    <label for="tab-3" class="neu-tab-label" role="tab">⚙️ Settings</label>
  </div>

  <!-- Content panels -->
  <div class="neu-tabs-content">
    <div class="neu-tab-panel" role="tabpanel">Overview content…</div>
    <div class="neu-tab-panel" role="tabpanel">Analytics content…</div>
    <div class="neu-tab-panel" role="tabpanel">Settings content…</div>
  </div>

</div>
```

### Variant 2 — Pressed-in active tab

```html
<div class="neu-tabs neu-tabs-pressed" aria-label="Media tabs">
  <!-- Same radio input + label pattern, no .neu-tab-pill needed -->
  <input class="neu-tab-input" type="radio" name="media" id="m1" checked />
  <input class="neu-tab-input" type="radio" name="media" id="m2" />
  <div class="neu-tabs-nav">
    <label for="m1" class="neu-tab-label">🎵 Music</label>
    <label for="m2" class="neu-tab-label">🎬 Videos</label>
  </div>
  <div class="neu-tabs-content">
    <div class="neu-tab-panel">Music content…</div>
    <div class="neu-tab-panel">Video content…</div>
  </div>
</div>
```

### Colour themes

```html
<div class="neu-tabs neu-tabs-pill neu-tabs-emerald"> … </div>
<div class="neu-tabs neu-tabs-pill neu-tabs-rose">    … </div>
<div class="neu-tabs neu-tabs-pill neu-tabs-amber">   … </div>
<div class="neu-tabs neu-tabs-pill neu-tabs-sky">     … </div>
```

### Speed modifiers

```html
<div class="neu-tabs neu-tabs-pill tabs-slow"> … </div>  <!-- 700 ms -->
<div class="neu-tabs neu-tabs-pill">           … </div>  <!-- 420 ms (default) -->
<div class="neu-tabs neu-tabs-pill tabs-fast"> … </div>  <!-- 220 ms -->
```

### 4-tab layout

```html
<div class="neu-tabs neu-tabs-pill tabs-4"> … </div>
```

### Custom properties for full control

```css
.my-tabs {
  --tab-active-color:  #10b981;   /* accent colour */
  --tab-bg:            #dde1e7;   /* background */
  --tab-shadow-light:  #ffffff;   /* highlight shadow */
  --tab-shadow-dark:   #b8bec7;   /* depth shadow */
  --tab-bounce-dur:    500ms;     /* pill animation speed */
  --tab-bounce-ease:   cubic-bezier(0.34, 1.56, 0.64, 1);  /* spring */
  --tab-radius:        1.25rem;   /* container rounding */
}
```

---

## 3. Why is it useful?

### Elastic bounce technique

The "elastic" feel comes from a single `cubic-bezier` value that overshoots 1.0 and then settles back — the same spring easing used by `.ease-btn-hover` in the framework:

```css
--tab-bounce-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
```

Applied to the pill indicator's `transform: translateX()` transition:

```css
.neu-tab-pill {
  transition: transform var(--tab-bounce-dur) var(--tab-bounce-ease);
}
```

When the user selects tab 2, the pill translates right. The overshoot value (`1.56`) carries the pill slightly past the target column before it snaps back — creating the characteristic "bounce" feel without any JavaScript.

### Neumorphic soft-UI shadows

The neumorphic look uses two `box-shadow` layers:
- One light shadow top-left (the highlight)
- One dark shadow bottom-right (the depth)

```css
/* Raised element */
box-shadow:
   6px  6px 12px var(--tab-shadow-dark),   /* depth */
  -6px -6px 12px var(--tab-shadow-light);  /* highlight */

/* Pressed/inset element */
box-shadow:
  inset  4px  4px  8px var(--tab-shadow-dark),
  inset -4px -4px  8px var(--tab-shadow-light);
```

Both shadows use CSS custom properties so the full palette can be recoloured with a single variable override.

### Pure CSS, zero JavaScript

The component reuses the framework's proven pattern from `tabs.css`:
1. Hidden `<input type="radio">` elements hold state
2. CSS sibling selectors (`:checked ~ .nav .label`, `:checked ~ .content .panel`) drive all visual state
3. Keyboard navigation works natively — Tab focuses the hidden input, arrow keys cycle between radio options

### Accessibility

- Hidden inputs maintain full keyboard operability
- `role="tablist"`, `role="tab"`, `role="tabpanel"` on semantic elements
- `:focus-visible` ring on labels (mapped from focused inputs)
- `prefers-reduced-motion` removes all animation while preserving the visual states
- `aria-label` on the container for screen reader identification
