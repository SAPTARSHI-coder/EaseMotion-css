# MacOS Liquid Hover Dock

A beautiful, hyper-interactive bottom navigation dock that mimics the authentic MacOS magnification effect. As the cursor moves over the dock, the icons dynamically swell and scale along a smooth bell-curve, creating a fluid, magnetic "liquid" feel.

## Files Included

1. `demo.html`: The structural layout containing the glassmorphic dock and SVG icons.
2. `style.css`: The styling that handles the deep frosted glass (`backdrop-filter`) and the critical CSS transitions that make the JS mathematical scaling feel like liquid.
3. `script.js`: A lightweight Javascript engine that calculates the cursor's exact distance from each icon and dynamically injects `width`, `height`, and `margin` to create the magnetic swelling effect.

## How it works

Unlike pure CSS `:hover` states which are rigid and binary, this component uses Javascript to calculate the proximity of the mouse to the center of each icon. 

If the mouse is within a 150px radius, it applies a scale multiplier based on a cosine interpolation (a bell curve). This means icons directly under the mouse are at 100% scale, while icons slightly to the side are at 60% scale, creating a continuous wave of magnification.

The `style.css` file uses `transition: width 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)` to smooth out the Javascript's frame-by-frame updates, ensuring the animation looks completely flawless and fluid on any refresh rate.

## Usage

Simply include the HTML structure at the bottom of your `body`, link the `style.css` in your head, and include the `script.js` before your closing `</body>` tag.

```html
<div class="macos-dock-wrapper ease-fade-in ease-slide-up">
    <div class="macos-dock-container" id="dock">
        <!-- Add your .dock-item buttons here -->
    </div>
</div>
```

## Why it fits EaseMotion CSS

EaseMotion is about making the web feel alive. While utility classes handle entrance animations (`ease-fade-in`), some premium interactions require a tiny bit of math to feel truly native. This component proves how EaseMotion's aesthetic philosophy can be pushed to the absolute limit.
