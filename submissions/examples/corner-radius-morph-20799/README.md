# Organic Corner Radius Morphing

## Description
This component utilizes the CSS Houdini `@property` API to enable smooth, independent animation of each corner radius on an element. This creates fluid, organic "blob" shapes that respond to user interaction.

## Technical Implementation
- **@property:** Registered custom properties allow browser-native interpolation of length values.
- **Performance:** Animations are handled via the compositor thread, ensuring high performance.
- **Compatibility:** Requires modern browser support for Houdini CSS properties.

## How to use
1. Register the custom properties in your CSS.
2. Link them to the `border-radius` shorthand.
3. Update the variable values on hover or state change.
