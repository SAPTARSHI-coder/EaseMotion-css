# Text Reveal Effects Module

A collection of premium typography animations for high-impact storytelling and UI headers.

## Included Effects

| Class | Effect | Usage Note |
| :--- | :--- | :--- |
| `.em-reveal-up` | Masked Reveal | Wrap text in `<span>` inside the div. Best for entry animations. |
| `.em-typewriter` | Typewriter | Fixed-width font recommended. Uses CSS `steps()` for realism. |
| `.em-glitch` | Glitch | Requires `data-text` attribute matching the inner text for the overlay. |

## How to Use

### 1. Masked Reveal
Perfect for hero headers.
```html
<div class="em-reveal-up">
    <span>Your Text Here</span>
</div>