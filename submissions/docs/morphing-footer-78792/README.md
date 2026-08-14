# Morphing Footer

A complete documentation showcase for the Morphing Footer component created for **EaseMotion CSS issue #78792**.

## Overview

The Morphing Footer is a responsive, fixed navigation footer that changes its visual shape and elevation when the user interacts with it. The component uses semantic HTML and vanilla CSS so it can be dropped into a page without JavaScript.

The showcase demonstrates how a footer can combine:

- Responsive layout behavior.
- Smooth shape and elevation transitions.
- Hover and keyboard-focus states.
- A compact mobile navigation layout.
- Semantic navigation markup.
- Reduced-motion accessibility support.
- A lightweight implementation with no JavaScript dependency.

## Submission Structure

```text
submissions/docs/morphing-footer-78792/
├── demo.html
├── style.css
└── README.md
```

## Files

### `demo.html`

Contains the complete live documentation example, including the page content, footer structure, brand element, navigation links, and accessibility attributes.

### `style.css`

Contains all component styling, including layout, spacing, responsive breakpoints, visual states, transitions, shadows, and reduced-motion behavior.

## How It Works

The footer is positioned near the bottom of the viewport and uses a flexible grid layout on larger screens. Its container starts with a rounded card appearance and becomes more pronounced when hovered.

The morphing interaction is created with CSS transitions rather than JavaScript. When the user hovers over the footer shell:

1. The footer moves slightly upward.
2. Its corner radius increases.
3. The brand mark becomes circular.
4. The brand mark rotates and scales slightly.
5. Navigation links respond independently to hover and keyboard focus.

This keeps the interaction lightweight while still providing a clear visual response.

## Usage

Copy the footer markup from `demo.html` into the page where the component is required and include `style.css`.

The navigation links should be replaced with meaningful destinations for the target website or application. The footer can also be adapted to include additional actions, branding, or secondary navigation.

Example structure:

```html
<footer class="morph-footer">
  <div class="footer-shell">
    <a class="brand" href="#" aria-label="Home">E</a>

    <nav aria-label="Footer navigation">
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>

    <p>EaseMotion CSS</p>
  </div>
</footer>
```

## Responsive Behavior

The desktop layout uses three grid areas for the brand, navigation, and supporting text. At smaller viewport widths, the footer switches to a single-column layout.

The mobile layout:

- Reduces the footer padding.
- Scales down the brand mark.
- Allows navigation links to wrap naturally.
- Reduces navigation spacing.
- Hides the supporting text to preserve available space.
- Keeps the footer comfortably inset from the viewport edges.

## Accessibility

Accessibility is considered throughout the implementation.

- Navigation is contained inside a labelled semantic `<nav>` element.
- Links remain keyboard accessible.
- `:focus-visible` provides a clear keyboard interaction state.
- The brand link includes an accessible label.
- The component does not depend on JavaScript for navigation.
- `prefers-reduced-motion: reduce` minimizes transitions for users who request reduced motion.
- The layout remains usable at smaller viewport sizes.

When integrating the component into a production project, replace placeholder links and labels with meaningful content that describes the destination or action.

## Browser Support

The demo uses standard HTML and CSS features such as CSS Grid, Flexbox, custom properties, transitions, media queries, `backdrop-filter`, and `prefers-reduced-motion`.

Browsers without support for a newer visual feature should still receive the underlying footer structure and navigation content because the interaction is enhancement-oriented rather than required for functionality.

## Customization

The main visual values are exposed through CSS custom properties at the top of `style.css`:

```css
:root {
  --bg: #090b12;
  --panel: rgba(20, 24, 38, 0.86);
  --text: #f5f7ff;
  --muted: #9ca6bd;
  --accent: #8d7cff;
  --accent-2: #55d6be;
}
```

These variables can be adjusted to match an application's branding without changing the component structure.

## Design Notes

The footer intentionally uses generous spacing and controlled transitions so the morphing effect remains readable rather than distracting. The larger desktop spacing gives the navigation room to breathe, while the mobile breakpoint keeps the same component usable on narrow screens.

The visual treatment combines a translucent panel, soft shadowing, rounded corners, and a gradient brand mark. These details can be modified independently from the layout and interaction behavior.

## Issue Reference

This documentation showcase was created for **EaseMotion CSS issue #78792 — docs: document usage for Morphing Footer**.

The submission follows the required documentation structure under `submissions/docs/` with a live demo, stylesheet, and README documentation.
