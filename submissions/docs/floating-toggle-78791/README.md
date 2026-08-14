# Floating Toggle Documentation

## Overview

This documentation showcase explains how to use the EaseMotion CSS **Floating Toggle** pattern. The component keeps a native checkbox for reliable keyboard and form behavior while CSS controls the visual track, elevated thumb, hover response, and floating motion.

## Submission

- Issue: #78791
- Track: `submissions/docs/`
- Feature folder: `submissions/docs/floating-toggle-78791/`
- Files: `demo.html`, `style.css`, `README.md`
- JavaScript dependencies: none

## What it demonstrates

The example covers the main usage states expected from the Floating Toggle:

1. **Off state** — the thumb rests inside the track.
2. **Hover state** — the thumb gains temporary elevation for tactile feedback.
3. **Checked state** — the track changes to the active gradient and the thumb rises above the track.
4. **Floating state** — a restrained keyframe loop creates the elevated motion.
5. **Keyboard focus** — `:focus-visible` provides a clear focus indicator.
6. **Reduced motion** — users who request reduced motion receive an effectively static interaction.
7. **Responsive state** — the control scales down on narrow screens without overflowing.

## Basic markup

```html
<input class="toggle-input" type="checkbox" id="floating-toggle">

<label class="toggle" for="floating-toggle">
  <span class="toggle-track" aria-hidden="true">
    <span class="toggle-thumb">
      <span class="thumb-icon"></span>
    </span>
  </span>
  <span class="toggle-label">Floating mode</span>
</label>
```

The input remains the source of truth. The adjacent label makes the complete control clickable, while the sibling selector `.toggle-input:checked + .toggle` lets CSS react to the checked state without JavaScript.

## Required CSS structure

The implementation is organized around four visual pieces:

- `.toggle-input` — visually hidden native checkbox.
- `.toggle` — clickable and focusable presentation wrapper.
- `.toggle-track` — the pill-shaped background.
- `.toggle-thumb` — the elevated circular control.

The `.thumb-icon` element is decorative and does not carry the state meaning by itself. This avoids communicating the checked state only through color or an icon.

## State behavior

### Default

The track uses a neutral surface and the thumb sits at the left edge. A small shadow separates the thumb from the track.

### Hover

Hovering the label lifts the thumb slightly and increases its shadow. The interaction is intentionally short so it does not compete with the checked-state animation.

### Checked

When the checkbox is checked, CSS moves the thumb toward the right side of the track and raises it above the track. The active track uses a blue-to-purple gradient and a restrained glow.

### Floating motion

The checked thumb uses the `floating-toggle` keyframe animation. The motion changes only the vertical position and scale, preserving the horizontal checked position.

### Focus

Keyboard users receive a visible `:focus-visible` outline. Because the real checkbox remains in the document, the control can be reached and activated with normal keyboard behavior.

### Reduced motion

The `prefers-reduced-motion: reduce` media query shortens animation and transition durations to avoid unnecessary movement for users who request reduced motion.

## Responsive behavior

The showcase uses fluid widths and a breakpoint at 720px. On smaller screens the documentation cards stack vertically, while the toggle itself uses a smaller track and thumb. No horizontal scrolling is required for the control.

## Accessibility notes

- A native checkbox is retained instead of replacing the control with a non-semantic element.
- The label is associated with the checkbox using the matching `for` and `id` values.
- Keyboard focus remains visible through `:focus-visible`.
- The state is not communicated through color alone because the thumb position and label remain visible.
- Reduced-motion preferences are respected.
- The decorative icon uses no text that needs to be announced by assistive technology.

## Customization

The showcase defines CSS custom properties for the page surface, track, active gradient, text, and shadow values. These can be overridden by a consuming project without changing the component selectors.

Example:

```css
:root {
  --accent-a: #2563eb;
  --accent-b: #7c3aed;
}
```

For a different label, only the label text needs to change:

```html
<span class="toggle-label">Enable floating mode</span>
```

## Integration guidance

Copy the component markup into an existing form or settings panel and include the component CSS. If the checkbox needs to submit a value, add a `name` and optional `value` to the native input:

```html
<input
  class="toggle-input"
  type="checkbox"
  id="notifications-toggle"
  name="notifications"
  value="enabled"
>
```

No JavaScript is necessary for the visual interaction. Application logic can listen to the native checkbox in a consuming application when a state change needs to affect other behavior.

## Validation checklist

- [x] Documentation is inside `submissions/docs/`.
- [x] Feature has its own folder.
- [x] `demo.html` is self-contained.
- [x] `style.css` contains the showcase styles.
- [x] `README.md` explains usage and behavior.
- [x] No external JavaScript dependency is required.
- [x] Keyboard focus is visible.
- [x] Reduced-motion support is included.
- [x] Responsive behavior is documented and implemented.
- [x] One documentation submission is contained in the PR.

## Running the demo

Open `demo.html` directly in a browser. The page does not require a development server, build step, package installation, or network request.
