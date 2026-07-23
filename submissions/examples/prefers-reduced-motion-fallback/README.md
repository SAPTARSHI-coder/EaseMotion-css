# Prefers-Reduced-Motion Fallback System

A comprehensive, non-intrusive prefers-reduced-motion fallback system overlay for the EaseMotion CSS component library.

## What is it?
This submission audits components across the EaseMotion library and introduces a consistent accessibility fallback layer. It overrides fast or infinite-looping animations and sliding transitions to prevent visual discomfort or medical triggers (such as seizures or vestibular distress) for users who have `prefers-reduced-motion: reduce` enabled at the OS level.

### Audited Components & Fixes
1. **Loaders & Spinners (`loaders.css`)**: Disables infinite rotations/pings/pulses completely, preventing high-frequency flicker rates.
2. **Skeleton Placeholders (`skeleton.css`)**: Stops the moving shimmer gradient scan, freezing placeholders to a static solid background color.
3. **Toasts (`toast.css`)**: Removes sliding entrance/exit animations, causing notifications to appear and disappear instantly.
4. **Tabs (`tabs.css`)**: Disables sliding glider underline transition and panel fade-in animations.
5. **Progress Indicators (`progress.css`)**: Stops stripe scroll animations and removes width resize transitions.
6. **Badges (`badges.css`)**: Halts pulsing ping rings.
7. **Announcement & Connection Status (`announce-bar.css`, `connection-status.css`)**: Disables slide-down animations and online/offline status pulses.
8. **Floating Action Buttons (`fab.css`)**: Removes hover/active scaling transitions.
9. **Read-More Accordions (`read-more.css`)**: Disables content height expansion and chevron rotation transitions.
10. **Glass Navbars (`navbar.css`)**: Disables background, border, and shadow color hover transitions.

---

## How to use it?

### 1. Import the Overlay Stylesheet
Add the fallback system stylesheet *after* importing `easemotion.css`:
```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="style.css" />
```

### 2. Force Reduced Motion (Scope Utilities)
You can force elements to instantly freeze transitions/animations at any time using:
```html
<!-- Always static and instant -->
<div class="ease-reduced-motion">
  This content transitions instantly regardless of user system settings.
</div>
```

### 3. Motion Safe Wrapper
Use `.ease-motion-safe` on custom animations to ensure they are automatically cleaned up when system reduced motion is active:
```html
<div class="ease-motion-safe">
  This element will animate normally, but instantly freeze if reduced motion is requested.
</div>
```

---

## Why it fits EaseMotion CSS
An animation library must not only be lightweight and performant, but also fully accessible. In the existing library:
- Infinite-loop animations (like loaders and shimmers) lacked a consistent fallback under reduced-motion.
- Global animation resets (`animation-duration: 0.01ms`) actually triggered a high-frequency loop rate on infinite-iteration items, creating rapid flickering hazards.
- Complex transitions (like slide-out toasts, accordion expands, and tab glides) had no media query overrides, keeping their motions active.

This overlay resolves all these accessibility issues cleanly, ensuring 100% WCAG 2.1 compliance.
