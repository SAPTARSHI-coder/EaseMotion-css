# Tabs Underline Slide

A clean tabbed interface where an underline indicator slides smoothly between active tabs.

## Features

- Smooth underline slide transition using `left` / `width` CSS transitions
- Accessible `role="tablist"`, `role="tab"`, and `aria-selected` attributes
- Content panels change on tab click with a subtle fade-in animation
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property                  | Default   | Description               |
| ------------------------- | --------- | ------------------------- |
| `--tab-duration`          | `300ms`   | Transition duration       |
| `--tab-underline-color`   | `#6366f1` | Active underline color    |
| `--tab-active-color`      | `#1e1b4b` | Active tab text color     |
| `--tab-inactive-color`    | `#94a3b8` | Inactive tab text color   |
| `--tab-bg`                | `transparent` | Tab background        |

## Usage

Open `index.html` in any modern browser. Click a tab to see the underline slide to the active tab and the corresponding content panel appear.
