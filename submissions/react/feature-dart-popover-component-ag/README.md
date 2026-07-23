# Dart Popover Component (AG)

A reusable React popover component that reveals content with a smooth dart animation. It provides an interactive and accessible way to display contextual information while remaining lightweight and easy to integrate.

## Features

- Smooth dart animation
- Click-to-toggle popover
- Accessible with ARIA attributes
- Responsive layout
- Supports `prefers-reduced-motion`
- Lightweight and reusable
- Customizable through props

## Installation

Copy the following files into your React project:

```
DartPopoverAG.jsx
style.css
```

Import the component:

```jsx
import DartPopoverAG from "./DartPopoverAG";
```

## Usage

```jsx
import DartPopoverAG from "./DartPopoverAG";

function App() {
  return (
    <DartPopoverAG
      title="Popover Title"
      content="This is a smooth dart popover component."
    >
      Open Popover
    </DartPopoverAG>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Popover"` | Popover heading |
| `content` | `string` | `"This is a dart popover."` | Popover body text |
| `children` | `React.ReactNode` | `"Open Popover"` | Trigger button content |
| `className` | `string` | `""` | Additional custom CSS class |

## Accessibility

- Uses a semantic `<button>` element
- Supports `aria-expanded`
- Supports `aria-haspopup`
- Associates the trigger and popover using `aria-controls`
- Uses `role="dialog"`
- Respects `prefers-reduced-motion`

## License

Created as a React submission for the EaseMotion CSS project.