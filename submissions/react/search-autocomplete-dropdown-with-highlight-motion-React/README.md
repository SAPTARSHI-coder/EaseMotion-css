# React Search Autocomplete Dropdown with Highlight Motion

## Description

A reusable React component that provides a search autocomplete dropdown. As the user types, the component filters and displays matching items in real time using React Hooks and EaseMotion CSS animation utilities.

---

## Features

- Live search filtering
- Real-time autocomplete suggestions
- Built with React Hooks (`useState`)
- Uses `filter()` and `map()` for rendering results
- Copy-paste ready component
- No external dependencies

---

## Installation

Copy the `SearchAutoComplete.jsx` file into your React project.

---

## Usage

```jsx
import SearchAutoComplete from "./SearchAutoComplete";

function App() {
  return (
    <div>
      <SearchAutoComplete />
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

---

## Component Behavior

- Displays a search input field.
- Filters the predefined list as the user types.
- Shows only matching results.
- Updates suggestions instantly without reloading the page.

---

## Folder Structure

```text
react-search-autocomplete-dropdown-with-highlight-motion/
│── SearchAutoComplete.jsx
└── README.md
```

---

## Concepts Used

- React `useState`
- Controlled Components
- `onChange` event handling
- `filter()` for searching
- `includes()` for matching text
- `map()` for rendering filtered results

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.