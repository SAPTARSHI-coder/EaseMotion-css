# React Video Playlist Sidebar with Active Track Glow

## Description
A playlist sidebar listing video tracks, where the currently selected/active track shows a glowing left-edge indicator with a soft pulse animation.

## Installation
```jsx
import PlaylistSidebar from "./PlaylistSidebar";
import "./style.css";
```

## Usage
```jsx
<PlaylistSidebar
  tracks={[
    { id: 1, title: "Intro to EaseMotion", duration: "4:12" },
    { id: 2, title: "Building Animations", duration: "7:45" },
  ]}
  initialActiveId={1}
  onSelect={(id) => console.log("Selected track:", id)}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `tracks` | `{id, title, duration}[]` | sample data | List of playlist tracks |
| `initialActiveId` | `string \| number` | first track's id | Initially active track |
| `onSelect` | `(id) => void` | `undefined` | Fired when a track is clicked |

## Accessibility
Implemented as a `listbox`/`option` ARIA pattern with `aria-selected`, keyboard-focusable buttons, and visible `:focus-visible` outlines. Respects `prefers-reduced-motion` by disabling the glow pulse animation.

## Dependencies
None beyond React itself.