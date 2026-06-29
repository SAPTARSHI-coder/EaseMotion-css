# Magnetic Cursor-Tracking Cards

## What does this do?

This is a premium, cursor-interactive card component. When hovered, the card tilts dynamically in 3D perspective space following your mouse, triggers a metallic light reflection glare sheen that tracks the cursor, and pops out inner text/images in 3D parallax layers (utilizing `transform-style: preserve-3d` and `translateZ`).

## How is it used?

1. Add the CSS classes to your HTML structure. Any elements inside you want to float above the surface should be given `.ease-tilt-depth` along with `.ease-depth-low`, `.ease-depth-medium`, or `.ease-depth-high`:

```html
<div class="ease-tilt-container">
  <div class="ease-tilt-card">
    <!-- Sheen light overlay -->
    <div class="ease-tilt-glare"></div>

    <!-- Card Content -->
    <div class="ease-tilt-content">
      <!-- High Parallax Pop-out element -->
      <div class="ease-tilt-depth ease-depth-high">
        <img src="avatar.jpg" alt="Avatar" />
      </div>

      <!-- Medium Parallax Title -->
      <h3 class="ease-tilt-depth ease-depth-medium">Card Title</h3>

      <!-- Low Parallax Description -->
      <p class="ease-tilt-depth ease-depth-low">Description...</p>
    </div>
  </div>
</div>
```

2. Link the stylesheet to your page:

```html
<link rel="stylesheet" href="style.css" />
```

3. Attach mouse event listeners using a lightweight JavaScript helper to calculate positions and update styles:

```javascript
const cards = document.querySelectorAll(".ease-tilt-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    card.classList.add("ease-tilt-tracking");

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const centerX = width / 2;
    const centerY = height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    // Retrieve configuration variables
    const maxRotate = 15; // default 15deg
    const scale = 1.05; // default 1.05

    const rotateY = (deltaX / centerX) * maxRotate;
    const rotateX = -(deltaY / centerY) * maxRotate;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    card.style.setProperty("--glare-x", `${glareX}%`);
    card.style.setProperty("--glare-y", `${glareY}%`);
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("ease-tilt-tracking");
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.setProperty("--glare-x", "50%");
    card.style.setProperty("--glare-y", "50%");
  });
});
```

## Why is it useful?

Static cards are standard in layout designs. Adding 3D parallax cursor tracking makes user actions feel engaging and tactile. It uses CSS custom properties and hardware-accelerated transforms to ensure 60fps tracking without bloating the page. It is highly suitable for pricing cards, team bios, product features, and portfolio projects.

## Tech Stack

- HTML
- CSS (perspective, 3D transforms, custom properties)
- JavaScript (mousemove listener tracker)

## Customization

Override these properties in your `:root` or card container to customize the tilt details:

- `--ease-tilt-max`: Maximum rotation degrees on border limits (default: `15deg`).
- `--ease-tilt-scale`: Scale zoom factor of the card on hover (default: `1.05`).
- `--ease-tilt-perspective`: 3D viewport depth (default: `1000px`).

## Preview

Open `demo.html` directly in your browser to see the effect in action.

## Contribution Notes

- Class naming was handled by the contributor (prefixed with `ease-`)
- Maintainer will review and standardize before merging
