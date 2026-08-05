# Infinite Scroll Feed Loader with Shimmer Skeleton

A premium, highly customizable, copy-paste ready React component that provides infinite scrolling capabilities with elegant shimmer skeleton placeholder layouts. Built strictly using React hooks and EaseMotion CSS animation utility classes.

## Features

- **Four Custom Shimmer Templates**: Includes pre-built layouts for social feeds, e-commerce products, photos/media galleries, and text articles.
- **Multiple Aesthetic Themes**: Offers Light, Dark, and Glassmorphic themes out-of-the-box.
- **Intersection Observer Powered**: Smooth, highly optimized infinite scroll functionality that triggers fetches before reaching the visible screen edge.
- **Flexible Load Triggers**: Dynamically switch between automated infinite scrolling on hover or a manual "Load More" button trigger.
- **Micro-Animations & Delays**: Loaded cards are animated in sequence utilizing standard EaseMotion CSS staggered delays and slide-up transitions.
- **Zero External Dependencies**: Built using native React hooks and native CSS styling classes.

---

## Installation

1. Copy the following files into your React project:
   - `InfiniteScrollFeedLoader.jsx` (Component code)
   - `style.css` (Component structural and layout styles)

2. Ensure you have imported the main EaseMotion CSS stylesheet inside your application root (e.g., `index.js`, `main.jsx`, or `App.jsx`):
   ```javascript
   import 'easemotion/easemotion.css';
   ```

3. Import the component stylesheet:
   ```javascript
   import "./style.css";
   ```

---

## Usage

```jsx
import React, { useState, useCallback } from "react";
import InfiniteScrollFeedLoader from "./InfiniteScrollFeedLoader";

function App() {
  const [hasMore, setHasMore] = useState(true);

  // Mock API fetch callback
  const fetchMyData = useCallback(async (isInitial) => {
    // isInitial is true on mount, false on scroll pagination
    const response = await fetch(`/api/feed?limit=6&offset=${isInitial ? 0 : 6}`);
    const data = await response.json();
    
    if (data.length < 6) {
      setHasMore(false); // No more pages left
    }
    return data;
  }, []);

  // Custom item renderer
  const renderCard = (item, index) => (
    <div className="custom-card ease-hover-lift" key={item.id}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );

  return (
    <div className="app-container">
      <h1 className="ease-shimmer-text">Product Feed</h1>
      
      <InfiniteScrollFeedLoader
        fetchMoreData={fetchMyData}
        renderItem={renderCard}
        hasMore={hasMore}
        batchSize={6}
        shimmerType="product"
        shimmerCount={3}
        theme="glass"
      />
    </div>
  );
}

export default App;
```

---

## Properties Reference

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `fetchMoreData` | `(isInitial: boolean) => Promise<Array>` | *Required* | Async callback resolving to a list of loaded items. |
| `renderItem` | `(item: any, index: number) => ReactNode` | *Required* | Render function for generating the JSX for individual list items. |
| `hasMore` | `boolean` | `true` | Tells the loader whether it should continue tracking infinite scroll events. |
| `batchSize` | `number` | `6` | Number of feed items expected per pagination load. |
| `rootMargin` | `string` | `"150px"` | IntersectionObserver trigger offset from the screen boundary. |
| `threshold` | `number` | `0` | IntersectionObserver trigger overlap ratio threshold. |
| `shimmerType` | `'social' \| 'product' \| 'text' \| 'gallery'` | `'social'` | Design template of shimmer skeleton cards to show while loading. |
| `shimmerCount` | `number` | `3` | Number of skeleton card placeholders to render while loading. |
| `theme` | `'light' \| 'dark' \| 'glass'` | `'glass'` | Visual theme layout for feed components. |
| `endOfFeedMessage` | `ReactNode` | `"You've caught up on everything!"` | Content element displayed when `hasMore` is false. |
| `emptyMessage` | `ReactNode` | `"No items to show."` | Message displayed when initial fetch yields an empty list. |
| `useManualLoad` | `boolean` | `false` | If true, turns off scroll listeners and displays a manual click button instead. |
| `staggerDelay` | `number` | `60` | Delay in milliseconds for staggered entrance animation between loaded cards. |

---

## Folder Layout

```
react-infinite-scroll-feed-loader-with-shimmer-skeleton-28021/
├── InfiniteScrollFeedLoader.jsx  # Reusable React Component
├── style.css                     # Extended Stylesheet
├── demo.html                     # Interactive Sandbox HTML Demo
└── README.md                     # Documentation
```

## EaseMotion CSS Animation Classes Used

- `ease-fade-in` — Entrance fade animation.
- `ease-slide-up` — Entrance slide-up animation.
- `ease-skeleton-shimmer` — Skeleton gradient sweep shimmer.
- `ease-skeleton-avatar` — Circular avatar placeholder shape.
- `ease-skeleton-image` — Rectangular media placeholder shape.
- `ease-skeleton-text` — Rectangular text lines placeholder shape.
- `ease-skeleton-circle` — Circular layout placeholder shape.

## Browser Support

- Google Chrome (47+)
- Microsoft Edge (12+)
- Mozilla Firefox (36+)
- Apple Safari (11+)
- Opera (30+)
