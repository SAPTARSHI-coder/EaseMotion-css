# Sci-Fi Console Modal Demo

A simple React modal component demonstrating basic modal functionality with a subtle shimmer animation and a Sci-Fi Console-inspired interface. This example is intended for learning React component structure, state management, and CSS animations.

## Features

* React functional component
* Open and close modal
* Click outside the modal to close
* Simple shimmer animation
* Responsive layout
* Easy to customize

## Project Structure

```text
react-shimmer-pulse-sci-fi-console-modal/
├── ShimmerPulseSciFiConsoleModal.jsx
├── style.css
└── README.md
```

## Props

| Prop       | Type        | Default                    | Description                              |
| ---------- | ----------- | -------------------------- | ---------------------------------------- |
| `title`    | `string`    | `"Sci-Fi Control Console"` | Modal heading                            |
| `isOpen`   | `boolean`   | `false`                    | Controls modal visibility                |
| `onClose`  | `function`  | —                          | Callback executed when the modal closes  |
| `children` | `ReactNode` | —                          | Custom content rendered inside the modal |

## Installation

```bash
npm install
```

## Usage

```jsx
import SciFiConsoleModalDemo from "./ShimmerPulseSciFiConsoleModal";

function App() {
  return <SciFiConsoleModalDemo />;
}

export default App;
```

## Customization

You can customize:

* Colors and typography
* Modal width and spacing
* Border styles
* Animation duration
* Shimmer effect
* Button styles
* Modal content and layout

## Browser Support

* Chrome
* Firefox
* Edge
* Safari

## License

This demo is provided for educational purposes.
