# CSS Border Radius Morph Visualizer

## Description
A simple interactive visualizer demonstrating how the CSS `border-radius` property can be smoothly transitioned to morph a container between different geometric shapes.

## CSS Property Demonstrated
- `border-radius` (morphing corner curves)
- `width` & `height` (morphing aspect ratio boundaries)
- `transition` & `cubic-bezier` (controlling motion easing)

## How the Demo Works
The visualizer runs in two modes:
1. **Auto Loop (default):** Automatically loops through a sequence of shapes (Rounded Rect &rarr; Circle &rarr; Pill &rarr; Organic Blob) at fixed intervals.
2. **Manual Select:** Allows users to manually select shape tabs to trigger instant custom morph transitions.
The visualizer also renders a real-time updating CSS code snippet corresponding to the active shape. Clicking the **Replay Sequence** button restarts the play timeline loop or triggers a visual re-morph transition.

## Code Usage Example
To create a morphing element, apply transitions on both `border-radius` and layout dimensions:

```html
<div class="morph-element shape-rect"></div>
```

```css
.morph-element {
  width: 180px;
  height: 180px;
  background: #3b82f6;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Morph Targets */
.morph-element.shape-rect {
  border-radius: 24px;
}

.morph-element.shape-circle {
  border-radius: 50%;
}

.morph-element.shape-pill {
  width: 260px;
  height: 120px;
  border-radius: 9999px;
}

.morph-element.shape-blob {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
```

## Why it is Useful
Morphing shape elements are highly effective for modern UI micro-interactions, such as button loading indicators transforming into circles, cards morphing into expanded content modals, or organic hover blobs acting as playful decorative backdrops. This technique maintains focus and continuity since the same visual element scales and rounds dynamically without layout recalculations.

## Tech Stack
- HTML5
- CSS3 (transitions, gradients, outline focus rings, prefers-reduced-motion fallback)
- Minimal JavaScript (for state switching, tab clicks, timer loop, and timeline replay)

## Preview
Open [demo.html](demo.html) directly in your browser to interact with the visualizer.
