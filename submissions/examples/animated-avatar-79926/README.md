# Animated Avatar

A lightweight Animated Avatar component that enhances user profiles with subtle motion effects and smooth transitions. Built using pure HTML and CSS, it is easy to integrate into dashboards, social platforms, profile cards, and user interfaces.

## Features

- Smooth avatar animations
- Responsive design
- Pure HTML and CSS
- Lightweight and customizable
- Accessible implementation
- Modern UI appearance

---

## Basic Usage

### HTML

```html
<div class="animated-avatar">
  <img
    src="avatar.jpg"
    alt="User Avatar"
    class="avatar-image"
  />
</div>
```

### CSS

```css
.animated-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  animation: float 3s ease-in-out infinite;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
```

---

## Example

```html
<div class="profile-card">
  <div class="animated-avatar">
    <img src="avatar.jpg" alt="John Doe">
  </div>

  <h2>John Doe</h2>
  <p>Frontend Developer</p>
</div>
```

---

## Customization

### Change Avatar Size

```css
.animated-avatar {
  width: 160px;
  height: 160px;
}
```

### Adjust Animation Speed

```css
.animated-avatar {
  animation: float 5s ease-in-out infinite;
}
```

### Add Glow Effect

```css
.animated-avatar {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
}
```

---

## Accessibility Notes

- Always include meaningful `alt` text.
- Avoid excessive motion for accessibility-sensitive users.
- Maintain sufficient contrast around avatar elements.
- Consider respecting `prefers-reduced-motion`.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-avatar {
    animation: none;
  }
}
```

---

## Browser Support

| Browser | Supported |
|----------|-----------|
| Chrome | ✅ |
| Firefox | ✅ |
| Edge | ✅ |
| Safari | ✅ |

---

## Why it fits EaseMotion CSS

Animated Avatar aligns with EaseMotion CSS by providing smooth motion, reusable styling patterns, accessibility awareness, and lightweight implementation while remaining easy to customize and integrate into modern web interfaces.