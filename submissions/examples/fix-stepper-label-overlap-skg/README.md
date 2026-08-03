# Fix: Prevent Stepper Labels from Overlapping on Mobile

**Resolves issue [#55894](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55894)**

---

## 1. What does this do?

Provides a responsive stepper component in three variants that prevent labels from overlapping at any viewport width, while preserving connector lines, step states, and full accessibility markup.

---

## 2. How is it used?

### Fix 1 — Responsive flip (recommended)
Horizontal on ≥ 600 px, vertical stack on < 600 px. Labels always have room.

```html
<nav aria-label="Account setup steps">
  <ol class="stepper-fixed">

    <li class="step step-done">
      <div class="step-indicator">✓</div>
      <div>
        <div class="step-label">Account Setup</div>
        <div class="step-sublabel">Email &amp; password</div>
      </div>
    </li>

    <li class="step step-active" aria-current="step">
      <div class="step-indicator">2</div>
      <div>
        <div class="step-label">Personal Information</div>
      </div>
    </li>

    <li class="step">
      <div class="step-indicator">3</div>
      <div>
        <div class="step-label">Confirmation</div>
      </div>
    </li>

  </ol>
</nav>
```

### Fix 2 — Always horizontal, scrollable

```html
<div class="stepper-scroll-wrap">
  <ol class="stepper-scroll">
    <li class="step step-done">
      <div class="step-indicator">✓</div>
      <div class="step-label">Cart Review</div>
    </li>
    <li class="step step-active" aria-current="step">
      <div class="step-indicator">2</div>
      <div class="step-label">Payment Method</div>
    </li>
    <!-- more steps… -->
  </ol>
</div>
```

### Fix 3 — Compact, labels truncated with ellipsis

```html
<ol class="stepper-compact">
  <li class="step step-done">
    <div class="step-indicator">✓</div>
    <div class="step-label" title="Account Setup">Account Setup</div>
  </li>
  <li class="step step-error">
    <div class="step-indicator">!</div>
    <div class="step-label" title="Verification Process">Verification Process</div>
  </li>
  <!-- more steps… -->
</ol>
```

### Step state modifiers

| Class on `<li>` | Visual effect |
|---|---|
| *(none)* | Default — grey indicator, muted label |
| `step-done` | Green indicator with checkmark |
| `step-active` | Purple indicator + glow ring, bold label |
| `step-error` | Red indicator |

---

## 3. Why is it useful?

No stepper component exists in the EaseMotion CSS framework. The issue reproduction places labels in a `flex` row without any overflow control or responsive handling, so on narrow viewports labels bleed into each other.

### Root cause

A horizontal stepper column is `flex: 1` (equal width). On a 360 px phone with 4 steps each column is ~90 px wide. A label like "Personal Information" (18 characters × ~7 px = 126 px) is wider than its column — it overflows and visually collides with the next label.

### Fix per variant

| Variant | Key CSS | How it stops overlap |
|---|---|---|
| **Responsive flip** | `@media (max-width: 599px)` → `flex-direction: column` | Each step is a full-width row; labels have unlimited horizontal space |
| **Scrollable** | `stepper-scroll-wrap { overflow-x: auto }` + fixed `width: 110px` per step | Labels never shrink below a legible size; user scrolls to see all steps |
| **Compact** | `white-space: nowrap; overflow: hidden; text-overflow: ellipsis` | Labels are clipped at one line with `…`; `title` attr shows full text on hover |

### Additional properties that prevent overflow on the label itself

```css
.step-label {
  word-break: break-word;     /* break long single words */
  overflow-wrap: break-word;  /* backup */
  hyphens: auto;              /* add hyphens at break points */
  max-width: 100%;            /* never exceed the column */
}
```

### Responsive flip layout change (Fix 1)

```
Desktop (≥ 600 px)          Mobile (< 600 px)
─────────────────           ─────────────────
① ─── ② ─── ③             ① Account Setup
↓    ↓    ↓              |
Label Label Label          ② Personal Info
                           |
                           ③ Verification
```

This satisfies the expected behaviour from the issue:
> "Stepper labels should remain readable and properly spaced on all screen sizes. On smaller screens, they should wrap, stack, or adjust without overlapping adjacent labels."
