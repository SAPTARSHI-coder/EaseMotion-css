# Collapse Table Row

An interactive HTML table with expandable/collapsible rows. Click the toggle button on any row to reveal or hide its sub-content. Multiple rows operate independently.

## Features

- Independent expand/collapse per row
- Rotating arrow indicator
- Smooth max-height transition for sub-content
- Clean, accessible table layout

## CSS Custom Properties

| Property                | Default   | Description                     |
|-------------------------|-----------|---------------------------------|
| `--collapse-duration`   | `0.35s`   | Transition duration             |
| `--collapsed-color`     | `#6b7280` | Text color when collapsed       |
| `--expanded-color`      | `#1f2937` | Text color when expanded        |
| `--table-border-color`  | `#d1d5db` | Table border color              |
| `--table-bg`            | `#ffffff` | Table background color          |

## Usage

Open `demo.html` in any modern browser. Click the `▶` button on any project row to expand details; click `▼` to collapse. The toggle arrow rotates to indicate state.
