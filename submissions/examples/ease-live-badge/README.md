# ease-live-badge

A responsive live status badge component with an animated red pulse, optional viewer count, and offline/online toggle.

## Overview

`ease-live-badge` is a lightweight example for a streaming-platform-style status badge. It shows a LIVE indicator, viewer count, and controls for increasing, decreasing, and toggling live status.

## Features

- Animated red status dot with an `ease-ping` pulse effect
- Background breathing glow on the badge container
- Responsive pill-shaped live indicator
- Viewer count formatting for `K` and `M` values
- Offline state hides viewer count and switches color palette
- Accessible status updates using `role="status"` and `aria-live="polite"`
- Keyboard-friendly controls with focus-visible styling

## Folder Structure

```
submissions/examples/ease-live-badge/
├── demo.html
├── script.js
├── style.css
└── README.md
```

## Installation

No build or package installation is required. Open `demo.html` in a browser to preview the component.

## Usage

- `Increase Viewers` increments the visible count
- `Decrease Viewers` decrements the count down to `0`
- `Toggle Live` switches between live and offline states

When live, the badge displays:

```
🔴 LIVE • 12.4K
```

When offline, it displays:

```
⚪ OFFLINE
```

## Accessibility

- The badge container uses `role="status"` and `aria-live="polite"` to announce state changes.
- Buttons are native HTML controls and support keyboard interaction.
- Focus-visible styles are included for clear keyboard navigation.

## Browser Compatibility

Works in modern browsers that support standard HTML, CSS, and JavaScript. The component uses CSS custom properties and keyframe animations for visual polish.

## Customization

- Update the viewer count initial value in `script.js` by changing `currentViewers`.
- Adjust the live/offline styling in `style.css`.
- Change the pulse animation duration or color tokens in `style.css`.
