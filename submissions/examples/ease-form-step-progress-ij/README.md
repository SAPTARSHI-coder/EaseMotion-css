# ease-form-step-progress

Multi-step form progress indicator with numbered steps, animated connecting lines, and checkmark transitions.

## Features

- Numbered step circles with active/completed states
- Connecting lines that fill with animated width transition
- Checkmark appears with scale animation on completion
- Active step has glow effect via box-shadow
- Content panel switches with fade-slide animation
- Prev/Next navigation controls

## Usage

Add the markup with `.fsp-step`, `.fsp-line`, and `.fsp-panel` elements. Toggle `.fsp-complete` on completed steps and `.fsp-active` on the current step. Add `.fsp-fill` to lines before the active step. Show the corresponding panel with `.fsp-visible`.

```html
<div class="fsp-steps">
  <div class="fsp-step fsp-complete">
    <span class="fsp-circle">1</span>
    <span class="fsp-check">&#10003;</span>
    <span class="fsp-label">Account</span>
  </div>
  <div class="fsp-line fsp-fill"></div>
  <div class="fsp-step fsp-active">
    <span class="fsp-circle">2</span>
    <span class="fsp-check">&#10003;</span>
    <span class="fsp-label">Profile</span>
  </div>
</div>
```
