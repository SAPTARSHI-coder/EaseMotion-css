# Infinite Scroll Feed Loader with Shimmer Skeleton

> **Issue:** [#28141](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/28141) · **Track:** React · **Author:** Ankit

A modular, copy-paste-ready React component that renders a social-style infinite scroll feed with a polished shimmer-skeleton loading state and staggered card entrance animations.

---

## ✨ Features

| Feature | Detail |
|---------|--------|
| **Infinite Scroll** | Uses the native `IntersectionObserver` API — zero polling, zero event listeners on scroll |
| **Shimmer Skeleton** | GPU-composited shimmer wave with structured avatar + text + action-pill placeholders |
| **Staggered Entrance** | Each loaded batch enters with a cascading `translateY` + `opacity` animation |
| **Async Data Source** | Pluggable `fetchItems` prop; defaults to an internal mock that simulates a real API call |
| **Error Recovery** | Displays an inline error card with a **Retry** button when the fetch fails |
| **End-of-feed Banner** | Shows a styled "end of feed" indicator when `maxItems` is reached |
| **Custom Renderer** | `renderItem` prop lets you supply your own card JSX |
| **Accessibility** | ARIA labels, `role="status"`, `role="alert"`, `prefers-reduced-motion` respected |
| **Zero External Deps** | Only React hooks + EaseMotion CSS skeleton utilities |

---

## 📦 Installation

Copy these two files into your project:

```
your-project/
└── components/
    └── InfiniteScrollFeedLoader/
        ├── InfiniteScrollFeedLoader.jsx
        └── style.css
```

Install the EaseMotion CSS skeleton utilities (optional — component degrades gracefully):

```bash
npm install ease-motion-css
```

Then link the stylesheet in your entry point or layout component:

```jsx
// Option A — import in component (already done inside InfiniteScrollFeedLoader.jsx)
import "./style.css";

// Option B — link EaseMotion globally (recommended)
import "ease-motion-css";
```

---

## 🚀 Usage

### Minimal (zero-config)

```jsx
import InfiniteScrollFeedLoader from "./InfiniteScrollFeedLoader";

export default function App() {
  return <InfiniteScrollFeedLoader />;
}
```

### With custom props

```jsx
import InfiniteScrollFeedLoader from "./InfiniteScrollFeedLoader";

export default function App() {
  return (
    <InfiniteScrollFeedLoader
      batchSize={8}
      skeletonCount={4}
      maxItems={100}
      loadDelay={1000}
    />
  );
}
```

### With a real API data source

```jsx
import InfiniteScrollFeedLoader from "./InfiniteScrollFeedLoader";

// fetchItems receives (startIndex, count) and must return a Promise<Array>
const fetchPosts = async (start, count) => {
  const res = await fetch(`/api/posts?offset=${start}&limit=${count}`);
  return res.json(); // each object should have: id, author, avatar, body, tag, likes, comments, timestamp
};

export default function App() {
  return (
    <InfiniteScrollFeedLoader
      batchSize={6}
      fetchItems={fetchPosts}
    />
  );
}
```

### With a custom card renderer

```jsx
import InfiniteScrollFeedLoader from "./InfiniteScrollFeedLoader";

const MyCard = (item, index) => (
  <div key={item.id} className="my-custom-card">
    <strong>{item.author}</strong>
    <p>{item.body}</p>
  </div>
);

export default function App() {
  return (
    <InfiniteScrollFeedLoader
      batchSize={5}
      renderItem={MyCard}
    />
  );
}
```

---

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `batchSize` | `number` | `5` | Number of items fetched per scroll trigger |
| `skeletonCount` | `number` | `3` | Number of shimmer placeholder cards shown while loading |
| `maxItems` | `number` | `50` | Total item cap; shows end-of-feed banner when reached |
| `loadDelay` | `number` | `1400` | Minimum simulated fetch delay in ms (for skeleton visibility in dev) |
| `fetchItems` | `async (start: number, count: number) => any[]` | built-in mock | Custom async data-fetching function |
| `renderItem` | `(item: any, index: number) => ReactNode` | built-in `FeedCard` | Custom card renderer |

---

## 📤 Named Exports

In addition to the default export, the following sub-components are exported for composition:

```jsx
import InfiniteScrollFeedLoader, {
  FeedCard,        // Single loaded feed card
  ShimmerCard,     // Single shimmer placeholder
  EndOfFeedBanner, // End-of-feed indicator
} from "./InfiniteScrollFeedLoader";
```

---

## 🎨 EaseMotion CSS Integration

This component uses EaseMotion's skeleton utility classes on all shimmer elements:

```
ease-skeleton         → base shimmer gradient & animation
ease-skeleton-circle  → circular avatar placeholder (border-radius: 50%)
ease-skeleton-text    → text-line placeholder (height: 0.8em)
```

All `ease-skeleton-*` classes are applied **in addition** to the scoped `.isl-*` classes, so the component works perfectly with or without the full EaseMotion stylesheet linked.

---

## ♿ Accessibility

- All skeleton cards carry `role="status"` and an `aria-label` for screen readers.
- Error messages use `role="alert"` for immediate announcement.
- Every interactive button has a descriptive `aria-label`.
- All animations are disabled when `prefers-reduced-motion: reduce` is detected.

---

## 📁 Folder Structure

```
react-infinite-scroll-feed-loader-with-shimmer-skeleton-28141/
├── InfiniteScrollFeedLoader.jsx   ← Main component + sub-components
├── style.css                      ← Scoped styles with EaseMotion integration
└── README.md                      ← This file
```

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 58+ | ✅ Full |
| Firefox 55+ | ✅ Full |
| Safari 12.1+ | ✅ Full |
| Edge 79+ | ✅ Full |

`IntersectionObserver` is supported in all modern browsers. For legacy environments, a polyfill can be added without modifying this component.

---

## 📝 License

MIT — Free to use, copy, modify, and distribute.
