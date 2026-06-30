# Curved Roadmap Infographic (Pure CSS Arrows)

1. **What does this do?** It renders a responsive, animated S-shaped timeline using overlapping pure CSS geometric shapes and `::after` triangles to create an embedded arrow ribbon, entirely without SVGs or JavaScript.

2. **How is it used?** Include the stylesheet and place the cascading `.overlay-step` ribbon structure inside a `.roadmap-container` alongside the `.roadmap-step` articles.

```html
<link rel="stylesheet" href="./style.css">
<div class="roadmap-page">
  <header class="roadmap-heading">...</header>     # Placeholder for keeping the infographic chart heading

  <div class="roadmap-container" role="list">      
    
    <!---------Roadmap Ribbon design creation-------------->
    <div class="css-roadmap-ribbon" aria-hidden="true">
      <div class="overlay-step step-1">
        <div class="rm-seg rm-flat flat-1 has-arrow"></div>
      </div>
      <div class="overlay-step step-2">
        <div class="rm-seg rm-q1 curve-1a"></div>
        <div class="rm-seg rm-q2 curve-1b"></div>
        <div class="rm-seg rm-flat flat-2 has-arrow"></div>
      </div>
      <div class="overlay-step step-3">
        <div class="rm-seg rm-q3 curve-2a"></div>
        <div class="rm-seg rm-q4 curve-2b"></div>
        <div class="rm-seg rm-flat flat-3 has-arrow"></div>
      </div>
      <div class="overlay-step step-4">
        <div class="rm-seg rm-q1 curve-3a"></div>
        <div class="rm-seg rm-q2 curve-3b"></div>
        <div class="rm-seg rm-flat flat-4 has-arrow"></div>
      </div>
      <div class="overlay-step step-5">
        <div class="rm-seg rm-q3 curve-4a"></div>
        <div class="rm-seg rm-q4 curve-4b"></div>
        <div class="rm-seg rm-flat flat-5 has-arrow"></div>
      </div>'
    <!------------------------------------------------------>

    </div>
    <!----------------Roadmap steps and content-------------->
    <article class="roadmap-step" role="listitem" tabindex="0">
      <div class="roadmap-icon-wrap" aria-hidden="true">💡</div>
      <div class="roadmap-label">
        <p class="roadmap-step-num">Step 01</p>
        <p class="roadmap-step-title">Programming Fundamentals</p>
        <p class="roadmap-step-desc">Variables, loops, functions and problem‑solving basics.</p>
      </div>
      <div class="roadmap-tooltip" role="tooltip">Master the core concepts</div>
    </article>
    .
    .
    .
    .
    .(continue the same container to the no. of steps you want)
  </div>
  
  <footer class="roadmap-footer" aria-hidden="true">      # Placeholder for color indexing and footer text
    <div class="roadmap-footer-dots">...</div>
    <div class="roadmap-footer-text">...</div>
  </footer>

</div>
```
## Ribbon Transition Geometry

The S-shaped ribbon is constructed by combining straight horizontal segments and circular border-radius quadrant arcs to transition the flow between the top level (Y-center = 120px) and bottom level (Y-center = 260px).

### Horizontal Sections
- `.rm-flat`: flat paths where milestone icons sit.
- `.has-arrow`: appends an overlapping triangle head (`::after`) to direct flow.

### Curve Quadrants
- `.rm-q1` (Top-Right bend): curves upward and rightward using top and right borders.
- `.rm-q2` (Bottom-Left bend): curves downward and flattens rightward using bottom and left borders.
- `.rm-q3` (Bottom-Right bend): curves downward and rightward using bottom and right borders.
- `.rm-q4` (Top-Left bend): curves upward and flattens rightward using top and left borders.

### Path Transition Flow
1. **Step 1 → Step 2 (Downward S-curve):** `.curve-1a` (`.rm-q1`) curves upward/rightward, then `.curve-1b` (`.rm-q2`) sweeps downward/rightward to reach the bottom level.
2. **Step 2 → Step 3 (Upward S-curve):** `.curve-2a` (`.rm-q3`) sweeps downward/rightward, then `.curve-2b` (`.rm-q4`) curves upward/rightward to return to the top level.
3. **Step 3 → Step 4 (Downward S-curve):** repeats the downward transition using `.curve-3a` (`.rm-q1`) and `.curve-3b` (`.rm-q2`).
4. **Step 4 → Step 5 (Upward S-curve):** repeats the upward transition using `.curve-4a` (`.rm-q3`) and `.curve-4b` (`.rm-q4`).

### Why it is useful
It perfectly embodies EaseMotion CSS's animation-first and zero-dependency philosophy. Instead of relying on rigid SVGs, build steps, or JavaScript-heavy timeline libraries, it recreates a complex, vector-style infographic using native HTML/CSS (border-radius and z-index cascading). It is a highly performant, zero-config layout that naturally handles responsive mobile stacking and respects accessibility (prefers-reduced-motion), ensuring developers can just copy, paste, and ship.