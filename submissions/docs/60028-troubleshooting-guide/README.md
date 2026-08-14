# Troubleshooting Guide

This guide helps users resolve common setup and runtime issues while using EaseMotion CSS.

---

## Common Issues

### 1. Stylesheet Not Loading

**Symptoms**
- Animations do not appear.
- CSS classes have no effect.

**Solution**
- Verify the stylesheet path.
- Ensure the CSS file is loaded before your custom styles.
- Check the browser's Developer Tools for 404 errors.

---

### 2. Incorrect Import Order

If custom styles are loaded before EaseMotion CSS, animation classes may not work as expected.

✅ Correct order

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="custom.css">
```

---

### 3. CDN Caching Issues

If you're using a CDN:

- Clear browser cache.
- Perform a hard refresh.
- Verify you're using the latest CDN version.

---

### 4. Animations Not Triggering

Possible reasons:

- Incorrect animation class name.
- Missing animation duration.
- Element hidden by another style.
- JavaScript removing the class.

---

### 5. Framework Integration Issues

For React, Vue, or Next.js:

- Import the stylesheet once.
- Avoid duplicate imports.
- Restart the development server after installation.

---

### 6. Browser Compatibility

Use the latest version of modern browsers.

If animations fail:

- Update your browser.
- Check Developer Console for CSS errors.

---

### 7. npm Build Errors

Try:

```bash
npm install
npm update
```

or reinstall dependencies.

---

## Quick Checklist

- ✔ CSS file loaded
- ✔ Correct class names
- ✔ Proper import order
- ✔ Browser cache cleared
- ✔ Latest package version
- ✔ Tested in another browser

---

Following these steps resolves most common EaseMotion CSS setup issues.