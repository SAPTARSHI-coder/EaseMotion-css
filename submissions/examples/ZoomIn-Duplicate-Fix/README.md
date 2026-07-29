## Zoom-In Duplicate Class Fix Demo

**What does this do?**
Demonstrates the correct `.ease-zoom-in` entrance animation behavior and 
exposes a duplicate class definition bug in `core/animations.css`.

**How is it used?**
<div class="ease-zoom-in">I animate in correctly</div>

**Why is it useful?**
`core/animations.css` currently defines `.ease-zoom-in` twice — referencing 
two different `@keyframes` blocks with different behavior. The second definition 
silently overrides the first via CSS cascade. This demo shows what the correct 
behavior should look like (subtle fade+scale from `opacity:0, scale(0.85)`) and 
makes the case for removing the dead `@keyframes ease-zoom-in` block and the 
duplicate `.ease-zoom-in` class definition at line ~452.

Related issue: #872