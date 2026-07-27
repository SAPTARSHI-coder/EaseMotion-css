# Animated Toast Notification

**What does this do?**
Provides a complete, responsive Toast Notification UI component designed to seamlessly integrate with EaseMotion entrance animations (specifically slide-ins).

**How is it used?**
Use JavaScript to dynamically construct the toast HTML and inject it into a fixed `.toast-container-ag`. Apply an animation class (like `.toast-slide-in-ag`) to the newly created toast element.
```javascript
const toast = document.createElement('div');
toast.className = 'toast-ag toast-success-ag toast-slide-in-ag';
// Add content...
document.getElementById('toast-container').appendChild(toast);
```

**Why is it useful?**
Toast notifications are essential for modern web applications. This provides a beautiful, lightweight, pure-CSS structural foundation (with Success, Error, and Info variants) that looks great and animates smoothly onto the screen without relying on heavy UI frameworks.