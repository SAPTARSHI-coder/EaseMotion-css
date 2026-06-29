# Full SaaS Landing Page - Project Management (`ease-page-pm`)

A clean, modern SaaS landing page template optimized for project management tools, issue trackers, and productivity software (inspired by Linear and Notion). 

## 🚀 Features & EaseMotion Showcase

This template uses EaseMotion to implement standard SaaS UI patterns seamlessly without complex Javascript:

- **Sticky Shrink Navbar**: Uses an `IntersectionObserver` coupled with CSS transitions to shrink the navbar into a floating pill on scroll.
- **Hero Stagger Entrance**: Combines `.ease-slide-up` and `.delay-*` to elegantly cascade the header, text, button, and mockup on load.
- **Pure CSS Testimonial Carousel**: Uses the radio-button hack (`:checked ~`) to create an interactive carousel without any JavaScript state management. 
- **Pure CSS FAQ Accordion**: Uses the checkbox hack (`:checked +`) paired with max-height CSS transitions to create smooth expanding accordions.
- **Three-Step Workflow**: Utilizes directional sliding animations (`.ease-slide-left`, `.ease-slide-right`) to draw the eye across the 'How It Works' section.
- **Marquee Slider**: Infinite linear CSS animation for the "Trusted By" logo cloud.

## 🛠️ Usage

This demo is entirely self-contained. You can open `demo.html` directly in your browser. All required EaseMotion CSS classes have been defined at the top of the `style.css` file for immediate testing. 

If using this as a template for a real project, simply migrate the HTML structure into your application and ensure your global CSS bundle includes the `ease-*` utility classes.

## 🔗 Related Issue
Resolves Issue #14796
