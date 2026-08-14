# Organic Craft Modal Demo

A simple React modal component demonstrating basic modal functionality with a subtle shimmer animation and an Organic Craft-inspired appearance. This example is intended for learning React component structure, state management, and CSS animations.

## Features

* React functional component
* Open and close modal
* Click outside the modal to close
* Simple shimmer animation
* Responsive layout
* Easy to customize

## Project Structure

```text
react-shimmer-pulse-organic-craft-modal/
├── ShimmerPulseOrganicCraftModal.jsx
├── style.css
└── README.md
```

## Props

| Prop       | Type        | Default                  | Description                              |
| ---------- | ----------- | ------------------------ | ---------------------------------------- |
| `title`    | `string`    | `"Organic Craft Studio"` | Modal heading                            |
| `isOpen`   | `boolean`   | `false`                  | Controls modal visibility                |
| `onClose`  | `function`  | —                        | Callback executed when the modal closes  |
| `children` | `ReactNode` | —                        | Custom content rendered inside the modal |

## Installation

```bash
npm install
```

## Usage

```jsx
import OrganicCraftModalDemo from "./ShimmerPulseOrganicCraftModal";

function App() {
  return <OrganicCraftModalDemo />;
}

export default App;
```

## Customization

You can customize:

* Colors and typography
* Modal width and spacing
* Border radius
* Animation duration
* Shimmer effect
* Button styles
* Content and layout

## Browser Support

* Chrome
* Firefox
* Edge
* Safari

## License

This demo is provided for educational purposes.
