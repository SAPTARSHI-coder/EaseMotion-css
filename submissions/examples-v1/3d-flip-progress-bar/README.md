# CSS 3D-Flip Progress Bar

An engaging, highly interactive dashboard component that utilizes a 3D spatial flip to reveal a dynamic progress bar on the reverse side of a metric card. Built entirely with pure CSS and HTML.

## 🚀 Features

- **Pure CSS 3D Engine:** Uses `perspective`, `transform-style: preserve-3d`, and `rotateY` to create a smooth, performant card-flipping effect without any JavaScript.
- **Dynamic CSS Variables:** Progress bar widths and colors are easily controlled via inline CSS custom properties (`--target-width`, `--fill-color`).
- **Chained Animations:** The progress bar fill smoothly animates only *after* the 3D card flip reveals it, providing a deeply satisfying micro-interaction.
- **Accessible Design:** Fully respects `@media (prefers-reduced-motion: reduce)`. For motion-sensitive users, the 3D rotation and sliding fill animations are bypassed in favor of a clean, instantaneous opacity toggle.

## 🛠️ Usage

Implement the HTML structure from `demo.html` and the corresponding styles from `style.css`. The magic happens inside the `.em-3d-flip-container`, which holds the `.em-3d-flip-front` and `.em-3d-flip-back` faces.

Set your target progress on the back face using the inline style variable:

```html
<div class="em-progress-fill" style="--target-width: 85%; --fill-color: #8b5cf6;"></div>
