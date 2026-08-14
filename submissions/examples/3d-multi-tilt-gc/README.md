# 3D Multi-Directional Card Tilt (Pure CSS)

Implementation of Issue #424: **3D Multi-Directional Card Tilt** using invisible hover quadrants and 3D transforms.

### 1. What does this do?
Creates a high-performance 3D tilting effect that reacts to mouse position without using JavaScript. It uses an invisible grid of hover zones to detect which part of the card is being hovered and applies corresponding 3D rotations.

### 2. How is it used?
Structure your HTML with a container holding invisible triggers and the card itself:

```html
<div class="tilt-container">
  <!-- Invisible triggers -->
  <div class="tilt-trigger trigger-tl"></div>
  <div class="tilt-trigger trigger-tr"></div>
  <div class="tilt-trigger trigger-bl"></div>
  <div class="tilt-trigger trigger-br"></div>

  <!-- The card -->
  <div class="tilt-card-inner">
    <div class="tilt-card-content">
      <h2>Your Content</h2>
    </div>
  </div>
</div>
```

### 3. Why is it useful?
It provides a premium, interactive feel to UI components like product cards or features lists while maintaining zero JavaScript overhead. It leverages browser-native 3D acceleration for smooth performance and follows EaseMotion CSS's philosophy of declarative, dependency-free motion.
