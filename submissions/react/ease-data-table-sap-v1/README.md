# <EaseDataDensityTable> Animated React Data Grid

## Description
A React data grid component featuring smooth row animations and density toggling (compact/normal/spacious).

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `headers` | Array<string> | `[]` | Table column headers |
| `data` | Array<object> | `[]` | Table row object values |

## Usage
```jsx
import EaseDataDensityTable from './EaseDataDensityTable';

export default function App() {
  const headers = ['Name', 'Role', 'Status'];
  const data = [{ name: 'Alex', role: 'Dev', status: 'Active' }];
  return <EaseDataDensityTable headers={headers} data={data} />;
}
```
