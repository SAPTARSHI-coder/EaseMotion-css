# React Component: Data Table with Column Sorting & Fade Animations (#28057)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a responsive data table featuring click-to-sort columns, spring-animated sorting icons, and a layout-preserving fade blur transition during data re-ordering.

## 📦 What's included?

- `DataTable.jsx`: The React component that manages the `sortConfig` state, memoizes the data sorting logic, and artificially delays the data swap slightly to allow CSS animations to run.
- `style.css`: The CSS stylesheet powering the staggered row entrances, the column header hover states, the `cubic-bezier` arrow flip, and the blur-fade transition.
- `demo.html`: A self-contained browser demo running the React component to showcase sorting a mock list of employees.

## 🛠 Features

- **Animated Sorting Arrow**: When a sortable column header is clicked, a subtle SVG arrow becomes active and rotates 180 degrees using a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve to indicate ascending vs descending order.
- **Anti-Thrash Fade Transition**: Instantaneous sorting of large data sets can cause jarring "layout thrashing" where the user's eyes lose their place. To solve this, when a sort is requested, the React component applies an `is-sorting` class. CSS immediately blurs and fades the table body (`filter: blur(2px); opacity: 0.4;`). A `150ms` React `setTimeout` waits for this to happen *before* swapping the data, ensuring a smooth, premium transition.
- **Staggered Row Entrance**: When the table initially mounts, the rows slide up and fade in sequentially via an inline `animationDelay: ${rowIndex * 0.05}s`, removing the need for hardcoded CSS `nth-child` loops.

## 🚀 How to use

1. Copy `DataTable.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass a `columns` configuration array and a `data` array.

```jsx
import React from 'react';
import DataTable from './DataTable';
import './style.css'; 

const Dashboard = () => {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'status', label: 'Status', sortable: false },
  ];

  const data = [
    { id: 1, name: 'Alice', role: 'Engineer', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Designer', status: 'Active' }
  ];

  return <DataTable columns={columns} data={data} />;
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Data tables are notoriously rigid and jumpy. When you click a column to sort, the data instantly flashes into a new order. By applying a 150ms delay to the state update and pairing it with a CSS blur and opacity drop, we simulate the "shuffling" of data. The physical flip of the sorting arrow confirms the action, transforming a sterile data grid into a polished, tactile interface.
