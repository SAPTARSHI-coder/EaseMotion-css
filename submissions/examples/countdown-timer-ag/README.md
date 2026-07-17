# CSS Countdown Timer Display

An elegant, high-performance, and responsive 3D Flip Countdown Timer designed for product launches, events, and marketing campaigns.

## 📋 Mandatory Questions

### 1. What does this do?

This submission displays a premium, highly responsive 3D flip card countdown timer (days, hours, minutes, seconds) with smooth digit-change transitions triggered by toggling a CSS animation class.

### 2. How is it used?

Wrap the timer blocks in a `.countdown-wrapper` container. Each block is structured with a `.countdown-card` (which holds the split line aesthetic and perspective) wrapping the `.digit` text element, followed by a `.label` element:

```html
<section class="countdown-wrapper">
  <!-- Countdown Block -->
  <div class="countdown-block">
    <div class="countdown-card">
      <span class="digit" id="seconds-digit">00</span>
    </div>
    <span class="label">Seconds</span>
  </div>
</section>
```

When a digit changes, apply the `.flip` class in CSS via a simple Javascript callback to trigger the 3D card folding animation. Swap out the inner text of the `.digit` element halfway through the transition:

```css
/* Animation applied via the .flip class */
.digit.flip {
  animation: flip-digit 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes flip-digit {
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(-90deg);
    opacity: 0.3;
  }
  50.01% {
    transform: rotateX(90deg);
    opacity: 0.3;
  }
  100% {
    transform: rotateX(0deg);
  }
}
```

### 3. Why is it useful?

It demonstrates how to leverage CSS 3D transforms (`perspective`, `rotateX`, and `transform-style`) to achieve a premium "flip-clock" layout and mechanical card-turn transition using only a single element per digit. This approach allows developers to build high-fidelity interactive elements with minimal, performant Javascript for state logic—aligning perfectly with EaseMotion's philosophy of CSS-first, zero-dependency visual excellence.
