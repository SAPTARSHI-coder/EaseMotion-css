# CSS-Only Tooltip

**What does this do?**
This component provides a floating text box that appears with a smooth slide-up and fade-in animation when a user hovers over an element, created entirely without JavaScript.

**How is it used?**
Add the `tooltip-container` class to any element and provide the tooltip text using the `data-tooltip` attribute.

```html
<button class="tooltip-container" data-tooltip="Click here to save your changes">
  Save Changes
</button>
```

**Why is it useful?**
Tooltips are essential for modern UI/UX to explain icons, buttons, or truncated text without cluttering the screen. Doing this entirely in CSS keeps the framework lightweight and performant, and the built-in animation aligns perfectly with EaseMotion's animation-first philosophy.
