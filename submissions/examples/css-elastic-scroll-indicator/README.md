# CSS Elastic Scroll Indicator (#70976)

Elastic overscroll boundary indicators for scrollable lists built entirely with pure CSS.

## Features
- **Elastic Overscroll Containment:** Uses `overscroll-behavior-y: contain` for native smooth edge resistance.
- **Top & Bottom Indicators:** Styled boundary glow overlays highlighting list limits during scroll boundaries.
- **Pure CSS Solution:** Zero JavaScript required for layout, positioning, or scroll containment.
- **Accessible & Responsive:** Screen reader accessible container with proper `role="region"` and keyboard focus support (`tabindex="0"`).

## Structure
- `style.css` - Component variables, overscroll styling, list layout, and edge indicator styling.
- `demo.html` - HTML page demonstrating list items enclosed within top/bottom elastic indicators.
