# Floating Action Button (Sample)

## Props

| Prop | Type | Description |
|------|------|-------------|
| icon | string | Button icon |
| onClick | function | Click handler |
| position | string | `bottom-right` or `bottom-left` |

## Usage

```jsx
import FloatingActionButton from "./FloatingActionButton";

<FloatingActionButton
  icon="+"
  position="bottom-right"
  onClick={() => alert("Clicked!")}
/>;
```