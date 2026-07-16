# React Split View Resizable Panel with Fluid Drag Motion

A modular, copy-paste ready React component that provides a fully resizable split-view layout. Users can drag a central divider to resize two panels. Supports both horizontal (left/right) and vertical (top/bottom) directions, touch devices, and keyboard accessibility. Built with zero external dependencies outside React and EaseMotion CSS.

## 📦 Files Included
- `SplitView.jsx`: The isolated React component containing the drag logic via `useEffect` event listeners and touch support.
- `style.css`: The stylesheet defining divider hover transitions, dot scale animations, and panel entrance keyframes.
- `demo.html`: A self-contained preview using Babel standalone, featuring a file explorer / code editor demo layout.

## 🚀 Features

- **Fluid Drag Motion**: Uses `mousemove` and `touchmove` event listeners (attached/detached via `useEffect`) for buttery-smooth 60fps dragging.
- **EaseMotion Divider**: The divider handle dots scale up using the spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)` with staggered delays.
- **Panel Entrance Animations**: Both panels fade and scale from `0.97` to `1.0` on mount with EaseMotion's spring keyframe.
- **Horizontal & Vertical**: Pass `direction="vertical"` for a top/bottom split.
- **Accessibility**: Uses `role="separator"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, keyboard focusable with a visible focus ring.
- **Touch Support**: Works on mobile via `touchmove` and `touchend`.

## 💻 Usage Example

```jsx
import SplitView from './SplitView';
import './style.css';

export default function App() {
  return (
    <div style={{ height: '500px' }}>
      <SplitView
        leftPanel={<div>Left Content</div>}
        rightPanel={<div>Right Content</div>}
        defaultSplit={40}
        minSize={15}
        maxSize={85}
        direction="horizontal"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `leftPanel` | `ReactNode` | — | Content for the left (or top) panel |
| `rightPanel` | `ReactNode` | — | Content for the right (or bottom) panel |
| `defaultSplit` | `number` | `50` | Initial split percentage (0–100) |
| `minSize` | `number` | `15` | Minimum panel size in percent |
| `maxSize` | `number` | `85` | Maximum panel size in percent |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction of the split |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about bridging the gap between raw CSS performance and interactive JavaScript logic.

The drag itself is handled in JavaScript for positional accuracy, but the *feel* of every interaction is defined in CSS. The divider lights up with a smooth color transition, the handle dots spring to life with staggered scaling, and the panels glide into existence on mount — all without animation libraries. This separation of concerns is the core EaseMotion philosophy: JS manages *state*, CSS delivers *delight*.
