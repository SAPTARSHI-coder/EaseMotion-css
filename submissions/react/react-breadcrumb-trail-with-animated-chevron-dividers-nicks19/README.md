# Breadcrumb Trail with Animated Chevron Dividers

A responsive, highly accessible React breadcrumb component designed for hierarchical navigation. It uses EaseMotion CSS to add subtle entry transitions and interactive hover effects on the chevron dividers, creating a premium feel.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `items` | `Array<Object>` | `[]` | **Required.** The breadcrumb path segments (see structure below) |
| `onNavigate` | `(item) => void` | `undefined` | Callback fired when a non-active breadcrumb link is clicked |
| `className` | `string` | `''` | Additional custom CSS classes for the root `<nav>` element |

### Item Object Structure
```typescript
{
  id?: string | number,
  label: string,
  href?: string,          // Used as the href for standard <a> tags
  icon?: ReactNode        // Optional JSX (e.g., an SVG) to prefix the label
}
```

## Installation

1. Copy `BreadcrumbTrail.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import BreadcrumbTrail from './BreadcrumbTrail';

function App() {
  const path = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Keyboards' } // Last item is automatically rendered as active text, not a link
  ];

  const handleNavigate = (item) => {
    console.log('Routing to:', item.href);
    // e.g., router.push(item.href);
  };

  return (
    <div style={{ padding: '40px' }}>
      <BreadcrumbTrail items={path} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Interactive Micro-animations**: When a user hovers over a breadcrumb link, the adjacent chevron divider gracefully slides slightly to the right (`translateX(3px)`) and darkens. This utilizes the signature `cubic-bezier(0.34, 1.56, 0.64, 1)` curve, subtly encouraging forward movement.
- **Entry Motion**: The entire breadcrumb list fades and slides in from the left (`translateX(-10px) to 0`) using the EaseMotion spring curve upon mount, drawing the eye to the navigational context without being intrusive.
