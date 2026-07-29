# Fix for Ease-Slide-Up Flicker (#34599)

This example demonstrates the fix for the `ease-slide-up` animation flickering issue on Chrome when the parent container has `overflow: hidden`.

Adding `will-change: transform` to the parent `.ease-overflow-parent` resolves the GPU layer promotion conflict during the animation.