# MacOS Liquid Hover Dock

A beautiful, hyper-interactive bottom navigation dock that mimics the authentic MacOS magnification effect. As the cursor moves over the dock, the icons dynamically swell and scale along a smooth bell-curve, creating a fluid, magnetic "liquid" feel.

## Visual Design

The component uses an ultra-premium **MacOS Sonoma Dark Mode** aesthetic:
- A beautifully frosted glass dock container with an authentic 1px white top border for separation.
- Vibrant, highly polished App-style squircle icons.
- A static, deep space-blue mesh gradient background to showcase the frosted glass reflections.

## Files Included

1. `demo.html`: The structural layout containing the glassmorphic dock and SVG icons, including a single dynamically moving tooltip.
2. `style.css`: The styling that handles the deep frosted glass (`backdrop-filter`) and the critical CSS transitions. It also includes mobile-responsive media queries.
3. `script.js`: A lightweight Javascript engine that tracks the cursor and injects precise `width`, `height`, and `margin` values into each icon.

## How it works

Unlike pure CSS `:hover` states which are rigid and binary, this component uses Javascript to calculate the absolute proximity of the mouse to the center of each icon. 

If the mouse is within a specific radius, it applies a scale multiplier based on a **cosine interpolation** (a perfect bell curve). This means icons directly under the mouse scale up to `1.6x` their size, while adjacent icons scale down proportionally, creating a continuous wave of magnification.

Because the Javascript updates the exact pixel `width` and `height` of the icons (rather than `transform: scale`), the browser's layout engine correctly reflows the parent flex container. As the icons grow, the entire glass dock seamlessly breathes and expands in height and width to frame them perfectly.

We dynamically disable CSS transitions *while* the mouse is tracking to eliminate all lag, and re-enable them the moment the mouse leaves to provide a silky smooth decay effect. 

## Responsive Design

The Javascript engine and CSS automatically detect the user's screen width. On screens under `600px`, the base icon size, magnification radius, and dock padding are all intelligently scaled down so the dock remains functional and beautiful on mobile touch devices.

## Usage

Simply include the HTML structure at the bottom of your `body`, link the `style.css` in your head, and include the `script.js` before your closing `</body>` tag.

```html
<div class="macos-dock-wrapper ease-fade-in ease-slide-up">
    <!-- Single Dynamic Tooltip -->
    <div class="dock-tooltip" id="dock-tooltip">Tooltip</div>

    <div class="macos-dock-container" id="dock">
        <!-- Add your .dock-item app buttons here -->
    </div>
</div>
```

## Why it fits EaseMotion CSS

EaseMotion is about making the web feel alive. While utility classes handle entrance animations (`ease-fade-in`), some premium interactions require a tiny bit of math to feel truly native. This component proves how EaseMotion's aesthetic philosophy can be pushed to the absolute limit.
