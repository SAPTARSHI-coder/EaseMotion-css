# Parallax Tilt Card Effect

### 1. What does this do?
This component tilts cards in 3D perspective space following the user's cursor position and adds a dynamic glass shine reflection.

### 2. How is it used?
Apply the `.tilt-card` class to the outer wrapper and wrap the contents in a `.tilt-card-inner` container:

```html
<div class="tilt-card">
  <div class="tilt-card-inner">
    <div class="card-content">
      <h3>Title</h3>
      <p>Content</p>
    </div>
  </div>
</div>
```

**Variants:**
- `.tilt-card-strong`: Increases rotation angle for a more dramatic depth effect.
- `.tilt-card-shine`: Layer a dynamic glare overlay that follows the mouse shine coordinates.
- `.tilt-card-float`: Adds a gentle floating keyframe animation alongside the cursor tilt.
- `.tilt-reset`: Instantly snaps back flat without transition delay on mouse exit.

**Required Coordinate Tracking JavaScript (Vanilla):**
Apply the mouse tracking listener to update the CSS custom properties:

```javascript
document.querySelectorAll('.tilt-card').forEach(card => {
  const maxTilt = card.classList.contains('tilt-card-strong') ? 25 : 12;
  
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    
    card.style.setProperty('--tilt-x', `${-normY * maxTilt}deg`);
    card.style.setProperty('--tilt-y', `${normX * maxTilt}deg`);
    card.style.setProperty('--shine-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--shine-y', `${(y / rect.height) * 100}%`);
    card.style.setProperty('--shine-opacity', '1');
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--shine-opacity', '0');
  });
});
```

### 3. Why is it useful?
It introduces native 3D interactive transformations to EaseMotion CSS by offloading all transform projection, transition, and shine effects to the browser's CSS rendering engine. A single lightweight event listener is utilized only to bind mouse coordinates, rendering it highly performant, customizable, and accessible (with automatic prefers-reduced-motion overrides).
