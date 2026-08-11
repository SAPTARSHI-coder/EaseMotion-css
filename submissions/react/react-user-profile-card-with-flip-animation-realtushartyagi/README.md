# React User Profile Card with Flip Animation

A modular, copy-paste ready React component that provides a beautiful 3D flip-card user profile interface using **EaseMotion CSS**.

## Files
- `UserProfileCard.jsx` – The core React component handling state (if click-to-flip is enabled) and rendering the front/back of the card.
- `style.css` – Custom EaseMotion CSS styles defining the 3D perspective, hover/click interactions, and cubic-bezier transition curves.
- `demo.html` – A standalone HTML file demonstrating the flip card using Babel and React CDNs.

## Installation
1. Copy the `react-user-profile-card-with-flip-animation-realtushartyagi` folder into your project's `submissions/react/` directory (or wherever your components live).
2. Import the component:
   ```jsx
   import UserProfileCard from "./UserProfileCard.jsx";
   ```
3. Include the stylesheet in your HTML or import it in your bundler:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import UserProfileCard from './UserProfileCard';

function App() {
  return (
    <div>
      {/* Default hover-to-flip behavior */}
      <UserProfileCard 
        name="Alice Smith"
        role="UX Designer"
        avatar="https://i.pravatar.cc/150?img=5"
        bio="Creating seamless and intuitive user experiences."
      />

      {/* Click-to-flip behavior */}
      <UserProfileCard 
        name="Bob Johnson"
        role="Backend Engineer"
        avatar="https://i.pravatar.cc/150?img=11"
        bio="Building scalable architectures."
        clickToFlip={true}
      />
    </div>
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `"John Doe"` | The user's name. |
| `role` | `string` | `"Frontend Developer"` | The user's role or job title. |
| `avatar` | `string` | `(pravatar url)` | URL string for the user's avatar image. |
| `bio` | `string` | `(sample text)` | A short biography displayed on the back of the card. |
| `clickToFlip` | `boolean` | `false` | If true, the card flips on click rather than on hover. |

## Why it fits EaseMotion CSS
This component adheres to the EaseMotion philosophy by using pure CSS `transform-style: preserve-3d`, `perspective`, and `backface-visibility` to handle the complex 3D flip animation. The component avoids JS animation libraries entirely, instead relying on a buttery-smooth `cubic-bezier` transition controlled via class toggling.

## Demo
Open `demo.html` directly in a web browser—no server needed.

---

> **Note:** The PR should only modify files inside `submissions/react/react-user-profile-card-with-flip-animation-realtushartyagi/`. No changes to `core/` or `components/`.
