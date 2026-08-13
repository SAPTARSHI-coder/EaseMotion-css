# Dynamic Modal: Dark Mode

A deeply polished, JavaScript-free modal component featuring elegant glassmorphism backgrounds, snappy scale-in transitions, and a premium Dark Mode aesthetic.

## Features
- Pure CSS and HTML implementation. The opening and closing states are managed entirely through the URL hash and the `:target` pseudo-class.
- **Component Architecture & Styling Mechanics**: 
  - **The `:target` Hack**: 
    1. The modal container (`.modal-overlay`) is given a unique ID (`id="dynamic-modal"`).
    2. The trigger button is an anchor link pointing to that ID (`<a href="#dynamic-modal">`).
    3. The CSS utilizes the `:target` pseudo-class (`.modal-overlay:target`) to detect when the URL hash matches the modal's ID. When it does, it changes `opacity: 0; visibility: hidden;` to `opacity: 1; visibility: visible;`.
    4. To close the modal, the close buttons (the 'X' and the background overlay) simply link to a different or empty hash (`href="#"`), removing the `:target` state and triggering the CSS transition back to hidden.
  - **Dynamic Transitions**: 
    - The overlay fades in (`opacity: 1`) with a background blur (`backdrop-filter`).
    - The inner `.modal-content` box scales up from `0.95` and translates up from `20px` to perfectly center using a snappy `cubic-bezier(0.16, 1, 0.3, 1)` transition curve. This creates a highly dynamic, native-feeling "pop-in" effect.
- **Theming**: Configured via CSS Custom Properties. The palette features a sophisticated dark slate aesthetic with a vibrant blue accent color (`#3b82f6`). Because the component is specifically designed as a "Dark Mode" modal, the dark styling is hardcoded into the root variables rather than hidden behind a media query, ensuring the premium dark aesthetic is always visible.
- Fully accessible semantic structure. Features `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` attributes. Honors the `prefers-reduced-motion` accessibility standard by disabling the scaling and fading animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Click the "Open Settings" button. Watch the background smoothly blur while the dark mode modal snaps dynamically into place. Click the 'X' button, the "Cancel" button, or anywhere in the blurred background to close it.

## Files
- `demo.html`: The HTML structure defining the trigger links and the hidden modal overlay.
- `style.css`: The styling, the `:target` CSS state logic, the scale-in transition curves, and the dark mode glassmorphism variables.
