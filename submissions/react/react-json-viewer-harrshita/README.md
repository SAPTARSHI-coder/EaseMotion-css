# React JsonViewer Integration

A collapsible JSON tree component using the ARIA treeview pattern with type-distinct
rendering, cycle-safe traversal, and lazy expansion — built with EaseMotion CSS classes.

## Features
- Collapsible nodes at configurable depth
- Type-distinct colors (string, number, boolean, null)
- Keyboard accessible (ARIA treeview)
- Integrates with `prefers-reduced-motion`

## Usage

```jsx
import { JsonViewer } from './JsonViewer';

const data = { name: "EaseMotion", version: "1.2.0", tags: ["css", "animation"] };

function App() {
  return <JsonViewer data={data} title="Package Info" />;
}
```
