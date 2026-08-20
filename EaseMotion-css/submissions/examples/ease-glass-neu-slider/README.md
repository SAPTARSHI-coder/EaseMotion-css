# Glassmorphism Neumorphism Hybrid Slider

## Abstract

This component presents a hybrid UI paradigm combining Neumorphic track mechanics with a Glassmorphic interactive thumb control. Designed as a zero-dependency, pure CSS solution for native browser range inputs (`<input type="range">`), it delivers high physical tactility and smooth visual feedback without requiring JavaScript overhead or DOM composition bloat.

## Neumorphic Track Mechanics

Combining Neumorphism and Glassmorphism in a single component often results in poor visual contrast, illegible control states, and heavy DOM node wrapping. 

To overcome these limitations:
- The Neumorphic styling is isolated exclusively to the track element pseudo-selectors (`::-webkit-slider-runnable-track` and `::-moz-range-track`).
- Dual opposing inset shadows (`inset 3px 3px 6px #131a25` and `inset -3px -3px 6px #293851`) are applied directly to the pill-shaped track (`border-radius: 9999px`), giving it physical depth and an extruded mechanical inset aesthetic within the container background `#1e293b`.

## Glassmorphic Thumb Compositing

The interactive thumb leverages modern CSS backdrop features for an elevated frosted glass appearance:
- Frosted glass elevation is achieved using `backdrop-filter: blur(8px)` coupled with a semi-transparent fill (`rgba(255, 255, 255, 0.05)`).
- Subdued inset highlights (`inset 0 0 10px rgba(255, 255, 255, 0.1)`) and soft external drop shadows (`0 4px 15px rgba(0, 0, 0, 0.4)`) create dynamic separation between the floating thumb and the sunken neumorphic track beneath it.
- During interaction, the `:active` pseudo-class triggers a physical scale elevation (`transform: scale(1.15)`) animated via a responsive `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve, delivering instant tactile user feedback alongside an illuminated sky-blue accent (`#38bdf8`).
