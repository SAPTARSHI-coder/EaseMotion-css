# EaseStarRating

An interactive star-rating React component with hover preview and click-to-set value.

## Usage

```jsx
import EaseStarRating from "./EaseStarRating";

<EaseStarRating count={5} value={3} onChange={{(v) => console.log(v)}} />
```

## Description

Use cases: review forms, feedback widgets, content rating.

Props: count: number, value: number, onChange: (v:number)=>void, readOnly: boolean.

## Files

- `EaseStarRating.jsx` — the React component (real, working, no placeholder)
- `README.md` — this file
