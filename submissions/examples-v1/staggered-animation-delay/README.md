# Animation Delay Utilities

**What does this do?**
Provides reusable utility classes for applying incremental animation delays, making it easy to create staggered entrance animations for cards, lists, grid items, and other UI elements.

**How is it used?**

```html
<div class="ease-fade-up ease-delay-1">Card 1</div>
<div class="ease-fade-up ease-delay-2">Card 2</div>
<div class="ease-fade-up ease-delay-3">Card 3</div>
<div class="ease-fade-up ease-delay-4">Card 4</div>
```

**Available Utilities**

```css
.ease-delay-1 {
  animation-delay: 0.1s;
}
.ease-delay-2 {
  animation-delay: 0.2s;
}
.ease-delay-3 {
  animation-delay: 0.3s;
}
.ease-delay-4 {
  animation-delay: 0.4s;
}
```

**Why is it useful?**
Staggered animations help guide user attention and create a polished, modern interface. These utilities are lightweight, composable, and work seamlessly with existing EaseMotion CSS animation classes without requiring custom CSS for each component.

Common use cases include:

- Card grids
- Dashboard widgets
- Feature sections
- Timelines
- Galleries
- Navigation menus

---

Submitted by: @Sricharan106
Date: 2026-06-06
Status: Pending maintainer review
