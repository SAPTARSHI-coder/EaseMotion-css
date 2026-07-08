# Command Palette

## 1. What does this do?

This submission provides a reusable React Command Palette component inspired by modern productivity applications such as VS Code, GitHub, and Linear. It features searchable commands, grouped results, keyboard-first navigation, smooth animations, and accessible interactions, making it easy to integrate into a wide range of React applications.

---

## 2. How is it used?

Import the component and its stylesheet into your React project, then pass a list of commands through the `commands` prop. Configure optional props such as the title, placeholder text, keyboard shortcut support, and command selection handler. The component automatically manages searching, filtering, keyboard navigation, focus management, and command selection.

```jsx
import CommandPalette from "./CommandPalette";
import "./style.css";

const commands = [
  {
    id: "dashboard",
    label: "Go to Dashboard",
    group: "Navigation",
    shortcut: "Ctrl + D",
  },
  {
    id: "settings",
    label: "Open Settings",
    group: "General",
  },
  {
    id: "theme",
    label: "Toggle Theme",
    group: "Appearance",
  },
];

export default function App() {
  return (
    <CommandPalette
      commands={commands}
      title="Quick Actions"
      placeholder="Search commands..."
      shortcutEnabled
      onSelect={(command) => console.log(command.id)}
    />
  );
}
```

The component supports real-time search, grouped commands, keyboard shortcuts (`Ctrl + K` / `⌘ + K`), arrow key navigation, Enter to execute commands, Escape to close the palette, responsive layouts, and customizable styling through the accompanying `style.css`.

---

## 3. Why is it useful?

Command palettes have become a standard interaction pattern in modern applications because they allow users to quickly search and execute actions without navigating through multiple menus. This component demonstrates a lightweight, accessible, and reusable implementation built with React and CSS only, making it suitable for dashboards, developer tools, admin panels, documentation sites, and other productivity-focused interfaces while aligning with EaseMotion CSS's goal of providing modern, practical, and reusable UI components.