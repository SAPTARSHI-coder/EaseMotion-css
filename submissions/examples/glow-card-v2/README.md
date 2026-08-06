# Glow Card V2

## What does this do?
A premium glassmorphic card container featuring a dual-layer, performance-optimized dynamic border-glow transition effect that activates on hover.

## How is it used?
Add the container, ambient background, border wrapper, and body classes to structure your layout:

```html
<div class="glow-card-container">
  <!-- Ambient glow background layer -->
  <div class="glow-card-ambient"></div>
  
  <!-- Outer border gradient wrapper -->
  <div class="glow-card-border">
    <!-- Glassmorphic card body -->
    <div class="glow-card-body">
      <!-- Your card content here -->
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a state-of-the-art interactive UI card layout that mimics OS-level design elements. By isolating the ambient glow from the glass container, it remains highly performant (using only GPU-accelerated opacity, transforms, and filters) and cross-browser compatible while retaining visual fidelity.

## Tech Stack
- HTML5
- CSS3 (no JavaScript, no Tailwind, fully pure CSS)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Class naming: `glow-card-container`, `glow-card-ambient`, `glow-card-border`, `glow-card-body`
- The maintainer will prefix and optimize these classes for standard EaseMotion release (`ease-glow-card-...`)
