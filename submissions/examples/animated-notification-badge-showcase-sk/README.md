# Animated Notification Badge Showcase

## 1. What does this do?
This is a standalone, production-ready showcase exhibiting eight modern, pure-CSS animated states for notification badges (Pulse, Bounce, Ripple, Glow, Shake, Ping, Scale, and Floating) integrated on standard web application icons.

## 2. How is it used?
Developers apply the corresponding class names to a notification badge absolute-positioned relative to a parent container icon:

```html
<!-- Base markup structure -->
<div class="icon-wrapper">
  <!-- SVG Icon here -->
  <div class="badge badge-pulse">3</div>
</div>
```

```css
/* Styling layout */
.icon-wrapper {
  position: relative;
  display: inline-block;
}
.badge {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}
```

## 3. Why is it useful?
It aligns with EaseMotion CSS's core philosophy of providing reusable, high-performance UI motion assets that enhance usability. These badges draw attention efficiently to state updates using lightweight CSS transitions and keyframes, avoiding the need for heavy JavaScript libraries.

---

## Overview
This showcase provides a comprehensive gallery of badge states. It features an interactive control deck to dynamically modify animation playback speeds and toggle play/pause states using pure CSS variable propagation.

## Features
- **Eight Badge States**: Includes heartbeat pulses, vertical hops, sonar waves, glowing breath cycles, rotational tilts, settings onboarding radar dots, score expansions, and floating loops.
- **Pure CSS Interactive Controls**: Interactive toggling between 3 speeds (0.5s, 2s, 4s) and Play/Pause states without JavaScript dependencies.
- **Obsidian Dark Layout**: Designed with slate-indigo backdrop fills, glassmorphic cards, responsive cards grids, and clean vector preview layouts.
- **Accessibility & Validation**: Built with clear headings, focus outline tabs, proper contrast ratios, and semantic structure.

## Folder Structure
```text
submissions/examples/animated-notification-badge-showcase-sk/
├── demo.html     # HTML structure, SVG inline visuals, code snippets, and controllers
├── style.css     # Dark mode dashboard designs, layout grids, and keyframe definitions
└── README.md     # Mandatory question reviews, animation mechanics, and guidelines
```

## Animation Mechanics Guide

Each animation uses target keyframes designed for high performance:

| Class Name | Animation Type | Mechanics | Recommended Use Cases |
|:---|:---|:---|:---|
| **`badge-pulse`** | Pulse | Rhythmic heartbeat scaling (`transform: scale`) of the badge. | Passive updates, unread mail inboxes, message counts. |
| **`badge-bounce`** | Bounce | Vertical bounce translations using custom cubic-beziers. | Immediate alarms, direct messages, urgent warnings. |
| **`badge-ripple`** | Ripple | Pseudo-element `:after` radiating box-shadow rings. | Cart updates, download states, active syncs. |
| **`badge-glow`** | Glow | Soft box-shadow blur breathing intensity transitions. | Profile online statuses, standby/live indicators. |
| **`badge-shake`** | Shake | Rotary rotation shakes preserving positioning offsets. | Incoming video calls, call dial-ins, alarm updates. |
| **`badge-ping`** | Ping | Radially scaling and fading background circle layer. | Onboarding tips, settings releases, new feature alerts. |
| **`badge-scale`** | Scale | Continuous scale expansion cycles. | Likes counts, trend metrics, real-time counters. |
| **`badge-floating`** | Floating | Slow sinusoidal vertical floating pathways. | Premium item updates, bookmark saves, page tags. |

## Customization
Adjust colors and properties inside [style.css](style.css):

### Change Red Accent Badge Color
```css
:root {
  --color-badge: #f43f5e;          /* Update base color */
  --color-badge-bg: linear-gradient(135deg, #fb7185 0%, #f43f5e 100%);
}
```

### Speed Configuration
Modify duration variables linked to checkboxes:
```css
#speed-fast:checked ~ .app-wrapper { --anim-duration: 0.5s; }
#speed-normal:checked ~ .app-wrapper { --anim-duration: 2.0s; }
#speed-slow:checked ~ .app-wrapper { --anim-duration: 4.0s; }
```

## Browser Compatibility
- **Google Chrome**: 50+ (Full Support)
- **Mozilla Firefox**: 49+ (Full Support)
- **Safari**: 10+ (Full Support)
- **Microsoft Edge**: 79+ (Full Support)
