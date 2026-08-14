# Magnetic Morphing Tooltip Matrix (`ease-morph-tooltip`)

A fluid tooltip interaction system that uses a single persistent capsule element to display contextual information for navigation items. The tooltip magnetically snaps between targets, dynamically morphs its dimensions based on content length, and delivers a smooth liquid-like motion experience.

## Functional Composition

### Dynamic Tooltip Morphing

A single floating tooltip container is reused across all navigation items. As users move between menu options, the tooltip updates its content and smoothly resizes to fit the active label.

### Magnetic Snap Motion

The capsule follows hovered navigation elements with spring-based motion, creating the illusion of a magnetic attraction effect rather than abrupt position changes.

### Elastic Physics Animation

Transitions use a custom spring curve:

```css
cubic-bezier(0.34, 1.56, 0.64, 1)
```

This produces a subtle stretch-and-settle effect that mimics organic movement.

### Context-Aware Content

Each navigation item defines its own tooltip message through data attributes, allowing a single tooltip instance to display different contextual descriptions.

### GPU-Accelerated Performance

Movement is handled through `transform: translateX()` and hardware-accelerated transitions, ensuring smooth rendering with minimal layout overhead.

## Features

* Single persistent tooltip element
* Dynamic width adaptation based on content
* Magnetic snapping behavior
* Smooth spring animations
* Contextual tooltip messages
* Responsive layout support
* Lightweight implementation
* Easy customization through CSS variables

## Usage

Hover over any navigation item to:

1. Activate the floating tooltip.
2. Update tooltip content.
3. Morph tooltip dimensions to match text length.
4. Magnetically snap the capsule to the active target.

## Browser Support

Modern browsers supporting:

* CSS Custom Properties
* CSS Transforms
* Flexbox
* ES6 JavaScript

## By

Pari Dubey
