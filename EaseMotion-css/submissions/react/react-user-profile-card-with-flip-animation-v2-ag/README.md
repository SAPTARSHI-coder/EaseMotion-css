# User Profile Card with Flip Animation (React Component)

A highly interactive, copy-paste ready React component that showcases a beautiful 3D flip animation revealing user statistics and details. It elegantly utilizes standard CSS `perspective` accompanied by EaseMotion micro-interactions.

## Features
- **3D Flip Interaction:** Smoothly toggles between the front and back of the profile card using React state (`useState`) to toggle CSS classes controlling a 3D matrix transformation (`preserve-3d`).
- **EaseMotion Integration:** Utilizes utility classes like `ease-fade-in-up`, `ease-pulse-slow`, and `ease-slide-up` to enhance the entrance flow and user focus areas.
- **Accessible & Robust:** Built with correct aria-labels, a `role="button"`, keyboard handlers (`onKeyDown`), and event propagation stoppers on inner elements.
- **Zero External Dependencies:** Built completely with pure React hooks and standard CSS.

## Installation

1. Copy `UserProfileCard.jsx` into your React project components directory.
2. Copy `style.css` (or merge its contents into your global CSS setup).
3. Check out the default props to see how the user object is structured.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `user` | Object | (Jane Doe mock) | Contains the profile data: name, role, avatar URL, bio, and a stats object. |

### User Object Schema
```js
{
  name: String,      // e.g. "Jane Doe"
  role: String,      // e.g. "Senior UI Engineer"
  avatar: String,    // e.g. "https://i.pravatar.cc/150?u=jane"
  bio: String,       // e.g. "Passionate about creating fluid..."
  stats: {
    projects: Number,  // 42
    followers: String, // "12k"
    rating: Number     // 4.9
  }
}
```

## Usage Example

```jsx
import React from 'react';
import UserProfileCard from './UserProfileCard';

const mockUser = {
  name: "Alex Rivera",
  role: "Full Stack Developer",
  avatar: "https://i.pravatar.cc/150?u=alex",
  bio: "Building the next generation of web tools with a focus on performance and accessibility.",
  stats: {
    projects: 14,
    followers: "3.2k",
    rating: 4.8
  }
};

function App() {
  return (
    <div style={{ background: '#e2e8f0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <UserProfileCard user={mockUser} />
    </div>
  );
}

export default App;
```
