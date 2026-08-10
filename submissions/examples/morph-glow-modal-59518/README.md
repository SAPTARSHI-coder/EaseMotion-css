# Morph-Glow Modal

A pure CSS/HTML modal component with a dynamic, glowing, morphing border effect designed for modern SaaS showcase layouts.

## 🚀 Features
- **Pure CSS**: No JavaScript or external libraries required.
- **Dynamic Glow**: Uses CSS gradients and keyframe animations for a morphing aura.
- **`:target` Pseudo-class**: Functional modal state management entirely in CSS.
- **Accessible & Responsive**: Fully adaptable to mobile/desktop screens and respects `prefers-reduced-motion`.

## 📂 File Structure
- `demo.html` — The structural layout showcasing the modal and its states.
- `style.css` — Core styling, custom properties, and animations.

## 🛠️ Usage

### HTML Structure
Use standard anchor links referencing the modal ID to open/close it.
```html
<!-- Trigger -->
<a href="#morph-modal" class="em-btn primary-btn">Open Modal</a>

<!-- Modal Wrapper -->
<div id="morph-modal" class="em-modal-wrapper">
  <!-- Click outside to close -->
  <a href="#" class="em-modal-overlay"></a>
  
  <!-- Content -->
  <div class="em-modal-content">
    <a href="#" class="em-close-btn">&times;</a>
    <!-- Your content here -->
  </div>
</div>
```

### CSS Variables
Easily customize colors, glows, and transitions in `style.css`.
```css
:root {
  --primary-color: #6366f1;
  --glow-color-1: #6366f1;
  --glow-color-2: #ec4899;
  --glow-color-3: #8b5cf6;
  --overlay-bg: rgba(0, 0, 0, 0.7);
  --transition-normal: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## ✨ Animation Details
- **Entrance**: The modal scales up (`0.95` -> `1`) and translates upwards smoothly.
- **Morphing Glow**: Animated gradient pseudo-elements (`::before` and `::after`) create an infinite shifting border aura behind the modal when visible.
- **Icon Pulse**: The main icon includes a soft radial pulse keyframe animation.
