# React Data Table with Column Sorting & Fade Animations

## Description
A modular, fully responsive React Data Table component that natively supports column sorting and pagination out of the box. It leverages **EaseMotion CSS** utility classes to orchestrate smooth hover states (`ease-hover-lift`) and staggered row entrance animations (`ease-fade-in`). A custom React `useEffect` hook cleverly resets the CSS animation state whenever data is sorted or paginated, guaranteeing a fluid, hardware-accelerated transition between data views.

## Installation
No external libraries (like `framer-motion` or `react-table`) are required.
1. Copy the `DataTable.jsx` and `style.css` files into your React project.
2. Ensure you have the global `easemotion.css` framework imported at the root of your application.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<Object>` | **Required** | The raw array of data objects to render in the table. |
| `columns` | `Array<Object>` | **Required** | Configuration for table headers and data mapping. See details below. |
| `itemsPerPage` | `Number` | `5` | The number of rows to display per page. |

### Column Configuration Object
Each object in the `columns` array should have the following shape:
- `key` (String): The unique identifier that matches a key in your `data` objects.
- `label` (String): The text rendered in the table header.
- `sortable` (Boolean, optional): Set to `false` to disable sorting for this specific column. Defaults to `true`.
- `render` (Function, optional): A custom render function. Signature: `(value, row) => ReactNode`.

## Usage Example

```jsx
import React from 'react';
import DataTable from './DataTable';

const App = () => {
  const tableData = [
    { id: 1, name: 'Alice Smith', role: 'Engineer', status: 'Active' },
    { id: 2, name: 'Bob Jones', role: 'Designer', status: 'Offline' },
    { id: 3, name: 'Charlie Brown', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Diana Prince', role: 'Director', status: 'On Leave' },
    { id: 5, name: 'Evan Wright', role: 'Engineer', status: 'Offline' },
    { id: 6, name: 'Fiona Gallagher', role: 'HR', status: 'Active' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Full Name' },
    { key: 'role', label: 'Position' },
    { 
      key: 'status', 
      label: 'Status',
      sortable: false, // Disable sorting for status
      render: (val) => (
        <span style={{ 
          color: val === 'Active' ? 'green' : 'gray', 
          fontWeight: 'bold' 
        }}>
          {val}
        </span>
      )
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Team Directory</h2>
      <DataTable 
        data={tableData} 
        columns={tableColumns} 
        itemsPerPage={4} 
      />
    </div>
  );
};

export default App;
```
