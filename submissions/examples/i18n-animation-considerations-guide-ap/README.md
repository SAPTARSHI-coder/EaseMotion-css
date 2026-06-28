# i18n Animation Considerations Guide

Welcome to the **i18n Animation Considerations Guide**! This comprehensive document details how to design, test, and write CSS animations for multilingual websites supporting Right-to-Left (RTL) reading flows (Arabic, Hebrew) and variable text widths.

---

## 📋 Table of Contents
1. [RTL Direction Reversal](#1-rtl-direction-reversal)
2. [Variable Text Lengths & Timing](#2-variable-text-lengths--timing)
3. [EaseMotion RTL Support Status](#3-easemotion-rtl-support-status)
4. [Implementation Blueprints](#4-implementation-blueprints)

---

## 1. RTL Direction Reversal

Slide animations that move horizontally (e.g., sliding off-canvas menus, toast slide entries) must respect the document direction. If left-to-right (LTR) slides leftwards, right-to-left (RTL) must slide rightwards.

### 1. Inverting translate values via selectors
Absolute `translateX()` properties do not swap direction automatically. To handle this, declare matching reverse keyframes for RTL configurations:

```css
/* LTR Setup */
[dir="ltr"] .ease-slide-in {
  animation-name: slideLtr;
}

/* RTL Setup */
[dir="rtl"] .ease-slide-in {
  animation-name: slideRtl; /* Inverted start translation values */
}

@keyframes slideLtr {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideRtl {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

---

## 2. Variable Text Lengths & Timing

Localized translations (like German, Russian, or Spanish) can be up to 40% longer than English text. If layout boundaries are fixed, text wraps or gets clipped.

### 1. Animating max-width instead of width
Avoid hardcoding width values (e.g., `width: 200px`) on animated containers. Instead, animate `max-width` to allow containers to expand fluidly according to the text length:

```css
.ease-expand-details {
  max-width: 150px;
  transition: max-width 0.4s ease;
}

.ease-expand-details:hover {
  max-width: 500px; /* Safe bounds that expand based on content */
}
```

---

## 3. EaseMotion RTL Support Status

EaseMotion CSS natively supports RTL environments out-of-the-box:
* **Logical Properties**: Animations leverage logical offsets (like `margin-inline-start`) instead of absolute properties (like `margin-left`).
* **Clean Fallbacks**: Direct selectors (e.g. `[dir="rtl"]`) swap horizontal translation paths automatically, eliminating the need for developer configuration.

---

## 4. Implementation Blueprints

### React i18n Conditional Rendering
```jsx
import { useTranslation } from 'react-i18n';

function LocalizedToast({ message }) {
  const { i18n } = useTranslation();
  const dir = i18n.dir(); // returns 'ltr' or 'rtl'

  return (
    <div 
      dir={dir} 
      className={`toast ease-slide-in ${dir === 'rtl' ? 'rtl-reverse' : ''}`}
    >
      <span>{message}</span>
    </div>
  );
}
```
