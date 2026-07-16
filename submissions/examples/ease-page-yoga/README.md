# Full Yoga Studio Landing Page (`ease-page-yoga`)

A highly polished, serene wellness landing page template demonstrating how slow, subtle CSS animations can create a calming user experience.

## 🚀 Features & EaseMotion Showcase

This landing page integrates multiple core `.ease-*` classes alongside an `IntersectionObserver` script to create a peaceful, unhurried scroll-triggered experience:

- **The "Breathe" Effect**: The hero section uses `.ease-breathe` on the background image. This utilizes a slow 8-second alternating `@keyframes` loop to slowly scale and brighten the image, mimicking a deep inhale and exhale.
- **Slow Entrances**: Utilizes modified `.ease-slide-up-slow` and `.ease-fade-in-slow` classes. Rather than standard 0.4s or 0.8s durations, these animations take 1.5 seconds to complete, establishing a relaxed, unhurried pace.
- **Soft Hover States**: Uses `.ease-hover-lift-soft` and `.ease-hover-scale-soft` which feature softer timing curves (`ease` rather than bouncy `cubic-bezier`) to ensure interactivity feels grounded and gentle.

## 🛠️ Usage

This demo is entirely self-contained. You can open `demo.html` directly in your browser. All required EaseMotion CSS classes have been defined at the top of the `style.css` file for immediate testing. 

If using this as a template for a real project, simply migrate the HTML structure into your application and ensure your global CSS bundle includes the `ease-*` utility classes.

## 🔗 Related Issue
Resolves Issue #14807
