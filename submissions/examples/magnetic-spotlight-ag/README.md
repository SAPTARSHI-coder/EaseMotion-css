# CSS Magnetic Spotlight Hover Animation

1. **What does this do?** Creates a pure CSS spotlight hover effect that glides a radial glow across an interactive card in response to the cursor position.
2. **How is it used?** Add the `.spotlight-card-wrapper` container with its 9 `.spotlight-zone` children and wrap the focusable link `.spotlight-card` inside.
3. **Why is it useful?** It provides sleek, localized lighting feedback on cards using hardware-accelerated animations with zero JavaScript dependencies.

---

## Technical Documentation

### 1. What the Magnetic Spotlight Effect Demonstrates
It shows how relative mouse coordinate tracking can be simulated in pure CSS by partitioning the card interface into a grid of hover zones that shift an inner gradient background.

### 2. How the Radial Gradient Creates the Spotlight
The `.spotlight-glow` element uses radial gradients:
```css
background: 
  radial-gradient(circle, var(--glow-core-color) 0%, rgba(255, 255, 255, 0) 45%),
  radial-gradient(circle, var(--glow-color) 0%, rgba(99, 102, 241, 0) 70%);
```
This overlays a bright white focal highlight on top of a soft purple glow.

### 3. How Pseudo-Elements are Used
In this structure, the glow is placed on a dedicated absolute child element rather than a background pseudo-element (`::after`/`::before`). This keeps the stylesheet clean and prevents specificity collision with standard card backgrounds.

### 4. How Hover and Focus States Trigger the Effect
- **Hover**: As the cursor moves across the card, it triggers the relative `.spotlight-zone:hover` grid triggers. These zones target the sibling card and transition the glow coordinates (`top`, `left`) while increasing the glow opacity.
- **Focus**: When keyboard focused, `.spotlight-card:focus-visible` centers the spotlight (`top: 50%; left: 50%;`) and renders it at maximum visibility.

### 5. How the Scale/Depth Effect Works
On hover or focus, the card scales up (`scale(1.03)`) and translates upward (`translateY(-5px)`) while increasing the card drop shadow blur, creating a depth elevation parallax feel.

### 6. Customizing Spotlight Intensity
Adjust the variables inside `style.css`:
```css
:root {
  --glow-color: rgba(99, 102, 241, 0.22); /* Large soft glow intensity */
  --glow-core-color: rgba(255, 255, 255, 0.12); /* Center highlight intensity */
  --glow-radius: 220px; /* Radius of the spotlight glow */
}
```

### 7. Customizing Transition Duration
To speed up or slow down the spotlight tracking speed, adjust the transition timing variable:
```css
:root {
  --glow-duration: 0.45s; /* Gliding tracking duration */
}
```

### 8. Reduced-Motion Handling
If a user prefers reduced motion, `@media (prefers-reduced-motion: reduce)` disables the hover coordinate grid, removes translation/scale transformations, and hides the spotlight glow element completely, showing a static dark card.

### 9. Browser Limitations of the CSS-Only Approach
Because CSS-only tracking uses a discrete 3x3 grid rather than exact mouse pixel coordinates:
- The spotlight tracks cursor movements in 9 discrete zones.
- A transition animation is added on `top` and `left` coordinates to smooth out the movement, creating a convincing glide effect that approximates pixel-perfect mouse tracking.
