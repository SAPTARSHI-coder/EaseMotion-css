# 🌊 Wave OTP Input

A modern, responsive **6-digit OTP (One-Time Password) Input Component** for **EaseMotion CSS**, featuring a smooth **wave/ripple animation** inspired by Health & Fitness UI patterns. Built with accessibility and responsiveness in mind, this component follows EaseMotion CSS animation conventions while remaining lightweight and easy to integrate.

> **GSSoC 2026 Contribution**  
> Pure CSS animation with optional minimal JavaScript for enhanced user interaction.

---

## ✨ Preview

The Wave OTP Input provides:

- 🌊 Ripple/Water-drop animation on focus
- 🔢 6-digit OTP input layout
- 📱 Fully responsive design
- ♿ Accessible keyboard navigation
- 🎨 EaseMotion CSS variables & keyframes
- ⚡ Lightweight and easy to customize

---

## 📂 Project Structure

```text
submissions/examples/wave-otp-input-<your-suffix>/
├── demo.html
├── style.css
└── README.md
```

---

# 🚀 Features

### 🌊 Wave Ripple Animation

Every OTP field displays a smooth ripple animation when focused, creating an engaging water-drop interaction inspired by modern Health & Fitness applications.

### 🔢 6-Digit OTP Layout

Designed around the standard **6-digit verification code**, making it suitable for authentication systems, banking apps, healthcare portals, and mobile verification workflows.

### 🎨 EaseMotion CSS Compatible

Built using EaseMotion conventions including:

- `--ease-*` CSS variables
- `ease-*` keyframe animations
- EaseMotion timing functions
- Reusable animation utilities

---

### ⌨️ Keyboard Friendly

Supports intuitive keyboard interactions including:

- Auto advance to next field
- Backspace navigation
- Paste support
- Numeric-only input
- Tab navigation

---

### ♿ Accessibility

Designed with accessibility in mind:

- ARIA labels for every input
- Screen-reader only labels
- Keyboard-first navigation
- Visible focus indicators
- Reduced motion support

---

### 📱 Responsive

Optimized for:

- Desktop
- Tablet
- Mobile devices

Input sizing and spacing automatically adapt across screen sizes.

---

### 🌙 Dark Mode

Includes automatic support for:

```css
prefers-color-scheme: dark
```

No additional configuration required.

---

### 🎯 Reduced Motion

Animations automatically respect:

```css
prefers-reduced-motion
```

ensuring an accessible experience for users sensitive to motion.

---

# 📸 Demo

Open

```
demo.html
```

inside your browser.

The demo includes:

- Interactive OTP component
- Ripple animation showcase
- Responsive layout
- Feature overview cards
- Form actions
- Accessibility examples

---

# 💻 Usage

Include the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

Add the OTP component

```html
<div class="otp-input-group">
    <input class="otp-input">
    <input class="otp-input">
    <input class="otp-input">
    <input class="otp-input">
    <input class="otp-input">
    <input class="otp-input">
</div>
```

---

# 🎨 Animation Details

This component uses EaseMotion animation conventions.

Included animations:

| Animation | Purpose |
|------------|----------|
| `ease-wave-ripple` | Water ripple effect |
| `ease-pulse-glow` | Focus glow animation |
| `ease-input-focus-wave` | Smooth focus transition |
| `ease-cascade-wave` | Component entrance animation |

---

# 🎛 CSS Variables

The component exposes reusable variables for customization.

```css
--ease-primary
--ease-primary-light
--ease-primary-dark

--ease-wave-primary
--ease-wave-secondary

--ease-duration-fast
--ease-duration-normal
--ease-duration-slow

--ease-easeOutExpo
--ease-easeOutQuad
--ease-easeInOutQuad
```

These variables make it easy to adapt the component to different themes while remaining consistent with EaseMotion CSS.

---

# 📱 Responsive Breakpoints

| Screen | Behavior |
|---------|----------|
| Desktop | Full-size inputs |
| Tablet (≤768px) | Compact spacing |
| Mobile (≤480px) | Smaller inputs and stacked buttons |

---

# ♿ Accessibility Features

- Semantic HTML
- ARIA labels
- Screen-reader support
- Keyboard navigation
- High-contrast focus state
- Reduced motion support
- Mobile-friendly touch targets

---

# ⚙ JavaScript

The visual animations are implemented entirely with **CSS**.

A small optional JavaScript enhancement is included only for improving user experience:

- Auto focus next input
- Backspace navigation
- Paste OTP
- Numeric validation
- Form submission example

The animation itself does **not** rely on JavaScript.

---

# 📋 Browser Support

- ✅ Chrome
- ✅ Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile Browsers

---

# 🧪 Tested On

- Desktop Chrome
- Firefox
- Microsoft Edge
- Android Chrome
- iOS Safari

---

# 📌 Contribution Details

**Issue:** Wave OTP Input

### Issue Status

- ✅ Already Claimed

### Component Specification

| Item | Value |
|------|-------|
| OTP Length | **6 Digits** |
| Animation Style | **Ripple / Water-drop Wave Effect** |
| Library | EaseMotion CSS |
| Difficulty | Intermediate |

---

# 💡 Design Inspiration

Inspired by modern **Health & Fitness** applications that emphasize fluid, calming interactions. The ripple animation mimics the appearance of a water drop spreading outward, providing immediate visual feedback while maintaining a clean and professional OTP input experience.

---

# 📄 Requirements Checklist

- ✅ Uses EaseMotion CSS variables
- ✅ Uses EaseMotion CSS keyframes
- ✅ Ripple / Wave animation
- ✅ Responsive layout
- ✅ Accessible markup
- ✅ 6-digit OTP component
- ✅ Live demo included
- ✅ README included
- ✅ Pure CSS animation
- ✅ Minimal JavaScript only for interaction enhancement

---

# 🤝 Contributing

Contributions and improvements are welcome. Feel free to enhance the component with additional animation variants while following the EaseMotion CSS design conventions.

---

## 📜 License

This component is contributed as part of **EaseMotion CSS** under the project's applicable open-source license.

---

### Created for **GirlScript Summer of Code 2026 (GSSoC '26)** 🚀