# Shimmer HUD Modal React Component

A futuristic React modal component with a smooth Shimmer Pulse animation designed for HUD-style interfaces.

## Features

- React reusable modal component
- Futuristic glass HUD appearance
- Smooth shimmer pulse animation
- Uses EaseMotion utility classes
- Customizable title and content

## Installation

Copy the component files into your React project.

## Props

| Prop | Type | Description |
|------|------|-------------|
| isOpen | Boolean | Controls modal visibility |
| onClose | Function | Closes the modal |
| title | String | Modal heading |
| description | String | Modal description |
| children | ReactNode | Custom content |

## Usage

```jsx
import ShimmerHudModal from "./ShimmerHudModal";

function App() {
  return (
    <ShimmerHudModal
      isOpen={true}
      title="System Online"
      description="Welcome to futuristic HUD interface."
      onClose={() => console.log("Closed")}
    />
  );
}

export default App;