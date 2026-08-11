# What does this do?
This submission fixes the low visibility of the theme switcher's Moon icon in Light Mode by applying `fill: currentColor` to the SVG path, ensuring a solid dark crescent moon shape with high contrast against the header background.

# How is it used?
Apply the `.theme-toggle-btn` class to the toggle button, housing the SVG moon icon. In the CSS stylesheet, update the light mode state selector to fill the moon icon:

```css
[data-theme="light"] .theme-toggle-btn .moon-icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
  fill: currentColor;
}
```

# Why is it useful?
It ensures that the theme switcher remains highly visible and accessible to all users in Light Mode, complying with standard WCAG visual contrast ratios and improving the overall usability of the framework's documentation pages.
