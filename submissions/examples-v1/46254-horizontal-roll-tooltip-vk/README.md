# CSS Horizontal Roll Tooltip

A simple and reusable horizontal roll tooltip built using only HTML and CSS. The tooltip smoothly slides into view when the user hovers over or focuses on the trigger element.

## What does this do?

This example creates a modern tooltip with a horizontal roll animation. It provides additional information without cluttering the interface and works without JavaScript.

## How is it used?

```html
<div class="tooltip-wrapper">
    <button class="tooltip-button" aria-describedby="tooltip">
        Hover Me
    </button>

    <span id="tooltip" class="horizontal-roll-tooltip" role="tooltip">
        Modern SaaS Tooltip
    </span>
</div>
```

Include the provided `style.css` file and use the HTML structure above. Hover over or focus on the button to display the tooltip.

## Why is it useful?

This tooltip improves user experience by showing helpful information in a clean and interactive way. It is suitable for modern websites, dashboards, forms, and web applications.

## Features

- Pure HTML and CSS
- Smooth horizontal roll animation
- Keyboard accessible
- Responsive design
- Lightweight and reusable
- No JavaScript required

## Files

- `demo.html` – Demo page for the tooltip.
- `style.css` – Styles and animation.
- `README.md` – Documentation.