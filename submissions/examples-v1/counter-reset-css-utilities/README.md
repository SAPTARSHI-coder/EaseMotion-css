# Counter Reset CSS Utilities Showcase

A fully responsive, purely CSS-driven showcase demonstrating the power of the `counter-reset` and `counter-increment` properties to create automated, styled numbering systems without any JavaScript.

## Project Overview

CSS counters allow you to automatically number elements in a web page, similar to how an `<ol>` works but with complete design flexibility. This project provides 12 ready-to-use utility examples for styling counters in modern web interfaces, utilizing a glassmorphism aesthetic.

## Folder Structure

```text
submissions/examples/counter-reset-css-utilities/
├── demo.html
├── style.css
└── README.md
```

## Features Demonstrated

1. **Basic Ordered Counter**: Custom shapes and colors replacing standard list bullets.
2. **Nested Counters**: Hierarchical numbering (e.g., 1.1, 1.2) using recursive resets.
3. **Chapter & Section**: Automatically prepending strings like "Chapter 1" and "Sec 1.1".
4. **Card List Numbering**: Applying numerical indices to grid cards.
5. **Timeline Counter**: Connecting numbered dots to create a vertical timeline.
6. **FAQ Counter**: Automatically labeling items with "Q1, Q2, Q3".
7. **Feature Counter**: Utilizing large, low-opacity background numbers as visual watermarks.
8. **Pricing Plan Steps**: Adding tier badges to elements dynamically.
9. **Step-by-Step Process**: Horizontal numbered progress steps.
10. **Blog Numbering**: Styling specific paragraphs or key points.
11. **Custom Formatting**: Using roman numerals, alphabetic characters, and zero-padded decimals.
12. **Dark Mode Preview**: Creating high-contrast accessible counters for night modes.

## HTML Usage Example

To use a basic counter:

```html
<ul class="basic-counter-list">
    <li>Item one</li>
    <li>Item two</li>
</ul>
```

## CSS Utility Classes

The core logic revolves around setting the scope and incrementing the value:

```css
.basic-counter-list {
    /* Initialize the counter */
    counter-reset: my-counter;
}

.basic-counter-list li {
    /* Increment the counter for each item */
    counter-increment: my-counter;
}

.basic-counter-list li::before {
    /* Display the counter */
    content: counter(my-counter);
}
```

## Browser Compatibility

CSS Counters (`counter-reset`, `counter-increment`, `counter()`) are supported in all modern browsers (Chrome, Firefox, Safari, Edge) and have excellent backward compatibility.

## Accessibility Notes

While CSS counters inject text visually via pseudo-elements (`::before`, `::after`), they are typically read by modern screen readers. However, for critical semantic data, ensure underlying HTML remains logical (using `<ol>` where appropriate) and avoid using counters for essential textual content that shouldn't be missed by older assistive technologies.

## How to Run

1. Open your terminal and navigate to the project directory:
   ```bash
   cd submissions/examples/counter-reset-css-utilities/
   ```
2. Open `demo.html` in your web browser. No local server or build tools are required.
