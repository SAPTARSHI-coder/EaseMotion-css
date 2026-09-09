# Animated Star Rating (Claymorphism Styling)

This submission introduces a new variant of the standard form/feedback component: the **Claymorphism Animated Star Rating**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/claymorphism-star-rating/`.

## Feature Overview

The Claymorphism Star Rating brings a soft, tactile, 3D aesthetic to a classic UI component. It leverages multiple layers of inset and drop shadows to simulate elements that can be physically pressed into a soft surface (clay/neumorphism evolution).

### Included CSS

1. **Pure CSS Star Logic (`flex-direction: row-reverse`):** Building a star rating without JavaScript requires a clever CSS trick. The container uses `flex-direction: row-reverse`. This visually flips the elements so the first star is on the left, but in the HTML DOM, it is actually the *last* element. This allows us to use the general sibling combinator (`~`) to style "all stars to the left" when hovering or checking a star, because technically, we are selecting "all stars that come *after* this one in the DOM".
2. **Claymorphism Shadows (`UP` vs `DOWN` states):**
    - The default/unselected state uses `--ease-clay-box-shadow-up`: A combination of two inset shadows (to round the edges) and two drop shadows (one light, one dark) to make the circular buttons appear to float above the surface.
    - The selected state uses `--ease-clay-box-shadow-down`: The drop shadows are removed, and the inset shadows are intensified, creating the illusion that the button has been pressed deep into the clay surface.
3. **Playful Micro-interactions:** On hover, the stars tilt back (`rotate(-8deg)`) and scale up slightly. When clicked/checked, the icon scales down (`scale(0.95)`) and translates down the Y-axis to match the "pressed" state of the button container.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing native radio inputs.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and `width: 0` but remain in the DOM and receive native keyboard focus. A high-contrast outline is applied to the corresponding label when `focus-visible` is triggered.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All scales, translations, rotations, and shadow transitions are safely stripped out for users with vestibular disorders.
- **Responsiveness:** Built with fluid flexbox spacing. It centers cleanly on mobile viewports.
