# Ease Accordion

## What does this do?

A collapsible accordion component with an animated content transition and rotating arrow indicator.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<details class="accordion-item">
    <summary>
        <span>Section title</span>
        <span class="accordion-arrow">⌄</span>
    </summary>

    <div class="accordion-content">
        Accordion content goes here.
    </div>
</details>
```

### Features

- Expand/collapse state
- Animated content transition
- Rotating arrow indicator
- Multiple sections
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Accordions are commonly used for FAQs, documentation, settings panels, and other interfaces where content needs to be expanded or collapsed.

This component uses native HTML `details` and `summary` elements with CSS transitions, making it lightweight, accessible, and easy to integrate while following the animation-first philosophy of EaseMotion CSS.