# React Notification Center Drawer with Slide Animation

## Description

A reusable React Notification Center Drawer component that displays notifications inside a slide-in drawer. Users can open or close the drawer, remove individual notifications, or clear all notifications. Built using React Hooks and EaseMotion CSS animation utilities.

---

## Features

- Toggle notification drawer
- Slide-in animation using EaseMotion CSS
- Remove individual notifications
- Clear all notifications
- Built with React Hooks (`useState`)
- Copy-paste ready
- No external dependencies

---

## Installation

Copy the `NotificationDrawer.jsx` file into your React project.

---

## Usage

```jsx
import NotificationDrawer from "./NotificationDrawer";

function App() {
  return (
    <div>
      <NotificationDrawer />
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
- `ease-slide-in`
- `ease-hover-lift`

---

## Component Behavior

- Click **Open Notifications** to display the drawer.
- View all available notifications.
- Remove individual notifications using the **Remove** button.
- Clear all notifications using the **Clear All** button.
- Close the drawer using the **Close Notifications** button.

---

## Folder Structure

```text
notification-center-drawer-with-slide-in-React/
│── NotificationDrawer.jsx
└── README.md
```

---

## Concepts Used

- React `useState`
- Conditional Rendering
- Array Rendering with `map()`
- Removing items using `filter()`
- Event Handling
- State Updates

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.