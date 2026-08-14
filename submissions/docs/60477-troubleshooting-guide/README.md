# Troubleshooting Guide

This guide helps developers diagnose and fix common integration and runtime issues while using EaseMotion CSS.

## Quick Diagnostics

Before investigating a specific issue, verify the following:

- CSS file is correctly linked or imported.
- The latest version of EaseMotion CSS is installed.
- Browser cache has been cleared.
- Animation class names are spelled correctly.
- The browser supports modern CSS animations.

---

## Troubleshooting Table

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| Styles not loading | Wrong file path | Verify the CSS path and reload the page |
| Animations not working | Incorrect class name | Check the class name against the documentation |
| Import conflicts | Wrong stylesheet order | Load EaseMotion CSS before custom styles |
| CDN changes not visible | Browser cache | Perform a hard refresh or clear cache |
| Build errors | Incorrect npm installation | Reinstall dependencies and restart the dev server |
| Browser issues | Unsupported browser | Test on the latest Chrome, Firefox, Edge, or Safari |

---

## Framework Tips

### React
- Import the stylesheet once in your application entry file.

### Next.js
- Import global CSS only from the main application entry.

### Vue
- Verify the stylesheet is imported before component styles.

---

## Browser Debug Checklist

- Open Developer Tools.
- Check the Network tab for missing CSS files.
- Look for CSS errors in the Console.
- Verify that animation classes are applied to the element.

---

## Frequently Asked Questions

### Why are animations not visible?
Check whether the stylesheet is loaded and the correct animation class is applied.

### Why do changes not appear?
Clear the browser cache or perform a hard refresh.

### How can I verify installation?
Inspect the page and confirm that the EaseMotion CSS file is loaded successfully.

---

Following this guide should resolve most common integration and setup issues.