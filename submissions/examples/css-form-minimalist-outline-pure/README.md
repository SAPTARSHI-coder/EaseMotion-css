# CSS Form: Minimalist Outline

A highly polished, JavaScript-free form layout featuring elegant floating labels and smoothly expanding focus borders.

## Features
- Pure CSS and HTML implementation. The complex state interactions (floating the label when text is entered) are achieved entirely using modern CSS pseudo-classes.
- **Component Architecture & Styling Mechanics**: 
  - **The `:placeholder-shown` Hack**: The key to floating labels without JS is the `placeholder-shown` pseudo-class. 
    1. The `<input>` is given a placeholder of a single space (`" "`).
    2. By default, the placeholder is shown, meaning the input is empty. The `<label>` sits over the input.
    3. When the user types something, the placeholder is hidden.
    4. We use the CSS selector `.outline-input:not(:placeholder-shown) ~ .outline-label` to detect that the input has content, and apply the `transform: translateY(-26px) scale(0.85)` rule to float the label up permanently.
    5. We also apply this float when the input is focused (`:focus`), ensuring the label moves out of the way before the user starts typing.
  - **Animated Focus Border**: The bottom border expansion is handled by a `.outline-border::after` pseudo-element. On `:focus` of the sibling input, this absolute pseudo-element expands its width from `0` to `100%` and transitions its `left` property from `50%` to `0`, creating a smooth center-out drawing effect.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a stark, high-contrast monochrome aesthetic typical of modern minimalist interfaces. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Standard `<form>`, `<input>`, `<textarea>`, and `<label for="...">` tags ensure perfect screen reader compatibility. Honors the `prefers-reduced-motion` accessibility standard by disabling the floating and border animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Click into an input field to see the label gracefully float upwards and scale down, while a crisp black border animates from the center outwards along the bottom edge. Type some text and click away to see the label remain in its floating state, held there by the `:not(:placeholder-shown)` CSS logic.

## Files
- `demo.html`: The HTML structure defining the form groups, ensuring the `<label>` follows the `<input>` so the sibling combinator (`~`) works.
- `style.css`: The styling, the `:placeholder-shown` logic, the focus transitions, and the dark mode adjustments.
