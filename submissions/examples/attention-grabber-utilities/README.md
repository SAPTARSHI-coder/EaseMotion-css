# Attention-Grabber Utilities 🎯

A set of animation-first helper classes designed to draw immediate, smooth user attention to specific UI states—like active alerts, real-time indicators, and core calls-to-action.

## Classes Included

| Class Name         | Type          | Interaction Layout                                                         |
| :----------------- | :------------ | :------------------------------------------------------------------------- |
| `.attention-pulse` | Infinite Loop | Smooth scale transforms alongside custom opacity variance.                 |
| `.attention-ring`  | Pseudo Loop   | Generates an outward geometric shadow ripple behind the container profile. |

## Usage Examples

### 1. Active Status Tracker Indicator

```html
<div class="status-badge">
  <span class="dot attention-pulse"></span>
  Live Tracking Active
</div>
2. High Priority Action Button Overlay
<button class="btn btn-primary attention-ring">Complete Purchase</button>
```
