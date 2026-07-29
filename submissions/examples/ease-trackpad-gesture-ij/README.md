# Trackpad Gesture

A visual trackpad component that demonstrates touch gestures (swipe, pinch, zoom, rotate) with animated hand/finger, feedback ripple, and descriptive text.

**Directory:** `ease-trackpad-gesture-ij`

## Features
- Animated hand/finger SVG showing each gesture
- Translate + scale keyframe animations per gesture type
- Color-coded feedback badge
- Gesture selection buttons
- Grid overlay on virtual trackpad

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--trg-duration` | `0.3s` | Animation duration |
| `--trg-trackpad-bg` | `#1e293b` | Trackpad background |
| `--trg-gesture-color` | `#3b82f6` | Gesture active color |
| `--trg-feedback-color` | `#3b82f6` | Feedback badge color |
| `--trg-radius` | `16px` | Border radius |

## Usage
Open `demo.html` in a browser. Click a gesture button to see the animated hand perform the gesture on the virtual trackpad.
