# Expandable FAQ Accordion

A lightweight FAQ accordion that reveals answers with smooth height,
opacity, and indicator transitions.

## What does it do?

The component provides:

- Expandable and collapsible FAQ items.
- Smooth content reveal.
- Animated plus indicator.
- Native HTML interaction.
- Keyboard accessibility.
- Visible focus state.
- Responsive layout.
- `prefers-reduced-motion` support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Use the native `details` and `summary` elements:

```html
<details class="ease-faq">
  <summary class="ease-faq__question">
    <span>What is EaseMotion CSS?</span>
    <span class="ease-faq__icon" aria-hidden="true">+</span>
  </summary>

  <div class="ease-faq__answer">
    <div>
      <p>
        EaseMotion CSS is a collection of reusable CSS animation patterns.
      </p>
    </div>
  </div>
</details>
```