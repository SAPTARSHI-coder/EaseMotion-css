# CSS Animated Thermometer

A hardware-accelerated, JavaScript-free animated thermometer component that automatically fills to a target temperature on page load.

## Features
- Pure CSS and HTML implementation. The animation logic relies entirely on CSS `@keyframes` and custom properties (CSS variables).
- **Component Architecture**: 
  - **Dynamic Fill Target**: The target temperature fill percentage is controlled via a CSS Custom Property (`--target-temp: 75%;`). This allows easy overriding via inline styles (`style="--target-temp: 42%;"`) if the value is coming from a backend or frontend framework.
  - **Load Animation**: The `.liquid-fill` element uses an `@keyframes` animation (`fill-thermometer`) that transitions its `height` from `0%` to `var(--target-temp)`. It utilizes a physical overshoot `cubic-bezier` timing function to make the mercury "bounce" slightly as it reaches its final value.
  - **3D Glass Construction**: The thermometer tube (`.thermometer-glass`) uses multiple layered `inset` box-shadows to create a curved, volumetric glass effect.
  - **Volumetric Bulb**: The bottom bulb (`.thermometer-bulb`) uses a `radial-gradient` and negative margin to seamlessly overlap the bottom of the tube. An absolute-positioned `.bulb-reflection` element with a `blur()` filter enhances the 3D spherical illusion.
- **Theming**: Configured via CSS Custom Properties. Supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. The main widget uses `role="progressbar"` with standard `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes for screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the load animation and instantly jumping to the target value if reduced motion is requested by the OS.

## Usage
Open `demo.html` in your browser. Upon loading, watch the red mercury liquid smoothly rise up the glass tube, slightly overshoot, and settle at the 75% mark, followed by the text value fading in.

## Files
- `demo.html`: The HTML structure defining the ARIA progressbar, the glass tube, the scale markings, and the overlapping bulb.
- `style.css`: The styling, the 3D box-shadow and radial gradient techniques, and the `@keyframes` animation driving the liquid height fill logic.
