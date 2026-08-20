# 3D Origami Paper-Fold Accordion Cards (GSSoC 2026)

## 1. What does this do?
The **3D Origami Paper-Fold Accordion Cards** component creates paper-fold accordion cards with multidirectional 3D perspective transforms (`rotateX(-30deg)`), shadow elevation depth shading, spring physics expansion keyframes, and native radio input panel toggling.

## 2. How is it used?
Link the stylesheet in your HTML document:
```html
<link rel="stylesheet" href="style.css">
```
Structure accordion cards using radio input triggers and `.accordion-content` wrappers:
```html
<div class="accordion-item">
  <input type="radio" name="acc" id="a1" checked>
  <label for="a1" class="accordion-header">...</label>
  <div class="accordion-content">...</div>
</div>
```

## 3. Why is it useful?
- **3D Paper Fold Micro-Interactions**: Provides realistic paper folding and un-folding perspective motion.
- **Zero JavaScript Overhead**: Relies purely on CSS `:checked` pseudo-selectors and transform transitions.
- **Accessible & Accessible**: Preserves semantic HTML headings and focusable label triggers.
