# Animated Floating Label Form

A clean, modern, and fully responsive **Login Form** featuring smooth floating labels. This example demonstrates how to combine **EaseMotion CSS** for beautiful staggered entrance animations and button interactions with a pure CSS floating label mechanism that requires zero JavaScript.

## 🚀 Features

- **Staggered Card Entrance**: Uses `ease-zoom-in` for the main card and `ease-fade-in-up` with `ease-delay-*` for the form elements to create a smooth, cascading load effect.
- **Pure CSS Floating Labels**: Labels smoothly animate up and change color when the input is focused or contains text, using the `:not(:placeholder-shown)` pseudo-class.
- **Interactive Submit Button**: Uses `ease-hover-grow` combined with custom box-shadow transitions for a satisfying click target.
- **Custom Checkbox**: A fully styled, animated checkbox for the "Remember me" option.
- **Social Login Grid**: Clean, responsive grid for alternative sign-in methods with hover state color inversions.
- **Accessible & Semantic**: Properly linked `<label>` tags and focus states for keyboard navigation.

## 📂 File Structure

```text
submissions/examples/animated-floating-label-form/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, floating labels, and form styling
└── README.md    # Documentation