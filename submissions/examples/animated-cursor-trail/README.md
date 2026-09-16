# ease-cursor-trail

## Description

Adds a smooth glowing cursor trail that follows the user's mouse using requestAnimationFrame interpolation for fluid motion.

---

## Features

- Smooth cursor following
- Lightweight animation
- Pure JavaScript + CSS
- Responsive
- Easy customization

---

## Usage

```html
<div class="ease-cursor-trail"></div>
```

The included JavaScript continuously interpolates the trail position toward the current mouse coordinates.

---

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

---

## Customization

Trail size

```css
width:20px;
height:20px;
```

Glow color

```css
background:#22d3ee;
```

Lerp speed

```javascript
currentX += (mouseX-currentX)*0.15;
currentY += (mouseY-currentY)*0.15;
```

Lower values create a smoother lagging trail.

---

Level: Advanced