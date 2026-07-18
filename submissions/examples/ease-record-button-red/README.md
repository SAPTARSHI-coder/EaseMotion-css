# ease-record-button-red

A toggleable record button. Idle state is a neutral gray circle; clicking switches it to a solid red button with a pulsing "live" ring, a morphing dot-to-stop-square icon, a blinking "Recording" label, and an elapsed-time counter. Click again to stop and reset.

## Preview

- Idle: plain gray circular button with a small gray dot.
- Recording: button turns red, the dot morphs into a small white "stop" square, an animated ring pulses outward continuously, the status label blinks, and a `MM:SS` timer counts up.
- A `--compact` modifier provides a smaller 48px variant (default is 64px).
- Fully supports light and dark themes via `[data-theme]`.
- Respects `prefers-reduced-motion` by disabling the pulse/blink animations.

## Usage

```html
<button class="ease-record-button-red" type="button" aria-pressed="false">
  <span class="ease-record-button-red__ring"></span>
  <span class="ease-record-button-red__dot"></span>
</button>
<p class="ease-record-button-red__status">
  <span class="ease-record-button-red__label">Not recording</span>
  <span class="ease-record-button-red__timer" aria-hidden="true">00:00</span>
</p>
```

Toggle the `is-recording` class (and update `aria-pressed`) via JavaScript on click — see `demo.html` for a complete example that also drives the elapsed-time counter.

Add the `ease-record-button-red--compact` modifier class for a smaller 48px button.

## Files

- `demo.html` — three example buttons (default, compact, and one that starts already recording) with click-to-toggle behavior and a light/dark theme toggle.
- `style.css` — component styles, using CSS custom properties for full light/dark theme support.
- `README.md` — this file.

## Accessibility

- The button uses `aria-pressed` to communicate recording state to assistive technology.
- The ring and dot are purely decorative and do not carry semantic meaning on their own; the status text is the accessible source of truth.
- All animations (pulse, blink) are disabled under `prefers-reduced-motion: reduce`.
