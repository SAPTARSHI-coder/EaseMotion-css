# Split View Resizable Panel with Fluid Drag Motion

A two-pane resizable split view component with a draggable divider that fluidly resizes both panes as the user drags, with an animated grip handle that responds on hover and active drag.

## Props

| Prop           | Type              | Default        | Description                                       |
|----------------|-------------------|----------------|-----------------------------------------------------|
| `left`         | ReactNode         | —              | Content rendered in the left/top pane                |
| `right`        | ReactNode         | —              | Content rendered in the right/bottom pane             |
| `defaultSplit` | number            | `50`           | Initial split percentage (0-100)                      |
| `minSize`      | number            | `15`           | Minimum percentage size for either pane                |
| `maxSize`      | number            | `85`           | Maximum percentage size for either pane                |
| `direction`    | `'horizontal'` \| `'vertical'` | `'horizontal'` | Split orientation |

## Installation

Copy `SplitViewPanel.jsx` and `style.css` into your project. No external dependencies beyond React.

## Usage

```jsx
import SplitViewPanel from './SplitViewPanel';

<SplitViewPanel
  left={<div>Left content</div>}
  right={<div>Right content</div>}
  defaultSplit={50}
/>
```

## Behavior

- Drag the divider to resize both panes in real time using pointer events (`pointerdown`/`pointermove`/`pointerup`), so it works with mouse and touch.
- The divider grip animates with a spring-style scale on hover and active drag.
- Resizing is clamped between `minSize` and `maxSize` so neither pane can be dragged to zero.
- Supports both horizontal and vertical split orientations via the `direction` prop.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and the framework's spring-style `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve on the divider grip, consistent with existing submissions. Zero dependencies beyond React.
