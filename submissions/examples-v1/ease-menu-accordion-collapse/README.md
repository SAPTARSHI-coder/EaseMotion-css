# Component: Ease Menu Accordion Collapse

**EaseMotion CSS** · `submissions/examples/ease-menu-accordion-collapse/`

A smooth, CSS-only accordion menu component featuring max-height transitions and chevron rotation animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ease-menu-accordion-collapse/demo.html
```

---

## Usage

This component utilizes the "Checkbox Hack" to handle the expand/collapse state entirely within CSS. This means you don't need any JavaScript to toggle the accordion items.

```html
<div class="ease-accordion-container">
  
  <div class="ease-accordion-item">
    <!-- Hidden checkbox tracks state -->
    <input type="checkbox" id="acc-1" class="ease-accordion-toggle">
    
    <!-- The label acts as the clickable trigger -->
    <label for="acc-1" class="ease-accordion-header">
      Accordion Title
      <svg class="ease-accordion-chevron" viewBox="0 0 24 24">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </label>
    
    <!-- The content that slides down -->
    <div class="ease-accordion-content">
      <div class="ease-accordion-inner">
        Content goes here...
      </div>
    </div>
  </div>

</div>
```

---

## CSS Techniques

### 1. Zero JS State Management
The hidden `<input type="checkbox">` toggles the active state. The sibling selector `~` targets `.ease-accordion-content` to slide it down, and `+` targets `.ease-accordion-header` to update colors and rotate the chevron.

### 2. Max-Height Transition
Animating `height: auto` directly is not supported in CSS. Instead, we transition `max-height` from `0` to a custom property `--content-max-height: 500px`. This creates a smooth slide-down effect without JS calculation.

```css
.ease-accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;
}

.ease-accordion-toggle:checked ~ .ease-accordion-content {
  max-height: var(--content-max-height); /* Expand */
}
```

### 3. Chevron Rotation
The chevron SVG smoothly rotates 180 degrees when the checkbox is checked, providing clear visual feedback of the state change.

---

## File Structure

```
ease-menu-accordion-collapse/
├── demo.html   — Pre-configured interactive demo
├── style.css   — Component styles and variables
└── README.md   — This documentation
```
