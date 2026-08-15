# CSS Scale Transform Visualizer

An interactive demo demonstrating how the CSS `transform: scale()` property smoothly transitions and changes the dimensions of an element.

## Questions

### 1. What does this do?
This demo provides a beginner-friendly interactive visualizer showing how the CSS `transform: scale()` property smoothly shrinks or expands an element relative to its original size.

### 2. How is it used?
Apply a scale transform to your element along with a transition property for smooth motion:

```html
<div class="scale-element scale-hover-up">Hover me to grow</div>
```

```css
.scale-element {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-hover-up:hover {
  transform: scale(1.5);
}
```

### 3. Why is it useful?
It fits EaseMotion CSS's philosophy by demonstrating how a basic transform can be animated smoothly without heavy libraries, helping beginners build clean, physics-based hover scaling effects (such as cards growing, buttons pulsing, or thumbnails expanding) while comparing them against their original footprints.

---

## How the Demo Works
- Select any of the scale presets: **0.5x**, **1.0x**, **1.5x**, or **2.0x**.
- The main element scales to the selected value.
- A dashed container remains at the original `1.0x` size, allowing direct comparison of scale changes.
- Click the **Replay Animation** button to trigger a scale-in animation from `0` to the current scale.
- The CSS code preview updates dynamically in real-time.

## Features
- **Smooth Transitions**: Built using standard CSS transitions.
- **Original Size Guide**: Easily compare scaled dimensions against the base elements.
- **A11y Fallback**: Full support for `prefers-reduced-motion` settings.
- **Responsive**: Adapts perfectly to mobile, tablet, and desktop viewports.
- **No Dependencies**: Pure HTML, CSS, and vanilla JS.

## Preview
Open [demo.html](demo.html) directly in any web browser to see it in action.
