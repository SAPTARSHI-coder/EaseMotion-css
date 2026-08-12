# Ease Dropdown Fade PR

**What does this do?**  
Adds a CSS-only dropdown menu that fades, shifts, and scales into view when the trigger is hovered or focused.

**How is it used?**

```html
<div class="dropdown">
  <button class="dropdown-trigger" type="button" aria-haspopup="true">Resources</button>
  <div class="dropdown-menu" role="menu">
    <a href="#" role="menuitem">Motion recipes</a>
  </div>
</div>
```

**Why is it useful?**  
Dropdowns can feel abrupt when they instantly appear. This pattern keeps the menu removed from interaction until visible, then uses opacity and transform transitions to make the reveal feel smooth and stable.

---

Submitted by: @kunal-9090  
Issue: #5370  
Status: **Pending review**
