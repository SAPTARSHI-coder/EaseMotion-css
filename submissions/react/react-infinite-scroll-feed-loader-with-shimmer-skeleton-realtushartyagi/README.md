# React Infinite Scroll Feed Loader with Shimmer Skeleton

A modular, copy-paste ready React component that provides seamless infinite scrolling functionality paired with hardware-accelerated CSS shimmer skeletons. It uses the native `IntersectionObserver` API (via React hooks) to detect scroll reach and trigger loading states. Built with zero external dependencies outside React and standard EaseMotion CSS styles.

## 📦 Files Included
- `InfiniteScrollFeed.jsx`: The isolated React component containing the `IntersectionObserver` hook logic and `ShimmerCard` sub-component.
- `style.css`: The stylesheet defining the shimmering linear-gradient keyframes and spring-based reveal animations.
- `demo.html`: A self-contained preview using Babel standalone demonstrating fake network delays to show off the skeleton loader.

## 🚀 Features

- **Native IntersectionObserver**: Uses modern browser APIs inside a `useEffect` hook for highly performant scroll detection without relying on scroll event listeners.
- **EaseMotion Shimmer**: The skeleton loader uses a continuous linear-gradient background animation (`ease-shimmer-wave`) running at 60fps to indicate loading without blocking the main thread.
- **Spring Entrance**: Newly fetched items apply an `ease-fade-in-up` class using the EaseMotion spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) so they pop into place satisfyingly instead of appearing instantly.

## 💻 Usage Example

```jsx
import React, { useState } from 'react';
import InfiniteScrollFeed from './InfiniteScrollFeed';
import './style.css';

export default function App() {
  const [hasMore, setHasMore] = useState(true);

  // A function that returns a Promise resolving to an array of new items
  const fetchMoreData = async () => {
    const response = await fetch('/api/feed?page=next');
    const data = await response.json();
    
    if (data.isLastPage) setHasMore(false);
    return data.items; // e.g., [{ id: 1, user: 'John', content: 'Hello' }]
  };

  return (
    <div>
      <InfiniteScrollFeed 
        fetchMoreData={fetchMoreData} 
        hasMore={hasMore} 
      />
    </div>
  );
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about bridging the gap between raw CSS performance and interactive JavaScript logic.

By relying on native `IntersectionObserver` to manage state (`loading`, `hasMore`), we can trigger CSS classes that handle the visual heavy lifting. The `ease-shimmer-anim` class runs purely on the GPU using `background-position`, providing a premium loading experience without bogging down the JS thread during network requests. Once data arrives, the spring-based `ease-item-reveal` keyframe ensures the new content feels like a physical extension of the feed.
