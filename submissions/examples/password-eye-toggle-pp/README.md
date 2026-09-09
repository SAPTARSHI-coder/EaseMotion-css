# CSS-Only Morphing Password Toggle Eye Icon

A micro-interaction password visibility toggle component. It features an interactive inline SVG eye icon that morphs fluidly between a closed eye with eyelashes (masked/hidden state) and an open eye with a center pupil (visible/unmasked state) using pure CSS.

## What does this do?

- **Masking Transition:** Uses the `-webkit-text-security` CSS property to mask text characters as discs by default, and switches to `none` to reveal the text when the visibility toggle is checked.
- **Pure CSS Morphing Icon:** Animates outline components (top/bottom eyelids, lashes, and pupil) inside the inline SVG using CSS transforms and opacity transitions.
- **Accessibility Friendly:** Combines a native checkbox input overlay with the visual SVG container. Users can tab directly to the checkbox and toggle visibility using standard native keyboard triggers (Space key), complete with distinct focus ring overlays.

## How is it used?

Add the structural markup to your HTML form:

```html
<div class="input-field-wrapper">
  <!-- Checkbox hack overlay -->
  <input type="checkbox" id="toggle-visibility" class="toggle-checkbox" />

  <!-- Visual SVG trigger container -->
  <div class="toggle-trigger" aria-hidden="true">
    <svg class="eye-icon" viewBox="0 0 20 20">
      <path class="eye-open-contour" d="..." />
      <circle class="eye-pupil" cx="10" cy="10" r="2.5" />
      <path class="eye-closed-contour" d="..." />
      <path class="eye-lashes" d="..." />
    </svg>
  </div>

  <!-- Main password input -->
  <input type="text" class="text-input password-input" placeholder=" " />
  <label class="input-label">Password</label>
</div>
```

Style states in your stylesheet:

```css
/* Mask text by default */
.password-input {
  -webkit-text-security: disc;
}

/* Unmask when checkbox is checked */
.toggle-checkbox:checked ~ .password-input {
  -webkit-text-security: none;
}

/* Eyelashes folding back / fading out */
.toggle-checkbox:checked ~ .toggle-trigger .eye-lashes {
  opacity: 0;
  transform: scaleY(0) translateY(-3px);
}

/* Pupil scaling in */
.toggle-checkbox:checked ~ .toggle-trigger .eye-pupil {
  opacity: 1;
  transform: scale(1);
}
```

## Tech Stack

- HTML5
- CSS3 (transitions, `-webkit-text-security`, sibling selectors)
- Inline SVGs (scalable vector graphics)

## Accessibility Features

- Focus indicator ring: styled using `.toggle-checkbox:focus-visible ~ .toggle-trigger`.
- Screen reader friendly: hides decorative eye outline using `aria-hidden="true"` while maintaining the standard checkbox attributes.
- Natively focusable and triggerable via keyboard standard navigation controls.

## Browser Support Note

- The `-webkit-text-security` property is fully supported in Chromium browsers (Chrome, Edge, Opera, Samsung Internet) and WebKit browsers (Safari on macOS and iOS).
- In Firefox, text is displayed in standard unmasked format by default. Firefox users still experience the full SVG eye morphing transition when toggling visibility.
