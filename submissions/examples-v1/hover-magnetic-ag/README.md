# Magnetic Hover Button

A pure-CSS micro-interaction that simulates magnetism, attracting the button slightly toward the cursor based on the direction from which it enters.

## 1. What does this do?

It creates a smooth, directional "magnetic pull" effect on hover using absolute-positioned quadrant triggers and CSS custom properties combined with a springy `cubic-bezier` transition.

## 2. How is it used?

Wrap the button content and four directional trigger elements inside the `.magnetic-btn` container:

```html
<button class="magnetic-btn btn-primary">
  <!-- Invisible hover target quadrants -->
  <span class="magnetic-trigger tl"></span>
  <span class="magnetic-trigger tr"></span>
  <span class="magnetic-trigger bl"></span>
  <span class="magnetic-trigger br"></span>

  <!-- Sibling container for parallax content -->
  <span class="btn-content"> Hover Me </span>
</button>
```

Add your preferred layout styling and overrides by adding a theme class (like `.btn-primary` or `.btn-neon`).

## 3. Why is it useful?

It provides a premium, responsive micro-interaction that was historically only possible with heavy JavaScript/GSAP event listeners. Since it relies on native CSS transforms, it uses zero JavaScript, renders efficiently at 60fps, is extremely lightweight, and respects system accessibility standards via `prefers-reduced-motion`.
