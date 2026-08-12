# Pure CSS Scroll-Snapping Image Carousel

A highly performant, fully responsive horizontal image carousel built entirely without JavaScript, fulfilling Issue #72166.

## Features
- **Native Scroll Snapping**: Uses `scroll-snap-type` and `scroll-snap-align` for perfectly smooth, native snapping behavior.
- **Hardware Accelerated**: Leverages native browser scrolling mechanics rather than heavy JS-based tweening.
- **Hidden Scrollbars**: Provides a clean aesthetic by hiding default scrollbars across all major browsers (`::-webkit-scrollbar { display: none; }`, `scrollbar-width: none;`).
- **Interactive Hover Effects**: Includes smooth CSS scaling transitions (`transform: scale()`) and brightness filters on hover to highlight the active/focused item.
- **Responsive Design**: Adapts `flex-basis` via media queries to show partial adjacent items, intuitively hinting at further scrollable content.

## Implementation Structure
- `.ease-carousel`: The wrapper defining the component constraints.
- `.ease-carousel-container`: The horizontally scrolling flex container with snapping enabled.
- `.ease-carousel-item`: The individual snap items that perfectly center on scroll stop.

## Usage
Open `demo.html` in your browser to see the smooth scroll-snapping carousel in action! You can easily swipe on touch devices, use trackpad gestures, or use mouse wheels to navigate seamlessly.
