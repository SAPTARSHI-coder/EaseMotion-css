# Rating Star Bar with Interactive Burst Effect (React Component)

A highly satisfying, interactive star rating component built for React. It features a custom SVG implementation with native half-star support, and includes a playful, dependency-free particle burst animation when a user commits to a rating.

## Features
- **Particle Burst Interaction:** Clicking a star triggers a playful micro-interaction where SVG particles shoot outward radially, and the star itself "pops" (`ease-pop-bounce`).
- **Half-Star Support:** Uses SVG `<linearGradient>` to seamlessly render half stars without requiring dual icons or complex masking.
- **Dynamic Hover State:** Stars fluidly fill and unfill as the user drags their mouse across the bar.
- **EaseMotion Integration:** Utilizes EaseMotion utility classes for entrance transitions (`ease-fade-in`, `ease-slide-up`) and hover effects (`ease-hover-scale`).
- **Zero External Dependencies:** Built with pure React hooks (`useState`) and standard CSS keyframes.

## Installation

1. Copy `RatingStarBar.jsx` into your components directory.
2. Copy `style.css` (or merge its contents into your layout stylesheet).
3. Wire the `onChange` prop to capture the user's rating.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxStars` | Number | `5` | The total number of stars to render. |
| `defaultRating` | Number | `0` | The initial selected rating (supports decimals like 4.5). |
| `readOnly` | Boolean | `false` | If true, disables hover and click interactions. |
| `onChange` | Function | - | Callback triggered when a rating is selected. Passes the numerical rating. |

## Usage Example

```jsx
import React, { useState } from 'react';
import RatingStarBar from './RatingStarBar';

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ padding: '50px', background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
      
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 15px 0', fontFamily: 'sans-serif' }}>Rate your experience:</h3>
        
        <RatingStarBar 
          maxStars={5}
          defaultRating={rating}
          onChange={(val) => setRating(val)}
        />
        
        {rating > 0 && (
          <p style={{ marginTop: '15px', color: '#10b981', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center' }}>
            Thanks for rating us {rating} stars!
          </p>
        )}
      </div>
      
    </div>
  );
}

export default App;
```
