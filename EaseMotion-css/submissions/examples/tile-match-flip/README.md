# Tile Match Flip (#87568)

An interactive 3D memory card flip-and-match component featuring CSS perspective transforms, smooth cubic-bezier rotation transitions, and score tracking.

## Features
- **3D Flip Transitions:** Hardware-accelerated 3D card flips using CSS `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden`.
- **Interactive State Machine:** Pure JavaScript state management matching pairs, handling mismatches, and tracking total moves.
- **Responsive Grid:** Adaptive CSS Grid layout accommodating desktop and mobile viewports cleanly.
- **Accessibility:** Keyboard navigable with standard ARIA and reduced motion support.

## Usage
Include `style.css` in your project and structure cards within `.tile-grid-container`.