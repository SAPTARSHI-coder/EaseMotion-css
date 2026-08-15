# 3D Neumorphic Input Field

A pure CSS, JavaScript-free responsive input component featuring modern neumorphic styling with soft 3D inset shadows and an elevated container. Built for Issue #78724.

## Features
- **Pure CSS:** No JavaScript required.
- **Neumorphic Design:** Uses combinations of positive and negative `box-shadow` values to create realistic extrusions (buttons/containers) and indentations (inputs).
- **Interactive States:** Inputs become deeper on `:focus`. Buttons indent physically on `:active`.
- **Icon Integration:** Optional SVG icons that change color when the input is focused or filled (`:not(:placeholder-shown)`).
- **Fully Responsive:** Fluid widths and responsive padding ensure the component looks great on desktop, tablet, and mobile.
- **Accessible:** Semantic HTML labels, hidden helper text, explicit `focus-visible` rings for keyboard navigation, and `aria-hidden` icons.
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by removing all transitions for a static experience.

## Folder Structure
- `demo.html` - The showcase layout displaying the neumorphic inputs inside an elevated container.
- `style.css` - The core styling, shadow variables, and states.
- `README.md` - Documentation.

## How to Use

### HTML Structure
Use standard form elements. It is recommended to wrap the input in `.neumorphic-input-wrapper` if you intend to use SVG icons.

```html
<div class="neumorphic-form-group">
    <label for="username" class="neumorphic-label">Username</label>
    
    <div class="neumorphic-input-wrapper">
        <input type="text" id="username" class="neumorphic-input" placeholder="Enter username">
        
        <!-- Optional Icon -->
        <svg class="neumorphic-icon" aria-hidden="true">...</svg>
    </div>
</div>
```

### The Neumorphic Effect (CSS)
The effect relies on a background color (`--neu-bg`) that matches both the element and its parent container. The 3D illusion is created exclusively via `box-shadow`:

- **Elevated (Containers, Buttons):**
  `box-shadow: 10px 10px 20px dark_shadow, -10px -10px 20px light_shadow;`
  
- **Inset (Inputs, Pressed Buttons):**
  `box-shadow: inset 6px 6px 12px dark_shadow, inset -6px -6px 12px light_shadow;`

## Customizing Colors
To adapt the component to your brand, update the CSS variables in the `:root` pseudo-class. 
**Crucial:** For neumorphism to work, your `--neu-bg` color must fall somewhere in the middle of the brightness scale (like grey, soft blue, or off-white) so that you can create both a lighter shadow (`--neu-shadow-light`) and a darker shadow (`--neu-shadow-dark`) for contrast. Pure white (`#ffffff`) or pure black (`#000000`) backgrounds do not support standard neumorphism.
