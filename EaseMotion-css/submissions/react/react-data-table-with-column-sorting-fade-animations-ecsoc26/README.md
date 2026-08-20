# React Component: Data Table with Column Sorting & Fade Animations (ECSoC26 Edition)

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready React component for a **Data Table with Column Sorting & Fade Animations** containing search keyword filter boxes, clickable sorting headers, and list rows slide-fading animation keyframes.

2. **How is it used?**  
   Import [DataTable.jsx](./DataTable.jsx) into your React application and pass props specifying columns schema and rows dataset. Trigger sort orders by clicking headers or pressing Enter key on headers.
   
3. **Why is it useful?**  
   It delivers zero-dependency keyboard accessible tables list grids, sorting columns cycles, and spotlight hover highlights coordinates.

---

## 📦 Installation

Copy [DataTable.jsx](./DataTable.jsx) and [DataTable.css](./DataTable.css) into your component directory. Import the component inside your React entry point:

```javascript
import DataTable from './DataTable';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import DataTable from './DataTable';

export default function App() {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'salary', label: 'Salary ($)', sortable: true }
  ];

  const data = [
    { name: 'John Doe', department: 'Engineering', salary: 95000 },
    { name: 'Jane Smith', department: 'Marketing', salary: 82000 },
    { name: 'Michael Caine', department: 'Sales', salary: 76000 }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#020617', padding: '2rem' }}>
      <DataTable
        columns={columns}
        data={data}
        accentColor="#3b82f6"
        theme="dark"
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
    </div>
  );
}
```

---

## ⌨️ Accessibility Guidelines

This data table fully supports standard accessibility interfaces:
- All sortable header cells are focusable with `Tab` index navigation.
- Hitting `Space` or `Enter` on a focused header cycles sorting states (Ascending -> Descending -> Unsorted).
- Clickable rows can be navigated using Tab and activated with Enter key.

---

## ⚙ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `columns` | `array` | `[]` | Columns specifications (key, label, sortable). |
| `data` | `array` | `[]` | Datasets rows objects. |
| `accentColor` | `string` | `'#3b82f6'` | Highlight theme color. |
| `theme` | `string` | `'dark'` | Visual styling theme options: `'dark' \| 'light' \| 'glass'`. |
| `onRowClick` | `function` | `undefined` | Callback triggered when a row is clicked. |
