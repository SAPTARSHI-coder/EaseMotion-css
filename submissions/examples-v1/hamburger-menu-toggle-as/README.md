# Animated Hamburger Menu Toggle

### What does this do?

It is a hamburger icon button whose three bars morph into an X when toggled and reveal a dropdown menu, using only CSS.

### How is it used?

```html
<input type="checkbox" id="nav-toggle" class="nav-toggle" />
<label for="nav-toggle" class="hamburger" aria-label="Toggle navigation menu">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</label>
<nav class="nav-menu">
  <a href="#">Home</a>
  <a href="#">Features</a>
</nav>
```

A hidden checkbox holds the open state. When it is checked, the top and bottom bars rotate into an X, the middle bar fades, and the menu fades and slides in. Toggling is done by clicking the label or pressing space while it is focused.

### Why is it useful?

A hamburger toggle is a standard mobile navigation control. This morphs the icon and reveals the menu with only transforms and transitions driven by the `:checked` state, so it needs no JavaScript. The control is keyboard operable through the checkbox, shows a focus ring, and disables motion under `prefers-reduced-motion: reduce`.
