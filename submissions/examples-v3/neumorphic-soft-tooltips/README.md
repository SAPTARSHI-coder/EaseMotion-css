# Pure CSS Neumorphic Swing-Hover Tooltip

A lightweight, high-performance CSS tooltip engineered specifically to blend seamlessly into Neumorphic Soft UI design aesthetics, using soft structural shadows instead of borders.

## Features
- **Pure CSS Execution:** Runs hardware-accelerated transitions smoothly with no JavaScript overhead.
- **Soft UI Optimization:** Leverages light and dark drop shadows mapped to an ambient top-left light source.
- **Swing Easing:** Uses a customized `cubic-bezier` trajectory to emulate a physical pendulum swing when revealed.
- **Full Keyboard Accessibility:** Activates seamlessly on hover or when elements receive focus through standard interactive elements.

## Customizable Configuration Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `--tooltip-bg` | Color matching your neumorphic background canvas | `#e0e8f6` |
| `--tooltip-duration` | Velocity duration of the swing reveal | `0.45s` |
| `--tooltip-swing-angle` | Initial angular skew for the entry animation | `12deg` |
| `--tooltip-scale-start` | Pop scale factor at initialization | `0.8` |