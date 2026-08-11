# CSS Skew-Active Carousel for Marketing Landing Page Layouts

**Issue:** #50496

## Overview

A pure CSS animated **Skew-Active Carousel** designed for modern marketing landing pages.

Cards smoothly scale and skew on hover and keyboard focus, creating an engaging UI interaction without JavaScript.

---

## Features

- Pure HTML and CSS
- Responsive carousel layout
- Smooth skew animation
- Hover and focus interaction
- Keyboard accessible
- CSS custom properties
- No JavaScript dependency

---

## Usage

```html
<div class="skew-carousel">

    <article class="slide active">
        <h2>Campaigns</h2>
        <p>Create marketing campaigns.</p>
    </article>

</div>
```

---

## Customization

Update CSS variables:

```css
:root{

 --animation-time:.45s;

 --active-scale:1.08;

 --skew-angle:-8deg;

 --primary:#7c3aed;

}
```

---

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅


---

## Accessibility

- Keyboard focus support
- Semantic HTML structure
- Responsive design
- No JavaScript required


---

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing:

- Simple readable classes
- Animation-first design
- Lightweight CSS-only implementation
- Easy customization through variables


Created for **Issue #50496**