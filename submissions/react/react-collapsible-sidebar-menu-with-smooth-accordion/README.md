# React Component: Collapsible Sidebar Menu with Smooth Accordion (GSSoC-26 Edition)

I am fixing this issue under GSSoC-26.

1. **What does this do?**  
   It renders a modular, copy-paste ready React component for a **Collapsible Sidebar Menu with Smooth Accordion** containing collapsible sidebar width transitions, nested submenus navigation links, and grid fractional rows accordion animation effects.

2. **How is it used?**  
   Import [SidebarMenu.jsx](./SidebarMenu.jsx) into your React application and pass props specifying navigation link data. Toggle sidebar width using the expand/collapse button or cycle paths selections.
   
3. **Why is it useful?**  
   It delivers zero-dependency keyboard accessible nav sidebar columns, smooth grid row templates accordion heights, and custom mouse spotlight gradients.

---

## 📦 Installation

Copy [SidebarMenu.jsx](./SidebarMenu.jsx) and [SidebarMenu.css](./SidebarMenu.css) into your component directory. Import the component inside your React entry point:

```javascript
import SidebarMenu from './SidebarMenu';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import SidebarMenu from './SidebarMenu';

export default function App() {
  const customItems = [
    { label: 'Overview', path: '/overview', icon: '🏠' },
    {
      label: 'Security Panel',
      icon: '🔒',
      subItems: [
        { label: 'Access Control Logs', path: '/security/access' },
        { label: 'Encryption Key Configs', path: '/security/encryption' }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#020617' }}>
      <SidebarMenu
        menuItems={customItems}
        accentColor="#3b82f6"
        theme="dark"
        onNavigate={(path) => console.log('Navigated to:', path)}
      />
      <main style={{ flex: 1, padding: '2rem', color: '#fff' }}>
        <h1>Main Content Showcase</h1>
      </main>
    </div>
  );
}
```

---

## ⌨️ Accessibility Guidelines

This sidebar fully implements standard accessibility guidelines:
- All navigation links and accordion toggle headers are keyboard focusable using Tab.
- Pressing `Space` or `Enter` activates the link, or collapses/expands the corresponding submenu accordion.
- Proper rotation transitions on chevron icons visually support screen-reader layouts.

---

## 🎨 Custom CSS Class Definitions

Here are the primary custom class rules defined in [SidebarMenu.css](./SidebarMenu.css):
- `.sidebar-menu-container`: Anchors width and manages radial cursor spotlights.
- `.sidebar-nav-item`: Controls padding, hover translate effects, and focus outlines.
- `.submenu-accordion-grid`: Handles smooth fractional grid rows transition (height 0 to auto).
- `.sidebar-submenu-item`: Manages padding indent and color offsets on hover.

---

## 🌐 Browser Compatibility

The accordion height transition is fully compatible with modern browsers supporting CSS grid row templates transitions:
- Google Chrome (v107+)
- Mozilla Firefox (v115+)
- Apple Safari (v16+)
- Microsoft Edge

---

## ⚙ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `menuItems` | `array` | `[]` | Nested array structure containing menu items (label, icon, path, subItems). |
| `accentColor` | `string` | `'#3b82f6'` | Highlight theme color. |
| `theme` | `string` | `'dark'` | Visual styling theme options: `'dark' \| 'light' \| 'glass'`. |
| `defaultCollapsed` | `boolean` | `false` | Initial collapsed width state. |
| `onNavigate` | `function` | `undefined` | Callback triggered when a path is selected. |
