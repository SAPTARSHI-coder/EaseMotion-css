# React User Profile Card with Flip Animation

## Description

A reusable React component that displays a simple user profile card with a flip interaction. Users can switch between the front and back views using React Hooks and EaseMotion CSS animation utilities.

---

## Features

- Simple profile card
- Flip between front and back views
- Built with React Hooks (`useState`)
- Uses EaseMotion CSS animation utilities
- Copy-paste ready
- No external dependencies

---

## Installation

Copy the `UserProfileCard.jsx` file into your React project.

---

## Usage

```jsx
import UserProfileCard from "./UserProfileCard";

function App() {
  return (
    <div>
      <UserProfileCard />
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
- `ease-scale-in`
- `ease-hover-lift`

---

## Component Behavior

- Displays the front side of the profile card initially.
- Clicking the **Flip** button reveals the user profile information.
- Clicking the **Back** button returns to the front side.
- Uses smooth EaseMotion CSS animations during transitions.

---

## Folder Structure

```
user-profile-card-with-flip-animation-React/
│── UserProfileCard.jsx
└── README.md
```

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.