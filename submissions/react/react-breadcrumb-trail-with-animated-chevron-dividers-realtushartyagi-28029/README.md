# React Breadcrumb Trail with Animated Chevron Dividers

A fully semantic, accessible React component that renders a navigation breadcrumb trail. It utilizes the adjacent sibling CSS selector (`+`) to trigger a smooth "slide forward" animation on the chevron dividers whenever a user hovers over the preceding navigation link.

## Files
- `BreadcrumbTrail.jsx` – The core React component handling the rendering of the `nav` block, `ol` list, and standard SVG chevron icons.
- `BreadcrumbTrail.css` – The stylesheet containing the semantic layout, base link styling, and the adjacent sibling hover animations.

## How it works
1. **Semantic HTML**: The component strictly follows W3C accessibility guidelines by wrapping the trail in a `<nav aria-label="...">` and using an ordered list `<ol>`. The final active item receives `aria-current="page"`.
2. **Adjacent Sibling Animation**: The animation logic is handled entirely by CSS, specifically using `.ease-breadcrumb-link:hover + .ease-breadcrumb-separator .ease-chevron-icon`.
3. **Visual Feedback**: When a user hovers over a clickable link, the CSS engine instantly selects the *immediately following* separator. It applies a `transform: translateX(4px) scale(1.1)` to the chevron, creating a highly tactile, forward-pointing bounce effect that reinforces the user's navigational intent.

## Installation & Usage

1. Copy both `BreadcrumbTrail.jsx` and `BreadcrumbTrail.css` into your React project.
2. Import the component and pass it an array of navigation nodes.

```jsx
import React from 'react';
import BreadcrumbTrail from './components/BreadcrumbTrail';

const App = () => {
  const shopTrail = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Sneakers', href: '/categories/sneakers' },
    { label: 'Nike Air Max 90', href: '#' } // Final active item
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <BreadcrumbTrail 
        items={shopTrail} 
        ariaLabel="Product Catalog Navigation" 
      />
    </div>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<Object>` | *(4 demo items)* | Array of route nodes. Shape: `{ label: string, href: string }`. The last item is automatically rendered as the active, unclickable page. |
| `ariaLabel` | `string` | `'Breadcrumb Navigation'` | Critical for screen readers to differentiate this `<nav>` from the main site navigation. |

## Accessibility (prefers-reduced-motion)
The component natively handles standard breadcrumb accessibility requirements (`aria-hidden` on dividers, `aria-current="page"` on the active leaf). It implements a strict `@media (prefers-reduced-motion: reduce)` block in the CSS that strips away the chevron sliding animation and link transitions to ensure compatibility with vestibular sensitivity settings.

## Why it fits EaseMotion CSS
EaseMotion champions clean CSS architecture to drive micro-interactions. Standard breadcrumbs are incredibly static. By leveraging powerful CSS combinators (like the adjacent sibling selector `+`), this component links the hover state of an `<a>` tag directly to an adjacent SVG `<polyline>`. This yields a highly polished, interactive UI element that performs at 60fps without requiring heavy JS-driven `onMouseEnter` or `onMouseLeave` state management.
