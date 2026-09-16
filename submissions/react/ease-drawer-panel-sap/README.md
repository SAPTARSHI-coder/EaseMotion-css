# <EaseDrawerPanel> Touch-Swipeable Sheet React Component

## Description
A React drawer component providing slide-out drawer panels with backdrop blur and touch swipe dismissal support.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | boolean | `false` | Controls drawer visibility state |
| `onClose` | function | — | Callback fired on backdrop click or close button |
| `position` | string | `'right'` | Drawer slide origin (`right`, `left`, `bottom`) |

## Usage
```jsx
import EaseDrawerPanel from './EaseDrawerPanel';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <EaseDrawerPanel isOpen={open} onClose={() => setOpen(false)}>
      <h2>Drawer Content</h2>
    </EaseDrawerPanel>
  );
}
```
