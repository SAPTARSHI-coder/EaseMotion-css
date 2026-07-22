# CSS Fade-Out Tooltip for Neumorphic Soft Layouts

A pure CSS animated tooltip component styled to complement Neumorphic Soft layout aesthetics, featuring smooth fade-out interaction transitions and custom variables overrides.

---

## 1. What does this do?
This showcase presents a pure CSS tooltip that utilizes visibility step transitions to animate fade-outs on unhover/blur, styled to fit soft inset/outset neumorphic shadows.

---

## 2. How is it used?
Wrap trigger buttons inside focusable parent elements, and append position classes to configure orientation overlays:

```html
<!-- Keyboard-accessible tooltip trigger parent -->
<div class="ease-tooltip-trigger" tabindex="0">
  <button type="button" class="pp-neu-btn">Action CTA</button>
  <!-- Tooltip element with top position class -->
  <div class="ease-tooltip ease-tooltip-top">
    Tactile Feedback Content
  </div>
</div>
```

---

## 3. Why is it useful?
It provides standard, modern layout feedback without requiring JavaScript payloads, complies with key accessibility guidelines for screen readers, and offers flexible configurations through standard CSS variables.

---

## Technical Specifications & Suffix

- **Folder Path:** `submissions/examples/ease-tooltip-neumorphic-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46235](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46235)

### Included Layout Features:
1. ** Tactile Playground Grid:** Real-world preview stage containing soft light and dark theme configurations.
2. **Dynamic Parameter Control Dashboard:** Adjusts timing speed, initial scale size, and easing presets using CSS custom variables.
3. **Accessibility Validation Logs:** Details visibility transitions, focus-within pseudo-classes, and pointer-events variables.
4. **Interactive Quiz:** In-app quiz focusing on screen reader compliance and focus structures.
