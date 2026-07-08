# React Component: User Profile Card with Flip Animation (#28099)

A modular, copy-paste ready React `<ProfileCard>` component that features a stunning 3D flip animation to reveal secondary content (social links, contact actions) on the back. Leverages CSS 3D transforms (`perspective`, `backface-visibility`, `rotateY`) governed by a physical `cubic-bezier` spring, alongside staggered entrance animations for the back-face content. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `ProfileCard.jsx`: The React component that manages the internal `isFlipped` state and maps over the provided arrays for stats and social links.
- `style.css`: The CSS stylesheet powering the 3D scene (`perspective`, `transform-style: preserve-3d`), the 180-degree flip spring animation, and the staggered slide-in entrance for the social links on the back.
- `demo.html`: A self-contained demo showcasing two user profiles with different colors, avatar images, and mock data — opens directly in a browser.

## 🛠 Features

- **3D Flip Physics**: The card toggles between front and back faces using `transform: rotateY(180deg)` backed by `cubic-bezier(0.34, 1.56, 0.64, 1)`. The spring curve gives the card weight, slightly overshooting before settling.
- **Hardware Accelerated**: Uses `backface-visibility: hidden` and `transform-style: preserve-3d` to ensure the reverse side doesn't bleed through and rendering is offloaded to the GPU.
- **Staggered Back-Face Reveal**: When the card flips, the social links on the back don't just appear instantly. They slide in using `opacity` and `translateX` with a staggered delay calculated via `--social-delay: ${index * 0.1}s`, timed perfectly to trigger *after* the flip animation completes.
- **Dynamic Theming**: The `color` prop sets a CSS custom property (`--ease-pc-color`) which automatically themes the front header gradient, buttons, role text, and social link hover states.

## 🚀 How to use

```jsx
import ProfileCard from './ProfileCard';
import './style.css';

const user = {
  avatarUrl: 'https://i.pravatar.cc/150?img=33',
  name: 'Alex Rivera',
  role: 'Senior Motion Designer',
  bio: 'Crafting fluid digital experiences and physics-based interactions.',
  color: '#8b5cf6',
  stats: [
    { label: 'Followers', value: '12.4K' },
    { label: 'Projects', value: '142' }
  ],
  socials: [
    { platform: 'Twitter', link: 'https://twitter.com', icon: <svg>...</svg> },
    { platform: 'GitHub', link: 'https://github.com', icon: <svg>...</svg> }
  ]
};

const MyDirectory = () => (
  <ProfileCard {...user} />
);
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatarUrl` | `string` | — | URL to the user's avatar image. |
| `name` | `string` | — | User's full name. |
| `role` | `string` | — | User's job title or role. |
| `bio` | `string` | — | Short biography or tagline. |
| `stats` | `Array<{label, value}>` | `[]` | Array of stats to display on the front face. |
| `socials` | `Array<{platform, link, icon}>` | `[]` | Array of social links to display on the back face. |
| `color` | `string` | `'#3b82f6'` | CSS color string used to theme the card. |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A standard "details" button usually swaps out content instantly or opens a standard modal. By turning the card into a physical 3D object that rotates in space, we preserve spatial continuity. The user understands exactly where the new information is coming from (the back of the card). The `cubic-bezier` spring gives the card a feeling of physical mass, and the staggered entrance of the social links ensures the back side feels dynamic rather than static.
