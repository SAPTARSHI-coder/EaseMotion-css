# React Search Results Panel

## Overview

The **React Search Results Panel** is a reusable component that displays matching search results in a dropdown panel below a search input. It supports category grouping, animated result appearance using EaseMotion CSS utility classes, and a responsive layout suitable for dashboards, documentation websites, and admin panels.

---

## Features

* 🔍 Live search filtering
* 📂 Category-based result grouping
* ✨ Smooth entrance animations with EaseMotion CSS
* 🚀 Hover animations for each search result
* 📱 Responsive design
* ❌ Animated "No Results Found" state

---

## Props

| Prop      | Type    | Description               |
| --------- | ------- | ------------------------- |
| `query`   | string  | Current search text       |
| `results` | array   | List of searchable items  |
| `grouped` | boolean | Enables category grouping |

---

## Usage

```jsx
import SearchResultsPanel from "./SearchResultsPanel";

<SearchResultsPanel
  query={query}
  results={results}
  grouped={true}
/>
```

---

## Example Result Object

```jsx
const results = [
  { id: 1, category: "Languages", name: "Java" },
  { id: 2, category: "Languages", name: "JavaScript" },
  { id: 3, category: "Frameworks", name: "React" }
];
```

---

## EaseMotion CSS Classes Used

* `ease-fade-in`
* `ease-hover-lift`

---

## Use Cases

* Documentation search
* Admin dashboards
* Portfolio websites
* Developer tools
* Command palette interfaces

---

## Technologies Used

* React
* JSX
* CSS
* EaseMotion CSS

---

## Folder Structure

```text
react-search-results-panel/
├── searchresultpanel.jsx
├── README.md
└── style.css
└── demo.html

```
