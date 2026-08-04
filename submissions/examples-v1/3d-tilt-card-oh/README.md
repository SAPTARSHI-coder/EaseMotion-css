# Component: 3D Tilt Card

This submission implements the 3D Tilt Card for GSSoC issue **#42001**.

## Description

Interactive 3D tilt card with mouse tracking and glare effect.

## Features

- **3D Tilt Effect**: Card tilts based on mouse position
- **Glare Effect**: Light reflection on hover
- **Perspective Transform**: 3D depth with `preserve-3d`
- **Mouse Tracking**: JavaScript tracks cursor position
- **Multiple Sizes**: Large and small card variants
- **Smooth Transitions**: CSS transitions for smooth animation

## Usage

```html
<div class="tilt-card-container">
  <div class="tilt-card">
    <div class="card-glare"></div>
    <div class="card-content">
      <div class="card-image">
        <img src="image.jpg" alt="Product">
      </div>
      <div class="card-details">
        <h2>Product Name</h2>
        <p>Description</p>
        <span>$19.99</span>
      </div>
    </div>
  </div>
</div>
```

## JavaScript

```javascript
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
});
```

## CSS Structure

```css
.tilt-card-container {
  perspective: 1000px;
}

.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
}

.card-content {
  transform: translateZ(30px);
}

.card-glare {
  background: linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%);
}
```

## Small Variant

```html
<div class="tilt-card-container small">
  <div class="tilt-card">...</div>
</div>
```

## Acceptance Criteria

- ✅ 3D tilt effect on mouse move
- ✅ Glare reflection effect
- ✅ Smooth transitions
- ✅ Multiple card sizes
- ✅ Product display layout
- ✅ README.md included
