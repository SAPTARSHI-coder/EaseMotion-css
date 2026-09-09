# Progress Ring Gauge
A dependency-free circular progress indicator for the EaseMotion CSS gallery.

## Features
* Pure HTML and CSS
* Circular SVG progress ring
* 72% progress value
* Rounded progress cap
* Centered percentage and status label
* Smooth initial fill animation
* Responsive sizing
* `prefers-reduced-motion` support
* No JavaScript or external dependencies

## Structure
```text
progress-ring-gauge/
├── demo.html
├── style.css
├── README.md
└── PR.md
```

## Usage
Open `demo.html` in a browser to view the progress ring. The displayed progress is controlled by the `--progress` custom property:
```css
.progress-ring {
  --progress: 72;
}
```
Change the value to any percentage from `0` to `100` and update the center label if required.

## Implementation
The gauge uses two SVG circles:
* A muted circle acts as the background track.
* A second circle uses `stroke-dasharray` and `stroke-dashoffset` to display the progress amount.
The progress stroke uses `stroke-linecap: round` to create the requested rounded cap.

## Accessibility
The visual gauge is exposed as an image-like component with an accessible label describing the current progress. The component does not rely on JavaScript and respects the user's `prefers-reduced-motion` preference.

## Customization
Colors, spacing, ring size, stroke width, and other visual values are defined as CSS custom properties at the top of `style.css` for easy customization.
