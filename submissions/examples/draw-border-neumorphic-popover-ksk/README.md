# Draw-Border Neumorphic Popover (`draw-border-neumorphic-popover-ksk`)

1. What does this do?  
A pure CSS neumorphic popover component. The trigger is a soft, extruded neumorphic button that draws a clockwise border indicator on hover/focus. When clicked, it displays a matching neumorphic popover card with a spring entrance and a clockwise border sweep, supporting both light and dark neumorphic themes.

2. How is it used?  
Wrap `<input class="ease-neu-toggle">` + `.ease-neu-wrap` together. Inside, place a `.ease-neu-trigger` label and `.ease-neu-popover` card. Theme variables can be easily tuned via CSS custom properties:

```css
.ease-neu-wrap {
  --ease-neu-color:       #3b82f6;          /* draw border color */
  --ease-neu-bg:          #e0e8f6;          /* base neumorphic background */
  --ease-neu-shadow-dark: #becee4;          /* shadow dark offset */
  --ease-neu-shadow-lite: #ffffff;          /* shadow light offset */
  --ease-neu-radius:      20px;
  --ease-neu-width:       310px;
  --ease-neu-offset:      12px;
}
```

Support for dark mode is built in simply by overriding the background and shadow variables inside a theme parent class (e.g. `.theme-checkbox:checked ~ .page-wrapper`):

```css
.dark-theme-parent {
  --ease-neu-bg:          #1b1e2a;
  --ease-neu-shadow-dark: #12141c;
  --ease-neu-shadow-lite: #242838;
  --ease-neu-color:       #a855f7;          /* purple accent in dark mode */
}
```

3. Why is it useful?  
Neumorphic components often suffer from poor visual borders and accessibility boundaries. The clockwise draw-border technique acts as a strong visual indicator for both hover and active/open states, solving the "soft boundaries" problem of neumorphic designs. Keyboard accessibility is fully supported out of the box using checkbox and label focus patterns.

---
*Created for GSSoC-26 — Resolves #46755.*
