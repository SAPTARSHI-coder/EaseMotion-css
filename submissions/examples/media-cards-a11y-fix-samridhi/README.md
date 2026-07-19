# Accessible Media Cards — WCAG 2.1 AA Compliance

> A fully accessible enhancement to the media card component with semantic HTML, ARIA landmarks, and keyboard navigation support.

## 🎯 What This Fixes

The original media cards component lacked several critical accessibility features:

- ❌ Missing `alt` text on images
- ❌ No semantic HTML structure (`<figure>`, `<article>`)
- ❌ No keyboard focus indicators
- ❌ Hover animations triggered on touch devices (no touch support)
- ❌ Missing ARIA region labels for screen readers
- ❌ No `prefers-reduced-motion` support for accessibility preferences

## ✅ What This Submission Includes

### 1. **Semantic HTML Structure**
- Changed to `<article>` wrapper for each card
- Changed to `<figure>` for image containers (proper semantic grouping)
- Added proper `role="region"` to card deck container

### 2. **ARIA Labels & Descriptions**
```html
<div class="alm-card-deck" role="region" aria-label="Featured content cards">
```
Screen reader users now know this is a content region with a descriptive label.

### 3. **Descriptive Alt Text**
Every image now has meaningful, descriptive `alt` attributes:
```html
<img 
  alt="Modern Architecture View - Contemporary building exterior with geometric glass and steel design"
  src="..."
>
```

### 4. **Keyboard Navigation**
Added focus-visible outlines for keyboard users:
```css
.alm-media-card:focus-within {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}
```

### 5. **Touch-Friendly Interactions**
Hover animations now only trigger on devices that support hover:
```css
@media (hover: hover) and (pointer: fine) {
  .alm-media-card:hover .alm-card-media-frame img {
    transform: scale(1.05);
  }
}
```

### 6. **Reduced Motion Support**
Respects user's `prefers-reduced-motion` preference:
```css
@media (prefers-reduced-motion: reduce) {
  .alm-media-card:hover .alm-card-media-frame img {
    transform: none;
  }
}
```

## 📋 WCAG 2.1 Compliance Checklist

- ✅ **1.1.1 Non-text Content (Level A)** — All images have descriptive alt text
- ✅ **2.1.1 Keyboard (Level A)** — All functionality accessible via keyboard
- ✅ **2.4.7 Focus Visible (Level AA)** — Focus indicators clearly visible
- ✅ **4.1.3 Status Messages (Level AA)** — ARIA labels present and descriptive
- ✅ **2.3.3 Animation from Interactions (Level AAA)** — Respects prefers-reduced-motion

## 🧪 Testing Steps

1. **Keyboard Navigation:**
   - Tab through cards — you should see focus outlines
   - No hover effects on Tab navigation

2. **Screen Reader (NVDA/JAWS):**
   - All images are announced with alt text
   - "Featured content cards" region is announced
   - Card structure is semantic

3. **Touch Device:**
   - Tap cards — hover effects don't trigger
   - Animations are smooth and not triggered by touch

4. **Accessibility Settings:**
   - Enable "Reduce motion" in OS settings
   - Hover animations should be completely disabled

## 📁 Files Included

- `demo.html` — Fully accessible card demo with semantic HTML
- `style.css` — Enhanced styles with WCAG 2.1 AA compliance
- `README.md` — This file

## 🔗 Related Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN: ARIA Best Practices](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WebAIM: Alt Text](https://webaim.org/articles/alttext/)

---

**Contributor:** Samridhi  
**Date:** July 2026
