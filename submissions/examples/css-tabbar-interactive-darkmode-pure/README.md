# Interactive Tab Bar (Dark Mode)

A premium, highly interactive pure CSS mobile tab navigation bar tailored specifically for modern dark mode applications.

## Features
- **Floating Pill Architecture**: The tab bar is detached from the bottom edge of the screen with rounded corners, creating a modern, "floating" UI aesthetic.
- **Pure CSS State Engine**: Employs the hidden `<input type="radio">` pattern alongside the `~` sibling selector to drive complex animations without relying on Javascript.
- **Dynamic Pill Indicator**: Uses a transparent blue background pill (`rgba`) that smoothly slides behind the active tab using a custom `cubic-bezier` spring transition.
- **Active Tab Micro-interactions**: When a tab is selected, the icon smoothly translates upwards (`translateY`) and plays a custom `@keyframes` pop animation, while the label text fades in and slides up from below.
- **Notification Badging**: Includes a pre-styled CSS notification badge structure nested securely relative to the tab icon.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Inter` font is loaded via your `<head>`. The layout is designed to sit inside a mobile app wrapper; the active indicator pill math dynamically adjusts based on the `--tab-count` CSS variable defined in the `:root`.
