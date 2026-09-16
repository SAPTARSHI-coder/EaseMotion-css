# CSS Rocket Send Animation

A pure CSS "send" button that morphs into a launching rocket
when clicked, with a flickering flame and a "Message sent!"
confirmation label — no JavaScript required.

## What it does

Clicking (or tabbing to and activating) the Send button
triggers a launch sequence: the button label fades out, a small
rocket icon flickers its flame, then the whole button lifts off
and flies upward out of view. Once the animation completes, a
"Message sent!" confirmation label fades in below the input
field.

## How to use it

```html
<div class="rocket-send">
  <input type="checkbox" id="rocket-trigger" class="rocket-trigger-input">

  <div class="rocket-field">
    <input type="text" class="rocket-message-input" placeholder="Type a message..." aria-label="Message">

    <label for="rocket-trigger" class="rocket-send-btn" tabindex="0" role="button" aria-label="Send message">
      <span class="rocket-btn-label">Send</span>
      <span class="rocket-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 2 L15 9 L12 22 L9 9 Z" />
          <path class="rocket-flame" d="M10 20 L12 24 L14 20 Z" />
        </svg>
      </span>
    </label>
  </div>

  <p class="rocket-sent-label" aria-live="polite">Message sent!</p>
</div>
```

The rocket icon is a simple inline SVG (a triangle body plus a
small flame path); swap it for any icon set as long as the flame
element keeps the `rocket-flame` class, since that's what
animates during launch.

## Why it fits EaseMotion CSS

- **Pure CSS, zero dependencies** — the launch sequence uses the
  checkbox-hack pattern instead of JavaScript, consistent with
  the library's zero-JS philosophy.
- **Accessible** — the send control is a real, keyboard-focusable
  button (`tabindex="0"`, `role="button"`, `aria-label`), and the
  confirmation message uses `aria-live="polite"` so it's announced
  to screen readers without needing focus.
- **Respects motion preferences** — a `prefers-reduced-motion`
  media query disables the launch and flicker animations, hiding
  the button directly and showing the confirmation immediately.
- **Readable, semantic class names** — `rocket-send-btn`,
  `rocket-flame`, `rocket-sent-label`, etc.

## Notes

The launch is a one-shot interaction tied to the checkbox's
checked state. Unchecking (clicking the button again after
launch) resets the button back to its starting position,
consistent with the checkbox-hack pattern used elsewhere in this
library (see the CSS Flower Bloom example's replay behavior).
