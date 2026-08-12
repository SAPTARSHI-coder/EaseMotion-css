# <EaseCommandPalette> Keyboard-Driven Modal React Component

## Description
A React Spotlight-style command palette search modal with backdrop blur, keyboard ESC dismissal, and action search filtering.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | boolean | `false` | Controls command palette modal visibility |
| `onClose` | function | — | Close callback handler |
| `commands` | Array<{label, action, shortcut}> | `[]` | List of searchable command items |

## Usage
```jsx
import EaseCommandPalette from './EaseCommandPalette';

export default function App() {
  const [open, setOpen] = useState(false);
  const commands = [{ label: 'Go to Dashboard', action: () => alert('Navigating...'), shortcut: '⌘D' }];
  return <EaseCommandPalette isOpen={open} onClose={() => setOpen(false)} commands={commands} />;
}
```
