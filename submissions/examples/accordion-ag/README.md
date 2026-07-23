# Performant Accordion Animation Example

A modern, highly performant accordion animation component showcasing smooth expand/collapse transitions using CSS Grid.

## What does this do?
This example demonstrates a smooth accordion animation that efficiently expands and collapses content without heavy layout repaints by utilizing `grid-template-rows` and `opacity` transitions.

## How is it used?
The accordion uses standard HTML elements combined with specific CSS techniques. You structure your HTML with a header and a content wrapper, and toggle the `aria-expanded` attribute on the header button via JavaScript.

```html
<div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">
        <span class="title">Section Title</span>
        <span class="icon">...</span>
    </button>
    <div class="accordion-content-wrapper">
        <div class="accordion-content">
            <p>Content goes here.</p>
        </div>
    </div>
</div>
```

## Why is it useful?
Historically, animating an element's height in CSS to achieve an accordion effect required expensive JavaScript calculations or hard-coded heights, leading to layout thrashing and poor performance. This modern approach uses CSS Grid (`grid-template-rows: 0fr` to `1fr`) to allow smooth height transitions up to the element's natural 'auto' height, completely avoiding costly layout recalculations while keeping the code clean and CSS-only. It aligns with EaseMotion's philosophy of providing smooth, performant, and developer-friendly animation utilities.
