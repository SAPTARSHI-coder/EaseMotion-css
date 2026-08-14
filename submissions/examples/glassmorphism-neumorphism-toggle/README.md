# CSS Glassmorphism & Neumorphism Toggle

A visually rich, hybrid UI toggle switch component built with pure CSS. It blends the soft, extruded/inset shadows of Neumorphism for the switch track with the frosted, semi-transparent blur of Glassmorphism for the interactive sliding knob.

## 🎯 Features
- **Pure CSS Core Mechanics:** The toggle state and fluid sliding animation are driven entirely by the HTML checkbox hack (`:checked` + sibling selector), avoiding complex state management.
- **Hybrid Styling:** Seamlessly mixes Neumorphic `box-shadow` tracking with Glassmorphic `backdrop-filter` aesthetics.
- **Hardware-Accelerated Transitions:** Utilizes GPU-friendly `transform: translateX` for buttery smooth 60fps sliding.
- **Accessible:** Includes semantic `<label>` pairing, full keyboard navigation (Space/Enter), and ARIA `role="switch"` attributes for screen readers.

## 📁 Files Included
```text
demo.html
style.css
README.md