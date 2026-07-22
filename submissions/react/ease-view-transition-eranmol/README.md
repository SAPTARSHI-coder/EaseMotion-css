# useViewTransition

A lightweight React hook that wraps the native View Transitions API (`document.startViewTransition`) to enable smooth page-to-page morphing without external routing animation libraries. Falls back gracefully when the browser lacks support.

## Props / Options

| Option | Type | Default | Description |
|---|---|---|---|
| `duration` | number (ms) | `300` | Transition duration injected into CSS custom property `--vt-duration` |
| `easing` | string | `'ease'` | CSS timing function injected into `--vt-easing` |
| `onReady` | function | — | Callback fired after the transition pseudo-element is created |

## Return Values

| Value | Type | Description |
|---|---|---|
| `startTransition(updateFn)` | function | Wraps any state update in `document.startViewTransition`. Falls back to a plain `updateFn()` call if unsupported. |
| `supported` | boolean | Whether the current browser supports `document.startViewTransition`. |

## Usage Example

```jsx
import { useState } from 'react';
import { useViewTransition } from './useViewTransition';
import './style.css';

const items = [
  { id: 1, title: 'Apple',   detail: 'A crisp red apple' },
  { id: 2, title: 'Banana',  detail: 'A ripe yellow banana' },
  { id: 3, title: 'Cherry',  detail: 'A sweet dark cherry' },
];

function App() {
  const [selected, setSelected] = useState(null);
  const { startTransition } = useViewTransition({ duration: 300, easing: 'ease' });

  const selectItem = (item) => {
    startTransition(() => setSelected(item));
  };

  return (
    <div>
      {!selected ? (
        <ul>
          {items.map(item => (
            <li key={item.id} onClick={() => selectItem(item)}
                style={{ viewTransitionName: 'morph' }}>
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ viewTransitionName: 'morph' }}
             onClick={() => startTransition(() => setSelected(null))}>
          <h2>{selected.title}</h2>
          <p>{selected.detail}</p>
          <button>← Back</button>
        </div>
      )}
    </div>
  );
}
```

## CSS Companion

The accompanying `style.css` defines three named view-transition classes you can use via `style={{ viewTransitionName: 'morph' }}` (or `'slide'` or `'fade'`). Durations and easings are driven by the `--vt-duration` and `--vt-easing` CSS custom properties set automatically by the hook.

## Why is it useful?

Smoothly transitioning between views in React normally requires heavy routing-animation libraries. This hook taps into the browser-native View Transitions API, giving you a single function call to trigger a morph/crossfade between any two DOM states — zero dependencies, respects `prefers-reduced-motion`, and degrades gracefully on unsupported browsers.
