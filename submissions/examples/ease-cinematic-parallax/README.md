# Cinematic Depth-of-Field Parallax (`ease-cinematic-parallax`)

## 1. What does this do?
A premium, scroll-driven cinematic parallax effect that simulates a physical camera's Depth-of-Field (DoF) by dynamically pulling focus across foreground, midground, and background layers.

## 2. How is it used?
It utilizes the modern CSS `animation-timeline: scroll()` API. By binding standard `@keyframes` to the scroll position, we can smoothly interpolate both `translateY` for movement AND `filter: blur()` for focus. The foreground starts sharp and blurs out as you scroll, while the background starts heavily blurred and comes into crisp focus, mimicking a lens racking focus across focal planes.

## 3. Why is it useful?
Replicating AAA-grade cinematic focal pulls traditionally required heavy JavaScript `IntersectionObserver` scripts calculating element bounding boxes on every frame. This method executes the exact same mathematical physics flawlessly at 60fps on the GPU Compositor, requiring exactly 0 lines of JavaScript.
