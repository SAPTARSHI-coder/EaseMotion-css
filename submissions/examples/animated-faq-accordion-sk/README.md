# Animated FAQ Accordion Component

A modern, high-performance SaaS-style FAQ Accordion component built using **pure HTML and CSS**. It utilizes the CSS checkbox sibling selector hack to enable expand and collapse dynamics, featuring smooth grid-row height transition animations, rotating indicator chevrons, and staggered entrance loading.

---

## 1. What does this do?

This component provides a fully interactive FAQ accordion layout that is grouped into categories (e.g., General & Product, Account & Billing).

### Key Animations & Visual Features

1. **Grid-Row Height Expansion**: Traditionally, CSS height transitions from `0` to `auto` do not work. We utilize a modern CSS Grid layout technique (`grid-template-rows: 0fr` transitioning to `1fr`) to reveal dynamic content heights smoothly.
2. **Rotating Chevron Icon**: The SVG chevron indicator rotates 180 degrees when an accordion item is expanded.
3. **Hover & Focus Effects**: Interactive elements highlight with subtle background changes and border colors on hover or keyboard focus.
4. **Waterfall Staggered Entrances**: The FAQ items cascade into view on load using sequential CSS delay properties (`animation-delay`).

---

## 2. How is it used?

### HTML Setup

Each accordion item consists of a hidden `<input type="checkbox">` trigger, a `<label>` trigger for the question header, and a transition wrapper for the answer:

```html
<article class="faq-item">
  <!-- Hidden Checkbox -->
  <input type="checkbox" id="faq-item-1" class="faq-toggle" />

  <!-- Question Header (Label) -->
  <label
    for="faq-item-1"
    class="faq-question"
    tabindex="0"
    role="button"
    aria-expanded="false"
  >
    <span>What is EaseMotion CSS?</span>
    <svg class="faq-chevron" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </label>

  <!-- Answer Wrapper (Animated Grid Container) -->
  <div class="faq-answer-wrapper">
    <div class="faq-answer-inner">
      <div class="faq-answer-content">
        EaseMotion CSS is an open-source library...
      </div>
    </div>
  </div>
</article>
```

### CSS Transition Structure

To animate the variable answer content height, we toggle the grid rows template inside the CSS:

```css
/* Answer wrapper is initially closed (0 rows height) */
.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-answer-inner {
  overflow: hidden;
}

.faq-answer-content {
  padding: 0 1.5rem;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    padding 0.35s ease;
}

/* Expand content when checkbox is toggled checked */
.faq-toggle:checked ~ .faq-answer-wrapper {
  grid-template-rows: 1fr;
}

.faq-toggle:checked ~ .faq-answer-wrapper .faq-answer-content {
  padding-bottom: 1.5rem;
  opacity: 1;
}

/* Rotate Chevron Icon */
.faq-toggle:checked ~ .faq-question .faq-chevron {
  transform: rotate(180deg);
}
```

---

## 3. Why is it useful?

1. **Zero JavaScript Dependency**: Operates entirely via vanilla HTML and CSS, preventing layout shift delay (CLS) or render-blocking scripts.
2. **Smooth Height Transitions**: By transitioning the `grid-template-rows` parameter (shifting from `0fr` to `1fr`), the component avoids hardcoding absolute `max-height` values, ensuring that text wraps and expands naturally on any screen size.
3. **Responsive Side-by-Side Design**: Fits neatly as a standard two-column SaaS documentation layout on desktops, and transforms fluidly into a stacked vertical list on mobile viewports.
4. **Accessible Outline Bindings**: Accommodates keyboard navigators utilizing target focus parameters, and syncs status updates via `aria-expanded` attributes.
