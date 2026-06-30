1. What does this do? Creates a 3D tilt effect that follows the cursor — the element tilts on X/Y axes based on cursor position relative to its center, with a `translateZ` lift on inner content.
2. How is it used? Add `.mouse-parallax` to a container, `.mouse-parallax-inner` to content that should appear elevated. The JS listens to mousemove and applies `rotateX`/`rotateY` transforms.
3. Why is it useful? A mouse-driven parallax tilt adds a polished, interactive feel to cards and panels with minimal JS, using GPU-accelerated transforms and respecting reduced-motion preferences.
