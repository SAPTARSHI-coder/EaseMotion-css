# Neumorphic Soft Shadow Tabs

Pure HTML and Vanilla CSS implementation for issue #73557.

## Features

- Soft raised and inset shadows
- Native radio controls
- Three selectable panels
- Responsive segmented control
- Visible keyboard focus
- Reduced-motion support
- No JavaScript dependencies

## Implementation

The selected tab is represented by a checked radio input. Sibling selectors reveal the matching panel and apply the inset shadow treatment to its label.

## Accessibility

The underlying controls are native radios, allowing keyboard selection. Focus styling remains visible and motion is removed for users who request reduced motion.

## Usage

Open `demo.html` in a modern browser.
