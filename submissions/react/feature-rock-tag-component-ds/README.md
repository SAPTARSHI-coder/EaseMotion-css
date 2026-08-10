# Rock Tag (Focus State)

A React component that displays a tag with a smooth rocking animation to draw attention to focused content, notifications, or status indicators.

## Features

- Smooth rocking animation
- Lightweight and reusable
- Accessible with keyboard focus support
- Supports reduced motion preferences
- Beginner-friendly implementation

## Usage

```jsx
import RockTag from "./RockTag";

function App() {
  return (
    <div>
      <RockTag>
        Focus State
      </RockTag>
    </div>
  );
}
```

## Example

```jsx
<div className="ease-rock-tag">
  <RockTag>
    Focus State
  </RockTag>
</div>
```

## Accessibility

- Uses semantic HTML.
- Includes `aria-label`.
- Supports keyboard navigation using `tabIndex`.
- Respects `prefers-reduced-motion`.

## Use Cases

- Notification labels
- Focus indicators
- Status tags
- Attention-grabbing UI elements
