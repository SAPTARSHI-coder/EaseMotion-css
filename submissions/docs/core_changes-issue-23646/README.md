# Single-Run Typewriter Animation — Issue #23646

## What does this do?

This submission adds a single-run typewriter animation (`.ease-typewriter`) that types out text character-by-character once, scaling its duration and width based on a configurable character count variable (`--ease-typewriter-chars`), and leaves a blinking cursor after completing.

## How is it used?

In HTML, apply the `.ease-typewriter` class to an inline element, and set the `--ease-typewriter-chars` CSS variable inline matching the exact number of text characters:

```html
<!-- Types "Hello, World!" (13 characters) once and stops with cursor -->
<span class="ease-typewriter" style="--ease-typewriter-chars: 13;">
  Hello, World!
</span>
```

For customizable spacing, make sure to use monospaced fonts (like `Courier` or `Fira Code`) on the element.

## Why is it useful?

It provides a clean, native CSS-only typewriter primitive for landing page headers, consoles, and hero banners, solving the limitation of the existing looping animation (`.ease-typewriter-loop`) and allowing developers to easily control typing speeds and widths dynamically without writing custom JavaScript triggers.

---

## Proposed Changes in Core Code

To integrate this animation, the following rules are proposed for `core/animations.css`:

### File: `core/animations.css`

Add the keyframes and the class selector:

```css
/* Typewriter (Single-run) Animation */
@keyframes ease-kf-typewriter {
  from {
    width: 0;
  }
  to {
    width: calc(var(--ease-typewriter-chars, 20) * 1ch);
  }
}

@keyframes ease-kf-blink-cursor {
  0%,
  100% {
    border-right-color: currentColor;
  }
  50% {
    border-right-color: transparent;
  }
}

.ease-typewriter {
  --ease-typewriter-chars: 20;
  --ease-typewriter-duration: calc(var(--ease-typewriter-chars) * 0.08s);

  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid currentColor;
  width: 0;
  max-width: fit-content;

  animation:
    ease-kf-typewriter var(--ease-typewriter-duration)
      steps(var(--ease-typewriter-chars), end) forwards,
    ease-kf-blink-cursor 0.75s step-end infinite;

  will-change: width;
}
```

Fixes #23646
