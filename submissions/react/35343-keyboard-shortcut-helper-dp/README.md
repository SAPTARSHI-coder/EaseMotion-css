# Keyboard Shortcut Helper

## 1. What does this do?

This submission provides a reusable React component for displaying keyboard shortcuts in a consistent and accessible way. It supports platform-aware rendering (Windows/Linux and macOS), multiple visual variants, different sizes, and multi-key combinations, making it suitable for command palettes, documentation, settings pages, menus, and productivity applications.

---

## 2. How is it used?

Import the component and its accompanying stylesheet, then pass the keyboard shortcut as an array through the `keys` prop. Customize its appearance using the available props such as `variant`, `size`, and `platform`. The included showcase demonstrates common application shortcuts and an interactive playground for switching between platforms, variants, and sizes.

```jsx
import KeyboardShortcut from "./KeyboardShortcut";
import "./style.css";

export default function App() {
  return (
    <>
      <KeyboardShortcut
        keys={["Ctrl", "K"]}
        variant="filled"
        size="medium"
      />

      <KeyboardShortcut
        keys={["Ctrl", "Shift", "P"]}
        variant="outline"
        size="large"
      />

      <KeyboardShortcut
        keys={["Command", "Option", "I"]}
        platform="mac"
        variant="soft"
      />
    </>
  );
}
```

### Supported Props

| Prop | Description |
|------|-------------|
| `keys` | Array of keys to display as a shortcut. |
| `variant` | Visual style (`outline`, `filled`, `soft`, `minimal`). |
| `size` | Component size (`small`, `medium`, `large`). |
| `platform` | Renders Windows/Linux or macOS key labels. |
| `platformAware` | Automatically detects the user's platform. |
| `className` | Applies additional custom CSS classes. |

---

## 3. Why is it useful?

Keyboard shortcuts are a common part of modern applications but are often implemented inconsistently. This component provides a lightweight, reusable, and accessible solution with semantic `<kbd>` elements, platform-aware key rendering, responsive layouts, multiple styling options, and customizable props. It helps developers present shortcuts consistently across dashboards, command palettes, documentation sites, developer tools, and other productivity-focused interfaces while aligning with EaseMotion CSS's goal of providing modern, practical, and reusable UI components.