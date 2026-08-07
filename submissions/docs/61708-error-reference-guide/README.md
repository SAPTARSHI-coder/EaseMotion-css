# Error Reference Guide

This guide provides a centralized reference for common errors that developers may encounter while using EaseMotion CSS. Each error includes a description, possible causes, and recommended solutions to simplify troubleshooting.

---

# Common Errors

## 1. CSS File Not Loading

**Description**

Animations or styles are not applied to the page.

**Possible Causes**

- Incorrect file path
- Missing stylesheet
- Network loading issue

**Recommended Solution**

- Verify the stylesheet path.
- Ensure the CSS file exists.
- Check the browser's developer tools for failed requests.

---

## 2. Incorrect Stylesheet Import Order

**Description**

Animations behave unexpectedly or custom styles override framework styles.

**Possible Causes**

- Import sequence is incorrect.
- Multiple stylesheets conflict.

**Recommended Solution**

- Load EaseMotion CSS before custom overrides.
- Avoid importing duplicate stylesheets.

---

## 3. CDN Caching Issues

**Description**

Recent stylesheet changes are not visible.

**Possible Causes**

- Browser cache
- CDN cache

**Recommended Solution**

- Refresh the browser cache.
- Use cache invalidation or versioned assets.

---

## 4. Animations Not Working

**Description**

Animation classes are present but no animation is visible.

**Possible Causes**

- Missing animation class
- CSS not loaded
- Unsupported browser

**Recommended Solution**

- Confirm the stylesheet is loaded.
- Verify the animation class name.
- Test in a supported browser.

---

## 5. npm Installation Errors

**Description**

Installation fails or dependencies cannot be resolved.

**Possible Causes**

- Dependency conflicts
- Unsupported Node.js or npm version

**Recommended Solution**

- Verify Node.js and npm versions.
- Reinstall dependencies if necessary.

---

## 6. Framework Integration Issues

Supported frameworks include React, Next.js, Vue, Astro, and Svelte.

**Possible Causes**

- Incorrect global stylesheet import
- Project configuration issues

**Recommended Solution**

- Follow the framework integration guide.
- Import the stylesheet in the correct entry point.

---

## 7. Browser Compatibility Problems

**Description**

Animations work differently across browsers.

**Recommended Solution**

- Test using supported browsers.
- Keep browsers updated.

---

## 8. Missing Assets

**Description**

Resources such as fonts or images fail to load.

**Possible Causes**

- Incorrect file path
- Missing files

**Recommended Solution**

- Verify asset locations.
- Check relative and absolute paths.

---

# Best Practices

- Verify stylesheet imports.
- Keep dependencies updated.
- Test on multiple browsers.
- Review browser developer tools for errors.
- Follow the official project documentation.

---

## Summary

This Error Reference Guide helps developers quickly identify common issues, understand their causes, and apply recommended troubleshooting steps for a smoother development experience.