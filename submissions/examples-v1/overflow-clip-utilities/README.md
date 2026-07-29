# CSS `overflow: clip` Animation Utilities

Relates to feature request **#41202**.

## 1. What does this do?

Provides utility classes (`.ease-clip-card` and `.ease-clip-margin-card`) that leverage the modern CSS `overflow: clip` property. This allows developers to contain expanding animations, pseudo-elements, and transforms without the negative side effects of traditional `overflow: hidden`.

## 2. Why is this useful for EaseMotion CSS?

Traditionally, containing a rotating gradient glow or an expanding background shape required using `overflow: hidden`. However, `overflow: hidden` technically creates a **scroll container** in the browser's layout engine. This can accidentally swallow scroll wheel events, cause layout thrashing, or create accessibility issues on certain mobile devices.

`overflow: clip` is explicitly designed for visual clipping *without* creating a scroll container. It is lighter on browser rendering and safer for animation components.

Furthermore, `overflow: clip` unlocks the use of `overflow-clip-margin`, which allows you to define exactly how far outside the bounding box an animation is allowed to travel before being clipped.

## 3. How is it used?

**Standard Clipping**
```css
/* Replaces overflow: hidden for animated cards */
.ease-clip-card {
  position: relative;
  overflow: clip; 
  border-radius: 1rem;
}
```

**Margin Clipping**
```css
/* Allows an animation to pop out slightly before being clipped */
.ease-clip-margin-card {
  position: relative;
  overflow: clip;
  
  /* The bounding box is visually expanded by 20px */
  overflow-clip-margin: 20px; 
}
```

## 4. Demo Included
The provided demo shows a side-by-side comparison of `hidden` vs `clip` for a rotating gradient glow, and a demonstration of a bouncing ball animation utilizing `overflow-clip-margin` to pop outside of the card boundaries.
