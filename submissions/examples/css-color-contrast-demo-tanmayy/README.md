# CSS color-contrast() Demo

A pure-CSS implementation demonstrating the experimental CSS `color-contrast()` function. This component features an interactive layout where users can switch the background color of a card, and the CSS automatically calculates whether the text should be black or white to maintain strict accessibility standards.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a highly interactive "Theme Builder" card. When a user clicks one of the color swatches at the bottom of the card (Blue, Yellow, Dark Slate, White, Red, Emerald, Pink), the background of the card smoothly transitions to that color. Simultaneously, the CSS `color-contrast()` function analyzes the new background color and instantly flips the text color to either stark white or pure black to guarantee the highest possible WCAG contrast ratio.

### 2. How is it used?

The interactive state is managed using the HTML Checkbox Hack. Hidden `<input type="radio">` elements store the current theme state, and their corresponding `<label>` elements act as the color swatches. 

The CSS sibling combinator (`~`) passes the selected color into a custom property (`--dynamic-bg`), which is consumed by the `color-contrast()` function:

```css
.contrast-card {
  background-color: var(--dynamic-bg);
  
  /* Fallback for browsers that don't support the feature yet */
  color: #ffffff; 
  
  /* Modern CSS Auto-Contrast Engine */
  color: color-contrast(var(--dynamic-bg) vs #ffffff, #000000);
}
```

*Note: The demo includes an `@supports` feature query that displays a warning banner if the user's browser does not yet support `color-contrast()`.*

### 3. Why is it useful?

Maintaining accessible text contrast is one of the most tedious tasks in building dynamic, user-customizable themes (e.g., allowing a user to pick their own profile color). Historically, developers had to write JavaScript functions to parse hex codes, calculate the relative luminance of the background, and conditionally apply a `.text-dark` or `.text-light` class. 

The CSS `color-contrast()` function natively solves this at the rendering engine level. It guarantees WCAG AA/AAA compliance dynamically, completely eliminating the need for complex JavaScript color math and layout thrashing, representing the bleeding-edge future of accessible CSS architecture.
