# Form Components — Inputs, Checkboxes, and Toggle Switches

Three foundational form primitives for EaseMotion CSS: text inputs, checkboxes, and toggle switches. All pure CSS, animation-first, and accessible.

## Included

### Text Inputs
- **Base** — default bordered input
- **Outline** — transparent background with border
- **Filled** — light gray background, no border
- **Floating label** — label animates above the input on focus
- **Validation states** — `.input-error` (red) / `.input-success` (green) with hint text

### Checkboxes
- Hidden native input styled with `.check-box` pseudo-element
- Animated check mark on `:checked` via `::after` with scale + opacity transition
- Color variants: `-success`, `-danger`

### Toggle Switches
- Hidden native checkbox with `.toggle-track` and sliding knob (`::after`)
- Smooth spring-like knob animation via `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Color variants: `-success`, `-danger`

## Features
- **Pure CSS** — no JavaScript required for any component
- **Animation-first** — smooth transitions on focus, check, toggle
- **Accessible** — `:focus-visible` outlines, hidden native inputs retain keyboard navigation
- **Zero dependencies** — uses only existing `--ease-*` custom properties where applicable
- **Reduced motion** — respects `prefers-reduced-motion`

## Usage

```html
<!-- Input -->
<div class="form-field">
  <label class="form-label" for="name">Name</label>
  <input class="input" id="name" type="text" placeholder="Enter name" />
</div>

<!-- Checkbox -->
<label class="check-group">
  <input type="checkbox" checked />
  <span class="check-box"></span>
  <span class="check-label">Option</span>
</label>

<!-- Toggle -->
<label class="toggle-group">
  <input type="checkbox" checked />
  <span class="toggle-track"></span>
  <span class="toggle-label">Setting</span>
</label>

<!-- Floating label -->
<div class="float-field">
  <input class="input" id="email" type="email" placeholder=" " />
  <label class="float-label" for="email">Email</label>
</div>
```
