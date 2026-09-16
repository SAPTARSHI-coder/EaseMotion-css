# Common Integration Mistakes

This guide highlights common mistakes developers make while integrating EaseMotion CSS into their projects and provides practical solutions to avoid them.

---

## 1. Wrong Import Order

### Problem
Loading your custom stylesheet before EaseMotion CSS may override animation classes and prevent them from working correctly.

❌ Incorrect

```html
<link rel="stylesheet" href="custom.css">
<link rel="stylesheet" href="easemotion.css">
```

✅ Correct

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="custom.css">
```

---

## 2. Missing CSS File

### Problem
The EaseMotion CSS file is not linked or imported into the project.

### Solution

Make sure the stylesheet exists and the file path is correct.

```html
<link rel="stylesheet" href="easemotion.css">
```

---

## 3. Using Unsupported Browsers

### Problem
Older browsers may not fully support modern CSS animations.

### Solution

- Use the latest versions of Chrome, Firefox, Edge, or Safari.
- Keep your browser updated.
- Test animations across multiple browsers before deployment.

---

## 4. Duplicate Stylesheet Loading

### Problem
Including the same stylesheet multiple times can create conflicts or unexpected behavior.

❌ Incorrect

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="easemotion.css">
```

✅ Correct

Load the stylesheet only once.

---

## Best Practices

- Import EaseMotion CSS before your custom stylesheet.
- Load the stylesheet only once.
- Verify the CSS file path.
- Test animations after integration.
- Check browser compatibility.
- Clear browser cache after updating the library.

---

## Quick Checklist

- ✔ Correct import order
- ✔ CSS file linked correctly
- ✔ No duplicate stylesheet
- ✔ Supported browser
- ✔ Animations tested

Following these recommendations will help prevent the most common integration issues and ensure a smoother development experience.