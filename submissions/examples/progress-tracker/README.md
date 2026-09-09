# Animated Multi-Step Progress Tracker

A production-ready, pure CSS progress tracker component with glassmorphism, smooth animations, and zero JavaScript dependencies.

---

## ✨ Features

| Feature | Detail |
|---|---|
| **Zero JS** | Pure HTML + CSS — no framework, no runtime |
| **Glassmorphism** | Frosted-glass cards with layered backdrop blur |
| **3 step states** | `completed`, `active` (glowing), `pending` |
| **Animated connectors** | Shimmer sweep on filled tracks |
| **Active glow** | Multi-layer pulsing box-shadow + dashed spinning ring |
| **Pulse rings** | Two expanding rings emanate from the active node |
| **Hover effects** | Scale + elevated glow per state |
| **Compact variant** | Smaller nodes, labels only — ideal for checkout flows |
| **Vertical layout** | Column orientation with vertical connector lines |
| **Responsive** | Graceful degradation from desktop → tablet → phone |
| **Reduced motion** | Respects `prefers-reduced-motion` |

---

## 🚀 Quick Start

1. Copy `style.css` into your project.
2. Add a `<link>` to it in your HTML `<head>`.
3. Mark up your steps using the BEM class structure below.

```html
<link rel="stylesheet" href="style.css">

<div class="progress-tracker progress-tracker--horizontal">
  <!-- Step: completed -->
  <div class="step step--completed"> ... </div>
  <!-- Step: active -->
  <div class="step step--active"> ... </div>
  <!-- Step: pending -->
  <div class="step step--pending"> ... </div>
</div>
```

---

## 📐 Markup Reference

### Horizontal tracker (full step)

```html
<div class="progress-tracker progress-tracker--horizontal">

  <!-- ── Completed step ──────────────────── -->
  <div class="step step--completed">
    <div class="step__connector step__connector--before"></div>
    <div class="step__node-wrap">
      <div class="step__node">
        <span class="step__icon"><!-- SVG icon --></span>
        <div class="step__ring"></div>
      </div>
    </div>
    <div class="step__connector step__connector--after step__connector--filled"></div>
    <div class="step__label-wrap">
      <span class="step__number">01</span>
      <span class="step__title">Step Title</span>
      <span class="step__subtitle">Short description</span>
    </div>
  </div>

  <!-- ── Active step ─────────────────────── -->
  <div class="step step--active">
    <div class="step__connector step__connector--before step__connector--filled"></div>
    <div class="step__node-wrap">
      <div class="step__node">
        <span class="step__icon"><!-- SVG icon --></span>
        <div class="step__ring"></div>
        <!-- Pulse rings — only on active -->
        <div class="step__pulse"></div>
        <div class="step__pulse step__pulse--delay"></div>
      </div>
    </div>
    <div class="step__connector step__connector--after"></div>
    <div class="step__label-wrap">
      <span class="step__number">02</span>
      <span class="step__title">Active Step</span>
      <span class="step__subtitle">In progress</span>
    </div>
  </div>

  <!-- ── Pending step ────────────────────── -->
  <div class="step step--pending">
    <!-- connector before: no --filled modifier -->
    <div class="step__connector step__connector--before"></div>
    <div class="step__node-wrap">
      <div class="step__node">
        <span class="step__icon"><!-- SVG icon --></span>
        <div class="step__ring"></div>
      </div>
    </div>
    <!-- Last step: hide the after connector -->
    <div class="step__connector step__connector--after" style="visibility:hidden;"></div>
    <div class="step__label-wrap">
      <span class="step__number">03</span>
      <span class="step__title">Pending Step</span>
      <span class="step__subtitle">Not started</span>
    </div>
  </div>

</div>
```

### Compact horizontal

Add `progress-tracker--compact` to hide subtitles, numbers, and shrink nodes:

```html
<div class="progress-tracker progress-tracker--horizontal progress-tracker--compact">
  ...
</div>
```

### Vertical tracker

Replace `progress-tracker--horizontal` with `progress-tracker--vertical`.  
Replace `step__connector` elements with a `step__vline` inside `step__node-wrap`:

```html
<div class="progress-tracker progress-tracker--vertical">

  <div class="step step--completed">
    <div class="step__node-wrap">
      <div class="step__node">
        <span class="step__icon"><!-- SVG --></span>
        <div class="step__ring"></div>
      </div>
      <!-- Filled line to next step -->
      <div class="step__vline step__vline--filled"></div>
    </div>
    <div class="step__label-wrap">
      <span class="step__number">01</span>
      <span class="step__title">Step Title</span>
      <span class="step__subtitle">Description</span>
    </div>
  </div>

  <!-- Last step: no step__vline -->
  <div class="step step--active">
    <div class="step__node-wrap">
      <div class="step__node">
        <span class="step__icon"><!-- SVG --></span>
        <div class="step__ring"></div>
        <div class="step__pulse"></div>
        <div class="step__pulse step__pulse--delay"></div>
      </div>
    </div>
    <div class="step__label-wrap">
      <span class="step__number">02</span>
      <span class="step__title">Active Step</span>
    </div>
  </div>

</div>
```

---

## 🎨 Customising the Palette

All colour tokens live in `:root` at the top of `style.css`. Override any of them in your own stylesheet or via a parent scope:

```css
/* Example: teal + amber theme */
.my-tracker {
  --clr-completed:  #f59e0b;
  --clr-active:     #0ea5e9;
  --clr-active-alt: #38bdf8;
  --clr-glow-c:     rgba(245, 158, 11, 0.35);
  --clr-glow-a:     rgba(14, 165, 233, 0.45);
}
```

---

## 🔑 CSS Class Reference

| Class | Role |
|---|---|
| `.progress-tracker` | Root wrapper — required |
| `.progress-tracker--horizontal` | Horizontal layout |
| `.progress-tracker--vertical` | Vertical layout |
| `.progress-tracker--compact` | Compact node/label variant |
| `.step` | Single step wrapper |
| `.step--completed` | Completed state (green) |
| `.step--active` | Active/current state (indigo, glowing) |
| `.step--pending` | Future/inactive state (muted) |
| `.step__node` | Circular icon container |
| `.step__ring` | Decorative ring overlay |
| `.step__pulse` | Expanding pulse ring (active only) |
| `.step__pulse--delay` | Staggered second pulse ring |
| `.step__connector` | Horizontal track line |
| `.step__connector--before` | Track segment before the node |
| `.step__connector--after` | Track segment after the node |
| `.step__connector--filled` | Filled/completed track colour |
| `.step__vline` | Vertical track line |
| `.step__vline--filled` | Filled vertical line |
| `.step__icon` | SVG icon wrapper |
| `.step__number` | Eyebrow step number |
| `.step__title` | Primary step label |
| `.step__subtitle` | Secondary description |
| `.step__label-wrap` | Label container |
| `.step__node-wrap` | Node + connector container |

---

## ♿ Accessibility Notes

- All SVG icons should include `aria-hidden="true"` when purely decorative.
- Wrap the tracker in a `<nav aria-label="Progress">` for screen readers.
- The `<ol>` element with `<li>` children is the most semantically correct replacement for the `<div>` structure if used in a real form wizard.
- All animations respect `prefers-reduced-motion`.

---

## 📄 License

MIT — free for personal and commercial use. Attribution appreciated but not required.