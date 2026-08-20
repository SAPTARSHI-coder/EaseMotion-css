# Interactive 3D Flip Card Profile

## What does this do?
Creates an interactive 3D flip card component that reveals a back face when hovered. Uses CSS `preserve-3d`, `perspective`, and `rotateY` transforms to create a highly realistic 3D flipping motion.

## How is it used?
```html
<div class="ease-flip-card">
    <div class="ease-flip-card-inner">
        <div class="ease-flip-card-front">
            <!-- Front Content (e.g., Profile Picture and Name) -->
        </div>
        <div class="ease-flip-card-back">
            <!-- Back Content (e.g., Bio and Contact Info) -->
        </div>
    </div>
</div>
```

## Why does it fit EaseMotion CSS?
It provides a high-quality, pure CSS 3D transformation that feels incredibly fluid. It aligns perfectly with the goal of creating complex, interactive micro-animations (like a profile card flip) without resorting to JavaScript matrix calculations.

## Tech Stack
- HTML
- CSS (No JavaScript)
