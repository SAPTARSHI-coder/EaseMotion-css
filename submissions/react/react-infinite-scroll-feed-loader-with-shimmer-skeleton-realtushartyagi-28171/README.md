# React Infinite Scroll Feed Loader with Shimmer Skeleton

A modular, copy-paste ready React component providing an infinite-scroll social feed with animated shimmer skeleton placeholders during loading — powered by **EaseMotion CSS**.

## Files
- `InfiniteScrollFeed.jsx` – Core component using `IntersectionObserver` to trigger pagination and manage shimmer/content state.
- `style.css` – EaseMotion CSS: `easeIssShimmer` (`background-position` sweep) and `easeIssFadeUp` (`translateY` + `opacity`) keyframes.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import InfiniteScrollFeed from "./InfiniteScrollFeed.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import InfiniteScrollFeed from './InfiniteScrollFeed';

async function fetchItems(page) {
  const res = await fetch(`/api/feed?page=${page}`);
  return res.json(); // Array of { id, author, avatar, time, text }
}

function App() {
  return (
    <InfiniteScrollFeed
      fetchItems={fetchItems}
      skeletonCount={3}
      endMessage="You've reached the end!"
    />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fetchItems` | `(page: number) => Promise<Array>` | *(required)* | Async function returning items for the given page. Return empty array to signal end. |
| `skeletonCount` | `number` | `3` | Number of shimmer skeleton cards displayed during loading. |
| `endMessage` | `string` | `"You've reached the end!"` | Message shown after all items are loaded. |

## Feed Item Shape
| Field | Type | Description |
|-------|------|-------------|
| `id` | `string \| number` | Unique item identifier. |
| `author` | `string` | Author display name. |
| `avatar` | `string` | Author avatar image URL. |
| `time` | `string` | Human-readable timestamp. |
| `text` | `string` | Post body text. |

## Why it fits EaseMotion CSS
All animations are CSS-first: the shimmer uses `background-position` sweep via `@keyframes easeIssShimmer`, and loaded items fade in with `@keyframes easeIssFadeUp`. React manages pagination state via `IntersectionObserver` — no JS animation libraries needed.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-infinite-scroll-feed-loader-with-shimmer-skeleton-realtushartyagi-28171/`. No changes to `core/` or `components/`.
