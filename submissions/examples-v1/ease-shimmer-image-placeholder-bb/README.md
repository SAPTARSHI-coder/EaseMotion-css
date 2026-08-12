# Shimmer Image Placeholder

A high-performance image loading skeletal placeholder featuring a diagonal shimmer sweep and smooth scale-up image transition.

## What does this do?
This component renders a skeleton loader with a glowing linear-gradient shimmer sweep before transitioning into the fully loaded image with a smooth zoom-in fade.

## How is it used?
1. Reference `style.css` in your HTML file.
2. Structure your markup:
   ```html
   <div class="skeleton-image-wrapper">
     <div class="shimmer-sweep"></div>
     <img class="loaded-image" src="..." alt="..." />
   </div>
   ```
3. Use keyframe animation classes to control shimmer angles and transition speeds.

## Why is it useful?
Using clean CSS skeleton animations instead of default loading indicators drastically improves perceived performance and keeps users engaged during asynchronous image loading.
