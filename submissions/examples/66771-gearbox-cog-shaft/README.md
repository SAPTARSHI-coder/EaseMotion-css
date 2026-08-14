# Gearbox Cog Shaft

A fully rendered animated gearbox component created for EaseMotion issue #66771.

## Requirements covered

- Real gearbox interface rather than a generic animated box.
- Semantic elements for cog teeth, gear shafts, casing, oil level window and shift lever.
- Named component-specific keyframes for each mechanical motion.
- Pure HTML and CSS with no JavaScript dependency.
- Responsive layouts and visible keyboard focus treatment.
- Reduced-motion support.

## Component anatomy

The housing frames three gears and their shafts. The large drive gear establishes the primary rotation, the smaller driven gear rotates in the opposite direction, and the output gear continues the transfer. The inspection window exposes an animated oil level, while the selector lever sits in a four-position gate.

## Motion model

The gear animations use different durations and directions to communicate tooth engagement and transmission. The primary and output gears rotate clockwise while the driven gear rotates counter-clockwise. The selector gently rocks independently, and the oil level receives a small breathing animation.

## Accessibility

The gearbox and shift lever expose accessible labels and keyboard focus. The visual animation is not required to understand the component structure. `prefers-reduced-motion` turns off the continuous movement for users who request less motion.

## Customization

The CSS variables at the top of `style.css` control the housing, gear, shaft, oil and accent palette. Gear sizes and positions are explicit so the component can be adapted to another transmission layout.

## Responsive behavior

At tablet widths the entire mechanical assembly scales while supporting specification cards move into two columns. On narrow screens the stage uses a smaller scale and hides overflow so the gearbox remains a self-contained visual unit.

## Review checklist

- [x] Gear teeth
- [x] Gear shafts
- [x] Housing casing
- [x] Oil level window
- [x] Shift lever and gate
- [x] Named keyframes
- [x] Responsive behavior
- [x] Reduced-motion support
- [x] Focus states
