# useMotionOrchestrator

## Props / API
| Return value | Type | Description |
|---|---|---|
| `registerNode(id, node)` | function | Ref callback — call with `(id, domNode)` per list item |
| `play(ids, keyframes)` | function | Triggers a staggered WAAPI animation across the given ids |

| Option | Type | Default | Description |
|---|---|---|---|
| `duration` | number (ms) | `400` | Per-item animation duration |
| `stagger` | number (ms) | `60` | Delay added per item index |
| `easing` | string | `cubic-bezier(...)` | WAAPI easing string |

## Usage example
```jsx
import { useMotionOrchestrator } from './useMotionOrchestrator';

function List({ items }) {
  const { registerNode, play } = useMotionOrchestrator({ stagger: 80 });

  useEffect(() => {
    play(items.map(i => i.id), [
      { opacity: 0, transform: 'translateY(12px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ]);
  }, [items]);

  return items.map(item => (
    <div key={item.id} ref={node => registerNode(item.id, node)}>
      {item.label}
    </div>
  ));
}
```

## Why is it useful?
Unlike CSS-class-remount animation (the current `<Animate>` wrapper),
this cleanly cancels and replaces in-flight animations when a list
reorders or updates mid-animation — no visual tearing. It also respects
`prefers-reduced-motion` (jumps to end state instantly) and cancels all
running animations on unmount to avoid leaks.