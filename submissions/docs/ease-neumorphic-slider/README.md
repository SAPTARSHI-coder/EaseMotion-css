# EaseMotion Neumorphic Slider

A lightweight, pure CSS Neumorphic (soft UI) range input slider component designed for modern, tactile user interfaces.

## Overview

The EaseMotion Neumorphic Slider brings extruded tactile aesthetics to native range inputs without reliance on JavaScript libraries or complex DOM structures. Neumorphism relies on subtle contrast, soft dual-directional lighting, and identical background color pairing between elements and their container.

### Core Neumorphic Principle
The primary design principle behind Neumorphism is **color continuity combined with dual light sources**:
- **Background Matching**: The element (track/thumb) and its parent container share the exact same background color (`#e0e5ec`).
- **Paired Shadows**: Depth is generated entirely using light and dark box-shadow pairs placed diagonally opposite to each other:
  - **Light Highlight**: Positioned top-left (e.g., `-4px -4px 8px rgba(255, 255, 255, 0.8)` or inset equivalent).
  - **Dark Shadow**: Positioned bottom-right (e.g., `4px 4px 8px rgba(163, 177, 198, 0.7)` or inset equivalent).

This dual shadow illusion creates an appearance of soft physical extrusions (for the thumb handle) or carved recessions (for the slider track) emerging directly from the surface background.

---

## Base Usage

Integrate the Neumorphic Slider by linking `style.css` and adding a standard HTML `<input type="range">` element styled with the `.ease-neu-slider` class.

### HTML Structure

```html
<div class="ease-docs-grid">
  <div style="width: 100%; text-align: left;">
    <label for="neu-volume" style="display: block; font-weight: 600; margin-bottom: 1rem; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; font-size: 0.875rem;">
      Master Volume
    </label>
    <input 
      type="range" 
      id="neu-volume" 
      class="ease-neu-slider" 
      min="0" 
      max="100" 
      value="50" 
      aria-label="Master Volume"
    >
  </div>
</div>
```

---

## Shadow Mathematics

Neumorphism shifts perceived surface height by manipulating box-shadow offsets, blur radii, and opacity values across different light angles:

### Extruded Elevation (Thumb)
- **Exterior Highlight**: `-4px -4px 8px rgba(255, 255, 255, 0.8)` simulates ambient white light striking the top-left shoulder of the thumb control.
- **Exterior Shadow**: `4px 4px 8px rgba(163, 177, 198, 0.7)` casts a subtle shadow on the bottom-right floor.
- **Result**: The thumb appears raised above the parent card surface.

### Inset Depth (Track)
- **Inset Shadow**: `inset 4px 4px 8px rgba(163, 177, 198, 0.7)` casts shadow inside the top-left edge of the track channel.
- **Inset Highlight**: `inset -4px -4px 8px rgba(255, 255, 255, 0.7)` illuminates the inner bottom-right rim.
- **Result**: The track appears recessed into the parent card.

### Active Compressed State
When pressed (`:active`), shadow distances decrease (from `4px` to `2px`) and the thumb scales down to `scale(0.9)` with cursor set to `grabbing`, visually communicating physical compression into the track.

---

## Accessibility (a11y)

Standard Neumorphic designs often suffer from low contrast ratios because elements blend seamlessly into their background color. The EaseMotion Neumorphic Slider addresses these accessibility concerns through several focused strategies:

1. **High-Contrast Focus Indicator (`:focus-visible`)**:
   - When navigated via keyboard (Tab key), the slider thumb transitions its border color from matching `#e0e5ec` to `#3b82f6` (a prominent, WCAG-compliant blue hue).
   - This provides clear visual focus indication without interrupting the overall aesthetic during mouse clicks.

2. **Tactile Interaction Feedback**:
   - Smooth `cubic-bezier(0.34, 1.56, 0.64, 1)` scale transitions on action provide high visual affordance.
   - Dynamic `cursor: grab` and `cursor: grabbing` styling indicates interactive capability clearly.

3. **Semantic HTML & ARIA Attributes**:
   - Built on native `<input type="range">`, preserving default keyboard controls (Arrow keys, Page Up/Down, Home, End).
   - Explicit `<label>` binding via `for`/`id` matching alongside `aria-label` ensures full screen reader support.
