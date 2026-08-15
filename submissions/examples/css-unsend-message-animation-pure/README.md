# CSS Unsend Message Animation

A hardware-accelerated, JavaScript-free animation demonstrating a message bubble that shrivels up and smoothly collapses its space when "unsent".

## Features
- Pure CSS and HTML implementation. The entire interaction and state management relies on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript.
- **Component Architecture**: 
  - **The Checkbox Hack Mechanics**: A hidden `<input type="checkbox">` sits inside the message row. The "Delete" button that appears on hover is actually a `<label>` linked to this checkbox. When clicked, it toggles the `:checked` state, triggering the unsend animation sequence via CSS sibling selectors (`~`).
  - **Shrivel Animation Phase 1**: When the checkbox is activated, the `.bubble` element instantly begins to shrink (`transform: scale(0)`), blur (`filter: blur(10px)`), and fade out (`opacity: 0`). The `transform-origin: right center` ensures it shrinks towards the sender's side of the screen.
  - **Space Collapse Phase 2**: To prevent a jarring layout jump, the outer `.message-wrapper` uses a delayed transition (`transition: max-height 0.4s ease 0.3s`). It waits `0.3s` for the bubble to finish shriveling, and *then* animates its `max-height` down to `0`. This causes subsequent messages in the chat feed to smoothly slide up and fill the empty space.
- **Theming**: Configured via CSS Custom Properties. Styled to resemble modern chat applications (like iMessage or Messenger). Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, all scaling, blurring, and collapsing transitions are disabled, instantly removing the message instead.

## Usage
Open `demo.html` in your browser. Hover over the blue sent message ("Yeah, I just sent it over to you.") to reveal the red delete button. Click the delete button. Watch as the blue bubble shrivels away and disappears, followed smoothly by the message below it sliding up to close the gap.

## Files
- `demo.html`: The HTML structure defining the chat interface, the checkbox hack, and the nested message wrappers.
- `style.css`: The styling, the hover state reveals, the staggered transitions, and the `max-height` collapse logic.
