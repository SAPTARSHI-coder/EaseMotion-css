# Infinite Scroll Feed Loader with Shimmer Skeleton

A lightweight React component that simulates an infinite scrolling feed with animated shimmer skeleton placeholders while new content is loading.

## Features

- Infinite scroll using Intersection Observer
- Animated shimmer loading skeleton
- Responsive layout
- No external dependencies
- Easy to customize
- Reusable React component

## Installation

Copy the following files into your project:

- `InfiniteScrollFeedLoader.jsx`
- `style.css`

Import the stylesheet:

```jsx
import "./style.css";
```

## Usage

```jsx
import InfiniteScrollFeedLoader from "./InfiniteScrollFeedLoader";

function App() {
  return (
    <InfiniteScrollFeedLoader batchSize={6} />
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| batchSize | number | 6 | Number of feed items loaded per batch |

## Folder Structure

```
react-infinite-scroll-feed-loader-with-shimmer-skeleton/
├── InfiniteScrollFeedLoader.jsx
├── style.css
└── README.md
```

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

## License

MIT