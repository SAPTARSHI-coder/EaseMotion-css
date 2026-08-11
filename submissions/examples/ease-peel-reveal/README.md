# Pure CSS Peel Reveal

A highly requested hover effect for portfolios or project cards where a solid color block appears to physically "peel back" from the top right corner like a sticker, revealing an image or video underneath.

### Usage
```html
<div class="ease-peel-container">
    <!-- The underlying content -->
    <img src="project.jpg" class="ease-peel-image" alt="Project">
    
    <!-- The solid cover -->
    <div class="ease-peel-cover">
        <h3>Hover to Reveal</h3>
    </div>
    
    <!-- The shadow flap -->
    <div class="ease-peel-flap"></div>
</div>
```

### Why is it useful?
Creating "folding" or "peeling" animations usually prompts developers to reach for complex JavaScript Canvas animations or WebGL libraries to handle 3D mesh distortion.

This component implements a stunning optical illusion natively in CSS. By using `clip-path: polygon()`, we can draw custom shapes over our content. On hover, we transition the coordinates of the polygon's points, creating a flawless visual illusion of the top-right corner retracting. To sell the physical realism, we overlay a second darker polygon (`.ease-peel-flap`) that scales perfectly inversely to simulate the underside of the peeling paper casting a shadow.
