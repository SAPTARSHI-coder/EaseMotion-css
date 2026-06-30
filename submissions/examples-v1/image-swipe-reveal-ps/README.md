# Image Swipe Wipe Reveal

1. What does this do? Creates a cinematic reveal animation where a solid block of color sweeps across the container to reveal an image hiding underneath.
2. How is it used? Wrap an `<img>` tag in a container with the `.image-swipe-reveal-ps` class. The CSS utilizes an `::after` pseudo-element to create the sweeping color block, synchronized perfectly with the image fading in halfway through the animation.
3. Why is it useful? This effect is a staple of high-end, award-winning portfolio websites and landing pages (often referred to as an awwwards-style reveal), implemented here natively in CSS without relying on heavy JS timeline libraries like GSAP.
