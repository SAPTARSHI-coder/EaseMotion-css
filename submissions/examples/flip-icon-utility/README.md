# Flip Icon Utility

**What does this do?**
Creates a smooth 180-degree X-axis flip animation for icon components and small UI elements. Ideal for toggle buttons, expand/collapse indicators, settings icons, and any interactive element where direction feedback matters.

**How is it used?**

```html
<!-- Entrance flip (plays on load) -->
<span class="flip-icon-x">⚙️</span>

<!-- Hover-triggered flip -->
<button class="flip-icon-x-hover">▼</button>

<!-- Customizable timing -->
<span class="flip-icon-x" style="--flip-duration: 600ms;">🔓</span>
```

**Why is it useful?**
Icon flip animations provide intuitive directional feedback in compact UI spaces. Unlike the existing `ease-flip` (Y-axis entrance animation), this utility offers X-axis rotation with both entrance and hover variants — perfect for accordion arrows, theme toggles, expand buttons, and mobile navigation handles. Pure CSS, zero dependencies.
