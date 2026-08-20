# Animated Floating Input Field (Retro Pixel Styling)

This submission introduces a new variant of the standard input group component: the **Retro Pixel Animated Floating Input Field**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/retro-pixel-floating-input/`.

## Feature Overview

The Retro Pixel Floating Input taps into nostalgia, delivering an 8-bit arcade aesthetic. It features monospace typography, stark block shadows, sharp corners, and a CSS-only CRT scanline overlay, paired with a modern "floating label" interaction.

### Included CSS

1. **Pure CSS Floating Label (`Zero JS`):** This component utilizes the `:not(:placeholder-shown)` CSS pseudo-class hack to detect when the input contains text. Combined with `:focus`, this allows the label to animate from a placeholder position to a floating title position without any JavaScript state management. (Note: This requires `placeholder=" "` in the HTML).
2. **Retro Design Tokens:** Themed via CSS Custom Properties (`--ease-retro-bg`, `--ease-retro-primary`, `--ease-retro-shadow`). Colors are deliberately restricted to a high-contrast palette typical of early gaming consoles (Neon Green, Magenta).
3. **8-bit Block Shadows:** Discards `border-radius` entirely in favor of hard corners and solid, unblurred block shadows (`box-shadow: 4px 4px 0px 0px ...`) to mimic pixel art edges.
4. **CRT Scanline Effect:** An absolutely positioned pseudo-layer (`.ease-retro-scanline`) applies a repeating linear-gradient to simulate the interlaced scanlines of old CRT monitors.
5. **Hardware-Accelerated Transitions:** Uses `transform: translateY() scale()` for the label movement, paired with a `steps()` timing function on color transitions to maintain the choppy, retro feel.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of `<input>` and `<label for="...">` ensures screen readers can correctly associate the floating label with its control.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The scaling and translation animations of the floating label, as well as the active button states, are safely disabled for users with vestibular disorders.
- **Responsiveness:** Standard width scaling (`width: 100%`) allows the input group to respond fluidly across mobile and desktop container boundaries.
