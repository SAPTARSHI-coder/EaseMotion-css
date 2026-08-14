# 3D Carousel with Neumorphism Styling

A responsive 3D carousel created for EaseMotion CSS issue
#78361.

## Features

- Fully responsive layout
- HTML and CSS only
- No JavaScript
- Neumorphic surfaces and shadows
- CSS 3D perspective
- Layered card depth
- Hover elevation effects
- Responsive mobile composition
- Accessible button focus states
- Reduced-motion support
- No external dependencies

## Design

The component combines a minimalist visual language with
soft neumorphic depth.

The design includes:

- Neutral monochrome palette
- Soft highlights and shadows
- Perspective-based card positioning
- Center-focused active card
- Subtle 3D visual objects
- Compact navigation controls

## Responsive Behavior

Desktop layouts show three cards with the center card
visually positioned in front.

On smaller screens the side cards move closer to the center
and scale down to preserve the depth effect without causing
horizontal overflow.

## Technologies

- HTML5
- CSS3
- CSS 3D transforms
- CSS gradients
- CSS animations

## Accessibility

Navigation buttons include accessible labels and visible
focus states.

The component also respects `prefers-reduced-motion` to
reduce non-essential animation for users who request it.

## Files

- `demo.html`
- `style.css`

## Issue

Closes #78361