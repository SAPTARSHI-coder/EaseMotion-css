# Calendar Month View with Date Selection Highlight

A month-view calendar grid component with month navigation and a smooth, spring-animated highlight that glides to the selected date.

## Props

| Prop          | Type     | Default       | Description                                       |
|---------------|----------|---------------|-----------------------------------------------------|
| `defaultDate` | Date     | `new Date()`  | Initial visible month and initially selected date    |
| `onSelect`    | function | —             | Called with the newly selected `Date` object          |

## Installation

Copy `CalendarMonthView.jsx` and `style.css` into your project. No external dependencies beyond React.

## Usage

```jsx
import CalendarMonthView from './CalendarMonthView';

<CalendarMonthView
  defaultDate={new Date()}
  onSelect={(date) => console.log('Selected:', date)}
/>
```

## Behavior

- Click the arrows to navigate between months; the grid recalculates automatically, including leading blank cells for the correct starting weekday.
- Selecting a date animates a filled circular highlight into place with a spring-style easing curve.
- Today's date is visually distinguished with a highlighted label color even when not selected.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and the framework's signature spring-style `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve for the selection highlight and nav button hover, consistent with existing submissions. Zero dependencies beyond React.
