# Animated Command Palette Frame — EaseMotion CSS

An interactive, fluid shell interface layout inspired by Spotlight, Raycast, and VS Code. Handles micro-interactions for input pulsing, modal fading, and list stagger transitions.

> ⚠️ **Note:** This is an animation/styling shell wrapper component. Functional string matching data engines, filtering operations, and advanced keyboard routing logic are purposefully omitted to remain framework-agnostic.

## 🛠 Features & Classes

| Class Token                      | Target Role       | Visual Behavior                                                               |
| -------------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| `.ease-palette-overlay`          | Modal Backdrop    | Manages blur animations using modern variable layer filters.                  |
| `.ease-palette-overlay-centered` | Alignment         | Locks the component viewport directly centered inside the device screen.      |
| `.ease-palette-overlay-top`      | Alignment         | Dropdown offset optimized for quick-access administrative navigation headers. |
| `.ease-palette-frame`            | Main Window       | Handles scale and fade transitions simultaneously.                            |
| `.ease-palette-input`            | Inner Core Input  | Drives subtle infinite loop box-shadow pulse loops when actively targeted.    |
| `.ease-palette-item`             | Single Result Row | Provides entry staggering using simple `:nth-child` inline timing intervals.  |
