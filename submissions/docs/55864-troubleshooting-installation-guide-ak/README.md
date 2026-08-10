# Troubleshooting Common Installation & Setup Errors

## Overview

This guide helps users resolve common issues while installing and using EaseMotion CSS.

---

## 1. CSS Not Loading

### Problem
The styles are not applied after adding EaseMotion CSS.

### Solution
- Verify that the stylesheet URL is correct.
- Ensure the `<link>` tag is placed inside the `<head>` section.
- Refresh the browser using **Ctrl + Shift + R**.

Example:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css">
```

---

## 2. Animation Classes Not Working

### Problem
Animation classes such as `ease-fade-in` or `ease-slide-up` do not animate.

### Solution
- Check the class names for typos.
- Make sure `easemotion.min.css` is loaded correctly.

Example:

```html
<div class="ease-fade-in">
    Hello World
</div>
```

---

## 3. Scroll Reveal Not Working

### Problem
Elements with `ease-reveal` do not animate on scroll.

### Solution

Include the required script before the closing `</body>` tag.

```html
<script src="https://cdn.jsdelivr.net/npm/easemotion-css/core/reveal.js"></script>
```

---

## 4. SCSS Compilation Error

### Problem

SCSS files fail to compile.

### Solution

Install Sass:

```bash
npm install --save-dev sass
```

---

## 5. Incorrect Import Path

Import using:

```css
@import "easemotion-css/easemotion.min.css";
```

or

```javascript
import "easemotion-css/easemotion.min.css";
```

---

## 6. Browser Cache Issues

If recent changes are not visible:

- Hard refresh using **Ctrl + Shift + R**
- Clear browser cache if necessary.

---

## 7. Stylesheet Loading Order

Load variables before modular animation files when using modular imports.

---

## 8. npm Installation Issues

Install the package using:

```bash
npm install easemotion-css
```

If installation fails:

```bash
npm install
```

---

## Conclusion

Following these troubleshooting steps should resolve the most common installation and setup issues encountered while using EaseMotion CSS.