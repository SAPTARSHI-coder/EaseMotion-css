# Responsive Modal Backdrop & Content Entrance Effects

### 1. What does this do?
Provides premium, coordinated animations for modal overlays and their content, featuring synchronized background blurring and high-end entrance effects like spring scaling and 3D unfolding.

### 2. How is it used?
Structure your modal with an overlay and a card, then toggle the `.active` class on the overlay:

```html
<div class="modal-overlay active">
  <div class="modal-card modal-scale-spring">
    <h2>Title</h2>
    <p>Content goes here.</p>
    <button>Close</button>
  </div>
</div>
```

**Entrance Variants:**
- `.modal-scale-spring`: Fluid elastic scaling effect.
- `.modal-unfold`: Sophisticated 3D unfolding animation.

### 3. Why is it useful?
It elevates standard UI modals into high-end interactive components by creating a "structural illusion of depth." By synchronizing the backdrop filter with the content entrance, it provides a more immersive and professional experience while remaining fully responsive and dependency-free.
