# CSS Constellation Drawing

A pure CSS effect where stars connect with lines to form a constellation (like Cassiopeia) sequentially when hovered.

## What does this do?
It creates an interactive starfield where hovering over the space sequentially draws glowing lines connecting a specific set of stars to form a constellation pattern.

## How is it used?
```html
<div class="constellation-wrapper">
  <div class="constellation" aria-label="Constellation Drawing" role="img">
    <div class="star star-1"></div>
    <div class="star star-2"></div>
    <div class="star star-3"></div>
    <div class="star star-4"></div>
    <div class="star star-5"></div>
    
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
    <div class="line line-4"></div>
  </div>
</div>
```

## Why is it useful?
It provides a beautiful, JavaScript-free interactive background element or visual feature using only CSS transforms, transitions, and delays. It adds a magical, dynamic feel to cosmic or night-themed interfaces.
