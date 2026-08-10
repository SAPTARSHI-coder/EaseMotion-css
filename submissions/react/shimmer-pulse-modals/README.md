# Demo Shimmer Pulse Modal

A simple React modal demonstrating a shimmer pulse animation. This project is intended for learning basic modal structure, state management, and CSS animations.

## Features

* React functional component
* Modal open/close functionality
* Click outside the modal to close
* Simple shimmer animation
* Responsive layout
* Easy to customize

## Files

```
react-shimmer-pulse-modal/
├── ShimmerPulseModal.jsx
├── style.css
└── README.md
```

## Props

| Prop     | Type      | Default             | Description                          |
| -------- | --------- | ------------------- | ------------------------------------ |
| title    | string    | "Space Observatory" | Modal heading                        |
| isOpen   | boolean   | false               | Controls modal visibility            |
| onClose  | function  | —                   | Callback fired when the modal closes |
| children | ReactNode | —                   | Content displayed inside the modal   |

## Installation

```bash
npm install
```

## Usage

```jsx
import ShimmerPulseModal from "./ShimmerPulseModal";

function App() {
  return (
    <ShimmerPulseModal
      title="Space Observatory"
      isOpen={true}
      onClose={() => console.log("Modal Closed")}
    >
      <p>This is a demo modal component.</p>
    </ShimmerPulseModal>
  );
}

export default App;
```

## Customization

You can customize:

* Background colors
* Border radius
* Animation duration
* Button styles
* Shimmer effect colors
* Modal width and spacing

## Browser Support

* Chrome
* Firefox
* Edge
* Safari

## License

This demo is provided for learning purposes.
