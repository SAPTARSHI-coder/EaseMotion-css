# Glassmorphism Tab Bar: Material Design

A pure CSS tab bar that merges the frosted-glass aesthetic of Glassmorphism with the interactive animations and easing curves of Material Design.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Glassmorphism Aesthetics**: Built using `backdrop-filter: blur(16px)` over a semi-transparent `rgba(255, 255, 255, 0.05)` background to create a frosted glass surface. Animated floating blobs in the background are used to demonstrate the refraction effect.
  - **Pure CSS State Management**: Uses the "Radio Hack" to maintain state. Hidden `<input type="radio">` buttons track which tab is active, while the visible `<label>` elements serve as the interactive touch targets.
  - **Material Sliding Indicator**: Uses the General Sibling Combinator (`~`) to animate a shared `.tab-indicator` element. Depending on which radio button is checked, the indicator slides to the corresponding index via `transform: translateX(100%)`, etc.
  - **Material Morphing Labels**: The active tab dynamically reveals its text label (`max-height` and `opacity` transition) while shifting its icon upwards, a pattern common in Material Design bottom navigation bars.
  - **Material Easing**: Utilizes the standard Material Design transition curve (`cubic-bezier(0.4, 0.0, 0.2, 1)`) for all sliding and morphing animations to ensure authentic motion.
- Accessible semantic structure. Uses appropriate ARIA roles (`role="tablist"`, `role="tab"`) and honors the `prefers-reduced-motion` standard.

## Usage
Open `demo.html` in your browser. Click through the tabs to observe the active indicator slide into place and the tab labels smoothly morph open.

## Files
- `demo.html`: The HTML structure defining the radio hack, the labels, and the shared indicator.
- `style.css`: The styling, Glassmorphism backdrop-filters, and the `~` combinator state logic.
