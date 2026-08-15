# Dynamic Cookie Consent Banner (Retro Pixel Styling)

This submission introduces a new variant of the standard layout component: the **Retro Pixel Dynamic Cookie Consent Banner**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/retro-pixel-cookie-banner/`.

## Feature Overview

The Retro Pixel Cookie Banner brings a fun, gamified aesthetic to the standard (and often boring) cookie consent prompt. It features monospace typography, stark block shadows, sharp corners, and a purely CSS-driven dismissal mechanic.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes modern CSS features, specifically the `:has()` pseudo-class, to manage state without JavaScript. It monitors hidden checkbox inputs; when the user clicks "Accept" or "Reject", the CSS engine detects the `:checked` state and permanently dismisses the banner via a smooth `transform` animation.
2. **Accessible Native Keyboarding:** Unlike traditional "CSS Checkbox Hacks" that use `display: none`, this implementation visually hides the checkboxes using `opacity: 0` while stretching them perfectly over the fake button labels. This ensures that native keyboard focus, screen readers, and 'Space/Enter' key toggling work flawlessly right out of the box.
3. **Retro Design Tokens:** Themed via CSS Custom Properties (`--ease-cookie-bg`, `--ease-cookie-primary`). Colors are deliberately restricted to a high-contrast palette typical of early gaming consoles (Neon Green, Magenta).
4. **8-bit Block Shadows:** Discards `border-radius` entirely in favor of hard corners and solid, unblurred block shadows (`box-shadow: 4px 4px 0px 0px ...`) to mimic pixel art edges.
5. **Stepped Animations:** Button transitions utilize the `steps()` timing function to maintain a choppy, retro feel, while the cookie icon features a looped 4-frame bounce animation.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of `<input type="checkbox">` and `<label>` pairs ensures accessibility.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The bouncing icon animation, active button depression states, and the slide-out dismissal animation are safely disabled for users with vestibular disorders.
- **Responsiveness:** Switches from a stacked column layout on mobile to an inline flex layout on desktop viewports automatically.
