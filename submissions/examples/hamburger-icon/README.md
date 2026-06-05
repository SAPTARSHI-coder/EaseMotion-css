# Animated Hamburger Icon

1. **What does this do?**
   Three horizontal bars smoothly morph into an × close icon on toggle, and back again — with no JavaScript.

2. **How is it used?**

```html
<input type="checkbox" id="nav-toggle" class="hamburger-input" />
<label for="nav-toggle" class="hamburger" aria-label="Toggle menu">
  <span class="hamburger-bar"></span>
  <span class="hamburger-bar"></span>
  <span class="hamburger-bar"></span>
</label>
```

3. **Why is it useful?**
   The hamburger-to-X pattern is one of the most common mobile UI interactions. A pure CSS implementation with smooth transforms fits EaseMotion's philosophy of composable, zero-dependency animations.
