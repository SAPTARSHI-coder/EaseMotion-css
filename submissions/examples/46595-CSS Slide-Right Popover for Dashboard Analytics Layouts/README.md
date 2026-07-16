# CSS Slide-Right Popover for Dashboard Analytics

A premium, JavaScript-free animated popover component tailored for Dashboard and Analytics interface aesthetics. This component utilizes pure CSS to handle state management, transitions, and layout, creating a fully accessible and responsive user experience.

## Features
- **Pure CSS (No JS)**: State is managed natively via CSS pseudo-classes (`:focus-within` and `:hover`), eliminating the need for JavaScript event listeners.
- **EaseMotion Animations**: Built with custom `ease-*` CSS variables, implementing a smooth, bouncy `slide-right` entry transition for a high-quality feel.
- **Glassmorphism Aesthetic**: Uses modern UI trends such as backdrop blur, semi-transparent backgrounds, and subtle glowing borders that complement a dark-mode analytics dashboard.
- **Fully Accessible**: Tabbing onto the container natively triggers the popover to open. Keyboard users can seamlessly tab through internal elements within the popover.
- **Responsive**: Adapts effectively to varying screen sizes, ensuring the popover doesn't break horizontal layouts on mobile devices.

## EaseMotion Classes & Variables Used
- `.ease-popover-panel.ease-slide-right`: The core class responsible for applying the entry and exit transitions.
- `--ease-timing-bounce`: A predefined cubic-bezier variable ensuring a slightly bouncy arrival.
- `--ease-duration-normal`: Global timing variable for consistency (300ms).
- `--ease-popover-offset-x`, `--ease-popover-offset-y`, `--ease-popover-scale`: Exposes specific spatial values, allowing developers to easily tune the starting parameters without diving into the CSS transform logic.

## Usage
Simply drop the `.ease-popover-container` markup into your dashboard header or any interactive section. Tweak the exposed CSS variables in `:root` to adjust timings and layout offsets.

### Quick Start
Open `demo.html` in your browser to view the interactive dashboard layout and test the slide-right popover.
