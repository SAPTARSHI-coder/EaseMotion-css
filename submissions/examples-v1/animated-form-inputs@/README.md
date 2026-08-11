# Animated Form Inputs with Floating Labels

This is a self-contained example demonstrating how to create modern, animated form inputs with floating labels using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🏷️ **Floating Labels:** Labels smoothly animate from inside the input to above it when focused or filled.
- 🎨 **Focus States:** Beautiful purple glow and border color changes on focus.
- ✓ **Validation States:** Green border for valid inputs, red for invalid.
- 🔐 **Password Strength Indicator:** Real-time visual feedback with color-coded strength bar.
- ☑️ **Animated Checkbox:** Custom checkbox with pop animation and checkmark draw effect.
- 📝 **Textarea Support:** Floating labels work with multi-line text areas.
- 📋 **Select Dropdown:** Styled native select with custom arrow icon.
- 🎬 **Submit Button:** Gradient background with hover effects and loading spinner state.
- ✓ **Success Message:** Animated success notification after form submission.
- ♿ **Fully Accessible:** Proper labels, focus states, and `prefers-reduced-motion` support.
- 🚫 **Minimal JavaScript:** Only for password strength calculation and form submission demo.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Use the `.form-group` structure with `.form-input` and `.form-label`.
4. Add icons using `.form-icon` span.
5. The floating label animation works automatically using the `:placeholder-shown` pseudo-class.

## Key Technique: Floating Labels
The floating label effect uses the `:placeholder-shown` pseudo-class:
```css
/* When input has placeholder (empty), label is inside */
.form-label { top: 50%; }

/* When input is focused OR doesn't show placeholder (has value), label floats up */
.form-input:focus ~ .form-label,
.form-input:not(:placeholder-shown) ~ .form-label {
  top: 0;
  font-size: 0.75rem;
}