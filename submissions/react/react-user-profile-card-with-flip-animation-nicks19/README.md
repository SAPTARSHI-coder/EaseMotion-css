# User Profile Card with Flip Animation

A stylish, interactive React component representing a user profile card. It utilizes a 3D flip animation to reveal extended user details, stats, and additional actions on the back of the card.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `user` | `object` | **Required** | The user data object to populate the card |
| `onFollow` | `(user) => void` | `undefined` | Callback fired when the "Follow" button is clicked |
| `onMessage` | `(user) => void` | `undefined` | Callback fired when the "Message" button is clicked |

### User Object Structure
```typescript
{
  name: string,
  role: string,
  location: string,
  avatar?: string,
  bio: string,
  stats: {
    posts: number,
    followers: string | number,
    following: string | number
  }
}
```

## Installation

1. Copy `UserProfileCard.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import UserProfileCard from './UserProfileCard';

function App() {
  const mockUser = {
    name: "Alex Rivera",
    role: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    bio: "Passionate about UI/UX, animations, and building accessible web experiences. Core contributor to EaseMotion CSS.",
    stats: {
      posts: 142,
      followers: "12.4K",
      following: 890
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <UserProfileCard 
        user={mockUser} 
        onFollow={(u) => console.log('Followed', u.name)}
        onMessage={(u) => console.log('Messaging', u.name)}
      />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **3D Flip Transition**: Uses standard EaseMotion `cubic-bezier(0.34, 1.56, 0.64, 1)` easing for the `rotateY(180deg)` flip effect, delivering a highly responsive, springy motion.
- **Micro-interactions**: Incorporates `.ease-squish-button` for button presses and a `.ease-pulse-hover` effect on the avatar image.
- **Zero Dependencies**: Relies solely on native CSS 3D transforms (`perspective`, `transform-style`, `backface-visibility`) and React `useState`, making it lightweight and highly performant.
