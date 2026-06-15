# 3D Coverflow Carousel Component

## What does this do?

This is a premium, hardware-accelerated 3D carousel component where the active card is centered and fully visible, while adjacent cards are scaled down, shifted in Z-space, and rotated dynamically in 3D perspective space (utilizing `transform-style: preserve-3d` and `rotateY`).

## How is it used?

1. Add the CSS classes to your HTML structure:

```html
<div class="ease-coverflow">
  <div class="ease-coverflow-track">
    <!-- Far Left Card -->
    <div class="ease-coverflow-card ease-prev-2">
      <div class="ease-coverflow-card-content">
        <div class="ease-coverflow-card-image">
          <img src="card1.jpg" alt="Item 1" />
        </div>
        <div class="ease-coverflow-card-body">
          <h3>Project Alpha</h3>
          <p>Description goes here...</p>
        </div>
      </div>
    </div>

    <!-- Immediate Left Card -->
    <div class="ease-coverflow-card ease-prev-1">
      <!-- Card Content -->
    </div>

    <!-- Centered Active Card -->
    <div class="ease-coverflow-card ease-active">
      <!-- Card Content -->
    </div>

    <!-- Immediate Right Card -->
    <div class="ease-coverflow-card ease-next-1">
      <!-- Card Content -->
    </div>

    <!-- Far Right Card -->
    <div class="ease-coverflow-card ease-next-2">
      <!-- Card Content -->
    </div>
  </div>
</div>
```

2. Link the stylesheet to your page:

```html
<link rel="stylesheet" href="style.css" />
```

3. Enhance with optional, lightweight JavaScript to dynamically shift card indexes upon clicking or timer triggers:

```javascript
const cards = Array.from(document.querySelectorAll(".ease-coverflow-card"));
const n = cards.length;
let activeIndex = 2; // Index of the centered card

function updateCoverflow() {
  cards.forEach((card, index) => {
    card.classList.remove(
      "ease-active",
      "ease-prev-1",
      "ease-next-1",
      "ease-prev-2",
      "ease-next-2"
    );

    if (index === activeIndex) {
      card.classList.add("ease-active");
    } else if (index === (activeIndex - 1 + n) % n) {
      card.classList.add("ease-prev-1");
    } else if (index === (activeIndex + 1) % n) {
      card.classList.add("ease-next-1");
    } else if (index === (activeIndex - 2 + n) % n) {
      card.classList.add("ease-prev-2");
    } else if (index === (activeIndex + 2) % n) {
      card.classList.add("ease-next-2");
    }
  });
}
```

## Why is it useful?

Standard flat carousels are generic and common. This premium 3D Coverflow carousel offers a high-end, immersive spatial effect out-of-the-box. It fits EaseMotion CSS's mission of providing "wow-factor" visual assets using simple, readable, and highly customizable CSS custom properties. It is designed for showcases, portfolios, key features highlights, and team members displays.

## Tech Stack

- HTML
- CSS (custom properties, 3D transforms)
- JavaScript (lightweight enhancement helper)

## Customization

You can easily customize the spacing, depth, angles, and sizing by overriding these CSS custom properties in your `:root` or container class:

- `--ease-coverflow-shift-1`: Horizontal shift for adjacent cards (default: `180px`)
- `--ease-coverflow-shift-2`: Horizontal shift for outer cards (default: `320px`)
- `--ease-coverflow-depth-1`: Z-depth for adjacent cards (default: `-120px`)
- `--ease-coverflow-depth-2`: Z-depth for outer cards (default: `-220px`)
- `--ease-coverflow-rotate-1`: Y-axis rotation for adjacent cards (default: `45deg`)
- `--ease-coverflow-rotate-2`: Y-axis rotation for outer cards (default: `55deg`)
- `--ease-coverflow-scale-1`: Sizing scale for adjacent cards (default: `0.85`)
- `--ease-coverflow-scale-2`: Sizing scale for outer cards (default: `0.7`)

## Preview

Open `demo.html` directly in your browser to see the effect in action.

## Contribution Notes

- Class naming was handled by the contributor (prefixed with `ease-`)
- Maintainer will review and standardize before merging
