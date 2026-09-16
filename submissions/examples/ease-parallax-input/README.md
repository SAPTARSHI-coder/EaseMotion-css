# Parallax Input Field with Material Design Styling

## Abstract

The **Parallax Input Field** is a CSS-only interactive form component that combines 3D parallax depth effects with modern Material Design floating label dynamics. Designed for fluid responsiveness and rich tactile feedback, it transforms standard form inputs into engaging 3D spatial experiences upon user interaction without requiring any JavaScript dependencies.

## 3D Stacking Context

The 3D depth mechanism relies on CSS spatial positioning and perspective rendering:

1. **Perspective Container (`.ease-parallax-wrapper`)**: Establishes a 3D viewing viewport using `perspective: 1000px`, defining the virtual distance between the user's eye and the Z=0 plane.
2. **Preserving 3D Space (`.ease-input-group`)**: By setting `transform-style: preserve-3d`, the container creates a true 3D spatial hierarchy for all nested child elements rather than flattening them onto a single 2D plane.
3. **Multi-Layered Z-Translations (`translateZ()`)**:
   - The primary text field (`.ease-input`) is positioned at `translateZ(10px)`.
   - The label (`.ease-label`) sits at resting depth `translateZ(15px)`.
   - The Material underline (`.ease-underline`) sits at `translateZ(20px)`.
4. **Parallax Interaction on Focus (`:focus-within` and `:focus`)**:
   - On `:focus-within`, `.ease-input-group` tilts slightly with `rotateX(10deg) rotateY(-10deg) translateZ(20px)` and casts a deeper shadow.
   - Upon focus, the label translates forward to `translateZ(40px)` while scaling down and shifting upward.
   - Simultaneously, the underline expands (`scaleX(1)`) and elevates to `translateZ(30px)`.

This layered differential in Z-axis motion creates physical spatial separation, giving the illusion that the label and active underline pop out toward the screen independently from the background container.

## The :placeholder-shown Hack

To achieve a pure CSS floating label mechanism without JavaScript or React state handlers, the implementation leverages the pseudo-class `:placeholder-shown`:

- An invisible placeholder text is set on the `<input>` element (`placeholder="Email Address"`) alongside `.ease-input::placeholder { color: transparent; }`.
- When the input field is empty and unfocused, `:placeholder-shown` evaluates to `true`.
- When the user types any text into the field, the placeholder is no longer rendered, rendering `:placeholder-shown` `false`.
- The rule `.ease-input:not(:placeholder-shown) ~ .ease-label` selects the label when text is present even when the field loses focus, keeping the floating label docked above the field (`top: 0.25rem`, `font-size: 0.75rem`, `color: #38bdf8`).
- Coupled with `.ease-input:focus ~ .ease-label`, this ensures smooth, continuous floating state management natively in standard CSS.
