# Dark Mode Avatar Component

A sleek, pure CSS avatar component designed for dark mode interfaces.

## Features
- Pure HTML and CSS implementation.
- **Dark Mode Optimized**: Uses a dark color palette with subtle borders and shadows to separate elements cleanly without overpowering contrast.
- **Status Indicators**: Bottom-right status dots indicating Online (green, glowing), Offline (gray), and Busy (red, glowing).
- **Notification Badge**: Top-right bouncing notification badge for alerts.
- **Image & Initials Support**: Fallback initial avatars with a dark gradient background if an image is not available.
- **Interactivity**: Smooth hover transformations (lifting up) with a subtle brightness bump to the image, and a slight scale up of the status indicator.
- **Accessibility**: Includes `prefers-reduced-motion` media queries to disable animations for users who prefer it.

## Usage
Open `demo.html` in your browser. Hover over the avatars to view the interactive transformations.

## Files
- `demo.html`: The HTML structure for three different avatar states (Online, Offline/Initials, Busy/Notifications).
- `style.css`: The styling, flexbox layout, CSS variables, and hover/animation effects.
