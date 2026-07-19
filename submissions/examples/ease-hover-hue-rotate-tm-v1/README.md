# ease-hover-hue-rotate

**What does this do?**
Rotates the hue of an element's colors on hover using CSS `filter: hue-rotate()`. A common value is `hue-rotate(180deg)` which produces the complementary color palette, effectively inverting the color scheme. Custom values like `90deg`, `120deg`, etc. can produce unique stylistic effects.

**How is it used?**

```html
<button class="hue-btn">Click Me</button>
<span class="hue-badge">New</span>
```

```css
/* Complementary color swap */
.hue-btn:hover {
  filter: hue-rotate(180deg);
  transition: filter 0.5s ease;
}

/* Partial rotation for unique effect */
.hue-badge:hover {
  filter: hue-rotate(90deg);
  transition: filter 0.5s ease;
}
```

**Why is it useful?**
Hue rotation is a powerful way to create dynamic color shifts without designing multiple themes. It is commonly used for interactive color palettes, buttons, badges, and card UIs. Pure CSS — no JavaScript needed.

**Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge). Uses the CSS `filter` property.
