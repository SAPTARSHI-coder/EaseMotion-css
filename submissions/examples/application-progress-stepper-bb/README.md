# Application Progress Stepper

An animated **4-step job application progress stepper / timeline component** built with **pure CSS** — no JavaScript.  
Replaces static status badges with a visual step-by-step indicator supporting `completed`, `active` (pulsing), `pending`, and `rejected` states — both in horizontal and vertical layouts.

---

## What does it add?

A composable `em-stepper` CSS class system that transforms a plain application status into a premium animated progress timeline — with staggered bullet pop-in, pulsing active ring, ripple effect, connector line fill animation, and colour-coded state classes.

---

## File Structure

```
submissions/examples/application-progress-stepper/
├── demo.html   — Standalone demo, opens directly in a browser
├── style.css   — All animation classes, keyframes, and design tokens
└── README.md   — This file
```

---

## How to Use

### 1. Basic Horizontal Stepper

```html
<nav class="em-stepper" aria-label="Application progress">

  <!-- Completed step -->
  <div class="em-stepper__step em-stepper__step--done" aria-label="Applied — completed">
    <div class="em-stepper__bullet"></div>
    <div class="em-stepper__label">
      <span class="em-stepper__name">Applied</span>
      <span class="em-stepper__date">May 18</span>
    </div>
  </div>

  <!-- Active / current step -->
  <div class="em-stepper__step em-stepper__step--active" aria-current="step" aria-label="Interview — in progress">
    <div class="em-stepper__bullet">3</div>
    <div class="em-stepper__label">
      <span class="em-stepper__name">Interview</span>
      <span class="em-stepper__date">Jun 5</span>
    </div>
  </div>

  <!-- Pending step -->
  <div class="em-stepper__step em-stepper__step--pending" aria-label="Result — pending">
    <div class="em-stepper__bullet">4</div>
    <div class="em-stepper__label">
      <span class="em-stepper__name">Result</span>
      <span class="em-stepper__date">—</span>
    </div>
  </div>

</nav>
```

---

### 2. Step State Modifiers

| Modifier class | Meaning | Bullet style |
|---|---|---|
| `em-stepper__step--done` | Step completed | Green ✓ with glow |
| `em-stepper__step--active` | Current step | Indigo pulsing ring + ripple |
| `em-stepper__step--pending` | Not yet reached | Muted grey outline |
| `em-stepper__step--rejected` | Rejected outcome | Red ✕ with strikethrough label |

---

### 3. Vertical Timeline Layout

Add `em-stepper--vertical` to the `em-stepper` container. Add `em-stepper__body` to wrap the label + detail text:

```html
<nav class="em-stepper em-stepper--vertical">
  <div class="em-stepper__step em-stepper__step--done">
    <div class="em-stepper__bullet"></div>
    <div class="em-stepper__body">
      <div class="em-stepper__label">
        <span class="em-stepper__name">Applied</span>
        <span class="em-stepper__date">May 20</span>
      </div>
      <p class="em-stepper__detail">Application submitted via campus portal.</p>
    </div>
  </div>
  <!-- more steps -->
</nav>
```

---

### 4. Status Pill Badge

```html
<!-- Active -->
<span class="em-step-status-pill em-step-status-pill--active">Interview Stage</span>

<!-- Selected -->
<span class="em-step-status-pill em-step-status-pill--done">✓ Selected</span>

<!-- Rejected -->
<span class="em-step-status-pill em-step-status-pill--rejected">✕ Rejected</span>
```

---

## How the Animations Work

### Bullet Pop-in (staggered)
```css
@keyframes em-kf-bullet-pop {
  from { opacity: 0; transform: scale(0.5); }
  60%  { transform: scale(1.2);             }
  to   { opacity: 1; transform: scale(1);   }
}
```
Each bullet delays by `0.15s` increments — creating a left-to-right cascade.

### Active Ring Pulse
```css
@keyframes em-kf-active-ring {
  0%, 100% { box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.25); }
  50%       { box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.10); }
}
```
The active bullet softly breathes to signal "in progress."

### Ripple Effect (active only)
```css
@keyframes em-kf-ripple {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0;   }
}
```
Expanding ring on the `::before` pseudo-element — no JS.

### Connector Line Fill
```css
@keyframes em-kf-line-fill {
  from { transform: scaleX(0); transform-origin: left; }
  to   { transform: scaleX(1); transform-origin: left; }
}
```
Completed connectors grow from left to right, giving a "progress advancing" feel.

---

## Customisation

```css
:root {
  --em-step-done:    #22c55e;   /* completed colour */
  --em-step-active:  #f59e0b;   /* amber brand colour */
  --em-step-pending: #334155;   /* future step colour */
  --em-step-rejected:#ef4444;   /* rejected colour */
}
```

---

## Why This Fits EaseMotion CSS

- **Animation-first** — each state transition has a purposeful motion: pop, pulse, ripple, fill.
- **Composable** — add `--done`, `--active`, `--pending`, `--rejected` per step independently.
- **Zero JavaScript** — all state is driven by modifier classes on the step elements.
- **Two layouts** — horizontal (default) and vertical (`em-stepper--vertical`) from the same classes.
- **Accessible** — `aria-current="step"` on active step, `aria-label` on each step, `role="nav"` via `<nav>`.
- **Reduced motion safe** — all animations collapse via `@media (prefers-reduced-motion: reduce)`.

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 80+ | Full support |
| Firefox | 72+ | Full support |
| Safari | 14+ | Full support |
| iOS Safari | 14+ | Full support |

---

## License

Submitted under the same license as the EaseMotion CSS repository.
