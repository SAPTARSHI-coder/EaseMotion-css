# Neumorphic Accordion: Dark Mode

A pure CSS accordion component that utilizes Neumorphic (soft UI) design principles tailored specifically for deep dark mode environments.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Dark Mode Neumorphism**: Achieves the extruded soft UI look on a dark matte background (`#292d32`) by using a combination of two box shadows: a dark black shadow (`rgba(0, 0, 0, 0.4)`) on the bottom-right and a very subtle, low-opacity white highlight (`rgba(255, 255, 255, 0.05)`) on the top-left.
  - **Pure CSS State Management**: Uses the "Radio Hack". Hidden `<input type="radio">` buttons track which accordion panel is open. The visible `<label>` acts as the interactive header.
  - **Advanced `:has()` Pseudo-class**: Utilizes the modern CSS `:has()` selector (`.accordion-item:has(.accordion-toggle:checked)`) to change the entire parent container's shadow from an `outset` state (unpressed) to an `inset` state (pressed) when the panel is opened.
  - **Icon Animation**: The chevron icon sits inside its own Neumorphic circular button. When the panel is expanded, the icon rotates 180 degrees and its container presses inwards (`inset` shadow) to reinforce the mechanical feel.
  - **Spring-like Motion**: Employs custom `cubic-bezier(0.25, 1, 0.5, 1)` easing curves to give the expansion (`max-height`) and text sliding (`translateY`) a smooth, physical weight.
- Accessible semantic structure. Features keyboard navigation support (`tabindex="0"`, `:focus-visible`) and honors the `prefers-reduced-motion` media query.

## Usage
Open `demo.html` in your browser. Click on the accordion headers to see the panels expand, the icons rotate, and the Neumorphic shadows morph from protruding out of the screen to pressing into it.

## Files
- `demo.html`: The HTML structure defining the radio hack and accordion panels.
- `style.css`: The styling, Dark Mode Neumorphic shadow variables, and the `:checked` / `:has()` state logic.
