# 📱 Responsive Sidebar Component (EaseMotion CSS)

## 🚀 Overview

This contribution adds a **responsive sidebar layout** for mobile and desktop screens using EaseMotion CSS.

The goal is to fix the issue where the sidebar overlaps or hides the main content on smaller screens by introducing a **mobile-friendly collapsible sidebar with a hamburger menu**.

---

## 🐞 Problem

On mobile viewports (`< 768px`):

- Sidebar overlaps main content
- Content gets clipped on the right side
- Horizontal scrolling is required to read content
- Poor user experience on smaller devices

---

## ✅ Solution

This implementation provides:

- A **fixed sidebar** for desktop screens
- A **collapsible sidebar** for mobile devices
- A **hamburger toggle button** to open/close sidebar
- Proper spacing so main content remains fully visible

---

## 📂 Files Included

```
responsive-sidebar/
│── demo.html     # Demo implementation
│── style.css     # Custom responsive styles
│── README.md     # Documentation
```

---

## 🖥️ Demo Features

### 💻 Desktop View

- Sidebar is visible by default
- Main content is shifted using `margin-left`

### 📱 Mobile View

- Sidebar is hidden by default
- Accessible via hamburger menu
- No content overlap or clipping
- Smooth slide-in animation

---

## 🛠️ Implementation Details

### Sidebar Styling

- Uses `position: fixed` for layout
- Smooth transitions using `transform`

### Mobile Responsiveness

- Media query: `@media (max-width: 768px)`
- Sidebar hidden using `translateX(-100%)`
- Activated using `.active` class

### Toggle Functionality

- JavaScript toggles sidebar visibility
- Improves accessibility and usability

---

## 📸 How to Use

1. Include EaseMotion CSS:

```html
<link rel="stylesheet" href="../../easemotion.css" />
```

2. Add sidebar and content structure:

```html
<div class="sidebar"></div>
<div class="content"></div>
```

3. Include toggle button:

```html
<button class="menu-btn">☰</button>
```

---

## 🌟 Benefits

- Improves mobile user experience
- Prevents layout breakage
- Easy to integrate with existing EaseMotion utilities
- Lightweight and customizable

---

## 🔮 Future Improvements

- Add overlay background on mobile
- Add swipe gestures for sidebar
- Convert into reusable EaseMotion component

---

## 👩‍💻 Contributor

- **Shruti1420**

---

## 📌 Related Issue

Fixes: #900
