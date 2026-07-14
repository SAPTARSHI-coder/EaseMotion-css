# Off Canvas Drawer

### What does this do?

It shows a slide in drawer that enters from the left when the menu button is pressed and closes on a backdrop click. It uses a hidden checkbox as the toggle, so it needs no JavaScript and animates with a smooth slide.

### How is it used?

```html
<input type="checkbox" id="drawer-toggle" class="drawer-toggle" />
<label class="drawer-btn" for="drawer-toggle">Menu</label>
<label class="drawer-scrim" for="drawer-toggle"></label>
<aside class="drawer">
  <nav><a href="#">Dashboard</a></nav>
</aside>
```

The checkbox, the open button, and the scrim all share the same `for` id. When the checkbox is checked the drawer slides in and the scrim appears; clicking the scrim unchecks it.

### Why is it useful?

Off canvas drawers hold navigation and filters on mobile layouts. This builds a toggled drawer with a dimmed backdrop and a slide animation using only a checkbox and CSS. Links have hover and focus styles and the slide is removed under reduced motion.
