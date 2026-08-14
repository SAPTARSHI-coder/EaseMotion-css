# React Breadcrumb Trail with Animated Chevron Dividers

A responsive, collapsible React breadcrumb navigation component featuring interactive chevron separators that animate on item hover, styled using **EaseMotion CSS** design variables.

## What does this do?
This component renders an ordered list of navigation links mapping the user's path. Hovering over a breadcrumb item triggers a smooth CSS underline sweep and shifts the succeeding chevron divider to the right. When the breadcrumb list grows too long, it dynamically collapses the center items into a clickable ellipsis button (`...`) that expands on click.

## How is it used?

### 1. Install Dependencies
Make sure you have `react` and `easemotion-css` installed in your project:
```bash
npm install react easemotion-css
```

### 2. Import Stylesheets
Import the EaseMotion variables and animations inside your entrypoint index script:
```javascript
import 'easemotion-css/core/variables.css';
import 'easemotion-css/core/animations.css';
```

### 3. Render the Component
Import and render `BreadcrumbTrail` in your layout components:

```jsx
import React from 'react';
import BreadcrumbTrail from './BreadcrumbTrail';

function App() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Documents', href: '/docs' },
    { label: 'Projects', href: '/projects' },
    { label: 'EaseMotion CSS', href: '/projects/easemotion' },
    { label: 'React Breadcrumbs' } // Last element renders as active text
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <BreadcrumbTrail
        items={crumbs}
        maxItems={3} // Collapses center links, showing Home > ... > React Breadcrumbs
        animateDividers={true}
        onItemClick={(item, index) => console.log(`Clicked: ${item.label} (index ${index})`)}
      />
    </div>
  );
}

export default App;
```

---

## Component API (Props)

The `<BreadcrumbTrail />` component accepts the following customizable props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<Object>` | *(Required)* | Array of crumb items. Each item is an object: `{ label: string, href?: string, icon?: ReactNode }`. |
| `maxItems` | `number` | `8` | Maximum number of items to show before collapsing the middle items into a `...` button. |
| `separator` | `ReactNode` | `<DefaultChevron />` | Custom separator component rendered between items (defaults to SVG chevron). |
| `animateDividers` | `boolean` | `true` | When true, chevrons slide to the right and highlight when their preceding link is hovered. |
| `onItemClick` | `function` | `undefined` | Callback fired when a breadcrumb link is clicked: `(item: Object, index: number) => void`. |
| `className` | `string` | `""` | Optional parent element custom styling CSS class name. |

---

## Why is it useful?
- **Tactile Chevron Animations**: Leverages CSS adjacent sibling combinators (`+`) to animate chevron transitions (`transform: translateX(5px) scale(1.2)`) directly in response to active link hovers, maintaining a high-quality interactive feel.
- **Smart Responsive Collapsing**: Solves path overflow on mobile viewports by compressing intermediate links into a single `...` click trigger that expands inline with smooth state changes.
- **Accessibility (a11y) Integrated**: Uses a semantic `<nav aria-label="Breadcrumb">` wrapper, ordered listing tags (`<ol>`, `<li>`), active state flags (`aria-current="page"`), screen-reader-hidden separators (`aria-hidden="true"`), and navigable focus parameters.
- **Self-contained CSS Injection**: Injects clean, isolated styles inline using React stylesheet nodes, avoiding external import dependencies.
