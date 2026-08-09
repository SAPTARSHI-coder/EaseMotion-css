# Bento Grid Hover Spotlight

An asymmetric bento grid dashboard component for EaseMotion CSS featuring dynamic mouse-tracking radial spotlight glow lighting effects.

## 1. What does this do?
This component provides a sleek modern bento grid layout where each card tracks cursor coordinates in real time, rendering an ambient radial spotlight that highlights content cards on hover.

## 2. How is it used?
1. Include `style.css` in your document.
2. Structure items in a `.bento-grid` container using `.bento-card` and `.bento-card.span-2`.
3. Add a mousemove event listener to compute relative cursor offsets (`--mouse-x` and `--mouse-y` CSS custom properties).

## 3. Why is it useful?
- **Interactive Micro-Animations**: Delights users with cursor-aware illumination.
- **Asymmetric Modern Layouts**: Ideal for dashboard metrics, feature highlights, and portfolio showcases.
- **CSS Custom Property Integration**: Clean separation of script logic and CSS rendering layers.
