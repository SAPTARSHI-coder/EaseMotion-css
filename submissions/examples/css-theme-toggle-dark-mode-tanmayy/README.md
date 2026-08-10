# CSS Theme Toggle Dark Mode

A pure-CSS implementation of a Light/Dark mode theme toggle. It utilizes the "Checkbox Hack" at the root level of the DOM to completely remap a suite of CSS custom properties (variables), achieving a global, animated theme switch without a single line of JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a fully functional theme toggle button (a circular pill). When clicked, the sun icon rotates and fades out, while a moon icon rotates and fades in. Simultaneously, the entire page layout smoothly transitions its background colors, text colors, and border colors from a Light Mode palette to a Dark Mode palette.

### 2. How is it used?

The implementation relies on placing a hidden `<input type="checkbox">` at the very top of your `<body>`. The rest of your application is wrapped in a `.theme-wrapper` container. The toggle button itself is a `<label>` linked to the hidden checkbox.

When the checkbox is `:checked`, the CSS uses the general sibling combinator (`~`) to target the `.theme-wrapper` and redefine all of its core CSS variables to their dark variants. Because the child components inherit these variables, the entire app updates instantly.

```html
<!-- 1. The Hidden Checkbox -->
<input type="checkbox" id="theme-toggle" class="theme-checkbox">

<!-- 2. The Application Wrapper -->
<div class="theme-wrapper">
  
  <!-- 3. The Toggle Label -->
  <label for="theme-toggle" class="theme-toggle-btn">
    <svg class="icon-sun">...</svg>
    <svg class="icon-moon">...</svg>
  </label>
  
  <!-- Application Content -->
  <main class="content-card">...</main>
  
</div>
```

**Customization via CSS Properties:**
You manage the theme palettes in the `.theme-wrapper` block and the `.theme-checkbox:checked ~ .theme-wrapper` block:

```css
/* Light Mode Variables */
.theme-wrapper {
  --bg-color: #f8fafc;
  --text-main: #0f172a;
  /* ... */
}

/* Dark Mode Variables */
.theme-checkbox:checked ~ .theme-wrapper {
  --bg-color: #0f172a;
  --text-main: #f8fafc;
  /* ... */
}
```

### 3. Why is it useful?

Most modern web applications require a dark mode toggle. Historically, this meant attaching a JavaScript event listener to a button that toggled a `.dark` class on the `<html>` element. While JS is ultimately necessary if you want to persist the user's choice to `localStorage`, a pure CSS approach is incredibly powerful for lightweight landing pages, blogs, or HTML templates. It proves that complex global state management and smooth, synchronized transitions across dozens of elements can be handled purely by the CSS Object Model, resulting in a perfectly performant, zero-latency user experience.
