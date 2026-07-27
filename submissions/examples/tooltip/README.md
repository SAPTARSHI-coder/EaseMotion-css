# Animated Tooltip Component

**What does this do?**
Provides a lightweight, pure-CSS tooltip component that displays data from a custom HTML attribute and animates into view using a smooth fade-in-up physics curve.

**How is it used?**
Apply the `.tooltip-ag` class to any inline or block element, and supply the tooltip text via the `data-tooltip` attribute.
```html
<span class="tooltip-ag" data-tooltip="This is the tooltip text">Hover me!</span>
```

**Why is it useful?**
Tooltips are notorious for requiring heavy JavaScript libraries (like Popper.js) just to render a simple text box. This component leverages CSS pseudo-elements (`::before` for the pointer triangle, `::after` for the text box) and the `attr()` function to generate a perfect, performant tooltip entirely via CSS.
