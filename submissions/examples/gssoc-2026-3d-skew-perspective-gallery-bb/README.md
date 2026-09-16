# 3D Skew Perspective Gallery (GSSoC 2026)

## 1. What does this do?
The **3D Skew Perspective Gallery** introduces an isometric 3D gallery layout featuring multi-axis skew transforms (`rotateX(15deg) rotateY(-15deg) skewY(2deg)`), interactive elevation un-skewing on hover, glass light reflection overlays, and dynamic elevation depth shadows.

## 2. How is it used?
Link the stylesheet in your HTML document:
```html
<link rel="stylesheet" href="style.css">
```
Structure your markup using the `.skew-grid` and `.skew-card` classes:
```html
<div class="skew-grid">
  <article class="skew-card card-1">
    <div class="card-glass"></div>
    <div class="card-body">...</div>
  </article>
</div>
```

## 3. Why is it useful?
- **Zero WebGL Overhead**: Achieves isometric 3D card deck aesthetics using CSS 3D matrix transforms.
- **Micro-Interaction Feedback**: Smoothly un-skews and lifts towards the viewer when hovered, creating high engagement.
- **Hardware-Accelerated**: Runs strictly on GPU compositor layers for crisp 60 FPS transitions.
