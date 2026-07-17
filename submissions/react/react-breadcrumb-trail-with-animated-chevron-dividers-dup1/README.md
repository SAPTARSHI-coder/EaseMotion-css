# React Breadcrumb Trail with Animated Chevron Dividers

A modular, copy-paste ready React breadcrumb navigation component featuring animated chevron dividers using React Hooks and EaseMotion CSS animation utilities.

## Features

- Modular React component
- Animated chevron dividers
- Uses React Hooks (`useState`)
- Responsive breadcrumb layout
- Active breadcrumb highlighting
- Hover animations powered by EaseMotion CSS
- Zero external dependencies outside React and EaseMotion CSS

---

## Installation

Copy the following files into your React project:

```
BreadcrumbTrail.jsx
style.css
```

Import the component:

```jsx
import BreadcrumbTrail from "./BreadcrumbTrail";
import "./style.css";
```
---

## Usage

```jsx
import BreadcrumbTrail from "./BreadcrumbTrail";

const items = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "React", active: true },
];
function App() {
  return (
    <BreadcrumbTrail
      items={items}
      onNavigate={(item) => console.log(item)}
    />
  );
}

export default App;
```
---

### Breadcrumb Item Structure

```jsx
{
  label: "Home",
  href: "/",
  active: false
}
```

| Property | Type    | Description                |
| -------- | ------- | -------------------------- |
| label    | string  | Breadcrumb text            |
| href     | string  | Navigation path (optional) |
| active   | boolean | Marks the current page     |


---

## Folder Structure

```
react-breadcrumb-trail-with-animated-chevron-dividers/
├── BreadcrumbTrail.jsx
├── style.css
└── README.md
```

---

## Dependencies

- React
- EaseMotion CSS

No additional third-party libraries are required.