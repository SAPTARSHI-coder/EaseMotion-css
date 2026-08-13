# Liquid Morph Hover Animation

1. **What does this do?** Creates a smooth, organic liquid shape morphing hover effect on buttons or card backgrounds using only HTML and CSS.
2. **How is it used?** Add the `.liquid-btn` class to a button element, or wrap background blobs `.liquid-card-blob` / `.liquid-card-blob-2` inside a `.liquid-card` container.
3. **Why is it useful?** It provides a highly premium, tactile feedback feeling without relying on heavy external WebGL or canvas-based script libraries.

---

## Technical Documentation

### How the Animation Works
The effect uses CSS transition properties to scale and translate the component on hover, while triggering an infinite `@keyframes` loop that morphs the shape of the component or background elements. When the pointer leaves, the element transitions back to its original border-radius and position.

### CSS Properties Creating the Liquid Effect
- **`border-radius` (Eight-Value Syntax)**: Defining different horizontal and vertical radii (e.g. `30% 70% 70% 30% / 30% 30% 70% 70%`) creates asymmetric organic curves. By changing these values inside `@keyframes`, the shape deforms dynamically.
- **`filter: blur()`**: Combined with high contrast parent containers, blur filters blend layered shapes together to make them appear like merging fluid.
- **`transform`**: Slight scaling and vertical translation adds weight to the hover motion.

### Customization Options

You can adjust the liquid parameters using CSS custom properties:

```css
:root {
  --liquid-duration: 4s;            /* Core animation speed */
  --liquid-duration-secondary: 6s;  /* Layer 2 speed to offset cycle phase */
  --liquid-scale: 1.06;             /* Scale factor on hover */
  --liquid-translate-y: -6px;       /* Translation distance on hover */
}
```

### Customizing the Amount of Deformation
To increase or decrease the liquid deformation wobblying, adjust the difference between the low and high percentage values inside the `@keyframes` inside `style.css`.
- **More wobbly (extreme liquid)**: Use wider gaps like `15% 85% 80% 20%`
- **More subtle (tame liquid)**: Use narrow gaps near circle bounds like `45% 55% 55% 45%`

### Reusing the Animation on Another Component
To apply the liquid shape animation to any custom component (e.g., an image container), apply the keyframes directly:

```css
.my-custom-component:hover {
  animation: liquid-morph-primary 4s infinite alternate ease-in-out;
}
```
