# Morphing Segmented Control Toggle Bar (GSSoC 2026)

## 1. What does this do?
The **Morphing Segmented Control Toggle Bar** is an interactive view switcher featuring a fluid glider indicator sliding with spring physics timing (`cubic-bezier(0.34, 1.56, 0.64, 1)`), active icon micro-bounce effects, and CSS radio checked state panel toggling.

## 2. How is it used?
Link the stylesheet in your head section:
```html
<link rel="stylesheet" href="style.css">
```
Build your HTML segmented bar using hidden radio inputs and a `.glider` indicator:
```html
<div class="segmented-control">
  <div class="glider-track"><div class="glider"></div></div>
  <input type="radio" name="seg" id="s1" checked>
  <label for="s1">Grid View</label>
</div>
```

## 3. Why is it useful?
- **Zero JavaScript Overhead**: Relies entirely on native HTML radio inputs and CSS sibling selectors for panel routing.
- **Micro-Interaction Precision**: Spring physics cubic bezier curve provides natural tactile feedback on selection.
- **Responsive Adaptability**: Gracefully collapses label typography to icon-only mode on narrow viewports.
