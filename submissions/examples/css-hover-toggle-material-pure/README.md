# Hover Toggle: Material Design

A unique, JavaScript-free toggle switch that activates purely on hover, featuring strict adherence to Google's Material Design 3 (MD3) styling, elevation, and motion systems.

## Features
- Pure CSS and HTML implementation. No JavaScript or even a `<input type="checkbox">` is required, as the state is entirely driven by the CSS `:hover` pseudo-class.
- **Component Architecture & Styling Mechanics**: 
  - **Material 3 Specifications**: The toggle adheres to MD3 sizing and color tokens. The track uses a thick outline (`--outline: #79747e`) and a small thumb (`16px`) when off. When activated (hovered), the outline disappears, the background fills with the primary color (`--primary: #6750a4`), and the thumb expands to `24px` while sliding to the right.
  - **State Layers (Ripples)**: Material Design relies heavily on "State Layers" for tactile feedback. This is implemented via a `.state-layer` div nested inside the thumb. On `:focus-visible`, it becomes slightly opaque (`0.12`). On `:hover`, it provides a subtle primary-colored halo (`0.08 opacity`). On `:active` (click), it darkens, mimicking the classic Material ripple.
  - **Hover-Driven Activation**: Instead of binding the `checked` state to a hidden checkbox, the `.material-hover-toggle:hover` selector directly transforms the `.toggle-track` and `.toggle-thumb`, making the interaction instant and fluid.
  - **Tactile Morphing**: When the user clicks the toggle (`:active`), the thumb morphs slightly larger (`28px`), providing physical feedback. The CSS `calc()` function dynamically adjusts the `transform: translateX` value to ensure the thumb remains perfectly aligned with the track boundary during this stretch.
- **Motion System**: Utilizes the official MD3 easing curve (`cubic-bezier(0.2, 0.0, 0, 1.0)`) and duration tokens (`150ms` for state layers, `250ms` for structural changes) to guarantee an authentic Material feel.
- Fully accessible semantic structure. The wrapper uses `role="switch"` and `tabindex="0"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the morphing and sliding animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Move your mouse cursor over the toggle wrapper. You will instantly see the switch slide to the "On" position, expanding the thumb and filling the track with the primary color. Click down on the toggle to see the thumb stretch and the state layer (ripple) darken.

## Files
- `demo.html`: The HTML structure defining the semantic wrapper, the track, the thumb, and the nested `.state-layer`.
- `style.css`: The styling, the Material Design 3 color and motion tokens, and the `:hover` driven interaction logic.
