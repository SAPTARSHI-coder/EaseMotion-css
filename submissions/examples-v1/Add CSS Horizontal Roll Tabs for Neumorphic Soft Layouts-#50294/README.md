# CSS Horizontal Roll Tabs for Neumorphic Soft Layouts

A pure CSS tab component featuring a smooth, 3D horizontal roll interaction. The design leverages the popular "Neumorphic Soft" aesthetic, employing dual-tone drop shadows and inset shadows to create extruded and debossed elements perfectly suited for modern settings panels and dashboards.

## Features

- **Pure CSS**: Fully operational without any JavaScript. It utilizes the native `<input type="radio">` checked state pattern.
- **Neumorphic Design**: Uses meticulously crafted CSS variables for light and dark shadows (`--shadow-light` and `--shadow-dark`) on a soft grey background to simulate physical depth.
- **3D Horizontal Roll**: The tab panels employ `rotateY` transforms within a `perspective` container. As you switch tabs, panels appear to fold or roll horizontally into view.
- **Direction-Aware (Pseudo)**: The inactive panels set their transform-origin and rotation dynamically so that rolling in from the left or right feels natural based on their DOM position relative to the active tab.
- **Accessible**: Fully accessible via keyboard. Users can focus on the labels or radio buttons and navigate tab content efficiently.

## Customization

The layout's variables can be configured within the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Theme Colors */
  --bg-color: #e0e5ec;
  --text-primary: #4a5568;
  --accent-color: #3182ce;
  
  /* Shadow Colors (Neumorphism Core) */
  --shadow-light: #ffffff;
  --shadow-dark: #a3b1c6;
  
  /* Interaction Timings */
  --tab-transition-duration: 0.6s;
  --tab-transition-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  --tab-roll-angle: 90deg;
}
```

## How It Works

- The container `.tabs-content` has `perspective: 1200px` to establish a 3D space.
- Inactive tab panels (`.tab-panel`) are rotated `90deg` along the Y-axis and scaled down slightly.
- The `:checked` radio button maps to the corresponding `.tab-panel` via the `~` combinator, transforming its `rotateY` back to `0deg` and `opacity` to `1`.

## Usage Instructions

1. Open `demo.html` in your web browser.
2. Click the tabs (Dashboard, Settings, Profile) to view the 3D rolling transition and neumorphic active states.
3. Use the `Tab` key to focus the tab triggers and verify focus indicators.

## Browser Support

Works elegantly in all modern browsers that support CSS Variables, 3D Transforms, and general sibling combinators.
