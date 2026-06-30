# Copy-Paste Code Snippets Library

Welcome to the **Copy-Paste Code Snippets Library**! This high-value documentation resource details 21 ready-to-use HTML/CSS code snippets for standard UI animation patterns using EaseMotion.

---

## 📋 Table of Contents

1. [Snippets Catalog Directory](#1-snippets-catalog-directory)
2. [Customizing Snippets via Variables Override](#2-customizing-snippets-via-variables-override)
3. [Contributing New Snippets](#3-contributing-new-snippets)

---

## 1. Snippets Catalog Directory

| Snippet Name                 | Category       | Core EaseMotion Classes                       | Visual Interaction Pattern                   |
| :--------------------------- | :------------- | :-------------------------------------------- | :------------------------------------------- |
| **Zoom Card Hover**          | Card Hover     | `.ease-zoom-in`, `.ease-duration-normal`      | Spring-like boundary scale on hover.         |
| **Tilt Left Hover**          | Card Hover     | `.ease-hover-tilt-left`                       | Slight counter-clockwise rotation shift.     |
| **Border Glow Hover**        | Card Hover     | `.ease-hover-border-glow`                     | Radiant purple shadow border outlines.       |
| **Flip 3D Card**             | Card Hover     | `.ease-flip-3d`                               | End-to-end Y-axis flip rotation.             |
| **Soft Lift Hover**          | Card Hover     | `.ease-hover-float`                           | Container translates upwards on hover.       |
| **Pop Card Hover**           | Card Hover     | `.ease-pop-in`                                | Tactile spring scale feedback.               |
| **Fade In Up List**          | Stagger List   | `.ease-fade-in-up`, `.ease-delay-stagger`     | List items rise from bottom sequentially.    |
| **Slide In Left List**       | Stagger List   | `.ease-slide-in-left`, `.ease-delay-stagger`  | Items slide horizontally in series.          |
| **Slide In Right List**      | Stagger List   | `.ease-slide-in-right`, `.ease-delay-stagger` | Items slide from right side in series.       |
| **Spring Scale List**        | Stagger List   | `.ease-scale-up`, `.ease-curve-spring`        | Items expand outwards sequentially.          |
| **Cascade Drop List**        | Stagger List   | `.ease-slide-in-down`, `.ease-delay-stagger`  | Items drop downwards sequentially.           |
| **Classic Pop Modal**        | Modals         | `.ease-pop-in`, `.ease-duration-normal`       | Scale pop centering dynamically in viewport. |
| **Slide Down Modal**         | Modals         | `.ease-slide-in-down`                         | Modal slides down from top screen bounds.    |
| **Elastic Scale Modal**      | Modals         | `.ease-scale-up`, `.ease-curve-elastic`       | Exaggerated spring attention modal pop.      |
| **Blur Entry Modal**         | Modals         | `.ease-fade-in`, `.ease-blur-in`              | Frosted backdrop filters transitions.        |
| **Slide In Top-Right Toast** | Toasts         | `.ease-slide-in-right`, `.ease-duration-fast` | Notification slide from top right corners.   |
| **Slide In Bottom-Right**    | Toasts         | `.ease-slide-in-up`, `.ease-duration-fast`    | Notification slide from bottom right.        |
| **Fade Bounce Toast**        | Toasts         | `.ease-fade-in`, `.ease-curve-spring`         | Fade in with bounce physics.                 |
| **Shimmer Card Loader**      | Loading States | `.ease-shimmer`                               | Sweeping shimmer placeholder loading card.   |
| **Spinner Rotate Loader**    | Loading States | `.ease-spin-loop`                             | Continuous radial loader loop.               |
| **Pulsing Dots Loader**      | Loading States | `.ease-pulse-dots`                            | Indeterminate bouncing loading dots.         |

---

## 2. Customizing Snippets via Variables Override

To tweak speeds or easing functions of any snippet, redefine variables within your parent wrapper class:

```css
/* Customizations stylesheet */
.custom-zoom-card {
  /* Override default animation speed */
  --ease-duration: 600ms;

  /* Apply spring curve */
  --ease-curve: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

```html
<!-- HTML implementation -->
<div class="custom-zoom-card ease-zoom-in">
  <h3>Customized Zoom Card</h3>
</div>
```

---

## 3. Contributing New Snippets

We welcome new snippet submissions! Please ensure your pull requests satisfy the following rules:

- Include valid HTML markup inside the code blocks.
- Document all EaseMotion utility classes used.
- Test responsiveness and accessibility indicators.
