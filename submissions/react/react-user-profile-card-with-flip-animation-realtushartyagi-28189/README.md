# React User Profile Card with Flip Animation

A modular, copy-paste ready React component that displays a user profile card with a smooth 3D flip animation revealing an "About" panel on the back, powered by **EaseMotion CSS**.

## Files
- `ProfileCardFlip.jsx` – Core React component managing flip state with `useState`.
- `style.css` – EaseMotion CSS styles using `perspective`, `transform-style: preserve-3d`, `backface-visibility`, and `rotateY` transitions for the 3D flip effect.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import ProfileCardFlip from "./ProfileCardFlip.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import ProfileCardFlip from './ProfileCardFlip';

function App() {
  return (
    <ProfileCardFlip
      name="Alex Johnson"
      role="Frontend Developer"
      avatar="https://i.pravatar.cc/150?img=33"
      bio="Passionate about building beautiful, accessible interfaces."
      email="alex@example.com"
      stats={[
        { label: "Projects", value: "42" },
        { label: "Followers", value: "1.2k" },
        { label: "Stars", value: "389" },
      ]}
    />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `"Alex Johnson"` | User's display name shown on the front. |
| `role` | `string` | `"Frontend Developer"` | User's role or job title. |
| `avatar` | `string` | pravatar URL | URL for the profile avatar image. |
| `bio` | `string` | sample text | Short bio displayed on the back of the card. |
| `email` | `string` | `"alex@example.com"` | Contact email shown as a link on the back. |
| `stats` | `Array<{label, value}>` | 3 sample stats | Stats array displayed on the card front. |

## Why it fits EaseMotion CSS
The entire flip effect is driven by pure CSS — `perspective`, `transform-style: preserve-3d`, `backface-visibility: hidden`, and a `rotateY(180deg)` transition with a custom `cubic-bezier` easing. React only manages the `flipped` boolean state; zero JS animation libraries are used.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-user-profile-card-with-flip-animation-realtushartyagi-28189/`. No changes to `core/` or `components/`.
