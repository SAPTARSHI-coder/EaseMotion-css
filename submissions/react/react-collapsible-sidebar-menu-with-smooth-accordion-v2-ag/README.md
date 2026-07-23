# Collapsible Sidebar Menu with Smooth Accordion (React Component)

A highly robust, responsive React sidebar component designed for administrative dashboards. It features a complete collapsible state mechanism combined with buttery-smooth accordion menus utilizing React `useRef` for precise height calculations.

## Features
- **Collapsible State:** Sidebar can toggle between expanded (280px) and collapsed (80px) states while cleanly handling text truncations and opacity fades.
- **Smooth Accordion Calculation:** Utilizes React's `useRef` to read DOM scroll heights and dynamically transition max-height/height, providing flawless sliding animations without hard-coded CSS values.
- **EaseMotion Integration:** Embraces EaseMotion classes for entrance (`ease-slide-in-left`), interactive hovers (`ease-hover-lift`, `ease-hover-glow`), and staggered accordion child entrances (`ease-slide-right`).
- **Zero External Dependencies:** Built with pure React hooks (`useState`, `useRef`, `useEffect`) and standard CSS variables/transitions.

## Installation

1. Copy `CollapsibleSidebar.jsx` into your components directory.
2. Copy `style.css` (or merge its contents into your layout stylesheet).
3. Provide the `menuItems` configuration array as a prop.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | Array | `[]` | Array of accordion menu configurations. |
| `logo` | String | `"Brand"` | Text logo shown at the top of the sidebar. |
| `defaultOpenIndex` | Number | `0` | The index of the accordion item that should be open by default. |

### Menu Item Schema
```js
{
  title: String,      // e.g. "Dashboard"
  icon: ReactNode,    // e.g. "📊" or <SvgIcon />
  subItems: [
    { label: String, href: String }
  ]
}
```

## Usage Example

```jsx
import React from 'react';
import CollapsibleSidebar from './CollapsibleSidebar';

const mockMenuItems = [
  {
    title: 'Analytics',
    icon: '📊',
    subItems: [
      { label: 'Overview', href: '/overview' },
      { label: 'Real-time', href: '/realtime' },
      { label: 'Reports', href: '/reports' }
    ]
  },
  {
    title: 'Customers',
    icon: '👥',
    subItems: [
      { label: 'List', href: '/customers' },
      { label: 'Segments', href: '/segments' }
    ]
  },
  {
    title: 'Settings',
    icon: '⚙️',
    subItems: [
      { label: 'Profile', href: '/profile' },
      { label: 'Billing', href: '/billing' },
      { label: 'Security', href: '/security' }
    ]
  }
];

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f3f4f6' }}>
      <CollapsibleSidebar menuItems={mockMenuItems} logo="NexusApp" />
      
      <main style={{ flex: 1, padding: '40px' }}>
        <h1>Main Dashboard Content</h1>
        <p>The sidebar is fully interactive. Try collapsing it or opening sub-menus.</p>
      </main>
    </div>
  );
}

export default App;
```
