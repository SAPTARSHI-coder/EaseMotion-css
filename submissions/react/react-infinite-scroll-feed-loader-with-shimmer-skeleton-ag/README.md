# React Infinite Scroll Feed Loader

A reusable React component for infinite scrolling with a built-in shimmer skeleton. It automatically loads more content when the user reaches the end of the feed.

## Features

- Automatically loads more items using the Intersection Observer API.
- Displays a shimmer skeleton while data is loading.
- No external dependencies beyond React.
- Reusable through simple props.
- Includes accessible loading text for screen readers.

## Installation

Copy `InfiniteScrollFeed.jsx` and `style.css` into your project.

## Usage

```jsx
import InfiniteScrollFeed from "./InfiniteScrollFeed";

<InfiniteScrollFeed
  items={items}
  fetchMore={loadMore}
  renderItem={(item) => <PostCard post={item} />}
  isLoading={loading}
  hasMore={hasMore}
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `items` | Array | Items to render. |
| `fetchMore` | Function | Called when the end of the list becomes visible. |
| `renderItem` | Function | Renders each item. |
| `isLoading` | Boolean | Shows the loading skeleton. |
| `hasMore` | Boolean | Controls whether more items should be loaded. |
| `loadingText` | String | Accessible loading message. |