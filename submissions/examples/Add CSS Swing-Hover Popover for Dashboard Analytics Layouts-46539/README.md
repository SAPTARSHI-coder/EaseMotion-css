# CSS Swing-Hover Popover for Dashboard Analytics

A pure CSS animated popover component utilizing an engaging 3D "Swing" transition upon hover. Styled perfectly for modern, dark-mode Dashboard Analytics interfaces with glassmorphism elements.

## Features
- **Pure CSS State Management**: Powered by `:focus-within` and `:hover` applied to a container bounding box. This eliminates the need for JavaScript entirely, automatically dropping the panel when a user mouses over the profile button or tabs into it via keyboard.
- **EaseMotion 3D Swing Animation**: Implements the `@keyframes ease-swing-hover` sequence which leverages `rotateX` to simulate a sign dropping from a top hinge, swinging back and forth slightly before coming to a rest.
- **Dashboard Aesthetics**: Embraces dark-mode best practices. The popover features `backdrop-filter: blur` (glassmorphism) over the dark UI, paired with subtle inner borders and sleek typography to feel incredibly premium.
- **Accessibility**: Includes focus states for keyboard navigation (`tabindex="0"`, focus rings) ensuring compliance while keeping interactions strictly CSS-bound. Note that the `.ease-popover-container` explicitly requires the CSS `perspective` property for the 3D rotation to render correctly.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-swing-hover`: The class enabling the 3D swing entry transition.
- `@keyframes ease-swing-hover`: The 3D hinged rotation logic.
- `--ease-swing-duration`: Configures the speed of the 3D swing (default: `900ms`).
- `--ease-popover-offset-y`: The vertical gap below the trigger.

## Usage
Wrap your trigger (e.g., the User Profile button) and `.ease-popover-panel` within an `.ease-popover-container`. Ensure your container has `perspective: 1000px` applied so the 3D CSS `rotateX` functions smoothly.

### Quick Start
Open `demo.html` in your browser to view the beautiful Analytics Dashboard UI and hover over the user profile badge in the top right to watch the Swing-Hover popover drop down.
