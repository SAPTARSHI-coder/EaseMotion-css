# Parallax Feature Card

A premium, dark-themed 3D parallax feature card showcase built using a pure CSS mouse-coordinate simulation grid and staggered translateZ layers.

## 1. What does this do?
This component creates a grid of 3D feature cards that tilt dynamically in response to mouse hovers, causing background grids, midground holograms, and foreground descriptions to separate at different depth levels.

## 2. How is it used?

Insert the 3x3 invisible hover grid zones at the top of your card body, and layer your items inside the card inner container:
```html
<article class="parallax-card card-cyan">
  <!-- 3x3 Sibling Hover Zones Matrix -->
  <div class="hover-zone top-left"></div>
  <div class="hover-zone top-center"></div>
  <!-- ... remaining hover zones ... -->
  <div class="hover-zone bottom-right"></div>

  <!-- Card Body -->
  <div class="card-inner">
    <!-- Background Layer (Z = 0px) -->
    <div class="card-layer layer-bg">
      <div class="tech-grid-pattern"></div>
    </div>
    
    <!-- Midground Layer (Z = 50px) -->
    <div class="card-layer layer-mid">
      <span class="hologram-emoji">🧠</span>
    </div>
    
    <!-- Foreground Layer (Z = 85px) -->
    <div class="card-layer layer-fg">
      <h2>Quantum Core</h2>
    </div>
  </div>
</article>
```

## 3. Why is it useful?
3D tilt parallax cards typically require JavaScript libraries to calculate coordinate ratios. 

This component fits EaseMotion's philosophy by:
- **No-JS 3D Hover Mapping Matrix:** Employs a 3x3 invisible grid of absolute zones that map cursor placements to specific `rotateX` and `rotateY` angles using general sibling combinators (`~`), achieving smooth tilts without script calculations.
- **Layer Z-Index Transformations:** Uses `transform-style: preserve-3d` and individual layer `translateZ` specifications to separate visual planes, creating a realistic depth.
- **Accessible Design:** Features high contrast colors, screen-reader compatibility (focus configurations), and motion reduction bindings for users with vestibular sensitivities.

## 4. Layer Configuration API

To adjust layer projection depths inside parent stylesheet files, customize these parameters:

- `--accent-cyan`: Cyan theme glow color.
- `--accent-purple`: Purple theme glow color.
- `--accent-orange`: Orange theme glow color.

---
*Created as a submission for GSSOC-26  under submissions/examples/parallax-feature-card-glow/*
