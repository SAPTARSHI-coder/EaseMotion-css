# CSS Slide-up Full Modal

A hardware-accelerated, JavaScript-free full-screen modal that elegantly slides up from the bottom of the viewport when triggered.

## Features
- Pure CSS and HTML implementation. The entire modal state management relies on the Checkbox Hack (`:checked ~`), completely eliminating the need for JavaScript event listeners or state management libraries.
- **Component Architecture**: 
  - **The Checkbox Trigger**: An invisible `<input type="checkbox" id="modal-trigger">` is placed at the root of the document. `<label>` elements acting as buttons (Open, Close, Cancel, Save) are tied to this ID, allowing clicks on them to toggle the checkbox state.
  - **The Slide-up Physics**: The modal container (`.modal-container`) sits fixed relative to the viewport. By default, it is hidden via `transform: translateY(100%)`, pushing it entirely off the bottom of the screen. When the checkbox is checked, the CSS sibling selector `.modal-checkbox:checked ~ .full-modal .modal-container` changes the transform to `translateY(0)`, causing it to slide up into view.
  - **Background Dimming**: Simultaneously, the `.modal-backdrop` fades in from `opacity: 0` to `opacity: 1`. Additionally, the main `.page-content` gets a slight `filter: blur(4px) brightness(0.9)` applied for a premium depth-of-field effect.
  - **Visibility Handling**: To ensure the hidden modal doesn't block clicks on the main page, `.full-modal` uses `pointer-events: none` and `visibility: hidden` by default, toggling to `auto` and `visible` when opened. This is superior to `display: none` because it allows the CSS `transition` animations to run smoothly.
- **Theming**: Configured via CSS Custom Properties. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. The modal container uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`. Honors the `prefers-reduced-motion` accessibility standard by disabling the slide and blur transitions if requested by the OS. On mobile screens (max-width 600px), the modal expands to `100vh` and removes border radius for a true full-screen app-like experience.

## Usage
Open `demo.html` in your browser. Click the "Open Full Screen Modal" button. Watch the background page blur and the modal elegantly slide up from the bottom. Click the "X" icon, the "Cancel", or the "Save Changes" button to slide it back down. All of this state is handled entirely by the CSS engine.

## Files
- `demo.html`: The HTML structure defining the root checkbox, the trigger labels, and the modal dialog markup.
- `style.css`: The styling, the `transform: translateY()` mechanics, the background blur effects, and the `:checked ~` state management logic.
