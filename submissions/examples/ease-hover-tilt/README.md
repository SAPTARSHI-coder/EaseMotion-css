# Hover Tilt (3D Tilt Effect)

**Category:** Animation — 3D Interaction  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-hover-tilt/`

---

## 1. What does this do?

The **Hover Tilt** effect makes cards or structural content boxes pivot dynamically in three-dimensional space when a user moves their cursor over the element. It creates a physical, weighted sense of depth entirely in HTML and CSS with absolutely zero JavaScript, zero heavy libraries, and zero runtime dependencies.

### Core Mechanisms:
- **9-Zone Interactive Grid:** Unlike standard 4-quadrant tilt interactions, this system uses a 3x3 overlay grid of 9 invisible tracking zones. Each zone maps to a highly specific, balanced combination of `rotateX()` and `rotateY()` rotations plus subtle scale increases. This creates a tactile, directional transition as the cursor glides across corners, edges, and the center.
- **Layered 3D Parallax Depth:** By leveraging `perspective` on the parent container and setting `transform-style: preserve-3d` on the card face, internal elements (badges, images, profile cards, avatars, and buttons) float on distinct dimensional planes. Using progressive `translateZ()` values, text and UI details appear to hover several pixels directly in front of the card.
- **Reactive Lighting Shimmer:** An integrated radial highlight overlay (`.ease-tilt-shimmer`) shifts its gradient center to track the cursor's coordinate sector, mimicking a physical light source catching the surface sheen as the card angles toward the viewer.
- **Spring-like Easing & Recovery:** Releasing the hover state invokes a custom cubic-bezier spring curve `cubic-bezier(0.175, 0.885, 0.32, 1.12)` that makes the card snap back into position with a realistic, high-fidelity soft rebound.

---

## 2. How is it used?

To integrate this contribution into your codebase, use the following minimal structural blueprint:

### Minimal HTML Structure

```html
<div class="ease-tilt-wrapper">
  <!-- 9 Invisible Sibling Tracking Overlays -->
  <div class="ease-tilt-zone ease-tilt-zone--tl" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--tc" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--tr" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--ml" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--mc" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--mr" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--bl" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--bc" aria-hidden="true"></div>
  <div class="ease-tilt-zone ease-tilt-zone--br" aria-hidden="true"></div>

  <!-- Transformed Card Face Shell -->
  <div class="ease-tilt-card">
    
    <!-- Shimmer reflection layer -->
    <div class="ease-tilt-shimmer" aria-hidden="true"></div>

    <!-- 3D Interior Layer Wrapper -->
    <div class="ease-tilt-card-inner">
      <div class="ease-card-3d-bg"></div>
      
      <!-- Elevated badge (highest translation) -->
      <span class="ease-card-3d-badge">Special Feature</span>
      
      <!-- Mid-elevated content body (medium translation) -->
      <div class="ease-card-3d-body">
        <h3>Card Title</h3>
        <p>This details floats above the background plane.</p>
      </div>

      <!-- Raised Interactive button (z-index 20) -->
      <footer class="ease-card-3d-footer">
        <a href="#" class="ease-card-link-btn" role="button">Action Button</a>
      </footer>
    </div>
  </div>
</div>
```

### Essential Sibling Selectors

The mechanism works by mapping a hovered sibling overlay to its following visual card shell using the **general sibling combinator** (`~`):

```css
/* When the top-left overlay is hovered, tilt the card visual shell up and left */
.ease-tilt-zone--tl:hover ~ .ease-tilt-card {
  transform: rotateX(12deg) rotateY(-12deg) translateZ(8px);
}

/* When the center overlay is hovered, scale the card visual shell forward */
.ease-tilt-zone--mc:hover ~ .ease-tilt-card {
  transform: rotateX(0deg) rotateY(0deg) translateZ(15px) scale(1.03);
}
```

---

## 3. Why is it useful?

Adding 3D interactions to standard card systems elevates product catalogs, dashboards, and portfolio displays from flat pages into premium, tactile digital experiences.

### Key Advantages:

1. **Hardware-Accelerated 60+ FPS Performance:** 
   Traditional JavaScript-based tilt engines (like Vanilla-tilt or tilt.js) query pointer coordinates on every cursor movement, triggering expensive layout calculations and blocking main-thread resources. This CSS solution performs transforms strictly using GPU-composited properties (`transform`, `opacity`), guaranteeing fluid framerates even on low-spec hardware or high-refresh monitors.

2. **Zero Javascript Weight:**
   - **Performance:** 0 bytes of extra JS bundles to fetch, parse, and execute.
   - **Reliability:** Executes synchronously, even before scripts finish loading on sluggish mobile networks.
   - **Security:** Completely immune to cross-site scripting (XSS) issues or npm dependency audits.

3. **Built-in Touch Screen Safety:**
   On mobile/touch devices, persistent hover states are sticky and frustrating because tapping a card locks the tilt angle. The CSS design utilizes viewport width constraints and hover media queries `@media (max-width: 640px) or (hover: none)` to automatically disable tracking zones and gracefully flatten layouts, presenting a highly responsive, touch-friendly fallback card state.

4. **Engineered Accessibility (A11y):**
   - **Reduced Motion Support:** Listens to user system configurations via `@media (prefers-reduced-motion: reduce)`, instantly suppressing high-magnitude 3D rotations, spins, and floating translations.
   - **Clickable & Tabbable Interactive Elements:** Action links are elevated to `z-index: 20` using custom focus boundaries. This keeps them fully clickable and keyboard-focusable while preventing interactive flickering.
   - **Screen Reader Support:** Purely decorative tracking grids and shimmer layers are cleanly masked using `aria-hidden="true"`, ensuring screen readers skip raw grid structures.

---

## Customization Guide

All custom design parameters are exposed as standard CSS variables inside the stylesheets, facilitating quick visual overrides:

| Design Token | Role | Default Value |
|---|---|---|
| `--ease-spring-tilt` | Spring rebound bezier curve | `cubic-bezier(0.175, 0.885, 0.32, 1.12)` |
| `--ease-duration-tilt` | Smooth transformation duration | `0.45s` |
| `--ease-color-bg` | Page background canvas color | `#09090d` |

### Modifying Tilt Intensity

Adjust the rotation degrees inside the hover classes to fit your design's character:
* **Subtle/Professional (Recommended):** Set `rotateX/Y` values between `5deg` and `8deg`.
* **Playful/Extreme:** Set `rotateX/Y` values between `12deg` and `15deg`.
* **Vanishing Horizon:** Modify parent perspective context (e.g. `perspective: 800px` for aggressive depth, or `perspective: 1200px` for a flatter visual depth).
