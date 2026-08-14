# Skew Parallax Hero Header Showcase

A premium landing page hero header layout featuring dynamic background skewing, staggered slide-in typography, and interactive parallax translation transitions.

## What does this do?
This demo creates a high-fidelity header layout with a skewed geometric split-screen layout. As the user hovers over sections or interacts, individual layers translate and skew along different axes, producing a responsive parallax depth effect.

## How is it used?
1. Link `style.css` inside your HTML document.
2. Setup the hero section markup:
   ```html
   <header class="hero-header">
     <div class="skew-bg"></div>
     <div class="hero-content">...</div>
   </header>
   ```
3. Use custom CSS transition rules for stagger delays.

## Why is it useful?
Using clean CSS keyframes and 3D transforms (`skewY()`, `translate3d()`) for header entries is highly performant and eliminates the need for expensive scroll-listener JS libraries.
