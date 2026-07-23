# React Rating Star Bar with Interactive Burst Effect

## 1. What does this do?
This is an interactive, fully accessible React Star Rating component engineered with the EaseMotion philosophy. It features smooth hover interpolation across siblings, cubic-bezier scaling on interaction, and a purely CSS-driven radial particle burst animation that triggers precisely on the user's selected rating to provide high-quality visual feedback.

## 2. How is it used?
The component is fully self-contained. Import the component and pass the desired props.

```jsx
import React, { useState } from 'react';
import RatingStarBar from './RatingStarBar';

const App = () => {
  const [currentRating, setCurrentRating] = useState(3);

  const handleRating = (newRating) => {
    console.log(`User selected ${newRating} stars`);
    setCurrentRating(newRating);
  };

  return (
    <div className="app-container">
      <h2>Rate Your Experience</h2>
      <RatingStarBar initialRating="{currentRating}" onRatingChange="{handleRating}" totalStars="{5}"/>
    </div>
  );
};

export default App;
```
## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalStars` | `number` | `5` | The maximum number of stars to render. |
| `initialRating` | `number` | `0` | The pre-filled rating value on component mount. |
| `onRatingChange` | `(rating: number) => void` | `undefined` | Callback function fired when a new rating is selected. |

## 3. Why is it useful for EaseMotion?
This component aligns perfectly with EaseMotion’s animation-first, human-readable ethos. By separating the heavy-lifting of the physics (particle bursts and cubic-bezier pops) into pure modular CSS rather than relying on bloated JS animation libraries, it guarantees a 60fps interaction that is easy for developers to copy, paste, and immediately adapt. Furthermore, it incorporates strict ARIA roles out-of-the-box, proving that beautiful motion UI does not have to compromise on accessibility.