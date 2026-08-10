# Drag Reorder List

A draggable list component that lets users reorder items via a drag handle.

## Features

- Drag handle indicator on each item
- Smooth transform transitions as items shift positions
- Visual feedback (elevated shadow, scale) on the active item
- Drop target highlight

## CSS Custom Properties

| Property              | Default              | Description           |
| --------------------- | -------------------- | --------------------- |
| `--drag-duration`     | `0.25s`              | Transition duration   |
| `--drag-bg`           | `#ffffff`            | Item background       |
| `--drag-active-bg`    | `#eef2ff`            | Active/dragging bg    |
| `--drag-border-color` | `#e2e8f0`            | Item border color     |
| `--drag-text-color`   | `#1e293b`            | Text color            |
| `--drag-shadow`       | `0 4px 12px …`       | Active item shadow    |
| `--font-family`       | `Inter`              | Font family           |

## Usage

Open `demo.html` in a browser. Click and drag the handle (⠿) on any item to reorder the list.
