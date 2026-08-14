# Feature Matrix Grid with Animated Hover Glow

A modular, copy-paste ready React component that renders a feature comparison matrix grid. It leverages React hooks to track mouse coordinate positions dynamically, creating a beautiful radial hover glow spotlight backing standard EaseMotion float behaviors.

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [FeatureMatrixGrid.jsx](./FeatureMatrixGrid.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import FeatureMatrixGrid from './FeatureMatrixGrid';

const featuresData = [
  {
    id: 1,
    title: 'Spring Timings Engine',
    desc: 'Bouncy, natural physics animations mapped to cubic curves.',
    tag: 'Core System',
    icon: '⚡',
    metrics: '99% Speed Lift'
  },
  {
    id: 2,
    title: 'Responsive Flex Grid',
    desc: 'Align animated items effortlessly using grid layouts.',
    tag: 'Layout',
    icon: '⊞',
    metrics: '0px Layout Shifts'
  },
  {
    id: 3,
    title: 'RTL Logical Support',
    desc: 'Swap slide offsets directions automatically based on document reading flows.',
    tag: 'i18n Ready',
    icon: '🌐',
    metrics: '100% RTL Compliant'
  }
];

export default function App() {
  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh' }}>
      <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Product Capabilities Matrix</h2>
      
      <FeatureMatrixGrid 
        features={featuresData} 
        columns={3} 
        glowColor="rgba(139, 92, 246, 0.18)" 
      />
    </div>
  );
}
```

---

## ⚙️ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `features` | `Array` | `[]` | Array of objects representing the feature items. |
| `columns` | `number` | `3` | Columns count to render in the grid (options: 1, 2, 3, 4). |
| `glowColor` | `string` | `'rgba(139, 92, 246, 0.15)'` | Custom CSS color for the radial hover glow background. |
| `animateOnLoad` | `boolean` | `true` | Appends entrance animations on render. |
