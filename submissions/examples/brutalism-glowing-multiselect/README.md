# Glowing Multi-Select Dropdown (Brutalism Styling)

This submission introduces a new variant of the standard multi-select dropdown component: the **Brutalism Glowing Multi-Select**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/brutalism-glowing-multiselect/`.

## Feature Overview

The Brutalism Glowing Multi-Select merges two contrasting aesthetic styles: the heavy, utilitarian block shadows and thick borders of Neo-Brutalism, with the high-energy neon glows of Cyberpunk. 

### Included CSS

1. **Pure CSS Hack (`Zero JS`):** This component utilizes the "Checkbox Hack" to handle the open/close state of the dropdown menu entirely within CSS, requiring zero JavaScript overhead.
2. **Brutalism Design Tokens:** Themed via CSS Custom Properties (`--ease-brutal-bg`, `--ease-brutal-border-color`, `--ease-brutal-shadow`) allowing for easy customization of the stark, high-contrast look.
3. **Neon Glow Interactions:** When focused or hovered, the brutalist block shadow transforms, bursting into a bright neon glow (`--ease-brutal-glow-fx`).
4. **Custom Multi-Select Checkboxes:** The internal `<input type="checkbox">` elements are visually hidden and replaced with custom CSS checkboxes that perfectly match the brutalist aesthetic and light up with neon colors when checked.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Keyboard Navigation:** Fully navigable via keyboard. The main trigger label can be focused using `Tab` and opened using `Space`. Internal checkboxes clearly show focus rings (`:focus-visible` dashed outlines) to aid navigation.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The sliding animations on the dropdown menu and the translation physics on the hover states are safely stripped out for users with vestibular disorders.
- **Responsiveness:** Inherently scales based on the container constraints and relative units (`rem`).
