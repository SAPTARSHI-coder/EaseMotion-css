# ease-rating — Rating Star Bar with Interactive Burst Effect

## What does this do?

A React component for an interactive star rating with hover preview, click-to-rate, and a burst animation on selection.

## How is it used?

```jsx
import RatingStarBar from './RatingStarBar';

<RatingStarBar max={5} initial={3} onChange={v => console.log(v)} />
```

### Props

| Prop | Type | Default |
|---|---|---|
| max | number | 5 |
| initial | number | 0 |
| onChange | function | — |
