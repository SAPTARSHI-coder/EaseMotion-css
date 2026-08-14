# React Component: Infinite Scroll Feed Loader with Shimmer Skeleton (#28081)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component provides an automated, scrolling-based pagination system powered by the native browser `IntersectionObserver` API, paired with highly optimized CSS shimmer skeleton loaders.

## 📦 What's included?

- `InfiniteFeedLoader.jsx`: The core React component that handles `IntersectionObserver` binding, deduplicating fetch calls, and rendering the fallback Shimmer UI while promises are pending.
- `style.css`: The CSS stylesheet containing the `linear-gradient` sweep animations that power the shimmer effect, plus structural styling for the feed itself.
- `demo.html`: A self-contained browser demo running a mock API with artificial delays to clearly demonstrate the scroll triggering and skeleton loading.

## 🛠 Features

- **Performant Observation**: Uses `IntersectionObserver` instead of listening to raw `window.onscroll` events. This pushes the scroll calculation off the main JavaScript thread and onto the browser's native composite thread, eliminating scroll jank.
- **Root Margin Lookahead**: Configured with `rootMargin: "100px"`, meaning the fetch triggers just *before* the user hits the absolute bottom of the list, creating a seamless experience if the network is fast.
- **CSS-Only Shimmers**: The skeleton loaders don't rely on complex SVGs or heavy JavaScript calculation. They use a simple `linear-gradient` and background positioning animated via `@keyframes` in a `linear` curve.
- **Deduplicated Fetching**: Protects against double-fetching if the user scrolls erratically by managing an `isFetchingMore` boolean guard.

## 🚀 How to use

1. Copy `InfiniteFeedLoader.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass in an async function that returns data, and a render function for your specific card design.

```jsx
import React, { useState } from 'react';
import InfiniteFeedLoader from './InfiniteFeedLoader';
import './style.css'; 

const FeedPage = () => {
  const [hasMore, setHasMore] = useState(true);

  // Must return a Promise that resolves to an array of new items
  const fetchMyData = async () => {
    const response = await fetch('/api/posts?page=...');
    const data = await response.json();
    if (data.length === 0) setHasMore(false);
    return data;
  };

  const renderPost = (item, index) => (
    <div key={item.id} className="my-post-card">
      {item.content}
    </div>
  );

  return (
    <InfiniteFeedLoader 
      fetchMoreData={fetchMyData} 
      renderItem={renderPost} 
      hasMore={hasMore} 
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** emphasizes keeping the user in a state of flow without jarring interruptions.

Traditional pagination (clicking "Next Page") stops user momentum completely. Infinite scrolling keeps them engaged, but if the network is slow, they hit a hard wall. By utilizing a fluid, sweeping shimmer effect (a soft linear gradient passing over rounded shapes), we provide visual confirmation that the application is actively working to fetch data. The shimmer acts as a psychological placeholder, reducing perceived wait time compared to a standard spinning circle.
