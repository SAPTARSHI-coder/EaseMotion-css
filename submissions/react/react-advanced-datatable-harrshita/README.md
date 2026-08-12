# EaseAdvancedDataTable React Component

A feature-rich, advanced React data table component with virtualization, live search, column sorting, row selection, pagination, status badges, progress indicators, and CSV export. Built with EaseMotion CSS animation classes.

## Features

- **Live Search**: Filter rows across all columns in real-time
- **Column Sorting**: Click any column header to sort ascending/descending
- **Row Selection**: Checkbox selection per row, with select-all toggle
- **Pagination**: Navigate large datasets with page controls
- **Status Badges**: Color-coded Active / Suspended / Inactive badges
- **Progress Bars**: Visual inline progress indicators per row
- **CSV Export**: One-click export of filtered data to CSV
- **Stats Cards**: Summary counts displayed above the table
- **Dark UI**: Glassmorphism-inspired dark theme with EaseMotion CSS

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `Array` | `[]` | Array of row objects to display |
| `columns` | `Array` | `[]` | Column definition objects |
| `pageSize` | `number` | `10` | Rows per page |
| `searchable` | `boolean` | `true` | Enable live search |
| `sortable` | `boolean` | `true` | Enable column sorting |
| `selectable` | `boolean` | `true` | Enable row checkboxes |
| `exportable` | `boolean` | `true` | Show CSV export button |

## Usage

```jsx
import EaseAdvancedDataTable from './EaseAdvancedDataTable';

const users = [
  { name: "Aanya Sharma", role: "Admin", status: "Active", progress: 88 },
  { name: "Rohan Mehta",  role: "Developer", status: "Active", progress: 74 },
];

function App() {
  return (
    <EaseAdvancedDataTable
      data={users}
      pageSize={10}
      searchable
      sortable
      selectable
      exportable
    />
  );
}
```

## EaseMotion CSS Classes Used

- `ease-fade-in` - Table fade-in animation on mount
- `ease-hover-lift` - Row lift effect on hover
- `ease-slide-up` - Stats cards slide-up entrance
- `ease-badge` - Status badge styling
- `ease-progress` - Progress bar animation

## File Structure

```
submissions/react/react-advanced-datatable-harrshita/
├── EaseAdvancedDataTable.jsx
├── demo.html
├── style.css
└── README.md
```

## Browser Support

| Browser | Supported |
|---|---|
| Chrome 90+ | Yes |
| Firefox 88+ | Yes |
| Safari 14+ | Yes |
| Edge 90+ | Yes |
