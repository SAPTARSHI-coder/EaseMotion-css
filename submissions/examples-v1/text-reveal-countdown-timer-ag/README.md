# Text Reveal Countdown Timer (Glassmorphism)

A visually stunning, pure CSS countdown timer that uses a text-reveal sliding animation wrapped in a modern glassmorphism design.

## Features
- text-reveal sliding animation via `.ease-text-reveal`
- glassmorphism card (blur + subtle lighting)
- pure CSS (0 JavaScript needed)
- responsive & a11y support

## Usage

```html
<div class="glass-timer" role="timer" aria-live="off">
  <div class="reveal-window">
    <div class="digit-strip ease-text-reveal">
      <div class="digit">10</div>
      <!-- Add your countdown sequence here -->
      <div class="digit">00</div>
    </div>
  </div>
</div>
```
