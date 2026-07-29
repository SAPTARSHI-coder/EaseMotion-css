# Art Deco Modal Demo

A simple React modal demonstrating the basic structure of a modal component with a subtle shimmer effect. This example is intended for learning React state management, modal interactions, and CSS animations.

## Features

* React functional component
* Open and close modal
* Click outside the modal to close
* Simple shimmer animation
* Responsive layout
* Easy to customize

## Project Structure

```text
react-shimmer-pulse-art-deco-modal/
├── ShimmerPulseArtDecoModal.jsx
├── style.css
└── README.md
```

## Props

| Prop       | Type        | Default              | Description                        |
| ---------- | ----------- | -------------------- | ---------------------------------- |
| `title`    | `string`    | `"Art Deco Gallery"` | Modal heading                      |
| `isOpen`   | `boolean`   | `false`              | Controls modal visibility          |
| `onClose`  | `function`  | —                    | Callback when the modal is closed  |
| `children` | `ReactNode` | —                    | Content displayed inside the modal |

## Installation

```bash
npm install
```

## Usage

```jsx
import ArtDecoModalDemo from "./ShimmerPulseArtDecoModal";

function App() {
  return (
    <ArtDecoModalDemo />
  );
}

export default App;
```

## Customization

You can easily modify:

* Colors and typography
* Modal width and spacing
* Border styles
* Animation duration
* Shimmer effect
* Button styles

## Browser Support

* Chrome
* Firefox
* Edge
* Safari

## License

This demo is provided for educational purposes.
