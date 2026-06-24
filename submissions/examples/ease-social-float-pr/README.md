# Ease Social Float PR

**What does this do?**  
Creates a vertical social icon dock where each item floats upward on hover or focus and reveals a text label with a smooth CSS transition.

**How is it used?**

```html
<nav class="social-dock" aria-label="Social profile links">
  <a class="social-link" href="#" aria-label="GitHub">
    <span class="social-icon" aria-hidden="true">GH</span>
    <span class="social-label">GitHub</span>
  </a>
</nav>
```

**Why is it useful?**  
Social links are often compressed into icon-only controls. This pattern keeps the compact dock layout while exposing readable labels on hover and keyboard focus, improving clarity without JavaScript.

---

Submitted by: @kunal-9090  
Issue: #5360  
Status: **Pending review**
