# Draw Border Tooltip

### What does this do?

A pure CSS tooltip component that reveals itself with a smooth fade-and-slide transition while its border is drawn using animated horizontal and vertical border lines.

---

### How is it used?

Include the stylesheet and use the following HTML structure:

```html
<div class="tooltip-wrapper">

    <button
        class="tooltip-trigger"
        aria-describedby="tooltip">

        Hover Me

    </button>

    <span
        class="tooltip"
        id="tooltip"
        role="tooltip">

        Some Tooltip text

    </span>

</div>
```

The tooltip is displayed on **hover** .

---

### Why is it useful?

This component aligns with EaseMotion's philosophy of creating lightweight, expressive UI interactions using only CSS. It demonstrates how layered transitions and border animations can produce a polished, modern tooltip without any JavaScript, while remaining responsive, accessible, and easy to customize through CSS custom properties.