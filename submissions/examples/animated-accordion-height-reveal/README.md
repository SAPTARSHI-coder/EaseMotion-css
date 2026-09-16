# Animated Accordion Height Reveal

A reusable accordion interaction with a smooth expand-and-collapse height
transition.

## What does it do?

The accordion reveals and hides content using a CSS grid-row transition.

The interaction provides:

- Smooth content expansion.
- Smooth content collapse.
- Multiple accordion items.
- One active section at a time in the demo.
- Keyboard-accessible buttons.
- Accessible `aria-expanded` states.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Create an accordion with a button and content panel:

```html
<div class="accordion">
  <button
    class="accordion__trigger"
    type="button"
    aria-expanded="false"
    aria-controls="accordion-panel"
  >
    <span>What is EaseMotion CSS?</span>
    <span class="accordion__icon" aria-hidden="true">+</span>
  </button>

  <div
    class="accordion__content"
    id="accordion-panel"
    role="region"
    hidden
  >
    <div class="accordion__inner">
      <p>
        EaseMotion CSS is a collection of reusable motion patterns.
      </p>
    </div>
  </div>
</div>
```
