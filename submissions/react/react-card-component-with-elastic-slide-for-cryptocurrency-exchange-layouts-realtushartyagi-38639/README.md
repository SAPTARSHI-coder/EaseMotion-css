# React Card Component with Elastic Slide for Cryptocurrency Exchange Layouts

A highly reusable React Card component featuring a responsive "elastic slide" interaction, specifically styled for Modern Cryptocurrency Exchange aesthetics (dark theme, crisp typography, and dynamic colored indicators).

## Files
- `CryptoCard.jsx` – The standalone React component. To avoid unnecessary files that trigger broken CI jobs on the main repository, all CSS and variables are gracefully embedded inside this component using a native `<style>` block. This guarantees a true zero-configuration import.

## Installation
1. Copy the `CryptoCard.jsx` file into your React project (e.g., `src/components/Card/`).
2. Import the component where needed:
   ```jsx
   import CryptoCard from './components/Card/CryptoCard';
   ```

## Usage
Simply drop the `CryptoCard` component into your layout and pass the desired cryptocurrency data via props. The component is fully accessible and manages its own hover/focus states to trigger the elastic slide action layer.

```jsx
import React from 'react';
import CryptoCard from './CryptoCard';

export default function Dashboard() {
  return (
    <div style={{ padding: '50px', display: 'flex', gap: '20px', background: '#0b0e11' }}>
      <CryptoCard 
        coinName="Bitcoin" 
        coinSymbol="BTC" 
        price="$64,230.00" 
        change="+2.45%" 
        isPositive={true} 
      />
      
      <CryptoCard 
        coinName="Ethereum" 
        coinSymbol="ETH" 
        price="$3,450.00" 
        change="-1.20%" 
        isPositive={false} 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `coinName` | `string` | `'Bitcoin'` | The full name of the cryptocurrency. |
| `coinSymbol` | `string` | `'BTC'` | The trading ticker symbol. |
| `price` | `string` | `'$64,230.00'` | The current fiat price formatted as a string. |
| `change` | `string` | `'+2.45%'` | The 24-hour percentage change. |
| `isPositive` | `boolean`| `true` | Toggles the color of the change indicator (Green for true, Red for false). |

## Why it fits EaseMotion CSS
This component embodies the EaseMotion philosophy by providing developers with an instant, premium micro-interaction without relying on heavy JavaScript animation libraries. By leveraging raw CSS transitions configured with an exact `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve, the component achieves a physical, snappy "Elastic Slide" effect. When the user hovers or focuses the card, the main content slightly shifts upward while an action layer seamlessly bounces in from the bottom.

---

> **Note:** PR modifies only files inside `submissions/react/react-card-component-with-elastic-slide-for-cryptocurrency-exchange-layouts-realtushartyagi-38639/`.
