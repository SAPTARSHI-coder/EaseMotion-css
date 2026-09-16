# Shimmer-Sweep Pricing Table

A full glassmorphism pricing-table showcase for **EaseMotion CSS issue #64348**.

## Overview

This example focuses on a directional shimmer-sweep interaction. Each pricing card contains a decorative highlight implemented with a pseudo-element. When the card is hovered or receives keyboard focus, the highlight travels diagonally across the glass surface and fades away. The effect is intentionally short and event-driven rather than continuously animated.

The showcase is completely dependency-free. It uses semantic HTML5 and a standalone CSS stylesheet with transitions, keyframes, responsive media queries, and reduced-motion handling.

## Folder structure

```text
64348-shimmer-sweep-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Demo structure

The demo page contains several sections so the animation can be viewed in context:

- A compact navigation header.
- A hero section introducing the interaction.
- A small trust/feature row.
- Three glassmorphism pricing cards.
- A dedicated motion explanation section.
- An interactive FAQ using native `<details>` elements.
- A footer with a return-to-top link.

The pricing cards use the same semantic structure while the middle Pro card receives a featured treatment.

## Core interaction

The shimmer is implemented without JavaScript. A child element named `.plan__shine` is positioned outside the visible card and transformed with `skewX()`. Its background is a transparent-to-white gradient.

The element starts outside the left side of the card:

```css
.plan__shine {
  left: -75%;
  transform: skewX(-22deg);
}
```

When the card receives hover or focus, the animation runs:

```css
@keyframes shimmer-sweep {
  0% { left: -75%; }
  100% { left: 135%; }
}
```

This creates a single directional sweep rather than a persistent flashing effect.

## Why a pseudo-element?

Using a pseudo-element or dedicated decorative child keeps the visual highlight independent from the card's actual content. It prevents the shimmer from changing text layout and makes the effect easy to remove for reduced-motion users.

The highlight is also clipped by the card's `overflow: hidden` behavior, so it never spills outside the rounded glass surface.

## Features

- Pure HTML and CSS.
- No JavaScript.
- No external animation library.
- Three responsive pricing tiers.
- Featured Pro plan.
- Glassmorphism with translucent surfaces and backdrop blur.
- Directional shimmer sweep on hover.
- Matching focus interaction for keyboard users.
- Animated decorative hero preview.
- Native FAQ disclosure controls.
- Responsive typography.
- Desktop, tablet, and mobile layouts.
- Reduced-motion support.
- Visible keyboard focus indicators.
- CSS custom properties for theming.
- GPU-friendly transform usage for decorative motion.

## Accessibility

The implementation considers accessibility as part of the component rather than as an afterthought.

### Keyboard interaction

The cards use `tabindex="0"`, allowing the shimmer state to be previewed with a keyboard. The stylesheet uses `:focus-within` and `:focus-visible` alongside `:hover` so the visual interaction is not mouse-only.

### Reduced motion

The stylesheet includes:

```css
@media (prefers-reduced-motion: reduce) {
  .plan:hover .plan__shine,
  .plan:focus-within .plan__shine,
  .plan:focus-visible .plan__shine {
    animation: none;
    opacity: 0;
  }
}
```

The ambient hero animations are disabled in the same media query. Static gradients and glass surfaces remain, so users do not lose the visual design when motion is disabled.

### Focus visibility

Links receive a high-contrast outline using `:focus-visible`. The outline is offset from the control to remain visible against the glass background.

### Semantics

The page uses headings in a logical hierarchy, navigation landmarks, labelled sections, unordered lists for plan features, and native disclosure widgets for the FAQ.

## Responsive behavior

### Large screens

The hero uses two columns, with the text and animated preview displayed side by side. Pricing cards appear in a three-column grid.

### Medium screens

The layout reduces gaps and card padding while preserving the three-column structure when space permits. Typography remains fluid through `clamp()`.

### Small screens

The hero collapses into a vertical flow and the pricing grid becomes one column. The motion explanation also stacks vertically. Footer content becomes easier to scan on narrow screens.

## CSS custom properties

| Property | Purpose |
| --- | --- |
| `--bg` | Page background |
| `--surface` | Base glass surface |
| `--surface-hover` | Active glass surface |
| `--line` | Default border |
| `--line-hot` | Hover/focus border |
| `--text` | Primary text |
| `--muted` | Secondary text |
| `--purple` | Main accent |
| `--cyan` | Secondary accent |
| `--pink` | Ambient accent |
| `--success` | Feature check color |
| `--radius` | Pricing card radius |
| `--duration` | Shimmer duration |
| `--ease` | Shimmer easing |

Changing `--duration` is the simplest way to make the sweep faster or slower. A duration between roughly `650ms` and `1000ms` keeps the highlight readable without making it feel sluggish.

## Customizing the shimmer

The shimmer can be made brighter by increasing the alpha value in its gradient. It can be made softer by increasing the blur amount. The direction can be changed by modifying `transform: skewX()`.

For example, a more horizontal sweep could use a smaller skew value, while a steeper diagonal effect could use a larger negative value.

The important design constraint is that the highlight should remain subtle enough that it does not obscure the pricing information underneath it.

## Performance notes

The main motion is generated by changing the position of a decorative element and using a single short animation. The cards do not continuously animate, which keeps idle pages calm and reduces unnecessary work.

Backdrop blur is used as a progressive visual enhancement. If a browser does not support it, the translucent background and border remain visible and the component still works as a normal pricing table.

## Design rationale

The visual concept is based on light moving across a polished translucent material. A single highlight communicates depth more effectively than several competing animations. The card itself lifts only slightly on hover, while the shimmer supplies the stronger visual cue.

This keeps the interaction aligned with EaseMotion's goal of producing small, reusable motion patterns rather than decorative animation that dominates the interface.

## Requirement checklist

- [x] Dedicated folder under `submissions/examples/`.
- [x] Issue number included in the feature folder name.
- [x] `demo.html` included.
- [x] `style.css` included.
- [x] `README.md` included.
- [x] Pure HTML/CSS implementation.
- [x] Smooth CSS transitions.
- [x] CSS keyframe animation.
- [x] Responsive desktop/tablet/mobile layout.
- [x] Keyboard focus support.
- [x] `prefers-reduced-motion` support.
- [x] Glassmorphism visual treatment.
- [x] Shimmer-sweep effect is the primary feature.

## Credits

Created as a contribution to the EaseMotion CSS animation showcase for issue #64348.
