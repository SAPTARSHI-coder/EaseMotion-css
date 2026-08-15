# Character Counter (#86863)

An interactive textarea component featuring a real-time dynamic character counter with smooth progress ring indication and color-coded threshold alerts (neutral, amber warning, and red limit).

## Features
- **Dynamic Threshold Accents:** Automatically transitions from neutral slate to warning amber (80%+) and critical rose (100%).
- **SVG Circular Indicator:** Animated stroke-dashoffset progress circle displaying relative text fill.
- **Shake Physics:** Subtle boundary shake animation on exceeding maximum character thresholds.
- **Accessibility:** Semantic ARIA live region support for screen readers and reduced motion compatibility.

## Usage
Include `style.css` in your project and structure your textarea container using `.counter-textarea-group`.