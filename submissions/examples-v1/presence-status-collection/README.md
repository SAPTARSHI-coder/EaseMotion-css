# Animated Presence/Status Indicator Collection

A lightweight, reusable, and 100% pure CSS collection of presence/status indicator dots. This component provides the foundational primitives (the small colored dots typically anchored to user avatars) used to indicate a user's real-time availability status—such as Online, Away, Busy, or Offline.

Built as a submission for **GSSoC 2026** under `submissions/examples/presence-status-collection/`.

---

## 🚀 Features

*   **100% Pure CSS:** Zero JavaScript dependencies. Highly performant and easy to integrate into any frontend framework.
*   **Smooth Animations:** Utilizes `@keyframes` for subtle, non-intrusive micro-interactions (breathing pulse for online, double-blink for busy).
*   **Accessible & Semantically Adaptable:** Uses utility classes that can be applied to any inline or block element (like `<span>` or `<div>`).
*   **Agnostic Integration:** Status changes are handled entirely by toggling classes, making it seamless to hook into your application's state or data layer.

---

## 🎨 Proposed Classes & Behaviors

| Class Name | Status | Visual Indicator & Animation |
| :--- | :--- | :--- |
| `ease-presence-dot` | **Base** | Small circular badge anchored to the corner of an avatar wrapper. |
| `ease-presence-online` | **Online** | Green dot featuring a soft, continuous breathing pulse animation. |
| `ease-presence-away` | **Away/Idle** | Amber dot, completely static to represent inactivity. |
| `ease-presence-busy` | **Busy/Do Not Disturb** | Red dot with a subtle, periodic double-blink animation. |
| `ease-presence-offline` | **Offline** | Grey dot with reduced opacity and no animation. |

---

## 🖥️ Usage Example

To use these status indicators, ensure the parent element (the avatar container) has relative positioning, then append the indicator element inside it:

```html
<div class="avatar-wrapper">
  <!-- User Avatar -->
  <img src="avatar.jpg" alt="User Avatar" class="avatar" />
  
  <!-- Presence Indicator (Change status by swapping the modifier class) -->
  <span class="ease-presence-dot ease-presence-online"></span>
</div>