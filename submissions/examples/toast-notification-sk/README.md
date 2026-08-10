# CSS Toast Notification Animation Collection

## 1. What does this do?
This is an interactive component playground showcasing entry and exit transition animations for standard toast alerts (Success, Error, Warning, Info, and Loading) utilizing different visual styles (Slide Right, Slide Left, Bounce, Fade, and Scale).

## 2. How is it used?
Developers apply specific animation classes to slide-in, bounce, or scale toast alert banners relative to a wrapper stacking container:

```html
<!-- Stacking layout wrapper -->
<div class="toast-stack-overlay">
  <div class="toast live-toast-success">
    <div class="toast-accent accent-success"></div>
    <div class="toast-body">
      <div class="live-toast-title">Toast Title</div>
      <p class="live-toast-message">Notification details here.</p>
    </div>
  </div>
</div>
```

```css
/* Live animations triggered on wrapper overlay */
.live-toast-success {
  animation: slide-right-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

## 3. Why is it useful?
It aligns with EaseMotion CSS's core philosophy of providing lightweight, high-performance UI motion patterns. It helps developers easily study and integrate CSS-only notifications that load instantly and dismiss cleanly, avoiding heavy JavaScript dependencies or performance-heavy reflow properties.

---

## Overview
This showcase provides a comprehensive gallery of toast notification styles. It includes a live playground where clicking toggle buttons triggers overlays in the corner of the browser, demonstrating how these transitions work in real dashboards and applications.

## Features
- **Five Notification Profiles**: Distinct styles for Success (Slide Right), Error (Slide Left), Warning (Bounce Entry), Info (Fade In), and Loading (Scale In) alerts.
- **Pure CSS Interactive Playground**: Toggles live overlays and changes speed durations (0.5s, 2s, 4s) using checkbox and radio input hooks.
- **Sleek UI Styling**: Built with obsidian indigo backgrounds, glassmorphic card overlays, clean custom inline vector SVGs, and keyboard focus states.
- **Accessibility & Validation**: Uses semantic HTML5, screen-reader headings, clean margins, and proper contrast.

## Folder Structure
```text
submissions/examples/toast-notification-sk/
├── demo.html     # Interactive triggers, static visual showcases, and fixed stacking markup
├── style.css     # Glassmorphic themes, checkbox display mappings, and layout coordinate keyframes
└── README.md     # Mandatory question reviews, animation mechanics, and guides
```

## Animation Details

| Animation Name | Entrance Style | Transition Profile | Best Applied To |
|:---|:---|:---|:---|
| **Success Toast** | `slide-right-in` | Slates from right edge, decelerating softly to rest. | Saved items, completed payments, created records. |
| **Error Toast** | `slide-left-in` | Slates from left edge, highlighting lateral contrast. | Server timeouts, payment errors, invalid credentials. |
| **Warning Toast** | `bounce-in` | Translates upwards, overshooting and elastic-bouncing. | Low disk space alerts, credit limits, security alerts. |
| **Info Toast** | `fade-in` | Modifies opacity from 0 to 1 without coordinate shifts. | System updates, server logs, status changes. |
| **Loading Toast** | `scale-in` | Scales 3D parameters from 0.85 to 1.0. | Processing database syncs, file conversions. |

## Customization
Adjust colors and properties inside [style.css](style.css):

### Change Toast Accent Theme Colors
```css
:root {
  --color-success: #10b981;       /* Emerald green success bar */
  --color-error: #ef4444;         /* Crimson red error bar */
  --color-warning: #f59e0b;       /* Amber yellow warning bar */
}
```

### Speed Configuration
Modify duration variables linked to radio checkboxes:
```css
#speed-fast:checked ~ .app-wrapper { --anim-duration: 0.2s; }
#speed-normal:checked ~ .app-wrapper { --anim-duration: 0.4s; }
#speed-slow:checked ~ .app-wrapper { --anim-duration: 0.8s; }
```

## Browser Compatibility
- **Google Chrome**: 50+ (Full Support)
- **Mozilla Firefox**: 49+ (Full Support)
- **Safari**: 10+ (Full Support)
- **Microsoft Edge**: 79+ (Full Support)

## Future Improvements
- Add automated auto-dismiss timers using CSS animation delays that toggle height collapsing at keyframe ends.
- Extend stacking support using sibling counters in CSS grid arrays.
