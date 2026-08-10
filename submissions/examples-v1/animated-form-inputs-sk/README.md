# Animated Form Input Focus States

A reusable, fully CSS-driven collection of animated form input focus states featuring floating labels and validation feedback. Integrates seamlessly with existing EaseMotion CSS form utilities.

## Features

- 🎈 **Floating Labels:** Uses the `:placeholder-shown` CSS trick to automatically float labels out of the way when a user types, completely without JavaScript.
- ➖ **Animated Underlines:** Includes a clean `.input-line` variant with a center-expanding bottom border that animates on focus.
- 🔲 **Animated Outlines:** Includes a robust `.input-outline` variant where the floating label rests directly on the border outline.
- ✅ **Validation States:** Built-in support for validation states (like `.is-success`), which pop in SVG icons using a smooth spring animation curve.
- 🛑 **Prefers-Reduced-Motion:** Respects OS-level accessibility settings to disable all label transforms and border expansions if reduced motion is preferred.

## Usage

1. Copy the HTML structures from `demo.html`. 
2. **Crucial Step:** Ensure your `<input>` has `placeholder=" "` (a single space character). This is mandatory for the pure CSS floating label logic (`:placeholder-shown`) to calculate if the input is empty or if it contains typed text.
3. Include the `style.css` which powers the layout and `:focus` state micro-interactions.

## Customization

Easily adapt the colors to match your brand's theme or specific validation requirements by editing the CSS variables:

```css
:root {
  --input-focus: #3b82f6; /* Your brand primary color */
  --input-success: #10b981;
  --input-error: #ef4444;
  --transition-speed: 0.3s;
}
```

## Contributed by
- Man1ac-1773
