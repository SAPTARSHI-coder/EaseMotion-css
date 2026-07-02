# React Component: Badge Notification Pulse Indicator (#28114)

A modular, copy-paste ready React `<BadgeNotification>` component that wraps any element and attaches an animated notification badge with an infinite pulse ripple ring, a spring-physics entrance, and a pop animation when the count changes. Supports 5 color variants, 4 corner positions, a dot-only mode, and auto-hides at zero. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `BadgeNotification.jsx`: The React component exporting `BadgeNotification` (default) and `PulseDot` (named).
- `style.css`: The CSS powering the entrance spring, ripple pulse ring, pop animation, dot variant, and 4 corner positions.
- `demo.html`: A self-contained demo showcasing live count updates, all variants, dot-only, corner positions, and zero-hide behavior.

## 🛠 Features

- **Pulse Ripple Ring**: An infinite `scale(1) → scale(2.6)` + fade ring emanates from the badge using `cubic-bezier(0, 0, 0.2, 1)` — EaseMotion's signature decelerating ripple.
- **Spring Entrance**: Badge enters with `scale(0) rotate(-10deg) → scale(1) rotate(0)` using `cubic-bezier(0.34, 1.56, 0.64, 1)` for a natural pop-in.
- **Pop on Count Change**: When `count` changes, the badge performs a quick scale overshoot (pop) using the `useEffect` + React key pattern.
- **Auto-hide at Zero**: Passing `count={0}` completely hides the badge without any DOM tricks.
- **Max Cap**: Counts over `max` (default 99) display as `"99+"`.
- **Dot-only Mode**: Pass `dot` prop to show a small indicator without any count number.
- **5 Variants**: `danger`, `warning`, `success`, `info`, `primary`.
- **4 Positions**: `top-right`, `top-left`, `bottom-right`, `bottom-left`.

## 🚀 How to use

```jsx
import BadgeNotification from './BadgeNotification';
import './style.css';

// Count badge on a notification bell
<BadgeNotification count={12} variant="danger">
  <button>🔔</button>
</BadgeNotification>

// Dot-only online indicator on an avatar
<BadgeNotification count={1} dot variant="success" position="bottom-right">
  <img src="/avatar.png" alt="User" />
</BadgeNotification>

// Warning badge, bottom-left, no pulse
<BadgeNotification count={3} variant="warning" position="bottom-left" pulse={false}>
  <div className="icon-box">⚠️</div>
</BadgeNotification>
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | The element to attach the badge to |
| `count` | `number` | — | Notification count. `0` hides the badge |
| `max` | `number` | `99` | Max count before showing `"max+"` |
| `variant` | `string` | `'danger'` | Color: `'danger'` \| `'warning'` \| `'success'` \| `'info'` \| `'primary'` |
| `pulse` | `boolean` | `true` | Show the infinite ripple ring |
| `position` | `string` | `'top-right'` | Corner: `'top-right'` \| `'top-left'` \| `'bottom-right'` \| `'bottom-left'` |
| `dot` | `boolean` | `false` | Dot-only mode (ignores count label) |
| `animate` | `boolean` | `true` | Pop animate on count change |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A static red circle tells you "there are unread items." A badge with a ripple pulse tells you "there are unread items *right now* and they need your attention." The infinite ripple is the same visual language used by real-world "live" indicators (like YouTube's LIVE badge or Google Maps) — it communicates urgency without sound. By combining this with a spring pop on count change, EaseMotion transforms a passive count display into an active, living indicator that demands attention with physical weight.
