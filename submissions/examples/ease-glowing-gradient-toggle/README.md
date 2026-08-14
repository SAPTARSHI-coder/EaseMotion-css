# Glowing Gradient Toggle (V2)

## Abstract
The Glowing Gradient Toggle (V2) component is a modern, accessible UI toggle switch built with pure CSS. It features hardware-accelerated gradient glow effects, smooth state transitions using spring-like cubic-bezier timing functions, and standard form accessibility features.

## Hardware Accelerated Glow
Traditional CSS glow effects achieved via animated `box-shadow` or large `drop-shadow` filters trigger heavy layout recalculations and paint operations on the CPU, leading to dropped frames during state changes.

This component decouples the ambient glow effect by employing a dedicated pseudo-element (`::before`) rendered behind the physical track (`.ease-toggle-track`).
- **Glow mechanics**: The pseudo-element contains the linear gradient background (`linear-gradient(135deg, #38bdf8 0%, #c084fc 100%)`) with `filter: blur(12px)`.
- **GPU Compositing**: State transitions strictly manipulate `opacity` and `transform: scale()`. Because `opacity` and `transform` do not trigger layout or paint cycles, the entire glowing transition is offloaded directly to the GPU compositor layer, ensuring smooth 60+ FPS performance even on low-power hardware.

## Semantic Accessibility
Accessibility is built directly into the markup and state architecture without requiring JavaScript:
- **State Management**: The toggle relies on a standard `<input type="checkbox">` visually hidden using `appearance: none`, `opacity: 0`, and `pointer-events: none`.
- **Interactive Area**: Wrapping the elements in a `<label class="ease-toggle-wrapper">` allows user clicks/taps anywhere on the label or track to toggle the underlying checkbox.
- **CSS State Mapping**: Visual state changes are triggered via the CSS `:checked ~` sibling selector, driving track gradient overlays, knob translation, ambient glow scaling, and label color highlights.
- **Focus & Keyboard Navigation**: Keyboard users benefit from explicit `:focus-visible` styling (`outline: 2px solid #f472b6; outline-offset: 4px`), guaranteeing compliance with accessibility focus indicator standards.
