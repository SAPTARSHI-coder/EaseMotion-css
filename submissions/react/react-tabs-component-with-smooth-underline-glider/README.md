# 🧭 Tabs Component with Smooth Underline Glider

A modular, copy-paste ready React tabs component for the **EaseMotion CSS React Track**. Features an animated underline that smoothly glides between tabs on selection, using a spring-style easing curve consistent with EaseMotion's motion language.

---

## Features
- Zero external dependencies — plain React + CSS.
- Smooth gliding underline, measured via refs and animated with `transform: translateX`.
- Spring-style `cubic-bezier(0.34, 1.56, 0.64, 1)` easing to match EaseMotion's motion feel.
- Accessible — uses `role="tablist"`, `role="tab"`, and `aria-selected`.

---

## Props Reference

| Prop | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `tabs` | `Array<{ label: string, value: string }>` | List of tabs to render. | `[]` |
| `defaultActive` | `string` | Value of the tab active on initial render. | First tab's value |
| `onChange` | `(value: string) => void` | Called with the new active tab's value on click. | `undefined` |

---

## Usage Example

```jsx
import React from 'react';
import TabsUnderlineGlider from './submissions/react/react-tabs-component-with-smooth-underline-glider/TabsUnderlineGlider';

function App() {
  const tabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Features', value: 'features' },
    { label: 'Pricing', value: 'pricing' },
  ];

  return (
    <TabsUnderlineGlider
      tabs={tabs}
      defaultActive="overview"
      onChange={(value) => console.log('Active tab:', value)}
    />
  );
}

export default App;
```

---

## Notes
- Zero console errors on render; tested locally with React 18.
- No changes made to `core/` or `components/` — isolated submission only.
- See `demo.html` for a standalone browser preview (uses React UMD builds + Babel standalone, no build step required).