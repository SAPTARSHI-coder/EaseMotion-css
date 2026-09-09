# React Component: Interactive Pricing Tier Switcher (Monthly/Annual) (ECSoC26 Edition)

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready React component for an **Interactive Pricing Tier Switcher (Monthly/Annual)** containing dynamic toggle selections, popular highlights cards, features checklist, and discount tags.

2. **How is it used?**  
   Import [PricingSwitcher.jsx](./PricingSwitcher.jsx) into your React application and pass props specifying plan data. Cycle billing durations between monthly/annual using Left/Right keyboard arrows or click toggles.
   
3. **Why is it useful?**  
   It delivers zero-dependency keyboard accessible plan switchers, clean pricing grid columns, and custom mouse spotlight variable coordinates.

---

## 📦 Installation

Copy [PricingSwitcher.jsx](./PricingSwitcher.jsx) and [PricingSwitcher.css](./PricingSwitcher.css) into your component directory. Import the component inside your React entry point:

```javascript
import PricingSwitcher from './PricingSwitcher';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import PricingSwitcher from './PricingSwitcher';

export default function App() {
  const plans = [
    {
      id: 'basic',
      name: 'Basic Edition',
      monthlyPrice: 12,
      annualDiscountPct: 15,
      features: [
        '2 Active Sites and Apps',
        'Community Forum Support',
        '5GB Dedicated SSD Storage'
      ],
      ctaText: 'Get Basic',
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth Edition',
      monthlyPrice: 35,
      annualDiscountPct: 15,
      features: [
        '10 Active Sites and Apps',
        '24/7 Email Ticket Support',
        '25GB Dedicated SSD Storage',
        'Custom Domains Integration'
      ],
      ctaText: 'Buy Growth Edition',
      popular: true
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#020617' }}>
      <PricingSwitcher
        plans={plans}
        accentColor="#2563eb"
        theme="dark"
        onPlanSelect={(plan) => console.log('Plan selected:', plan)}
      />
    </div>
  );
}
```

---

## ⌨️ Accessibility Guidelines

This switcher fully implements keyboard focus outlining and tabindexes:
- Tab to select the Monthly/Annual toggle wrapper.
- Press `ArrowLeft` or `ArrowRight` key while toggle wrapper is focused to toggle billing cycle.
- Tab key cycles focus on each plans card CTA button, supporting standard WCAG standards.

---

## ⚙ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `plans` | `array` | `[]` | Array of plan objects (id, name, monthlyPrice, annualDiscountPct, features, ctaText, popular). |
| `accentColor` | `string` | `'#3b82f6'` | Highlight theme color. |
| `theme` | `string` | `'dark'` | Visual styling theme options: `'dark' \| 'light' \| 'glass'`. |
| `onPlanSelect` | `function` | `undefined` | Callback triggered when a plan's CTA is selected. |
