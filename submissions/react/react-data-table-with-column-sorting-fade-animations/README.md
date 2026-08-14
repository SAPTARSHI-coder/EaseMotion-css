# React Component: Data Table with Column Sorting & Fade Animations (#28007)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a sortable data table. Instead of harshly snapping rows to new positions on sort, this component orchestrates a seamless CSS fade-out/fade-in staggered transition tied to React state.

## 📦 What's included?

- `DataTable.jsx`: The React component managing sort direction logic (asc/desc/reset), triggering a delay for CSS transitions (`isAnimating` state), and mapping standard columns/data arrays.
- `style.css`: The CSS stylesheet powering the table layout, SVG sort icon opacities, and the staggered `easeRowIn` keyframe animations utilizing CSS custom variables (`--row-index`).
- `demo.html`: A self-contained browser demo running the React component via Babel standalone.

## 🛠 Features

- **CSS Staggered Entrance**: Rows fade and slide up sequentially (`animation-delay: calc(var(--row-index) * 0.05s)`). This animation triggers both on initial load and *after every sort*.
- **Orchestrated Sort Transitions**: Standard React state updates instantly snap data into new positions. This component wraps `setDisplayData` in a timeout, allowing the `tbody` to fade out *before* the data swaps, ensuring a smooth, premium feel.
- **Smart Sort Icons**: Sort headers show a subtle hover state arrow. Active columns show a highlighted double-arrow indicating ascending or descending status via SVG opacities.
- **Clean Border Model**: Utilizes `border-collapse: collapse` and strict padding for a modern, SaaS-ready aesthetic.

## 🚀 How to use

1. Copy `DataTable.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Pass in `columns` and `data` props.

```jsx
import React from 'react';
import DataTable from './DataTable';
import './style.css'; 

const UsersPage = () => {
  const columns = [
    { key: 'name', label: 'Employee Name', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'date', label: 'Join Date', sortable: true } // Sorts strings lexicographically
  ];

  const data = [
    { id: 1, name: 'Alice Smith', department: 'Engineering', date: '2023-01-15' },
    { id: 2, name: 'Bob Johnson', department: 'Design', date: '2022-11-04' }
  ];

  return <DataTable columns={columns} data={data} />;
};

export default UsersPage;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes micro-interactions define the perceived quality of software.

Data tables are often rigid and jarring. Clicking a column header and having 50 rows of text instantly teleport to new Y-coordinates breaks visual tracking. By orchestrating a 200ms fade-out followed by a staggered CSS-variable-driven fade-in, we guide the user's eye and make the table feel like a living, breathing interface element.
