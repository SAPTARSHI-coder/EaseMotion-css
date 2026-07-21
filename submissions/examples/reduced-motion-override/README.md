# Global Prefers-Reduced-Motion Override

**What does this do?**
This snippet forces all animations, transitions, and smooth scrolling to stop immediately for users who have enabled the "reduce motion" preference on their operating system.

**How is it used?**
It is a global CSS override that automatically applies when the user's OS is configured for reduced motion. It does not require any HTML classes.
```html
<!-- No specific HTML class is needed. Include the CSS globally. -->
```

**Why is it useful?**
As an animation-first CSS framework, EaseMotion provides beautiful effects, but these can cause discomfort or nausea for users with vestibular disorders. This global override seamlessly makes any site built with EaseMotion WCAG compliant and accessible to all users out of the box, fitting perfectly with the framework's inclusive philosophy.
