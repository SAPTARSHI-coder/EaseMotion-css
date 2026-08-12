# Input Typing Indicator (add-ease-input-typing-indicator)

A premium, highly fluid animated typing indicator featuring three bouncing dots designed for modern chat interfaces. The animation fits seamlessly in both standalone message bubbles and inline input fields, providing interactive user feedback.

## What does this do?

This animation coordinates a synchronized, staggered vertical bounce:
1. **Staggered Delay**: Each dot is given an increasing delay offset, creating a continuous wave motion.
2. **Smooth Physics**: Uses custom timing parameters to simulate gravity deceleration at the peak of the bounce.
3. **Double Context Application**:
   - **Chat bubble**: Positioned as an incoming message from the remote participant.
   - **Inline input area**: Scales and fades in on the right-hand side of the input text box to signal active local typing.

## How is it used?

### 1. Standalone / Reusable Indicator Structure
To use the typing dots loader standalone, reference this markup:
```html
<div class="ease-loader-progress-dots">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
```

### 2. Inline Chat Message Bubble
Embed the progress dots structure inside a bubble to represent incoming typing states:
```html
<div class="ease-typing-bubble">
  <div class="ease-loader-progress-dots">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
  <span class="ease-typing-label">Alex is typing</span>
</div>
```

### 3. Chat Input Field Overlay
Embed the indicator inside the input area wrap to show active typing:
```html
<div class="chat-input-wrapper">
  <input type="text" class="chat-input-field" placeholder="Write a message...">
  
  <!-- Active indicator wrapper (toggled with .is-typing) -->
  <div class="ease-input-typing-container is-typing">
    <div class="ease-loader-progress-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</div>
```

## Customizability

You can override custom property variables inline or inside your stylesheets to adjust the motion signature:
- `--dot-size`: Sizing of each dot (e.g. `6px`, `10px`).
- `--dot-color`: Background fill color of the dots (e.g. Hex, HSL, RGB, or Design Tokens).
- `--dot-gap`: Horizontal gap spacing between dots (e.g. `4px`, `8px`).
- `--dot-bounce-height`: Vertical travel displacement. Keep as a negative value (e.g. `-4px`, `-8px`).
- `--dot-speed`: Duration of a single loop iteration (e.g. `0.6s`, `1.2s`).

## Design Tokens Used
This example links directly to the EaseMotion CSS core design tokens:
- `--ease-color-primary`: Theme accent indicator.
- `--ease-color-muted`: Fallback text and dot colors.
- `--ease-color-bg` & `--ease-color-surface`: Dynamic layouts.
- `--ease-speed-medium` & `--ease-speed-fast`: Smooth transitions.

## Accessibility (a11y)
- Respects system preferences for reduced motion (`prefers-reduced-motion: reduce`).
- When reduced motion is activated, the bouncy movement is disabled. The dots will gently pulse opacity (`ease-kf-dots-fade`) instead of moving vertically, maintaining feedback without introducing disorienting movement.

## Performance
- Coordinates translations via GPU-accelerated `translateY()` properties, bypassing layout shifts and page repaints.
- Leverages opacity animations on top of GPU compositing to guarantee a fluid, 60fps interaction profile.
