# CSS Liquid Ripple Accordion for Accessible Web Layouts

## What does this do?

This submission demonstrates a responsive, pure CSS accordion with smooth liquid ripple transitions. It is built using semantic HTML (`details` and `summary`), requires no JavaScript, and is designed to complement modern accessible web interfaces.

## How is it used?

Use native `details` and `summary` elements:

```html
<details class="accordion-item">
  <summary class="accordion-trigger">
    <span class="accordion-text">
      <span class="accordion-title">Getting Started</span>
      <span class="accordion-subtitle">
        Learn how to use the component in your project.
      </span>
    </span>

    <span class="accordion-arrow" aria-hidden="true">▼</span>
  </summary>

  <div class="accordion-content">
    <div class="accordion-body">
      <p>Your accordion content goes here.</p>
    </div>
  </div>
</details>
```

The component can be customized using CSS custom properties:

```css
:root {
  --accordion-duration: 0.55s;
  --accordion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --accordion-ripple-scale: 2.2;

  --primary: #6366f1;
  --secondary: #8b5cf6;

  --radius: 18px;
}
```

Open `demo.html` in any modern browser. No JavaScript, build tools, or external libraries are required.

## Why is it useful?

Accordions help organize content into expandable sections, making interfaces cleaner and easier to navigate without overwhelming users. The liquid ripple animation adds subtle visual feedback while maintaining accessibility and performance.

This example fits EaseMotion CSS because it:

* uses native keyboard-accessible `details` and `summary` elements;
* creates a smooth liquid ripple effect using CSS pseudo-elements;
* exposes animation timing, easing, ripple scale, colors, and border radius through CSS custom properties;
* provides smooth expand and collapse transitions without JavaScript;
* includes visible keyboard focus styles;
* adapts to different screen sizes with responsive layouts;
* respects the user's `prefers-reduced-motion` setting;
* requires zero JavaScript and zero external dependencies.
