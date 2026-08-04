# Filter Chip Group with Smooth Select Transitions

A reusable React component that renders a group of toggleable filter chips with a spring-style scale animation and animated checkmark on selection.

## Props

| Prop              | Type       | Default | Description                                      |
|-------------------|------------|---------|---------------------------------------------------|
| `options`         | array      | —       | Array of `{ label, value }` objects                |
| `multiSelect`     | boolean    | `true`  | Allow multiple chips selected at once               |
| `defaultSelected` | array      | `[]`    | Array of initially selected values                  |
| `onChange`        | function   | —       | Called with the updated array of selected values    |

## Installation

Copy `FilterChipGroup.jsx` and `style.css` into your project. No external dependencies beyond React.

## Usage

```jsx
import FilterChipGroup from './FilterChipGroup';

const options = [
  { label: 'All', value: 'all' },
  { label: 'Design', value: 'design' },
  { label: 'Development', value: 'dev' },
];

<FilterChipGroup
  options={options}
  defaultSelected={['all']}
  onChange={(selected) => console.log(selected)}
/>
```

## Behavior

- Selecting a chip triggers a spring-style scale-up (`cubic-bezier(0.34, 1.56, 0.64, 1)`) and reveals an animated checkmark.
- Supports both single-select and multi-select modes via the `multiSelect` prop.
- Fully keyboard accessible (`aria-pressed`, focusable buttons).

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and the framework's signature spring easing curve for hover/select transitions, consistent with existing submissions. Zero dependencies beyond React.
