# <Ease3DTiltCard> Glassmorphism Parallax React Component

## Description
A React component providing interactive 3D perspective tilting, cursor glare tracking, and glassmorphism styling utilizing EaseMotion CSS classes.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `tiltMax` | number | `15` | Maximum rotation angle in degrees |
| `className` | string | `''` | Supplementary CSS class names |

## Usage
```jsx
import Ease3DTiltCard from './Ease3DTiltCard';

export default function App() {
  return (
    <Ease3DTiltCard tiltMax={20}>
      <h2>3D Tilt Card</h2>
      <p>Hover cursor over card to observe 3D spatial tilt.</p>
    </Ease3DTiltCard>
  );
}
```
