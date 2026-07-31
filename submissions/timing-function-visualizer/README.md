# CSS Animation Timing Function Visualizer

A premium, interactive educational playground built entirely with pure HTML and CSS. This tool helps web developers understand, visualize, and compare standard CSS animation and transition timing functions (`linear`, `ease`, `ease-in`, `ease-out`, and `ease-in-out`) side-by-side.

---

## 🌟 Features

- **Side-by-Side Comparison**: Synchronized visual tracks running in parallel to make differences in speed progression immediately clear.
- **Detailed Curve Analysis**: Card layouts containing mathematical inline SVG graphs of each cubic-bezier trajectory.
- **Pure CSS Interactive Controls**: Change the duration (0.5s, 2s, 4s, 8s) or toggle the global playback state (Play/Pause) using checkbox and radio sibling hacks. No JavaScript required.
- **Responsive Layout**: Designed for optimal viewing on desktop, tablet, and mobile screens.
- **Fully Accessible**: Semantic markup, keyboard navigation support (fully navigable via tabs and checkboxes), focus indicators, and strict offline-first capability with no external dependencies.
- **High Performance**: Powered by GPU-friendly `transform: translateX(...)` animations to ensure a buttery 60 FPS visual comparison.

---

## 📂 Folder Structure

The submission includes exactly three files:

```text
submissions/timing-function-visualizer/
├── demo.html     # HTML skeleton, SVG paths, and interactive structures
├── style.css     # CSS variable mappings, layouts, grids, and keyframe animations
└── README.md     # Project documentation and guides
```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, accessible control elements (`aria-label`, `role`), and responsive markup.
- **CSS3 (Pure CSS)**:
  - **CSS Custom Properties (Variables)**: Used to cascade global speed and play state values.
  - **Flexbox & Grid Layouts**: Ensures modular, flexible, and robust grids.
  - **Transform-Based Keyframes**: Optimized for CPU/GPU layer offloading.
  - **CSS Backdrop-Filter & Blur**: Implements modern developer-grade glassmorphic styles.
- **SVG (Scalable Vector Graphics)**: Custom-tailored inline cubic-bezier graphs mapped to the exact coordinate layout of each timing function.

---

## 📈 Explanation of Timing Functions

CSS timing functions are mathematical models represented by **Cubic Bezier curves** with four control points $(P_0, P_1, P_2, P_3)$, where $P_0$ is fixed at `(0, 0)` (start) and $P_3$ is fixed at `(1, 1)` (end).

| Function Name | Bezier Coordinates | Behavior Profile | Best Used For |
|:---|:---|:---|:---|
| **`linear`** | `cubic-bezier(0, 0, 1, 1)` | Moves at a completely constant, uniform velocity. No acceleration or deceleration. | Loading bars, loops, color transitions, rotating loaders. |
| **`ease`** | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Starts slightly slow, accelerates rapidly in the middle, then decelerates gradually at the end. | Default timing. Great for miscellaneous web animations. |
| **`ease-in`** | `cubic-bezier(0.42, 0, 1, 1)` | Starts slowly and accelerates steadily to its peak velocity, stopping abruptly. | Elements exiting the viewport (exits, slide-outs). |
| **`ease-out`** | `cubic-bezier(0, 0, 0.58, 1)` | Launches immediately at peak speed and decelerates gradually to a smooth landing. | Elements entering the viewport (popups, slide-ins). |
| **`ease-in-out`** | `cubic-bezier(0.42, 0, 0.58, 1)` | Starts slowly, speeds up in the middle, and slows down back to a crawl at the end. | State changes that happen inside the page (accordions, toggles). |

---

## 🎨 Customization Guide

You can easily adjust the aesthetics, custom speeds, and styles by modifying the CSS variables in the `:root` block inside [style.css](style.css):

### 1. Modifying Colors
Change the neon glowing highlights of specific animation tracks:
```css
:root {
  --color-linear: #64748b;        /* Color of linear track */
  --color-ease: #3b82f6;          /* Color of ease track */
  --color-ease-in: #8b5cf6;       /* Color of ease-in track */
  --color-ease-out: #10b981;      /* Color of ease-out track */
  --color-ease-in-out: #f43f5e;   /* Color of ease-in-out track */
}
```

### 2. Overriding Animation Speeds
Adjust the values of the speed radios by changing the duration overrides:
```css
#speed-fast:checked ~ .app-wrapper { --anim-duration: 0.5s; }
#speed-normal:checked ~ .app-wrapper { --anim-duration: 2.0s; }
#speed-slow:checked ~ .app-wrapper { --anim-duration: 4.0s; }
#speed-superslow:checked ~ .app-wrapper { --anim-duration: 8.0s; }
```

### 3. Custom Track Sizing
Modify the track dimensions or ball diameter. Be sure to update the calculations in `style.css` so they remain aligned:
```css
.ball-wrapper {
  width: calc(100% - 24px); /* Subtract ball diameter */
}
.ball {
  width: 20px;              /* Ball diameter */
  height: 20px;
}
```

---

## 💻 Browser Compatibility

- **Google Chrome**: 50+ (Full Support)
- **Mozilla Firefox**: 49+ (Full Support)
- **Safari / iOS Safari**: 10+ (Full Support)
- **Microsoft Edge**: 79+ (Full Support)
- **Opera**: 37+ (Full Support)
