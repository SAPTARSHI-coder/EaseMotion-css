# Magnetic Profile Card - Minimalist UI Component Example

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready CSS component for a **Magnetic Profile Card** inspired by **Minimalist** design patterns, displaying avatars, profile metadata bios, follow buttons, and metrics.

2. **How is it used?**  
   Copy the HTML structure from [demo.html](./demo.html) and link the styles from [style.css](./style.css) containing variables.
   
3. **Why is it useful?**  
   It delivers zero-JavaScript keyboard accessible hover states, card zoom transformations, and glowing outline animations.

---

## 🚀 Features

- **Magnetic Scaling Pull**: Elevates and zooms slightly on hover mimicking magnetic attraction curves.
- **Glassmorphism Backdrop**: Smooth overlay structures using modern HSL tailoring variables.
- **No JS Parallax Layer**: Layered transformations create a multi-depth feel natively in CSS.

---

## 📦 Usage

To import the profile card layout into your page, copy the HTML node structure below:

```html
<div class="magnetic-card">
  <div class="card-header-bar"></div>
  
  <div class="avatar-wrapper">
    <div class="avatar-glowing-ring"></div>
    <img src="avatar.jpg" alt="Avatar" class="profile-avatar">
  </div>

  <div class="profile-info">
    <h1 class="profile-name">User Name</h1>
    <p class="profile-title">Lead Architect</p>
    <p class="profile-bio">Bio description...</p>
  </div>

  <div class="profile-stats">
    <div class="stat-item">
      <span class="stat-value">12k</span>
      <span class="stat-label">Followers</span>
    </div>
  </div>

  <div class="card-actions">
    <button class="btn btn-primary">Follow</button>
  </div>
</div>
```

---

## 🎨 Custom Design variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--primary-accent` | `#6366f1` | Accent color for borders, highlights, and primary buttons. |
| `--primary-glow` | `rgba(99, 102, 241, 0.15)` | Pulsing overlay shadow color. |
| `--card-bg` | `#111827` | Card background color. |
| `--card-border` | `#1f2937` | Border outline color. |
