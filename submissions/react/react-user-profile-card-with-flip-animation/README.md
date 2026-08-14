# React Component: User Profile Card with Flip Animation (#28009)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders an interactive, two-sided 3D profile card. It leverages CSS `transform-style: preserve-3d` and `backface-visibility: hidden` to create a realistic physical card flip effect controlled by React state.

## 📦 What's included?

- `ProfileCard.jsx`: The React component managing the `isFlipped` state. It handles keyboard accessibility (so the card can be flipped via `Enter` or `Space`), prevents event bubbling on nested buttons, and maps the user data to the front and back faces.
- `style.css`: The CSS stylesheet powering the 3D perspective wrapper, the spring physics (`cubic-bezier`) of the `rotateY` transform, and the layout of both faces.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone, including sample user data to demonstrate the front and back layout.

## 🛠 Features

- **3D Physics**: The container utilizes `perspective: 1200px` to give the card physical depth as it rotates towards the user. The rotation is timed using a `cubic-bezier(0.34, 1.56, 0.64, 1)` curve for a satisfying overshoot bounce.
- **Backface Visibility**: The front and back UI layers are stacked absolute elements. By setting `-webkit-backface-visibility: hidden`, the browser handles hiding the opposite side during the 3D rotation without requiring complex JS opacity toggles.
- **Accessible Flip**: The entire card is an interactive zone. Focus management is handled on the root card wrapper (`tabIndex=0`), allowing keyboard users to trigger the flip via Enter/Space without getting trapped on the inner decorative flip icons.
- **Event Propagation Control**: Buttons inside the card (like "Follow" or Social links) use `e.stopPropagation()` so clicking them triggers their action *without* flipping the card.

## 🚀 How to use

1. Copy `ProfileCard.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Pass a `user` object matching the schema below.

```jsx
import React from 'react';
import ProfileCard from './ProfileCard';
import './style.css'; 

const Dashboard = () => {
  const userData = {
    name: "Alex Designer",
    role: "Senior UI/UX Engineer",
    bio: "Obsessed with micro-interactions and CSS physics.",
    avatar: "https://example.com/avatar.jpg",
    coverImage: "https://example.com/cover.jpg",
    isOnline: true,
    stats: { followers: "12K", following: "842", projects: "47" },
    skills: ["React", "CSS Animation", "Figma"]
  };

  return (
    <div className="grid">
      <ProfileCard user={userData} />
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes micro-interactions define the perceived quality of software.

Displaying dense information on a single card usually results in cluttered UI. By embracing 3D CSS physics, we solve a spatial problem: placing secondary information (bio, skills) on the physical "back" of the element. The `rotateY(180deg)` transition combined with a spring overshoot curve turns a mundane data-reveal into a delightful, tactile toy that users will repeatedly trigger just to feel the animation.
