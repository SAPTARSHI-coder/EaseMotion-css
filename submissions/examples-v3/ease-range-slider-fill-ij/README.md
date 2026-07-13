# Ease Range Slider Fill

A custom cross-browser compatible semantic `<input type="range">` control utilizing a two-stop dynamic gradient fill layout that transitions responsively as the user drags the slider thumb.

## Features
- **Modern Performance CSS:** No continuous layout-thrashing heavy JS listener calculations. Track changes are rendered natively using optimized linear-gradient color nodes.
- **Micro-interactions:** The cursor thumb expands and transforms seamlessly using specialized spring-curves (`cubic-bezier`) on hover and active click focus events.
- **Cross-Browser Compatible:** Complete layout parameters map identically across Webkit standard interfaces as well as Mozilla Gecko renderer targets.

## Implementation Technique
To create a color filling tracking bar effect without building secondary DOM progress layouts, the track uses a progress boundary condition defined by `var(--value)` updated on interaction:
```css
background: linear-gradient(to right, var(--accent-fill) var(--value), var(--track-bg) var(--value));