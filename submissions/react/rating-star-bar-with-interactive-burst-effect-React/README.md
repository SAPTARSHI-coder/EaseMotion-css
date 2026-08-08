# React Rating Star Bar with Interactive Burst Effect

## Description

A reusable React component that provides an interactive star rating bar. Users can click on a star to select a rating, and the selected rating is updated instantly using React Hooks and EaseMotion CSS animation utilities.

---

## Features

- Interactive 5-star rating system
- Click to select a rating
- Displays the selected rating
- Built with React Hooks (`useState`)
- Uses EaseMotion CSS animation utilities
- Copy-paste ready
- No external dependencies

---

## Installation

Copy the `StarBarEffect.jsx` file into your React project.

---

## Usage

```jsx
import StarBarEffect from "./StarBarEffect";

function App() {
  return (
    <div>
      <StarBarEffect />
    </div>
  );
}

export default App;
```

---

## Props

This component currently does not require any props.

---

## Technologies Used

- React
- React Hooks (`useState`)
- EaseMotion CSS Animation Utilities

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-hover-lift`
- `ease-scale-in`

---

## Component Behavior

- Displays five interactive stars.
- Clicking a star updates the selected rating.
- Filled stars represent the current rating.
- The selected rating is displayed below the star bar.
- Uses EaseMotion CSS animation utilities for smooth interactions.

---

## Folder Structure

```
react-rating-star-bar-with-interactive-burst-effect/
│── StarBarEffect.jsx
└── README.md
```

---

## Concepts Used

- React `useState` for managing the selected rating.
- `map()` for rendering multiple star elements.
- `onClick` event handling for updating the rating.
- Conditional rendering to display filled and empty stars.

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.
```