# React Context-Aware Spotlight Component (ease-spotlight-viidhii19)

A premium physics-based spotlight grid component that tracks global mouse movement and reveals a glowing border and inner glow on cards near the cursor. It utilizes native React context and CSS `mask-image` variables to achieve a modern aesthetic without JavaScript layout thrashing.

## Usage

```jsx
import { SpotlightProvider, SpotlightCard } from './Spotlight';

function App() {
  return (
    <SpotlightProvider className="grid grid-cols-3 gap-6">
      <SpotlightCard>
        <h2>Card 1</h2>
        <p>Premium card content</p>
      </SpotlightCard>
      
      <SpotlightCard>
        <h2>Card 2</h2>
        <p>Premium card content</p>
      </SpotlightCard>
      
      <SpotlightCard>
        <h2>Card 3</h2>
        <p>Premium card content</p>
      </SpotlightCard>
    </SpotlightProvider>
  );
}
```

## Props

### `SpotlightProvider`
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | The cards inside the provider |
| `className` | `string` | `""` | Optional CSS classes for the provider wrapper |

### `SpotlightCard`
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Content of the card |
| `className` | `string` | `""` | Optional CSS classes for the card wrapper |

## Why it is useful

This component perfectly aligns with EaseMotion's physics-based interaction philosophy by providing a hardware-accelerated, dynamic UI feedback mechanism that relies heavily on modern CSS (`mask-image`, `radial-gradient`, and CSS Custom Properties) while using minimal React orchestration for state.
