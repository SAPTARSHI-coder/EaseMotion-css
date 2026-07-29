# Tab Switch Animate

Animated tab switching with content crossfade and slide transitions.

## Features

- Active tab has animated underline/background indicator
- Content slides from the side on switch (translateX + opacity)
- Active indicator slides smoothly between tabs
- Multiple independent tab groups supported
- Custom properties for easy theming

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tsa-duration` | 0.35s | Transition duration |
| `--tsa-tab-color` | #64748b | Inactive tab text color |
| `--tsa-active-color` | #3b82f6 | Active tab background color |
| `--tsa-content-bg` | #ffffff | Tab content background |
| `--tsa-radius` | 8px | Border radius |

## Usage

Include `style.css` and copy the HTML structure. Each `.tab-group` is self-contained.
