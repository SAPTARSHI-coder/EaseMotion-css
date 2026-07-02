# React Component: Floating Action Button (FAB) Speed Dial Menu (#28106)

A modular, copy-paste ready React `<SpeedDial>` component that provides a floating action button which expands into a menu of secondary actions. Features staggered spring-physics entrance, cross-fading toggle icons, automatic tooltip positioning, and 4-way expansion support (up, down, left, right). Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `SpeedDial.jsx`: The React component that manages open/close state, outside-click and Escape-key dismissal, and maps through the action array.
- `style.css`: The CSS stylesheet powering the staggered `cubic-bezier` action entrance, tooltip slide-in, icon rotation/cross-fade, and flex-direction structural layout.
- `demo.html`: A self-contained demo showcasing 3 different placements and directions (`up`, `down`, `left`) with custom colors and icons — opens directly in a browser.

## 🛠 Features

- **Staggered Spring Entrance**: Secondary action buttons pop out with a `scale(0.5) → scale(1)` animation using `cubic-bezier(0.34, 1.56, 0.64, 1)`. The entrance is staggered by `45ms` per item using CSS custom property delays injected by React.
- **Icon Cross-fade Rotation**: The main FAB icon smoothly rotates and cross-fades into the close icon (`rotate(90deg)` + opacity cross-fade) to provide clear state feedback.
- **4-Way Expansion**: Supports opening `up` (default), `down`, `left`, or `right`. The flex layout and tooltip positioning automatically adjust based on the chosen direction.
- **Animated Tooltips**: Hovering a secondary action slides in a tooltip label. Tooltips intelligently position themselves (e.g. to the right when opening up/down, or below when opening left/right).
- **Dismissal Handling**: Automatically closes if an action is clicked, the `Escape` key is pressed, or the user clicks outside the component container.

## 🚀 How to use

```jsx
import SpeedDial from './SpeedDial';
import './style.css';

const actions = [
  { icon: '📋', name: 'Copy', onClick: () => console.log('Copied') },
  { icon: '🔗', name: 'Share', onClick: () => console.log('Shared') },
  { icon: '🖨️', name: 'Print', onClick: () => console.log('Printing') },
];

const MyLayout = () => (
  <div style={{ position: 'relative', height: '100vh' }}>
    {/* Page content */}
    
    <div style={{ position: 'absolute', bottom: 32, right: 32 }}>
      <SpeedDial
        actions={actions}
        direction="up"
        color="#3b82f6"
      />
    </div>
  </div>
);
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `Array<{icon, name, onClick}>` | `[]` | Array of action objects to render. |
| `mainIcon` | `ReactNode` | `<svg>` (Plus) | Custom icon for the FAB when closed. |
| `closeIcon` | `ReactNode` | `<svg>` (Cross) | Custom icon for the FAB when opened. |
| `direction` | `string` | `'up'` | Expansion direction: `'up'` \| `'down'` \| `'left'` \| `'right'` |
| `color` | `string` | `'#3b82f6'` | Background color of the main FAB |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A speed dial menu can easily feel like a clunky dropdown if the items just appear instantly. By adding a staggered `cubic-bezier(0.34, 1.56, 0.64, 1)` spring to the secondary actions, the menu feels like it is physically unfolding from the main button, dealing cards one by one. The icon cross-fade with rotation reinforces the idea that the button physically transforms its state, bridging the interaction gap smoothly.
