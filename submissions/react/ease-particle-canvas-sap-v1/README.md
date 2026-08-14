# <EaseParticleCanvas> Zero-Dependency Canvas React Component

## Description
A zero-dependency HTML5 canvas React component rendering lightweight ambient floating particles.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `particleCount` | number | `40` | Total number of canvas particles |

## Usage
```jsx
import EaseParticleCanvas from './EaseParticleCanvas';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <EaseParticleCanvas particleCount={50} />
    </div>
  );
}
```
