# Neumorphic Minimalist Tooltip

A soft, elegant CSS tooltip component featuring precise Neumorphic (soft UI) drop-shadows and spring-physics entrance animations.

## Features
- **Neumorphic Extrusion Physics**: Both the trigger button and the tooltip utilize carefully tuned, opposing `box-shadow` configurations (mixing a dark shadow with a bright highlight) to simulate physical objects extruded from the background material.
- **Interactive Pressed States**: The trigger button features a tactile `:active` state that replaces the outer box-shadow with an `inset` shadow, simulating a physical button press.
- **Advanced CSS Tooltip Pointer**: Because standard CSS border-triangles cannot accurately inherit complex drop-shadows, the tooltip pointer is engineered using a rotated `::before` pseudo-element square (`transform: rotate(45deg)`). Its box-shadow is meticulously split to match the direction of the tooltip's main shadows.
- **Spring Reveal Animation**: When hovered, the tooltip fades in and elegantly slides into position using a `cubic-bezier` timing function, providing a high-quality, native app feel.
- **Directional Variants**: Includes CSS configurations for both Top-aligned and Bottom-aligned tooltips.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Poppins` font is loaded in your `<head>`.
- **Important**: The Neumorphic optical illusion requires that the parent container (or `body`) background color perfectly matches the `--neu-bg` CSS variable (`#e0e5ec`). If you change the background color, you must also recalculate the highlight (`--neu-shadow-light`) and shadow (`--neu-shadow-dark`) hex values.
