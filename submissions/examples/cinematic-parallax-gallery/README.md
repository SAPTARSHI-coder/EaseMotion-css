# Cinematic Parallax Image Gallery

## What does this do?

An image gallery grid where hovering over a card triggers a multi-layered parallax effect—the frame container tilts in 3D, the image inside shifts in the opposite direction for simulated depth, and the text content emerges from the back.

## How is it used?

Add the layout classes to your HTML elements:

```html
<div class="ease-cinematic-grid">
  <div class="ease-cinematic-card-wrapper">
    <div class="ease-cinematic-card">
      <div class="ease-cinematic-badge">Adventure</div>
      <div class="ease-cinematic-media">
        <img class="ease-cinematic-image" src="image.jpg" alt="Preview" />
        <div class="ease-cinematic-overlay"></div>
      </div>
      <div class="ease-cinematic-glare"></div>
      <div class="ease-cinematic-content">
        <span class="ease-cinematic-subtitle">01 / Mountain Peak</span>
        <h2 class="ease-cinematic-title">Lost in Wilderness</h2>
        <p class="ease-cinematic-desc">
          Explore the misty peaks and dark forests under a canopy of starlight.
        </p>
      </div>
    </div>
  </div>
</div>
```

Run the JS tracking engine to set coordinates:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".ease-cinematic-card-wrapper");

  cards.forEach((wrapper) => {
    const card = wrapper.querySelector(".ease-cinematic-card");
    let frameId = null;

    wrapper.addEventListener("mousemove", (e) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const normX = x / (rect.width / 2);
        const normY = y / (rect.height / 2);

        const root = document.documentElement;
        const maxTilt =
          parseFloat(
            getComputedStyle(root).getPropertyValue("--ease-cinematic-tilt-max")
          ) || 20;
        const maxParallax =
          parseFloat(
            getComputedStyle(root).getPropertyValue(
              "--ease-cinematic-parallax-max"
            )
          ) || 15;

        const tiltX = -normY * maxTilt;
        const tiltY = normX * maxTilt;
        const parallaxX = -normX * maxParallax;
        const parallaxY = -normY * maxParallax;

        card.classList.remove("resetting");
        card.style.setProperty("--tilt-x", `${tiltX}deg`);
        card.style.setProperty("--tilt-y", `${tiltY}deg`);
        card.style.setProperty("--parallax-x", `${parallaxX}px`);
        card.style.setProperty("--parallax-y", `${parallaxY}px`);

        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--glare-x", `${glareX}%`);
        card.style.setProperty("--glare-y", `${glareY}%`);
        card.style.setProperty("--glare-opacity", "1");
      });
    });

    wrapper.addEventListener("mouseleave", () => {
      if (frameId) cancelAnimationFrame(frameId);

      card.classList.add("resetting");
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
      card.style.removeProperty("--parallax-x");
      card.style.removeProperty("--parallax-y");
      card.style.removeProperty("--glare-opacity");
    });
  });
});
```

## Why is it useful?

It creates an incredibly premium, interactive, and spatial presentation for portfolios, product cards, or editorial galleries. By combining CSS variables, native 3D transforms (`preserve-3d`), and an optimized `requestAnimationFrame` JavaScript loop, it delivers fluid, hardware-accelerated animations with zero performance stutter.

## Tech Stack

- HTML
- CSS (Vanilla CSS, custom variables, 3D transforms)
- JS (Vanilla JS, mouse coordination, dynamic styling)

## Preview

Open `demo.html` directly in your browser or run the development server to see the effect.
