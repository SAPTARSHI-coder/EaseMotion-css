# CSS Fiber Optic Glow Lines

A pure CSS animated background featuring multi-colored fiber optic glowing line trails that shoot upwards, creating a dynamic, high-tech, and futuristic visual effect. Built entirely without JavaScript, using CSS animations, box-shadows for glow effects, and gradient backgrounds.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required for the animation or layout.
- **Dynamic Glow Effect:** Uses `box-shadow` and `linear-gradient` to simulate bright fiber optic light heads and fading trails.
- **Multi-colored:** Includes distinct color groups (cyan, pink/magenta, purple) for a vibrant look.
- **Depth and Layering:** Utilizes `blur()` filters and z-index to create a sense of 3D depth.
- **Responsive:** Adjusts the number of rendered lines on smaller screens to ensure optimal performance.
- **Accessible:** Includes `prefers-reduced-motion` support to disable animations for users sensitive to motion.

## 💻 Usage

```html
<div class="fiber-optic-container" aria-hidden="true">
  <!-- Blue glowing lines -->
  <div class="fiber-line"></div>
  <div class="fiber-line"></div>
  <!-- Pink/Magenta glowing lines -->
  <div class="fiber-line"></div>
  <div class="fiber-line"></div>
  <!-- ...add as many lines as defined in your CSS -->
</div>
```

To apply the styles, simply link the provided `style.css` in your document or copy its contents into your project's stylesheet. The structure relies on `nth-child` selectors to randomize the animation duration, delay, position, and color.

## 🌟 Why it fits EaseMotion CSS

EaseMotion CSS focuses on ready-to-use, animation-first UI components that can be implemented cleanly and efficiently. The Fiber Optic Glow Lines component provides a highly requested futuristic background pattern that developers typically rely on heavy canvas or WebGL libraries (like Three.js) to achieve. By offering a lightweight, pure CSS alternative, it aligns perfectly with the library's philosophy of delivering stunning visuals with minimal overhead.
