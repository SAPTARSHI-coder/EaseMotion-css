# Plasma Maintenance Page

An elegant, glassmorphic maintenance portal featuring a customizable pure CSS liquid/gooey plasma animation background, inspired by high-end luxury Real Estate design patterns, with zero JavaScript dependencies.

---

## 1. What does this do?

This component renders an interactive, responsive under-maintenance page featuring a fluid morphing plasma background and a glassmorphism dashboard containing real estate branding, an interactive milestones timeline (toggled via CSS state inputs), and a newsletter registration form.

## 2. How is it used?

The gooey plasma background effect is created by wrapping floating, morphing gradient orbs inside a container utilizing an SVG contrast filter:

```html
<!-- HTML Structure -->
<div class="plasma-background-ag" aria-hidden="true">
  <div class="plasma-orb-ag orb-1-ag"></div>
  <div class="plasma-orb-ag orb-2-ag"></div>
  <div class="plasma-orb-ag orb-3-ag"></div>
  <div class="plasma-orb-ag orb-4-ag"></div>
</div>

<svg style="display: none;" aria-hidden="true">
  <defs>
    <filter id="plasma-goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 45 -18"
        result="goo"
      />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>
```

```css
/* CSS Easing and Animations */
.plasma-background-ag {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  filter: url(#plasma-goo);
  z-index: -2;
}

.plasma-orb-ag {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  opacity: 0.65;
  animation:
    float-1 24s ease-in-out infinite alternate,
    morph-1 12s ease-in-out infinite alternate;
}

@keyframes morph-1 {
  0% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }
  100% {
    border-radius: 50% 50% 30% 70% / 40% 60% 30% 70%;
  }
}

@keyframes float-1 {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(25vw, 15vh) scale(1.15);
  }
}
```

## 3. Why is it useful?

Under-maintenance and landing countdown pages are among the most commonly needed templates for web applications. Traditional implementations require heavy JavaScript libraries (e.g., Canvas, WebGL, or Lottie) to render fluid liquid/plasma dynamics. By delegating the morphing math to native CSS transitions, utilizing standard SVG filters, and handling interactive states with CSS checkbox/radio input triggers, we keep the page size extremely lightweight, maintain excellent accessibility compliance, and run animations smoothly directly on the browser's GPU.

---

## Technical Features

- **Liquid Gooey Simulation**: Combined `feGaussianBlur` and `feColorMatrix` SVG filters fuse moving orbs into cohesive fluid blobs.
- **Continuous Multi-Axis Motion**: The float and morph animations operate on independent timelines and directions, ensuring organic, non-repeating movements.
- **Pure CSS State Machine**: Checked states of hidden radio buttons translate into dynamic content shifts and slide-up elastic spring animations.
- **Responsive Layout**: The glassmorphic interface scales fluidly between mobile viewports and large desktop screens.
- **Reduced Motion Support**: Automatically disables hardware-intensive filter blurs and complex movements when the user prefers reduced motion, falling back to soft static ambient glow patterns.
