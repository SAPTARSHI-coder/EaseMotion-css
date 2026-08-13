# <EaseMorphingIcon> SVG Path Morphing React Component

## Description
A React component enabling smooth SVG path morphing transitions between icon states using CSS `d: path(...)` interpolation.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `isToggled` | boolean | `false` | Active state toggle |
| `onToggle` | function | — | Click callback handler |
| `pathA` | string | Menu Path | Primary SVG path |
| `pathB` | string | Close Path | Target morph SVG path |

## Usage
```jsx
import EaseMorphingIcon from './EaseMorphingIcon';

export default function App() {
  const [active, setActive] = useState(false);
  return <EaseMorphingIcon isToggled={active} onToggle={() => setActive(!active)} />;
}
```
