# Zoom In/Out Hover

**What does this do?**
Adds a smooth zoom animation when an element is hovered. The element gently scales up while the pointer is over it and smoothly returns to its original size when the hover ends, creating a subtle yet effective interactive experience.

**How is it used?**

```html
<div class="zoom-hover">
  Hover Me
</div>

<button class="zoom-hover">
  Get Started
</button>

<img
  class="zoom-hover"
  src="image.jpg"
  alt="Preview"
/>
```

**Why is it useful?**
Hover feedback is one of the most common interaction patterns in modern UI design. A subtle zoom effect helps users identify clickable and interactive elements without introducing visual clutter. Because the animation relies on CSS transforms, it is lightweight, performant, and does not affect document layout or cause reflows. The utility works well for buttons, cards, images, product previews, feature blocks, and call-to-action elements, making it a versatile addition to the framework.

The effect is simple, intuitive, and aligns well with EaseMotion CSS's animation-first philosophy by providing an engaging micro-interaction with minimal code.

---

Submitted by: @hiitarun1
Date: 2026-05-31
Status: **Pending review**
