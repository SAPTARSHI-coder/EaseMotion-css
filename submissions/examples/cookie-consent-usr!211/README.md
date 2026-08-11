# Cookie Consent Banner Submission

## 1. What does this do?
It provides a modern, accessible cookie consent banner with smooth slide-up entrance animation, perfect for GDPR/CCPA compliance on websites.

## 2. How is it used?
Wrap your cookie consent content in the `.cookie-banner` class with `.cookie-content` inside. Use EaseMotion's `ease-slide-up` for entrance animation. Add Accept/Decline buttons and a close button for user interaction.

## 3. Why is it useful?
- Cookie banners are legally required in many regions (GDPR, CCPA) for data privacy compliance.
- Demonstrates smooth slide-up entrance animation from EaseMotion CSS.
- Fully accessible with ARIA attributes (`role="dialog"`, `aria-labelledby`, `aria-describedby`).
- Clean, modern design with gradient accents.
- Mobile-responsive with stacked layout on small screens.
- Includes `prefers-reduced-motion` support for accessibility.
- Maintainer can easily standardize this as `.ease-cookie-[YOUR_INITIALS]` in the core library.