# Carousel Easing Transitions

This example demonstrates how to apply and compare different CSS animation timing functions (easing) to a sliding Carousel component. By adjusting the easing curve, you can drastically alter the "feel" and weight of your UI elements.

## ✨ Feature Overview

The provided `style.css` and `demo.html` files showcase six different ways to animate a carousel transition:

*   **`.ease-carousel-linear`**: Constant speed. No acceleration or deceleration.
*   **`.ease-carousel-ease`**: (Default) Starts slow, accelerates, and decelerates at the end.
*   **`.ease-carousel-in`**: Starts slow, accelerates, and abruptly stops.
*   **`.ease-carousel-out`**: Starts fast and smoothly decelerates to a stop. Usually the best choice for UI elements entering the screen or responding to user input.
*   **`.ease-carousel-in-out`**: Similar to `ease`, but with a more pronounced slow start and slow end.
*   **`.ease-carousel-custom`**: Utilizes a `cubic-bezier()` function to create a "snappy" bounce effect that slightly overshoots its target before settling.

## 🚀 Installation & Usage

1.  Include `style.css` in your project.
2.  Structure your carousel with a container, a track, and slides.
3.  Apply one of the `.ease-carousel-*` modifier classes to the container to set the timing function.

```html
<div class="carousel-container ease-carousel-out" data-slide="1">
    <div class="carousel-track">
        <div class="carousel-slide">Slide 1</div>
        <div class="carousel-slide">Slide 2</div>
    </div>
</div>
```

## 🛠️ Customization

You can easily define your own easing curves. Tools like [cubic-bezier.com](https://cubic-bezier.com/) can help you visualize and generate custom Bezier curves.

```css
.ease-carousel-my-custom-curve .carousel-track { 
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
}
```

To change the duration of the transition, adjust the `--duration` CSS variable in `:root`.

## ⚡ Performance Optimization

This implementation strictly animates the `transform` property (`translateX` via `translate3d`). It entirely avoids animating layout properties like `margin-left` or `left`, ensuring the browser can offload the animation to the GPU. This prevents layout thrashing and guarantees smooth 60fps performance on mobile devices.

## ♿ Accessibility (prefers-reduced-motion)

This submission inherently respects user accessibility settings. If a user has "Reduce Motion" enabled in their operating system, the CSS `@media (prefers-reduced-motion: reduce)` block disables the sliding transition entirely. The carousel will still function and switch slides instantly, preserving usability without causing motion sickness.
