# ⚡ EaseMotion CSS - Enhanced Documentation Proposal

This document serves as an enhanced proposal for the root `README.md`. It introduces structured installation guides, comprehensive usage examples for animation classes, browser compatibility matrices, and clearer contribution guidelines.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/docs/assets/logo.svg" alt="EaseMotion CSS" width="500" />
  <h2>A zero-dependency, animation-first CSS framework.</h2>
</div>

## 📦 Installation Guide

We provide multiple ways to integrate EaseMotion CSS into your project, depending on your build system and preferences.

### Method 1: CDN (Fastest, Zero Build)
The quickest way to get started is to include our compiled CSS directly via jsDelivr CDN. Place this in the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css" />
```

### Method 2: NPM (For Modern Frameworks)
If you are using a bundler (Vite, Webpack) or a framework (React, Next.js, Vue), install via npm:

```bash
npm install easemotion-css
```
Then import it at the root of your application (e.g., `main.jsx` or `app.js`):
```javascript
import 'easemotion-css/easemotion.min.css';
```

---

## 🎨 Usage Examples (Core Animations)

EaseMotion provides dozens of utility classes. Just add them to your HTML elements.

### 1. Entrance Animations
Used to animate elements as they appear on the screen.
- `.ease-fade-in` - Soft opacity fade.
- `.ease-slide-up` - Slides up while fading in.
- `.ease-zoom-in` - Zooms in from 95% scale.

**Example:**
```html
<div class="ease-fade-in ease-slide-up">Hello World</div>
```

### 2. Hover Interactions
Used to provide feedback when a user interacts with an element.
- `.ease-hover-grow` - Slightly enlarges the element on hover.
- `.ease-hover-lift` - Lifts the element and adds a soft shadow.
- `.ease-hover-glow` - Adds a glowing border/shadow effect.

**Example:**
```html
<button class="ease-hover-lift">Submit</button>
```

### 3. Continuous (Looping) Animations
Used for loading states or drawing constant attention.
- `.ease-spin` - Infinite rotation.
- `.ease-pulse` - Infinite pulsing opacity/scale.
- `.ease-bounce` - Infinite vertical bouncing.

**Example:**
```html
<div class="ease-spin">Loading...</div>
```

---

## 🌐 Browser Compatibility

EaseMotion relies on modern CSS properties (Custom Properties, Flexbox, CSS Grid, Transforms). It works seamlessly on all modern evergreen browsers.

| Browser | Minimum Version | Animations | Custom Properties | Support Status |
|---------|-----------------|------------|-------------------|----------------|
| **Chrome** | 49+ | ✅ Yes | ✅ Yes | Fully Supported |
| **Firefox**| 31+ | ✅ Yes | ✅ Yes | Fully Supported |
| **Safari** | 9.1+| ✅ Yes | ✅ Yes | Fully Supported |
| **Edge**   | 15+ | ✅ Yes | ✅ Yes | Fully Supported |

*Note: Internet Explorer 11 and below are explicitly NOT supported.*

---

## 🤝 Contribution Guidelines

We welcome contributions! Due to high traffic, please follow these rules to ensure your PR gets merged smoothly:

1. **Check Issues First:** Make sure your idea isn't already being worked on. If you see an open issue, comment `/claim` to take it.
2. **Submissions Folder:** Do **not** edit files in `core/` or the root directory. All new components, demos, and docs must go inside `submissions/react/`, `submissions/examples/`, `submissions/scss/`, or `submissions/docs/`.
3. **Required Files:** A valid submission folder must contain `demo.html` (if applicable), `style.css`, and `README.md`.
4. **No External Libraries:** Use vanilla CSS and JavaScript (unless working in the React track).

For full details, read our official [CONTRIBUTING.md](../../../CONTRIBUTING.md).
