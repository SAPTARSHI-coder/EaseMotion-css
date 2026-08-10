# CSS Fade-In Progress Bar

A modern, responsive progress bar component that beautifully fades in while expanding to its target width. Perfect for displaying metrics and system resources in dashboard layouts. Built purely with CSS and HTML.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript is needed. Dynamic fill widths are handled via inline CSS custom properties.
- **Fade-In Width Animation:** Utilizes a custom `@keyframes` animation (`em-fade-in-fill`) to seamlessly animate both the `width` and `opacity` properties simultaneously on load and on hover.
- **Responsive Grid:** Displayed within a CSS Grid layout (`auto-fit`, `minmax`) to ensure cards adapt perfectly to desktop, tablet, and mobile screens.
- **Accessible Design:** Implements `@media (prefers-reduced-motion: reduce)` to disable the expansion animation and card hover scaling, rendering the progress bar in its completed state instantly for users with motion sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. 

You can dynamically control the progress bar's fill percentage and color by adjusting the inline CSS variables on the `.em-progress-fill` element:

```html
<div class="em-progress-fill" style="--target-width: 75%; --fill-color: #3b82f6;"></div>
