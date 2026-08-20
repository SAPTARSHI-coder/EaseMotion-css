# Custom Star Rating (Glassmorphism Styling)

This submission introduces a new variant of the standard form/feedback component: the **Glassmorphism Custom Star Rating**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/glassmorphism-star-rating/`.

## Feature Overview

The Glassmorphism Star Rating utilizes background blur and semi-transparent layers to create a frosted glass effect that beautifully overlays complex backgrounds or vibrant imagery.

### Included CSS

1. **Pure CSS Star Logic (`flex-direction: row-reverse`):** Building a star rating without JavaScript requires a clever CSS trick. The container uses `flex-direction: row-reverse`. This visually flips the elements so the first star is on the left, but in the HTML DOM, it is actually the *last* element. This allows us to use the general sibling combinator (`~`) to style "all stars to the left" when hovering or checking a star, because technically, we are selecting "all stars that come *after* this one in the DOM".
2. **Frosted Glass Panel:** The container uses `backdrop-filter: blur(16px)` combined with a highly transparent background color (`rgba(25, 25, 35, 0.45)`). 
3. **Specular Highlights:** Thin, semi-transparent white borders on the top and left edges simulate light catching the edge of the glass panel.
4. **Active State Glow:** When a star is checked or hovered, a bright Amber color is applied. Furthermore, `filter: drop-shadow(...)` is used to create a radiant glow effect that perfectly contrasts against the dark, blurred glass background.
5. **Pop Animation:** Checking a star triggers a playful `scale()` and `translateY()` keyframe animation (`ease-glass-pop`) with a spring-like cubic-bezier timing function.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing native radio inputs.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and `width: 0` but remain in the DOM and receive native keyboard focus. A high-contrast outline is applied to the corresponding label when `focus-visible` is triggered.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All scales, translations, background shapes, pop animations, and glow filters are safely stripped out for users with vestibular disorders.
- **Responsiveness:** Built with fluid flexbox spacing. It centers cleanly on mobile viewports.
