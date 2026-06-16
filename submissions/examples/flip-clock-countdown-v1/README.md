# Flip Clock Countdown

## What it does

Creates a retro-style flip clock where numbers flip downward like physical split-flap displays. Includes a working countdown timer example.

## How to use it

Static display:
<div class="ease-flip-clock">
    <div class="ease-flip-clock-digit">1</div>
    <div class="ease-flip-clock-digit">2</div>
</div>

Trigger flip animation on a digit:
digitElement.classList.add('ease-flip-animate');
// remove after animation completes

## Variants

- ease-flip-clock-dark - Dark theme with green neon digits
- ease-flip-clock-neon - Neon pink theme with glow effect
- ease-flip-clock-small - Compact size (50x65px)
- ease-flip-clock-large - Large size (120x150px)

## JavaScript Example

function flipDigit(element, newValue) {
    element.classList.add('ease-flip-animate');
    setTimeout(function() {
        element.textContent = newValue;
    }, 300);
    setTimeout(function() {
        element.classList.remove('ease-flip-animate');
    }, 600);
}

## Accessibility

Respects prefers-reduced-motion by disabling flip animations.

## Why it fits EaseMotion CSS

- Pure CSS 3D flip animation
- Retro aesthetic with modern implementation
- Multiple size and color variants
- GPU-accelerated transforms