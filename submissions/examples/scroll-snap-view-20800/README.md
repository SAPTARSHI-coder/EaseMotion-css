# Scroll-Snap & View-Timeline Entrance Feature

## Overview
This implementation provides a performant, zero-JavaScript solution for triggering animations as sections enter the viewport. It leverages the modern `animation-timeline: view()` CSS property combined with `scroll-snap`.

## Features
- **Scroll-Driven:** Animations are bound to the scroll position, not event listeners.
- **Hardware Accelerated:** Uses CSS keyframes for 60fps performance.
- **Snap Points:** Ensures the viewport locks to sections for a polished feel.

## Technical Details
- `scroll-snap-type: y mandatory` ensures the container locks to the start of each section.
- `animation-timeline: view()` tracks the visibility of the element.
- `animation-range` controls the entrance threshold (entry 10% to cover 30%).

## Usage
Add the `snap-container` class to your main wrapper and `snap-section` to your panels. Apply `animate-reveal` to any child element to animate it on entrance.
