# Table of Contents Auto-Highlight (ease-toc-auto-highlight)

### 1. What does this do?
This is a responsive, auto-highlighting Table of Contents (TOC) component where scrolling past a section automatically highlights its title, transitioning a vertical brand indicator indicator smoothly down the sidebar tracker.

### 2. How is it used?
Create a list with a `.toc-indicator` placeholder next to list items matching target heading anchors:
```html
<div class="toc-list-container">
  <div class="toc-indicator"></div>
  <ul class="toc-list">
    <li class="toc-item"><a href="#intro" class="toc-link active">Intro</a></li>
    <li class="toc-item"><a href="#setup" class="toc-link">Setup</a></li>
  </ul>
</div>
```
Observe headers/sections using `IntersectionObserver` in JavaScript to add `.active` classes to links and update the indicator position.

### 3. Why is it useful?
It fits the animation-first design language by adding smooth physical motion to document indexing, using a sliding border track to clearly communicate a user's current reading context in long documentation layouts.
