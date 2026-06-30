# Infinite Seamless Marquee Component

An ultra-performant, hardware-accelerated horizontal scrolling marquee built with zero external dependencies.

## Features

- **Seamless Looping Engine:** Implements a hardware-accelerated `translate3d` animation loop across a double-track structure, preventing any visible jumps or layout breaks.
- **Pure CSS Configurations:** Controls speed adjustments on the fly using native inline CSS variables (`--em-marquee-speed`).
- **Interactive States:** Supports native motion suspension on hover using `.ease-marquee-pause-hover` utility rules.
- **Visual Enhancements:** Out-of-the-box support for linear edge gradient masks to softly fade entries and exits.

## File Structure

```text
ease-marquee/
├── demo.html    # Element sandboxing examples
├── style.css    # Core transform tracking definitions
└── README.md    # Documentation markup
```
