# Notification Center Panel

A slide-in notification center panel triggered by a bell button —
with unread badges, tabs, mark-all-read, and dismiss — using
EaseMotion CSS fade animations.

## Structure
notification-center-panel/
├── demo.html
├── style.css
└── README.md

## Usage

```html
<!-- Bell trigger -->
<button class="bell-btn" id="bellBtn">
  🔔
  <span class="badge">4</span>
</button>

<!-- Panel -->
<div class="notif-panel" id="notifPanel">
  <div class="notif-item unread ease-fade-in">
    <div class="notif-avatar notif-avatar-purple">S</div>
    <div class="notif-content">
      <p class="notif-text"><strong>Sarah Kim</strong> commented on your PR.</p>
      <span class="notif-time">2 min ago</span>
    </div>
    <div class="notif-dot"></div>
  </div>
</div>
```

## EaseMotion Classes Used

| Class | Usage |
|---|---|
| `ease-fade-in` | Each notification item entrance |
| `ease-delay-100` to `ease-delay-300` | Staggered item appearance |

## Features
- Slide-in panel from right via CSS transition
- Bell badge with pulse animation
- Unread / read states with indigo dot indicator
- Tab switching (All / Unread / Mentions)
- Mark all read clears badges and dots
- Click overlay to dismiss
- Smooth scrollable list
- Fully responsive (full-width on mobile)
- Respects `prefers-reduced-motion`

## Use Cases
- Dashboard notification centers
- SaaS app activity feeds
- Admin panel alerts
- E-commerce order updates