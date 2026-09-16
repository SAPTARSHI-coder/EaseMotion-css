# Glassmorphism Stepper Nav (Quickstart Guide)

This guide documents how to build a beautiful, accessible Stepper Navigation component using modern Glassmorphism (frosted glass) aesthetics.

## Glassmorphism CSS Architecture

The core of the glass effect relies on `backdrop-filter: blur()` combined with a semi-transparent background and a subtle light border to simulate the edge of the glass.

```css
:root {
    --glass-bg: rgba(255, 255, 255, 0.15);
    --glass-border: rgba(255, 255, 255, 0.3);
    --glass-blur: 12px;
}

.glass-stepper {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur)); /* Safari support */
    border: 1px solid var(--glass-border);
    border-radius: 24px;
}
```

## HTML Markup Example

A Stepper is fundamentally a list of steps. We use an `<ol>` (ordered list) wrapped in a `<nav>`.

```html
<nav aria-label="Checkout Progress" class="glass-stepper">
    <ol class="stepper-list">
        
        <!-- COMPLETED STEP -->
        <li class="stepper-item is-complete">
            <a href="#cart" class="stepper-link">
                <!-- Hide decorative icons/numbers from screen readers -->
                <span class="stepper-circle" aria-hidden="true">✓</span>
                <span class="stepper-label">Cart</span>
            </a>
        </li>
        
        <!-- ACTIVE STEP -->
        <li class="stepper-item is-active">
            <!-- aria-current indicates the current step -->
            <a href="#shipping" class="stepper-link" aria-current="step">
                <span class="stepper-circle" aria-hidden="true">2</span>
                <span class="stepper-label">Shipping</span>
            </a>
        </li>
        
        <!-- UPCOMING/DISABLED STEP -->
        <li class="stepper-item is-upcoming">
            <!-- Use a span (or disabled button) instead of an anchor if it's not clickable -->
            <span class="stepper-link" aria-disabled="true">
                <span class="stepper-circle" aria-hidden="true">3</span>
                <span class="stepper-label">Payment</span>
            </span>
        </li>
        
    </ol>
</nav>
```

## Accessibility Requirements

Glassmorphism can be tricky for accessibility because it inherently relies on low-opacity backgrounds, which can cause contrast issues.

1. **Aria-Current**: The active step *must* be marked with `aria-current="step"`. This tells screen readers exactly where the user is in the flow.
2. **Focus Rings**: Glass UIs often lack harsh borders. You must manually define a high-contrast `:focus-visible` ring so keyboard users (navigating via `Tab`) know which step is focused.
   ```css
   .stepper-link:focus-visible .stepper-circle {
       outline: 3px solid #fbbf24; /* High contrast yellow/gold */
       outline-offset: 4px;
   }
   ```
3. **Disabled States**: If an upcoming step cannot be clicked yet, do not use an `<a href="#">`. Use a `<span>` or a `<button disabled>` and add `aria-disabled="true"`.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
