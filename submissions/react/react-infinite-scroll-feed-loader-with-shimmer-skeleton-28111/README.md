# React Component: Infinite Scroll Feed Loader with Shimmer Skeleton (#28111)

A modular, copy-paste ready React `<InfiniteScrollFeed>` component that uses the `IntersectionObserver` API to auto-load more items as the user scrolls, displaying animated shimmer skeleton cards during each fetch. Incoming items enter with a staggered spring animation. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `InfiniteScrollFeed.jsx`: The React component with `IntersectionObserver` scroll trigger, shimmer skeleton cards, stagger entrance, and end-of-feed indicator.
- `style.css`: The CSS powering the shimmer sweep animation, staggered skeleton lines, card entrance spring, and end state.
- `demo.html`: A self-contained demo with 12 mock articles, a 1.2s simulated fetch delay, and full infinite scroll — opens directly in a browser.

## 🛠 Features

- **Shimmer Skeleton**: Each loading placeholder uses a `linear-gradient` sweep animated with `ease-shimmer-sweep` — a fast left-to-right light pass that gives the impression of content being "painted in". Skeleton lines are staggered with small `animation-delay` offsets for a wave effect.
- **IntersectionObserver Trigger**: A 1px invisible sentinel element sits after the last loaded card. The `IntersectionObserver` fires `load()` when it scrolls into the viewport (with a 200px root margin pre-trigger), so loading begins before the user reaches the bottom.
- **Card Entrance Animation**: Each real card enters with `translateY(18px) scale(0.97) → translateY(0) scale(1)` using `cubic-bezier(0.34, 1.2, 0.64, 1)`. Cards within a page batch are staggered by 60ms × index.
- **End-of-Feed Indicator**: When `fetchItems` returns fewer items than `pageSize`, the sentinel is removed and an "end of feed" message appears with its own entrance animation.
- **Race Condition Safe**: A `useRef` loading flag prevents double-fetching in React 18 StrictMode double-invocation.
- **Custom Render Support**: Pass a `renderItem(item, index)` prop to override the default `<FeedCard>` with any custom layout.

## 🚀 How to use

```jsx
import InfiniteScrollFeed from './InfiniteScrollFeed';
import './style.css';

// Async data fetcher — must accept (page, pageSize) and return an array
const fetchPosts = async (page, pageSize) => {
  const res = await fetch(`/api/posts?page=${page}&limit=${pageSize}`);
  return res.json();
};

const MyFeed = () => (
  <InfiniteScrollFeed
    fetchItems={fetchPosts}
    pageSize={5}
    skeletonCount={3}
  />
);
```

### Custom item renderer

```jsx
<InfiniteScrollFeed
  fetchItems={fetchPosts}
  pageSize={5}
  renderItem={(item, index) => (
    <div key={item.id} className="my-card">{item.title}</div>
  )}
/>
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fetchItems` | `async function(page, pageSize)` | — | **Required.** Returns an array of items for the given page |
| `pageSize` | `number` | `5` | Items per page; when fewer are returned the feed ends |
| `skeletonCount` | `number` | `3` | Number of shimmer skeleton cards shown per load |
| `renderItem` | `function(item, index)` | — | Custom render function. Falls back to built-in `<FeedCard>` |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

An instant blank gap followed by content popping in is jarring. A shimmer skeleton tells the user "something is coming here" — it communicates spatial reservation. Combined with the staggered card entrance (`cubic-bezier(0.34, 1.2, 0.64, 1)`), the transition from skeleton to content feels like a natural reveal rather than a replace, keeping the user grounded in space and reducing perceived latency.
