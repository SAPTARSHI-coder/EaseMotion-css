# useEaseStagger Hook

Related issue: #51878

## What does this do?

A React hook that generates stagger delay class names and inline style maps for a list of `count` items. When `prefers-reduced-motion: reduce` is active, all delays return as zero so animations can be skipped safely.

## How is it used?

```jsx
import useEaseStagger from './useEaseStagger';
import './style.css';

function CardList({ items }) {
  const stagger = useEaseStagger(items.length, 80);

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`card reveal-item ${stagger.classNames[index]}`}
          style={stagger.styleMaps[index]}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
```

### API

```js
const result = useEaseStagger(count, baseDelay);
```

| Property | Type | Description |
|----------|------|-------------|
| `classNames` | `string[]` | EaseMotion-style delay classes (`ease-delay-80`, …) |
| `styleMaps` | `object[]` | `{ animationDelay, transitionDelay }` in ms |
| `delays` | `number[]` | Raw delay values (all `0` when reduced motion) |
| `prefersReducedMotion` | `boolean` | Current media-query match |

### With StaggerDemo

```jsx
import StaggerDemo from './StaggerDemo';

export default function App() {
  return <StaggerDemo itemCount={6} baseDelay={100} />;
}
```

## Why is it useful?

Lists, grids, and menus often need index-based delays. Centralizing stagger math in a hook keeps components declarative, respects accessibility preferences, and aligns generated class names with EaseMotion conventions.

## Accessibility

- Hook reads `prefers-reduced-motion` via `matchMedia` and returns zero delays when matched.
- Listens for live preference changes and updates stagger output.
- Pair with CSS that disables motion under the same media query.

## Files

```
submissions/react/feature-use-ease-stagger-hook-sum/
├── useEaseStagger.js
├── StaggerDemo.jsx
├── style.css
└── README.md
```
