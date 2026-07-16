# Multi-Step Onboarding Wizard with Slide Transitions

A modular, copy-paste ready React component that renders a step-by-step onboarding wizard panel. It manages indices and sliding directions tracking via state hooks, rendering slide transitions when sliding forwards or backwards through the steps collection.

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [MultiStepOnboardingWizard.jsx](./MultiStepOnboardingWizard.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import MultiStepOnboardingWizard from './MultiStepOnboardingWizard';

export default function App() {
  const stepsList = [
    {
      title: 'Welcome to EaseMotion',
      subtitle: 'Let\'s get your workspace customized.',
      renderContent: () => (
        <div>
          <p style={{ margin: '0 0 1rem 0', color: '#9ca3af', fontSize: '0.9rem' }}>
            Configure default settings to jump right in.
          </p>
          <input 
            type="text" 
            placeholder="Your Username" 
            style={{ padding: '0.6rem', width: '100%', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #1f2937', backgroundColor: '#030712', color: '#fff' }} 
          />
        </div>
      )
    },
    {
      title: 'Choose Your Tracks',
      subtitle: 'Select topics of interest.',
      renderContent: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label><input type="checkbox" /> Web Animations Design</label>
          <label><input type="checkbox" /> Component Architecture</label>
          <label><input type="checkbox" /> Devops Automations</label>
        </div>
      )
    },
    {
      title: 'Final Details',
      subtitle: 'All set to complete onboarding.',
      renderContent: () => (
        <p style={{ margin: 0, color: '#10b981', fontWeight: 600 }}>
          Everything looks perfect! Click finish to access the dashboard.
        </p>
      )
    }
  ];

  const handleComplete = () => {
    console.log('Onboarding Wizard Complete!');
  };

  const handleCancel = () => {
    console.log('Wizard Cancelled.');
  };

  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <MultiStepOnboardingWizard 
        steps={stepsList} 
        onComplete={handleComplete} 
        onCancel={handleCancel}
        accentColor="#8b5cf6" 
      />
    </div>
  );
}
```

---

## ⚙️ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `steps` | `Array` | *Required* | Array of step configurations: `[{ title, subtitle, renderContent }]`. |
| `onComplete` | `Function` | *Optional* | Callback triggered when the user clicks 'Finish' on the last step. |
| `onCancel` | `Function` | *Optional* | Callback triggered when the user clicks 'Cancel' on the first step. |
| `accentColor` | `string` | `'#8b5cf6'` | Color value used for active progress status bars. |
