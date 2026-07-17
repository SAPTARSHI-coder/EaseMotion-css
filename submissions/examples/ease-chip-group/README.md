# Chip Group Component

### What does this do?

The `ease-chip-group` component provides a set of selectable, interactive chips using pure CSS and the checkbox input pattern. When a user clicks a chip, it smoothly transitions to a selected state by changing color and displaying a checkmark. This component is perfect for filtering, tagging, skill selection, status indicators, and multi-choice interactions.

### How is it used?

Developers use the chip group by:

1. Creating a container with class `.ease-chip-group`
2. For each chip, pairing a hidden `<input type="checkbox">` with a `<label>` that has the `.ease-chip` class
3. Optionally applying color modifiers (`.ease-chip-group-primary`, `.ease-chip-group-success`, `.ease-chip-group-danger`) or size modifiers (`.ease-chip-group-sm`, `.ease-chip-group-lg`)

**Basic Example:**
```html
<div class="ease-chip-group">
  <input type="checkbox" id="chip-1" class="ease-chip-input">
  <label for="chip-1" class="ease-chip">Option 1</label>

  <input type="checkbox" id="chip-2" class="ease-chip-input">
  <label for="chip-2" class="ease-chip">Option 2</label>
</div>
```

**With Color Variant:**
```html
<div class="ease-chip-group ease-chip-group-primary">
  <input type="checkbox" id="skill-1" class="ease-chip-input">
  <label for="skill-1" class="ease-chip">React</label>

  <input type="checkbox" id="skill-2" class="ease-chip-input">
  <label for="skill-2" class="ease-chip">Vue</label>
</div>
```

**With Size Variant:**
```html
<div class="ease-chip-group ease-chip-group-lg">
  <input type="checkbox" id="large-1" class="ease-chip-input">
  <label for="large-1" class="ease-chip">Large Chip</label>
</div>
```

### Why is it useful?

1. **Pure CSS Interaction:** Uses the CSS checkbox pattern (`:checked` pseudo-class) for selection, eliminating the need for JavaScript while maintaining full interactivity and accessibility.

2. **Smooth Animations:** Transitions include:
   - Scale animation on selection (1.05x)
   - Subtle lift on hover (translateY -2px to -4px)
   - Smooth checkmark appearance with scale-in animation
   - Bounce cubic-bezier timing for playful UX

3. **Accessible by Default:** 
   - Proper label-input associations via `for`/`id` attributes
   - Focus-visible states for keyboard navigation
   - Semantic HTML structure
   - Works without JavaScript

4. **Flexible Theming:**
   - **Color Variants:** Primary (blue), Success (green), Danger (red)
   - **Size Variants:** Small, Medium (default), Large
   - Easy to extend with additional color modifiers
   - Respects CSS variables for easy customization

5. **Responsive Design:** 
   - Chips wrap naturally on smaller screens
   - Reduced gap spacing on mobile for better fit
   - Scalable sizing with responsive font adjustments

6. **Checkmark Indicator:** 
   - CSS-generated checkmark using `::before` pseudo-element
   - Animates in/out with the selection state
   - No image dependencies

### Features

- ✅ Multiple selection support (no `radio` group restrictions)
- ✅ Pure CSS (no JavaScript required)
- ✅ Smooth animations and transitions
- ✅ Color variants (Primary, Success, Danger)
- ✅ Size variants (Small, Medium, Large)
- ✅ Keyboard accessible
- ✅ Focus indicators for accessibility
- ✅ Checkmark animation
- ✅ Responsive on mobile
- ✅ Works with EaseMotion CSS variables

### Component Structure

```
.ease-chip-group              /* Container */
├── .ease-chip-input          /* Hidden checkbox */
└── .ease-chip                /* Visible label / chip element */
```

### Modifier Classes

**Color Variants:**
- `.ease-chip-group-primary` — Blue selected state
- `.ease-chip-group-success` — Green selected state
- `.ease-chip-group-danger` — Red selected state

**Size Variants:**
- `.ease-chip-group-sm` — Small padding and font size
- `.ease-chip-group-lg` — Large padding and font size

### Browser Support

- Modern browsers with support for:
  - CSS `:checked` pseudo-class selector
  - CSS transitions and transforms
  - CSS `::before` pseudo-elements
  - Flexbox layout
- Tested on: Chrome, Firefox, Safari, Edge (latest versions)

### Animation Details

- **Default transition:** `0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce easing)
- **Selection transform:** `scale(1.05)` with color change
- **Hover lift:** `translateY(-2px)` on unselected, `-4px` on selected
- **Checkmark animation:** Scales from `0.5` to `1` with opacity fade-in

### Integration Guide

To integrate this into the EaseMotion framework:

1. Copy the contents of `style.css` into `components/chips.css`
2. Import it in the main stylesheet bundle
3. Document in the component library
4. Consider expanding with additional color variants or states as needed
